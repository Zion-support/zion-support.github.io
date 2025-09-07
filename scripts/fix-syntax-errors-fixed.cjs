

<<<<<<< HEAD
#!/usr/bin/env node;

=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
const fs = require("$1")
const path = require("path")
      let content = fs.readFileSync(filePath, "utf8")
      content = content.replace(/&apos;s\s*\s*$/gm, "&apos;s)
      content = content.replace(/&apos;s\s*\s*>/gm, "&apos;s">")
      content = content.replace(/&apos;s\s*\s*,/gm, "&apos;s", ")
      content = content.replace(/we\\"ll\s*\s*$/gm, "we\\"ll)
      content = content.replace(/we\\"ll\s*\s*,/gm, "we\\"ll", ")
      content = content.replace(/\s*$/gm, ")
      content = content.replace(/\s*>/gm, >")
      content = content.replace(/\s*,/gm, ", ")
      content = content.replace(/\s*\)/gm, )"
        fs.writeFileSync(filePath, content, "utf8")
      this.errors.push({ "file": filePath, "error"})
    this.log(" Starting syntax error fixing...")
      "pages/blog.tsx"
      "pages/help.tsx"
      "pages/pricing-guide.tsx"
<<<<<<< HEAD
      "pages/pricing.tsx"


      "

=======
      "pages/pricing.tsx"
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
