'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
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
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time data visualization, predictive analytics, and automated insights for data-driven decision making',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Machine learning insights', 'Custom KPI tracking', 'Automated alerts'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
      title: 'AI-Powered CRM Enterprise',
      description: 'Comprehensive customer relationship management with AI-driven lead scoring, automated follow-ups, and personalized customer interactions',
      features: ['AI lead scoring', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Pipeline management', 'Customer segmentation', 'ROI tracking'],
      price: '$299/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
      title: 'Advanced Security Monitoring Suite',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, vulnerability assessment, and automated incident response',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security analytics', 'Threat intelligence', 'Automated remediation'],
      price: '$399/month',
      users: 'Up to 1000 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Multi-Cloud Infrastructure Manager',
      description: 'Intelligent cloud resource management with cost optimization, auto-scaling, and multi-cloud orchestration for maximum efficiency',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Performance monitoring', 'Disaster recovery', 'Compliance management'],
      price: '$499/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'AI Email Marketing Automation Pro',
      description: 'Advanced email marketing platform with AI-driven personalization, behavioral targeting, and comprehensive analytics for maximum engagement',
      features: ['AI personalization', 'A/B testing', 'Advanced segmentation', 'Behavioral targeting', 'Analytics dashboard', 'Integration tools', 'Template library', 'Deliverability optimization'],
      price: '$149/month',
      users: 'Up to 100,000 contacts',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'AI Customer Support Platform',
      description: 'Intelligent customer support solution with natural language processing, multi-channel support, and seamless human handoff capabilities',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training', 'Sentiment analysis', 'Human handoff', 'Integration APIs'],
      price: '$199/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '7',
      icon: '📱',
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance, drag-and-drop interface, and instant deployment to app stores',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications', 'Analytics integration', 'Custom branding'],
      price: '$399/month',
      users: 'Unlimited apps',
      popular: true,
      category: 'Development'
    },
    {
      id: '8',
      icon: '🔍',
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive SEO platform with AI-powered keyword research, content optimization, and ranking tracking for maximum organic visibility',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO', 'Schema markup', 'Performance monitoring'],
      price: '$179/month',
      users: 'Up to 50 websites',
      popular: false,
      category: 'SEO'
    },
    {
      id: '9',
      icon: '💰',
      title: 'AI Invoice & Billing Manager',
      description: 'Automated invoicing and billing system with AI-powered payment tracking, financial reporting, and client portal management',
      features: ['Automated invoicing', 'Payment tracking', 'Financial reports', 'Tax calculations', 'Client portal', 'Recurring billing', 'Multi-currency', 'Integration APIs'],
      price: '$99/month',
      users: 'Unlimited invoices',
      popular: false,
      category: 'Finance'
    },
    {
      id: '10',
      icon: '✍️',
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation for all content needs',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation', 'SEO optimization', 'Multi-language', 'Brand voice', 'Content calendar'],
      price: '$299/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '11',
      icon: '📅',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling system with calendar optimization, meeting coordination, and time management for maximum productivity',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Conflict resolution', 'Time zone handling', 'Resource booking'],
      price: '$79/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '12',
      icon: '📊',
      title: 'AI Expense Tracker Pro',
      description: 'Advanced expense management with AI-powered receipt scanning, categorization, budget insights, and tax preparation assistance',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax preparation', 'Multi-currency', 'Expense policies', 'Approval workflows', 'Integration APIs'],
      price: '$59/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '13',
      icon: '🎯',
      title: 'AI Task Manager Enterprise',
      description: 'Advanced task management with AI prioritization, team collaboration, project tracking, and productivity analytics',
      features: ['AI prioritization', 'Team collaboration', 'Project tracking', 'Time tracking', 'Productivity analytics', 'Custom workflows', 'Integration APIs', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'Productivity'
    },
    {
      id: '14',
      icon: '🎨',
      title: 'AI Design Studio Pro',
      description: 'Professional design platform with AI-powered tools for creating stunning graphics, logos, and marketing materials',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Vector graphics', 'Photo editing', 'Collaboration tools'],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Design'
    },
    {
      id: '15',
      icon: '🌐',
      title: 'AI Landing Page Builder',
      description: 'High-converting landing page builder with AI optimization, A/B testing, and conversion tracking for maximum ROI',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'SEO optimization', 'Analytics integration', 'Template library'],
      price: '$129/month',
      users: 'Unlimited pages',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '16',
      icon: '💻',
      title: 'AI Code Assistant Pro',
      description: 'Advanced code completion and debugging tool with AI assistance for multiple programming languages and frameworks',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation', 'Code review', 'Refactoring', 'Testing assistance'],
      price: '$199/month',
      users: 'Up to 100 developers',
      popular: true,
      category: 'Development'
    },
    {
      id: '17',
      icon: '🔧',
      title: 'AI API Builder Platform',
      description: 'Comprehensive API development platform with AI assistance, documentation generation, testing tools, and deployment automation',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Authentication', 'Monitoring', 'Deployment automation'],
      price: '$299/month',
      users: 'Unlimited APIs',
      popular: false,
      category: 'Development'
    },
    {
      id: '18',
      icon: '🐛',
      title: 'AI Bug Tracker Enterprise',
      description: 'Advanced bug tracking system with AI-powered issue detection, prioritization, and resolution suggestions for development teams',
      features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Integration APIs', 'Automated testing', 'Performance monitoring', 'Release management'],
      price: '$179/month',
      users: 'Up to 200 developers',
      popular: false,
      category: 'Development'
    },
    {
      id: '19',
      icon: '📚',
      title: 'AI Documentation Generator',
      description: 'Automated technical documentation generator with AI-powered content creation, API docs, and user guide generation',
      features: ['Auto documentation', 'API docs', 'User guides', 'Code comments', 'Multiple formats', 'Version control', 'Collaboration', 'Translation support'],
      price: '$99/month',
      users: 'Up to 50 projects',
      popular: false,
      category: 'Development'
    },
    {
      id: '20',
      icon: '👥',
      title: 'AI Recruitment Assistant Pro',
      description: 'Comprehensive HR and recruitment platform with AI-powered candidate screening, interview scheduling, and talent analytics',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Talent analytics', 'Onboarding automation', 'Performance tracking'],
      price: '$399/month',
      users: 'Up to 1000 employees',
      popular: true,
      category: 'HR'
    },
    {
      id: '21',
      icon: '🏥',
      title: 'AI Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction, analysis, and patient portal integration',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Security encryption', 'Audit trails', 'Telemedicine support'],
      price: '$599/month',
      users: 'Up to 500 patients',
      popular: false,
      category: 'Healthcare'
    },
    {
      id: '22',
      icon: '💼',
      title: 'AI Accounting Assistant Pro',
      description: 'Comprehensive accounting platform with AI-powered bookkeeping, tax preparation, financial reporting, and compliance management',
      features: ['Automated bookkeeping', 'Tax preparation', 'Financial reports', 'Expense tracking', 'Compliance management', 'Audit support', 'Multi-currency', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 100 clients',
      popular: false,
      category: 'Finance'
    },
    {
      id: '23',
      icon: '🏠',
      title: 'AI Property Management Suite',
      description: 'Complete property management platform with AI-powered tenant screening, maintenance scheduling, rent optimization, and analytics',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial reporting', 'Lease management', 'Market analysis'],
      price: '$199/month',
      users: 'Up to 500 properties',
      popular: false,
      category: 'Real Estate'
    },
    {
      id: '24',
      icon: '⚖️',
      title: 'AI Legal Document Manager',
      description: 'Comprehensive legal document management with AI-powered contract analysis, compliance tracking, and risk assessment',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Case management', 'Client portal', 'Billing integration'],
      price: '$399/month',
      users: 'Up to 200 cases',
      popular: false,
      category: 'Legal'
    },
    {
      id: '25',
      icon: '🎓',
      title: 'AI Learning Management System',
      description: 'Advanced educational platform with AI-powered personalized learning paths, progress tracking, and automated assessments',
      features: ['Personalized learning', 'Progress tracking', 'Course creation', 'Assessment tools', 'Certification', 'Video conferencing', 'Content library', 'Analytics dashboard'],
      price: '$149/month',
      users: 'Up to 1000 students',
      popular: true,
      category: 'Education'
    },
    {
      id: '26',
      icon: '📦',
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered demand forecasting, inventory optimization, and logistics planning',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier analytics', 'Risk assessment', 'Cost optimization', 'Logistics planning', 'Quality control', 'Compliance tracking'],
      price: '$499/month',
      users: 'Up to 1000 SKUs',
      popular: false,
      category: 'Manufacturing'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees - Start immediately',
    'Quick deployment in 24-48 hours - Get running fast',
    'Scalable solutions that grow with your business',
    'Regular updates and new features included',
    '24/7 technical support with expert assistance',
    'Easy integration with 500+ existing tools',
    'Free 14-day trial for all products',
    'Cancel anytime, no long-term contracts',
    'Enterprise-grade security and compliance',
    'Mobile-optimized for on-the-go productivity',
    'AI-powered insights and automation',
    'Custom branding and white-label options'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Development', 'SEO', 'Finance', 'Content', 'Productivity', 'Design', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Manufacturing'];

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability you can count on'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by customers across all platforms'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Expert assistance whenever you need it'
    },
    {
      icon: Shield,
      value: 'SOC 2',
      label: 'Compliance',
      description: 'Enterprise security and compliance standards'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Serving customers across the globe'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of 26+ AI-powered micro SaaS tools. 
              From analytics and CRM to development and healthcare - we have the perfect solution for every business need.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">26+</div>
                  <div className="text-gray-300 text-sm">AI-Powered Tools</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
                  <div className="text-gray-300 text-sm">Customer Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Average ROI</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;