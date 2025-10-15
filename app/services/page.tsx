import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Lock, ArrowRight, CheckCircle } from "lucide-react";

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions to transform your business operations with machine learning, automation, and predictive analytics.",
      services: [
        "AI Analytics & Business Intelligence",
        "AI Content Generation & Marketing",
        "AI Customer Support & Chatbots",
        "AI Cybersecurity & Threat Detection",
        "AI Data Analytics & Insights",
        "AI Workflow Automation",
        "AI Voice Assistants & NLP",
        "AI Predictive Analytics"
      ],
      link: "/ai-services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses.",
      services: [
        "Cloud Migration & Management",
        "DevOps & CI/CD Implementation",
        "IT Consulting & Strategy",
        "Network Security & Monitoring",
        "Custom Software Development",
        "System Integration & APIs",
        "Web Development & E-commerce",
        "IT Support & Maintenance"
      ],
      link: "/services",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools.",
      services: [
        "Zion Analytics Pro",
        "Zion Security Shield",
        "Zion AI CRM Pro",
        "Project Management Tools",
        "Inventory Management Systems",
        "Financial Analytics Platforms",
        "Marketing Automation Suites",
        "Customer Support Tools"
      ],
      link: "/micro-saas",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations.",
      services: [
        "5G Network Infrastructure",
        "5G Edge Computing Solutions",
        "5G IoT & Smart Devices",
        "5G Smart City Implementations",
        "5G Private Networks",
        "5G Mobile Applications",
        "5G Data Analytics",
        "5G Implementation & Support"
      ],
      link: "/5g-solutions",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our team consists of certified professionals with years of experience in AI, IT, and 5G technologies."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly and your business stays operational."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Implementation",
      description: "Quick deployment and implementation of solutions to get your business up and running faster."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability to protect your data and ensure business continuity."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & 5G Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, Micro SAAS, and 5G technology services. Transform your business with our cutting-edge solutions." />
        <meta name="keywords" content="AI services, IT services, Micro SAAS, 5G solutions, business transformation, technology consulting" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
                From AI-powered analytics to enterprise security, we have everything you need.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 group hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{category.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">What We Offer:</h4>
                          <ul className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <li key={serviceIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          to={category.link}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <p className="text-xl text-gray-300">
                  We deliver exceptional results through our expertise, innovation, and commitment to your success.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{reason.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your business goals. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;