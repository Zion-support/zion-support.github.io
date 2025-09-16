import React from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';


const SuccessStoriesShowcase = () => {
  const stories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual data processing taking 40+ hours weekly',
      solution: 'Implemented AI-powered automation system',
      results: {
        timeSaved: '95%',
        roi: '3,200%',
        accuracy: '99.8%'
      },
      quote: 'Zion Tech Group transformed our entire operation. What used to take days now happens in minutes.',
      author: 'Sarah JohnsonCEO',
      logo: '🏢'
    },
    {
      company: 'FinanceMax Solutions',
      industry: 'Financial Services',
      challenge: 'Risk assessment taking 2 weeks per client',
      solution: 'Deployed quantum-enhanced analytics platform',
      results: {
        timeSaved: '90%',
        roi: '4,500%',
        accuracy: '99.9%'
      },
      quote: 'The quantum computing solutions gave us an edge that competitors simply cannot match.',
      author: 'Michael ChenCTO',
      logo: '💰'
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient data analysis bottleneck',
      solution: 'Neural interface-powered diagnostic system',
      results: {
        timeSaved: '85%',
        roi: '2,800%',
        accuracy: '99.7%'
      },
      quote: 'Our diagnostic accuracy improved dramatically while reducing analysis time by 85%.',
      author: 'Dr. Emily RodriguezChief Medical Officer',
      logo: '🏥'
    },
    {
      company: 'ManufacturingPlus',
      industry: 'Manufacturing',
      challenge: 'Production line optimization inefficiencies',
      solution: 'Autonomous operations management system',
      results: {
        timeSaved: '92%',
        roi: '5,100%',
        accuracy: '99.9%'
      },
      quote: 'The autonomous systems run our production 24/7 with zero downtime. Incredible results.',
      author: 'David ParkOperations Director',
      logo: '🏭'
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const SuccessStoriesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SuccessStoriesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default SuccessStoriesShowcase;