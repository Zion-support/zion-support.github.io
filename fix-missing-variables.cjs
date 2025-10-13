const fs = require('fs');
const path = require('path');

// Function to add missing variables to a file
function fixMissingVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file needs testimonials variable
    if (content.includes('testimonials.map') && !content.includes('const testimonials =')) {
      const testimonialsData = `  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp",
      avatar: "/avatars/sarah-johnson.jpg",
      content: "This solution has transformed our business operations. We've seen incredible results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Director, InnovateLabs",
      company: "InnovateLabs",
      avatar: "/avatars/michael-chen.jpg",
      content: "The AI capabilities are outstanding. Our productivity has increased by 300%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Analytics, DataFlow Inc",
      company: "DataFlow Inc",
      avatar: "/avatars/emily-rodriguez.jpg",
      content: "Zion's platform is a game-changer. Our ROI increased by 400% in just 6 months.",
      rating: 5
    }
  ];`;

      // Find the function declaration and add testimonials after it
      const functionMatch = content.match(/export default function \w+\(\) \{/);
      if (functionMatch) {
        const newContent = content.replace(
          functionMatch[0],
          functionMatch[0] + '\n' + testimonialsData
        );
        fs.writeFileSync(filePath, newContent);
        console.log(`Added testimonials to: ${filePath}`);
        return;
      }
    }

    // Check if file needs benefits variable
    if (content.includes('benefits.map') && !content.includes('const benefits =')) {
      const benefitsData = `  const benefits = [
    "Reduce manual work by 80%",
    "Increase productivity by 300%",
    "Eliminate human errors",
    "Scale operations instantly",
    "Lower operational costs",
    "Improve customer satisfaction"
  ];`;

      const functionMatch = content.match(/export default function \w+\(\) \{/);
      if (functionMatch) {
        const newContent = content.replace(
          functionMatch[0],
          functionMatch[0] + '\n' + benefitsData
        );
        fs.writeFileSync(filePath, newContent);
        console.log(`Added benefits to: ${filePath}`);
        return;
      }
    }

    // Check if file needs stats variable
    if (content.includes('stats.map') && !content.includes('const stats =')) {
      const statsData = `  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];`;

      const functionMatch = content.match(/export default function \w+\(\) \{/);
      if (functionMatch) {
        const newContent = content.replace(
          functionMatch[0],
          functionMatch[0] + '\n' + statsData
        );
        fs.writeFileSync(filePath, newContent);
        console.log(`Added stats to: ${filePath}`);
        return;
      }
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'backup-unused-components') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Fixing missing variables...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixMissingVariables(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);