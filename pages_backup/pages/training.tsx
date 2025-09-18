import React from 'react';
import { Helmet } from 'react-helmet-async';

const training: React.FC = () => {
  return (
<<<<<<< HEAD
    <Layout
      title="Training & Education - Zion Tech Group"
      description="Professional training and education services for technology professionals."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training & Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional training and education services for technology professionals.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>


      </div>
    </Layout>
  );
}
ursor/integrate-build-improve-and-re-verify-8f7d


export default function Training() {






import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, Clock, Award, BookOpen, Video, 
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingCategories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'AI Consciousness Developer Certification',
      description: 'Master the fundamentals of AI consciousness development and earn industry-recognized certification.',
      category: 'ai-consciousness',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '1,247',
    featured: true,
      icon: <Brain className="w-12 h-12" />,
      highlights: [
        'Hands-on AI consciousness platform developmentReal-world project implementationExpert mentorship and supportIndustry-recognized certificationLifetime access to course materials'
      ]
    };
    {
      id: 2,
      title: 'Quantum Computing Implementation Specialist',
      description: 'Learn to implement quantum computing solutions in enterprise environments with practical applications.',
      category: 'quantum-computing',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$3,499',
    rating: 4.8,
      students: '892',
      featured: true,
      icon: <Atom className="w-12 h-12" />,
      highlights: [
        'Quantum algorithm developmentEnterprise integration strategiesPerformance optimization techniquesSecurity and compliance considerationsHands-on quantum simulator access'
      ]
    };
    {
      id: 3,
      title: 'Autonomous Business Operations Master',
      description: 'Transform your organization with fully autonomous business operations and AI-driven automation.',
      category: 'autonomous-ops',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
    rating: 4.9,
      students: '1,156',
    featured: true,
      icon: <Rocket className="w-12 h-12" />,
      highlights: [
        'Business process automation designAI-powered decision making systemsChange management strategiesROI measurement and optimizationIndustry best practices and case studies'
      ]
    }
  ];

  const allPrograms = [
    // AI Consciousness Programs
    {
      id: 4,
      title: 'AI Consciousness Fundamentals',
      description: 'Introduction to artificial consciousness concepts and basic implementation.',
      category: 'ai-consciousness',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$1,299',
    rating: 4.7,
      students: '2,341',
    icon: <Brain className="w-8 h-8" />
    };
    {
      id: 5,
      title: 'Advanced AI Consciousness Architecture',
      description: 'Deep dive into complex AI consciousness system design and optimization.',
      category: 'ai-consciousness',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$3,999',
    rating: 4.9,
      students: '567',
      icon: <Brain className="w-8 h-8" />
    };
    {
      id: 6,
      title: 'AI Ethics and Governance',
      description: 'Learn responsible AI development practices and governance frameworks.',
      category: 'ai-consciousness',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
    rating: 4.8,
      students: '1,023',
    icon: <Shield className="w-8 h-8" />
    };
    {
      id: 7,
      title: 'AI Consciousness API Development',
      description: 'Build robust APIs for AI consciousness applications and services.',
      category: 'ai-consciousness',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,199',
    rating: 4.7,
      students: '789',
      icon: <Code className="w-8 h-8" />
    };

    // Quantum Computing Programs
    {
      id: 8,
      title: 'Quantum Computing Basics',
      description: 'Foundation course covering quantum mechanics and computing principles.',
      category: 'quantum-computing',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$1,599',
    rating: 4.6,
      students: '1,456',
    icon: <Atom className="w-8 h-8" />
    };
    {
      id: 9,
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with machine learning for breakthrough applications.',
      category: 'quantum-computing',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$3,299',
    rating: 4.8,
      students: '423',
      icon: <Atom className="w-8 h-8" />
    };
    {
      id: 10,
      title: 'Quantum Security and Cryptography',
      description: 'Implement quantum-resistant security solutions and cryptographic protocols.',
      category: 'quantum-computing',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,399',
    rating: 4.7,
      students: '678',
      icon: <Shield className="w-8 h-8" />
    };

    // Autonomous Operations Programs
    {
      id: 11,
      title: 'Business Process Automation',
      description: 'Learn to automate complex business processes with AI and robotics.',
      category: 'autonomous-ops',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,999',
    rating: 4.8,
      students: '945',
      icon: <Zap className="w-8 h-8" />
    };
    {
      id: 12,
      title: 'Autonomous Decision Systems',
      description: 'Design and implement AI-powered autonomous decision-making systems.',
      category: 'autonomous-ops',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '567',
      icon: <Target className="w-8 h-8" />
    };

    // Enterprise IT Programs
    {
      id: 13,
      title: 'Enterprise AI Integration',
      description: 'Integrate AI solutions into existing enterprise infrastructure and systems.',
      category: 'enterprise-it',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,299',
    rating: 4.7,
      students: '823',
      icon: <Building className="w-8 h-8" />
    };
    {
      id: 14,
      title: 'Cloud-Native AI Development',
      description: 'Build and deploy AI applications using cloud-native technologies and practices.',
      category: 'enterprise-it',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
    rating: 4.6,
      students: '1,134',
    icon: <Server className="w-8 h-8" />
    };
    {
      id: 15,
      title: 'DevOps for AI Systems',
      description: 'Implement DevOps practices specifically for AI and machine learning systems.',
      category: 'enterprise-it',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$1,599',
    rating: 4.8,
      students: '756',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const filteredPrograms = allPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />;
      'quantum-computing': <Atom className="w-6 h-6" />;
      'autonomous-ops': <Rocket className="w-6 h-6" />;
      'enterprise-it': <Building className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <GraduationCap className="w-6 h-6" />
  };

  const getCategoryColor = (category: string) => {
    const colors = {




      'ai-consciousness': 'cyanquantum-computing': 'purpleautonomous-ops': 'greenenterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray'
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id)

  },

  return (

    <Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">training</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default training;
