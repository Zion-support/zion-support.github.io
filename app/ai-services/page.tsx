import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const AiServicesPage = () => {
  const stats = [
    { icon: <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">📊</div>, value: "500+", label: "Projects Completed" },
    { icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">🤖</div>, value: "50+", label: "AI Models Deployed" },
    { icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">⚡</div>, value: "99.9%", label: "Uptime" },
    { icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">👥</div>, value: "200+", label: "Happy Clients" }
  ];

  const aiServices = [
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our advanced AI writing tools.",
      icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">✍️</div>,
      features: ["Blog Posts", "Social Media", "Product Descriptions", "Email Campaigns"],
      price: "$299/month",
      popular: true,
      href: "/contact"
    },
    {
      title: "AI Analytics",
      description: "Transform your data into actionable insights with machine learning.",
      icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">📈</div>,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      price: "$499/month",
      popular: false,
      href: "/contact"
    },
    {
      title: "AI Automation",
      description: "Automate repetitive tasks and workflows with intelligent automation.",
      icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">⚙️</div>,
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Integration"],
      price: "$399/month",
      popular: false,
      href: "/contact"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered security solutions.",
      icon: <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">🛡️</div>,
      features: ["Threat Detection", "Anomaly Detection", "Security Monitoring", "Incident Response"],
      price: "$599/month",
      popular: false,
      href: "/contact"
    },
    {
      title: "AI Video Generation",
      description: "Create professional videos with AI-powered video generation tools.",
      icon: <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">🎥</div>,
      features: ["Video Creation", "Voice Synthesis", "Animation", "Editing"],
      price: "$799/month",
      popular: false,
      href: "/contact"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis and data extraction.",
      icon: <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">📄</div>,
      features: ["OCR Processing", "Data Extraction", "Document Classification", "Form Recognition"],
      price: "$299/month",
      popular: false,
      href: "/contact"
    }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Our AI specialists have years of experience in machine learning and artificial intelligence.",
      icon: <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">👨‍💻</div>
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and requirements.",
      icon: <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">🎯</div>
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your AI systems run smoothly at all times.",
      icon: <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">🕒</div>
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group's AI services transformed our business operations. The automation solutions saved us 40 hours per week.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow",
      content: "The AI analytics platform provided insights we never knew existed. Our decision-making process is now data-driven.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The AI content generation tools helped us scale our content marketing by 300% while maintaining quality.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions for Business</title>
        <meta name="description" content="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
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
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
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

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-cyan-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    {service.price}
                  </span>
                </div>
                <Link to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
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

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your AI journey today and discover the power of intelligent automation and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;