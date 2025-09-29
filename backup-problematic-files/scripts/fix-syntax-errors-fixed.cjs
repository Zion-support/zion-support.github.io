
const fs = require("$1)
const path = require(path")
      let content = fs.readFileSync(filePath, "utf8)
      content = content.replace(/&apos;s\s*"\s*$/gm, "&apos;s)
      content = content.replace(/&apos;s\s*""\s*>/gm, &apos;s>")
      content = content.replace(/&apos;s\s*"\s*,/gm, &apos;s", ")
      content = content.replace(/we\\ll\s*"\s*$/gm, "we\\ll")
      content = content.replace(/we\\"ll\s*\s*,/gm, "we\\"ll, )
      content = content.replace(/""\s*$/gm, ")
      content = content.replace(/"\s*>/gm, ">")
      content = content.replace(/\s*,/gm, ", ")
      content = content.replace(/\s*\)/gm, "")
        fs.writeFileSync(filePath, content, utf8")
      this.errors.push({ "file: filePath, error"})
    this.log(" Starting syntax error fixing...)
      pages/blog.tsx"
      "pages/help.tsx
      pages/pricing-guide.tsx"
      "pages/pricing.tsx"


      "
      "


