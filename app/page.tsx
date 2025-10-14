'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ServerIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  BeakerIcon,
  CommandLineIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const coreServices = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, computer vision, and predictive analytics.",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      href: "/ai-solutions",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots", "Content Generation"],
      price: "Starting at $1,200/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"]
    },
    {
      title: "IT Solutions",
      description: "Comprehensive IT services including cloud infrastructure, cybersecurity, system integration, and digital transformation.",
      icon: ServerIcon,
      color: "from-blue-500 to-cyan-500",
      href: "/it-solutions",
      features: ["Cloud Infrastructure", "Cybersecurity", "System Integration", "Digital Transformation", "Network Management", "Data Management"],
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "24/7 monitoring", "Scalable solutions"]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized micro SaaS applications and platforms designed for specific business needs and workflows.",
      icon: RocketLaunchIcon,
      color: "from-green-500 to-emerald-500",
      href: "/micro-saas-solutions",
      features: ["Custom SaaS Development", "API Integration", "User Management", "Analytics Dashboard", "Payment Processing", "Multi-tenant Architecture"],
      price: "Starting at $1,800/month",
      benefits: ["Rapid deployment", "Cost-effective", "Scalable architecture"]
    }
  ];

  const microSaaSServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with AI-driven insights and predictive analytics for data-driven decision making.",
      icon: ChartBarIcon,
      price: "$1,500/month",
      features: ["Real-time analytics", "AI predictions", "Custom dashboards", "Data visualization", "Automated reporting"],
      benefits: ["30% faster decisions", "95% accuracy", "Real-time insights"]
    },
    {
      title: "Smart Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead qualification.",
      icon: ChatBubbleLeftRightIcon,
      price: "$800/month",
      features: ["24/7 availability", "Multi-language support", "Lead qualification", "Ticket management", "Analytics"],
      benefits: ["80% query resolution", "24/7 availability", "Cost reduction"]
    },
    {
      title: "Automated Content Management",
      description: "AI-powered content creation, optimization, and management system for marketing and documentation.",
      icon: DocumentTextIcon,
      price: "$1,200/month",
      features: ["Content generation", "SEO optimization", "Multi-language", "Brand consistency", "Performance tracking"],
      benefits: ["70% time savings", "SEO optimized", "Consistent quality"]
    },
    {
      title: "Smart Inventory Management",
      description: "AI-driven inventory optimization with demand forecasting and automated reordering capabilities.",
      icon: CogIcon,
      price: "$2,000/month",
      features: ["Demand forecasting", "Automated reordering", "Stock optimization", "Supplier management", "Analytics"],
      benefits: ["25% cost reduction", "Zero stockouts", "Optimized inventory"]
    },
    {
      title: "AI Security Monitoring",
      description: "Advanced threat detection and security monitoring with AI-powered anomaly detection and response.",
      icon: ShieldCheckIcon,
      price: "$2,500/month",
      features: ["Threat detection", "Anomaly analysis", "Automated response", "Compliance monitoring", "Incident management"],
      benefits: ["99.9% threat detection", "Real-time alerts", "Automated response"]
    },
    {
      title: "Smart Project Management",
      description: "AI-enhanced project management with predictive analytics, resource optimization, and risk assessment.",
      icon: RocketLaunchIcon,
      price: "$1,800/month",
      features: ["Predictive analytics", "Resource optimization", "Risk assessment", "Timeline prediction", "Team collaboration"],
      benefits: ["20% efficiency gain", "Risk reduction", "Better planning"]
    }
  ];

  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      price: "$3,500/month",
      features: ["Custom algorithm development", "Real-time model training", "A/B testing framework", "Model performance monitoring"],
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      price: "$2,200/month",
      features: ["Sentiment analysis", "Text classification", "Language translation", "Named entity recognition"],
      benefits: ["Multi-language support", "Real-time analysis", "High accuracy"]
    },
    {
      title: "Computer Vision",
      description: "AI-powered computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      price: "$2,800/month",
      features: ["Object detection", "Image classification", "Facial recognition", "OCR technology"],
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-format support"]
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive analytics using AI to forecast trends, customer behavior, and business outcomes.",
      icon: ChartBarIcon,
      price: "$2,500/month",
      features: ["Demand forecasting", "Customer churn prediction", "Sales forecasting", "Risk assessment"],
      benefits: ["90% forecast accuracy", "Real-time insights", "Automated alerts"]
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure",
      description: "Comprehensive cloud solutions including migration, optimization, and management of cloud environments.",
      icon: CloudIcon,
      price: "$3,000/month",
      features: ["Cloud migration", "Infrastructure optimization", "Cost management", "Security compliance"],
      benefits: ["50% cost reduction", "99.9% uptime", "Scalable infrastructure"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and incident response.",
      icon: ShieldCheckIcon,
      price: "$4,000/month",
      features: ["Threat detection", "Vulnerability assessment", "Incident response", "Security training"],
      benefits: ["Zero breaches", "24/7 monitoring", "Compliance ready"]
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications for improved efficiency and data flow.",
      icon: CogIcon,
      price: "$2,500/month",
      features: ["API integration", "Data synchronization", "Workflow automation", "Legacy system modernization"],
      benefits: ["40% efficiency gain", "Unified data", "Automated workflows"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize business processes and technology infrastructure.",
      icon: RocketLaunchIcon,
      price: "$5,000/month",
      features: ["Process optimization", "Technology modernization", "Change management", "Training and support"],
      benefits: ["60% efficiency gain", "Modern infrastructure", "Competitive advantage"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide. Contact us at +1-302-464-0950." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud infrastructure, digital transformation, micro SaaS, machine learning, data analytics" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-slate-900 particles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-purple-400 font-semibold mb-2">{service.price}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Micro SaaS Solutions Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized micro SaaS applications designed for specific business needs and workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-green-400 font-semibold text-lg">{service.price}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions powered by cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {service.description}
                      </p>
                      <p className="text-cyan-400 font-semibold mb-2">{service.price}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern business infrastructure and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {service.description}
                      </p>
                      <p className="text-green-400 font-semibold mb-2">{service.price}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 gradient-text group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our AI and IT solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us: +1-302-464-0950
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
