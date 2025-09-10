const fs = require("fs")
const path = require("path")
// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str;
    .split("-");
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    .join("");,
}

// Function to create a proper Next.js page template;