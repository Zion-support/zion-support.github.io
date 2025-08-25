import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, Zap, Shield, Globe, Target, Brain, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Company Digital Transformation",
      client: "Fortune 500 Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Legacy systems integration and real-time production monitoring",
      solution: "AI-powered IoT platform with predictive maintenance",
      results: [
        "35% reduction in downtime",
        "28% increase in production efficiency",
        "$2.3M annual cost savings",
        "99.8% system uptime achieved"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Predictive Analytics"],
      duration: "8 months",
      teamSize: "12 specialists",
      image: "/api/placeholder/600/400",
      category: "Digital Transformation",
      icon: Building2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare Network Cybersecurity Enhancement",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Protecting patient data and ensuring HIPAA compliance",
      solution: "Zero-trust security architecture with AI threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 18 months",
        "45% faster threat response",
        "Risk assessment improved by 60%"
      ],
      technologies: ["Cybersecurity", "AI Threat Detection", "Zero Trust", "Compliance"],
      duration: "6 months",
      teamSize: "8 specialists",
      image: "/api/placeholder/600/400",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Financial Services AI Trading Platform",
      client: "Mid-Market Investment Firm",
      industry: "Financial Services",
      challenge: "Manual trading processes and market analysis inefficiencies",
      solution: "AI-powered algorithmic trading and risk management platform",
      results: [
        "40% increase in trading accuracy",
        "67% faster market analysis",
        "$5.1M increase in annual revenue",
        "Risk exposure reduced by 32%"
      ],
      technologies: ["AI/ML", "Algorithmic Trading", "Risk Management", "Real-time Analytics"],
      duration: "10 months",
      teamSize: "15 specialists",
      image: "/api/placeholder/600/400",
      category: "AI Solutions",
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Retail Chain Inventory Optimization",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "Inventory management across 200+ locations",
      solution: "AI-driven demand forecasting and automated inventory system",
      results: [
        "25% reduction in inventory costs",
        "90% improvement in stock accuracy",
        "15% increase in customer satisfaction",
        "30% reduction in out-of-stock incidents"
      ],
      technologies: ["AI Forecasting", "Inventory Management", "Supply Chain", "Analytics"],
      duration: "7 months",
      teamSize: "10 specialists",
      image: "/api/placeholder/600/400",
      category: "Supply Chain",
      icon: Target,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Smart City Infrastructure Platform",
      client: "Metropolitan City Government",
      industry: "Government",
      challenge: "Modernizing city infrastructure and improving citizen services",
      solution: "Integrated IoT platform for traffic, utilities, and public services",
      results: [
        "22% reduction in traffic congestion",
        "18% decrease in energy consumption",
        "95% citizen satisfaction rating",
        "40% faster emergency response"
      ],
      technologies: ["IoT", "Smart Infrastructure", "Data Analytics", "Public Services"],
      duration: "14 months",
      teamSize: "20 specialists",
      image: "/api/placeholder/600/400",
      category: "Smart Cities",
      icon: Globe,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Startup Quantum Computing Research Platform",
      client: "Quantum Technology Startup",
      industry: "Technology",
      challenge: "Building scalable quantum computing research infrastructure",
      solution: "Hybrid quantum-classical computing platform with AI optimization",
      results: [
        "50x improvement in computation speed",
        "3 research breakthroughs achieved",
        "$15M Series A funding secured",
        "5 patent applications filed"
      ],
      technologies: ["Quantum Computing", "AI Optimization", "Research Platform", "Innovation"],
      duration: "12 months",
      teamSize: "18 specialists",
      image: "/api/placeholder/600/400",
      category: "Quantum Technology",
      icon: Rocket,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const metrics = [
    { icon: Building2, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Generated" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our manufacturing operations with their AI-powered solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Manufacturing Corp",
      company: "Fortune 500 Company"
    },
    {
      quote: "Their cybersecurity expertise helped us achieve complete HIPAA compliance while improving our operational efficiency.",
      author: "Dr. Michael Chen",
      position: "Chief Information Officer",
      company: "Regional Healthcare Network"
    },
    {
      quote: "The AI trading platform delivered exceptional results and significantly improved our market performance.",
      author: "Robert Williams",
      position: "Head of Technology",
      company: "Investment Firm"
    }
  ];

  return (
    <>
      <SEO 
        title="Case Studies | Success Stories - Zion Tech Group"
        description="Explore our client success stories and case studies. See how Zion Tech Group has helped businesses transform with AI, cybersecurity, and innovative technology solutions."
        keywords="case studies, client success stories, digital transformation, AI solutions, cybersecurity, technology consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <Award className="w-4 h-4 mr-2" />
                Proven Results & Success Stories
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Client
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Success Stories
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions and strategic digital transformation.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Real results from real clients across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${study.color} mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-300 font-medium">{study.category}</div>
                        <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Client</div>
                        <div className="text-gray-300">{study.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Challenge</div>
                        <div className="text-gray-300">{study.challenge}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Solution</div>
                        <div className="text-gray-300">{study.solution}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-400 font-medium mb-3">Key Results</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <div>
                        <Clock className="w-4 h-4 inline mr-1" />
                        {study.duration}
                      </div>
                      <div>
                        <Users className="w-4 h-4 inline mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Hear directly from the leaders who trusted us with their digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-blue-300">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;