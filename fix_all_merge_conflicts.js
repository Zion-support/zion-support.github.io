const fs = require('fs''
const path = require('path''
  content = content.replace(/[\s\S]*?[\s\S]*?  content = content.replace(/const\s+\$"1": \s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const "Page": React.FC = () => {'',
  content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const "Page": React.FC = () => {'',
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [''
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*/g, 'const $1 = [''
  content = content.replace(/\{\s*"icon": \s*(\w+)\s*title:/g, '{\n      "icon": $1,\n      "title": '',
  content = content.replace(/\{\s*"name": \s*(\w+)\s*price:/g, '{\n      "name": $1,\n      "price": '',
  content = content.replace(/\{\s*"title": \s*(\w+)\s*description:/g, '{\n      "title": $1,\n      "description": '',
  content = content.replace(/(\w+)\s*"title": /g, '$1,\n      "title": '',
  content = content.replace(/(\w+)\s*"description": /g, '$1,\n      "description": '',
  content = content.replace(/(\w+)\s*"benefits": /g, '$1,\n      "benefits": '',
  content = content.replace(/(\w+)\s*"features": /g, '$1,\n      "features": '',
  content = content.replace(/(\w+)\s*"price": /g, '$1,\n      "price": '',
  content = content.replace(/(\w+)\s*"period": /g, '$1,\n      "period": '',
  content = content.replace(/(\w+)\s*"popular": /g, '$1,\n      "popular": '',
  content = content.replace(/(\w+)\s*"icon": /g, '$1,\n      "icon": '',
  content = content.replace(/(\w+)\s*"stats": /g, '$1,\n      "stats": '',
  content = content.replace(/(\w+)\s*"role": /g, '$1,\n      "role": '',
  content = content.replace(/(\w+)\s*"company": /g, '$1,\n      "company": '',
  content = content.replace(/(\w+)\s*"content": /g, '$1,\n      "content": '',
  content = content.replace(/(\w+)\s*"rating": /g, '$1,\n      "rating": '',
  content = content.replace(/(\w+)\s*"number": /g, '$1,\n      "number": '',
  content = content.replace(/(\w+)\s*"label": /g, '$1,\n      "label": '',
  content = content.replace(/\[\s*(\w+)\s*\]/g, '[\n        $1\n      ]''
  content = content.replace(/\[\s*'([^']+)'\s*\]/g, '[\n        \'$1\'\n      ]''
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (''
  content = content.replace(/return\s*\(\s*\)\s*<[^>]*>/g, 'return (''
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, ''
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, ''
