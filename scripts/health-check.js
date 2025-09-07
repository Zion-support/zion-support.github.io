#!/usr/bin/env node
import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, (res) => {
  console.log(`✅ Health check passed: ${res.statusCode}`);
  process.exit(0);
});

req.on('error', (error) => {
  console.error(`❌ Health check failed: ${error.message}`);
  process.exit(1);
});

req.on('timeout', () => {
  console.error('❌ Health check timed out');
  process.exit(1);
});

req.end();
