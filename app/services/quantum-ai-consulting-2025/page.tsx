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
                    <h3 className="text-xl font-semibold mb-2">Quantum Algorithm Development</h3>
                    <p className="text-gray-600 mb-4">
                      Custom quantum algorithms designed for your specific business challenges, from portfolio optimization to supply chain management.
                    </p>
                    <ul className="list-disc pl-6 text-sm text-gray-600">
                      <li>Portfolio optimization and risk assessment</li>
                      <li>Supply chain and logistics optimization</li>
                      <li>Drug discovery and molecular modeling</li>
                      <li>Cryptographic security enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Machine Learning</h3>
                    <p className="text-gray-600 mb-4">
                      Leverage quantum computing to enhance machine learning models, achieving superior performance on complex datasets.
                    </p>
                    <ul className="list-disc pl-6 text-sm text-gray-600">
                      <li>Quantum neural networks</li>
                      <li>Quantum support vector machines</li>
                      <li>Quantum clustering algorithms</li>
                      <li>Quantum feature selection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Security Consulting</h3>
                    <p className="text-gray-600 mb-4">
                      Prepare your organization for the quantum computing era with quantum-resistant security solutions and protocols.
                    </p>
                    <ul className="list-disc pl-6 text-sm text-gray-600">
                      <li>Post-quantum cryptography implementation</li>
                      <li>Quantum key distribution systems</li>
                      <li>Security risk assessment</li>
                      <li>Migration planning and strategy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Quantum Roadmap</h3>
                    <p className="text-gray-600 mb-4">
                      Develop a comprehensive strategy for quantum technology adoption aligned with your business objectives.
                    </p>
                    <ul className="list-disc pl-6 text-sm text-gray-600">
                      <li>Technology assessment and readiness</li>
                      <li>ROI analysis and business case development</li>
                      <li>Implementation timeline and milestones</li>
                      <li>Team training and skill development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Service Packages</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-blue-600 mb-2">Starter Package</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">$5,000</p>
                  <p className="text-sm text-gray-600 mb-3">Perfect for small businesses</p>
                  <ul className="text-sm space-y-1">
                    <li>• Quantum readiness assessment</li>
                    <li>• Basic quantum algorithm consultation</li>
                    <li>• 4-week engagement</li>
                    <li>• Executive summary report</li>
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

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-sm text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
              <p className="text-sm text-gray-600">Average Performance Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6 months</div>
              <p className="text-sm text-gray-600">Average ROI Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-sm text-gray-600">Quantum Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Financial Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Portfolio optimization</li>
                <li>• Risk assessment</li>
                <li>• Fraud detection</li>
                <li>• Algorithmic trading</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Healthcare</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Drug discovery</li>
                <li>• Medical imaging</li>
                <li>• Personalized medicine</li>
                <li>• Protein folding</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Manufacturing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Supply chain optimization</li>
                <li>• Quality control</li>
                <li>• Predictive maintenance</li>
                <li>• Process optimization</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Energy</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Grid optimization</li>
                <li>• Renewable energy</li>
                <li>• Battery research</li>
                <li>• Carbon capture</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Transportation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Route optimization</li>
                <li>• Traffic management</li>
                <li>• Autonomous vehicles</li>
                <li>• Logistics planning</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Technology</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cybersecurity</li>
                <li>• Machine learning</li>
                <li>• Cryptography</li>
                <li>• Data analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Lead the Quantum Revolution?</h2>
          <p className="text-lg mb-6">
            Join the organizations already leveraging quantum AI to gain competitive advantage. 
            Our experts are ready to help you transform your business with quantum computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Quantum Journey
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}