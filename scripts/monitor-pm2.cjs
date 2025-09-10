#!/usr/bin/env node;
/**
 * PM2 Monitoring Dashboard for Zion Application;
 * Provides real-time monitoring of all PM2 processes;
 */;
const { exec } = require("fs")
const fs = require("fs")
const path = require("path")
class PM2Monitor {
  constructor() {
    this.logsDir = "./logs";
    this.interval = 5000; // 5 seconds;
  // Get PM2 status;
  // Get system information;