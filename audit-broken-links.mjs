import fs from "fs";
import path from "path";
const root = process.cwd();
const pages = new Set();
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory() && !["node_modules", ".next", ".git"].includes(e.name))
      walk(f);
    else if (e.name === "page.tsx")
      pages.add(
        "/" +
          path.relative(root, f)
            .split(path.sep)
            .join("/")
            .replace(/\/page\.tsx$/, "")
      );
    else if (e.name === "layout.tsx")
      pages.add(
        "/" +
          path.relative(root, f)
            .split(path.sep)
            .join("/")
            .replace(/\/layout\.tsx$/, "")
      );
  }
}
walk(path.join(root, "app"));
const norm = (h) => (h || "").split("?")[0].split("#")[0].replace(/\\/g, "/").replace(/\/+$/, "");
const links = [];
function walk2(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory() && !["node_modules", ".next", ".git"].includes(e.name))
      walk2(f);
    else if (/\.(tsx?|jsx?)$/.test(e.name)) {
      const t = fs.readFileSync(f, "utf8");
      const re = /href=["'](\/[^"']+)["']/g;
      let m;
      while ((m = re.exec(t))) links.push({ file: path.relative(root, f), href: m[1] });
    }
  }
}
walk2(root);
const missing = links.filter((l) => norm(l.href).length > 1 && !pages.has(norm(l.href)));
const byFile = {};
missing.forEach((l) => {
  byFile[l.file] = byFile[l.file] || [];
  byFile[l.file].push(l.href);
});
console.log(JSON.stringify(byFile, null, 2));
