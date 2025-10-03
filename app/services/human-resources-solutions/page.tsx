import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Users, UserCheck, FileText, BarChart3, Calendar, 
  DollarSign, Clock, CheckCircle, ArrowRight, Phone, 
  Mail, MapPin, ExternalLink, Zap, Target, Award, 
  Globe, Smartphone, Brain, Monitor, Shield, Briefcase
} from 'lucide-react';

export const metadata = {
  title: 'Human Resources Solutions — Zion Tech Group',
  description: 'Comprehensive HR micro SaaS solutions including recruitment, performance management, payroll, and employee analytics.',
  keywords: 'HR solutions, recruitment software, performance management, payroll processing, employee analytics, micro SaaS',
};

export default function HumanResourcesSolutions() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const hrServices = [
    {
      name: 'AI-Powered Recruitment Platform',
      description: 'Intelligent recruitment system with candidate screening, interview scheduling, and talent matching.',
      price: '$299 - $2,499/month',
      eta: '3-4 weeks',
      features: [
        'AI-powered candidate screening and matching',
        'Automated interview scheduling and coordination',
        'Resume parsing and skills assessment',
        'Background check integration',
        'Candidate pipeline management and analytics'
      ],
      icon: Users,
      category: 'Recruitment',
      roi: '60% reduction in time-to-hire',
      marketPrice: '$600 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Performance Management Suite',
      description: 'Comprehensive performance tracking with goal setting, reviews, and development planning.',
      price: '$199 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        '360-degree performance reviews',
        'Goal setting and tracking',
        'Performance analytics and insights',
        'Employee development planning',
        'Recognition and rewards management'
      ],
      icon: UserCheck,
      category: 'Performance Management',
      roi: '45% improvement in employee engagement',
      marketPrice: '$400 - $2,800/month',
      savings: 'Save up to 46%'
    },
    {
      name: 'Automated Payroll Processing System',
      description: 'Complete payroll solution with tax calculations, benefits management, and compliance reporting.',
      price: '$149 - $999/month',
      eta: '2-3 weeks',
      features: [
        'Automated payroll calculations and processing',
        'Tax compliance and reporting',
        'Benefits administration and enrollment',
        'Time and attendance tracking',
        'Employee self-service portal'
      ],
      icon: DollarSign,
      category: 'Payroll',
      roi: '80% reduction in payroll processing time',
      marketPrice: '$300 - $1,800/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Employee Analytics & Insights Platform',
      description: 'Advanced HR analytics with workforce planning, retention analysis, and predictive insights.',
      price: '$399 - $2,999/month',
      eta: '3-4 weeks',
      features: [
        'Workforce analytics and reporting',
        'Employee retention and turnover analysis',
        'Predictive analytics for HR decisions',
        'Custom dashboards and KPI tracking',
        'Benchmarking and industry comparisons'
      ],
      icon: BarChart3,
      category: 'Analytics',
      roi: '35% improvement in HR decision-making',
      marketPrice: '$800 - $5,500/month',
      savings: 'Save up to 45%'
    },
    {
      name: 'Learning & Development Platform',
      description: 'Comprehensive employee training platform with course creation, tracking, and certification.',
      price: '$249 - $1,799/month',
      eta: '2-3 weeks',
      features: [
        'Course creation and content management',
        'Learning path customization',
        'Progress tracking and certification',
        'Skills assessment and gap analysis',
        'Integration with performance management'
      ],
      icon: Briefcase,
      category: 'Learning & Development',
      roi: '50% increase in employee skill development',
      marketPrice: '$500 - $3,200/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Employee Engagement & Communication Hub',
      description: 'Platform for employee communication, feedback collection, and engagement initiatives.',
      price: '$99 - $699/month',
      eta: '1-2 weeks',
      features: [
        'Internal communication and messaging',
        'Employee feedback and survey tools',
        'Engagement tracking and analytics',
        'Recognition and rewards programs',
        'Mobile app for employee access'
      ],
      icon: Calendar,
      category: 'Employee Engagement',
      roi: '40% improvement in employee satisfaction',
      marketPrice: '$200 - $1,300/month',
      savings: 'Save up to 46%'
    }
  ];

  const itServices = [
    {
      name: 'HR Data Security Suite',
      description: 'Enterprise-grade security protecting sensitive employee data and HR records.',
      price: '$399 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'Employee data encryption and protection',
        'Access control and audit logging',
        'Compliance with labor laws and regulations',
        'Secure data backup and recovery',
        'Privacy monitoring and reporting'
      ],
      icon: Shield,
      category: 'Security',
      roi: '99.9% compliance rate maintained',
      marketPrice: '$800 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'HR Cloud Infrastructure',
      description: 'Scalable cloud infrastructure optimized for HR applications and data processing.',
      price: '$599 - $3,999/month',
      eta: '1-2 weeks',
      features: [
        'High-availability HR cloud infrastructure',
        'Automated backup and disaster recovery',
        'Scalable resource allocation',
        '24/7 monitoring and support',
        'Integration with existing HR systems'
      ],
      icon: Monitor,
      category: 'Infrastructure',
      roi: '45% reduction in infrastructure costs',
      marketPrice: '$1,200 - $6,500/month',
      savings: 'Save up to 38%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Head>
        <title>Human Resources Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive HR micro SaaS solutions including recruitment, performance management, payroll, and employee analytics." />
        <meta name="keywords" content="HR solutions, recruitment software, performance management, payroll processing, employee analytics, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/human-resources-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Human Resources Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your HR operations with our comprehensive suite of human resources micro SaaS solutions. 
              From recruitment to performance management, we provide enterprise-grade HR technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Visit: ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              HR Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive human resources technology solutions designed for modern organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hrServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-indigo-400 mr-3" />
                  <span className="text-sm text-indigo-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-indigo-400">Your Savings:</span>
                    <span className="text-indigo-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-indigo-400 mr-2" />
                    <span className="text-indigo-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-indigo-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for HR applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="text-sm text-purple-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400">Your Savings:</span>
                    <span className="text-purple-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-purple-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-purple-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free consultation and custom quote for your human resources technology needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our HR technology experts</p>
              <a href={phoneHref} className="text-indigo-400 font-semibold hover:text-indigo-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-purple-400 font-semibold hover:text-purple-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-blue-400 font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}