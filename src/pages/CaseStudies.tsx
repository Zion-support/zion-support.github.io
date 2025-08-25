import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis processing"
      ],
      technologies: ["AI/ML", "Healthcare Analytics", "Predictive Modeling"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof security against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption coverage",
        "60% reduction in security incidents",
        "Enhanced compliance with regulatory requirements"
      ],
      technologies: ["Quantum Security", "Cybersecurity", "Compliance"],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies",
      solution: "Implemented AI-driven autonomous business operations platform",
      results: [
        "45% reduction in process execution time",
        "35% increase in operational efficiency",
        "Real-time decision making capabilities"
      ],
      technologies: ["AI Automation", "Business Process Management", "IoT"],
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      company: "Technology Enterprise",
      industry: "Technology",
      challenge: "Legacy network infrastructure limiting growth and innovation",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing",
      results: [
        "10x faster data transfer speeds",
        "99.9% network uptime reliability",
        "Scalable infrastructure for future growth"
      ],
      technologies: ["5G Networks", "Edge Computing", "Network Infrastructure"],
      icon: Cpu,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      title: "AI Research Assistant Implementation",
      company: "Research Institute",
      industry: "Research & Development",
      challenge: "Manual research processes slowing down innovation cycles",
      solution: "Deployed AI-powered research assistant with autonomous capabilities",
      results: [
        "50% faster research completion",
        "Enhanced data analysis accuracy",
        "Automated literature review processes"
      ],
      technologies: ["AI Research", "Natural Language Processing", "Data Analytics"],
      icon: Brain,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation",
      company: "SaaS Platform",
      industry: "Software as a Service",
      challenge: "Complex compliance requirements and manual audit processes",
      solution: "Implemented automated SOC2 compliance monitoring and reporting",
      results: [
        "90% reduction in compliance audit time",
        "Continuous compliance monitoring",
        "Automated report generation"
      ],
      technologies: ["Compliance Automation", "Security Monitoring", "Audit Management"],
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, 
              quantum technology, and innovative solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${study.color} p-3 mb-4`}>
                  <study.icon className="w-full h-full text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{study.company}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm mb-3">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of companies that have transformed their business with Zion Tech Group's 
              innovative solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                View More Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}