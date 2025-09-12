import React from 'react';
import { Metadata } from 'next';
import { 
  Brain, Atom, Rocket, Shield, CheckCircle, ArrowRight, Star, 
  Users, Award, Clock, Globe, Zap, Target, BarChart3, Cpu 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quantum AI Consulting 2025 - Transform Your Business with Revolutionary AI',
  description: 'Expert quantum AI consulting services to revolutionize your business. Get 85% faster operations, 94% accuracy, and breakthrough results with our cutting-edge AI solutions.',
  keywords: 'quantum AI consulting, AI transformation, business intelligence, quantum computing, AI strategy',
  openGraph: {
    title: 'Quantum AI Consulting 2025 - Transform Your Business with Revolutionary AI',
    description: 'Expert quantum AI consulting services to revolutionize your business. Get 85% faster operations, 94% accuracy, and breakthrough results with our cutting-edge AI solutions.',
    type: 'website',
  },
};

const QuantumAIConsulting = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Comprehensive AI roadmap tailored to your business goals and industry requirements.",
      benefits: ["Custom AI strategy", "ROI analysis", "Implementation timeline", "Risk assessment"]
    },
    {
      icon: Atom,
      title: "Quantum Algorithm Design",
      description: "Advanced quantum algorithms optimized for your specific use cases and data patterns.",
      benefits: ["Custom algorithms", "Performance optimization", "Scalability planning", "Integration support"]
    },
    {
      icon: Rocket,
      title: "AI Implementation",
      description: "End-to-end AI solution deployment with continuous monitoring and optimization.",
      benefits: ["Full deployment", "Training & support", "Performance monitoring", "Ongoing optimization"]
    },
    {
      icon: Shield,
      title: "AI Security & Ethics",
      description: "Comprehensive AI security framework and ethical guidelines for responsible AI deployment.",
      benefits: ["Security audit", "Ethics compliance", "Risk mitigation", "Regulatory guidance"]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Delivered", icon: Target },
    { number: "94%", label: "Success Rate", icon: BarChart3 },
    { number: "85%", label: "Average Efficiency Gain", icon: Zap },
    { number: "24/7", label: "Expert Support", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, MedTech Innovations",
      content: "Zion Tech Group's quantum AI consulting transformed our drug discovery process. We achieved 85% faster results with unprecedented accuracy.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, Financial Dynamics",
      content: "Their AI strategy helped us reduce operational costs by 60% while improving customer satisfaction by 40%. Game-changing results.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research, TechCorp",
      content: "The quantum algorithms they developed for us are revolutionary. We're seeing results we never thought possible.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Quantum AI Consulting 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with revolutionary quantum AI solutions. Our expert consultants deliver 
              breakthrough results with 85% efficiency gains and 94% accuracy rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all flex items-center gap-2">
                  View Case Studies <BarChart3 className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border border-cyan-400/30">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Quantum AI Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI transformation services designed to revolutionize your business operations 
              and deliver unprecedented results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to AI transformation that ensures maximum ROI and sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive assessment of your current systems, data, and business objectives."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Custom AI roadmap with clear milestones, timelines, and success metrics."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Expert deployment of quantum AI solutions with continuous monitoring."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Ongoing refinement and scaling to maximize performance and ROI."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our quantum AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-400/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free consultation with our quantum AI experts and discover how we can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIConsulting;