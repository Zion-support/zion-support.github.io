import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Award
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and AI integration for predictive maintenance",
      solution: "Implemented AI autonomous systems with quantum neural networks for real-time monitoring",
      results: [
        "40% reduction in downtime",
        "25% increase in production efficiency",
        "60% cost savings in maintenance"
      ],
      technologies: ["AI Autonomous Systems", "Quantum Neural Networks", "IoT Integration"],
      image: "/images/case-studies/manufacturing.jpg",
      rating: 5
    },
    {
      id: 2,
      title: "Cybersecurity Overhaul for Healthcare Provider",
      company: "Metro Health Systems",
      industry: "Healthcare",
      challenge: "Compliance with HIPAA and SOC2 requirements while modernizing security infrastructure",
      solution: "Comprehensive cybersecurity platform with automated compliance management",
      results: [
        "100% SOC2 compliance achieved",
        "Zero security breaches in 18 months",
        "50% reduction in security incidents"
      ],
      technologies: ["SOC2 Compliance Automation", "Advanced Threat Detection", "AI Security"],
      image: "/images/case-studies/healthcare.jpg",
      rating: 5
    },
    {
      id: 3,
      title: "Quantum Computing Implementation for Financial Services",
      company: "Quantum Financial Group",
      industry: "Financial Services",
      challenge: "Complex risk modeling and portfolio optimization requiring quantum computing capabilities",
      solution: "Quantum neural network platform for financial modeling and risk assessment",
      results: [
        "10x faster risk calculations",
        "15% improvement in portfolio returns",
        "Real-time market analysis capabilities"
      ],
      technologies: ["Quantum Neural Networks", "Financial Modeling", "Risk Analytics"],
      image: "/images/case-studies/financial.jpg",
      rating: 5
    },
    {
      id: 4,
      title: "5G Enterprise Network Deployment",
      company: "TechCorp Industries",
      industry: "Technology",
      challenge: "High-speed, low-latency network infrastructure for distributed teams",
      solution: "5G enterprise solutions with edge computing and AI optimization",
      results: [
        "99.9% network uptime",
        "10x faster data transfer",
        "Seamless remote work experience"
      ],
      technologies: ["5G Enterprise Solutions", "Edge Computing", "Network Optimization"],
      image: "/images/case-studies/5g.jpg",
      rating: 5
    },
    {
      id: 5,
      title: "AI Autonomous Business Operations Platform",
      company: "Innovation Labs Inc",
      industry: "Research & Development",
      challenge: "Automating complex business processes and decision-making workflows",
      solution: "AI autonomous business operations platform with machine learning optimization",
      results: [
        "80% automation of routine tasks",
        "30% faster decision-making",
        "Significant cost reduction in operations"
      ],
      technologies: ["AI Autonomous Systems", "Business Process Automation", "Machine Learning"],
      image: "/images/case-studies/automation.jpg",
      rating: 5
    },
    {
      id: 6,
      title: "Micro SAAS Solutions for Startup Ecosystem",
      company: "StartupHub Ventures",
      industry: "Venture Capital",
      challenge: "Scalable software solutions for portfolio companies with limited resources",
      solution: "Custom micro SAAS solutions with rapid deployment and scaling capabilities",
      results: [
        "90% faster time to market",
        "60% reduction in development costs",
        "Scalable solutions for 50+ startups"
      ],
      technologies: ["Micro SAAS Solutions", "Rapid Development", "Cloud Infrastructure"],
      image: "/images/case-studies/startup.jpg",
      rating: 5
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: Building, count: 12 },
    { name: "Healthcare", icon: Users, count: 8 },
    { name: "Financial Services", icon: TrendingUp, count: 15 },
    { name: "Technology", icon: Cpu, count: 20 },
    { name: "Retail", icon: Globe, count: 6 },
    { name: "Government", icon: Shield, count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how leading organizations are transforming their businesses with Zion Tech Group's cutting-edge solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <div key={industry.name} className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <industry.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">{industry.name}</span>
                <span className="text-xs text-gray-400">({industry.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">{study.industry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.company}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-cyan-300 border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how Zion Tech Group can help transform your business with our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}