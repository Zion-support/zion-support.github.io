import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Server, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  Brain,
  Target,
  Users,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Activity,
  Settings,
  BarChart3,
  AlertTriangle,
  Terminal
} from 'lucide-react';

const FiveGNetworkInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "5G Core Network",
      description: "Advanced 5G core network infrastructure with cloud-native architecture and edge computing."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Distributed edge computing infrastructure for ultra-low latency applications and services."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Network Slicing",
      description: "Dynamic network slicing for customized connectivity and service quality for different use cases."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Optimization",
      description: "Intelligent network optimization using AI for maximum performance and resource efficiency."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Seamless 5G coverage across multiple locations with consistent performance and reliability."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Network Management",
      description: "Comprehensive network management and monitoring for optimal performance and security."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$599",
      period: "per month",
      description: "Perfect for small businesses with basic 5G infrastructure needs",
      features: [
        "Basic 5G coverage",
        "Standard edge computing",
        "Email support",
        "Basic monitoring",
        "Standard security",
        "1 location"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "per month",
      description: "Ideal for growing businesses with complex 5G requirements",
      features: [
        "Advanced 5G coverage",
        "Premium edge computing",
        "Priority support",
        "Advanced monitoring",
        "Premium security",
        "5 locations",
        "Network slicing",
        "AI optimization",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,399",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Premium 5G coverage",
        "Custom edge computing",
        "24/7 dedicated support",
        "24/7 monitoring",
        "Enterprise security",
        "Unlimited locations",
        "White-label solution",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Infrastructure | Zion Tech Group - Advanced 5G Solutions</title>
        <meta name="description" content="Build and deploy advanced 5G network infrastructure with our comprehensive solutions. Core network, edge computing, and network slicing starting at $599/month." />
        <meta name="keywords" content="5G network infrastructure, 5G core network, edge computing, network slicing, 5G deployment, 5G optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Network Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build and deploy advanced 5G network infrastructure with our comprehensive solutions. 
                Core network, edge computing, and network slicing for next-generation connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced 5G Infrastructure Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G network infrastructure platform provides comprehensive solutions for modern connectivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible 5G Infrastructure Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the 5G infrastructure solution that fits your business needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative border-2 ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your 5G Network?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our 5G infrastructure platform to build next-generation networks.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400 mt-2">24/7 Support Available</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-lg">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-lg">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-block">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGNetworkInfrastructurePage;