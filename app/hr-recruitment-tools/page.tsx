'use client';
import React from 'react';
import Link from 'next/link';
import { Users, Search, FileText, Calendar, TrendingUp, Shield, Zap, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const HRRecruitmentToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Resume Parser',
      description: 'Intelligent resume parsing with 99.5% accuracy, extracting key skills, experience, and qualifications automatically.',
      features: ['Multi-format support', 'Skills extraction', 'Experience analysis', 'Education parsing', 'Contact extraction'],
      price: '$49/month',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      name: 'Smart Candidate Matching',
      description: 'AI-powered candidate matching that analyzes job requirements and candidate profiles to find the perfect fit.',
      features: ['Job-candidate scoring', 'Skills gap analysis', 'Cultural fit assessment', 'Interview recommendations', 'Ranking system'],
      price: '$79/month',
      icon: Search,
      color: 'text-green-500'
    },
    {
      name: 'Interview Scheduler Pro',
      description: 'Automated interview scheduling with calendar integration, timezone handling, and reminder notifications.',
      features: ['Calendar integration', 'Timezone support', 'Auto-reminders', 'Video conferencing', 'Feedback collection'],
      price: '$39/month',
      icon: Calendar,
      color: 'text-purple-500'
    },
    {
      name: 'Background Check Automation',
      description: 'Streamlined background verification with real-time status updates and compliance reporting.',
      features: ['Criminal checks', 'Employment verification', 'Education verification', 'Reference checks', 'Compliance reports'],
      price: '$99/month',
      icon: Shield,
      color: 'text-red-500'
    },
    {
      name: 'Employee Onboarding Suite',
      description: 'Complete digital onboarding experience with document management, task automation, and progress tracking.',
      features: ['Digital forms', 'Document collection', 'Task automation', 'Progress tracking', 'Welcome workflows'],
      price: '$59/month',
      icon: Users,
      color: 'text-orange-500'
    },
    {
      name: 'Performance Analytics Dashboard',
      description: 'Comprehensive HR analytics with hiring metrics, employee performance insights, and predictive analytics.',
      features: ['Hiring metrics', 'Performance tracking', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: '$89/month',
      icon: TrendingUp,
      color: 'text-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Hiring Time by 60%',
      description: 'Automate repetitive tasks and streamline the entire recruitment process',
      icon: Zap
    },
    {
      title: 'Improve Candidate Quality',
      description: 'AI-powered matching ensures you find the best candidates for each role',
      icon: Star
    },
    {
      title: 'Ensure Compliance',
      description: 'Built-in compliance features keep your hiring process legally sound',
      icon: Shield
    },
    {
      title: 'Save 40+ Hours Monthly',
      description: 'Automation handles routine tasks, freeing your team for strategic work',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            HR & Recruitment Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your hiring process with AI-powered HR and recruitment tools. 
            Find, evaluate, and onboard the best talent faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <tool.icon className={`w-8 h-8 ${tool.color} mr-3`} />
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our HR Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>Up to 3 tools</li>
                <li>100 job postings/month</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            <div className="cyber-card p-6 border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$399/month</div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>All 6 tools included</li>
                <li>Unlimited job postings</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Most Popular
              </a>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>Unlimited everything</li>
                <li>Custom development</li>
                <li>Dedicated support</li>
                <li>On-premise deployment</li>
                <li>SLA guarantee</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your HR Process?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 500+ companies already using our HR tools to hire better, faster, and smarter.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default HRRecruitmentToolsPage;
