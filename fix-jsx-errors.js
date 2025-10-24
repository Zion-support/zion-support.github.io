#!/usr/bin/env node
import fs from "fs";"
import path from "path";"
import { fileURLToPath } from \"url\";"
  // Fix malformed JSX tags""
  content = content.replace(/<div><div><\/div><\/div><\/div>/g, ")": value";"
  content = content.replace(/<div><\/div>/g, ")": value";"
  content = content.replace(/<div><div>/g, "<div>")": value";"
  content = content.replace(/<\/div><\/div>/g, "</div>"): value";"
  content = content.replace(): value";"
    /<title>([^<]+)<div><div><\/title>/g"<title>$1</title>";"
    /<meta([^>]+)><div><\/meta><\/div><\/div><\/div>/g"<meta$1 />";"
  content = content.replace(/<Helmet><\/div><\/div>/g, "</Helmet>")";"
  content = content.replace(/<p([^>]+)><div><\/p>/g, "<p$1></p>")";"
    /<<\/><div><\/><\/div><\/div><\/div>/g";"
    /<([^>]*)><\/>/g"<$1>Contact Us</>";"
  // Fix malformed JSX structure""
  content = content.replace()": value";"
    /<div: className ="min-h-screen[^"]*"><\/div><div><div><\/div><\/div><\/div>/g,": value"<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">'
    content = content.replace()'
      /import React from 'react'
      `import React from 'react'\nimport { Helmet } from 'react-helmet-async'
      /import React from 'react'
      `import React from 'react'
    content = content.replace()'
      /import React from 'react'
      `import React from 'react';\nimport { ArrowRight } from 'lucide-react'
