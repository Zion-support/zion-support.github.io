import React from 'react';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const caseStudies = [
    {
      id: 'quantum-pharmaceutical',
      title: 'Quantum-Powered Drug Discovery',
      company: 'PharmaTech Global',
      industry: 'Pharmaceutical',
      challenge: 'Accelerate drug discovery process for rare diseases',
      solution: 'Implemented quantum computing molecular simulation',
      results: {
        timeReduction: '90%',
        costSavings: '$50M',
        successRate: '300%',
        newDrugs: '15'
      },
      description: 'PharmaTech Global revolutionized their drug discovery process using our quantum computing solutions, reducing development time from 10 years to 1 year while discovering 15 new treatments for rare diseases.',
      technologies: ['Quantum Computing', 'Molecular Simulation', 'AI Optimization'],
      image: '💊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'neural-rehabilitation',
      title: 'Neural Interface Rehabilitation',
      company: 'NeuroRecovery Center',
      industry: 'Healthcare',
      challenge: 'Improve stroke patient recovery rates',
      solution: 'Deployed advanced neural interface technology',
      results: {
        recoveryRate: '95%',
        timeReduction: '70%',
        patientSatisfaction: '98%',
        costReduction: '60%'
      },
      description: 'NeuroRecovery Center achieved unprecedented stroke rehabilitation results using our neural interface technology, helping 95% of patients recover motor function 3x faster than traditional methods.',
      technologies: ['Neural Interface', 'BCI Technology', 'Machine Learning'],
      image: '🧠',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'ai-manufacturing',
      title: 'Autonomous Manufacturing Revolution',
      company: 'AutoManufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Optimize production efficiency and reduce defects',
      solution: 'Deployed autonomous AI agents for production management',
      results: {
        efficiencyGain: '500%',
        defectReduction: '90%',
        costSavings: '$25M',
        uptime: '99.9%'
      },
      description: 'AutoManufacturing Inc transformed their production line with autonomous AI agents, achieving 500% efficiency gains while reducing defects by 90% and saving $25M annually.',
      technologies: ['Autonomous AI', 'Predictive Analytics', 'IoT Integration'],
      image: '🏭',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'space-exploration',
      title: 'AI-Powered Space Mission',
      company: 'SpaceExploration Corp',
      industry: 'Aerospace',
      challenge: 'Optimize Mars mission planning and execution',
      solution: 'Implemented AI-powered mission planning and autonomous systems',
      results: {
        missionSuccess: '100%',
        fuelEfficiency: '40%',
        dataProcessing: '1000x',
        costReduction: '30%'
      },
      description: 'SpaceExploration Corp successfully executed their Mars mission using our AI-powered systems, achieving 100% mission success with 40% better fuel efficiency and 1000x faster data processing.',
      technologies: ['Space AI', 'Autonomous Systems', 'Predictive Modeling'],
      image: '🚀',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'financial-ai',
      title: 'AI Financial Trading System',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Improve trading accuracy and risk management',
      solution: 'Deployed advanced AI trading algorithms with quantum optimization',
      results: {
        tradingAccuracy: '99.7%',
        profitIncrease: '250%',
        riskReduction: '80%',
        processingSpeed: '100x'
      },
      description: 'FinTech Solutions revolutionized their trading operations with our AI and quantum computing solutions, achieving 99.7% trading accuracy and 250% profit increases while reducing risk by 80%.',
      technologies: ['AI Trading', 'Quantum Optimization', 'Risk Management'],
      image: '💰',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'smart-city',
      title: 'Smart City Infrastructure',
      company: 'UrbanTech Municipal',
      industry: 'Smart Cities',
      challenge: 'Optimize city infrastructure and reduce energy consumption',
      solution: 'Implemented comprehensive AI-powered smart city platform',
      results: {
        energySavings: '35%',
        trafficReduction: '45%',
        citizenSatisfaction: '92%',
        costSavings: '$100M'
      },
      description: 'UrbanTech Municipal transformed their city infrastructure with our AI-powered smart city platform, achieving 35% energy savings, 45% traffic reduction, and $100M in cost savings.',
      technologies: ['Smart City AI', 'IoT Networks', 'Predictive Analytics'],
      image: '🏙️',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 COMPREHENSIVE CASE STUDIES 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🏆 Success Stories & Case Studies
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how our revolutionary technologies have transformed industries 
            and delivered unprecedented results for our clients
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              View All Case Studies →
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
              Download Report
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{study.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-gray-600">{study.company}</p>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mt-1">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${study.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Read Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Impact Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🌍 Industry Impact Summary</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our technologies have transformed multiple industries, delivering measurable results 
              and creating lasting value for organizations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$2B+</div>
              <div className="text-blue-200">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Industries Served</div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">💬 Client Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CEO, PharmaTech Global</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quantum computing solution revolutionized our drug discovery process. 
                We achieved in 1 year what would have taken 10 years with traditional methods."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">CTO, AutoManufacturing Inc</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The autonomous AI agents transformed our production line. 
                We achieved 500% efficiency gains while reducing defects by 90%."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-600">Director, NeuroRecovery Center</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The neural interface technology helped 95% of our stroke patients 
                recover motor function 3x faster than traditional methods."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of companies already transforming their operations 
            with our revolutionary technology solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;