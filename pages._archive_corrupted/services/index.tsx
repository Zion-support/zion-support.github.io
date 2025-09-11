
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Cpu, Headphones, Calendar, Send, Layers } from 'lucide-react';
const categories = ['AI Services', 'IT Services', 'Development', 'Security'];
export default function ServicesIndex() {
  const services = [{
      "name": 'AI & Machine Learning',
      "description": 'Advanced AI solutions for business automation and intelligence',
      "icon": Brai n,
      "href": '/services/ai-machine-learning',
      "features": ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      "name": 'Micro SaaS Solutions',
      "description": 'Specialized software solutions for specific business needs',
      "icon": Cp u,
      "href": '/services/micro-saas',
      "features": ['Custom Applications', 'API Integration', 'Scalable Infrastructure', 'Multi-tenant Support']
    },
    {
      "name": 'AI Content Creation',
      "description": 'Generate high-quality content at scale with AI-powered tools',
      "icon": FileTex t,
      "href": '/services/ai-content-creation',
      "features": ['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization']
    },
    {
      "name": 'Email Automation',
      "description": 'Automate email marketing campaigns with intelligent sequences',
      "icon": Sen d,
      "href": '/services/email-automation',
      "features": ['Lead Nurturing', 'Behavioral Triggers', 'A/B Testing', 'Analytics']
    },
    {
      "name": 'Customer Support Platform',
      "description": 'AI-powered customer support with chatbots and ticketing',
      "icon": Headphone s,
      "href": '/services/customer-support',
      "features": ['Live Chat', 'Ticket Management', 'Knowledge Base', 'Analytics']
    },
    {
      "name": 'Event Management',
      "description": 'Complete event planning and management solution',
      "icon": Calenda r,
      "href": '/services/event-management',
      "features": ['Registration', 'Ticketing', 'Analytics', 'Mobile App']
    },
    {
      "name": 'Cloud & DevOps',
      "description": 'Scalable cloud infrastructure and deployment automation',
      "icon": Databas e,
      "href": '/services/cloud-devops',
      "features": ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring']
    },
    {
      "name": 'Cybersecurity',
      "description": 'Comprehensive security solutions for digital protection',
      "icon": Shiel d,
      "href": '/services/cybersecurity',
      "features": ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    }
  ];
  const benefits = ['Reduce operational costs by 50%',
    'Increase productivity by 70%',
    'Improve business efficiency by 60%',
    'Scale operations without proportional cost increase',
    'Enhance customer experience and satisfaction',
    'Accelerate time-to-market for new features'
  ];
  const useCases = ['E-commerce & Retail',
    'SaaS & Technology',
    'Financial Services',
    'Healthcare & Medical',
    'Real Estate',
    'Professional Services',
    'Education & Training',
    'Non-profit Organizations'
  ];
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, micro SaaS, cloud services, and cybersecurity. Transform your business with our innovative services."  />
      </Head>
import type { NextPage } from 'next';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
  return (
    <EnhancedLayout>
      <h1 className=\"text-3xl font-bold mb-4\">Our Services</h1>
      <p className=\"text-gray-700 mb-6\">Comprehensive solutions across software, cloud, and AI.</p>
      <div className=\"grid \"md\": grid-cols-2 lg:grid-cols-3 gap-6\">
        <Link href=\"/services/web-application-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Web Application Development
        </Link>
        <Link href=\"/services/mobile-app-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Mobile App Development
        </Link>
        <Link href=\"/services/cloud-migration-services-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Cloud Migration
        </Link>
        <Link href=\"/services/ai-model-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          AI Model Development
        </Link>
        <Link href=\"/services/performance-optimization-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Performance Optimization
        </Link>
        <Link href=\"/services/security-auditing-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  )
};

  return (

        {/* Header */}
        <header className=\"bg-white shadow-sm\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"flex justify-between items-center py-6\">
              <div className=\"flex items-center\">
                <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center\">
                  <span className=\"text-white font-bold text-xl\">Z</span>
                </div>
                <div className=\"ml-3\">
                  <h1 className=\"text-xl font-bold text-gray-900\">Zion Tech Group</h1>
                  <p className=\"text-xs text-gray-600\">Innovation & Technology</p>
                </div>
              </div>
              <nav className=\"hidden md: flex space-x-8\">
                <Link href=\"/\" className=\"text-gray-700 hover: tex t-blue-600\">Home</Link>
                <Link href=\"/services\" className=\"text-blue-600\">Services</Link>
                <Link href=\"/about\" className=\"text-gray-700 hover: tex t-blue-600\">About</Link>
                <Link href=\"/contact\" className=\"text-gray-700 hover: tex t-blue-600\">Contact</Link>
              </nav>
              <Link href=\"/contact\" className=\"bg-blue-600 text-white px-6 py-2 rounded-lg hover: b g-blue-700 transition-colors\">
                Get Started
              </Link>
            </div>
          </div>
        </header>

              Comprehensive Technology Solutions
            </div>
            <h1 className=\"text-4xl md: tex t-6xl font-bold text-white mb-4\">Our Services</h1>
            <p className=\"text-indigo-100 text-xl\">
              Transform your business with cutting-edge AI, micro SaaS, and technology solutions that drive growth and efficiency.
            </p>
          </div>
        </section>
        <section className=\"py-16 max-w-6xl mx-auto px-6\">
          <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">Our Service Portfolio</h2>
          <div className=\"grid \"md\": gri d-cols-2 lg: gri d-cols-3 gap-8\">
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Portfolio</h2>
          <div className="grid "md": gri d-cols-2 lg: gri d-cols-3 gap-8">

                      <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                        <Check className=\"w-3 h-3 text-green-500 mr-2 flex-shrink-0\"  />
const \"Services\": NextPage = () => {
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Globe, Smartphone, Shield, Database, Cpu, Zap } from 'lucide-react';
const "Services": NextPage = () => {

            <div className=\"bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Ready to Get Started?</h3>
              <p className=\"text-gray-700 mb-6\">
                Let\'s discuss your project requirements and how we can help you 
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Let's discuss your project requirements and how we can help you 

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      <section className=\"py-20 bg-blue-600 text-white\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg: px-8 text-center\">;
          <h2 className=\"text-4xl font-bold mb-6\">;
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">;
            Join hundreds of businesses that have already transformed their operations ;
            with our innovative technology solutions.;
          </p>;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">;
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
              View Case Studies;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  ),;

  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};
  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};

};
export default Services;