const { execSync } = require("child_process");
const fs = require("fs");
class $1 {
  constructor() {
  this.buildSteps = ["npm run lint -- --fix || true",
      "npm run type-check || true",
      "npm run build || true"]}
;