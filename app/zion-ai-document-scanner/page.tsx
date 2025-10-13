import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Brain, Zap, CheckCircle, Star, ArrowRight, Smartphone, Shield, BarChart3, Users, Clock, Camera, Search } from 'lucide-react';

export default function ZionAIDocumentScanner() {
  const features = [
    {
      title: "AI-Powered OCR",
      description: "Advanced optical character recognition with 99.5% accuracy for text extraction from any document",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Document Detection",
      description: "Automatically detects document edges, corrects perspective, and enhances image quality",
      icon: <Camera className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Format Support",
      description: "Scan and process PDFs, images, receipts, business cards, and handwritten notes",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Storage Integration",
      description: "Seamlessly sync with Google Drive, Dropbox, OneDrive, and other cloud storage services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Optimization",
      description: "Native mobile apps with offline scanning capabilities and instant processing",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Search & Analytics",
      description: "Powerful search functionality and document analytics to track and organize your scans",
      icon: <Search className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$24",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 500 scans/month",
        "Basic OCR features",
        "Mobile app access",
        "Cloud storage (5GB)",
        "PDF export",
        "Email support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$59",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 2,000 scans/month",
        "Advanced AI features",
        "Team collaboration",
        "Cloud storage (50GB)",
        "Custom templates",
        "API access",
        "Priority support"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$129",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited scans",
        "Full AI suite",
        "Advanced security",
        "Unlimited cloud storage",
        "Custom integrations",
        "White-label solution",
        "Dedicated support"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Receipt Management",
      description: "Digitize receipts, extract expense data, and automatically categorize for accounting",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Document Archiving",
      description: "Convert paper documents to searchable digital archives with intelligent organization",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Business Card Scanning",
      description: "Instantly scan business cards and extract contact information to your CRM",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Form Processing",
      description: "Automatically extract data from forms, applications, and surveys",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Accounting Firm",
      role: "Office Manager",
      content: "Zion AI Document Scanner has revolutionized our document management. The OCR accuracy is incredible and saves us hours every week.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Robert Chen",
      company: "Real Estate Agency",
      role: "Property Manager",
      content: "Scanning property documents has never been easier. The automatic organization and search features are game-changing.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Amanda Rodriguez",
      company: "Legal Practice",
      role: "Paralegal",
      content: "The document scanning and OCR capabilities are essential for our practice. Highly accurate and incredibly fast processing.",
      rating: 5,
      avatar: "AR"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Document Scanner - Intelligent Document Processing | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered document scanner with OCR, smart detection, and cloud integration. Digitize documents with 99.5% accuracy. Start from $24/month."
        />
        <meta
          name="keywords"
          content="AI document scanner, OCR, document processing, receipt scanning, business card scanner, document management, cloud storage"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-document-scanner" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Camera className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Document Processing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Document Scanner
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform any document into digital format with our advanced AI scanner. 
              OCR technology, smart detection, and cloud integration for seamless document management. 
              Go paperless with 99.5% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Camera className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Scanning Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need for intelligent document processing and management. 
                Built with cutting-edge AI technology for maximum accuracy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From receipt management to document archiving, our AI scanner adapts to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your document scanning needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Document Scanner
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Go Paperless?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who have digitized their documents with Zion AI Document Scanner. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Sales
                <Camera className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}