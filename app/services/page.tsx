import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, CheckCircle, Star, BarChart3, Cloud, Code, Database } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage = () => {
  const mainServices = [
    {
      title: "AI Services",
      description: "Comprehensive artificial intelligence solutions including machine learning, natural language processing, and predictive analytics to transform your business operations.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      link: "/ai-services"
    },
    {
      title: "IT Solutions",
      description: "Complete technology infrastructure services including cloud migration, cybersecurity, and digital transformation for modern businesses.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      features: ["Cloud Infrastructure", "Cybersecurity", "Network Management", "System Integration"],
      link: "/it-services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-deploy software solutions that can be implemented immediately to solve specific business challenges and improve efficiency.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      features: ["Analytics Dashboards", "Security Tools", "Productivity Apps", "Business Automation"],
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
      features: ["5G Infrastructure", "Edge Computing", "IoT Solutions", "Smart City Tech"],
      link: "/5g-solutions"
    }
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "AI Automation", path: "/ai-automation", icon: <Zap className="w-5 h-5" /> },
    { name: "AI Content Generation", path: "/ai-content-generation", icon: <Brain className="w-5 h-5" /> },
    { name: "AI Customer Service", path: "/ai-customer-service", icon: <Shield className="w-5 h-5" /> },
    { name: "AI Marketing", path: "/ai-marketing", icon: <Globe className="w-5 h-5" /> },
    { name: "AI Healthcare", path: "/ai-healthcare", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", icon: <Cloud className="w-5 h-5" /> },
    { name: "Cybersecurity", path: "/cybersecurity-solutions", icon: <Shield className="w-5 h-5" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-5 h-5" /> },
    { name: "Mobile Development", path: "/mobile-development", icon: <Zap className="w-5 h-5" /> },
    { name: "Database Management", path: "/database-management", icon: <Database className="w-5 h-5" /> },
    { name: "Network Infrastructure", path: "/network-infrastructure", icon: <Globe className="w-5 h-5" /> }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs, current technology stack, and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We develop a comprehensive strategy and roadmap tailored to your specific goals and requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the solution with minimal disruption to your existing operations."
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "We provide ongoing support, monitoring, and optimization to ensure maximum value and performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Services - AI Solutions, IT Services, Micro SAAS | Zion Tech Group"
        description="Comprehensive technology services including AI solutions, IT services, micro SAAS, and 5G solutions. Transform your business with our expert technology services."
        keywords="AI services, IT solutions, micro SAAS, 5G solutions, technology services, digital transformation, business automation"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From AI-powered analytics to enterprise security, we have everything you need.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technology infrastructure and support services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and explore how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;