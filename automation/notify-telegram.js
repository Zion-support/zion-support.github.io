#!/usr/bin/env node
// automation/notify-telegram.js
// Flexible Telegram notifier for build size optimizer events
//
// Usage:
//   node notify-telegram.js <BOT_TOKEN> <CHAT_ID> "<message text>"
//   node notify-telegram.js <BOT_TOKEN> <CHAT_ID> @<filepath>  (reads message from file)
//
// Supports Markdown formatting.

const fs = require('fs');
const https = require('https');
const path = require('path');

const token = process.argv[2];
const chatId = process.argv[3];
const rawMsg = process.argv[4];

if (!token || !chatId || !rawMsg) {
  console.error('Usage: node notify-telegram.js <BOT_TOKEN> <CHAT_ID> "<message>" | @<file>');
  process.exit(1);
}

// Read message from file if starts with @
let message;
if (rawMsg.startsWith('@')) {
  const filePath = rawMsg.slice(1);
  try {
    message = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    console.error('Failed to read message file:', e.message);
    process.exit(1);
  }
} else {
  message = rawMsg;
}

// Escape Markdown special characters lightly
function escapeMarkdown(text) {
  return text.replace(/([_*[\]()`~>#+-=|{}.!])/g, '\\$1');
}

const payload = new URLSearchParams({
  chat_id: chatId,
  text: message,
  parse_mode: 'Markdown',
});

const options = {
  hostname: 'api.telegram.org',
  path: `/bot${token}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => (body += d));
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Telegram notification sent');
    } else {
      console.error('❌ Telegram error:', res.statusCode, body);
    }
  });
});

req.on('error', (e) => console.error('Request error:', e));
req.write(payload);
req.end();
