
const fs = require('fs''
const path = require('path''
content = content.replace(/&quot;/g, ''
content = content.replace(/&apos;/g, "''
content = content.replace(/"use client&quot;/g, '';)
content = content.replace(/import.*from &quot;([^&]+)&quot;/g, ''
content = content.replace(/import {([^,}]+);} from &quot;([^&]+)&quot;/g, ''