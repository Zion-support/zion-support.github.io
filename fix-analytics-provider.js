#!/usr/bin/env node
import fs from "fs"
// Read the AnalyticsProvider component
const content = fs.readFileSync(
  "/workspace/app/components/AnalyticsProvider.tsx",
  "utf8",
)
// Fix the malformed content
let fixed = content
// Fix 1: Fix malformed import statement
fixed = fixed.replace(
  /import React, { createContext, useContext, ReactNode }  from "react";interface AnalyticsContextType {/g,
  'import React, { createContext, useContext, ReactNode } from "react";\n\ninterface AnalyticsContextType {',
)
// Fix 2: Fix malformed interface properties
fixed = fixed.replace(
  /trackEvent="\(eventName: string", properties \?  : Record<string, any>\) => void/g,
  "  trackEvent: (eventName: string, properties?: Record<string, any>) => void",
)
// Fix 3: Fix malformed interface properties
fixed = fixed.replace(
  /trackPageView="\(pageName="string\)" => void;/g,
  "  trackPageView: (pageName: string) => void;",
)
// Fix 4: Fix malformed interface properties
fixed = fixed.replace(/children="ReactNode;/g, "  children: ReactNode;")
// Fix 5: Fix malformed JSX attributes
fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"')
// Fix 6: Fix malformed object properties
fixed = fixed.replace(/(\w+)=([^,}]+),/g, "$1: $2,")
fixed = fixed.replace(/(\w+)=([^,}]+)}/g, "$1: $2}")
// Fix 7: Fix missing quotes in object properties
fixed = fixed.replace(/(\w+):\s*([^"',}]+),/g, '$1: "$2",')
fixed = fixed.replace(/(\w+):\s*([^"',}]+)}/g, '$1: "$2"}')
// Fix 8: Clean up extra quotes and malformed strings
fixed = fixed.replace(/"\s*"/g, '"')
fixed = fixed.replace(/""/g, '"')
// Write the fixed content back
fs.writeFileSync(
  "/workspace/app/components/AnalyticsProvider.tsx",
  fixed,
  "utf8",
)
console.log("Fixed AnalyticsProvider.tsx")