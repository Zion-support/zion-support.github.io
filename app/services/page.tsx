'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Code, Zap, Shield, Users, BarChart, Database, Smartphone, Globe, Lock, TrendingUp, Settings, Calendar, FileText, Mail, Cpu, Target } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics and insights', icon: BarChart, features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'] },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation', icon: Zap, features: ['Workflow Automation', 'RPA Solutions', 'Smart Bots'] },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered customer service', icon: Users, features: ['Chatbots', 'Voice Assistants', 'Sentiment Analysis'] },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Advanced data insights and visualization', icon: Database, features: ['Data Mining', 'Pattern Recognition', 'Visualization'] },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation', icon: FileText, features: ['Text Generation', 'Image Creation', 'Video Production'] },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions', icon: Shield, features: ['Diagnosis Support', 'Treatment Planning', 'Drug Discovery'] },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI applications', icon: TrendingUp, features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading'] },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI-powered security solutions', icon: Lock, features: ['Threat Detection', 'Anomaly Detection', 'Security Automation'] }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', description: 'Comprehensive cloud solutions', icon: Cloud, features: ['Cloud Migration', 'Infrastructure Setup', 'Cloud Management'] },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Development operations and automation', icon: Settings, features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'] },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions', icon: Shield, features: ['Security Audits', 'Penetration Testing', 'Compliance'] },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Expert IT guidance and strategy', icon: Users, features: ['Technology Strategy', 'Digital Transformation', 'IT Roadmaps'] },
    { name: 'Database Services', href: '/database-services', description: 'Database design and management', icon: Database, features: ['Database Design', 'Performance Optimization', 'Data Migration'] },
    { name: 'Network Solutions', href: '/network-solutions', description: 'Network infrastructure and security', icon: Globe, features: ['Network Design', 'Security Implementation', 'Monitoring'] }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business intelligence and analytics', icon: BarChart, features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization'] },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'AI-powered content creation tools', icon: FileText, features: ['Blog Writing', 'Social Media', 'Email Campaigns'] },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Automated email marketing platform', icon: Mail, features: ['Email Automation', 'A/B Testing', 'Analytics'] },
    { name: 'Social Manager', href: '/micro-saas/social-manager', description: 'Social media management platform', icon: Users, features: ['Post Scheduling', 'Analytics', 'Engagement Tracking'] },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking and management', icon: TrendingUp, features: ['Expense Tracking', 'Budget Management', 'Reporting'] },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Automated scheduling system', icon: Calendar, features: ['Calendar Integration', 'Automated Reminders', 'Payment Processing'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth
          </p>
        </div>

        {/* AI Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Brain className="w-10 h-10 mr-3 text-cyan-400" />
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate, optimize, and scale your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.name} className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Cloud className="w-10 h-10 mr-3 text-cyan-400" />
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize, secure, and optimize your technology infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={service.name} className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Micro SaaS Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Code className="w-10 h-10 mr-3 text-cyan-400" />
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use SaaS applications designed to accelerate your business growth and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.name} className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
