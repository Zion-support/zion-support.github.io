import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, TrendingUp, Target, Globe, Smartphone, Monitor, Cpu, Network } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIServices() {
  const services = [
    {
      id: 1,
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "Machine learning models"],
      price: "From $2,999/month",
      link: "/ai-analytics",
      popular: true
    },
    {
      id: 2,
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      icon: <Code className="w-8 h-8" />,
      features: ["Automated content creation", "Multi-language support", "Brand voice consistency", "SEO optimization"],
      price: "From $1,499/month",
      link: "/ai-content-generation",
      popular: false
    },
    {
      id: 3,
      title: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and automated support systems.",
      icon: <Users className="w-8 h-8" />,
      features: ["24/7 customer support", "Natural language processing", "Multi-channel integration", "Sentiment analysis"],
      price: "From $999/month",
      link: "/ai-customer-service",
      popular: false
    },
    {
      id: 4,
      title: "AI Cybersecurity",
      description: "Protect your organization with AI-powered threat detection and security automation.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat detection", "Automated response", "Behavioral analysis", "Compliance monitoring"],
      price: "From $3,499/month",
      link: "/ai-cybersecurity",
      popular: true
    },
    {
      id: 5,
      title: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and insights.",
      icon: <Database className="w-8 h-8" />,
      features: ["Data visualization", "Pattern recognition", "Automated reporting", "Real-time insights"],
      price: "From $2,199/month",
      link: "/ai-data-analytics",
      popular: false
    },
    {
      id: 6,
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Process automation", "Task optimization", "Error reduction", "Efficiency gains"],
      price: "From $1,799/month",
      link: "/ai-workflow-automation",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and processes to boost productivity by up to 300%",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "300%"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by automating manual processes and optimizing resources",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "40%"
    },
    {
      title: "Better Decision Making",
      description: "Make data-driven decisions with AI-powered insights and predictive analytics",
      icon: <Target className="w-6 h-6" />,
      stat: "95%"
    },
    {
      title: "24/7 Availability",
      description: "AI systems work around the clock to provide continuous service and monitoring",
      icon: <Clock className="w-6 h-6" />,
      stat: "24/7"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group's AI solutions transformed our entire operation. We've seen a 250% increase in efficiency and significant cost savings.",
      rating: 5,
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI analytics platform provided insights we never knew existed. Our decision-making process is now completely data-driven.",
      rating: 5,
      avatar: "/images/testimonials/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The AI customer service solution has revolutionized our support operations. Response times improved by 80% and customer satisfaction is at an all-time high.",
      rating: 5,
      avatar: "/images/testimonials/emily-rodriguez.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, content generation, customer service, cybersecurity, and workflow automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation, AI customer service, AI cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Artificial Intelligence <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technologies. From analytics to automation, we provide comprehensive AI solutions that drive growth and efficiency.
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
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Monitor className="w-5 h-5" />
              <span>View Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive AI solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`relative group ${service.popular ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 h-full">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-white mb-4">
                    {service.price}
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-gray-300 text-lg">Proven results and measurable impact on your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-lg">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our AI solutions can drive growth and efficiency in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Schedule Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
