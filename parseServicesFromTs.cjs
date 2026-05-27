#!/usr/bin/env node
/**
 * parseServicesFromTs.cjs
 * Parse servicesData.ts to extract service objects and generate service-index.json
 */
const fs = require('fs');
const path = require('path');

const DAT  = path.resolve(path.join(__dirname, 'app', 'data', 'servicesData.ts'));
const OUT  = path.resolve(path.join(__dirname, 'out', 'service-index.json'));

const ID_RE   = /id:\s*'([^']+)'/g;
const TITLE_RE= /title:\s*'([^']+)'/;
const DESC_RE = /description:\s*'([^']+)'/;
const CAT_RE  = /category:\s*'(\w+)'/;
const BAS_RE  = /'basic':\s*'([^']*)'/;
const PRO_RE  = /'pro':\s*'([^']*)'/;
const ENT_RE  = /'enterprise':\s*'([^']*)'/;
const POP_RE  = /popular:\s*(true|false)/;
const FEAT_RE = /features:\s*\[([^\]]*)\]/s;
const BENE_RE = /benefits:\s*\[([^\]]*)\]/s;

function main() {
    let content = fs.readFileSync(DAT, 'utf8');
    let services = [];
    let n = content.length;

    // Find all id: matches
    let match;
    while ((match = ID_RE.exec(content)) !== null) {
        const sid = match[1];
        const idStart = match.index;

        // Find the start of the object (the { before the id)
        let start = content.lastIndexOf('{', Math.max(0, idStart - 5), idStart + 1);
        if (start < 0) start = idStart;

        // Walk forward to find the matching }
        let depth = 0;
        let end = idStart;
        let inStr = false;
        let strChar = null;
        for (let i = start; i < Math.min(n, start + 8000); i++) {
            const c = content[i];
            if (inStr) {
                if (c === '\\\\') { i++; continue; }
                if (c === strChar) inStr = false;
            } else {
                if (c === "'" || c === '"') { inStr = true; strChar = c; }
                else if (c === '{') depth++;
                else if (c === '}') {
                    depth--;
                    if (depth === 0) { end = i + 1; break; }
                }
            }
        }
        if (depth !== 0) continue; // couldn't find closing brace

        const block = content.slice(start, end);

        // Extract fields
        const titleMatch = TITLE_RE.exec(block);
        const descMatch  = DESC_RE.exec(block);
        const catMatch   = CAT_RE.exec(block);
        if (!catMatch) continue;

        let features = [], benefits = [];
        const featMatch = FEAT_RE.exec(block);
        if (featMatch) {
            const featStr = featMatch[1];
            const featItems = featStr.match(/'[^']*'/g) || [];
            features = featItems.map(item => item.slice(1, -1));
        }
        const beneMatch = BENE_RE.exec(block);
        if (beneMatch) {
            const beneStr = beneMatch[1];
            const beneItems = beneStr.match(/'[^']*'/g) || [];
            benefits = beneItems.map(item => item.slice(1, -1));
        }

        const basicMatch = BAS_RE.exec(block);
        const proMatch   = PRO_RE.exec(block);
        const entMatch   = ENT_RE.exec(block);
        const popMatch   = POP_RE.exec(block);

        services.push({
            id: sid,
            title: titleMatch ? titleMatch[1].replace(/'/g, '') : sid.replace(/-/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
            description: descMatch ? descMatch[1] : '',
            category: catMatch[1],
            features,
            benefits,
            basic: basicMatch ? basicMatch[1] : '',
            pro: proMatch ? proMatch[1] : '',
            enterprise: entMatch ? entMatch[1] : '',
            popular: popMatch ? popMatch[1] === 'true' : false
        });
    }

    // Deduplicate by id
    const seen = {};
    const uniq = [];
    for (const s of services) {
        if (!seen[s.id]) {
            seen[s.id] = true;
            uniq.push(s);
        }
    }

    // Group by category
    const byCat = {};
    for (const s of uniq) {
        byCat[s.category] = (byCat[s.category] || 0) + 1;
    }

    const index = {
        generated: new Date().toISOString(),
        count: uniq.length,
        categories: Object.assign({}, ...Object.keys(byCat).sort().map(k => ({ [k]: byCat[k] }))),
        services: uniq.sort((a, b) => a.id.localeCompare(b.id))
    };

    // Ensure output directory exists
    const outDir = path.dirname(OUT);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(OUT, JSON.stringify(index, null, 2));
    console.log(`Parsed ${uniq.length} unique services from servicesData.ts`);
    console.log(`Categories: ${JSON.stringify(byCat)}`);
}

main();