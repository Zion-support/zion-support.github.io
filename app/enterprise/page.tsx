'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react'
const EnterprisePage: React.FC = () => {
    const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
  },
    {
    icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
  },
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
  },
    {
    icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
  },
    {
    icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
  },
    {
    icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
  }
    ]
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
  }
    ]

    'Enable data-driven decisions',

    'Scale with business growth',

    'Integrate with existing systems',

            Comprehensive enterprise-grade solutions designed for large-scale business operations.;
            <h2>
              Comprehensive Solutions
            </h2>
            <p>
              End-to-end enterprise solutions that address every aspect of your business operations.
            </p>
          <h2>
            Ready to Transform Your Enterprise?
          </h2>
      <Footer />
  ),
};

export default EnterprisePage;
