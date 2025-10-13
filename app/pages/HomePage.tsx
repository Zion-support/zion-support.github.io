import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Lock,
  BarChart3,
  Code,
  Smartphone,
  Globe,
  Target,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  const microSaasServices = [
    {
      name: "AI Content Generator Pro",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      price: "$29/month",
      features: ["Unlimited content generation", "50+ content templates", "SEO optimization", "Multi-language support"],
      icon: Brain,
      category: "AI Services"
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and automated reporting.",
      price: "$49/month",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "Automated alerts"],
      icon: BarChart3,
      category: "Analytics"
    },
    {
      name: "Code Assistant AI",
      description: "AI-powered coding assistant that helps developers write better code faster.",
      price: "$39/month",
      features: ["Code completion", "Bug detection", "Code review", "Documentation generation"],
      icon: Code,
      category: "Development"
    },
    {
      name: "Mobile App Builder",
      description: "No-code platform to create professional mobile apps for iOS and Android.",
      price: "$79/month",
      features: ["Drag-and-drop builder", "Native performance", "App store deployment", "Analytics integration"],
      icon: Smartphone,
      category: "Mobile"
    },
    {
      name: "Website Performance Monitor",
      description: "Monitor website performance, uptime, and user experience with detailed analytics.",
      price: "$19/month",
      features: ["Uptime monitoring", "Performance metrics", "User experience tracking", "Alert system"],
      icon: Globe,
      category: "Monitoring"
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.",
      price: "$59/month",
      features: ["24/7 availability", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      icon: Users,
      category: "Customer Service"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure setup for AWS, Azure, and Google Cloud.",
      price: "Starting at $2,500",
      features: ["Cloud architecture design", "Migration planning", "Security implementation", "24/7 monitoring"]
    },
    {
      name: "Cybersecurity Audit",
      description: "Comprehensive security assessment and implementation of best practices.",
      price: "Starting at $1,500",
      features: ["Vulnerability assessment", "Penetration testing", "Security policies", "Staff training"]
    },
    {
      name: "Data Backup & Recovery",
      description: "Automated backup solutions and disaster recovery planning for business continuity.",
      price: "Starting at $500/month",
      features: ["Automated backups", "Disaster recovery", "Data encryption", "Recovery testing"]
    }
  ];

  const aiServices = [
    {
      name: "Machine Learning Models",
      description: "Custom ML models for predictive analytics, recommendation systems, and automation.",
      price: "Starting at $5,000",
      features: ["Custom model development", "Data preprocessing", "Model training", "API integration"]
    },
    {
      name: "Computer Vision Solutions",
      description: "Image recognition, object detection, and visual analysis for various industries.",
      price: "Starting at $3,500",
      features: ["Image classification", "Object detection", "Facial recognition", "Quality control"]
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding solutions.",
      price: "Starting at $2,500",
      features: ["Text classification", "Sentiment analysis", "Language translation", "Chatbot integration"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Micro SAAS services, cloud solutions, and AI-powered tools." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, data analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cutting-edge AI and IT solutions that drive innovation, efficiency, and growth for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Micro SAAS Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable tools that solve specific business problems with modern technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-cyan-600 font-semibold">{service.category}</span>
                      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                    <span className="text-gray-500 ml-2">per month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">IT Services & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure and secure your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes and gain competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid deployment and implementation of solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 technical support from certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}