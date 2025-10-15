import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Users, Globe, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Revolutionary AI voice assistant with 99.5% accuracy and multi-language support",
      price: "From $99/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      featured: true
    },
    {
      name: "Zion AI Fraud Detection Pro",
      description: "Advanced AI fraud detection with 99.7% accuracy and real-time monitoring",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-fraud-detection-pro",
      featured: true
    },
    {
      name: "Zion AI Analytics Dashboard Pro",
      description: "Comprehensive analytics dashboard with AI-powered insights and reporting",
      price: "From $149/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-dashboard-pro",
      featured: true
    },
    {
      name: "Zion AI Content Generator Pro",
      description: "AI-powered content generation for blogs, social media, and marketing materials",
      price: "From $79/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-content-generator-pro",
      featured: false
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "Intelligent customer support system with automated responses and escalation",
      price: "From $129/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      featured: false
    },
    {
      name: "Zion AI Cloud Manager Pro",
      description: "Comprehensive cloud infrastructure management with AI optimization",
      price: "From $299/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-ai-cloud-manager-pro",
      featured: false
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Simple API integration with comprehensive documentation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with sub-second response times"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable",
      description: "Fully customizable to match your brand and requirements"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <EnhancedSEO
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Powerful micro SaaS solutions designed for modern businesses. AI-powered tools that scale with your needs."
        keywords="micro saas, saas solutions, AI tools, business automation, cloud software"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Micro SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our collection of AI-powered micro SaaS solutions designed to 
              streamline your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of powerful, AI-driven micro SaaS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 ${
                  solution.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {solution.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-600">Featured</span>
                  </div>
                )}

                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>

                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {solution.price}
                </div>

                <Link
                  to={solution.link}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technology and designed for scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SaaS solutions 
            to streamline their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;