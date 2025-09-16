import React from 'react';
<<<<<<< HEAD
=======
import Layout from '../components/layout/Layout';
import Link from 'next/link';

import { 
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const industrySolutions = [
    {
      category: 'Healthcare & Life Sciences',
      solutions: [
        {
          name: 'Healthcare AI Solutions',
          href: '/healthcare-solutions',
          featured: true,
          icon: <Heart className="w-6 h-6" />
        },
        {
          name: 'AI Healthcare Diagnostics',
          description: 'Advanced diagnostic systems using machine learning and medical imaging',
          href: '/ai-healthcare-diagnostics',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Biotech AI Research Platform',
          description: 'AI-driven research tools for biotechnology and pharmaceutical development',
          href: '/biotech-ai-research-platform',
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Financial Services',
      solutions: [
        {
          name: 'Financial Solutions',
          description: 'Comprehensive financial technology solutions for modern enterprises',
          href: '/financial-solutions',
          featured: true,
          icon: <DollarSign className="w-6 h-6" />
        },
        {
          name: 'AI Financial Intelligence',
          description: 'Intelligent financial analysis and decision-making platforms',
          href: '/ai-financial-intelligence',
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum-powered trading algorithms and financial modeling',
          href: '/quantum-financial-trading',
          icon: <Network className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Manufacturing & Industry',
      solutions: [
        {
          name: 'Manufacturing AI Solutions',
          description: 'AI-powered automation and optimization for manufacturing processes',
          href: '/manufacturing-ai-solutions',
          featured: true,
          icon: <Factory className="w-6 h-6" />
        },
        {
          name: 'Industrial Automation AI',
          description: 'Intelligent automation systems for industrial operations',
          href: '/industrial-automation-ai',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Autonomous Manufacturing',
          description: 'Self-managing manufacturing systems with AI oversight',
          href: '/autonomous-manufacturing',
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Retail & E-commerce',
      solutions: [
        {
          name: 'Retail Technology Solutions',
          description: 'Advanced technology solutions for modern retail operations',
          href: '/retail-technology-solutions',
          featured: true,
          icon: <ShoppingCart className="w-6 h-6" />
        },
        {
          name: 'AI Customer Journey Analytics',
          description: 'Comprehensive customer behavior analysis and optimization',
          href: '/ai-customer-journey-analytics',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'AI Content Personalization',
          description: 'Dynamic content adaptation based on customer preferences',
          href: '/ai-content-personalization-engine',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Government & Public Sector',
      solutions: [
        {
          name: 'Government Technology Solutions',
          description: 'Innovative technology solutions for government agencies and public services',
          href: '/government-technology-solutions',
          featured: true,
          icon: <Building2 className="w-6 h-6" />
        },
        {
          name: 'AI Ethics & Governance Framework',
          description: 'Comprehensive frameworks for responsible AI deployment',
          href: '/ai-ethics-governance-framework',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Advanced security solutions for government and enterprise',
          href: '/cybersecurity',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Education & Training',
      solutions: [
        {
          name: 'Education Technology Solutions',
          description: 'Innovative technology solutions for modern education and training',
          href: '/education-technology-solutions',
          featured: true,
          icon: <GraduationCap className="w-6 h-6" />
        },
        {
          name: 'AI Education Platform',
          description: 'Intelligent learning systems and educational content platforms',
          href: '/ai-education-platform',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Training Solutions',
          description: 'Comprehensive training and development platforms',
          href: '/training',
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Sustainability & Energy',
      solutions: [
        {
          name: 'Energy & Utilities Solutions',
          description: 'Technology solutions for energy optimization and sustainability',
          href: '/energy-utilities-solutions',
          featured: true,
          icon: <Leaf className="w-6 h-6" />
        },
        {
          name: 'AI Sustainability Platform',
          description: 'AI-driven sustainability monitoring and optimization',
          href: '/ai-sustainability-platform',
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: 'Quantum Energy Platform',
          description: 'Quantum computing solutions for energy optimization',
          href: '/quantum-energy-platform',
          icon: <Network className="w-6 h-6" />
        }
      ]
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const solutions: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">solutions</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default solutions;