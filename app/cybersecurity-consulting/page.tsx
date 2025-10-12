<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

import { Shield, ArrowRight, CheckCircle, Brain, Star, Lock, Eye } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
>>>>>>> origin/main
export default function CybersecurityConsulting() {
<<<<<<< HEAD
  const features = [
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and assess your current security posture'
    },
    {
      icon: <Lock className="w-5h-5ml-2" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements'
    },
    {
      icon: <Eye className="w-5h-5ml-2" />,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management'
    },
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team to prevent human error attacks'
    }
  ]

  const consultingFeatures = [
    {
      category: 'Security Assessment',
      items: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Security Audits', 'Compliance Reviews', 'Gap Analysis']
    },
    {
      category: 'Implementation',
      items: ['Security Architecture', 'Policy Development', 'Tool Implementation', 'Process Design', 'Training Programs', 'Change Management']
    },
    {
      category: 'Monitoring & Response',
      items: ['24/7 SOC Services', 'Incident Response', 'Threat Hunting', 'Forensic Analysis', 'Security Monitoring', 'Alert Management']
    },
    {
      category: 'Compliance',
      items: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'PCI-DSS Compliance', 'ISO 27001', 'NIST Framework']
    }
  ]

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: '/project',
      description: 'Comprehensive security assessment',
      features: [
        'Security audit',
        'Vulnerability assessment',
        'Risk analysis',
        'Compliance review',
        'Detailed report',
        'Recommendations'
      ],
      popular: false;
    },
    {
      name: 'Implementation',
      price: '$9,999',
      period: '/project',
      description: 'Complete security implementation',
      features: [
        'Security assessment',
        'Tool implementation',
        'Policy development',
        'Team training',
        '3 months support',
        'Compliance guidance'
      ],
      popular: true;
    },
    {
      name: 'Ongoing',
      price: '$4,999',
      period: '/month',
      description: 'Continuous security management',
      features: [
        '24/7 monitoring',
        'Incident response',
        'Regular assessments',
        'Compliance management',
        'Security updates',
        'Dedicated support'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'Healthcare Provider',
      content: 'Cybersecurity Consulting helped us achieve HIPAA compliance and significantly improve our security posture.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      content: 'Their threat intelligence and incident response capabilities prevented a major security breach. Highly recommended.',
      rating: 5;
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Platform',
      content: 'The security training program transformed our team's awareness. We've seen a 90% reduction in security incidents.',
      rating: 5;
    }
  ]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function CybersecurityConsultingPage() {
  return (
    <>
      <Helmet>
        <title>CybersecurityConsulting - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity consulting solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">CybersecurityConsulting</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cybersecurity consulting solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
  )
<<<<<<< HEAD
};

=======
  return (
    <>
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity consulting by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cybersecurity Consulting</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cybersecurity consulting coming soon.</p>
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
};
>>>>>>> origin/main
=======
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
