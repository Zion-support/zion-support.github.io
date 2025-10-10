'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}
const CaseStudiesPage: React.FC = () => {
const caseStudies: CaseStudy[] = [
    {
id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and inconsistent response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing capabilities.',
      results: [
        '60% reduction in customer service costs',
        '45% improvement in response times',
        '85% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and non-compliance with HIPAA regulations.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and compliance framework.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents post-implementation',
        '90% reduction in security vulnerabilities',
        'Automated compliance monitoring'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    }
  ];
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats;

export default CaseStudiesPage
  </button>
  </div>
  </div>
  </div>
  </section>
  </h1>
  </div>
}