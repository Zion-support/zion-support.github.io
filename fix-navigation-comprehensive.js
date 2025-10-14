import React from 'react'
#!/usr/bin/env node;
import fs from "fs"
// Read the Navigation component;
const content = fs.readFileSync("
  "/workspace/app/components/Navigation.tsx","
  "utf8",)
)
// Fix the malformed JSX attributes
let fixed = content
// Fix JSX attributes with colons instead of equals"
fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"')"
fixed = fixed.replace(/(\w+):\s*'([^']*)'/g, "$1='$2'")
// Fix JSX attributes with quotes around JavaScript expressions"
fixed = fixed.replace(/key="\{([^}]+)\}"/g, "key={$1}")"
fixed = fixed.replace(/to="\{([^}]+)\}"/g, "to={$1}")"
fixed = fixed.replace(/className="\{([^}]+)\}"/g, "className={$1}")"
fixed = fixed.replace(/onClick="\{([^}]+)\}"/g, "onClick={$1}")"
fixed = fixed.replace(/href="\{([^}]+)\}"/g, "href={$1}")"
fixed = fixed.replace(/src="\{([^}]+)\}"/g, "src={$1}")"
fixed = fixed.replace(/alt="\{([^}]+)\}"/g, "alt={$1}")"
fixed = fixed.replace(/id="\{([^}]+)\}"/g, "id={$1}")"
fixed = fixed.replace(/type="\{([^}]+)\}"/g, "type={$1}")"
fixed = fixed.replace(/value="\{([^}]+)\}"/g, "value={$1}")"
fixed = fixed.replace(/placeholder="\{([^}]+)\}"/g, "placeholder={$1}")"
fixed = fixed.replace(/name="\{([^}]+)\}"/g, "name={$1}")"
fixed = fixed.replace(/role="\{([^}]+)\}"/g, "role={$1}")"
fixed = fixed.replace(/aria-label="\{([^}]+)\}"/g, "aria-label={$1}")"
fixed = fixed.replace(/aria-labelledby="\{([^}]+)\}"/g, "aria-labelledby={$1}")
fixed = fixed.replace(")
  /aria-describedby="\{([^}]+)\}"/g,"
  "aria-describedby={$1}",
)"
fixed = fixed.replace(/data-testid="\{([^}]+)\}"/g, "data-testid={$1}")
// Fix malformed object syntax"
fixed = fixed.replace(/(\w+)=([^,}]+),/g, "$1: $2,")"
fixed = fixed.replace(/(\w+)=([^,}]+)}/g, "$1: $2}")
// Fix missing quotes in object properties"
fixed = fixed.replace(/(\w+):\s*([^"',}]+),/g, '$1: "$2",')"
fixed = fixed.replace(/(\w+):\s*([^"',}]+)}/g, '$1: "$2"}')
// Write the fixed content back"
fs.writeFileSync("/workspace/app/components/Navigation.tsx", fixed, "utf8")"
console.log("Fixed Navigation JSX attributes comprehensively")"
