import { ArrowRight, Cpu, Zap, Globe, Shield, CheckCircle, Star, Network, Cloud, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EdgeComputingSolutions() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Processing Units",
      description: "High-performance edge computing hardware for real-time data processing and analysis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Sub-millisecond response times for critical applications and real-time decision making"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Worldwide edge infrastructure with 200+ locations for optimal performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Edge Security",
      description: "Comprehensive security solutions for edge devices and data protection"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "5G Integration",
      description: "Seamless integration with 5G networks for enhanced connectivity and speed"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Edge Data Management",
      description: "Intelligent data processing and storage at the edge for optimal efficiency"
    }
  ];

  const useCases = [
    "Autonomous Vehicles",
    "Industrial IoT",
    "Smart Cities",
    "AR/VR Applications",
    "Real-time Analytics",
    "Video Processing",
    "Gaming & Streaming",
    "Financial Trading",
    "Healthcare Monitoring",
    "Manufacturing Automation"
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small deployments",
      features: [
        "1 edge location",
        "Basic processing power",
        "Standard support",
        "10GB data transfer",
        "Basic monitoring",
        "1 application"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$999",
      period: "/month",
      description: "Most popular for enterprises",
      features: [
        "5 edge locations",
        "High-performance processing",
        "Priority support",
        "100GB data transfer",
        "Advanced monitoring",
        "5 applications",
        "5G integration",
        "Custom configurations"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited edge locations",
        "Maximum processing power",
        "24/7 dedicated support",
        "Unlimited data transfer",
        "Premium monitoring",
        "Unlimited applications",
        "Global 5G network",
        "Custom hardware",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "James Rodriguez",
      company: "Autonomous Vehicle Company",
      role: "CTO",
      content: "Zion's edge computing solutions have enabled us to achieve real-time decision making in our autonomous vehicles. The latency reduction is incredible.",
      rating: 5
    },
    {
      name: "Dr. Lisa Wang",
      company: "Smart City Initiative",
      role: "Technology Director",
      content: "The edge infrastructure has transformed our smart city operations. We can now process data locally and respond to events in real-time.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      company: "Industrial IoT Company",
      role: "Head of Engineering",
      content: "Edge computing has revolutionized our manufacturing processes. We've seen 90% reduction in latency and 300% improvement in efficiency.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Ultra-Low Latency Processing | Zion Tech Group</title>
        <meta
          name="description"
          content="Deploy edge computing solutions for ultra-low latency processing. Zion Tech Group offers edge infrastructure, 5G integration, and real-time analytics for modern applications."
        />
        <meta
          name="keywords"
          content="edge computing, edge infrastructure, low latency, 5G edge, real-time processing, edge analytics, IoT edge, edge security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Cpu className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Ultra-Low Latency Computing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Edge Computing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bring computing power closer to your data with our edge computing solutions. 
              Ultra-low latency, real-time processing, and global edge infrastructure for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Deploy Edge Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Edge Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">&lt;1ms</div>
                <div className="text-gray-300">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">200+</div>
                <div className="text-gray-300">Edge Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
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
                Everything you need for high-performance edge computing deployments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for applications requiring ultra-low latency and real-time processing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{useCase}</span>
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
                Edge Computing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the edge computing power that matches your application requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
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
                See what our clients say about our edge computing solutions
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
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the edge computing revolution with Zion Tech Group's ultra-low latency solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Edge Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Edge Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}