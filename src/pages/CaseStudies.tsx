import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Retailer",
      company: "Global Retail Corp",
      industry: "Retail",
      challenge: "Legacy systems causing operational inefficiencies and poor customer experience",
      solution: "Implemented AI-driven inventory management, customer analytics, and automated customer service",
      results: [
        "35% reduction in operational costs",
        "42% improvement in customer satisfaction",
        "28% increase in sales conversion rates"
      ],
      technologies: ["AI/ML", "Cloud Infrastructure", "Data Analytics", "Automation"]
    },
    {
      id: 2,
      title: "Cybersecurity Overhaul for Financial Services Provider",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Outdated security infrastructure vulnerable to modern cyber threats",
      solution: "Deployed comprehensive zero-trust security framework with AI-powered threat detection",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 18 months",
        "60% reduction in security incident response time"
      ],
      technologies: ["Zero Trust Architecture", "AI Security", "Threat Intelligence", "Compliance Automation"]
    },
    {
      id: 3,
      title: "Cloud Migration and DevOps Transformation",
      company: "TechStartup Inc",
      industry: "Technology",
      challenge: "Monolithic architecture limiting scalability and deployment speed",
      solution: "Migrated to microservices architecture with automated CI/CD pipelines",
      results: [
        "90% faster deployment cycles",
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs"
      ],
      technologies: ["Microservices", "Kubernetes", "CI/CD", "Cloud Native"]
    },
    {
      id: 4,
      title: "Quantum Computing Research Platform Development",
      company: "Quantum Research Institute",
      industry: "Research & Development",
      challenge: "Need for advanced quantum computing simulation and research tools",
      solution: "Built comprehensive quantum computing platform with simulation capabilities",
      results: [
        "10x faster quantum algorithm testing",
        "Support for 100+ qubit simulations",
        "Published 15 research papers using the platform"
      ],
      technologies: ["Quantum Computing", "Advanced Algorithms", "High Performance Computing", "Research Tools"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group's technology solutions and digital transformation projects." />
        <meta name="keywords" content="case studies, success stories, digital transformation, AI solutions, cybersecurity, cloud migration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Inspire</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions, 
              AI innovation, and strategic digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">15+ Industries</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">200+ Projects</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">99% Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-400">{study.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                      <p className="text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Zion Tech Group can transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;