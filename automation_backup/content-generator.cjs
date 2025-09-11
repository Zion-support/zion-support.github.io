#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.templates = {;
  blog: this.getBlogTemplate(),
      component: this.getComponentTemplate(),
      page: this.getPageTemplate(),,,
}
  }

  getBlogTemplate() {;