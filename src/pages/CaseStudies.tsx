import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Building,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'retail', name: 'Retail', icon: Target },
    { id: 'technology', name: 'Technology', icon: Brain }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Zap }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Needed to process and analyze massive amounts of patient data to improve diagnosis accuracy and treatment outcomes.',
      solution: 'Implemented an AI-powered analytics platform with autonomous data processing, predictive modeling, and real-time insights.',
      results: [
        '95% improvement in diagnosis accuracy',
        '40% reduction in treatment time',
        '30% cost savings in operational efficiency',
        'Real-time patient monitoring capabilities'
      ],
      metrics: {
        roi: '450%',
        timeframe: '8 months',
        teamSize: '15 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['AI Analytics', 'Healthcare', 'Predictive Modeling', 'Real-time Processing']
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      company: 'Global Finance Corp.',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Required ultra-secure, high-frequency trading capabilities with quantum-resistant encryption and real-time market analysis.',
      solution: 'Developed a quantum-secure trading platform with AI-powered market prediction, autonomous risk management, and quantum encryption.',
      results: [
        '99.99% system uptime achieved',
        'Zero security breaches in 2 years',
        '25% improvement in trading accuracy',
        'Quantum-resistant encryption implemented'
      ],
      metrics: {
        roi: '320%',
        timeframe: '12 months',
        teamSize: '20 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Quantum Security', 'Financial Trading', 'AI Prediction', 'Risk Management']
    },
    {
      id: 3,
      title: 'Autonomous Manufacturing Intelligence',
      company: 'Smart Manufacturing Ltd.',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Faced production inefficiencies, quality control issues, and high operational costs in a complex manufacturing environment.',
      solution: 'Deployed AI autonomous systems for predictive maintenance, quality control automation, and intelligent supply chain management.',
      results: [
        '60% reduction in production downtime',
        '45% improvement in product quality',
        '35% reduction in operational costs',
        'Predictive maintenance alerts'
      ],
      metrics: {
        roi: '280%',
        timeframe: '10 months',
        teamSize: '18 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['AI Manufacturing', 'Predictive Maintenance', 'Quality Control', 'Supply Chain']
    },
    {
      id: 4,
      title: 'Cybersecurity Operations Center',
      company: 'TechSecure Enterprises',
      industry: 'technology',
      service: 'cybersecurity',
      challenge: 'Needed 24/7 threat detection and response capabilities with automated incident handling and compliance management.',
      solution: 'Built an autonomous cybersecurity operations center with AI threat detection, automated response systems, and SOC2 compliance automation.',
      results: [
        '99.9% threat detection rate',
        '90% reduction in response time',
        '100% SOC2 compliance achieved',
        '24/7 autonomous monitoring'
      ],
      metrics: {
        roi: '380%',
        timeframe: '6 months',
        teamSize: '12 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Cybersecurity', 'SOC2 Compliance', 'AI Threat Detection', 'Automated Response']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Transformation',
      company: 'Digital Retail Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'Required scalable cloud infrastructure to handle seasonal traffic spikes and improve customer experience.',
      solution: 'Implemented cloud-native architecture with AI-powered auto-scaling, load balancing, and performance optimization.',
      results: [
        '99.99% availability during peak traffic',
        '50% reduction in infrastructure costs',
        '3x faster page load times',
        'Automatic scaling capabilities'
      ],
      metrics: {
        roi: '250%',
        timeframe: '9 months',
        teamSize: '16 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Cloud Infrastructure', 'Auto-scaling', 'Performance Optimization', 'Cost Reduction']
    },
    {
      id: 6,
      title: 'AI-Powered Customer Intelligence',
      company: 'E-Commerce Innovations',
      industry: 'retail',
      service: 'ai',
      challenge: 'Needed to understand customer behavior, personalize experiences, and increase conversion rates.',
      solution: 'Developed AI customer intelligence platform with behavioral analysis, personalized recommendations, and predictive marketing.',
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        '25% reduction in marketing costs',
        'Personalized customer experiences'
      ],
      metrics: {
        roi: '310%',
        timeframe: '7 months',
        teamSize: '14 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Customer Intelligence', 'Personalization', 'Predictive Marketing', 'Behavioral Analysis']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with our cutting-edge 
              AI, quantum technology, and autonomous systems solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Case Study Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {study.service.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-white">{study.company}</strong>
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-1">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{study.metrics.timeframe}</div>
                      <div className="text-xs text-gray-400">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{study.metrics.teamSize}</div>
                      <div className="text-xs text-gray-400">Team Size</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI and technology solutions can transform your business 
            and deliver measurable results like the ones you see above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}