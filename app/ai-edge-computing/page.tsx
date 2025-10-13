import { ArrowRight, Cpu, Zap, Globe, Shield, Star, CheckCircle, Cloud, Database, Wifi } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiEdgeComputing() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge AI Processing",
      description: "Deploy AI models directly on edge devices for real-time processing and decision making"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Process data locally with sub-millisecond response times for critical applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Distributed Intelligence",
      description: "Intelligent edge nodes that work together to form a distributed computing network"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Data processing at the edge reduces security risks and ensures data privacy"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between edge computing and cloud infrastructure"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Process and analyze data streams in real-time at the edge for instant insights"
    }
  ];

  const applications = [
    "Industrial IoT Monitoring",
    "Autonomous Vehicle Systems",
    "Smart City Infrastructure",
    "Healthcare Monitoring",
    "Manufacturing Automation",
    "Retail Analytics",
    "Agricultural Monitoring",
    "Energy Grid Management",
    "Traffic Management",
    "Security Surveillance",
    "Predictive Maintenance",
    "Real-time Video Processing"
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small deployments",
      features: [
        "Up to 5 edge nodes",
        "Basic AI models",
        "Standard support",
        "Cloud integration",
        "Basic monitoring",
        "1TB edge storage"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$5,999",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 25 edge nodes",
        "Advanced AI models",
        "Priority support",
        "Custom deployment",
        "Advanced monitoring",
        "10TB edge storage",
        "API access",
        "Real-time analytics"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited edge nodes",
        "Custom AI models",
        "Dedicated support team",
        "White-label solution",
        "Advanced security",
        "Unlimited storage",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "Smart Manufacturing",
      role: "CTO",
      content: "Zion's edge computing solution reduced our data processing latency by 90% and enabled real-time quality control. Our production efficiency increased by 40%.",
      rating: 5
    },
    {
      name: "James Chen",
      company: "Autonomous Systems",
      role: "Lead Engineer",
      content: "The edge AI processing capabilities are incredible. We can now make split-second decisions for our autonomous vehicles without relying on cloud connectivity.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Healthcare IoT",
      role: "Technology Director",
      content: "Edge computing transformed our patient monitoring systems. We can now process vital signs in real-time and alert medical staff instantly when needed.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Edge Computing Services - Intelligent Edge Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Deploy AI at the edge with ultra-low latency processing. Edge computing solutions for IoT, autonomous systems, and real-time analytics with Zion Tech Group."
        />
        <meta
          name="keywords"
          content="edge computing, AI edge, IoT processing, real-time analytics, distributed computing, edge AI, low latency computing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Cpu className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">Next-Generation Edge Computing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                AI Edge Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy artificial intelligence at the edge for ultra-low latency processing. 
              Process data locally, reduce bandwidth costs, and enable real-time decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Edge Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">90%</div>
                <div className="text-gray-300">Latency Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Edge Locations</div>
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
                Powerful edge computing capabilities powered by artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with intelligent edge computing solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{application}</span>
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
                Choose the edge computing solution that fits your deployment needs. All plans include setup and configuration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
                    }`}
                  >
                    Start Edge Journey
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
                Trusted by Edge Computing Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what technology leaders say about our edge computing solutions
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
              Ready to Deploy AI at the Edge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations using Zion's edge computing solutions for real-time intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Edge Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
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