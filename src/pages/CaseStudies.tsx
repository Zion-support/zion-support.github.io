import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Manufacturing Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes, high defect rates, and limited predictive maintenance capabilities.",
      solution: "Implemented AI autonomous systems with predictive analytics and automated quality control.",
      results: [
        "Production efficiency increased by 45%",
        "Defect rates reduced by 78%",
        "Maintenance costs decreased by 60%",
        "ROI achieved in 8 months"
      ],
      icon: CpuChipIcon,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "5G Network Infrastructure Overhaul",
      company: "TechConnect Solutions",
      industry: "Telecommunications",
      challenge: "Outdated network infrastructure unable to support modern enterprise demands and IoT deployments.",
      solution: "Deployed comprehensive 5G enterprise solutions with network slicing and edge computing.",
      results: [
        "Network speed increased by 100x",
        "Latency reduced to under 1ms",
        "IoT device support increased by 500%",
        "Customer satisfaction improved by 85%"
      ],
      icon: GlobeAltIcon,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Autonomous Security Implementation",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Increasing cyber threats, manual security monitoring, and compliance requirements.",
      solution: "Deployed AI autonomous security platform with 24/7 threat detection and automated response.",
      results: [
        "Security incidents reduced by 95%",
        "Threat response time reduced to under 30 seconds",
        "Compliance automation achieved 100%",
        "Security operations costs reduced by 70%"
      ],
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Quantum Computing Research Platform",
      company: "Quantum Research Institute",
      industry: "Research & Development",
      challenge: "Limited computational power for complex scientific simulations and research projects.",
      solution: "Implemented quantum neural network platform with advanced AI algorithms.",
      results: [
        "Research speed increased by 300%",
        "Complex simulations completed 10x faster",
        "Breakthrough discoveries accelerated",
        "Research funding success rate improved by 150%"
      ],
      icon: RocketLaunchIcon,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "IoT Data Analytics Revolution",
      company: "SmartCity Municipal",
      industry: "Government",
      challenge: "Inefficient city services, limited data insights, and poor resource allocation.",
      solution: "Deployed comprehensive IoT data analytics platform with AI-powered insights.",
      results: [
        "City services efficiency improved by 65%",
        "Resource allocation optimized by 40%",
        "Public safety response time reduced by 50%",
        "Citizen satisfaction increased by 75%"
      ],
      icon: ChartBarIcon,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "AI Content Generation Automation",
      company: "MediaCorp International",
      industry: "Media & Entertainment",
      challenge: "High content production costs, slow turnaround times, and inconsistent quality.",
      solution: "Implemented AI content generation platform with automated creation and optimization.",
      results: [
        "Content production speed increased by 400%",
        "Production costs reduced by 65%",
        "Content quality improved by 85%",
        "Market reach expanded by 200%"
      ],
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Telecommunications",
    "Government",
    "Retail",
    "Education",
    "Transportation"
  ];

  const technologies = [
    "AI & Machine Learning",
    "5G Networks",
    "IoT & Edge Computing",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Blockchain",
    "Robotic Process Automation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group. See how our AI, 5G, and technology solutions transform businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI transformation, 5G implementation, technology ROI, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how leading organizations across industries are transforming their 
              operations with Zion Tech Group's cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed case studies showcasing the transformative power of our 
              technology solutions across diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology solutions are designed to work across all industries, 
              providing tailored solutions for your specific business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Deploy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that drive innovation and deliver measurable 
              business results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their 
              operations with Zion Tech Group's innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Transformation
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
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