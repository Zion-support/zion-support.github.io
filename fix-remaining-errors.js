import fs from 'fs';

const filesToFix = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx', 
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Fix imports - remove unused ones
    content = content.replace(
      /import React, \{ useState, useEffect \} from "react";\s+import \{ Helmet \} from "react-helmet-async";\s+import \{ [^}]+ \} from 'lucide-react';/,
      'import React, { useState, useEffect } from "react";\nimport { Helmet } from "react-helmet-async";\nimport { ArrowRight, CheckCircle, Mail, Phone, Play, Star, Users } from \'lucide-react\';'
    );

    // Add missing isVisible state if not present
    if (!content.includes('const [isVisible, setIsVisible] = useState(false);')) {
      content = content.replace(
        /const [A-Za-z]+Page = \(\) => \{/,
        `const ${componentName} = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);`
      );
    }

    // Fix export statement
    content = content.replace(
      /export default [A-Za-z]+Page;/,
      `export default ${componentName};`
    );

    // Remove unused data arrays that are not used in the template
    const unusedArrays = ['deviceTypes', 'channels', 'platforms', 'metrics', 'protocols', 'integrations', 'compliance', 'benefits', 'useCases'];
    unusedArrays.forEach(arrayName => {
      const regex = new RegExp(`const ${arrayName} = \\[[\\s\\S]*?\\];`, 'g');
      content = content.replace(regex, '');
    });

    // Add missing subjects array for education page
    if (filePath.includes('education') && !content.includes('const subjects = [')) {
      const subjectsArray = `
  const subjects = [
    "Mathematics and Sciences",
    "Language Arts and Literature", 
    "History and Social Studies",
    "Computer Science and Technology"
  ];`;
      
      content = content.replace(
        /const features = \[[\s\S]*?\];/,
        `const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "AI-Powered Features",
      description: "Advanced AI capabilities that enhance productivity and efficiency.",
      benefits: ["Improved efficiency", "Better insights", "Enhanced automation"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Real-time Analytics", 
      description: "Comprehensive insights and monitoring for better decision making.",
      benefits: ["Live monitoring", "Instant feedback", "Data-driven decisions"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Tools",
      description: "Enhanced team collaboration and communication features.",
      benefits: ["Team collaboration", "Better communication", "Shared workflows"]
    }
  ];${subjectsArray}`
      );
    }

    // Fix the template to use correct data structure
    content = content.replace(
      /\{features\.map\(\(feature, index\) => \([\s\S]*?\)\)\}/g,
      `{features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}`
    );

    // Fix subjects mapping if it exists
    if (content.includes('subjects.map')) {
      content = content.replace(
        /\{subjects\.map\(\(subject, index\) => \([\s\S]*?\)\)\}/g,
        `{subjects.map((subject, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{subject}</h3>
                  </div>
                ))}`
      );
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

filesToFix.forEach(fixFile);
console.log('All remaining errors fixed');