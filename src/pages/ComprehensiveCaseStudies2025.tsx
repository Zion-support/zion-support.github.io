import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveCaseStudies2025: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🌐' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'retail', name: 'Retail', icon: '🛍️' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'technology', name: 'Technology', icon: '💻' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Revolution",
      company: "MedTech Global",
      industry: "healthcare",
      challenge: "Reduce diagnostic errors by 50% while improving patient outcomes",
      solution: "Implemented AI-powered diagnostic system with quantum-enhanced algorithms",
      results: [
        "60% reduction in diagnostic errors",
        "40% faster diagnosis times",
        "95% accuracy in early disease detection",
        "$15M annual cost savings"
      ],
      technologies: ["AI/ML", "Quantum Computing", "Computer Vision", "Predictive Analytics"],
      timeline: "12 months",
      roi: "340%",
      image: "/case-studies/healthcare-ai.jpg",
      testimonial: "The AI diagnostic system has transformed our ability to provide accurate, timely care to our patients. It's like having a team of expert radiologists available 24/7.",
      author: "Dr. Sarah Chen, Chief Medical Officer"
    },
    {
      id: 2,
      title: "Quantum-Enhanced Financial Trading",
      company: "Quantum Capital",
      industry: "finance",
      challenge: "Optimize trading algorithms for maximum returns with minimal risk",
      solution: "Deployed quantum computing for portfolio optimization and risk management",
      results: [
        "45% improvement in portfolio returns",
        "60% reduction in risk exposure",
        "Real-time processing of 10M+ data points",
        "$50M additional annual revenue"
      ],
      technologies: ["Quantum Computing", "Machine Learning", "Blockchain", "Real-time Analytics"],
      timeline: "8 months",
      roi: "280%",
      image: "/case-studies/quantum-finance.jpg",
      testimonial: "Quantum computing has given us an unprecedented edge in the financial markets. Our algorithms can now process complex scenarios that were impossible before.",
      author: "Michael Rodriguez, Chief Investment Officer"
    },
    {
      id: 3,
      title: "Autonomous Manufacturing Revolution",
      company: "AutoTech Industries",
      industry: "manufacturing",
      challenge: "Achieve 99.9% production efficiency with zero human intervention",
      solution: "Implemented fully autonomous AI-powered manufacturing system",
      results: [
        "99.9% production efficiency achieved",
        "80% reduction in production costs",
        "Zero workplace accidents",
        "24/7 continuous operation"
      ],
      technologies: ["AI/ML", "Robotics", "IoT", "Computer Vision", "Predictive Maintenance"],
      timeline: "18 months",
      roi: "420%",
      image: "/case-studies/autonomous-manufacturing.jpg",
      testimonial: "Our autonomous manufacturing system has revolutionized our production capabilities. We've achieved levels of efficiency and quality that were previously unimaginable.",
      author: "Jennifer Liu, VP of Operations"
    },
    {
      id: 4,
      title: "Neural Interface Customer Service",
      company: "RetailMax",
      industry: "retail",
      challenge: "Enhance customer experience through thought-controlled interfaces",
      solution: "Deployed non-invasive neural interface technology for customer interactions",
      results: [
        "90% improvement in customer satisfaction",
        "70% faster service delivery",
        "Accessibility for disabled customers",
        "Revolutionary shopping experience"
      ],
      technologies: ["Neural Interfaces", "AI/ML", "AR/VR", "Real-time Processing"],
      timeline: "10 months",
      roi: "250%",
      image: "/case-studies/neural-retail.jpg",
      testimonial: "The neural interface technology has created an entirely new way for customers to interact with our products. It's like shopping with your mind.",
      author: "David Park, Customer Experience Director"
    },
    {
      id: 5,
      title: "AI-Powered Educational Platform",
      company: "EduTech Solutions",
      industry: "education",
      challenge: "Personalize learning for 1M+ students with AI-driven curriculum",
      solution: "Developed adaptive learning platform with consciousness AI",
      results: [
        "85% improvement in learning outcomes",
        "60% reduction in dropout rates",
        "Personalized learning paths for each student",
        "Real-time progress tracking"
      ],
      technologies: ["AI/ML", "Consciousness AI", "Adaptive Learning", "Data Analytics"],
      timeline: "14 months",
      roi: "380%",
      image: "/case-studies/ai-education.jpg",
      testimonial: "Our AI-powered platform has transformed education. Students are learning faster and retaining more information than ever before.",
      author: "Professor Maria Gonzalez, Chief Academic Officer"
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Transparency",
      company: "LogiChain Corp",
      industry: "technology",
      challenge: "Ensure 100% transparency and traceability in global supply chain",
      solution: "Implemented blockchain-based supply chain management system",
      results: [
        "100% supply chain transparency",
        "50% reduction in fraud cases",
        "Real-time tracking of all products",
        "Enhanced consumer trust"
      ],
      technologies: ["Blockchain", "IoT", "Smart Contracts", "Data Analytics"],
      timeline: "6 months",
      roi: "200%",
      image: "/case-studies/blockchain-supply.jpg",
      testimonial: "Blockchain technology has given us complete visibility into our supply chain. We can now track every product from origin to consumer.",
      author: "Alex Thompson, Supply Chain Director"
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
    { label: "Projects Completed", value: "500+", icon: "🚀" },
    { label: "Average ROI", value: "320%", icon: "📈" },
    { label: "Client Satisfaction", value: "98%", icon: "⭐" },
    { label: "Technologies Used", value: "50+", icon: "🔧" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
              🏆 CASE STUDIES 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Success Stories That Inspire
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how leading companies across industries have transformed their operations and achieved unprecedented results with our cutting-edge technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Download All Case Studies
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Filter by Industry
            </h2>
            <p className="text-gray-600">Explore case studies from specific industries</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <span className="mr-2">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations that demonstrate the transformative power of our technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📈</div>
                    <div className="text-sm text-gray-600">Case Study Image</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      {industries.find(i => i.id === study.industry)?.name}
                    </span>
                    <span className="text-2xl font-bold text-green-600">{study.roi}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.company}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Timeline: {study.timeline}</span>
                    <span>ROI: {study.roi}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic mb-2">"{study.testimonial}"</p>
                    <p className="text-xs text-gray-500">— {study.author}</p>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                    Read Full Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📈 Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable results that demonstrate the impact of our technology implementations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "Average Cost Reduction", value: "45%", icon: "💰" },
              { metric: "Efficiency Improvement", value: "320%", icon: "⚡" },
              { metric: "Time to Market", value: "60% faster", icon: "🚀" },
              { metric: "Customer Satisfaction", value: "98%", icon: "😊" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{item.value}</div>
                <div className="text-gray-600">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join the companies that have already transformed their operations with our cutting-edge technologies. Let's build your success story together.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveCaseStudies2025;