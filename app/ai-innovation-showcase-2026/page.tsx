import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Rocket, Target, TrendingUp, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2026 - Revolutionary Breakthroughs',
  description: 'Explore the latest AI innovations, quantum computing breakthroughs, and autonomous operations that are revolutionizing industries in 2026. Discover cutting-edge solutions delivering unprecedented ROI.',
  keywords: ['AI Innovation 2026', 'Quantum Computing', 'Autonomous Operations', 'AI Breakthroughs', 'Revolutionary Technology'],
};

const AIImnovationShowcase2026 = () => {
  const innovations = [
    {
      title: 'Quantum-Neural Fusion Computing',
      description: 'Revolutionary quantum-classical hybrid systems delivering 10,000x processing speed improvements',
      icon: Brain,
      features: ['99.9% Accuracy', 'Real-time Processing', 'Error-Corrected Quantum Logic'],
      roi: '5,000% ROI'
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Self-managing AI systems that handle complex business processes without human intervention',
      icon: Zap,
      features: ['24/7 Operations', 'Self-Healing Systems', 'Predictive Maintenance'],
      roi: '3,500% ROI'
    },
    {
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration',
      icon: Rocket,
      features: ['Thought-to-Action', 'Enhanced Cognitive Abilities', 'Seamless Integration'],
      roi: '4,200% ROI'
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Advanced AI systems predicting market trends and business outcomes with 98.7% accuracy',
      icon: Target,
      features: ['Real-time Predictions', 'Market Intelligence', 'Risk Assessment'],
      roi: '2,800% ROI'
    },
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation handling complex workflows and decision-making processes',
      icon: TrendingUp,
      features: ['Workflow Optimization', 'Decision Automation', 'Process Intelligence'],
      roi: '4,500% ROI'
    },
    {
      title: 'Cybersecurity AI Guardian',
      description: 'Advanced AI security systems protecting against sophisticated cyber threats',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Zero-Trust Architecture'],
      roi: '3,200% ROI'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'The quantum-neural fusion system has revolutionized our data processing capabilities. We\'ve seen a 10,000x improvement in speed.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLabs',
      content: 'Our autonomous operations have reduced operational costs by 85% while increasing efficiency by 400%.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, QuantumTech',
      content: 'The neural interface technology has opened up possibilities we never imagined. It\'s truly transformative.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Innovation Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover revolutionary AI breakthroughs, quantum computing innovations, and autonomous operations 
              that are transforming industries and delivering unprecedented returns on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-tools-showcase" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-all duration-200"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI Innovations
          </h2>
          <p className="text-xl text-gray-300">
            Cutting-edge technologies delivering extraordinary results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{innovation.title}</h3>
                    <div className="text-sm text-green-400 font-semibold">{innovation.roi}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                <ul className="space-y-2">
                  {innovation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            Hear from industry leaders who have transformed their operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Globe key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already leveraging these revolutionary AI technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImnovationShowcase2026;