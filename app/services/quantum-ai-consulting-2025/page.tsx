import React from 'react';
import { Metadata } from 'next';
import { 
  Brain, Atom, Shield, Rocket, CheckCircle, ArrowRight, Star, Users, 
  Award, Clock, DollarSign, Zap, Globe, Lock, Cpu, Database, Cloud 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quantum AI Consulting 2025 - Transform Your Business with Revolutionary AI',
  description: 'Expert quantum AI consulting services to revolutionize your business. Get cutting-edge AI solutions, quantum computing integration, and digital transformation strategies.',
  keywords: 'quantum AI consulting, artificial intelligence consulting, quantum computing, AI transformation, digital transformation',
  openGraph: {
    title: 'Quantum AI Consulting 2025 - Transform Your Business with Revolutionary AI',
    description: 'Expert quantum AI consulting services to revolutionize your business. Get cutting-edge AI solutions, quantum computing integration, and digital transformation strategies.',
    type: 'website',
  },
};

const QuantumAIConsulting = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Comprehensive AI roadmap tailored to your business objectives and industry requirements.",
      benefits: ["Custom AI strategy", "ROI projections", "Implementation timeline", "Risk assessment"]
    },
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Seamless integration of quantum computing capabilities into your existing infrastructure.",
      benefits: ["Quantum algorithm design", "Hardware optimization", "Performance scaling", "Security enhancement"]
    },
    {
      icon: Shield,
      title: "AI Security & Ethics",
      description: "Robust security frameworks and ethical AI practices to ensure responsible implementation.",
      benefits: ["Security audits", "Ethical guidelines", "Compliance frameworks", "Risk mitigation"]
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Complete digital transformation using cutting-edge AI and quantum technologies.",
      benefits: ["Process automation", "Data optimization", "Workflow enhancement", "Scalability planning"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$25,000",
      duration: "4 weeks",
      description: "Perfect for small businesses looking to explore AI possibilities",
      features: [
        "AI readiness assessment",
        "Basic AI strategy development",
        "Technology recommendations",
        "Implementation roadmap",
        "2 consultation sessions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$75,000",
      duration: "8 weeks",
      description: "Comprehensive AI transformation for growing companies",
      features: [
        "Complete AI strategy development",
        "Quantum computing integration",
        "Custom AI model development",
        "Security framework implementation",
        "Team training and support",
        "6 consultation sessions",
        "3 months post-implementation support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$200,000",
      duration: "16 weeks",
      description: "Full-scale AI transformation for large organizations",
      features: [
        "Enterprise AI architecture design",
        "Advanced quantum computing solutions",
        "Custom AI platform development",
        "Comprehensive security implementation",
        "Organization-wide training program",
        "12 consultation sessions",
        "6 months post-implementation support",
        "Dedicated AI team assignment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CTO, TechInnovate Corp",
      content: "Zion Tech Group's quantum AI consulting transformed our entire R&D process. We're now 300% more efficient and have discovered breakthrough solutions we never thought possible.",
      rating: 5,
      company: "TechInnovate Corp"
    },
    {
      name: "Marcus Johnson",
      title: "CEO, Global Finance Solutions",
      content: "The AI strategy they developed for us has increased our operational efficiency by 250% and reduced costs by $50 million annually. Outstanding results!",
      rating: 5,
      company: "Global Finance Solutions"
    },
    {
      name: "Lisa Wang",
      title: "VP Operations, Manufacturing Plus",
      content: "Their quantum computing integration gave us a competitive edge we never had before. Our production efficiency increased by 400% in just 6 months.",
      rating: 5,
      company: "Manufacturing Plus"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects", icon: Award },
    { number: "99.7%", label: "Client Satisfaction", icon: Star },
    { number: "300%", label: "Average ROI", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full mb-6">
              Revolutionary AI Consulting
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Consulting
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge quantum AI solutions. Our expert consultants deliver 
              revolutionary AI strategies that drive unprecedented growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Get Started Today
              </Link>
              <Link 
                href="#packages"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <DollarSign className="w-5 h-5" />
                View Packages
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border border-cyan-400/30">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum AI consulting services cover every aspect of AI transformation, 
              from strategy development to full-scale implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your AI Transformation Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible packages designed to meet your specific needs and budget, 
              from small business AI exploration to enterprise-scale transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-black/30 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-cyan-400/60 scale-105 shadow-2xl shadow-cyan-500/20' 
                    : 'border-cyan-400/30 hover:border-cyan-400/60'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                  <div className="text-gray-400">{pkg.duration}</div>
                  <p className="text-gray-300 text-sm mt-3">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to AI transformation that ensures maximum ROI and minimal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery & Assessment</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive analysis of your current state, goals, and AI readiness to identify opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy Development</h3>
              <p className="text-gray-300 text-sm">
                Custom AI strategy tailored to your business objectives with clear implementation roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Expert-led implementation with continuous monitoring and optimization throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimization & Support</h3>
              <p className="text-gray-300 text-sm">
                Ongoing support, training, and optimization to ensure maximum value from your AI investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our quantum AI consulting services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="border-t border-cyan-400/30 pt-4">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-12 border border-cyan-400/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies that have already revolutionized their operations with our quantum AI consulting services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Start Your AI Journey
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIConsulting;