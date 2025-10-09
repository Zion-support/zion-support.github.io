import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare AI Implementation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Manual patient data analysis was taking 40+ hours per week, leading to delayed diagnoses and treatment plans.",
      solution: "Implemented AI-powered medical imaging analysis and predictive analytics for patient outcomes.",
      results: {
        timeSaved: "85%",
        accuracy: "94%",
        costReduction: "$2.3M",
        roi: "340%"
      },
      technologies: ["Computer Vision", "Machine Learning", "Predictive Analytics"],
      duration: "6 months"
    },
    {
      id: 2,
      title: "Financial Services Automation",
      client: "Mid-Size Bank",
      industry: "Fintech",
      challenge: "Manual loan processing and fraud detection were causing delays and security vulnerabilities.",
      solution: "Deployed AI-driven loan approval system and real-time fraud detection algorithms.",
      results: {
        timeSaved: "70%",
        accuracy: "98%",
        costReduction: "$1.8M",
        roi: "280%"
      },
      technologies: ["NLP", "Machine Learning", "Real-time Analytics"],
      duration: "4 months"
    },
    {
      id: 3,
      title: "Manufacturing Process Optimization",
      client: "Automotive Parts Manufacturer",
      industry: "Manufacturing",
      challenge: "Production inefficiencies and quality control issues were impacting profitability.",
      solution: "Implemented IoT sensors with AI analytics for predictive maintenance and quality control.",
      results: {
        timeSaved: "60%",
        accuracy: "96%",
        costReduction: "$3.1M",
        roi: "420%"
      },
      technologies: ["IoT", "Computer Vision", "Predictive Maintenance"],
      duration: "8 months"
    },
    {
      id: 4,
      title: "E-commerce Personalization",
      client: "Online Retailer",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment due to poor product recommendations.",
      solution: "Built AI-powered recommendation engine and dynamic pricing optimization system.",
      results: {
        timeSaved: "50%",
        accuracy: "92%",
        costReduction: "$1.5M",
        roi: "310%"
      },
      technologies: ["Recommendation Systems", "Machine Learning", "Dynamic Pricing"],
      duration: "5 months"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations. See how we've helped businesses achieve 300%+ ROI and transform their operations." />
        <meta name="keywords" content="case studies, AI success stories, IT solutions, business transformation, ROI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              Case Studies
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results 
              with our AI and IT solutions. Real projects, real results, real transformation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    <span className="text-sm text-gray-400">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-lg font-bold text-green-400">{study.results.timeSaved}</span>
                      </div>
                      <p className="text-xs text-gray-400">Time Saved</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-400 mr-1" />
                        <span className="text-lg font-bold text-blue-400">{study.results.accuracy}</span>
                      </div>
                      <p className="text-xs text-gray-400">Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-lg font-bold text-yellow-400">{study.results.costReduction}</span>
                      </div>
                      <p className="text-xs text-gray-400">Cost Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <ArrowRight className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-lg font-bold text-purple-400">{study.results.roi}</span>
                      </div>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="cyber-card p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Start Your Success Story?</h2>
                <p className="text-gray-300 mb-6">
                  Join the hundreds of businesses that have transformed their operations with our AI and IT solutions. 
                  Get a free consultation and discover how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="cyber-button">
                    Get Free Consultation
                  </a>
                  <a href="tel:+13024640950" className="cyber-button-secondary">
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;