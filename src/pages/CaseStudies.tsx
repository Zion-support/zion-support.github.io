import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  Star,
  Award,
  Lightbulb
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Platform",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Custom AI platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% reduction in readmission rates",
        "25% improvement in patient satisfaction scores",
        "40% faster diagnosis times",
        "$2.5M annual cost savings"
      ],
      technologies: ["AI/ML", "Data Analytics", "Cloud Infrastructure", "Healthcare APIs"],
      duration: "6 months",
      team: "8 developers + 2 data scientists",
      testimonial: "Zion Tech Group transformed our data capabilities and revolutionized how we approach patient care.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof security against quantum computing threats",
      solution: "Quantum-resistant encryption protocols and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption implementation",
        "60% reduction in security incidents",
        "Zero data breaches in 18 months",
        "Compliance with all regulatory requirements"
      ],
      technologies: ["Quantum Cryptography", "AI Security", "Blockchain", "Zero Trust Architecture"],
      duration: "8 months",
      team: "12 security specialists + 4 AI engineers",
      testimonial: "Zion Tech Group's quantum security approach has positioned us years ahead of the competition.",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing",
      challenge: "Manual process inefficiencies and lack of real-time decision making",
      solution: "AI-driven autonomous platform for end-to-end business process automation",
      results: [
        "45% increase in operational efficiency",
        "70% reduction in manual errors",
        "24/7 autonomous operations",
        "$5.2M annual cost reduction"
      ],
      technologies: ["AI Automation", "IoT Integration", "Predictive Analytics", "RPA"],
      duration: "10 months",
      team: "15 engineers + 3 business analysts",
      testimonial: "The autonomous platform has transformed our manufacturing operations beyond recognition.",
      rating: 5,
      featured: false
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      client: "Technology Corporation",
      industry: "Technology",
      challenge: "Legacy network infrastructure unable to support modern business demands",
      solution: "End-to-end 5G enterprise network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "99.99% network uptime",
        "50% reduction in latency",
        "Support for 10,000+ concurrent users"
      ],
      technologies: ["5G Networks", "Edge Computing", "SDN", "Network Security"],
      duration: "12 months",
      team: "20 network engineers + 5 security specialists",
      testimonial: "Zion Tech Group delivered a 5G network that exceeded all our expectations.",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      title: "Micro SAAS Platform for SMBs",
      client: "Retail Chain",
      industry: "Retail",
      challenge: "Need for affordable, scalable software solutions for multiple locations",
      solution: "Custom micro SAAS platform with multi-tenant architecture",
      results: [
        "80% reduction in software licensing costs",
        "Real-time inventory management across 50+ locations",
        "Improved customer experience",
        "Scalable to 200+ locations"
      ],
      technologies: ["Microservices", "Cloud Native", "Multi-tenancy", "API-first Design"],
      duration: "4 months",
      team: "6 developers + 2 DevOps engineers",
      testimonial: "The micro SAAS platform has revolutionized how we manage our retail operations.",
      rating: 5,
      featured: false
    }
  ];

  const industries = ["All", "Healthcare", "Financial Services", "Manufacturing", "Technology", "Retail", "Government"];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredCaseStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {" "}Transform Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how Zion Tech Group's innovative solutions have revolutionized businesses across industries, 
              delivering measurable results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">50+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">$100M+ Value Delivered</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">200+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 ${
                  study.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {study.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-400">Featured Case Study</span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-medium">{study.client}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.team}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-cyan-500/50 pl-4 mb-6">
                  <p className="text-gray-300 italic">"{study.testimonial}"</p>
                </blockquote>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let Zion Tech Group transform your business with cutting-edge AI solutions, 
                quantum technology, and innovative digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Schedule a Consultation
                </button>
                <button className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Download Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}