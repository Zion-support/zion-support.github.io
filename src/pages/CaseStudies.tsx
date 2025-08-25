import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex data silos and manual reporting processes causing 3-week delays in business insights",
      solution: "Implemented AI-driven business intelligence platform with autonomous data processing",
      results: [
        "Reduced reporting time from 3 weeks to 24 hours",
        "Increased data accuracy by 99.7%",
        "Generated $2.3M in cost savings annually",
        "Improved decision-making speed by 85%"
      ],
      technologies: ["AI Business Intelligence", "Data Automation", "Real-time Analytics"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Global Financial Services Inc",
      industry: "Financial Services",
      challenge: "Traditional encryption methods vulnerable to quantum computing threats",
      solution: "Deployed quantum-resistant security framework with AI-powered threat detection",
      results: [
        "Enhanced security posture by 300%",
        "Reduced security incidents by 95%",
        "Achieved SOC2 Type II compliance in 6 months",
        "Protected $50B+ in financial assets"
      ],
      technologies: ["Quantum Cryptography", "AI Security", "SOC2 Compliance"],
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "5G Enterprise Network Optimization",
      company: "Tech Innovation Hub",
      industry: "Technology",
      challenge: "Network congestion and poor performance affecting 10,000+ users",
      solution: "Implemented AI-driven 5G network optimization with autonomous traffic management",
      results: [
        "Increased network performance by 400%",
        "Reduced latency by 85%",
        "Improved user experience scores by 92%",
        "Cut operational costs by 60%"
      ],
      technologies: ["5G Networks", "AI Optimization", "Network Automation"],
      icon: Network,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Autonomous DevOps Platform Deployment",
      company: "E-commerce Giant",
      industry: "Retail",
      challenge: "Manual deployment processes causing 40% deployment failures and slow time-to-market",
      solution: "Built autonomous DevOps platform with AI-powered testing and deployment",
      results: [
        "Reduced deployment failures by 95%",
        "Accelerated time-to-market by 70%",
        "Improved system reliability to 99.99%",
        "Cut operational overhead by 80%"
      ],
      technologies: ["Autonomous DevOps", "AI Testing", "Continuous Deployment"],
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "AI-Powered IT Asset Management",
      company: "Healthcare Network",
      industry: "Healthcare",
      challenge: "Inefficient IT asset tracking causing $2M in annual losses",
      solution: "Implemented AI-driven asset management system with predictive maintenance",
      results: [
        "Eliminated asset loss completely",
        "Reduced maintenance costs by 65%",
        "Improved asset utilization by 40%",
        "Enhanced compliance reporting by 100%"
      ],
      technologies: ["AI Asset Management", "Predictive Maintenance", "IoT Integration"],
      icon: Database,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Quantum Neural Network Research Platform",
      company: "Research University",
      industry: "Education & Research",
      challenge: "Limited computational power for complex neural network research",
      solution: "Deployed quantum-enhanced neural network platform for advanced AI research",
      results: [
        "Accelerated research by 1000x",
        "Enabled breakthrough discoveries in 6 months",
        "Published 15 peer-reviewed papers",
        "Secured $10M in research funding"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "AI Research"],
      icon: Brain,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const industries = [
    { name: "Manufacturing", count: 12, icon: Building2 },
    { name: "Financial Services", count: 8, icon: Shield },
    { name: "Healthcare", count: 15, icon: Users },
    { name: "Technology", count: 20, icon: Globe },
    { name: "Retail", count: 6, icon: TrendingUp },
    { name: "Education", count: 4, icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Transform Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how leading organizations leverage Zion Tech Group's cutting-edge AI and quantum technologies 
              to achieve breakthrough results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              Our solutions have delivered measurable results across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-cyan-400 font-bold">{industry.count}+ Cases</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real organizations using our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}>
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{study.industry}</p>
                      <p className="text-sm text-cyan-400 font-semibold">{study.company}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More About This Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have transformed their operations with our AI and quantum technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}