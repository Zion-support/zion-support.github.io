import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Users, BarChart, Clock, Globe, Smartphone, Database, Mail, Calendar, FileText, Settings, TrendingUp } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'project-management',
      name: 'AI Project Management Suite',
      description: 'Intelligent project management with AI-powered task optimization, resource allocation, and deadline prediction.',
      price: '$79/month',
      features: [
        'AI-powered task prioritization',
        'Smart resource allocation',
        'Predictive deadline management',
        'Team collaboration tools',
        'Real-time progress tracking',
        'Custom workflow automation'
      ],
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      id: 'crm',
      name: 'Smart CRM Platform',
      description: 'Advanced customer relationship management with AI insights, automated follow-ups, and sales forecasting.',
      price: '$99/month',
      features: [
        'AI-powered lead scoring',
        'Automated email sequences',
        'Sales pipeline management',
        'Customer behavior analytics',
        'Integration with 50+ tools',
        'Custom reporting dashboard'
      ],
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      popular: false
    },
    {
      id: 'analytics',
      name: 'Business Intelligence Dashboard',
      description: 'Comprehensive analytics platform with real-time insights, predictive analytics, and custom reporting.',
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom report builder',
        'Data export capabilities',
        'Multi-source data integration',
        'Automated insights generation'
      ],
      icon: BarChart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      popular: false
    },
    {
      id: 'email-marketing',
      name: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI content generation, audience segmentation, and performance optimization.',
      price: '$29/month',
      features: [
        'AI content generation',
        'Smart audience segmentation',
        'A/B testing automation',
        'Email performance analytics',
        'Template library (500+ designs)',
        'Multi-channel campaign management'
      ],
      icon: Mail,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      popular: true
    },
    {
      id: 'automation',
      name: 'Workflow Automation Engine',
      description: 'Powerful automation platform that connects your apps and automates repetitive tasks with AI decision-making.',
      price: '$59/month',
      features: [
        'Visual workflow builder',
        '500+ app integrations',
        'AI decision trees',
        'Conditional logic automation',
        'Real-time monitoring',
        'Custom trigger creation'
      ],
      icon: Settings,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      popular: false
    },
    {
      id: 'documents',
      name: 'Smart Document Management',
      description: 'AI-powered document management system with intelligent categorization, search, and collaboration features.',
      price: '$39/month',
      features: [
        'AI document categorization',
        'Smart search capabilities',
        'Version control',
        'Collaborative editing',
        'OCR text extraction',
        'Automated backup & sync'
      ],
      icon: FileText,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      popular: false
    },
    {
      id: 'social-media',
      name: 'Social Media Management Suite',
      description: 'Comprehensive social media management with AI content creation, scheduling, and performance analytics.',
      price: '$69/month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Social listening tools'
      ],
      icon: Globe,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      popular: true
    },
    {
      id: 'inventory',
      name: 'Smart Inventory Management',
      description: 'Intelligent inventory tracking with demand forecasting, automated reordering, and supply chain optimization.',
      price: '$89/month',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location tracking',
        'Supplier management',
        'Cost optimization',
        'Real-time stock alerts'
      ],
      icon: Database,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      popular: false
    },
    {
      id: 'hr-management',
      name: 'HR Management Platform',
      description: 'Complete HR solution with AI-powered recruitment, employee analytics, and performance management.',
      price: '$79/month',
      features: [
        'AI resume screening',
        'Employee performance tracking',
        'Payroll management',
        'Time & attendance',
        'Benefits administration',
        'Compliance reporting'
      ],
      icon: Users,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in under 5 minutes with our intuitive setup wizard and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average 300% ROI within the first 6 months of implementation.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team with average response time under 2 minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable AI-driven tools designed for modern businesses. 
            Choose from 50+ ready-to-use applications that scale with your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`/micro-saas/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-purple-600 text-purple-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-purple-600 hover:text-white transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 Micro SAAS Tool
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center ring-2 ring-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone & Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All Premium Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise Deployment
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our Micro SAAS solutions. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;