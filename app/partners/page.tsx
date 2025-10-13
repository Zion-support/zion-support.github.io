<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;
=======
'use client';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap, TrendingUp } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
import { Handshake, Award, Users, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

<<<<<<< HEAD
import { Link } from 'react-router-dom;

import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { CheckCircle, Handshake, Users, Award } from 'lucide-react;

const PartnersPage = () => {;
  const partners = [;
    {
<<<<<<< HEAD
      name: 'Microsoft,
      logo: '/api/placeholder/200/100,
    },
    {
      name: 'Amazon Web Services,
      logo: '/api/placeholder/200/100,
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react;
    {
      name: 'Microsoft,
      logo: '/images/partners/microsoft.png,
      description: 'Strategic partnership for Azure cloud solutions and AI services,
      category: 'Cloud & AI,
      website: 'https://microsoft.com,
      tier: 'strategic
    },    {
      name: 'Amazon Web Services,
      logo: '/images/partners/aws.png,
      description: 'Leading cloud infrastructure and machine learning platform provider,
      category: 'Cloud Computing,
      website: 'https://aws.amazon.com,
      tier: 'strategic
    },
      tier: 'strategic});)},
    {
      name: 'Google Cloud,
      logo: '/images/partners/google-cloud.png,
      description: 'Advanced AI and machine learning platform with global reach,
      category: 'Cloud & AI,
      website: 'https://cloud.google.com,
      tier: 'strategic
    },    {
      name: 'IBM,
      logo: '/images/partners/ibm.png,
      description: 'Enterprise AI solutions and hybrid cloud platform,
      category: 'Enterprise AI,
      website: 'https://ibm.com,
      tier: 'preferred
    },
    {
      name: 'Salesforce,
      logo: '/images/partners/salesforce.png,
      description: 'Customer relationship management and business automation,
      description: 'Customer relationship management and business automation platform',      category: 'CRM & Automation,
      website: 'https://salesforce.com,
      tier: 'preferred});)
},
    {
      name: 'Oracle,
      logo: '/images/partners/oracle.png,
      description: 'Database solutions and enterprise applications,
      category: 'Database & Enterprise,
      website: 'https://oracle.com,
      tier: 'preferred});)
},
    {
      name: 'ServiceNow,
      logo: '/images/partners/servicenow.png,
      description: 'IT service management and workflow automation,
      category: 'IT Management,
      website: 'https://servicenow.com,
      tier: 'certified});)
},
    {
      name: 'Splunk,
      logo: '/images/partners/splunk.png,
      description: 'Data analytics and security monitoring platform,
      category: 'Analytics & Security,
      website: 'https://splunk.com,
      tier: 'certified
    }  ];

  const benefits = [;;

    'Access to cutting-edge technology platforms,
    'Joint go-to-market strategies,
    'Co-marketing opportunities,
    'Technical support and training,
    'Early access to new features,
    Dedicated partner success manager
  ];

  const partnershipTiers = [;;

    {
      name: 'Strategic,
      description: 'Deep integration and co-innovation,
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20,
      borderColor: 'border-purple-400/50,
      icon: Award
    },
    {
      name: 'Preferred,
      description: 'Enhanced support and collaboration,
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20,
      borderColor: 'border-blue-400/50,
      icon: Handshake
    },
    {
      name: 'Certified,
      description: 'Verified expertise and capabilities,
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20,
      borderColor: 'border-green-400/50,
      category: 'Cloud & AI'
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
=======
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform partnership',
      category: 'AI & ML',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {}
      name: 'IBM',
      logo: '/images/partners/ibm.png',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Enterprise AI solutions and hybrid cloud platform',
    {}
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      description: 'Customer relationship management and business automation platform',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {}
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical support and training',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  const partnershipTiers = [
    {}
      name: 'Strategic',
      description: 'Deep integration and co-innovation',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {}
      name: 'Preferred',
      description: 'Enhanced support and collaboration',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      icon: Handshake
    },
    {}
      name: 'Certified',
      description: 'Verified expertise and capabilities',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      icon: CheckCircle
=======
      description: 'Quantum computing and enterprise solutions collaboration',
      category: 'Quantum Computing',
=======
      description: 'Strategic partnership for enterprise AI and Watson services',
      category: 'Enterprise AI',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
<<<<<<< HEAD
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU acceleration and AI hardware solutions',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Processor optimization and edge computing solutions',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
=======
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      category: 'CRM & Automation',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Preferred partner for database and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    }
  ];

<<<<<<< HEAD
  const partnershipTiers = [
    {
<<<<<<< HEAD
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared technology roadmaps',
      color: 'from-purple-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10',
      borderColor: 'border-purple-400/50',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred vendors with deep technical integration',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-400/50',
      icon: <Handshake className="w-8 h-8" />
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers with proven expertise',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-400/50',
      icon: <CheckCircle className="w-8 h-8" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep knowledge of partner technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Joint Solutions',
      description: 'Collaborative development of innovative solutions for clients'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Accelerated Innovation',
      description: 'Access to cutting-edge technologies and early product releases'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'preferred':
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'certified':
        return 'bg-gradient-to-r from-green-500 to-blue-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    }

  ];

  const getTierInfo = (tier: string) => {;;

<<<<<<< HEAD
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});)
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
=======
  const getPartnersByTier = (tier: string) => {
    return partners.filter(partner => partner.tier === tier);
  };
=======
  const tiers = [
    {
      name: "Platinum",
      color: "from-gray-400 to-gray-600",
      requirements: "Strategic partnership with significant revenue commitment",
      benefits: ["Highest priority support", "Dedicated account manager", "Custom solutions", "Joint go-to-market"]
    },
    {
      name: "Gold",
      color: "from-yellow-400 to-yellow-600",
      requirements: "Strong partnership with regular collaboration",
      benefits: ["Priority support", "Training programs", "Marketing support", "Technical resources"]
    },
    {
      name: "Silver",
      color: "from-gray-300 to-gray-500",
      requirements: "Partnership with mutual business opportunities",
      benefits: ["Standard support", "Partner portal access", "Co-marketing opportunities", "Technical documentation"]
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>
<<<<<<< HEAD

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}
<<<<<<< HEAD

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
            </h1>
            <p></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div></div>
              <div></div>
                <di></di>50+</div>
                <di></di>Technology Partners</div>
              </div>
              <div></div>
                <di></di>15+</div>
                <di></di>Years of Partnership</div>
              </div>
              <div></div>
                <di></di>100%</div>
                <di></di>Certified Solutions</div>
              </div>
=======
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions. Our strategic partnerships enable us to provide comprehensive technology solutions to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                View Partnership Program
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
<<<<<<< HEAD

        <section></section>
          <div></div>
            <div></div>
              <h></h>Partnership Tiers</h2>
              <p></p>
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div></div>
              {partnershipTiers.map((tier, index) => (

                      {partner.website && (

                {benefits.map((benefit, index) => (

      nam,    e: 'Microsoft,
      logo: /api/placeholder/200
      descriptio,
    n: 'Strategic partnership for Azure cloud solutions and AI services,
      category: Cloud & AI
    },
    {
      name: 'Amazon Web Services,
      logo: /api/placeholder/200
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider,
      category: Cloud Computing
    },
    {
      name: 'Google Cloud,
      logo: /api/placeholder/200
    },
    {
      name: 'IBM,
      logo: /api/placeholder/200
export default PartnersPage;
=======
<<<<<<< HEAD
  const partners: Partner[] = [,
=======
  const partners: Partner[] = [
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',},
    {id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Globe, Award, Handshake, CheckCircle, Star, ArrowRight, Building2, Shield, Zap } from 'lucide-react';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
<<<<<<< HEAD
      logo: '🏢',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      benefits: ['Azure Integration', 'AI Services', 'Enterprise Support'],
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      category: 'Cloud Partner',
      description: 'Comprehensive cloud infrastructure solutions',
      benefits: ['AWS Services', 'Scalability', 'Global Reach'],
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning platforms',
      benefits: ['ML Services', 'Data Analytics', 'AI Tools'],
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '💼',
      category: 'Enterprise Partner',
      description: 'Enterprise-grade AI and blockchain solutions',
      benefits: ['Watson AI', 'Blockchain', 'Consulting'],
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '📊',
      category: 'CRM Partner',
      description: 'Customer relationship management solutions',
      benefits: ['CRM Integration', 'Sales Automation', 'Analytics'],
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      category: 'Database Partner',
      description: 'Enterprise database and cloud solutions',
      benefits: ['Database Services', 'Cloud Migration', 'Support'],
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of partners and clients'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Industry-recognized certifications and compliance standards'
    },
    {
      icon: Handshake,
      title: 'Joint Marketing',
      description: 'Collaborative marketing opportunities and co-branded content'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Priority support and dedicated account management'
    },
    {
      icon: Zap,
      title: 'Technical Training',
      description: 'Comprehensive training programs and certification courses'
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'Enterprise-grade security and compliance frameworks'
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  ];
  const benefits = [
    {title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners',
      icon: CheckCircle;,},
    {title: 'Priority Support',
      description: 'Get priority access to partner resources and support channels',
      icon: CheckCircle;,},
    {title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early release features',
      icon: CheckCircle;,},
    {title: 'Cost Optimization',
      description: 'Leverage partner pricing and volume discounts for your projects',
      icon: CheckCircle;,}];
  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management']
=======
      logo: '/api/placeholder/200/100',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and machine learning platform partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation solutions partner',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration partner',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'certified'
    }
  ];

  const partnerTiers = {
    strategic: {
      label: 'Strategic Partner',
      color: 'from-cyan-400 to-blue-500',
      icon: Award
    },
    preferred: {
      label: 'Preferred Partner',
      color: 'from-purple-400 to-pink-500',
      icon: Handshake
    },
    certified: {
      label: 'Certified Partner',
      color: 'from-green-400 to-emerald-500',
      icon: CheckCircle
    }
  };

  const benefits = [
    {
      icon: Building2,
      title: 'Strategic Alliances',
      description: 'Deep partnerships with industry leaders to deliver comprehensive solutions'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to specialized expertise and resources from our partner ecosystem'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Collaborative innovation to bring cutting-edge solutions to market faster'
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Expanded market reach through our global partner network'
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  return(<>)
      <Helmet />
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" />
=======
  return (
    <>
      <Helmet></Helmet>
        <title></titl>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." /></meta>
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" /></meta>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      </Helmet>

<<<<<<< HEAD
      <Navigation />
=======
      <Navigation /></Navigation>
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
  const tiers = [
    {
      name: 'Platinum',
      color: 'from-cyan-500 to-blue-600',
      requirements: 'Strategic partnership with significant revenue commitment',
      benefits: ['Priority support', 'Co-marketing opportunities', 'Custom solutions', 'Dedicated resources']
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-600',
      requirements: 'Established partnership with proven track record',
      benefits: ['Enhanced support', 'Training programs', 'Marketing support', 'Technical resources']
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      requirements: 'Growing partnership with potential for expansion',
      benefits: ['Standard support', 'Basic training', 'Marketing materials', 'Community access']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Partner
              </span>
              <br />
              <span className="text-white">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing network of partners and unlock new opportunities in AI, cloud computing, 
              and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Partnership Benefits
              </button>
=======
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, strategic alliances, technology partnerships, cloud providers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver comprehensive AI and IT solutions that drive business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Strategic Partners
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Industry Recognition
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                Global Network
              </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Our Technology Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with leading technology companies to deliver the best solutions for our clients.</p>
              </p>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

  ];

                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300">,</div>
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🏢</div>
<<<<<<< HEAD
      {/* Partners by Tier */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {Object.entries(partnerTiers).map(([tier, tierInfo]) => (
              <div key={tier} className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {tierInfo.title}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {tierInfo.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groupedPartners[tier]?.map((partner, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-12 h-12 object-contain mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {partner.name}
                          </h3>
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${tierInfo.color}`}>
                            {tierInfo.title}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {partner.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {partner.category}
                        </span>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partnership Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Discussion</h3>
                <p className="text-gray-600">We discuss your partnership goals and mutual benefits.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
                <p className="text-gray-600">We evaluate compatibility and potential for mutual success.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600">We formalize the partnership with clear terms and expectations.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
                <p className="text-gray-600">We launch joint initiatives and begin delivering value together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of strategic partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Become a Partner
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn About Us
              </Link>
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Joint marketing opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Technical integration support</span>
                    </div>
                  </div>
                </div>
=======
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                ></button>
                  {category}
                </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Partners by Tier */}
        {partnershipTiers.map((tier, tierIndex) => {
          const tierPartners = getPartnersByTier(tier.name.toLowerCase().split(' ')[0]);
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierIndex} className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {tier.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-cyan-400 mb-4">
                          <span className="px-2 py-1 bg-cyan-500/20 rounded-full">{partner.category}</span>
                        </div>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            <span>Visit Website</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Market Access</h3>
                  <p className="text-gray-300 text-sm">Access to our global client base and market opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Innovation</h3>
                  <p className="text-gray-300 text-sm">Joint R&D projects and co-innovation opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated partnership management and technical support</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Recognition</h3>
                  <p className="text-gray-300 text-sm">Industry recognition and thought leadership opportunities</p>
                </div>
              </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"></div>
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center"></div>
                    <div className="text-4xl opacity-50"></di>🏢</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>
=======
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${partner.tier === 'Platinum' ? 'from-cyan-500 to-blue-600' : partner.tier === 'Gold' ? 'from-yellow-500 to-orange-600' : 'from-gray-400 to-gray-600'} text-white`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                </div>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology leaders and help shape the future of AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Partnership Discussion
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Download Partnership Kit
                </button>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
<<<<<<< HEAD
=======
        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.requirements}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                  </div>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
=======
        {/* Partner Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Partner With Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and other industry leaders to deliver cutting-edge solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, technology partners" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships for innovative solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and provide our clients with access to the latest technologies.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTierColor(partner.tier)}`}>
                    {partner.tier.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {partner.category}
                  </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
=======
        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Partner Network
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => {
                const tierInfo = partnerTiers[partner.tier];
                const TierIcon = tierInfo.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 object-contain"
                      />
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tierInfo.color} text-white`}>
                        <TierIcon className="w-3 h-3 mr-1" />
                        {tierInfo.label}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-slate-700 px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Partnership Tiers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {Object.entries(partnerTiers).map(([tier, info]) => {
                const TierIcon = info.icon;
                return (
                  <div key={tier} className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <TierIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{info.label}</h3>
                    <ul className="text-left space-y-2 text-gray-400">
                      {tier === 'strategic' && (
                        <>
                          <li>• Joint go-to-market strategies</li>
                          <li>• Co-development opportunities</li>
                          <li>• Priority support and resources</li>
                          <li>• Executive relationship management</li>
                        </>
                      )}
                      {tier === 'preferred' && (
                        <>
                          <li>• Preferred pricing and terms</li>
                          <li>• Marketing collaboration</li>
                          <li>• Technical support</li>
                          <li>• Training and certification</li>
                        </>
                      )}
                      {tier === 'certified' && (
                        <>
                          <li>• Certified solution provider</li>
                          <li>• Technical validation</li>
                          <li>• Partner portal access</li>
                          <li>• Basic support</li>
                        </>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Learn More
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                  Download Partnership Guide
                </button>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
<<<<<<< HEAD
=======
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic</h3>
                <p className="text-gray-300 text-sm">Deep integration and joint go-to-market strategies</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Joint solution development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Priority support and training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Preferred</h3>
                <p className="text-gray-300 text-sm">Enhanced collaboration and preferred pricing</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Preferred pricing and terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Technical training and certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Marketing support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Certified</h3>
                <p className="text-gray-300 text-sm">Certified expertise and basic partnership benefits</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Certified professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Partner portal access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Partnership Team
              </button>
            </div>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
        </section>

        {/* Partner Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partner Requirements</h2>
              <p className="text-xl text-gray-300">
                We look for partners who share our commitment to excellence and innovation
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and start growing your business with Zion Tech Group.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Partnership Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
  );
};

  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];];];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

  const filteredPartners = partners.filter(partner => {)
        return 'from-green-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = (tier: string) => {,
<<<<<<< HEAD
=======
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" /></Star>;
      case 'preferred':
        return <Award className="w-4 h-4" /></Award>;
      case 'certified':
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;,}};

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
      {/* Hero Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
<<<<<<< HEAD
=======
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with industry leaders to deliver the best AI and IT solutions.</p>
=======
        return <CheckCircle className="w-4 h-4" /></CheckCircle>;
      default:
        return <Handshake className="w-4 h-4" /></Handshake>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." /></meta>
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" /></meta>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></spa>Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            We work with industry leaders to deliver the best AI and IT solutions. 
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      {/* Partnership Benefits */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer comprehensive partnership programs that benefit both our partners and our clients;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
<<<<<<< HEAD
=======
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>
              <p className="text-gray-300">Work together to develop innovative solutions that benefit both organizations and their customers.</p>
=======
      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h>Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer comprehensive partnership programs that benefit both our partners and our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Handshake className="w-8 h-8 text-white" /></Handshake>
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h>Strategic Collaboration</h3>
              <p className="text-gray-300"></p>
                Work together to develop innovative solutions that benefit both organizations and their customers.
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Users className="w-8 h-8 text-white" /></Users>
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>
              <p className="text-gray-300">Leverage our combined expertise and market presence to reach new customers and expand market share.</p>
=======
              <h3 className="text-xl font-bold text-white mb-4"></h>Joint Go-to-Market</h3>
              <p className="text-gray-300"></p>
                Leverage our combined expertise and market presence to reach new customers and expand market share.
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Award className="w-8 h-8 text-white" /></Award>
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>
              <p className="text-gray-300">Access to training, certification, and technical resources to stay ahead of technology trends.</p>
=======
              <h3 className="text-xl font-bold text-white mb-4"></h>Certification Programs</h3>
              <p className="text-gray-300"></p>
                Access to training, certification, and technical resources to stay ahead of technology trends.
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </p>
            </div>
          </div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      {/* Partners Grid */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md: flex-row gap-4 mb-12">,</div>
            <select;
              value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
              {categories.map(category => ()
                <option key={category}value={category}>
                  {category === 'all' ? 'All Categories' : category} </option>
              {tiers.map(tier => ()
                <option key={tier}value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)} </option>
<<<<<<< HEAD
=======
=======
      {/* Partners Grid */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-12"></div>
            <select
              value={selectedCategory}
              onChange={(e) =></select> setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}></option>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedTier}
              onChange={(e) =></select> setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tiers.map(tier => (
                <option key={tier} value={tier}></option>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              ))}
            </select>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
            {filteredPartners.map((partner) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              <div key={partner.id}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 border border-white/20">,</div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)</span>}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)}flex items-center gap-1`}>{getTierIcon(partner.tier)</div>}{partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  <a;
                    href={partner.website}target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover: text-blue-300 font-medium transition-colors flex items-center gap-2",
                  >
                    Visit Website;
                    <ExternalLink className="w-4 h-4" />
<<<<<<< HEAD
=======
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20"></div>
                <div className="flex items-center justify-between mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center"></div>
                    <span className="text-white font-bold text-lg"></spa>{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}></div>
                    {getTierIcon(partner.tier)}
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>

                <div className="flex items-center justify-between"></div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                  ></a>
                    Visit Website
                    <ExternalLink className="w-4 h-4" /></ExternalLink>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12"></div>
              <p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
            </div>
          )} </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      {/* Partnership Tiers */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer different partnership levels to meet the needs of various organizations;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
<<<<<<< HEAD
=======
=======
      {/* Partnership Tiers */}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h>Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer different partnership levels to meet the needs of various organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                  <CheckCircle className="w-6 h-6 text-white" /></CheckCircle>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Certified Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"></div>
                  <Award className="w-6 h-6 text-white" /></Award>
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Preferred Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Dedicated partner manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>
                  <Star className="w-6 h-6 text-white" /></Star>
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Strategic Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Joint product development</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Executive relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Become Our Partner;
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Apply for Partnership;
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Learn More;
<<<<<<< HEAD
=======
=======
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Apply for Partnership
                <ArrowRight className="inline-block ml-2 w-5 h-5" /></ArrowRight>
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  );
};

export default PartnersPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
