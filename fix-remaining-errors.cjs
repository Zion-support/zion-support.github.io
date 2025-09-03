#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
// Function to fix remaining syntax errors;
function fixRemainingErrors(content) {;
  let fixed = content;
  // Fix common import issues;
  fixed = fixed.replace(/import React, \{ useState \} from "react";\\s*import \\{ motion\\s*\\} from "framer-motion"; import \\{ [^}]+ \\} from "lucide-react";/g,
    "import React, { useState } from "react";\\nimport { motion  } from "framer-motion";\\nimport { Shield, TrendingUp, Brain, CheckCircle, Star, ArrowRight, Users, Target, Clock, DollarSign, Database, Zap, Globe, Activity, AlertTriangle, Eye, Lock, Download, Upload, RefreshCw, Settings, Play, Gauge, BarChart3, Cpu, Factory, Truck, HardHat, Thermometer, GaugeIcon, AlertCircle, CheckSquare, XCircle, ShieldCheck, Fingerprint, Search, Bell, FileText, CreditCard, Building, ShoppingCart  } from "lucide-react";");
  // Fix malformed component declarations;
  fixed = fixed.replace(/const\\s+([A-Z][a-zA-Z0-9]*)\\s*=\\s*\\(\\)\\s*=>\\s*\\{/g, "const $1 = () => {");
  // Fix missing semicolons in imports;
  fixed = fixed.replace(/import\\s+([^]+)(?!)/g, "import $1;");
  // Fix broken JSX syntax;
  fixed = fixed.replace(/<\\s*([A-Z][a-zA-Z0-9]*)\\s*([^>]*?)\\s*>/g, "<$1$2>");
  // Fix unterminated strings;
  fixed = fixed.replace(/("|")([^""]*?)(?=\\n|$)/g, "$1$2"");
  // Fix missing closing braces;
  const openBraces = (fixed.match(/\\{/g) || []).length;
  const closeBraces = (fixed.match(/\\}/g) || []).length;
  if (openBraces > closeBraces) {;
  fixed += "\\n".repeat(openBraces - closeBraces).replace(/\\n/g, "\\n}");,
}

  return fixed;,
}

// Function to process files;
function processFiles(dir) {;
  const files = fs.readdirSync(dir);
  files.forEach(file => {;
  const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
  processFiles(filePath);,
} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
        const fixed = fixRemainingErrors(content);
        if (content !== fixed) {;
  fs.writeFileSync(filePath, fixed);
          console.log(`Fixed: ${filePath}`);,
}
      } catch (error) {;
  console.log(`Skipping corrupted file: ${filePath}`);,
}
    }
  });,
}

// Process all files;
processFiles("src");
console.log("Remaining syntax error fixes completed!")