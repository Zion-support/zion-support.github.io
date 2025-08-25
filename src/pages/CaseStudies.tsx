import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Platform",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Complex patient data analysis across multiple facilities",
      solution: "Custom AI analytics platform with real-time insights",
      results: [
        "40% reduction in diagnosis time",
        "25% improvement in patient outcomes",
        "60% cost savings in data processing"
      ],
      technologies: ["Machine Learning", "Big Data", "Cloud Computing", "AI/ML"],
      image: "/images/case-studies/healthcare-analytics.jpg"
    },
    {
      id: 2,
      title: "Quantum Computing Financial Modeling",
      client: "Investment Banking Firm",
      industry: "Finance",
      challenge: "Complex financial risk modeling requiring quantum-level precision",
      solution: "Quantum-inspired algorithms for portfolio optimization",
      results: [
        "3x faster risk calculations",
        "15% improvement in portfolio returns",
        "Real-time market analysis capabilities"
      ],
      technologies: ["Quantum Computing", "Financial Modeling", "Risk Analytics", "High-Performance Computing"],
      image: "/images/case-studies/quantum-finance.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Threat Intelligence System",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Advanced persistent threats targeting industrial systems",
      solution: "AI-powered threat detection and response platform",
      results: [
        "99.9% threat detection rate",
        "90% reduction in response time",
        "Zero successful breaches in 18 months"
      ],
      technologies: ["Cybersecurity", "AI/ML", "Threat Intelligence", "Industrial IoT"],
      image: "/images/case-studies/cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Digital Transformation for Retail Chain",
      client: "National Retail Corporation",
      industry: "Retail",
      challenge: "Legacy systems preventing omnichannel growth",
      solution: "Complete digital transformation with cloud-native architecture",
      results: [
        "50% increase in online sales",
        "30% reduction in operational costs",
        "Seamless omnichannel experience"
      ],
      technologies: ["Cloud Computing", "Microservices", "API Integration", "Data Analytics"],
      image: "/images/case-studies/retail-transformation.jpg"
    },
    {
      id: 5,
      title: "IoT Smart City Infrastructure",
      client: "Municipal Government",
      industry: "Government",
      challenge: "Managing complex urban infrastructure systems",
      solution: "IoT platform for smart city management",
      results: [
        "20% reduction in energy consumption",
        "35% improvement in traffic flow",
        "Real-time infrastructure monitoring"
      ],
      technologies: ["IoT", "Smart Cities", "Data Analytics", "Cloud Infrastructure"],
      image: "/images/case-studies/smart-city.jpg"
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Transparency",
      client: "Global Logistics Company",
      industry: "Logistics",
      challenge: "Lack of transparency in complex supply chains",
      solution: "Blockchain-based supply chain tracking system",
      results: [
        "100% supply chain visibility",
        "45% reduction in fraud",
        "Real-time tracking and verification"
      ],
      technologies: ["Blockchain", "Supply Chain", "Smart Contracts", "IoT Integration"],
      image: "/images/case-studies/blockchain-logistics.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-full text-cyan-400">
              AI/ML Solutions
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-full text-blue-400">
              Quantum Computing
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-purple-400">
              Cybersecurity
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-full text-green-400">
              Digital Transformation
            </span>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400">{study.client}</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mt-2">
                      {study.industry}
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2 flex items-center">
                      <LightBulbIcon className="w-5 h-5 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2 flex items-center">
                      <CogIcon className="w-5 h-5 mr-2" />
                      Solution
                    </h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                    <ChartBarIcon className="w-5 h-5 mr-2" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-3 flex items-center">
                    <GlobeAltIcon className="w-5 h-5 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                View More Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;