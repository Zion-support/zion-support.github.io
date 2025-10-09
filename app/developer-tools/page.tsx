'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, Shield, BarChart, Users, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization suggestions powered by advanced AI models.',
      features: ['Real-time code suggestions', 'Automated bug detection', 'Performance optimization', 'Multi-language support'],
      price: '$49/month',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools with automated test generation and performance analytics.',
      features: ['Automated test generation', 'Performance monitoring', 'Load testing', 'Documentation generation'],
      price: '$79/month',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Security Scanner',
      description: 'Advanced security vulnerability detection and compliance checking for your codebase and dependencies.',
      features: ['Vulnerability scanning', 'Dependency analysis', 'Compliance checking', 'Security reports'],
      price: '$99/month',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time application performance monitoring with detailed metrics and alerting capabilities.',
      features: ['Real-time monitoring', 'Custom dashboards', 'Alert system', 'Performance insights'],
      price: '$69/month',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Team Collaboration',
      description: 'Enhanced team collaboration tools with code review automation and project management integration.',
      features: ['Code review automation', 'Team metrics', 'Project tracking', 'Integration tools'],
      price: '$89/month',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Deployment Manager',
      description: 'Streamlined deployment pipeline with automated testing, staging, and production releases.',
      features: ['Automated deployments', 'Environment management', 'Rollback capabilities', 'Release tracking'],
      price: '$119/month',
      icon: Globe,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI-Powered Developer Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Boost your development productivity with our comprehensive suite of AI-powered developer tools. 
            From code assistance to deployment automation, we have everything you need to build better software faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tools" className="cyber-button">
              Explore Tools
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Get Free Trial
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${tool.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block">
                    Start Free Trial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Developer Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Leverage advanced AI to automate repetitive tasks and boost productivity by up to 300%.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and end-to-end encryption for all your data.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud-Native</h3>
              <p className="text-gray-300">Built for the cloud with 99.9% uptime guarantee and global CDN for optimal performance.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI code assistant
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API testing suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All developer tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All features included
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Supercharge Your Development?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers who have already transformed their workflow with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📞 Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;