#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/ai-services/page.tsx';

function fixAIServicesPage() {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix duplicate imports
  content = content.replace(
    /import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';\nimport { CheckCircle, Brain, Zap, Eye, MessageSquare, BarChart3, Shield, Cog, ArrowRight } from 'lucide-react';/,
    "import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';"
  );
  
  // Fix malformed benefits array - remove the broken object structure
  content = content.replace(
    /    \{\s*title: 'Accuracy',\s*description: 'Achieve 95%\+ accuracy in AI-powered tasks and predictions',\s*icon: <Star className="w-6 h-6 text-yellow-500" \/>\s*title: 'Machine Learning',\s*description: 'Build intelligent systems that learn and adapt to your business needs\.',\s*features: \['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'\],\s*applications: \['Fraud Detection', 'Customer Segmentation', 'Demand Forecasting', 'Quality Control'\]\s*\},/,
    `    {
      title: 'Accuracy',
      description: 'Achieve 95%+ accuracy in AI-powered tasks and predictions',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },`
  );
  
  // Fix the services array structure - remove the malformed objects that got mixed in
  content = content.replace(
    /    \{\s*icon: <MessageSquare className="w-8 h-8 text-green-500" \/>,.*?applications: \['Customer Support', 'Content Moderation', 'Document Processing', 'Voice Assistants'\]\s*\},/gs,
    ''
  );
  
  content = content.replace(
    /    \{\s*icon: <Eye className="w-8 h-8 text-purple-500" \/>,.*?applications: \['Quality Inspection', 'Security Monitoring', 'Medical Imaging', 'Autonomous Vehicles'\]\s*\},/gs,
    ''
  );
  
  content = content.replace(
    /    \{\s*icon: <BarChart3 className="w-8 h-8 text-yellow-500" \/>,.*?applications: \['Sales Forecasting', 'Market Analysis', 'Risk Management', 'Resource Planning'\]\s*\},/gs,
    ''
  );
  
  // Clean up any remaining malformed structures
  content = content.replace(/\{\s*icon: <[^>]+>,\s*title: '[^']+',\s*description: '[^']+',\s*features: \[[^\]]+\],\s*applications: \[[^\]]+\]\s*\},/g, '');
  
  // Fix any remaining syntax issues
  content = content.replace(/,(\s*})/g, '$1');
  content = content.replace(/,(\s*\])/g, '$1');
  
  // Remove any empty lines that might have been created
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed ai-services page');
}

fixAIServicesPage();