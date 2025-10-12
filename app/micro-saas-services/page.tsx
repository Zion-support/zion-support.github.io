import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration'],
=======
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8'
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$12/month',
=======
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      pricing: '$12/month',
      popular: false,
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7'
    },
    {
<<<<<<< HEAD
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '980+',
      rating: '4.9'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials with SEO optimization.',
      features: ['Content generation', 'SEO optimization', 'Multiple languages', 'Brand voice training'],
      pricing: '$29/month',
      link: '/ai-content-writer',
      popular: true,
      users: '1,500+',
      rating: '4.8'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Website Builder',
      description: 'Build professional websites with AI assistance, including design, content, and SEO optimization.',
      features: ['AI design suggestions', 'Auto content generation', 'SEO optimization', 'Mobile responsive'],
      pricing: '$39/month',
      link: '/ai-website-builder',
      popular: false,
      users: '750+',
      rating: '4.6'
=======
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart task prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      price: '$19/month',
      link: '/ai-task-manager'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation'],
      price: '$15/month',
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync'],
      price: '$12/month',
      link: '/ai-password-manager'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and payment tracking.',
      features: ['Auto-invoice generation', 'Payment tracking', 'Custom templates', 'Tax calculations'],
      price: '$25/month',
      link: '/ai-invoice-generator'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health metrics tracking', 'AI insights', 'Wellness recommendations', 'Goal setting'],
      price: '$18/month',
      link: '/ai-health-tracker'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      price: '$22/month',
      link: '/ai-smart-calendar'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI for better results',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has revolutionized how I organize my work. I\'m 40% more productive now.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The expense tracker saves me hours every week. The AI categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'The AI content writer helps me create engaging content faster than ever. Highly recommended!',
      rating: 5
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$29/month',
      popular: true,
      link: '/micro-saas-services/ai-content-writer'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      pricing: '$49/month',
      popular: false,
      link: '/micro-saas-services/ai-analytics-dashboard'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library'],
      pricing: '$19/month',
      popular: false,
      link: '/micro-saas-services/ai-email-assistant'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment'],
      pricing: '$39/month',
      popular: true,
      link: '/micro-saas-services/ai-lead-generation'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement tracking, and content optimization.',
      features: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Hashtag research', 'Performance analytics'],
      pricing: '$25/month',
      popular: false,
      link: '/micro-saas-services/ai-social-media-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and budget alerts.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports'],
      pricing: '$15/month',
      popular: false,
      link: '/micro-saas-services/ai-expense-tracker'
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Solutions',
      description: 'Get powerful AI-powered tools at fraction of the cost of enterprise solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Setup',
      description: 'Quick and easy setup with no technical expertise required.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable',
      description: 'Start small and scale up as your business grows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly.'
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 AI tool', 'Basic support', 'Standard features', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['3 AI tools', 'Priority support', 'Advanced features', 'Phone & email support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['All AI tools', '24/7 support', 'Custom features', 'Dedicated account manager'],
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
    }
  ];
=======
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, client management, and payment tracking.',
      features: [
        'AI template suggestions',
        'Client management',
        'Payment tracking',
        'Tax calculations',
        'Multi-language support',
        'PDF generation'
      ],
      pricing: '$18/month',
      popular: true,
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor visit scheduling',
        'Health data export'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking',
        'Meeting optimization',
        'Calendar analytics',
        'Integration with tools',
        'Smart notifications'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
=======
    <div className="min-h-screen bg-gray-50">
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to boost productivity and streamline business operations. Affordable, powerful, and easy to use." />
        <meta name="keywords" content="micro SaaS, AI tools, productivity, business automation, Zion Tech Group" />
=======
        <title>Micro SAAS Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. AI-powered tools for content creation, analytics, email management, and more." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. AI-powered tools for content creation, analytics, email management, and more." />
        <meta name="keywords" content="micro saas, ai tools, business software, content creation, analytics, email management" />
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Micro SaaS
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Tools</span>
            <br />
            for Modern Professionals
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, 
            streamline operations, and help you work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/micro-saas-services#tools"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted collection of AI-powered tools designed for modern professionals
=======
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-driven micro software solutions designed to streamline your business operations and boost productivity.
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
            </p>
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {tool.icon}
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(tool.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">{tool.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Active Users</div>
                    <div className="text-lg font-semibold text-white">{tool.users}</div>
                  </div>
                </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6

                <Link
                  to={tool.link}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
=======
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
=======
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS applications designed to solve specific business problems with AI-powered solutions." />
        <meta name="keywords" content="micro saas, ai applications, business tools, productivity software, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Specialized AI-powered applications designed to solve specific business problems with precision and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each application is designed to solve a specific business challenge with AI-powered intelligence.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SAAS Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized tools that solve specific business challenges with the power of AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of our specialized micro applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get Started
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered tools designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
=======
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
=======
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from professionals who use our tools daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">All our tools leverage cutting-edge AI to provide intelligent automation and insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and data protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows in minutes.</p>
            </div>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of professionals already using our micro SaaS tools to work smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/micro-saas-services#tools"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Browse All Tools
              </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your 30-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our micro SaaS solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </div>
=======
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start using our AI-powered micro applications today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
    </div>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default MicroSAASServicesPage;
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
export default MicroSaasServicesPage;
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
<<<<<<< HEAD
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
export default MicroSaasServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
