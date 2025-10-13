import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common data structures
const commonData = {
  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ],
  benefits: [
    "Increased Efficiency",
    "Cost Reduction", 
    "Enhanced Security",
    "Scalable Solutions",
    "24/7 Support",
    "Expert Guidance"
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp",
      content: "Zion Tech Group transformed our business operations with their innovative AI solutions. The results exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      company: "InnovateLabs",
      content: "Outstanding technical expertise and exceptional customer service. They delivered exactly what we needed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, DataFlow Inc",
      company: "DataFlow Inc",
      content: "The team's attention to detail and commitment to quality is unmatched. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ]
};

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check what variables are needed
    const needsStats = content.includes('stats.map') || content.includes('{stats.');
    const needsBenefits = content.includes('benefits.map') || content.includes('{benefits.');
    const needsTestimonials = content.includes('testimonials.map') || content.includes('{testimonials.');

    if (needsStats || needsBenefits || needsTestimonials) {
      // Find the export default function line
      const functionMatch = content.match(/export default function \w+\(\)\s*{/);
      if (functionMatch) {
        const insertPoint = functionMatch.index + functionMatch[0].length;
        let dataToAdd = '';

        if (needsStats && !content.includes('const stats =')) {
          dataToAdd += `\n  const stats = ${JSON.stringify(commonData.stats, null, 4)};\n`;
        }
        if (needsBenefits && !content.includes('const benefits =')) {
          dataToAdd += `\n  const benefits = ${JSON.stringify(commonData.benefits, null, 4)};\n`;
        }
        if (needsTestimonials && !content.includes('const testimonials =')) {
          dataToAdd += `\n  const testimonials = ${JSON.stringify(commonData.testimonials, null, 4)};\n`;
        }

        if (dataToAdd) {
          content = content.slice(0, insertPoint) + dataToAdd + content.slice(insertPoint);
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
async function main() {
  // Target specific files that have errors
  const targetFiles = [
    'app/ai-automation-platform/page.tsx',
    'app/ai-code-assistant-pro/page.tsx',
    'app/ai-content-studio/page.tsx',
    'app/ai-customer-sentiment-tracker/page.tsx',
    'app/ai-data-analytics-pro/page.tsx',
    'app/ai-financial-analysis/page.tsx',
    'app/ai-hr-recruitment-pro/page.tsx',
    'app/ai-powered-devops/page.tsx',
    'app/ai-project-management-pro/page.tsx',
    'app/ai-quantum-computing/page.tsx',
    'app/ai-smart-scheduler/page.tsx',
    'app/ai-voice-assistant-pro/page.tsx',
    'app/ar-vr-development/page.tsx',
    'app/asset-management/page.tsx',
    'app/cloud-infrastructure/page.tsx',
    'app/cloud-services/page.tsx',
    'app/community/page.tsx',
    'app/compliance/page.tsx',
    'app/consultation/page.tsx',
    'app/cybersecurity-audit/page.tsx',
    'app/cybersecurity-solutions/page.tsx',
    'app/data-center-services/page.tsx',
    'app/demo/page.tsx',
    'app/it-services/page.tsx',
    'app/micro-saas-services/page.tsx',
    'app/smart-expense-categorizer/page.tsx',
    'app/smart-inventory-optimizer/page.tsx',
    'app/whitepapers/page.tsx',
    'app/zion-ai-accounting-suite/page.tsx',
    'app/zion-ai-analytics-pro/page.tsx',
    'app/zion-ai-business-intelligence-pro/page.tsx',
    'app/zion-ai-crm-pro/page.tsx'
  ];

  console.log(`Checking ${targetFiles.length} target files...`);
  
  let fixedCount = 0;
  targetFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);