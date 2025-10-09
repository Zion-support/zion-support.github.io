'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, ArrowRight, Brain, Code, BarChart, Users, Globe, Shield, Smartphone, Target, TrendingUp, Settings, Calendar, FileText, Lock, Cpu, Database } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials',
      category: 'Content',
      price: '$29/month',
      features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'SEO Optimization'],
      benefits: ['Save 10+ hours/week', 'Consistent Quality', 'SEO Optimized', 'Multiple Languages']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business intelligence and performance tracking',
      category: 'Analytics',
      price: '$49/month',
      features: ['Real-time Metrics', 'Custom Reports', 'Data Visualization', 'API Integration'],
      benefits: ['Data-driven Decisions', 'Performance Insights', 'ROI Tracking', 'Automated Reports']
    },
    {
      icon: Users,
      title: 'CRM System',
      description: 'Customer relationship management with AI-powered insights',
      category: 'Sales',
      price: '$39/month',
      features: ['Lead Management', 'Contact Tracking', 'Sales Pipeline', 'Automation'],
      benefits: ['Increase Sales 25%', 'Better Customer Service', 'Automated Follow-ups', 'Lead Scoring']
    },
    {
      icon: Code,
      title: 'API Builder',
      description: 'No-code API development and integration platform',
      category: 'Development',
      price: '$59/month',
      features: ['Visual API Designer', 'Auto Documentation', 'Testing Tools', 'Deployment'],
      benefits: ['Faster Development', 'No Coding Required', 'Scalable APIs', 'Easy Integration']
    },
    {
      icon: Shield,
      title: 'Security Monitor',
      description: 'Real-time security monitoring and threat detection',
      category: 'Security',
      price: '$79/month',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      benefits: ['24/7 Protection', 'Compliance Ready', 'Early Warning', 'Automated Response']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'Create native mobile apps without coding',
      category: 'Development',
      price: '$69/month',
      features: ['Drag & Drop Builder', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      benefits: ['No Coding Skills', 'Fast Development', 'Cross Platform', 'Professional Quality']
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and customer engagement',
      category: 'Marketing',
      price: '$45/month',
      features: ['Email Automation', 'Social Media Scheduling', 'Lead Nurturing', 'A/B Testing'],
      benefits: ['Higher Conversion', 'Time Savings', 'Personalized Campaigns', 'Better ROI']
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracker',
      description: 'Track and optimize business growth metrics',
      category: 'Analytics',
      price: '$35/month',
      features: ['KPI Monitoring', 'Growth Forecasting', 'Benchmark Analysis', 'Goal Tracking'],
      benefits: ['Data-driven Growth', 'Performance Insights', 'Competitive Analysis', 'Strategic Planning']
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and business processes',
      category: 'Productivity',
      price: '$39/month',
      features: ['Task Automation', 'Process Optimization', 'Integration Hub', 'Custom Workflows'],
      benefits: ['Save 15+ hours/week', 'Reduce Errors', 'Improve Efficiency', 'Cost Savings']
    },
    {
      icon: Calendar,
      title: 'Scheduling Assistant',
      description: 'AI-powered scheduling and appointment management',
      category: 'Productivity',
      price: '$25/month',
      features: ['Smart Scheduling', 'Calendar Sync', 'Reminder System', 'Time Zone Handling'],
      benefits: ['No Double Bookings', 'Time Optimization', 'Reduced No-shows', 'Better Organization']
    },
    {
      icon: FileText,
      title: 'Document Processor',
      description: 'Automated document processing and data extraction',
      category: 'Productivity',
      price: '$55/month',
      features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'Document Classification'],
      benefits: ['Faster Processing', 'Reduced Manual Work', 'Higher Accuracy', 'Cost Efficiency']
    },
    {
      icon: Lock,
      title: 'Password Manager',
      description: 'Secure password management for teams and individuals',
      category: 'Security',
      price: '$19/month',
      features: ['Secure Storage', 'Password Generation', 'Team Sharing', 'Breach Monitoring'],
      benefits: ['Enhanced Security', 'Easy Access', 'Team Collaboration', 'Peace of Mind']
    }
  ];

  const categories = [...new Set(microSaasTools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable software tools designed to streamline your business operations and boost productivity.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasTools.map((tool, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                    <p className="text-sm text-purple-400">{tool.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {tool.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{tool.price}</div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tool Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                <p className="text-gray-300 text-sm">
                  {category === 'Content' && 'AI-powered content creation tools'}
                  {category === 'Analytics' && 'Data analysis and business intelligence'}
                  {category === 'Sales' && 'Customer relationship management'}
                  {category === 'Development' && 'No-code development platforms'}
                  {category === 'Security' && 'Security and compliance tools'}
                  {category === 'Marketing' && 'Marketing automation and optimization'}
                  {category === 'Productivity' && 'Productivity and workflow tools'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 3 Tools Included</li>
                <li>✓ Basic Support</li>
                <li>✓ Standard Features</li>
                <li>✓ Email Support</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Get Started
              </a>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-purple-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-4">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 8 Tools Included</li>
                <li>✓ Priority Support</li>
                <li>✓ Advanced Features</li>
                <li>✓ Phone & Email Support</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Most Popular
              </a>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ All Tools Included</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Custom Features</li>
                <li>✓ Dedicated Manager</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS tools to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all"
            >
              Start Free Trial
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all"
            >
              View Success Stories
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MicroSaasPage;