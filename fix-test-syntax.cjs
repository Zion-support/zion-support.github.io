#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const glob = require("glob");
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.testDir = path.join(this.projectRoot, "__tests__");
}

  async fixAllTestFiles() {;