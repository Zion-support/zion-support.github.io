import { ArrowRight, Cpu, Zap, Globe, CheckCircle, Star, Cloud, Shield, BarChart3, Clock, Users, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EdgeComputingSolutions() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Process data at the edge with sub-10ms latency for real-time applications and IoT devices"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Deploy applications across 200+ edge locations worldwide for optimal performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intelligent Routing",
      description: "AI-powered traffic routing to automatically direct users to the nearest edge location"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Edge Security",
      description: "Comprehensive security at the edge with encryption, authentication, and threat detection"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between edge computing and cloud infrastructure"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Process and analyze data at the edge for instant insights and decision making"
    }
  ];

  const capabilities = [
    "IoT Data Processing",
    "Real-time Video Analytics",
    "Autonomous Vehicle Support",
    "Smart City Infrastructure",
    "Industrial IoT (IIoT)",
    "Content Delivery Networks (CDN)",
    "Edge AI/ML Inference",
    "5G Network Optimization",
    "Edge Storage Solutions",
    "Edge Security Services",
    "Multi-cloud Edge Management",
    "Edge Application Development"
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small applications",
      features: [
        "Up to 5 edge locations",
        "100GB data transfer",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$999",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 edge locations",
        "1TB data transfer",
        "Advanced monitoring",
        "Priority support",
        "Advanced security",
        "Real-time analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited edge locations",
        "Unlimited data transfer",
        "Custom monitoring",
        "24/7 phone support",
        "White-label solution",
        "Advanced compliance",
        "Dedicated edge engineer"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      company: "IoT Solutions Inc.",
      role: "CTO",
      content: "Zion Edge Computing reduced our data processing latency by 95% and enabled real-time decision making for our IoT devices. Game-changing technology.",
      rating: 5
    },
    {
      name: "Robert Garcia",
      company: "Smart City Initiative",
      role: "Technology Director",
      content: "The global edge network allows us to deploy smart city applications worldwide with consistent performance. The intelligent routing is incredibly effective.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Autonomous Vehicle Co.",
      role: "VP of Engineering",
      content: "Edge computing is critical for our autonomous vehicles. The ultra-low latency and real-time analytics capabilities are exactly what we needed.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Global Edge Infrastructure | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your applications with Zion Edge Computing Solutions - the ultimate edge infrastructure platform. Ultra-low latency, global network, and real-time processing for modern applications."
        />
        <meta
          name="keywords"
          content="edge computing, edge infrastructure, IoT processing, real-time analytics, global CDN, edge AI, 5G edge, smart city solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Cpu className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Global Edge Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Edge Computing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your applications with the world's most advanced edge computing platform. 
              Ultra-low latency, global network, and real-time processing for modern applications and IoT devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">10ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">200+</div>
                <div className="text-gray-300">Edge Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to deploy and manage applications at the edge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Edge Computing Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to build and deploy edge applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your edge computing needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Edge Computing Solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy at the Edge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations using Zion Edge Computing to deliver ultra-fast applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}