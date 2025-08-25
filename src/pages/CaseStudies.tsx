import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';

const CaseStudies = () => {
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
        "45% reduction in fraud incidents",
        "Real-time tracking across 50+ countries"
      ],
      technologies: ["Blockchain", "Supply Chain", "IoT", "Smart Contracts"],
      image: "/images/case-studies/blockchain-logistics.jpg"
    }
  ];

  const stats = [
    { icon: CheckCircle, label: "Projects Completed", value: "150+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: Users, label: "Happy Clients", value: "120+" },
    { icon: DollarSign, label: "ROI Average", value: "340%" },
    { icon: Clock, label: "Delivery Time", value: "2.5x Faster" },
    { icon: Target, label: "Goal Achievement", value: "95%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Discover how we've transformed businesses across industries with cutting-edge AI solutions and innovative technology implementations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Your Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-zion-blue to-zion-purple p-4 rounded-xl inline-block mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-light/10 backdrop-blur-md border border-zion-blue-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gradient-to-r from-zion-blue to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <span className="text-zion-slate-light text-sm">{study.client}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-zion-slate-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm border border-zion-blue-light/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions and technology expertise can transform your business and deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;