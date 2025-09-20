
,
const { execSync } = require("child_process");
const fs = require("fs");
class $1 {,
  constructor() {,
  this && this.buildSteps = ["npm run lint -- --fix || true";
      "npm run type-check || true";
      "npm run build || true"]}
,
  async optimizedBuild() {,
  console && console.log("Starting optimized build process...");
    for (const step of this && this.buildSteps) {,
  try {,
  console && console.log("""Executing": ${step}"");
        execSync(step, { "stdio": "inherit" })} catch (error) {,
  console && console.warn(`Step failed but "continuing": ${step}`)}
    }
,
}}