import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  Brain,
  Target,
  BarChart3,
  Users,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Activity
} from 'lucide-react';

const FiveGImplementation: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Fast Connectivity",
      description: "Deploy 5G networks with speeds up to 10 Gbps for lightning-fast data transfer and real-time applications."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low Latency",
      description: "Achieve ultra-low latency of 1ms for mission-critical applications and real-time decision making."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Advanced 5G security protocols and network slicing for maximum data protection and privacy."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Optimization",
      description: "Intelligent network optimization using AI to ensure optimal performance and resource utilization."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Seamless 5G coverage across multiple locations with consistent performance and reliability."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored 5G implementations designed specifically for your business requirements and use cases."
    }
  ];

  const services = [
    {
      title: "5G Network Planning",
      description: "Comprehensive network design and planning for optimal 5G coverage and performance",
      price: "Starting at $10,000",
      features: ["Site surveys", "Coverage analysis", "Capacity planning", "Interference analysis"]
    },
    {
      title: "5G Infrastructure Deployment",
      description: "Complete 5G infrastructure setup including base stations, antennas, and core network",
      price: "Starting at $50,000",
      features: ["Hardware installation", "Network configuration", "Testing & validation", "Documentation"]
    },
    {
      title: "5G Network Optimization",
      description: "Continuous monitoring and optimization to ensure peak 5G performance",
      price: "Starting at $5,000/month",
      features: ["Performance monitoring", "Capacity optimization", "Interference mitigation", "24/7 support"]
    },
    {
      title: "5G IoT Integration",
      description: "Connect and manage IoT devices with 5G technology for smart applications",
      price: "Starting at $15,000",
      features: ["Device integration", "Data management", "Real-time monitoring", "Analytics dashboard"]
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses with basic 5G needs",
      features: [
        "Up to 100 connected devices",
        "Basic 5G coverage",
        "Standard support",
        "Basic monitoring",
        "Monthly reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "Ideal for medium to large businesses",
      features: [
        "Up to 1,000 connected devices",
        "Advanced 5G coverage",
        "Priority support",
        "Advanced monitoring",
        "Real-time analytics",
        "Phone & email support",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      period: "for pricing",
      description: "Tailored 5G solutions for unique requirements",
      features: [
        "Unlimited devices",
        "Custom 5G architecture",
        "Dedicated support team",
        "24/7 monitoring",
        "Custom analytics",
        "On-site support",
        "White-label solutions",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group - Next-Generation Network Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-fast connectivity, low latency, and AI-powered optimization starting at $499/month." />
        <meta name="keywords" content="5G implementation, 5G deployment, 5G network, 5G optimization, 5G IoT, ultra-fast connectivity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, 
                ultra-low latency, and AI-powered optimization for the next generation of digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
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
                Next-Generation 5G Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of 5G with our comprehensive implementation and optimization services.
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our 5G Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive 5G solutions from planning to optimization and ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible 5G Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the 5G solution that fits your business needs and budget.
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our 5G Implementation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of connectivity with our expert 5G implementation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Deploy 5G networks with speeds up to 10 Gbps for ultra-fast connectivity</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Advanced 5G security protocols and network slicing for maximum protection</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring and optimization to ensure peak 5G performance</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                <p className="text-gray-300">Certified 5G engineers with 10+ years of experience in network implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your 5G implementation needs and get a custom solution for your business.
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
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FiveGImplementation;