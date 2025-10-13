'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, ArrowRight, Brain, Code, BarChart, Users, Globe, Shield, Smartphone, Target, TrendingUp, Settings, Calendar, FileText, Lock, Cpu, Database } from 'lucide-react';
import React from 'react';
      icon: Code,
      title: 'API Builder',
      description: 'No-code API development and integration platform',
      category: 'Development',
      price: '$59/month',
      features: ['Visual API Designer', 'Auto Documentation', 'Testing Tools', 'Deployment'],
      benefits: ['Faster Development', 'No Coding Required', 'Scalable APIs', 'Easy Integration']
      icon: TrendingUp,
      title: 'Growth Tracker',
      description: 'Track and optimize business growth metrics',
      category: 'Analytics',
      price: '$35/month',
      features: ['KPI Monitoring', 'Growth Forecasting', 'Benchmark Analysis', 'Goal Tracking'],
      benefits: ['Data-driven Growth', 'Performance Insights', 'Competitive Analysis', 'Strategic Planning'],
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and business processes',
      category: 'Productivity',
      price: '$39/month',
      features: ['Task Automation', 'Process Optimization', 'Integration Hub', 'Custom Workflows'],
      benefits: ['Save 15+ hours/week', 'Reduce Errors', 'Improve Efficiency', 'Cost Savings'],
    },
    {
      icon: Calendar,
      title: 'Scheduling Assistant',
      description: 'AI-powered scheduling and appointment management',
      category: 'Productivity',
      price: '$25/month',
      features: ['Smart Scheduling', 'Calendar Sync', 'Reminder System', 'Time Zone Handling'],
      benefits: ['No Double Bookings', 'Time Optimization', 'Reduced No-shows', 'Better Organization'],
    },
    {
      icon: FileText,
      title: 'Document Processor',
      description: 'Automated document processing and data extraction',
      category: 'Productivity',
      price: '$55/month',
      features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'Document Classification'],
      benefits: ['Faster Processing', 'Reduced Manual Work', 'Higher Accuracy', 'Cost Efficiency'],
    },
    {
      icon: Lock,
      title: 'Password Manager',
      description: 'Secure password management for teams and individuals',
      category: 'Security',
      price: '$19/month',
      features: ['Secure Storage', 'Password Generation', 'Team Sharing', 'Breach Monitoring'],
      benefits: ['Enhanced Security', 'Easy Access', 'Team Collaboration', 'Peace of Mind'],
    }
  ];

  const categories = [...new Set(microSaasTools.map(tool => tool.category))];

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion's micro SAAS tools are game-changers for our business.",
      rating: 5
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software"
        description="Transform your business with our comprehensive micro SAAS solutions. Ready-to-use software for analytics, security, cloud storage, AI video generation, and more."
        keywords="micro SAAS, software as a service, business software, analytics, security, cloud storage, AI tools, business automation"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">"
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />"
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Software</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementations - just powerful tools that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
        {/* Categories */}
        <section className="mb-16">"
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tool Categories</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>"
                <p className="text-gray-300 text-sm">"
                  {category === 'Content' && 'AI-powered content creation tools'}'
                  {category === 'Analytics' && 'Data analysis and business intelligence'}'
                  {category === 'Sales' && 'Customer relationship management'}'
                  {category === 'Development' && 'No-code development platforms'}'
                  {category === 'Security' && 'Security and compliance tools'}'
                  {category === 'Marketing' && 'Marketing automation and optimization'}'
                  {category === 'Productivity' && 'Productivity and workflow tools'}'
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">"
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Tiers</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            <div className="cyber-card p-8 text-center">"
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>"
              <div className="text-4xl font-bold text-purple-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>"
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 3 Tools Included</li>
                <li>✓ Basic Support</li>
                <li>✓ Standard Features</li>
                <li>✓ Email Support</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Get Started.
              </a>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-purple-500">"
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>"
              <div className="text-4xl font-bold text-purple-400 mb-4">$79<span className="text-lg text-gray-400">/month</span></div>"
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 8 Tools Included</li>
                <li>✓ Priority Support</li>
                <li>✓ Advanced Features</li>
                <li>✓ Phone & Email Support</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Most Popular.
              </a>
            </div>
            <div className="cyber-card p-8 text-center">"
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>"
              <div className="text-4xl font-bold text-purple-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>"
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ All Tools Included</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Custom Features</li>
                <li>✓ Dedicated Manager</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all">
                Contact Sales.
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">"
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>"
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS tools to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" "
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all"
            >
              Start Free Trial.
            </a>
            <a 
              href="/case-studies" "
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all"
            >
              View Success Stories.
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
            Start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Try Free Demo
              <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
