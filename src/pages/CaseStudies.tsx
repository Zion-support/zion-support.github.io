import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Financial Risk Management",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex risk assessment across multiple markets and asset classes requiring real-time analysis and predictive modeling.",
      solution: "Implemented autonomous AI systems for real-time risk monitoring, automated compliance reporting, and predictive risk modeling across global markets.",
      results: [
        "40% reduction in risk assessment time",
        "99.9% compliance accuracy",
        "$50M annual cost savings",
        "Real-time risk monitoring across 50+ markets"
      ],
      technologies: ["AI/ML", "Big Data", "Cloud Computing", "Real-time Analytics"],
      image: "🏦"
    },
    {
      id: 2,
      title: "Autonomous Cybersecurity Operations",
      client: "Healthcare Technology Company",
      industry: "Healthcare",
      challenge: "Increasing cyber threats targeting patient data and medical systems, requiring 24/7 security monitoring and rapid incident response.",
      solution: "Deployed AI autonomous security systems with automated threat detection, response, and recovery capabilities, integrated with existing healthcare infrastructure.",
      results: [
        "95% reduction in incident response time",
        "Zero data breaches in 18 months",
        "Automated 24/7 security monitoring",
        "HIPAA compliance automation"
      ],
      technologies: ["AI Security", "Threat Intelligence", "Automation", "Compliance"],
      image: "🏥"
    },
    {
      id: 3,
      title: "Smart Manufacturing Transformation",
      client: "Automotive Manufacturer",
      industry: "Manufacturing",
      challenge: "Inefficient production processes, quality control issues, and high operational costs in a complex manufacturing environment.",
      solution: "Implemented AI autonomous systems for predictive maintenance, quality control automation, and supply chain optimization across manufacturing facilities.",
      results: [
        "30% increase in production efficiency",
        "25% reduction in quality defects",
        "20% decrease in operational costs",
        "Predictive maintenance with 90% accuracy"
      ],
      technologies: ["IoT", "AI/ML", "Predictive Analytics", "Automation"],
      image: "🚗"
    },
    {
      id: 4,
      title: "Cloud-Native Digital Transformation",
      client: "Retail Chain",
      industry: "Retail",
      challenge: "Legacy systems limiting scalability, poor customer experience, and inability to compete with digital-first competitors.",
      solution: "Complete digital transformation including cloud migration, AI-powered customer analytics, and autonomous e-commerce platform development.",
      results: [
        "300% increase in online sales",
        "60% improvement in customer satisfaction",
        "50% reduction in IT infrastructure costs",
        "Real-time inventory management"
      ],
      technologies: ["Cloud Computing", "AI/ML", "E-commerce", "DevOps"],
      image: "🛍️"
    },
    {
      id: 5,
      title: "AI Research Platform Development",
      client: "Research University",
      industry: "Education",
      challenge: "Need for advanced AI research tools and collaborative platforms to accelerate scientific discoveries and research collaboration.",
      solution: "Developed comprehensive AI research platform with autonomous data analysis, collaborative research tools, and automated research workflow management.",
      results: [
        "5x increase in research productivity",
        "Enhanced collaboration across 20+ departments",
        "Automated data processing and analysis",
        "Published 50+ research papers using platform"
      ],
      technologies: ["AI Research", "Collaboration Tools", "Data Analytics", "Workflow Automation"],
      image: "🎓"
    },
    {
      id: 6,
      title: "Autonomous Logistics Optimization",
      client: "Global Logistics Provider",
      industry: "Logistics",
      challenge: "Complex supply chain operations across multiple countries with inefficient routing, inventory management, and delivery optimization.",
      solution: "Implemented AI autonomous logistics systems for route optimization, predictive inventory management, and automated supply chain coordination.",
      results: [
        "35% reduction in delivery times",
        "25% decrease in logistics costs",
        "99.5% on-time delivery rate",
        "Real-time supply chain visibility"
      ],
      technologies: ["AI/ML", "IoT", "Predictive Analytics", "Supply Chain Management"],
      image: "📦"
    }
  ];

  const industries = ["All Industries", "Financial Services", "Healthcare", "Manufacturing", "Retail", "Education", "Logistics"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world success stories showcasing how our AI autonomous solutions transform businesses 
              and drive measurable results across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{study.image}</div>
                  <div className="text-right">
                    <div className="text-sm text-blue-400 font-medium">{study.industry}</div>
                    <div className="text-xs text-gray-400">{study.client}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Read Full Case Study
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Metrics</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions deliver measurable results across all industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Average Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Average Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.5B</div>
              <div className="text-gray-300">Total Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-gray-300">Successful Implementations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have transformed their operations with our AI autonomous solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;