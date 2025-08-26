import React from 'react';
import { Briefcase, Users, TrendingUp, Shield, Cpu, Globe, Award, ArrowRight, Star, Target, Zap, Database } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Financial Risk Assessment Platform",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Manual risk assessment processes were time-consuming and prone to human error, leading to delayed decisions and potential financial losses.",
      solution: "Developed an AI-powered platform that analyzes market data, financial statements, and economic indicators in real-time to provide instant risk assessments.",
      results: [
        "Reduced risk assessment time from 48 hours to 2 hours",
        "Improved accuracy by 35% compared to manual processes",
        "Saved $2.5M annually in operational costs",
        "Enabled real-time portfolio monitoring and alerts"
      ],
      technologies: ["Machine Learning", "Natural Language Processing", "Real-time Analytics", "Cloud Computing"],
      duration: "6 months",
      team: "8 developers, 2 data scientists, 1 project manager"
    },
    {
      id: 2,
      title: "Quantum Computing for Drug Discovery",
      client: "Pharmaceutical Research Institute",
      industry: "Healthcare & Life Sciences",
      challenge: "Traditional drug discovery methods were computationally expensive and time-consuming, limiting the ability to explore complex molecular interactions.",
      solution: "Implemented quantum computing algorithms to simulate molecular dynamics and predict drug-protein interactions with unprecedented accuracy.",
      results: [
        "Accelerated drug discovery process by 10x",
        "Identified 3 promising drug candidates in 6 months",
        "Reduced computational costs by 60%",
        "Improved prediction accuracy by 40%"
      ],
      technologies: ["Quantum Computing", "Molecular Dynamics", "Machine Learning", "High-Performance Computing"],
      duration: "12 months",
      team: "6 quantum researchers, 4 chemists, 3 software engineers"
    },
    {
      id: 3,
      title: "Cybersecurity Threat Intelligence System",
      client: "Fortune 500 Technology Company",
      industry: "Technology",
      challenge: "The company faced sophisticated cyber threats that required real-time detection and response capabilities to protect critical infrastructure.",
      solution: "Built an AI-powered threat intelligence platform that continuously monitors network traffic, detects anomalies, and automatically responds to security threats.",
      results: [
        "Reduced security incident response time by 80%",
        "Prevented 95% of attempted cyber attacks",
        "Achieved SOC 2 Type II compliance",
        "Saved $5M in potential security breach costs"
      ],
      technologies: ["AI/ML", "Cybersecurity", "Real-time Monitoring", "Automated Response"],
      duration: "8 months",
      team: "10 security engineers, 3 AI specialists, 2 DevOps engineers"
    },
    {
      id: 4,
      title: "Blockchain Supply Chain Transparency Platform",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Complex supply chains made it difficult to track product origins, ensure quality standards, and maintain compliance across multiple countries.",
      solution: "Developed a blockchain-based platform that provides end-to-end visibility into the supply chain, from raw materials to finished products.",
      results: [
        "Achieved 100% supply chain transparency",
        "Reduced compliance audit time by 70%",
        "Improved supplier accountability and quality",
        "Enhanced customer trust and brand reputation"
      ],
      technologies: ["Blockchain", "IoT", "Smart Contracts", "Cloud Infrastructure"],
      duration: "10 months",
      team: "7 blockchain developers, 4 IoT specialists, 2 business analysts"
    },
    {
      id: 5,
      title: "Cloud-Native Microservices Architecture",
      client: "E-commerce Platform",
      industry: "Retail & E-commerce",
      challenge: "Legacy monolithic architecture couldn't handle increasing user traffic and required frequent maintenance windows that affected customer experience.",
      solution: "Migrated to a cloud-native microservices architecture with automated scaling, continuous deployment, and improved fault tolerance.",
      results: [
        "Improved system uptime from 95% to 99.9%",
        "Reduced deployment time from 4 hours to 15 minutes",
        "Handled 5x increase in user traffic",
        "Reduced infrastructure costs by 30%"
      ],
      technologies: ["Microservices", "Kubernetes", "Docker", "AWS/Azure", "CI/CD"],
      duration: "14 months",
      team: "12 developers, 4 DevOps engineers, 2 architects"
    },
    {
      id: 6,
      title: "AI-Powered Customer Service Automation",
      client: "Telecommunications Provider",
      industry: "Telecommunications",
      challenge: "High customer service costs and long wait times were affecting customer satisfaction and retention rates.",
      solution: "Implemented AI-powered chatbots and virtual assistants that handle common customer inquiries and route complex issues to human agents.",
      results: [
        "Reduced customer service costs by 45%",
        "Improved customer satisfaction scores by 25%",
        "Reduced average response time from 15 minutes to 2 minutes",
        "Handled 70% of customer inquiries automatically"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "Chatbots", "API Integration"],
      duration: "7 months",
      team: "6 AI engineers, 3 UX designers, 2 business analysts"
    }
  ];

  const industries = [
    "All Industries",
    "Financial Services",
    "Healthcare & Life Sciences",
    "Technology",
    "Manufacturing",
    "Retail & E-commerce",
    "Telecommunications"
  ];

  const [selectedIndustry, setSelectedIndustry] = React.useState("All Industries");

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === "All Industries" || study.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Real Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped organizations across industries transform their operations, 
              improve efficiency, and achieve measurable business outcomes through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-blue-400 font-medium">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-blue-400" />
                        Challenge
                      </h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-blue-400" />
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="text-blue-400 font-semibold text-sm mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-blue-400 font-semibold text-sm mb-2">Project Details</h5>
                      <div className="text-xs text-gray-300 space-y-1">
                        <p><strong>Duration:</strong> {study.duration}</p>
                        <p><strong>Team:</strong> {study.team}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Success by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantifiable results that demonstrate the value we deliver to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise can help transform your business 
            and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;