const fs = require('fs');

// Function to completely fix servicesData.ts
function fixServicesDataComplete() {
  try {
    let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');
    
    // Fix the array structure - replace the malformed array
    const interfacePart = content.split('export const aiServices: Service[] = [')[0];
    
    // Create a properly formatted services array
    const servicesArray = `export const aiServices: Service[] = [
  {
    id: "ai-analytics",
    title: "AI Analytics & BI",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
      "Real-time data processing",
      "Predictive analytics", 
      "Custom dashboards",
      "Automated reporting",
      "Machine learning models"
    ],
    benefits: [
      "Improved decision making",
      "Reduced manual analysis time", 
      "Enhanced business intelligence",
      "Cost savings through automation"
    ],
    pricing: {
      basic: "299",
      pro: "599", 
      enterprise: "999"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-analytics",
      email: "ai@ziontechgroup.com",
      phone: "+1-555-0123"
    },
    price: "$299/month",
    icon: "📊",
    href: "/ai-analytics",
    popular: true,
    category: "ai"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation solutions.",
    features: [
      "Workflow automation",
      "Document processing",
      "Email automation", 
      "Task scheduling",
      "Process optimization"
    ],
    benefits: [
      "Increased productivity",
      "Reduced human error",
      "Cost efficiency",
      "Scalable operations"
    ],
    pricing: {
      basic: "199",
      pro: "399",
      enterprise: "799"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-automation",
      email: "automation@ziontechgroup.com", 
      phone: "+1-555-0124"
    },
    price: "$199/month",
    icon: "🤖",
    href: "/ai-automation",
    popular: false,
    category: "ai"
  }
];`;

    const newContent = interfacePart + servicesArray;
    
    fs.writeFileSync('/workspace/app/data/servicesData.ts', newContent);
    console.log('Fixed servicesData.ts completely');
    return true;
  } catch (error) {
    console.error('Error fixing servicesData.ts:', error.message);
    return false;
  }
}

fixServicesDataComplete();