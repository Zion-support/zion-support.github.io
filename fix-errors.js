import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common data structures that are missing
const commonData = {
  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ],
  benefits: [
    {
      title: "Increased Efficiency",
      description: "Streamline your operations with our advanced automation solutions.",
      icon: "⚡"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 40% with our optimized solutions.",
      icon: "💰"
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security measures to protect your valuable data.",
      icon: "🔒"
    },
    {
      title: "Scalable Solutions",
      description: "Grow your business with solutions that scale with your needs.",
      icon: "📈"
    }
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
  ],
  categories: [
    { name: "AI Solutions", count: 15, description: "Advanced AI-powered applications" },
    { name: "Cloud Services", count: 12, description: "Scalable cloud infrastructure" },
    { name: "Data Analytics", count: 8, description: "Business intelligence tools" },
    { name: "Cybersecurity", count: 10, description: "Enterprise security solutions" }
  ]
};

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file uses stats, benefits, testimonials, or categories
    const needsStats = content.includes('stats.map') || content.includes('{stats.');
    const needsBenefits = content.includes('benefits.map') || content.includes('{benefits.');
    const needsTestimonials = content.includes('testimonials.map') || content.includes('{testimonials.');
    const needsCategories = content.includes('categories.map') || content.includes('{categories.');

    // Add missing data declarations
    if (needsStats || needsBenefits || needsTestimonials || needsCategories) {
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
        if (needsCategories && !content.includes('const categories =')) {
          dataToAdd += `\n  const categories = ${JSON.stringify(commonData.categories, null, 4)};\n`;
        }

        if (dataToAdd) {
          content = content.slice(0, insertPoint) + dataToAdd + content.slice(insertPoint);
          modified = true;
        }
      }
    }

    // Fix specific import issues
    if (content.includes('from "lucide-react"')) {
      // Remove unused imports by checking which icons are actually used
      const iconMatches = content.match(/(\w+)\s+from\s+"lucide-react"/g);
      if (iconMatches) {
        const importLine = iconMatches[0];
        const importedIcons = importLine.match(/(\w+)/g).slice(0, -2); // Remove 'from' and 'lucide-react'
        
        // Check which icons are actually used in the file
        const usedIcons = importedIcons.filter(icon => {
          const regex = new RegExp(`<${icon}\\s`, 'g');
          return regex.test(content) || content.includes(`${icon}.`) || content.includes(`{${icon}`);
        });

        if (usedIcons.length !== importedIcons.length) {
          const newImportLine = `import { ${usedIcons.join(', ')} } from "lucide-react";`;
          content = content.replace(importLine, newImportLine);
          modified = true;
        }
      }
    }

    // Fix specific icon name issues
    content = content.replace(/watch\s/g, 'Watch ');
    content = content.replace(/note\s/g, 'FileText ');

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
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(path.join(process.cwd(), file))) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);