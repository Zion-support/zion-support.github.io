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
import EnhancedLayout from '../../components/layout/EnhancedLayout';        {/* Header */}
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
        <section className=\"bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center\">
          <div className=\"max-w-5xl mx-auto px-6\">
            <div className=\"inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6\">
              <Layers className=\"w-4 h-4 mr-2\"  />
        <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Layers className="w-4 h-4 mr-2"  />            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className=\"bg-white border border-gray-200 rounded-xl p-6 shadow-lg \"hover\": shado w-xl transition-shadow\">
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-4\">
                      <IconComponent className=\"w-6 h-6 text-white\"  />
                    </div>
                    <h3 className=\"text-xl font-semibold text-gray-900\">{service.name}</h3>
                  </div>
                  <p className=\"text-gray-600 mb-4\">{service.description}</p>
                  <ul className=\"space-y-2 mb-6\">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                        <Check className=\"w-3 h-3 text-green-500 mr-2 flex-shrink-0\"  />
const \"Services\": NextPage = () => {
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Globe, Smartphone, Shield, Database, Cpu, Zap } from 'lucide-react';
const "Services": NextPage = () => {            {services.map((service) => (
              <div
                key={service.title}
                className=\"bg-white rounded-lg shadow-lg overflow-hidden \"hover\": shadow-xl transition-shadow\"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className=\"h-16 w-16 text-white\" />
                </div>
                <div className=\"p-6\">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                    {service.title}
                  </h3>
                  <p className=\"text-gray-600 mb-4\">
                    {service.description}
                  </p>
                  <ul className=\"space-y-2 mb-6\">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className=\"flex items-center text-sm text-gray-600\">
                        <div className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></div>
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>                  <Link
                    href={service.href}
                    className=\"text-blue-600 \"hover\": text-blue-700 font-medium flex items-center\"
                  >
                    Learn More
                    <ArrowRight className=\"ml-1 h-4 w-4\" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">
              Our Development Process
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              We follow a proven methodology to ensure successful project delivery 
              and exceed your expectations.
            </p>
          </div>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">                  </div>
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">
                      Security First
                    </h3>
                    <p className=\"text-gray-600\">
                      Security is built into every solution we develop, ensuring 
                      your data and applications are protected.
                    </p>
                  </div>
                </div>
                <div className=\"flex items-start\">
                  <div className=\"bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1\">
                    <Brain className=\"h-6 w-6\" />
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Brain className="h-6 w-6" />                achieve your business goals with our technology solutions.
              </p>
              <div className=\"space-y-4\">
                <Link
                  href=\"/contact\"
                  className=\"block w-full bg-blue-600 \"hover\": bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors\"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href=\"/about\"
                  className=\"block w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors\"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=\"py-20 bg-blue-600 text-white\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\">
          <h2 className=\"text-4xl font-bold mb-6\">
            Ready to Transform Your Business?
          </h2>
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">
            Join hundreds of businesses that have already transformed their operations 
            with our innovative technology solutions.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              Start Your Project
            </Link>
            <Link
              href=\"/case-studies\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Services;
  import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Database,Brain,Check,ExternalLink,Phone,Mail,ArrowRight,Target,Zap,Shield,FileText,BarChart3,Cpu,Headphones,Calendar,Send,Layers } from 'lucide-react'; const categories = ['AI Services','IT Services','Development','Security']; export default function ServicesIndex() { const services = [ { name: 'AI & Machine Learning',description: 'Advanced AI solutions for business automation and intelligence',icon: Brai n,href: '/services/ai-machine-learning',features: ['Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics'] },{ name: 'Micro SaaS Solutions',description: 'Specialized software solutions for specific business needs',icon: Cp u,href: '/services/micro-saas',features: ['Custom Applications','API Integration','Scalable Infrastructure','Multi-tenant Support'] },{ name: 'AI Content Creation',description: 'Generate high-quality content at scale with AI-powered tools',icon: FileTex t,href: '/services/ai-content-creation',features: ['Blog Posts','Social Media','Email Campaigns','SEO Optimization'] },{ name: 'Email Automation',description: 'Automate email marketing campaigns with intelligent sequences',icon: Sen d,href: '/services/email-automation',features: ['Lead Nurturing','Behavioral Triggers','A/B Testing','Analytics'] },{ name: 'Customer Support Platform',description: 'AI-powered customer support with chatbots and ticketing',icon: Headphone s,href: '/services/customer-support',features: ['Live Chat','Ticket Management','Knowledge Base','Analytics'] },{ name: 'Event Management',description: 'Complete event planning and management solution',icon: Calenda r,href: '/services/event-management',features: ['Registration','Ticketing','Analytics','Mobile App'] },{ name: 'Cloud & DevOps',description: 'Scalable cloud infrastructure and deployment automation',icon: Databas e,href: '/services/cloud-devops',features: ['Cloud Migration','CI/CD Pipelines','Infrastructure as Code','Monitoring'] },{ name: 'Cybersecurity',description: 'Comprehensive security solutions for digital protection',icon: Shiel d,href: '/services/cybersecurity',features: ['Threat Detection','Vulnerability Assessment','Compliance','Incident Response'] } ]; const benefits = [ 'Reduce operational costs by 50%','Increase productivity by 70%','Improve business efficiency by 60%','Scale operations without proportional cost increase','Enhance customer experience and satisfaction','Accelerate time-to-market for new features' ]; const useCases = [ 'E-commerce & Retail','SaaS & Technology','Financial Services','Healthcare & Medical','Real Estate','Professional Services','Education & Training','Non-profit Organizations' ]; return ( <> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including AI,micro SaaS,cloud services,and cybersecurity. Transform your business with our innovative services." /> </Head>  import type { NextPage } from 'next'; import Link from 'next/link'; import EnhancedLayout from '../../components/layout/EnhancedLayout'; return ( <EnhancedLayout> <h1 className="text-3xl font-bold mb-4">Our Services</h1> <p className="text-gray-700 mb-6">Comprehensive solutions across software,cloud,and AI.</p> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Web Application Development </Link> <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Mobile App Development </Link> <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Cloud Migration </Link> <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> AI Model Development </Link> <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Performance Optimization </Link> <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition"> Security Auditing </Link> </div> </EnhancedLayout> )};
