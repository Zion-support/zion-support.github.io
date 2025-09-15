"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight
  Cpu
  Database
  Cloud
  Shield
  Zap
  Globe
  Brain
  Rocket
  Target,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const UltimateTechShowcase2026 = () => {
  const [activeTabsetActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      description: "Next-generation AI systems with human-level reasoning and creativity",
      features: [
        "Neural network optimization",
        "Real-time learning algorithms",
        "Emotional intelligence integration",
        "Predictive analytics"
      ],
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      color: "from-blue-500 to-cyan-500"
    },
    quantum: {
      title: "Quantum Computing",
      description: "Revolutionary quantum processors solving impossible problems",
      features: [
        "Quantum supremacy achieved",
        "Exponential speed improvements",
        "Cryptographic breakthroughs",
        "Material science revolution"
      ],
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      color: "from-purple-500 to-pink-500"
    },
    cloud: {
      title: "Edge Computing",
      description: "Distributed computing power at the edge of everything",
      features: [
        "Ultra-low latency processing",
        "Autonomous decision making",
        "Real-time data analysis",
        "IoT optimization"
      ],
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      color: "from-green-500 to-emerald-500"
    },
    security: {
      title: "Advanced Security",
      description: "Military-grade security protecting your most valuable assets",
      features: [
        "Zero-trust architecture",
        "Quantum encryption",
        "Behavioral analytics",
        "Threat prediction"
      ],
      icon: <Shield className="w-12 h-12 text-red-500" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { label: "Processing Speed"value: "1000x"icon: <Zap className="w-6 h-6" /> },
    { label: "Global Reach"value: "200+"icon: <Globe className="w-6 h-6" /> },
    { label: "Success Rate"value: "99.9%"icon: <Target className="w-6 h-6" /> },
    { label: "Innovation Index"value: "#1"icon: <Rocket className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      role: "Chief Technology Officer",
      company: "FutureTech Corp",
      content: "This technology platform has revolutionized our entire operation. The AI capabilities are beyond anything 'we', 've seen before.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      company: "InnovateLabs",
      content: "The quantum computing integration has solved problems we thought were impossible. Truly groundbreaking work.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "CEO",
      company: "DataFlow Systems",
      content: "Security and performance at this level is exactly what we needed. Our clients are amazed by the results.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Star className="w-5 h-5 mr-2" />
            ULTIMATE TECH SHOWCASE 2026
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Technology</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Experience the most advanced technology stack ever assembled. 
            Our 2026 showcase features breakthrough innovations that are reshaping 
            industries and defining the next decade of digital transformation.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([keytech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tech.icon}
                <span className="ml-2">{tech.title}</span>
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  {technologies[activeTab].icon}
                  <h3 className="text-3xl font-bold ml-4">{technologies[activeTab].title}</h3>
                </div>
                <p className="text-xl text-gray-300 mb-6">{technologies[activeTab].description}</p>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((featureindex) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 text-center">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  2026
                </div>
                <div className="text-xl text-gray-300">Revolutionary Technology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((statindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">Industry Leaders Trust Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-blue-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/20">
          <h3 className="text-4xl font-bold mb-4">Ready to Lead the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the technology revolution and be part of the next generation of innovation. 
            Our 2026 showcase is just the beginning of 'what', 's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tech-showcase-2026" 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Rocket className="mr-3 w-6 h-6" />
              Explore Full Showcase
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 border-2 border-blue-400 text-blue-300 font-bold text-lg rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="mr-3 w-6 h-6" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;