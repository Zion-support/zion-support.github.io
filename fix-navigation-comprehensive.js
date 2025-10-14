import React from 'react'
#!/usr/bin/env node;
import fs from "fs
// Read the Navigation component;
const content = fs.readFileSync(
  "/workspace/app/components/Navigation.tsx
  "utf8",)
)
// Fix the malformed JSX attributes
let fixed = content
// Fix JSX attributes with colons instead of equals
fixed = fixed.replace(/(\w+):\s*"([^"]*)/g, '$1="$2"')
fixed = fixed.replace(/(\w+):\s*'([^']*)'/g$1='$2'")
// Fix JSX attributes with quotes around JavaScript expressions
fixed = fixed.replace(/key="\{([^}]+)\}/gkey={$1})
fixed = fixed.replace(/to="\{([^}]+)\}/gto={$1})
fixed = fixed.replace(/className="\{([^}]+)\}/gclassName={$1})
fixed = fixed.replace(/onClick="\{([^}]+)\}/gonClick={$1})
fixed = fixed.replace(/href="\{([^}]+)\}/ghref={$1})
fixed = fixed.replace(/src="\{([^}]+)\}/gsrc={$1})
fixed = fixed.replace(/alt="\{([^}]+)\}/galt={$1})
fixed = fixed.replace(/id="\{([^}]+)\}/gid={$1})
fixed = fixed.replace(/type="\{([^}]+)\}/gtype={$1})
fixed = fixed.replace(/value="\{([^}]+)\}/gvalue={$1})
fixed = fixed.replace(/placeholder="\{([^}]+)\}/gplaceholder={$1})
fixed = fixed.replace(/name="\{([^}]+)\}/gname={$1})
fixed = fixed.replace(/role="\{([^}]+)\}/grole={$1})
fixed = fixed.replace(/aria-label="\{([^}]+)\}/garia-label={$1})
fixed = fixed.replace(/aria-labelledby="\{([^}]+)\}/garia-labelledby={$1})
fixed = fixed.replace(")
  /aria-describedby="\{([^}]+)\}/g
  "aria-describedby={$1}
)
fixed = fixed.replace(/data-testid="\{([^}]+)\}/gdata-testid={$1})
// Fix malformed object syntax
fixed = fixed.replace(/(\w+)=([^,}]+),/g$1: $2)
fixed = fixed.replace(/(\w+)=([^,}]+)}/g$1: $2})
// Fix missing quotes in object properties
fixed = fixed.replace(/(\w+):\s*([^"',}]+),/g, '$1: "$2",')
fixed = fixed.replace(/(\w+):\s*([^"',}]+)}/g, '$1: "$2"}')
// Write the fixed content back
fs.writeFileSync("/workspace/app/components/Navigation.tsx", fixedutf8")
console.log("Fixed Navigation JSX attributes comprehensively")
