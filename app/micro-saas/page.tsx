'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Mail, Share2, DollarSign, Calendar, Headphones, Package, FileText, Target, Clock } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'ai-content-writer-pro',
      icon: MessageSquare,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice training, and multi-language support',
      features: ['SEO-optimized content generation', 'Brand voice customization', '50+ content templates', 'Plagiarism detection', 'Multi-language support', 'Content scheduling', 'Team collaboration'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content Creation'
    },
    {
      id: 'ai-analytics-dashboard',
      icon: BarChart3,
      title: 'AI Business Intelligence',
      description: 'Real-time analytics dashboard with predictive insights, custom reports, and automated alerts',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom KPI tracking', 'Automated reports', 'Data visualization', 'Mobile app', 'API integrations'],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'ai-email-marketing',
      icon: Mail,
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with automated campaigns, A/B testing, and advanced segmentation',
      features: ['AI-powered subject lines', 'Automated drip campaigns', 'Advanced segmentation', 'A/B testing', 'Deliverability optimization', 'Template library', 'Analytics & reporting'],
      price: '$39/month',
      users: 'Up to 50,000 subscribers',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'ai-crm-assistant',
      icon: Users,
      title: 'AI CRM Assistant',
      description: 'Smart customer relationship management with automated lead scoring, follow-ups, and sales forecasting',
      features: ['Lead scoring & qualification', 'Automated follow-ups', 'Sales forecasting', 'Pipeline management', 'Email integration', 'Custom fields', 'Mobile app'],
      price: '$79/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'CRM'
    },
    {
      id: 'ai-social-scheduler',
      icon: Share2,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting with optimal timing, hashtag research, and engagement analytics',
      features: ['Auto-posting across platforms', 'Optimal timing suggestions', 'Hashtag research', 'Engagement analytics', 'Content calendar', 'Team collaboration', 'Brand monitoring'],
      price: '$25/month',
      users: 'Up to 5 social accounts',
      popular: false,
      category: 'Social Media'
    },
    {
      id: 'ai-expense-tracker',
      icon: DollarSign,
      title: 'AI Expense Tracker',
      description: 'Smart expense management with receipt scanning, automatic categorization, and budget alerts',
      features: ['Receipt scanning (OCR)', 'Auto-categorization', 'Budget tracking & alerts', 'Tax preparation', 'Expense reports', 'Multi-currency support', 'Team expense management'],
      price: '$19/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Finance'
    },
    {
      id: 'ai-project-manager',
      icon: Calendar,
      title: 'AI Project Manager',
      description: 'Intelligent project management with automated task assignment, deadline tracking, and resource optimization',
      features: ['AI task assignment', 'Deadline tracking', 'Resource optimization', 'Team collaboration', 'Progress analytics', 'Gantt charts', 'Time tracking'],
      price: '$59/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Project Management'
    },
    {
      id: 'ai-customer-support',
      icon: Headphones,
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing and seamless human handoff',
      features: ['24/7 AI chatbot', 'Multi-language support', 'Human handoff', 'Knowledge base integration', 'Sentiment analysis', 'Custom training', 'Analytics dashboard'],
      price: '$89/month',
      users: 'Up to 500 conversations/month',
      popular: true,
      category: 'Customer Support'
    },
    {
      id: 'ai-inventory-manager',
      icon: Package,
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting, automated reordering, and supply chain optimization',
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Barcode scanning', 'Multi-location support', 'Vendor management', 'Analytics & reporting'],
      price: '$69/month',
      users: 'Up to 10,000 SKUs',
      popular: false,
      category: 'Inventory'
    },
    {
      id: 'ai-document-processor',
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization',
      features: ['OCR text extraction', 'Data extraction', 'Document categorization', 'Form processing', 'Batch processing', 'API integration', 'Cloud storage sync'],
      price: '$45/month',
      users: 'Up to 1,000 documents/month',
      popular: true,
      category: 'Document Management'
    },
    {
      id: 'ai-lead-generator',
      icon: Target,
      title: 'AI Lead Generator',
      description: 'Automated lead discovery and qualification with advanced targeting and contact enrichment',
      features: ['Lead discovery', 'Contact enrichment', 'Lead scoring', 'Email verification', 'CRM integration', 'Campaign tracking', 'ROI analytics'],
      price: '$99/month',
      users: 'Up to 1,000 leads/month',
      popular: false,
      category: 'Lead Generation'
    },
    {
      id: 'ai-appointment-scheduler',
      icon: Clock,
      title: 'AI Appointment Scheduler',
      description: 'Smart scheduling system with automated booking, reminders, and calendar optimization',
      features: ['Automated booking', 'Smart scheduling', 'Calendar integration', 'Reminder automation', 'Time zone handling', 'Custom booking forms', 'Analytics dashboard'],
      price: '$35/month',
      users: 'Up to 5 team members',
      popular: true,
      category: 'Scheduling'
    }
  ];

  const categories = ['All', 'Content Creation', 'Analytics', 'Marketing', 'CRM', 'Social Media', 'Finance', 'Project Management', 'Customer Support', 'Inventory', 'Document Management', 'Lead Generation', 'Scheduling'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built for the cloud with automatic scaling and high availability'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Designed for non-technical users with intuitive interfaces'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed for small to medium businesses. Analytics, CRM, security, and more." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, analytics, CRM, security, backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;