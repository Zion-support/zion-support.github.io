import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

import React from 'react'
=======
>>>>>>> origin/main
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
export default MicroSaasServicesPage;
const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      price: 'Starting at $99/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      features: ['24/7 Support', 'Multi-language', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      color: 'from-purple-500 to-pink-500',
      link: '/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for your business.',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Reports', 'Incident Response'],
      price: 'Starting at $149/month',
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for your critical data.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control'],
      price: 'Starting at $59/month',
      color: 'from-green-500 to-emerald-500',
      link: '/zion-cloud-vault'
    },
    {
      icon: Zap,
      title: 'Zion Workflow Automation',
      description: 'Streamline your business processes with intelligent workflow automation.',
      features: ['Process Automation', 'Task Scheduling', 'Integration Tools', 'Performance Analytics'],
      price: 'Starting at $89/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-workflow-automation'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-powered customer relationship management with predictive analytics.',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automation Rules'],
      price: 'Starting at $129/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-crm-intelligence'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and regular security updates.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success.'
    },
    {
      icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.'
    }
  ];
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function MicroSaasServicesPage() {
  return (
    <>
      <Helmet>
        <title>MicroSaasServices - Zion Tech Group</title>
<<<<<<< HEAD
      
            <h1 className="text-4xl font-bold text-white mb-6">MicroSaasServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional microsaasservices services coming soon.</p>
            
              Contact Us

      </>
  );

=======
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';

export default function MicroSaasServicesPage() {
  return (
    <>
      <Helmet>
        <title>Micro Saas Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Micro Saas Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional micro saas services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <></>
    <></>
      <Helmet></Helmet>
}
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions including analytics, chatbots, security, cloud backup, workflow automation, and CRM intelligence for modern businesses." /></meta>
        <meta name="keywords" content="micro SaaS, business software, analytics, chatbots, security, cloud backup, workflow automation, CRM" /></meta>
=======
        <meta name="description" content="Professional micro saas services solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">MicroSaasServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional micro saas services solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
          </Helmet>
</>
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
