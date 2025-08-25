import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Building, 
  Shield, 
  Brain,
  Zap,
  Globe,
  Award,
  ArrowRight
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "40% improvement in early disease detection",
        "25% reduction in readmission rates",
        "30% faster diagnosis times",
        "$2.5M annual cost savings"
      ],
      technologies: ["AI/ML", "Healthcare Analytics", "Predictive Modeling", "Data Integration"],
      image: "/images/case-studies/healthcare-analytics.jpg",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof cybersecurity against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption coverage",
        "60% reduction in security incidents",
        "99.99% uptime for security systems",
        "Compliance with international security standards"
      ],
      technologies: ["Quantum Cryptography", "Advanced Threat Detection", "Zero-Trust Architecture", "Compliance Automation"],
      image: "/images/case-studies/quantum-security.jpg",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies in operations",
      solution: "Implemented AI-powered autonomous business operations platform with intelligent automation",
      results: [
        "70% reduction in manual processing time",
        "45% improvement in operational efficiency",
        "90% automation of routine tasks",
        "$3.2M annual operational cost savings"
      ],
      technologies: ["AI Automation", "Process Optimization", "Business Intelligence", "Workflow Management"],
      image: "/images/case-studies/autonomous-operations.jpg",
      category: "Business Operations"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      client: "Technology Company",
      industry: "Technology",
      challenge: "Legacy network infrastructure limiting growth and innovation capabilities",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "99.9% network reliability",
        "50% reduction in latency",
        "Support for 10,000+ concurrent users"
      ],
      technologies: ["5G Networks", "Edge Computing", "Network Security", "Infrastructure Management"],
      image: "/images/case-studies/5g-network.jpg",
      category: "Infrastructure"
    },
    {
      id: 5,
      title: "AI-Powered IT Asset Management",
      client: "Enterprise Corporation",
      industry: "Technology",
      challenge: "Inefficient IT asset tracking and management leading to cost overruns",
      solution: "Implemented intelligent IT asset management system with predictive analytics",
      results: [
        "80% improvement in asset utilization",
        "30% reduction in IT costs",
        "Real-time asset tracking and monitoring",
        "Automated compliance reporting"
      ],
      technologies: ["AI Analytics", "Asset Management", "Predictive Maintenance", "Compliance Automation"],
      image: "/images/case-studies/it-asset-management.jpg",
      category: "IT Management"
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation",
      client: "SaaS Startup",
      industry: "Technology",
      challenge: "Manual compliance processes consuming significant time and resources",
      solution: "Automated SOC2 compliance framework with continuous monitoring and reporting",
      results: [
        "95% automation of compliance processes",
        "60% reduction in audit preparation time",
        "100% compliance score achievement",
        "Real-time compliance monitoring"
      ],
      technologies: ["Compliance Automation", "Security Monitoring", "Audit Management", "Risk Assessment"],
      image: "/images/case-studies/soc2-compliance.jpg",
      category: "Compliance"
    }
  ];

  const categories = ["All", "AI Solutions", "Cybersecurity", "Business Operations", "Infrastructure", "IT Management", "Compliance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div key={study.id} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {study.category}
                  </span>
                  <span className="text-gray-400 text-sm">{study.client}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your success story. 
            Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;