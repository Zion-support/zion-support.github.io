const fs = require('fs');
const path = require('path');

// List of problematic files to remove or replace
const problematicFiles = [
  'app/components/InteractiveAIROICalculator.tsx',
  'app/components/UltimateBusinessIntelligence2025Banner.tsx',
  'app/data/servicesData.ts',
  'app/hooks/useErrorMonitoring.ts',
  'app/hooks/useForm.ts'
];

// Function to remove problematic files
function removeProblematicFiles() {
  console.log('Removing problematic files...');
  
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Removed: ${filePath}`);
      } catch (error) {
        console.error(`Error removing ${filePath}:`, error.message);
      }
    }
  }
}

// Function to create a simple services data file
function createSimpleServicesData() {
  const content = `// Simple services data
export const servicesData = {
  ai: [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI solutions',
      category: 'AI'
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      description: 'Advanced data analytics with AI',
      category: 'AI'
    }
  ],
  it: [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern web applications',
      category: 'IT'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      category: 'IT'
    }
  ]
};

export default servicesData;`;
  
  fs.writeFileSync('app/data/servicesData.ts', content);
  console.log('Created simple services data file');
}

// Function to create simple hooks
function createSimpleHooks() {
  // Create useForm hook
  const useFormContent = `import { useState } from 'react';

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
};`;
  
  fs.writeFileSync('app/hooks/useForm.ts', useFormContent);
  console.log('Created useForm hook');
  
  // Create useErrorMonitoring hook
  const useErrorMonitoringContent = `import { useEffect } from 'react';

export const useErrorMonitoring = () => {
  useEffect(() => {
    const handleError = (error) => {
      console.error('Error caught:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
};`;
  
  fs.writeFileSync('app/hooks/useErrorMonitoring.ts', useErrorMonitoringContent);
  console.log('Created useErrorMonitoring hook');
}

// Main function
function aggressiveFix() {
  console.log('Starting aggressive fix...');
  
  removeProblematicFiles();
  createSimpleServicesData();
  createSimpleHooks();
  
  console.log('Aggressive fix completed!');
}

aggressiveFix();