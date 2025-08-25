import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Users, 
  Target, 
  Star, 
  Award, 
  Globe, 
  Zap, 
  Heart, 
  Lightbulb, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Eye,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Lock,
  Cloud,
  Building
} from 'lucide-react';

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Industries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business security are our top priorities with enterprise-grade protection.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We deliver exceptional results that exceed expectations and drive measurable business outcomes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We partner with you to achieve your business goals.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business solutions for small enterprises.',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Quantum Research',
      description: 'Began research into quantum computing and neural network applications.',
      icon: Cpu
    },
    {
      year: '2023',
      title: 'Enterprise Expansion',
      description: 'Expanded services to serve Fortune 500 companies and government agencies.',
      icon: Building
    },
    {
      year: '2024',
      title: 'Global Presence',
      description: 'Established international offices and partnerships across multiple continents.',
      icon: Globe
    },
    {
      year: '2025',
      title: 'AI Revolution',
      description: 'Leading the charge in autonomous business systems and AI consciousness.',
      icon: Zap
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine learning, deep learning, and neural networks' },
    { name: 'Quantum Computing', icon: Cpu, description: 'Next-generation quantum algorithms and processing' },
    { name: 'Cybersecurity', icon: Shield, description: 'Advanced threat detection and prevention systems' },
    { name: 'Cloud Infrastructure', icon: Cloud, description: 'Scalable cloud solutions and DevOps automation' },
    { name: 'Data Analytics', icon: BarChart3, description: 'Big data processing and business intelligence' },
    { name: 'Blockchain', icon: Code, description: 'Distributed ledger technology and smart contracts' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We are pioneers in AI technology, quantum computing, and autonomous business solutions. 
            Our mission is to democratize cutting-edge technology and empower businesses to thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To democratize artificial intelligence and quantum technology, making cutting-edge solutions 
              accessible to businesses of all sizes. We believe that every organization deserves access to 
              the tools that will define the future of business.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in autonomous business systems, where AI and human intelligence 
              work together seamlessly to create unprecedented business value and drive innovation 
              across all industries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 h-full"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <milestone.icon className="w-6 h-6 text-cyan-400" />
                        <span className="text-2xl font-bold text-cyan-400">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology expertise can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start a Conversation
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
