import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap, Shield, Globe, Brain, Code } from 'lucide-react';

const NewContentShowcase: React.FC = () => {
  const newFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Business Solutions",
      description: "Revolutionary AI tools that transform your business operations with intelligent automation and predictive analytics.",
      badge: "NEW",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Advanced Cybersecurity Suite",
      description: "Enterprise-grade security solutions protecting your digital assets with cutting-edge threat detection and prevention.",
      badge: "FEATURED",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Cloud Infrastructure",
      description: "Scalable cloud solutions with 99.9% uptime guarantee, serving clients across 50+ countries worldwide.",
      badge: "POPULAR",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire infrastructure. The AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, InnovateLabs",
      content: "Their cybersecurity suite saved us from a major breach. Professional, reliable, and incredibly effective.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "VP Engineering, StartupXYZ",
      content: "The cloud migration was seamless. We're now operating at scale we never thought possible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Zap, value: "99.9%", label: "Uptime SLA" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: Code, value: "50+", label: "Countries Served" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            🚀 Introducing Revolutionary New Features
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Next-Gen Technology
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest innovations in AI, cybersecurity, and cloud solutions that are reshaping industries and driving unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
            >
              Explore New Features
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* New Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    feature.badge === 'NEW' ? 'bg-red-100 text-red-800' :
                    feature.badge === 'FEATURED' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from the businesses we've transformed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase;