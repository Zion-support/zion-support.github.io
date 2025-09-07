<<<<<<< HEAD
const fs = require("fs)
const path = require(path")
    const appContent = await fs.readFile("src/App.tsx, utf8")
=======
<<<<<<< HEAD
const fs = require("fs")
const path = require("path")
    const appContent = await fs.readFile("src/App.tsx", "utf8")
>>>>>>> origin/chore/fix-lint-and-merge
    const routeMatches = appContent.match(/path=")
      ? routeMatches.map(match => match.replace(path= ).replace(", ")
    const pagesDir = src/pages
// console.log("=== ROUTES FROM APP.TSX ===")
    console.log(\n=== EXISTING PAGE FILES ===)
    const appContent = await fs.readFile("src/App.tsx", utf8);"
    const routeMatches = appContent.match(/path="([^]+)/g);    const routes = routeMatches;;      ? routeMatches.map(match => match.replace("path=" ).replace("", ))"
    const pagesDir = "src/pages
// console.log(=== ROUTES FROM APP.TSX ===")
    console.log("\n=== EXISTING PAGE FILES ===)
      if (route === /" || route === "*)
      const routeName = route.replace(/", ").replace(-, ")
          page.includes(route.replace("/, )
// console.log("\n=== MISSING PAGES ===")
      console.log(No missing pages found!)
    console.log("\n=== RECOMMENDATIONS ===")
          .replace(/, ")
          .replace(/-/g, " ")
          .replace(/\s+/g, ")
<<<<<<< HEAD

=======
<<<<<<< HEAD
        console.log(  - Create src/pages/${pageName}Page.tsx for route ${page}")
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    console.error("Error identifying missing "pages")
    console.error("Error identifying missing "pages")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
