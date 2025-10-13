const fs = require("fs");
const path = require("path");

const pages = [
  "5g-iot-solutions",
  "5g-mobile-applications",
  "5g-network-infrastructure",
  "5g-private-networks",
  "5g-smart-city-solutions",
  "5g-solutions",
];

const functionNameMap = {
  "5g-iot-solutions": "FiveGIotSolutionsPage",
  "5g-mobile-applications": "FiveGMobileApplicationsPage",
  "5g-network-infrastructure": "FiveGNetworkInfrastructurePage",
  "5g-private-networks": "FiveGPrivateNetworksPage",
  "5g-smart-city-solutions": "FiveGSmartCitySolutionsPage",
  "5g-solutions": "FiveGSolutionsPage",
};

pages.forEach((page) => {
  const filePath = path.join(__dirname, "app", page, "page.tsx");
  let content = fs.readFileSync(filePath, "utf8");

  // Replace function name that starts with number
  const oldFunctionName =
    page
      .split("-")
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
      .join("") + "Page";

  const newFunctionName = functionNameMap[page];

  content = content.replace(
    new RegExp(`export default function ${oldFunctionName}\\(\\)`),
    `export default function ${newFunctionName}()`,
  );

  fs.writeFileSync(filePath, content);
  console.log(`Fixed function name in ${page}/page.tsx`);
});
