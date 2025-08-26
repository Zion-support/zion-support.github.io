import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Bank Achieves 40% Cost Reduction with AI-Powered Automation",
      client: "Fortune 500 Financial Institution",
      industry: "Financial Services",
      challenge: "Manual processes were consuming 60% of operational costs and causing delays in customer service.",
      solution: "Implemented AI-powered process automation, intelligent document processing, and predictive analytics.",
      results: [
        "40% reduction in operational costs",
        "80% faster document processing",
        "95% improvement in customer satisfaction",
        "ROI achieved in 8 months"
      ],
      technologies: ["AI Automation", "Machine Learning", "Process Optimization", "Predictive Analytics"],
      duration: "12 months",
      teamSize: "15 experts",
      image: "/images/case-studies/bank-automation.jpg"
    },
    {
      id: 2,
      title: "Healthcare Provider Transforms Patient Care with AI-Powered Diagnostics",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy was below industry standards, leading to delayed treatments and increased costs.",
      solution: "Deployed AI-powered diagnostic tools, predictive health analytics, and automated patient monitoring systems.",
      results: [
        "35% improvement in diagnostic accuracy",
        "50% reduction in diagnostic time",
        "30% decrease in patient readmissions",
        "$2M annual cost savings"
      ],
      technologies: ["AI Diagnostics", "Computer Vision", "Predictive Analytics", "IoT Integration"],
      duration: "18 months",
      teamSize: "20 experts",
      image: "/images/case-studies/healthcare-ai.jpg"
    },
    {
      id: 3,
      title: "Manufacturing Giant Implements Smart Factory with IoT and AI",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Production inefficiencies and unplanned downtime were costing millions annually.",
      solution: "Built comprehensive smart factory solution with IoT sensors, AI-powered predictive maintenance, and real-time analytics.",
      results: [
        "25% increase in production efficiency",
        "60% reduction in unplanned downtime",
        "20% improvement in quality control",
        "$15M annual cost savings"
      ],
      technologies: ["IoT", "AI/ML", "Predictive Maintenance", "Real-time Analytics"],
      duration: "24 months",
      teamSize: "25 experts",
      image: "/images/case-studies/smart-factory.jpg"
    },
    {
      id: 4,
      title: "Retail Chain Boosts Sales with AI-Powered Customer Insights",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "Lack of customer insights and personalization was limiting sales growth and customer retention.",
      solution: "Implemented AI-powered customer analytics, personalized marketing automation, and demand forecasting systems.",
      results: [
        "30% increase in customer retention",
        "25% boost in average order value",
        "40% improvement in marketing ROI",
        "$8M additional annual revenue"
      ],
      technologies: ["Customer Analytics", "Marketing Automation", "Demand Forecasting", "Personalization"],
      duration: "14 months",
      teamSize: "18 experts",
      image: "/images/case-studies/retail-analytics.jpg"
    },
    {
      id: 5,
      title: "Energy Company Achieves Net-Zero with AI-Optimized Operations",
      client: "Renewable Energy Provider",
      industry: "Energy",
      challenge: "Inefficient energy production and distribution was limiting sustainability goals and profitability.",
      solution: "Developed AI-powered energy optimization platform with smart grid management and predictive analytics.",
      results: [
        "45% improvement in energy efficiency",
        "60% reduction in carbon emissions",
        "35% increase in renewable energy output",
        "Achieved net-zero status 2 years early"
      ],
      technologies: ["Energy Optimization", "Smart Grid", "Predictive Analytics", "Sustainability Tech"],
      duration: "30 months",
      teamSize: "22 experts",
      image: "/images/case-studies/energy-optimization.jpg"
    },
    {
      id: 6,
      title: "Logistics Company Streamlines Operations with Autonomous Systems",
      client: "International Logistics Provider",
      industry: "Logistics",
      challenge: "Manual logistics operations were causing delays, errors, and high operational costs.",
      solution: "Implemented autonomous logistics systems, AI-powered route optimization, and real-time tracking solutions.",
      results: [
        "50% reduction in delivery times",
        "70% decrease in operational errors",
        "35% improvement in fleet utilization",
        "$12M annual cost savings"
      ],
      technologies: ["Autonomous Systems", "Route Optimization", "Real-time Tracking", "AI Logistics"],
      duration: "20 months",
      teamSize: "28 experts",
      image: "/images/case-studies/autonomous-logistics.jpg"
    }
  ];

  const industries = [
    { name: "All Industries", count: 6, active: true },
    { name: "Financial Services", count: 1, active: false },
    { name: "Healthcare", count: 1, active: false },
    { name: "Manufacturing", count: 1, active: false },
    { name: "Retail", count: 1, active: false },
    { name: "Energy", count: 1, active: false },
    { name: "Logistics", count: 1, active: false }
  ];

  const technologies = [
    "AI & Machine Learning",
    "IoT & Automation",
    "Predictive Analytics",
    "Process Optimization",
    "Computer Vision",
    "Smart Infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world success stories showcasing how we've helped organizations transform 
              their operations with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  industry.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">{study.client.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Challenge</div>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Solution</div>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Key Results</div>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Duration</div>
                      <div className="text-sm text-gray-900">{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Team Size</div>
                      <div className="text-sm text-gray-900">{study.teamSize}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Success Metrics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Across all our projects, we consistently deliver measurable results that drive business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Total Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver innovative solutions across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tech}</h3>
                <p className="text-gray-600 text-sm">
                  Proven expertise in implementing {tech.toLowerCase()} solutions that drive measurable business outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions. 
            Our team is ready to create your next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from the organizations we've helped transform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  J
                </div>
                <div>
                  <div className="font-semibold text-slate-900">John Smith</div>
                  <div className="text-sm text-gray-600">CTO, Global Bank</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Zion Tech Group transformed our operations with AI automation. The results exceeded our expectations, 
                and the team's expertise was invaluable throughout the process."
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  S
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, Healthcare Network</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Their AI-powered diagnostic solution revolutionized our patient care. The accuracy improvements 
                and cost savings have been remarkable."
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Mike Chen</div>
                  <div className="text-sm text-gray-600">VP Operations, Manufacturing Corp</div>
                </div>
              </div>
              <p className="text-gray-700">
                "The smart factory implementation has transformed our production efficiency. 
                Zion Tech Group's expertise in IoT and AI is unmatched."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;