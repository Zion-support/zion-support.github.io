import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaasServices = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with 50+ templates, SEO optimization, and multi-language support.",
      price: "$29/month",
      features: [
        "50+ Content Templates",
        "SEO Optimization",
        "Multi-language Support",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Social Media Integration"
      ],
      category: "Content Creation",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Real-time business analytics with custom dashboards, automated reports, and predictive insights.",
      price: "$49/month",
      features: [
        "Real-time Analytics",
        "Custom Dashboards",
        "Automated Reports",
        "Predictive Insights",
        "Data Visualization",
        "API Integration"
      ],
      category: "Analytics",
      icon: ChartBarIcon,
      color: "from-cyan-500 to-blue-500",
      popular: false
    },
    {
      id: 3,
      name: "Customer Support Bot",
      description: "Intelligent chatbot with natural language processing, ticket management, and 24/7 availability.",
      price: "$39/month",
      features: [
        "Natural Language Processing",
        "Ticket Management",
        "24/7 Availability",
        "Multi-channel Support",
        "Sentiment Analysis",
        "Custom Training"
      ],
      category: "Customer Service",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      id: 4,
      name: "Email Marketing Automation",
      description: "Advanced email marketing platform with AI-driven personalization and automated campaigns.",
      price: "$25/month",
      features: [
        "AI Personalization",
        "Automated Campaigns",
        "A/B Testing",
        "Email Templates",
        "Analytics & Reporting",
        "CRM Integration"
      ],
      category: "Marketing",
      icon: EnvelopeIcon,
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      id: 5,
      name: "Project Management AI",
      description: "Smart project management with AI-powered task prioritization and team collaboration tools.",
      price: "$35/month",
      features: [
        "AI Task Prioritization",
        "Team Collaboration",
        "Time Tracking",
        "Resource Management",
        "Progress Analytics",
        "Integration Hub"
      ],
      category: "Productivity",
      icon: ClockIcon,
      color: "from-indigo-500 to-purple-500",
      popular: true
    },
    {
      id: 6,
      name: "Security Monitoring Suite",
      description: "Comprehensive security monitoring with threat detection, vulnerability scanning, and compliance reporting.",
      price: "$79/month",
      features: [
        "Threat Detection",
        "Vulnerability Scanning",
        "Compliance Reporting",
        "Real-time Alerts",
        "Security Analytics",
        "Incident Response"
      ],
      category: "Security",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500",
      popular: false
    },
    {
      id: 7,
      name: "Cloud Storage Optimizer",
      description: "Intelligent cloud storage management with automated backup, deduplication, and cost optimization.",
      price: "$19/month",
      features: [
        "Automated Backup",
        "Deduplication",
        "Cost Optimization",
        "File Synchronization",
        "Version Control",
        "Access Management"
      ],
      category: "Cloud Services",
      icon: CloudIcon,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      id: 8,
      name: "Social Media Scheduler",
      description: "AI-powered social media management with content scheduling, engagement tracking, and performance analytics.",
      price: "$45/month",
      features: [
        "Content Scheduling",
        "Engagement Tracking",
        "Performance Analytics",
        "Multi-platform Support",
        "Hashtag Optimization",
        "Influencer Management"
      ],
      category: "Social Media",
      icon: GlobeAltIcon,
      color: "from-pink-500 to-rose-500",
      popular: true
    }
  ];

  const categories = ["All", "Content Creation", "Analytics", "Customer Service", "Marketing", "Productivity", "Security", "Cloud Services", "Social Media"];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications." />
        <meta name="keywords" content="micro SaaS, business solutions, AI tools, automation, productivity, analytics, content creation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, Scalable Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SaaS applications designed to solve specific business challenges 
              with cutting-edge technology, AI integration, and seamless user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Pricing
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SaaS applications designed to enhance your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-400" />
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Start Free Trial
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our micro SaaS applications are designed with modern businesses in mind, offering 
              powerful features, seamless integration, and exceptional value.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">Advanced artificial intelligence integration for smarter, more efficient operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and data protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">Grow with your business - from startup to enterprise scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discuss your micro SaaS needs and get a personalized solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}