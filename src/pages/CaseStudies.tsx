import React from 'react';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Filter,
  Search,
  Star,
  CheckCircle,
  BarChart3
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing',
      results: [
        'Reduced response time by 85%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction to 94%'
      ],
      duration: '3 months',
      teamSize: '8 people',
      technologies: ['AI/ML', 'NLP', 'Automation'],
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Safe Cybersecurity Implementation',
      company: 'GlobalBank International',
      industry: 'Financial Services',
      challenge: 'Vulnerability to quantum computing attacks',
      solution: 'Deployed quantum-resistant cryptography and security protocols',
      results: [
        'Enhanced security against future threats',
        'Compliant with new regulatory requirements',
        'Zero security breaches in 18 months'
      ],
      duration: '6 months',
      teamSize: '12 people',
      technologies: ['Quantum Cryptography', 'Security', 'Compliance'],
      image: '🔒',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Migration',
      company: 'ManufacturePro Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise systems limiting scalability',
      solution: 'Migrated to hybrid cloud infrastructure with automation',
      results: [
        'Increased system performance by 300%',
        'Reduced infrastructure costs by 40%',
        'Enabled 24/7 global operations'
      ],
      duration: '8 months',
      teamSize: '15 people',
      technologies: ['Cloud Migration', 'DevOps', 'Automation'],
      image: '☁️',
      featured: false
    },
    {
      id: 4,
      title: 'AI Business Intelligence Platform',
      company: 'RetailChain Corp',
      industry: 'Retail',
      challenge: 'Poor data visibility and decision-making capabilities',
      solution: 'Built comprehensive AI-powered BI platform',
      results: [
        'Improved decision-making speed by 70%',
        'Increased revenue by 25%',
        'Enhanced inventory optimization'
      ],
      duration: '5 months',
      teamSize: '10 people',
      technologies: ['AI/ML', 'Data Analytics', 'Business Intelligence'],
      image: '📊',
      featured: false
    },
    {
      id: 5,
      title: 'Autonomous Manufacturing Systems',
      company: 'AutoTech Industries',
      industry: 'Automotive',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Implemented AI-driven autonomous manufacturing systems',
      results: [
        'Increased production efficiency by 45%',
        'Reduced defects by 80%',
        'Lowered operational costs by 35%'
      ],
      duration: '10 months',
      teamSize: '20 people',
      technologies: ['AI/ML', 'IoT', 'Robotics'],
      image: '🏭',
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and poor insights',
      solution: 'Developed unified healthcare analytics platform',
      results: [
        'Improved patient outcomes by 30%',
        'Reduced administrative overhead by 50%',
        'Enhanced diagnostic accuracy'
      ],
      duration: '7 months',
      teamSize: '18 people',
      technologies: ['Data Analytics', 'Healthcare IT', 'AI/ML'],
      image: '🏥',
      featured: false
    }
  ];

  const industries = [
    'All Industries',
    'Technology',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Government'
  ];

  const technologies = [
    'All Technologies',
    'AI/ML',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'IoT'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how we've helped organizations across industries transform their 
            operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
        <section key={caseStudy.id} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Featured Case Study</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{caseStudy.title}</h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <Building className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{caseStudy.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{caseStudy.industry}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{caseStudy.challenge}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Results:</h4>
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-8xl mb-4 text-center">{caseStudy.image}</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-semibold text-white">{caseStudy.duration}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="font-semibold text-white">{caseStudy.teamSize}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Case Study Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {caseStudy.image}
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  {/* Company and Industry */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">{caseStudy.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{caseStudy.industry}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {caseStudy.title}
                  </h3>

                  {/* Challenge */}
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>

                  {/* Key Results */}
                  <div className="mb-4">
                    <h4 className="font-medium text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 line-clamp-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{caseStudy.teamSize}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our technology solutions can help you achieve similar 
            results and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}