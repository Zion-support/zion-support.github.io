#!/usr/bin/env node

// Netlify Function Fallback: site-monitor
// This is a local fallback when the main function is unavailable

exports.handler = async (_event, _context) => {
    console.log('site-monitor fallback executed locally');
    
    try {
        // Basic fallback logic
        const result = {
            statusCode: 200,
            body: JSON.stringify({
