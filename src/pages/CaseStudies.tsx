import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and AI integration for predictive maintenance",
      solution: "Implemented AI-powered IoT platform with predictive analytics",
      results: [
        "30% reduction in downtime",
        "25% increase in production efficiency",
        "$2M annual cost savings"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Predictive Analytics"],
      image: "/images/case-studies/manufacturing-ai.jpg",
      category: "AI & Digital Transformation"
    },
    {
      id: 2,
      title: "Cybersecurity Overhaul for Healthcare Provider",
      company: "Metro Health Systems",
      industry: "Healthcare",
      challenge: "Compliance with HIPAA and SOC2 requirements while improving security posture",
      solution: "Comprehensive security assessment and automated compliance platform",
      results: [
        "100% SOC2 compliance achieved",
        "Zero security breaches in 18 months",
        "40% reduction in security incidents"
      ],
      technologies: ["SOC2 Automation", "Threat Detection", "Compliance Management"],
      image: "/images/case-studies/healthcare-security.jpg",
      category: "Cybersecurity & Compliance"
    },
    {
      id: 3,
      title: "Quantum Computing Implementation for Financial Services",
      company: "Quantum Finance Solutions",
      industry: "Financial Services",
      challenge: "Optimization of complex financial modeling and risk assessment",
      solution: "Quantum neural network platform for portfolio optimization",
      results: [
        "50% faster risk calculations",
        "15% improvement in portfolio returns",
        "Real-time market analysis capabilities"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Financial Modeling"],
      image: "/images/case-studies/quantum-finance.jpg",
      category: "Quantum Technology"
    },
    {
      id: 4,
      title: "5G Enterprise Network for Smart City Infrastructure",
      company: "Smart City Initiative",
      industry: "Government & Infrastructure",
      challenge: "High-speed connectivity for IoT devices and smart city applications",
      solution: "Private 5G network with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "99.9% network uptime",
        "Support for 100,000+ IoT devices"
      ],
      technologies: ["5G Networks", "Edge Computing", "IoT", "Network Optimization"],
      image: "/images/case-studies/5g-smart-city.jpg",
      category: "5G & Infrastructure"
    },
    {
      id: 5,
      title: "Micro SAAS Platform for Small Business Automation",
      company: "Local Business Alliance",
      industry: "Retail & Services",
      challenge: "Affordable automation solutions for small businesses",
      solution: "Custom micro SAAS platform with AI-powered automation",
      results: [
        "60% reduction in manual processes",
        "25% increase in customer satisfaction",
        "ROI achieved in 6 months"
      ],
      technologies: ["Micro SAAS", "AI Automation", "Business Process Automation"],
      image: "/images/case-studies/micro-saas.jpg",
      category: "Micro SAAS Solutions"
    },
    {
      id: 6,
      title: "AI Research Assistant for Academic Institution",
      company: "Tech University Research Center",
      industry: "Education & Research",
      challenge: "Accelerating research processes and collaboration across departments",
      solution: "AI-powered research assistant with autonomous capabilities",
      results: [
        "40% faster research completion",
        "Improved cross-department collaboration",
        "Enhanced research quality and reproducibility"
      ],
      technologies: ["AI Research", "Natural Language Processing", "Collaboration Tools"],
      image: "/images/case-studies/ai-research.jpg",
      category: "AI Research & Development"
    }
  ];

  const categories = [
    "All",
    "AI & Digital Transformation",
    "Cybersecurity & Compliance",
    "Quantum Technology",
    "5G & Infrastructure",
    "Micro SAAS Solutions",
    "AI Research & Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how organizations are transforming their businesses with Zion Tech Group's 
              cutting-edge solutions and achieving remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Company Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-sm text-gray-400">{study.industry}</p>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                {study.title}
              </h4>

              {/* Challenge */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h5>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h5>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results</h5>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and deliver 
              measurable results like the ones you see above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}