import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Cloud, 
  Brain, 
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  Target,
  Zap
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "TechCorp Inc. - AI Automation Transformation",
      company: "TechCorp Inc.",
      industry: "Technology",
      size: "500+ employees",
      challenge: "Manual processes causing 60% operational inefficiency and high costs",
      solution: "Implemented AI-powered business process automation suite with custom workflow optimization",
      results: [
        { metric: "45%", label: "Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "300%", label: "Productivity Increase", icon: <Zap className="w-6 h-6" /> },
        { metric: "3 months", label: "ROI Achievement", icon: <Clock className="w-6 h-6" /> },
        { metric: "92%", label: "Process Automation", icon: <Target className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI automation suite transformed our operations completely. We achieved 45% cost reduction in just 3 months while increasing productivity by 300%. The ROI was immediate and continues to grow.",
        author: "Sarah Johnson",
        role: "Chief Technology Officer",
        avatar: "SJ"
      },
      services: ["AI Automation", "Process Optimization", "Custom Development"],
      duration: "3 months",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "FinanceFlow - Quantum Risk Assessment Implementation",
      company: "FinanceFlow",
      industry: "Financial Services",
      size: "200+ employees",
      challenge: "Traditional risk models failing to predict market volatility with only 60% accuracy",
      solution: "Deployed quantum financial risk assessment platform with advanced portfolio optimization algorithms",
      results: [
        { metric: "85%", label: "Accuracy Improvement", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "30%", label: "Volatility Reduction", icon: <Shield className="w-6 h-6" /> },
        { metric: "$2.3M", label: "Risk Savings", icon: <Target className="w-6 h-6" /> },
        { metric: "40%", label: "Faster Analysis", icon: <Clock className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The quantum risk assessment platform is revolutionary. Our portfolio optimization improved by 85% accuracy and we've saved over $2.3M in risk exposure. This technology is game-changing.",
        author: "Michael Chen",
        role: "Risk Management Director",
        avatar: "MC"
      },
      services: ["Quantum Computing", "Risk Assessment", "Portfolio Optimization"],
      duration: "6 months",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "SecureNet Solutions - Zero-Trust Security Implementation",
      company: "SecureNet Solutions",
      industry: "Cybersecurity",
      size: "150+ employees",
      challenge: "Frequent security breaches and compliance violations costing $500K annually",
      solution: "Implemented comprehensive zero-trust security architecture with behavioral analytics",
      results: [
        { metric: "92%", label: "Incident Reduction", icon: <Shield className="w-6 h-6" /> },
        { metric: "100%", label: "Compliance Coverage", icon: <CheckCircle className="w-6 h-6" /> },
        { metric: "$500K", label: "Annual Savings", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "24/7", label: "Threat Monitoring", icon: <Clock className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Their zero-trust security implementation reduced our security incidents by 92% and achieved 100% compliance coverage. We've saved $500K annually while significantly improving our security posture.",
        author: "Emily Rodriguez",
        role: "Security Director",
        avatar: "ER"
      },
      services: ["Zero-Trust Security", "Compliance", "Threat Detection"],
      duration: "4 months",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "GlobalManufacturing - Supply Chain Transparency Platform",
      company: "GlobalManufacturing",
      industry: "Manufacturing",
      size: "1000+ employees",
      challenge: "Supply chain visibility issues and counterfeit products affecting 15% of inventory",
      solution: "Deployed blockchain supply chain transparency platform with end-to-end traceability",
      results: [
        { metric: "100%", label: "Visibility Improvement", icon: <Globe className="w-6 h-6" /> },
        { metric: "90%", label: "Counterfeit Reduction", icon: <Shield className="w-6 h-6" /> },
        { metric: "35%", label: "Efficiency Gain", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "Real-time", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The blockchain supply chain platform gave us 100% visibility into our supply chain. We reduced counterfeit products by 90% and improved overall efficiency by 35%. Outstanding results.",
        author: "David Kim",
        role: "Supply Chain Director",
        avatar: "DK"
      },
      services: ["Blockchain", "Supply Chain", "Traceability"],
      duration: "5 months",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "CloudTech Solutions - Multi-Cloud Optimization",
      company: "CloudTech Solutions",
      industry: "Cloud Services",
      size: "300+ employees",
      challenge: "Multi-cloud costs spiraling out of control with 40% budget overrun",
      solution: "Implemented multi-cloud management and optimization platform with automated cost controls",
      results: [
        { metric: "40%", label: "Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "60%", label: "Performance Improvement", icon: <Zap className="w-6 h-6" /> },
        { metric: "99.9%", label: "Uptime Achievement", icon: <Cloud className="w-6 h-6" /> },
        { metric: "50%", label: "Faster Deployment", icon: <Clock className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Zion Tech Group's multi-cloud optimization platform reduced our costs by 40% while improving performance by 60%. We now achieve 99.9% uptime with 50% faster deployments.",
        author: "Lisa Wang",
        role: "Cloud Infrastructure Manager",
        avatar: "LW"
      },
      services: ["Cloud Management", "Cost Optimization", "Performance Tuning"],
      duration: "3 months",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "DataDriven Corp - AI-Powered Analytics Platform",
      company: "DataDriven Corp",
      industry: "Data Analytics",
      size: "250+ employees",
      challenge: "Manual data analysis taking weeks with only 70% accuracy",
      solution: "Deployed AI-powered business intelligence platform with real-time analytics and predictive capabilities",
      results: [
        { metric: "85%", label: "Accuracy Improvement", icon: <Brain className="w-6 h-6" /> },
        { metric: "90%", label: "Time Reduction", icon: <Clock className="w-6 h-6" /> },
        { metric: "Real-time", label: "Insights", icon: <Zap className="w-6 h-6" /> },
        { metric: "200%", label: "Decision Speed", icon: <TrendingUp className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The AI analytics platform improved our accuracy by 85% and reduced analysis time by 90%. We now have real-time insights that enable 200% faster decision-making. Incredible transformation.",
        author: "Robert Taylor",
        role: "Chief Data Officer",
        avatar: "RT"
      },
      services: ["AI Analytics", "Business Intelligence", "Predictive Modeling"],
      duration: "4 months",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "10K+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "99.9%", label: "Success Rate", icon: <Target className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <SEO 
        title="Case Studies - Zion Tech Group Success Stories" 
        description="Discover how we've helped businesses transform with our cutting-edge technology solutions. Real results from real clients." 
        keywords="case studies, success stories, business transformation, AI solutions, client results" 
        canonical="https://ziontechgroup.com/case-studies" 
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've transformed businesses 
              across industries with our cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-2000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed case studies showcasing how our solutions have delivered 
              measurable results for businesses across various industries.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{study.size}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Services Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                          <div className="inline-flex p-2 rounded-lg bg-cyan-100 text-cyan-600 mb-2">
                            {result.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {study.testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 italic mb-4 leading-relaxed">
                            "{study.testimonial.quote}"
                          </p>
                          <div>
                            <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                            <div className="text-sm text-gray-600">{study.testimonial.role}, {study.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual/Image */}
                  <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <Award className="w-16 h-16 text-white" />
                      </div>
                      <div className="text-lg font-semibold text-gray-700 mb-2">Project Duration</div>
                      <div className="text-3xl font-bold text-gray-900">{study.duration}</div>
                      <div className="mt-6">
                        <button className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300">
                          View Full Case Study
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful businesses that have transformed with our solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> c1cb23d4ff97c0dd0f255cc0321a3307f75ff60a:src/pages/CaseStudies.tsx
