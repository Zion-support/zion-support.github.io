const path = require('path');
const { spawnSync } = require('child_process');

  function extractLinksFromContent(content) {
    const links = new Set();
    const hrefRegex = /href\s*=\s*"(\/[^"#\?\s]+)"/g;
    const linkCompRegex = /<Link\s+href=\{?"(\/[^"#\?\s]+)"\}?/g;
    let m;
    while ((m = hrefRegex.exec(content)) !== null) links.add(m[1]);
    while ((m = linkCompRegex.exec(content)) !== null) links.add(m[1]);
    return Array.from(links);
  }

  function buildGraph(rootDir) {
    const sourceRoots = [path.join(rootDir, 'pages'), path.join(rootDir, 'docs')];
    const patterns = [/\.tsx?$/, /\.jsx?$/, /\.mdx?$/];
    const nodes = new Set();
    const edges = [];

    for (const srcRoot of sourceRoots) {
      const files = walkFiles(srcRoot, patterns);
      for (const file of files) {
        let content = '';
        try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
        const rel = path.relative(rootDir, file);
        nodes.add(rel);
        const links = extractLinksFromContent(content).filter(l => l.startsWith('/'));
        for (const l of links) {
          edges.push({ from: rel, to: l });
        }
      }
    }

    const stats = {
      nodeCount: nodes.size,
      edgeCount: edges.length,
      topTargets: Object.entries(edges.reduce((m,e)=>{m[e.to]=(m[e.to]||0)+1;return m;},{}))
        .sort((a,b)=>b[1]-a[1]).slice(0,20).map(([target,count])=>({ target, count }))
    };

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};
