import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, BarChart3, Users, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const AIServicesPage: React.FC = () => {
  const stats = [
    { icon: <Brain className="w-8 h-8 text-cyan-400" />, value: "500+", label: "AI Models Deployed" },
    { icon: <Users className="w-8 h-8 text-purple-400" />, value: "1000+", label: "Happy Clients" },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, value: "99.9%", label: "Uptime" },
    { icon: <Shield className="w-8 h-8 text-green-400" />, value: "100%", label: "Security" }
  ];

  const services = [
    {
      title: "AI-Powered Video Generation",
      description: "Create stunning videos using advanced AI algorithms that understand your content and generate professional-quality videos automatically.",
      features: ["Automated video creation", "Multiple format support", "Custom branding", "Real-time preview"],
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Intelligent Content Creation",
      description: "Generate high-quality content for blogs, social media, and marketing materials using our advanced AI writing tools.",
      features: ["SEO-optimized content", "Multiple languages", "Brand voice matching", "Content scheduling"],
      icon: <Zap className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Get deep insights into your business performance with AI-powered analytics that predict trends and optimize strategies.",
      features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Trend analysis"],
      icon: <BarChart3 className="w-12 h-12 text-yellow-400" />
    },
    {
      title: "AI Cybersecurity Solutions",
      description: "Protect your business with intelligent security systems that detect and prevent threats before they impact your operations.",
      features: ["Threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"],
      icon: <Shield className="w-12 h-12 text-green-400" />
    },
    {
      title: "Workflow Automation",
      description: "Streamline your business processes with intelligent automation that reduces manual work and increases efficiency.",
      features: ["Process optimization", "Task automation", "Integration capabilities", "Performance tracking"],
      icon: <Globe className="w-12 h-12 text-blue-400" />
    },
    {
      title: "AI Consulting & Strategy",
      description: "Get expert guidance on implementing AI solutions that align with your business goals and drive measurable results.",
      features: ["Strategic planning", "Implementation support", "Training programs", "Ongoing optimization"],
      icon: <Users className="w-12 h-12 text-indigo-400" />
    }
  ];

  const benefits = [
    "Increase productivity by up to 300%",
    "Reduce operational costs by 40%",
    "Improve customer satisfaction scores",
    "Accelerate time-to-market for new products",
    "Enhance decision-making with data insights",
    "Scale operations without proportional cost increases"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From content generation to cybersecurity, we provide intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven solutions that deliver measurable results for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our AI services can help you achieve your business goals. 
            Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;