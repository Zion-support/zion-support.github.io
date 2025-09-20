#!/usr/bin/env node

const fs = require('fs');

function fixPricingArrays(content) {
  // Fix the specific array formatting issues in Pricing.tsx
  let fixed = content;
  
  // Fix the first plan features array
  fixed = fixed.replace(
    /features: \[\s*"Up to 5 team members",\s*"Basic AI features"\s*"Email support",\s*"5GB storage"\s*"Basic analytics",\s*"Standard security"\s*\]/g,
    'features: [\n        "Up to 5 team members",\n        "Basic AI features",\n        "Email support",\n        "5GB storage",\n        "Basic analytics",\n        "Standard security"\n      ]'
  );
  
  // Fix the second plan features array
  fixed = fixed.replace(
    /features: \[\s*"Up to 25 team members",\s*"Advanced AI features"\s*"Priority support",\s*"50GB storage"\s*"Advanced analytics",\s*"Enhanced security"\s*"API access"\s*\]/g,
    'features: [\n        "Up to 25 team members",\n        "Advanced AI features",\n        "Priority support",\n        "50GB storage",\n        "Advanced analytics",\n        "Enhanced security",\n        "API access"\n      ]'
  );
  
  // Fix the third plan features array
  fixed = fixed.replace(
    /features: \[\s*"Unlimited team members",\s*"Enterprise AI features"\s*"24\/7 dedicated support",\s*"Unlimited storage"\s*"Custom analytics",\s*"Enterprise security"\s*"Full API access"\s*"Custom integrations"\s*"SLA guarantee"\s*\]/g,
    'features: [\n        "Unlimited team members",\n        "Enterprise AI features",\n        "24/7 dedicated support",\n        "Unlimited storage",\n        "Custom analytics",\n        "Enterprise security",\n        "Full API access",\n        "Custom integrations",\n        "SLA guarantee"\n      ]'
  );
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/popular: false;\s*\}/g, 'popular: false\n    }');
  
  return fixed;
}

function main() {
  const filePath = 'src/pages/Pricing.tsx';
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixPricingArrays(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log('No changes needed');
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

main();