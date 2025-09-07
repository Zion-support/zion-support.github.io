<<<<<<< HEAD
const fs = require("fs")""
const path = require("path")""
    const appContent = await fs.readFile("src/App.tsx", "utf8")""
    const routeMatches = appContent.match(/path=")""
      ? routeMatches.map(match => match.replace("path= ").replace(", ")""
    const pagesDir = "src/pages"""
// console.log("=== ROUTES FROM APP.TSX ===")""
    console.log("\n=== EXISTING PAGE FILES ===")""
const fs = require("fs").promises;const path = require("path")"""
    const appContent = await fs.readFile("src/App.tsx", "utf8");"""
    const routeMatches = appContent.match(/path="([^"]+)/g);    const routes = routeMatches;";      ? routeMatches.map(match => match.replace("path=" "").replace("", ""))"""
// console.log("=== ROUTES FROM APP.TSX ===")""
      if (route === "/" || route === "*")""
      const routeName = route.replace("/", ").replace("-", ")""
          page.includes(route.replace("/", ")""
// console.log("\n=== MISSING PAGES ===")""
      console.log("No missing pages found!")""
    console.log("\n=== RECOMMENDATIONS ===")""
          .replace("/", ")""
          .replace(/-/g, " ")""
          .replace(/\s+/g, ")""
=======
const fs = require("fs")
const path = require("path")
    const appContent = await fs.readFile("src/App.tsx", "utf8")
    const routeMatches = appContent.match(/path=")
      ? routeMatches.map(match => match.replace("path= ").replace(", ")
    const pagesDir = "src/pages"
// console.log("=== ROUTES FROM APP.TSX ===")
    console.log("\n=== EXISTING PAGE FILES ===")
const fs = require("fs").promises;const path = require("path")"
    const appContent = await fs.readFile("src/App.tsx", "utf8");"
    const routeMatches = appContent.match(/path="([^"]+)/g);    const routes = routeMatches;";      ? routeMatches.map(match => match.replace("path=" ).replace(, ))"
    const pagesDir = "src/pages"
// console.log("=== ROUTES FROM APP.TSX ===")
    console.log("\n=== EXISTING PAGE FILES ===")
      if (route === "/" || route === "*")
      const routeName = route.replace("/", ").replace("-", ")
          page.includes(route.replace("/", ")
// console.log("\n=== MISSING PAGES ===")
      console.log("No missing pages found!")
    console.log("\n=== RECOMMENDATIONS ===")
          .replace("/", ")
          .replace(/-/g, " ")
          .replace(/\s+/g, ")
<<<<<<< HEAD


        console.log(  - Create src/pages/${pageName}Page.tsx for route ${page}")
    console.error("Error identifying missing "pages")

=======
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
