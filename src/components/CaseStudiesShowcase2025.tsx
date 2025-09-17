import React, { useState } from 'react';

const CaseStudiesShowcase2025: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Fortune 500 Manufacturing",
      industry: "Manufacturing",
      challenge: "Optimize production efficiency and reduce operational costs",
      solution: "Implemented AI-powered predictive maintenance and autonomous quality control systems",
      results: {
        efficiency: "+340%",
        costSavings: "$12M",
        downtime: "-85%",
        quality: "+99.2%"
      },
      technologies: ["AI/ML", "IoT Sensors", "Predictive Analytics", "Computer Vision"],
      duration: "6 months",
      image: "🏭",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      company: "Global Financial Services",
      industry: "Finance",
      challenge: "Enhance fraud detection and improve customer experience",
      solution: "Deployed quantum-enhanced security systems and AI-powered customer service",
      results: {
        fraudDetection: "+99.8%",
        responseTime: "-90%",
        customerSatisfaction: "+95%",
        costReduction: "$8.5M"
      },
      technologies: ["Quantum Computing", "AI/ML", "Blockchain", "Real-time Analytics"],
      duration: "4 months",
      image: "🏦",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      company: "Healthcare Innovation Hub",
      industry: "Healthcare",
      challenge: "Accelerate drug discovery and improve patient outcomes",
      solution: "Integrated neural interfaces with AI for advanced medical diagnostics and treatment",
      results: {
        drugDiscovery: "+500%",
        accuracy: "+98.5%",
        patientOutcomes: "+85%",
        timeToMarket: "-70%"
      },
      technologies: ["Neural Interfaces", "AI/ML", "Quantum Computing", "Biotech"],
      duration: "8 months",
      image: "🏥",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      company: "Smart City Initiative",
      industry: "Urban Development",
      challenge: "Create sustainable and efficient urban infrastructure",
      solution: "Implemented comprehensive IoT network with AI-driven traffic and energy management",
      results: {
        energyEfficiency: "+60%",
        trafficFlow: "+45%",
        carbonFootprint: "-40%",
        citizenSatisfaction: "+92%"
      },
      technologies: ["IoT", "AI/ML", "Edge Computing", "Smart Sensors"],
      duration: "12 months",
      image: "🏙️",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white">
            📊 SUCCESS STORIES • 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations are transforming their operations with our cutting-edge technology solutions
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? `bg-gradient-to-r ${caseStudy.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-2xl mr-2">{caseStudy.image}</span>
              {caseStudy.company}
            </button>
          ))}
        </div>

        {/* Selected Case Study Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className={`h-96 bg-gradient-to-br ${caseStudies[selectedCase].gradient} p-12 text-white`}>
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="text-6xl mb-6">{caseStudies[selectedCase].image}</div>
                <h3 className="text-4xl font-bold mb-4">{caseStudies[selectedCase].company}</h3>
                <p className="text-lg mb-2 opacity-90">
                  <span className="font-semibold">Industry:</span> {caseStudies[selectedCase].industry}
                </p>
                <p className="text-lg mb-2 opacity-90">
                  <span className="font-semibold">Duration:</span> {caseStudies[selectedCase].duration}
                </p>
              </div>
              
              <div className="flex-1 pl-12">
                <h4 className="text-2xl font-bold mb-4">Key Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudies[selectedCase].results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold">{value}</div>
                      <div className="text-sm opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                <p className="text-lg text-gray-600 mb-6">{caseStudies[selectedCase].challenge}</p>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h4>
                <p className="text-lg text-gray-600">{caseStudies[selectedCase].solution}</p>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {caseStudies[selectedCase].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`/case-studies/${caseStudies[selectedCase].company.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.5B+</div>
            <div className="text-gray-600">Client Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful organizations that have revolutionized their operations with our technology
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesShowcase2025;