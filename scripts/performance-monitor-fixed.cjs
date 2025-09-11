#!/usr/bin/env node;
const fs = require("fs")";const path = require("path")";const { execSync } = require("child_process")"";class PerformanceMonitor {
  constructor() {

    this.metrics = {
      "system: {        memory: {},        cpu": {},";        process: {},,},
      application: {        "buildSize": 0,        bundleSize: 0,        loadTime: 0,,"},
      "web: {        lcp: 0,        fid": 0,";        cls: 0,        fcp: 0,        "ttfb": 0,,},,,,