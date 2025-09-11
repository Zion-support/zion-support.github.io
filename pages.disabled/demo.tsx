import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEOHead';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Calendar, Download } from 'lucide-react';
const Demo = () => {;
  const [selectedDemo, setSelectedDemo] = useState('ai-services');
  const structuredData = {;
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Demo - Zion Tech Group",
    "url": "https://ziontechgroup.com/demo",
    "description": "Watch live demos of our AI services, IT solutions, and micro SaaS platforms",
    "publisher": {;
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com";
}
  };
  const demos = [;
    {;
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'See how our AI solutions can transform your business operations',
      duration: '15 min',
      category: 'AI Services',
      features: [;
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbot Integration',
        'Document Intelligence';
      ],
      videoUrl: '#',
      thumbnail: '/api/placeholder/600/400';
},
    {;
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'Explore our comprehensive IT solutions and infrastructure management',
      duration: '20 min',
      category: 'IT Services',
      features: [;
        'Cloud Migration',
        'DevOps Automation',
        'Security Monitoring',
        'Network Management',
        'Data Backup & Recovery';
      ],
      videoUrl: '#',
      thumbnail: '/api/placeholder/600/400';
},
    {;
      id: 'micro-saas',
      title: 'Micro SaaS Demo',
      description: 'Discover our scalable SaaS solutions and platform capabilities',
      duration: '25 min',
      category: 'Micro SaaS',
      features: [;
        'Multi-tenant Architecture',
        'API Management',
        'User Management',
        'Analytics Dashboard',
        'Payment Integration';
      ],
      videoUrl: '#',
      thumbnail: '/api/placeholder/600/400';
},
    {;
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Learn how to automate your business processes with our tools',
      duration: '18 min',
      category: 'Automation',
      features: [;
        'Process Mapping',
        'Automation Rules',
        'Integration Hub',
        'Performance Monitoring',
        'Custom Workflows';
      ],
      videoUrl: '#',
      thumbnail: '/api/placeholder/600/400';
}
  ];
  const testimonials = [;
    {;
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI demo was incredible. We could see exactly how it would fit into our workflow.',
      rating: 5;
},
    {;
      name: 'Michael Chen',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The micro SaaS demo showed us the scalability we needed for our growing business.',
      rating: 5;
},
    {;
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      role: 'IT Director',
      content: 'The IT services demo covered everything we needed for our digital transformation.',
      rating: 5;
}