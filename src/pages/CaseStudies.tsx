import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Cpu,
  Brain,
  DollarSign,
  ChartBar,
  Clock
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Optimization",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Implemented AI-driven personalization and recommendation engine",
      results: {
        conversionRate: "+45%",
        revenue: "+$2.3M",
        customerSatisfaction: "+38%"
      },
      duration: "6 months",
      team: "8 specialists",
      technologies: ["Machine Learning", "Python", "TensorFlow", "React"]
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient diagnosis processes",
      solution: "Built comprehensive data analytics platform with predictive modeling",
      results: {
        diagnosisAccuracy: "+62%",
        processingTime: "-75%",
        costSavings: "+$1.8M"
      },
      duration: "8 months",
      team: "12 specialists",
      technologies: ["Data Science", "Python", "PostgreSQL", "Docker"]
    },
    {
      id: 3,
      title: "Financial Risk Management System",
      company: "SecureBank Ltd.",
      industry: "Fintech",
      challenge: "Manual risk assessment processes and regulatory compliance",
      solution: "Developed automated risk scoring and compliance monitoring system",
      results: {
        riskAccuracy: "+58%",
        processingSpeed: "+300%",
        complianceRate: "99.8%"
      },
      duration: "10 months",
      team: "15 specialists",
      technologies: ["AI/ML", "Java", "Kubernetes", "Apache Kafka"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Success
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Stories</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-semibold">{study.industry}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm">{study.company}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-cyan-400" />
                      Challenge
                    </h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-cyan-400" />
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {study.team}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how we can help transform your business with innovative technology solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
              View All Case Studies
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;