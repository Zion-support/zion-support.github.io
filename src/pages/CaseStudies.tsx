import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Users, Globe, Shield } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented AI-autonomous business operations platform with predictive analytics",
      results: [
        "65% reduction in operational costs",
        "3x faster decision-making processes",
        "$5M annual savings achieved",
        "99.9% system uptime maintained"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "25+ stakeholders"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation for Financial Services",
      company: "Quantum Finance Solutions",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking weeks to process, limiting trading opportunities",
      solution: "Deployed quantum neural network platform for real-time risk assessment",
      results: [
        "1000x faster risk calculations",
        "Real-time trading decisions enabled",
        "Risk prediction accuracy improved by 35%",
        "Trading volume increased by 200%"
      ],
      metrics: {
        roi: "320%",
        timeframe: "12 months",
        teamSize: "15+ developers"
      }
    },
    {
      id: 3,
      title: "AI-Autonomous Research Assistant for Pharmaceutical R&D",
      company: "BioTech Innovations Inc",
      industry: "Healthcare & Life Sciences",
      challenge: "Drug discovery process taking 5+ years with 90% failure rate",
      solution: "Integrated AI-autonomous research assistant with machine learning algorithms",
      results: [
        "Drug discovery timeline reduced by 60%",
        "Success rate improved to 25%",
        "Research costs reduced by $50M annually",
        "Patent applications increased by 300%"
      ],
      metrics: {
        roi: "280%",
        timeframe: "24 months",
        teamSize: "40+ researchers"
      }
    },
    {
      id: 4,
      title: "Cybersecurity & SOC2 Compliance Automation",
      company: "SecureTech Enterprises",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months annually with security gaps",
      solution: "Implemented automated SOC2 compliance platform with AI-powered security monitoring",
      results: [
        "Compliance time reduced to 2 weeks",
        "Security incidents decreased by 80%",
        "Audit preparation automated 95%",
        "Annual compliance costs reduced by 70%"
      ],
      metrics: {
        roi: "380%",
        timeframe: "9 months",
        teamSize: "20+ security professionals"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Solutions for Smart City Infrastructure",
      company: "SmartCity Municipal Corp",
      industry: "Government & Infrastructure",
      challenge: "Outdated communication infrastructure limiting smart city capabilities",
      solution: "Deployed comprehensive 5G enterprise solution with IoT integration",
      results: [
        "City-wide connectivity improved by 500%",
        "Smart traffic management reduced congestion by 40%",
        "Emergency response time improved by 60%",
        "Energy efficiency increased by 35%"
      ],
      metrics: {
        roi: "520%",
        timeframe: "30 months",
        teamSize: "50+ engineers"
      }
    }
  ];

  const stats = [
    { label: "Successful Projects", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average ROI", value: "350%", icon: TrendingUp },
    { label: "Global Clients", value: "25+", icon: Globe },
    { label: "Team Members", value: "100+", icon: Users },
    { label: "Security Certifications", value: "15+", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories That
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Transform Industries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Discover how Zion Tech Group's innovative solutions have revolutionized businesses across industries, 
            delivering measurable results and sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {study.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">{study.metrics.roi}</div>
                      <div className="text-xs text-zion-slate-light">ROI</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-zion-slate-light mb-4">{study.company}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>Timeline: {study.metrics.timeframe}</span>
                    <span>Team: {study.metrics.teamSize}</span>
                  </div>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their businesses with Zion Tech Group's 
              cutting-edge solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                View More Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}