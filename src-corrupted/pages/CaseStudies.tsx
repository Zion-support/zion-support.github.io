import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Heart, Coins, Factory, Truck, Globe, 
  Users, TrendingUp, Award, Zap, Brain, Shield, Cloud,
  ArrowRight, CheckCircle, Star, Target, Rocket, ChartBar,
  Clock, DollarSign, Percent, ArrowUp, ArrowDown
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const CaseStudies = (props: any) => {
  const [selectedIndustry, setSelectedIndustry] = useState<any>('all');
  const [selectedService, setSelectedService] = useState<any>('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai-analytics',
      description: 'Developed a comprehensive AI-powered analytics platform that revolutionized patient care and operational efficiency.',
      challenge: 'MedTech Solutions faced challenges with manual data analysis, limited predictive capabilities, and inefficient resource allocation across their network of 50+ hospitals.',
      solution: 'Implemented an AI-powered analytics platform with machine learning algorithms for patient outcome prediction, resource optimization, and real-time monitoring.',
      results: [
        { metric: '35%', label: 'Reduction in patient readmission rates', icon: ArrowDown, color: 'text-green-400' },
        { metric: '40%', label: 'Improvement in resource utilization', icon: ArrowUp, color: 'text-blue-400' },
        { metric: '2.5x', label: 'Faster diagnosis accuracy', icon: TrendingUp, color: 'text-purple-400' },
        { metric: '$2.8M', label: 'Annual cost savings', icon: DollarSign, color: 'text-yellow-400' }
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Real-time Processing', 'Cloud Infrastructure'],
      duration: '6 months',
      team: '8 engineers',
      image: '/images/case-studies/healthcare-analytics.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Trading Platform',
      client: 'Quantum Capital Partners',
      industry: 'finance',
      service: 'quantum-computing',
      description: 'Built a revolutionary quantum computing platform for high-frequency trading and risk management.',
      challenge: 'Quantum Capital needed to process complex financial models in real-time while maintaining millisecond response times for trading decisions.',
      solution: 'Developed a hybrid quantum-classical computing platform with quantum algorithms for portfolio optimization and risk assessment.',
      results: [
        { metric: '1000x', label: 'Faster portfolio optimization', icon: Zap, color: 'text-blue-400' },
        { metric: '45%', label: 'Improved risk-adjusted returns', icon: TrendingUp, color: 'text-green-400' },
        { metric: '99.9%', label: 'System uptime', icon: Shield, color: 'text-purple-400' },
        { metric: '$15M+', label: 'Additional annual revenue', icon: DollarSign, color: 'text-yellow-400' }
      ],
      technologies: ['Quantum Computing', 'Hybrid Algorithms', 'Real-time Processing', 'Advanced Security'],
      duration: '12 months',
      team: '12 engineers',
      image: '/images/case-studies/quantum-trading.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'Global Manufacturing Corp',
      industry: 'manufacturing',
      service: 'iot-platform',
      description: 'Transformed traditional manufacturing operations with IoT sensors and AI-driven predictive maintenance.',
      challenge: 'Global Manufacturing struggled with unplanned downtime, inefficient maintenance schedules, and lack of real-time production insights.',
      solution: 'Deployed a comprehensive IoT platform with 10,000+ sensors, AI-powered predictive maintenance, and real-time production monitoring.',
      results: [
        { metric: '60%', label: 'Reduction in unplanned downtime', icon: ArrowDown, color: 'text-green-400' },
        { metric: '25%', label: 'Increase in production efficiency', icon: ArrowUp, color: 'text-blue-400' },
        { metric: '30%', label: 'Lower maintenance costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '3.2x', label: 'ROI within first year', icon: TrendingUp, color: 'text-purple-400' }
      ],
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Edge Computing', 'Cloud Platform'],
      duration: '8 months',
      team: '10 engineers',
      image: '/images/case-studies/smart-manufacturing.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support Automation',
      client: 'TechRetail Solutions',
      industry: 'retail',
      service: 'ai-automation',
      description: 'Implemented intelligent customer support automation that improved response times and customer satisfaction.',
      challenge: 'TechRetail faced overwhelming customer support volume, long response times, and inconsistent service quality across channels.',
      solution: 'Built an AI-powered customer support platform with natural language processing, automated ticket routing, and intelligent response generation.',
      results: [
        { metric: '80%', label: 'Faster response times', icon: Zap, color: 'text-blue-400' },
        { metric: '95%', label: 'Customer satisfaction rate', icon: Star, color: 'text-yellow-400' },
        { metric: '70%', label: 'Reduction in support costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '24/7', label: 'Support availability', icon: Clock, color: 'text-purple-400' }
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Automation', 'Multi-channel Integration'],
      duration: '4 months',
      team: '6 engineers',
      image: '/images/case-studies/customer-support.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Detection System',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'cybersecurity',
      description: 'Developed an advanced AI-powered cybersecurity platform for real-time threat detection and response.',
      challenge: 'SecureBank needed to protect against sophisticated cyber threats while maintaining compliance with strict financial regulations.',
      solution: 'Built a comprehensive cybersecurity platform with AI-powered threat detection, automated response systems, and compliance monitoring.',
      results: [
        { metric: '99.9%', label: 'Threat detection accuracy', icon: Shield, color: 'text-green-400' },
        { metric: '90%', label: 'Faster threat response', icon: Zap, color: 'text-blue-400' },
        { metric: '100%', label: 'Regulatory compliance', icon: CheckCircle, color: 'text-purple-400' },
        { metric: 'Zero', label: 'Security breaches', icon: Shield, color: 'text-green-400' }
      ],
      technologies: ['AI Security', 'Threat Intelligence', 'Automated Response', 'Compliance Monitoring'],
      duration: '10 months',
      team: '15 engineers',
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration & DevOps Automation',
      client: 'Enterprise Solutions Ltd',
      industry: 'technology',
      service: 'cloud-devops',
      description: 'Migrated legacy systems to cloud infrastructure with automated DevOps processes.',
      challenge: 'Enterprise Solutions struggled with slow deployment cycles, infrastructure scaling issues, and high operational costs.',
      solution: 'Executed a comprehensive cloud migration with automated CI/CD pipelines, infrastructure as code, and monitoring systems.',
      results: [
        { metric: '10x', label: 'Faster deployment cycles', icon: Zap, color: 'text-blue-400' },
        { metric: '60%', label: 'Reduction in infrastructure costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '99.9%', label: 'System availability', icon: Shield, color: 'text-purple-400' },
        { metric: 'Auto-scaling', label: 'Infrastructure capability', icon: TrendingUp, color: 'text-yellow-400' }
      ],
      technologies: ['Cloud Migration', 'DevOps Automation', 'CI/CD Pipelines', 'Infrastructure as Code'],
      duration: '9 months',
      team: '12 engineers',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: caseStudies.length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: caseStudies.filter(cs => cs.industry === 'healthcare').length },
    { id: 'finance', name: 'Finance', icon: Coins, count: caseStudies.filter(cs => cs.industry === 'finance').length },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: caseStudies.filter(cs => cs.industry === 'manufacturing').length },
    { id: 'retail', name: 'Retail', icon: Users, count: caseStudies.filter(cs => cs.industry === 'retail').length },
    { id: 'technology', name: 'Technology', icon: Globe, count: caseStudies.filter(cs => cs.industry === 'technology').length }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Brain, count: caseStudies.length },
    { id: 'ai-analytics', name: 'AI Analytics', icon: ChartBar, count: caseStudies.filter(cs => cs.service === 'ai-analytics').length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, count: caseStudies.filter(cs => cs.service === 'quantum-computing').length },
    { id: 'iot-platform', name: 'IoT Platform', icon: Wifi, count: caseStudies.filter(cs => cs.service === 'iot-platform').length },
    { id: 'ai-automation', name: 'AI Automation', icon: Bot, count: caseStudies.filter(cs => cs.service === 'ai-automation').length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: caseStudies.filter(cs => cs.service === 'cybersecurity').length },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: caseStudies.filter(cs => cs.service === 'cloud-devops').length }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const industryMatch = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || cs.service === selectedService;
    return industryMatch && serviceMatch;
  });

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>CaseStudies | Zion Tech Group</title>
        <meta name="description" content="CaseStudies - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">CaseStudies</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
