'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, Globe } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const _features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for your business needs'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with 99.9% uptime guarantee'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide cloud deployment and support for international businesses'
    }
  ];

  const _benefits = [
    'Scalable cloud infrastructure',
    'Enterprise-grade security',
    '24/7 monitoring and support',
    'Cost-effective solutions',
    'Easy migration and integration',
    'Compliance and data protection',
    'High availability and reliability',
    'Expert cloud management'
  ];

  return (
            </div>
          </div>
        </section>

  );
};

export default CloudServicesPage;