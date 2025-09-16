import React, { useState } from 'react';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🏢' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'retail', name: 'Retail', icon: '🛍️' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'space', name: 'Space & Aerospace', icon: '🚀' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Revolution',
      company: 'PharmaTech Global',
      industry: 'healthcare',
      challenge: 'Accelerating drug discovery process while reducing costs and improving success rates',
      solution: 'Implemented quantum-enhanced AI algorithms for molecular simulation and drug interaction prediction',
      results: [
        '90% reduction in drug discovery timeline',
        '75% increase in successful drug candidates',
        '$2.5B in cost savings over 3 years',
        '15 new drugs approved for clinical trials'
      ],
      technologies: ['Quantum AI', 'Molecular Simulation', 'Machine Learning'],
      duration: '18 months',
      teamSize: '45 experts',
      featured: true
    },
    {
      id: 2,
      title: 'Neural Interface Banking System',
      company: 'NeuroBank International',
      industry: 'finance',
      challenge: 'Creating secure, intuitive banking experiences through direct brain-computer interfaces',
      solution: 'Developed non-invasive neural interfaces for secure financial transactions and account management',
      results: [
        '99.9% transaction accuracy',
        '60% faster transaction processing',
        'Zero security breaches in 2 years',
        '2M+ users adopted the technology'
      ],
      technologies: ['Neural Interfaces', 'Blockchain', 'Cybersecurity'],
      duration: '24 months',
      teamSize: '60 experts',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Manufacturing Optimization',
      company: 'QuantumManufacturing Corp',
      industry: 'manufacturing',
      challenge: 'Optimizing complex manufacturing processes with quantum computing power',
      solution: 'Deployed quantum algorithms for supply chain optimization and predictive maintenance',
      results: [
        '40% reduction in production costs',
        '85% improvement in supply chain efficiency',
        '99.5% reduction in unplanned downtime',
        '$500M additional revenue generated'
      ],
      technologies: ['Quantum Computing', 'IoT', 'Predictive Analytics'],
      duration: '12 months',
      teamSize: '35 experts',
      featured: false
    },
    {
      id: 4,
      title: 'Holographic Retail Experience',
      company: 'HoloRetail Solutions',
      industry: 'retail',
      challenge: 'Creating immersive shopping experiences that bridge physical and digital retail',
      solution: 'Implemented holographic displays and spatial computing for interactive product visualization',
      results: [
        '300% increase in customer engagement',
        '45% boost in sales conversion rates',
        '80% reduction in product returns',
        '50% increase in average order value'
      ],
      technologies: ['Holographic Computing', 'AR/VR', 'Spatial Computing'],
      duration: '15 months',
      teamSize: '28 experts',
      featured: false
    },
    {
      id: 5,
      title: 'AI Consciousness in Education',
      company: 'EduConscious Learning',
      industry: 'education',
      challenge: 'Personalizing education through AI systems that understand individual learning patterns',
      solution: 'Developed conscious AI tutors that adapt to each student\'s learning style and emotional state',
      results: [
        '95% improvement in learning outcomes',
        '70% reduction in learning time',
        '90% student satisfaction rate',
        '50% increase in course completion rates'
      ],
      technologies: ['AI Consciousness', 'Emotional AI', 'Adaptive Learning'],
      duration: '20 months',
      teamSize: '40 experts',
      featured: true
    },
    {
      id: 6,
      title: 'Space Colony AI Management',
      company: 'SpaceColony Technologies',
      industry: 'space',
      challenge: 'Managing autonomous space colonies with AI systems that can operate independently',
      solution: 'Created self-aware AI systems for life support, resource management, and colony operations',
      results: [
        '100% autonomous colony operation',
        'Zero critical system failures',
        '99.9% resource utilization efficiency',
        'Successful 2-year mission duration'
      ],
      technologies: ['Autonomous AI', 'Life Support Systems', 'Resource Management'],
      duration: '36 months',
      teamSize: '80 experts',
      featured: false
    }
  ];

  const filteredStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 COMPREHENSIVE CASE STUDIES • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how revolutionary technologies are transforming industries and delivering measurable results.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View Featured Cases
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Featured Case Studies</h2>
          <p className="text-xl opacity-90">Our most impactful and successful implementations</p>
        </div>

        <div className="space-y-12">
          {featuredStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-500 rounded-full text-sm font-bold">FEATURED</span>
                    <span className="text-sm opacity-75">{study.duration} • {study.teamSize}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                  <div className="text-lg font-semibold mb-2 text-indigo-300">{study.company}</div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Challenge:</h4>
                    <p className="opacity-90">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Solution:</h4>
                    <p className="opacity-90">{study.solution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Results:</h4>
                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-green-400 mr-3">✓</span>
                        <span className="opacity-90">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold">
                      Read Full Case Study →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Browse by Industry</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedIndustry === industry.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>
      </div>

      {/* All Case Studies */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {selectedIndustry === 'all' ? 'All Case Studies' : industries.find(i => i.id === selectedIndustry)?.name}
          </h3>
          <p className="opacity-90">
            {filteredStudies.length} {filteredStudies.length === 1 ? 'case study' : 'case studies'} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-500 rounded-full text-sm font-bold">
                  {industries.find(i => i.id === study.industry)?.icon} {industries.find(i => i.id === study.industry)?.name}
                </span>
                {study.featured && (
                  <span className="px-2 py-1 bg-yellow-500 rounded text-xs font-bold">FEATURED</span>
                )}
              </div>
              
              <h4 className="text-lg font-bold mb-2">{study.title}</h4>
              <div className="text-indigo-300 font-semibold mb-3">{study.company}</div>
              
              <p className="text-white/80 mb-4 text-sm">{study.challenge}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {study.technologies.slice(0, 2).map((tech, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm opacity-75 mb-4">
                <span>{study.duration}</span>
                <span>{study.teamSize}</span>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-semibold text-sm">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Success Metrics</h3>
            <p className="text-lg opacity-90">Measurable impact across all our implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">150+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
              <div className="text-sm opacity-75 mt-2">Across all industries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">$50B+</div>
              <div className="text-lg opacity-90">Value Generated</div>
              <div className="text-sm opacity-75 mt-2">For our clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
              <div className="text-sm opacity-75 mt-2">Project delivery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Expert Team</div>
              <div className="text-sm opacity-75 mt-2">World-class professionals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you implement revolutionary technologies that deliver measurable results for your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;