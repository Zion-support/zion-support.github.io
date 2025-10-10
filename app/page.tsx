'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Code, Zap, Shield, Users, BarChart, Database, Smartphone, Globe, Lock, TrendingUp, Settings, Calendar, FileText, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent automation', icon: Zap },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered support', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data insights', icon: Database },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'Content creation', icon: FileText },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions', icon: Shield },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI', icon: TrendingUp },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Security solutions', icon: Lock }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', description: 'Cloud solutions', icon: Cloud },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Development operations', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions', icon: Shield },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Expert guidance', icon: Users },
    { name: 'Database Services', href: '/database-services', description: 'Database management', icon: Database },
    { name: 'Network Solutions', href: '/network-solutions', description: 'Network infrastructure', icon: Globe }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business analytics', icon: BarChart },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'AI content creation', icon: FileText },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Email automation', icon: Mail },
    { name: 'Social Manager', href: '/micro-saas/social-manager', description: 'Social media management', icon: Users },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking', icon: TrendingUp },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Scheduling system', icon: Calendar }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of cutting-edge AI and IT solutions that help modern businesses 
              automate, optimize, and scale their operations with unprecedented efficiency.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Brain className="w-10 h-10 mr-3 text-cyan-400" />
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/ai-services"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>View All AI Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Cloud className="w-10 h-10 mr-3 text-cyan-400" />
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize and secure your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/it-services"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>View All IT Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Code className="w-10 h-10 mr-3 text-cyan-400" />
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use SaaS applications to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>View All Micro SaaS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
