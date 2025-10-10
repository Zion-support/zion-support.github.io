'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Fortune 500 Manufacturing: AI-Powered Quality Control",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Manual quality control processes were causing 15% defect rates and significant production delays.",
    solution: "Implemented AI-powered computer vision system for real-time quality inspection and automated defect detection.",
    results: [
      "Reduced defect rates by 85%",
      "Increased production efficiency by 40%",
      "Saved $2.5M annually in quality costs",
      "Achieved 99.7% accuracy in defect detection"
    ],
    metrics: {
      costSavings: "$2.5M",
      efficiencyGain: "40%",
      accuracyRate: "99.7%",
      timeReduction: "60%"
    },
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Provider: AI-Driven Patient Care Optimization",
    company: "Regional Medical Center",
    industry: "Healthcare",
    challenge: "Patient wait times were averaging 45 minutes, leading to poor patient satisfaction and staff burnout.",
    solution: "Deployed AI-powered patient flow management system with predictive analytics and automated scheduling.",
    results: [
      "Reduced average wait time to 12 minutes",
      "Improved patient satisfaction by 78%",
      "Increased staff productivity by 35%",
      "Reduced no-show rates by 50%"
    ],
    metrics: {
      waitTimeReduction: "73%",
      satisfactionImprovement: "78%",
      productivityGain: "35%",
      noShowReduction: "50%"
    },
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 3,
    title: "Financial Services: AI-Powered Fraud Detection",
    company: "Regional Bank",
    industry: "Financial Services",
    challenge: "Traditional fraud detection systems were missing 30% of fraudulent transactions while generating false positives.",
    solution: "Implemented advanced AI fraud detection system with machine learning algorithms and real-time monitoring.",
    results: [
      "Detected 98% of fraudulent transactions",
      "Reduced false positives by 85%",
      "Saved $1.8M in prevented fraud losses",
      "Improved customer trust and satisfaction"
    ],
    metrics: {
      fraudDetection: "98%",
      falsePositiveReduction: "85%",
      fraudPrevention: "$1.8M",
      customerSatisfaction: "92%"
    },
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 4,
    title: "E-commerce Platform: AI-Powered Personalization",
    company: "Online Retailer",
    industry: "E-commerce",
    challenge: "Low conversion rates and high cart abandonment due to generic shopping experiences.",
    solution: "Implemented AI-powered recommendation engine and personalized shopping experience across all touchpoints.",
    results: [
      "Increased conversion rates by 65%",
      "Reduced cart abandonment by 45%",
      "Boosted average order value by 38%",
      "Improved customer lifetime value by 120%"
    ],
    metrics: {
      conversionIncrease: "65%",
      cartAbandonmentReduction: "45%",
      orderValueIncrease: "38%",
      lifetimeValueIncrease: "120%"
    },
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 5,
    title: "Supply Chain: AI-Driven Inventory Optimization",
    company: "Retail Chain",
    industry: "Retail",
    challenge: "Overstock and stockout issues were costing $3M annually in lost sales and excess inventory.",
    solution: "Deployed AI-powered demand forecasting and inventory optimization system across all locations.",
    results: [
      "Reduced inventory costs by 35%",
      "Eliminated stockouts by 90%",
      "Increased sales by 22%",
      "Improved supplier relationships"
    ],
    metrics: {
      inventoryCostReduction: "35%",
      stockoutElimination: "90%",
      salesIncrease: "22%",
      costSavings: "$3M"
    },
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    title: "Energy Sector: AI-Powered Predictive Maintenance",
    company: "Power Generation Company",
    industry: "Energy",
    challenge: "Unexpected equipment failures were causing $5M annually in downtime and emergency repairs.",
    solution: "Implemented AI-powered predictive maintenance system with IoT sensors and machine learning algorithms.",
    results: [
      "Reduced unplanned downtime by 80%",
      "Extended equipment life by 25%",
      "Saved $4.2M in maintenance costs",
      "Improved safety record by 95%"
    ],
    metrics: {
      downtimeReduction: "80%",
      equipmentLifeExtension: "25%",
      maintenanceCostSavings: "$4.2M",
      safetyImprovement: "95%"
    },
    image: "/api/placeholder/600/400",
    featured: false
  }
];

const industries = ["All", "Manufacturing", "Healthcare", "Financial Services", "E-commerce", "Retail", "Energy"];

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);

  React.useEffect(() => {
    if (selectedIndustry === 'All') {
      setFilteredStudies(caseStudies);
    } else {
      setFilteredStudies(caseStudies.filter(study => study.industry === selectedIndustry));
    }
  }, [selectedIndustry]);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how our AI and IT solutions have transformed businesses across industries. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our AI and IT solutions have transformed businesses across industries. 
              Real results from real clients.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {filteredStudies.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Success Story</h2>
              {(() => {
                const featured = filteredStudies.find(study => study.featured) || filteredStudies[0];
                return (
                  <div className="cyber-card hologram-card p-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                            {featured.industry}
                          </span>
                          <span className="text-gray-400 text-sm">{featured.company}</span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-4">{featured.title}</h3>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge:</h4>
                          <p className="text-gray-300 mb-4">{featured.challenge}</p>
                          
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution:</h4>
                          <p className="text-gray-300 mb-4">{featured.solution}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{featured.metrics.costSavings}</div>
                            <div className="text-sm text-gray-400">Cost Savings</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{featured.metrics.efficiencyGain}</div>
                            <div className="text-sm text-gray-400">Efficiency Gain</div>
                          </div>
                        </div>

                        <a
                          href={`/case-studies/${featured.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                          Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              {selectedIndustry === 'All' ? 'All Case Studies' : `${selectedIndustry} Case Studies`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <article key={study.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{study.metrics.costSavings}</div>
                      <div className="text-xs text-gray-400">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{study.metrics.efficiencyGain}</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                  </div>
                  
                  <a
                    href={`/case-studies/${study.id}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8">
                Let us help you achieve similar results with our AI and IT solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-3">
                  Get Free Consultation
                </a>
                <a href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;