import fs from 'fs';

const filePath = '/workspace/app/services/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Define the mapping of service titles to categories
const categoryMap = {
  'AI Code Review Assistant': 'Development',
  'AI Video Generator': 'Creative',
  'AI Voice Cloning': 'Creative',
  'AI Music Composer': 'Creative',
  'AI Fashion Designer': 'Creative',
  'AI 3D Model Generator': 'Creative',
  'AI Fitness Coach': 'Health & Fitness',
  'AI Sales Assistant': 'Sales',
  'AI Data Analyst': 'Analytics',
  'AI 3D Designer': 'Creative',
  'AI Customer Service': 'Customer Service',
  'AI Content Creator': 'Content Creation',
  'AI Operations Manager': 'Operations',
  'AI HR Assistant': 'Human Resources',
  'AI Financial Advisor': 'Finance',
  'AI Legal Assistant': 'Legal',
  'AI Machine Learning': 'AI Development',
  'AI Natural Language': 'AI Development',
  'AI Computer Vision': 'AI Development',
  'AI Workflow Automation': 'Automation',
  'AI Data Scientist': 'Data Science',
  'AI 3D Artist': 'Creative',
  'AI Voice Assistant': 'Voice Technology',
  'AI Content Writer': 'Content AI',
  'AI Personalization': 'Personalization',
  'AI Security Expert': 'Security',
  'AI Document Processor': 'Document AI',
  'AI Cloud Manager': 'Cloud Computing',
  'AI Cybersecurity': 'Security',
  'AI Mobile Developer': 'Development',
  'AI Database Manager': 'Data Management',
  'AI IT Consultant': 'Consulting',
  'AI Infrastructure': 'Infrastructure',
  'AI Mobile App': 'Mobile Development',
  'AI Web Developer': 'Web Development',
  'AI Business Analyst': 'Analytics',
  'AI Support Agent': 'Support',
  'AI Blockchain': 'Blockchain',
  'AI IoT Manager': 'IoT'
};

// Replace all PLACEHOLDER categories with appropriate ones
for (const [title, category] of Object.entries(categoryMap)) {
  const regex = new RegExp(`title: '${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?category: 'PLACEHOLDER'`, 'g');
  content = content.replace(regex, (match) => {
    return match.replace("category: 'PLACEHOLDER'", `category: '${category}'`);
  });
}

// Write the fixed content back to the file
fs.writeFileSync(filePath, content);
console.log('Categories fixed successfully!');