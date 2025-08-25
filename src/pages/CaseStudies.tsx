import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  Award,
  BarChart3,
  Shield,
  Zap,
  Brain,
  Globe,
  ShoppingBag
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Manual patient data analysis was taking 40+ hours per week, leading to delayed treatment decisions and increased operational costs.",
      solution: "Implemented AI-powered analytics platform with real-time patient monitoring and predictive diagnosis capabilities.",
      results: [
        "Reduced data analysis time by 85%",
        "Improved patient outcomes by 23%",
        "Saved $2.4M annually in operational costs",
        "Enhanced staff productivity by 60%"
      ],
      metrics: {
        efficiency: "85%",
        costSavings: "$2.4M",
        timeReduction: "40hrs → 6hrs",
        roi: "340%"
      },
      technologies: ["AI Analytics", "Machine Learning", "Real-time Monitoring", "Predictive Modeling"],
      duration: "6 months",
      teamSize: "8 specialists"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Traditional encryption methods were vulnerable to quantum computing threats, requiring immediate future-proofing of security infrastructure.",
      solution: "Deployed quantum-resistant cryptography and AI-powered threat detection systems across all digital assets.",
      results: [
        "Enhanced security posture by 95%",
        "Reduced security incidents by 78%",
        "Achieved SOC2 Type II compliance",
        "Future-proofed against quantum threats"
      ],
      metrics: {
        securityImprovement: "95%",
        incidentReduction: "78%",
        compliance: "100%",
        threatDetection: "99.9%"
      },
      technologies: ["Quantum Cryptography", "AI Security", "SOC2 Automation", "Threat Intelligence"],
      duration: "8 months",
      teamSize: "12 specialists"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes were causing bottlenecks, errors, and inefficiencies across 15 departments.",
      solution: "Built comprehensive autonomous business operations platform with AI-driven process automation and decision-making capabilities.",
      results: [
        "Automated 70% of business processes",
        "Reduced operational errors by 92%",
        "Increased productivity by 45%",
        "Cut operational costs by $1.8M annually"
      ],
      metrics: {
        automation: "70%",
        errorReduction: "92%",
        productivity: "45%",
        costSavings: "$1.8M"
      },
      technologies: ["AI Automation", "Process Mining", "RPA", "Business Intelligence"],
      duration: "10 months",
      teamSize: "15 specialists"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      client: "Technology Startup",
      industry: "Technology",
      challenge: "Legacy network infrastructure couldn't support growing data demands and IoT device proliferation.",
      solution: "Designed and implemented enterprise-grade 5G network with edge computing capabilities and IoT integration.",
      results: [
        "Increased network speed by 20x",
        "Reduced latency by 90%",
        "Supported 10,000+ IoT devices",
        "Enhanced scalability for future growth"
      ],
      metrics: {
        speedIncrease: "20x",
        latencyReduction: "90%",
        deviceSupport: "10,000+",
        uptime: "99.99%"
      },
      technologies: ["5G Networks", "Edge Computing", "IoT Integration", "Network Security"],
      duration: "7 months",
      teamSize: "10 specialists"
    },
    {
      id: 5,
      title: "AI-Powered IT Asset Management",
      client: "Enterprise Corporation",
      industry: "Technology",
      challenge: "Manual IT asset tracking was inefficient, leading to lost equipment, compliance issues, and unnecessary purchases.",
      solution: "Implemented AI-driven IT asset management system with automated tracking, predictive maintenance, and cost optimization.",
      results: [
        "Reduced asset loss by 95%",
        "Optimized IT spending by 30%",
        "Improved compliance reporting by 100%",
        "Enhanced asset lifecycle management"
      ],
      metrics: {
        assetRecovery: "95%",
        costOptimization: "30%",
        compliance: "100%",
        efficiency: "85%"
      },
      technologies: ["AI Analytics", "IoT Sensors", "Predictive Maintenance", "Compliance Automation"],
      duration: "5 months",
      teamSize: "6 specialists"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Users, count: 12, color: "from-blue-500 to-cyan-500" },
    { name: "Financial Services", icon: DollarSign, count: 8, color: "from-green-500 to-emerald-500" },
    { name: "Manufacturing", icon: Target, count: 15, color: "from-orange-500 to-red-500" },
    { name: "Technology", icon: Zap, count: 20, color: "from-purple-500 to-pink-500" },
    { name: "Retail", icon: ShoppingBag, count: 6, color: "from-indigo-500 to-blue-500" },
    { name: "Government", icon: Shield, count: 4, color: "from-gray-500 to-slate-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how Zion Tech Group has empowered organizations across industries with cutting-edge AI solutions, 
              quantum technology, and digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">50+</span> Successful Projects
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">95%</span> Client Satisfaction
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">$15M+</span> Client ROI
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300">Transforming businesses across diverse sectors with innovative technology solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 mb-4">{industry.count} Case Studies</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${industry.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${(industry.count / 20) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300">Real results from real clients across various industries</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies & Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {study.duration}</span>
                  <span>Team: {study.teamSize}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their business with Zion Tech Group's 
              cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;