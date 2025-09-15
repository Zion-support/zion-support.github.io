import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const filters = [
    { id: 'all', name: 'All Case Studies', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 5 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'neural', name: 'Neural Interfaces', count: 2 },
    { id: 'blockchain', name: 'Blockchain', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 AI Transformation: 400% Productivity Increase',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing 60% efficiency loss and $50M annual waste',
      solution: 'Comprehensive AI automation suite with consciousness AI agents',
      results: [
        '400% increase in productivity',
        '60% reduction in operational costs',
        '$50M annual savings',
        '99.9% system uptime',
        'Zero human error in critical processes'
      ],
      timeline: '18 months',
      investment: '$15M',
      roi: '333%',
      category: 'ai',
      image: '🏭',
      testimonial: 'The AI transformation exceeded all our expectations. We achieved results we never thought possible.',
      author: 'Sarah Johnson',
      role: 'CTO',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Financial Modeling: 95% Prediction Accuracy',
      company: 'Investment Bank International',
      industry: 'Finance',
      challenge: 'Market volatility causing $200M in trading losses annually',
      solution: 'Quantum computing-powered financial modeling and risk assessment',
      results: [
        '95% prediction accuracy',
        '80% reduction in trading losses',
        '$200M additional annual revenue',
        'Real-time risk assessment',
        'Zero security breaches'
      ],
      timeline: '12 months',
      investment: '$25M',
      roi: '800%',
      category: 'quantum',
      image: '💰',
      testimonial: 'Quantum computing revolutionized our trading strategies. We now have unprecedented market insights.',
      author: 'Michael Chen',
      role: 'Head of Quantitative Research',
      featured: true
    },
    {
      id: 3,
      title: 'Neural Interface Medical Breakthrough: 85% Patient Recovery',
      company: 'Advanced Medical Center',
      industry: 'Healthcare',
      challenge: 'Paralyzed patients with no hope of movement recovery',
      solution: 'Non-invasive neural interface technology for motor function restoration',
      results: [
        '85% of patients regained movement',
        '90% improved communication abilities',
        '60% reduced depression symptoms',
        '40% increased independence',
        'Zero side effects'
      ],
      timeline: '24 months',
      investment: '$30M',
      roi: 'Invaluable',
      category: 'neural',
      image: '🏥',
      testimonial: 'This technology has given hope to patients who had none. It\'s truly life-changing.',
      author: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer',
      featured: true
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain: 99.9% Transparency',
      company: 'Global Logistics Network',
      industry: 'Logistics',
      challenge: 'Supply chain opacity causing $100M in counterfeit goods and delays',
      solution: 'Enterprise blockchain solution with AI-powered fraud detection',
      results: [
        '99.9% supply chain transparency',
        '95% reduction in counterfeit goods',
        '50% faster delivery times',
        '$100M cost savings',
        '100% customer satisfaction'
      ],
      timeline: '15 months',
      investment: '$20M',
      roi: '500%',
      category: 'blockchain',
      image: '🚚',
      testimonial: 'Blockchain technology has transformed our supply chain operations completely.',
      author: 'David Kim',
      role: 'Supply Chain Director',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Drug Discovery: 80% Faster Development',
      company: 'PharmaTech Solutions',
      industry: 'Pharmaceuticals',
      challenge: 'Drug discovery taking 10+ years and costing $2B per drug',
      solution: 'AI-powered molecular simulation and drug discovery platform',
      results: [
        '80% faster drug discovery',
        '3 new drug candidates identified',
        '60% cost reduction in R&D',
        'Accelerated clinical trials',
        'Higher success rates'
      ],
      timeline: '18 months',
      investment: '$40M',
      roi: '600%',
      category: 'ai',
      image: '💊',
      testimonial: 'AI has revolutionized our drug discovery process. We can now develop life-saving drugs faster than ever.',
      author: 'Dr. Lisa Wang',
      role: 'Research Director',
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Cryptography: 100% Secure Communications',
      company: 'SecureComm Inc',
      industry: 'Cybersecurity',
      challenge: 'Government clients requiring unbreakable encryption',
      solution: 'Quantum key distribution and quantum cryptography suite',
      results: [
        '100% secure communication',
        'Zero security breaches',
        '50% reduction in security costs',
        'Future-proof encryption',
        'Instant threat detection'
      ],
      timeline: '10 months',
      investment: '$35M',
      roi: '400%',
      category: 'quantum',
      image: '🔐',
      testimonial: 'Quantum cryptography provides the ultimate security solution for our most sensitive communications.',
      author: 'James Wilson',
      role: 'Chief Security Officer',
      featured: false
    },
    {
      id: 7,
      title: 'Neural Gaming Revolution: 1000% Immersive Experience',
      company: 'NextGen Gaming Studios',
      industry: 'Gaming',
      challenge: 'Traditional gaming interfaces limiting player immersion',
      solution: 'Non-invasive neural interface gaming controllers',
      results: [
        '1000% more immersive experience',
        'Faster reaction times',
        'New gaming possibilities',
        'Accessibility for disabled gamers',
        '300% user engagement increase'
      ],
      timeline: '8 months',
      investment: '$12M',
      roi: '750%',
      category: 'neural',
      image: '🎮',
      testimonial: 'Neural interfaces have created a completely new dimension in gaming. Players are blown away.',
      author: 'Alex Thompson',
      role: 'Creative Director',
      featured: false
    },
    {
      id: 8,
      title: 'AI Autonomous Operations: 99.9% Uptime',
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual operations causing 20% downtime and high costs',
      solution: 'Autonomous AI agents managing entire business operations',
      results: [
        '99.9% operational uptime',
        '70% reduction in manual work',
        '50% cost savings',
        '24/7 autonomous operation',
        'Predictive maintenance'
      ],
      timeline: '14 months',
      investment: '$18M',
      roi: '450%',
      category: 'ai',
      image: '🤖',
      testimonial: 'Autonomous AI agents have transformed our operations. We now run 24/7 without human intervention.',
      author: 'Maria Garcia',
      role: 'Operations Director',
      featured: false
    },
    {
      id: 9,
      title: 'Blockchain Healthcare Records: 100% Data Integrity',
      company: 'MedChain Systems',
      industry: 'Healthcare',
      challenge: 'Medical record tampering and data breaches',
      solution: 'Blockchain-based medical record management system',
      results: [
        '100% data integrity',
        'Zero data breaches',
        'Instant record access',
        'Patient data ownership',
        'Interoperability across systems'
      ],
      timeline: '12 months',
      investment: '$22M',
      roi: '350%',
      category: 'blockchain',
      image: '🏥',
      testimonial: 'Blockchain has revolutionized how we manage medical records. Patients now own their data.',
      author: 'Dr. Robert Lee',
      role: 'Chief Medical Information Officer',
      featured: false
    },
    {
      id: 10,
      title: 'Quantum Machine Learning: Exponential Processing',
      company: 'DataScience Corp',
      industry: 'Data Science',
      challenge: 'Complex data analysis taking weeks with classical computers',
      solution: 'Quantum machine learning algorithms for big data processing',
      results: [
        '10,000x faster processing',
        'Exponential learning capacity',
        'Impossible problem solving',
        'Real-time insights',
        'Unprecedented accuracy'
      ],
      timeline: '16 months',
      investment: '$28M',
      roi: '700%',
      category: 'quantum',
      image: '📊',
      testimonial: 'Quantum machine learning has opened up possibilities we never knew existed.',
      author: 'Dr. Anna Patel',
      role: 'Chief Data Scientist',
      featured: false
    },
    {
      id: 11,
      title: 'AI Content Creation: 500% Content Output',
      company: 'MediaCorp International',
      industry: 'Media',
      challenge: 'Content creation bottleneck limiting growth',
      solution: 'AI-powered content generation and optimization platform',
      results: [
        '500% increase in content output',
        '90% cost reduction',
        'Higher engagement rates',
        'Multilingual content',
        'Personalized content'
      ],
      timeline: '6 months',
      investment: '$8M',
      roi: '900%',
      category: 'ai',
      image: '📝',
      testimonial: 'AI content creation has revolutionized our media production. We can now scale like never before.',
      author: 'Jennifer Liu',
      role: 'Content Director',
      featured: false
    },
    {
      id: 12,
      title: 'Neural Education Platform: 300% Learning Speed',
      company: 'EduTech Solutions',
      industry: 'Education',
      challenge: 'Traditional learning methods too slow and ineffective',
      solution: 'Neural interface-enhanced learning platform',
      results: [
        '300% faster learning',
        '95% information retention',
        'Personalized learning paths',
        'Real-time progress tracking',
        'Enhanced focus and concentration'
      ],
      timeline: '10 months',
      investment: '$15M',
      roi: '500%',
      category: 'neural',
      image: '🎓',
      testimonial: 'Neural interfaces have transformed education. Students learn at unprecedented speeds.',
      author: 'Dr. Michael Brown',
      role: 'Chief Learning Officer',
      featured: false
    }
  ];

  const filteredCases = caseStudies.filter(caseStudy => 
    activeFilter === 'all' || caseStudy.category === activeFilter
  );

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 COMPREHENSIVE CASE STUDIES 2026 • SUCCESS STORIES
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how leading companies are achieving unprecedented results with our cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⭐ Featured Success Stories</h2>
            <p className="text-xl opacity-90">Outstanding results from our most successful implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="text-4xl mb-4">{caseStudy.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                    {caseStudy.category.toUpperCase()}
                  </span>
                  <span className="text-sm opacity-80">{caseStudy.timeline}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-indigo-100 mb-4">{caseStudy.company} • {caseStudy.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold">ROI: {caseStudy.roi}</div>
                    <div className="opacity-80">Investment: {caseStudy.investment}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{caseStudy.author}</div>
                    <div className="opacity-80">{caseStudy.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📈 All Success Stories</h2>
            <p className="text-xl opacity-90">
              {filteredCases.length} case studies found
              {activeFilter !== 'all' && ` in ${filters.find(f => f.id === activeFilter)?.name}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="text-3xl mb-4">{caseStudy.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                    {caseStudy.category.toUpperCase()}
                  </span>
                  <span className="text-sm opacity-80">{caseStudy.timeline}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{caseStudy.company} • {caseStudy.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold">ROI: {caseStudy.roi}</div>
                    <div className="opacity-80">{caseStudy.investment}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{caseStudy.author}</div>
                    <div className="opacity-80">{caseStudy.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedCase.title}</h2>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-white/60 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-6xl mb-4">{selectedCase.image}</div>
                <h3 className="text-xl font-bold mb-2">{selectedCase.company}</h3>
                <p className="text-indigo-300 mb-4">{selectedCase.industry}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{selectedCase.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-300">{selectedCase.solution}</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="italic text-indigo-200">"{selectedCase.testimonial}"</p>
                  <div className="mt-2 text-sm">
                    <div className="font-semibold">{selectedCase.author}</div>
                    <div className="opacity-80">{selectedCase.role}, {selectedCase.company}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Results:</h4>
                <ul className="space-y-3 mb-6">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {result}
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{selectedCase.roi}</div>
                    <div className="text-sm opacity-80">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{selectedCase.investment}</div>
                    <div className="text-sm opacity-80">Investment</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">{selectedCase.timeline}</div>
                    <div className="text-sm opacity-80">Timeline</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">{selectedCase.category.toUpperCase()}</div>
                    <div className="text-sm opacity-80">Category</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Success Story
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join hundreds of companies already achieving unprecedented results with our technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;