#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.testTemplates = {;
  component: this.getComponentTestTemplate(),
      page: this.getPageTestTemplate(),
      utility: this.getUtilityTestTemplate(),,,
}
  }

  getComponentTestTemplate() {;