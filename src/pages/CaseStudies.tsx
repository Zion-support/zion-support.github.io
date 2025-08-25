import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented AI autonomous business operations platform with quantum neural networks",
      results: [
        "85% reduction in operational inefficiency",
        "$8.2M annual cost savings",
        "99.9% system uptime achieved",
        "Real-time predictive maintenance"
      ],
      metrics: {
        efficiency: "85%",
        savings: "$8.2M",
        uptime: "99.9%",
        roi: "410%"
      },
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cybersecurity Transformation for Healthcare Network",
      company: "Regional Health System",
      industry: "Healthcare",
      challenge: "Critical security vulnerabilities exposing patient data and HIPAA compliance risks",
      solution: "Comprehensive cybersecurity suite with SOC2 compliance automation",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 18 months",
        "99.99% threat detection accuracy",
        "Automated compliance reporting"
      ],
      metrics: {
        compliance: "100%",
        breaches: "0",
        detection: "99.99%",
        roi: "280%"
      },
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Quantum Computing Implementation for Financial Services",
      company: "International Bank",
      industry: "Financial Services",
      challenge: "Complex risk calculations taking 8+ hours, limiting trading opportunities",
      solution: "Quantum neural network platform for real-time risk assessment",
      results: [
        "Risk calculations reduced from 8 hours to 2 minutes",
        "Trading volume increased by 300%",
        "Risk accuracy improved by 40%",
        "$15M additional revenue generated"
      ],
      metrics: {
        speed: "240x faster",
        volume: "+300%",
        accuracy: "+40%",
        revenue: "$15M"
      },
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Modernization for Tech Startup",
      company: "AI Startup",
      industry: "Technology",
      challenge: "Scaling issues causing 70% customer churn during peak usage",
      solution: "Cloud DevOps automation with AI-powered infrastructure management",
      results: [
        "99.99% uptime during peak loads",
        "Customer churn reduced to 5%",
        "Infrastructure costs reduced by 60%",
        "Deployment time reduced by 90%"
      ],
      metrics: {
        uptime: "99.99%",
        churn: "-65%",
        costs: "-60%",
        deployment: "-90%"
      },
      icon: Cloud,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 5,
      title: "AI Research Automation for Pharmaceutical Company",
      company: "Pharma Research Inc",
      industry: "Pharmaceuticals",
      challenge: "Drug discovery process taking 8-12 years with 90% failure rate",
      solution: "AI autonomous research assistant with advanced analytics",
      results: [
        "Research time reduced by 60%",
        "Success rate improved by 35%",
        "Cost per discovery reduced by 70%",
        "3 new drug candidates identified"
      ],
      metrics: {
        time: "-60%",
        success: "+35%",
        cost: "-70%",
        candidates: "3"
      },
      icon: Users,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "5G Enterprise Network for Smart City",
      company: "Metropolitan City",
      industry: "Government",
      challenge: "Outdated infrastructure limiting smart city initiatives and citizen services",
      solution: "5G enterprise solutions with IoT integration platform",
      results: [
        "Smart city services deployed in 6 months",
        "Citizen satisfaction increased by 85%",
        "Operational costs reduced by 45%",
        "Emergency response time improved by 60%"
      ],
      metrics: {
        deployment: "6 months",
        satisfaction: "+85%",
        costs: "-45%",
        response: "+60%"
      },
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, Global Manufacturing Corp",
      quote: "Zion Tech Group's AI platform transformed our operations completely. The results exceeded our expectations by 200%.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      title: "CIO, Regional Health System",
      quote: "Their cybersecurity solution not only protected our data but automated our compliance processes. Game-changing technology.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      title: "Head of Technology, International Bank",
      quote: "The quantum computing implementation opened new possibilities we never thought possible. Incredible ROI and performance.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how leading organizations across industries achieved breakthrough results with Zion Tech Group's cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">85%</span> Average Efficiency Gain
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">$50M+</span> Total Client Savings
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">99.9%</span> Average Uptime
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each case study represents a unique challenge solved with innovative technology and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color} mr-4`}>
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.company}</h3>
                    <p className="text-gray-400">{study.industry}</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4">{study.title}</h4>
                
                <div className="mb-6">
                  <h5 className="text-cyan-400 font-semibold mb-2">Challenge:</h5>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-cyan-400 font-semibold mb-2">Solution:</h5>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-cyan-400 font-semibold mb-2">Results:</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
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
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of industry leaders who have transformed their operations with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;