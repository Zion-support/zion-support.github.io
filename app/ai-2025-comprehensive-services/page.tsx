import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Bot, 
  Sparkles,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

export default function AI2025ComprehensiveServices() {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation planning for enterprise organizations.",
      icon: <Target className="h-8 w-8" />,
      features: ["AI Roadmap Development", "Technology Assessment", "ROI Analysis", "Implementation Planning"],
      price: "Starting at $50,000",
      popular: false
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions tailored to your specific business needs and requirements.",
      icon: <Brain className="h-8 w-8" />,
      features: ["Custom Model Training", "API Development", "Integration Services", "Ongoing Support"],
      price: "Starting at $100,000",
      popular: true
    },
    {
      title: "AI Automation Solutions",
      description: "End-to-end automation solutions that streamline operations and reduce costs.",
      icon: <Bot className="h-8 w-8" />,
      features: ["Process Automation", "Workflow Optimization", "RPA Implementation", "Performance Monitoring"],
      price: "Starting at $75,000",
      popular: false
    },
    {
      title: "Data Analytics & Insights",
      description: "Advanced analytics solutions that transform raw data into actionable business insights.",
      icon: <Database className="h-8 w-8" />,
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Trend Analysis"],
      price: "Starting at $60,000",
      popular: false
    },
    {
      title: "AI Security Solutions",
      description: "Comprehensive AI-powered security solutions to protect your digital assets.",
      icon: <Shield className="h-8 w-8" />,
      features: ["Threat Detection", "Anomaly Detection", "Security Monitoring", "Incident Response"],
      price: "Starting at $80,000",
      popular: false
    },
    {
      title: "AI Training & Education",
      description: "Comprehensive training programs to upskill your team in AI technologies.",
      icon: <Users className="h-8 w-8" />,
      features: ["Custom Training Programs", "Certification Courses", "Workshops", "Mentoring"],
      price: "Starting at $25,000",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion's AI solutions transformed our entire operation. We've seen a 300% increase in efficiency and a 50% reduction in costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLabs",
      content: "The custom AI development service exceeded our expectations. The team delivered a solution that perfectly matched our needs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, GlobalTech",
      content: "Their AI automation solutions streamlined our processes like never before. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025 Comprehensive
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI services, designed to drive innovation, 
              efficiency, and growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to meet your business objectives and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                  <Link 
                    href="/contact" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500/20 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                World-class AI experts with decades of combined experience in cutting-edge technologies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering measurable ROI and transformative business outcomes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Tech</h3>
              <p className="text-gray-300">
                Latest AI technologies and methodologies to ensure your solutions are future-proof
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support and maintenance to ensure your AI systems run smoothly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/ai-2025-ultimate-technology-showcase" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Technologies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}