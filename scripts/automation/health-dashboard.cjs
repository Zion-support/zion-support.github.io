#!/usr/bin/env node
/**
 * Real-time Health Dashboard;
 * Comprehensive monitoring dashboard for PM2 processes;
 */


const pm2 = require('pm2')

const fs = require('fs')
const path = require('path')
const http = require('http')
const { execSync } = require('child_process')


