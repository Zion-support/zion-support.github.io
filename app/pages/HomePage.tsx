import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Smartphone, 
  Code, 
  BarChart3, 
  Users, 
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Clock,
  Target,
  Play,
  Award,
  Rocket
} from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with multi-language support and SEO optimization.',
      price: '$29/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-content-generator'
    },
    {
      name: 'Cloud Infrastructure Monitor',
      description: 'Real-time monitoring and alerting for cloud resources and applications.',
      price: '$49/month',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      link: '/cloud-monitoring'
    },
    {
      name: 'Cyber Threat Detection Suite',
      description: 'AI-powered cybersecurity monitoring and threat detection system.',
      price: '$99/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/cyber-threat-detector'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Customers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '50+', label: 'Micro SAAS Services', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G network optimization and edge computing services.',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'API Management',
      description: 'Complete API lifecycle management with analytics and security features.',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced data visualization and analytics to drive informed decisions.',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of AI-powered solutions, micro SAAS services, cybersecurity, cloud infrastructure, and digital transformation. Transform your business today." />
        <meta name="keywords" content="AI solutions, micro saas, IT services, cybersecurity, cloud computing, digital transformation, 5G solutions, API management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 1000+ businesses worldwide
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">With AI & IT Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive suite of <span className="text-cyan-400 font-semibold">micro SAAS services</span>, 
                AI-powered solutions, and cutting-edge technology that accelerates your digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/services" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Micro SAAS Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our most popular services and scale as your business grows. 
              All services include free trials and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <Link 
                        to={service.link}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI and machine learning to cloud infrastructure and cybersecurity, 
              we provide end-to-end technology solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group p-8 bg-slate-800/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver 
              results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Industry Expertise</h3>
              <p className="text-gray-300">Over 5 years of experience in AI, cloud, and cybersecurity solutions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">Get up and running in days, not months, with our streamlined onboarding.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with industry standards.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI within the first year of implementation.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS services and AI solutions 
              to accelerate growth and innovation. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;