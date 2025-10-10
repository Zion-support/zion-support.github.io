'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  StarIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const microSAASServices = [
    {
      name: "AI-Powered Task Manager Pro",
      description: "Intelligent task management with AI-driven prioritization and automation",
      price: "$29/month",
      features: ["Smart task prioritization", "Automated scheduling", "Team collaboration", "Progress analytics"],
      link: "/task-manager-pro"
    },
    {
      name: "AI Expense Tracker",
      description: "Automated expense tracking with receipt scanning and categorization",
      price: "$19/month",
      features: ["Receipt scanning", "Auto-categorization", "Budget alerts", "Tax preparation"],
      link: "/expense-tracker"
    },
    {
      name: "AI Analytics Dashboard",
      description: "Real-time business analytics with predictive insights and custom reports",
      price: "$49/month",
      features: ["Real-time analytics", "Predictive insights", "Custom reports", "Data visualization"],
      link: "/ai-analytics-dashboard"
    },
    {
      name: "AI CRM Assistant",
      description: "Intelligent customer relationship management with automated follow-ups",
      price: "$39/month",
      features: ["Lead scoring", "Automated follow-ups", "Sales forecasting", "Customer insights"],
      link: "/ai-crm"
    }
  ];

  const aiServices = [
    {
      name: "AI Content Generation",
      description: "Generate high-quality content for blogs, social media, and marketing materials",
      price: "From $99/month",
      features: ["Blog posts", "Social media content", "Email campaigns", "Product descriptions"]
    },
    {
      name: "AI Customer Support",
      description: "24/7 intelligent customer support with natural language processing",
      price: "From $199/month",
      features: ["Multi-language support", "Sentiment analysis", "Escalation management", "Performance analytics"]
    },
    {
      name: "AI Cybersecurity Suite",
      description: "Advanced threat detection and prevention using machine learning",
      price: "From $299/month",
      features: ["Threat detection", "Vulnerability scanning", "Incident response", "Compliance monitoring"]
    },
    {
      name: "AI Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics",
      price: "From $149/month",
      features: ["Data processing", "Pattern recognition", "Predictive modeling", "Custom dashboards"]
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions for businesses of all sizes",
      price: "From $199/month",
      features: ["AWS/Azure/GCP setup", "Auto-scaling", "Backup solutions", "24/7 monitoring"]
    },
    {
      name: "Network Security",
      description: "Comprehensive network security solutions and monitoring",
      price: "From $299/month",
      features: ["Firewall management", "VPN setup", "Intrusion detection", "Security audits"]
    },
    {
      name: "Database Management",
      description: "Expert database design, optimization, and maintenance services",
      price: "From $249/month",
      features: ["Database design", "Performance optimization", "Backup strategies", "Migration services"]
    },
    {
      name: "DevOps & CI/CD",
      description: "Streamlined development and deployment processes",
      price: "From $399/month",
      features: ["CI/CD pipelines", "Container orchestration", "Infrastructure as code", "Monitoring setup"]
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS services, IT solutions, and enterprise technology services. Transform your business with our innovative AI and cloud solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cloud computing, cybersecurity, data analytics, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered micro SAAS services, IT solutions, and enterprise technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of micro SAAS services, AI solutions, and enterprise IT services. 
              Accelerate your digital transformation with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-slate-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions designed to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/ai-services"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running smoothly and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/it-services"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver results that matter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technology</h3>
              <p className="text-gray-300">Cutting-edge AI and IT solutions powered by the latest technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations and measurable business impact</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">Solutions that grow with your business from startup to enterprise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 support from our team of certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with local expertise and global capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our AI-powered solutions today. Contact us for a free consultation and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;