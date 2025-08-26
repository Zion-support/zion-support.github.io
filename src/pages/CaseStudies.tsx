import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Financial Analytics Platform",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex data analysis across multiple markets requiring real-time insights and predictive modeling",
      solution: "Developed a comprehensive AI platform using machine learning algorithms for market analysis, risk assessment, and investment recommendations",
      results: [
        "40% improvement in investment decision accuracy",
        "60% reduction in analysis time",
        "$2.5M annual cost savings",
        "Real-time market monitoring across 50+ markets"
      ],
      technologies: ["Machine Learning", "Python", "AWS", "React", "PostgreSQL"],
      image: "📊",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Cloud Migration & DevOps Transformation",
      client: "Healthcare Technology Company",
      industry: "Healthcare",
      challenge: "Legacy on-premise infrastructure causing scalability issues and high maintenance costs",
      solution: "Complete cloud migration to AWS with CI/CD pipeline implementation and infrastructure as code",
      results: [
        "99.9% uptime achieved",
        "70% reduction in infrastructure costs",
        "Deployment time reduced from weeks to hours",
        "Enhanced security compliance (HIPAA, SOC2)"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      image: "☁️",
      category: "Cloud & DevOps"
    },
    {
      id: 3,
      title: "Cybersecurity Threat Detection System",
      client: "E-commerce Platform",
      industry: "Retail",
      challenge: "Increasing cyber threats and need for real-time security monitoring across multiple platforms",
      solution: "Implemented advanced threat detection using AI and machine learning with 24/7 monitoring",
      results: [
        "95% threat detection accuracy",
        "Zero successful breaches in 18 months",
        "50% reduction in false positives",
        "Real-time threat response within seconds"
      ],
      technologies: ["AI/ML", "SIEM", "Threat Intelligence", "Python", "Elasticsearch"],
      image: "🛡️",
      category: "Cybersecurity"
    },
    {
      id: 4,
      title: "Digital Transformation for Manufacturing",
      client: "Industrial Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Outdated processes and lack of digital integration across production facilities",
      solution: "Comprehensive digital transformation including IoT integration, predictive maintenance, and supply chain optimization",
      results: [
        "25% increase in production efficiency",
        "30% reduction in maintenance costs",
        "Real-time production monitoring",
        "Improved supply chain visibility"
      ],
      technologies: ["IoT", "Predictive Analytics", "Cloud Computing", "Mobile Apps", "Data Analytics"],
      image: "🏭",
      category: "Digital Transformation"
    },
    {
      id: 5,
      title: "Quantum Computing Research Platform",
      client: "Research University",
      industry: "Education & Research",
      challenge: "Need for advanced quantum computing research tools and simulation capabilities",
      solution: "Developed a quantum computing research platform with simulation tools and algorithm testing capabilities",
      results: [
        "10x faster quantum algorithm testing",
        "Support for 100+ researchers",
        "Published 15+ research papers",
        "Industry partnerships established"
      ],
      technologies: ["Quantum Computing", "Python", "Qiskit", "Cloud Computing", "Research Tools"],
      image: "⚛️",
      category: "Quantum Technology"
    },
    {
      id: 6,
      title: "Micro SAAS Customer Management System",
      client: "Startup SaaS Company",
      industry: "Technology",
      challenge: "Rapidly growing customer base requiring scalable customer management and billing solutions",
      solution: "Built a comprehensive customer management system with automated billing, analytics, and support tools",
      results: [
        "300% increase in customer retention",
        "Automated billing reduced errors by 90%",
        "Customer support response time: <2 hours",
        "Scalable to 100,000+ users"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: "💻",
      category: "Micro SAAS"
    }
  ];

  const categories = ["All", "AI Solutions", "Cloud & DevOps", "Cybersecurity", "Digital Transformation", "Quantum Technology", "Micro SAAS"];
  const industries = ["All", "Financial Services", "Healthcare", "Retail", "Manufacturing", "Education & Research", "Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries transform their operations 
            with innovative technology solutions. Our success stories demonstrate measurable results 
            and lasting impact.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4 mt-6">Filter by Industry</h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{study.image}</div>
                <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {study.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">
                  <span className="font-medium text-gray-300">Client:</span> {study.client}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-gray-300">Industry:</span> {study.industry}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-400">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Solution:</h4>
                <p className="text-sm text-gray-400">{study.solution}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Results:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                to={`/case-studies/${study.id}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
              >
                Read Full Case Study
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-gray-300">Value Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business operations 
            and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;