#!/usr/bin/env node
// automation/e2e-telegram-alert.js
// Simple Telegram alert sender for E2E test results

const fetch = require('node-fetch');

const [, , status, successRate] = process.argv;
const botToken = process.env.TELEGRAM_BOT_TOKEN || '';
const chatId = process.env.TELEGRAM_CHAT_ID || '';

if (!botToken || !chatId) {
  console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
  process.exit(1);
}

const message = status === 'success'
  ? `✅ *E2E Tests Passed*\nSuccess rate: ${successRate}%`
  : `❌ *E2E Tests Failed*\nSuccess rate: ${successRate}% (minimum 95%)`;

const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown'
  })
})
  .then(res => {
    if (!res.ok) {
      console.error('Telegram error:', res.status, res.statusText);
    } else {
      console.log('Telegram alert sent');
    }
  })
  .catch(err => {
    console.error('Failed to send Telegram alert:', err);
  });