import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Workflow,
  BarChart,
  Settings as SettingsIcon,
  BarChart3 as Intelligence,
  Wifi,
  Signal,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Settings,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase
} from 'lucide-react';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with speeds up to 10 Gbps for enterprise applications"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-low latency of less than 1ms for real-time applications and IoT devices"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and network slicing for enterprise-grade protection"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed edge computing infrastructure for faster data processing"
    },
    {
      icon: Database,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
    }
  ];

  const solutions = [
    {
      title: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise campuses and industrial facilities",
      icon: Building,
      features: ["Network slicing", "Custom security policies", "Dedicated bandwidth", "Low latency"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure for faster application performance",
      icon: Cloud,
      features: ["Edge data centers", "Local processing", "Reduced latency", "Bandwidth optimization"]
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT connectivity and management for enterprise applications",
      icon: Workflow,
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation"]
    },
    {
      title: "5G Mobile Solutions",
      description: "Enterprise mobile solutions with 5G connectivity and security",
      icon: Smartphone,
      features: ["Mobile device management", "Secure connectivity", "App optimization", "Performance monitoring"]
    }
  ];

  const benefits = [
    "Increase network speed by 100x compared to 4G",
    "Reduce latency by 90% for real-time applications",
    "Support 100x more connected devices per area",
    "Improve network reliability and uptime",
    "Enable new enterprise applications and services",
    "Reduce infrastructure costs through virtualization"
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Smart factories with real-time monitoring and automation",
      icon: Building,
      benefits: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Worker safety"]
    },
    {
      title: "Healthcare",
      description: "Telemedicine and remote patient monitoring",
      icon: Heart,
      benefits: ["Remote consultations", "Patient monitoring", "Medical imaging", "Emergency response"]
    },
    {
      title: "Transportation",
      description: "Connected vehicles and smart transportation systems",
      icon: Rocket,
      benefits: ["Traffic management", "Fleet optimization", "Passenger safety", "Route planning"]
    },
    {
      title: "Retail",
      description: "Smart retail with personalized customer experiences",
      icon: ShoppingCart,
      benefits: ["Customer analytics", "Inventory management", "Personalized marketing", "Checkout optimization"]
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      icon: Building,
      description: "Industry 4.0 transformation with 5G connectivity"
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Next-generation healthcare with 5G telemedicine"
    },
    {
      title: "Transportation",
      icon: Rocket,
      description: "Connected transportation and smart cities"
    },
    {
      title: "Retail",
      icon: ShoppingCart,
      description: "Smart retail and customer experience optimization"
    },
    {
      title: "Energy",
      icon: Zap,
      description: "Smart grid and energy management systems"
    },
    {
      title: "Finance",
      icon: DollarSign,
      description: "High-frequency trading and financial services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with our cutting-edge 5G solutions. Ultra-fast connectivity, low latency, and enterprise-grade security for the next generation of business." />
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise 5G, 5G networks, 5G private networks, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Network className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your enterprise with next-generation 5G connectivity, ultra-low latency, and enterprise-grade security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5G Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of 5G with our enterprise-grade solutions designed for performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise 5G Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed specifically for enterprise needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose 5G Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented performance and capabilities with next-generation 5G technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new business models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to healthcare, our 5G solutions are transforming businesses across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-xs">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced 5G Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge 5G standards and technologies for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Signal className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">5G NR</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Network Slicing</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Edge Computing</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Security</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 5G revolution and unlock new possibilities for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your enterprise with 5G? Contact our experts today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FiveGEnterpriseSolutions;