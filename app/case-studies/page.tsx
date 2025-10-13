import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign, BarChart3, Shield, Cloud, Brain } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Manufacturing Optimization",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Reduce production downtime and optimize machine efficiency across 15 facilities worldwide.",
      solution: "Implemented AI-powered predictive maintenance and real-time optimization systems.",
      results: [
        "35% reduction in unplanned downtime",
        "22% increase in overall equipment effectiveness",
        "$2.3M annual cost savings",
        "99.2% system uptime achieved"
      ],
      technologies: ["AI/ML", "IoT", "Predictive Analytics", "Cloud Computing"],
      duration: "6 months",
      team: "12 experts",
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 2,
      title: "5G Network Implementation for Smart City",
      client: "Metro City Government",
      industry: "Government",
      challenge: "Deploy 5G infrastructure to support smart city initiatives and improve citizen services.",
      solution: "Complete 5G network design, deployment, and integration with existing smart city systems.",
      results: [
        "100% 5G coverage across city center",
        "50% improvement in data transmission speeds",
        "25% reduction in emergency response times",
        "15% increase in citizen satisfaction scores"
      ],
      technologies: ["5G", "Edge Computing", "IoT", "Network Security"],
      duration: "8 months",
      team: "18 experts",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Cybersecurity Transformation for Financial Services",
      client: "Regional Bank Group",
      industry: "Financial Services",
      challenge: "Strengthen cybersecurity posture and achieve compliance with new financial regulations.",
      solution: "Comprehensive security assessment, implementation of zero-trust architecture, and AI-powered threat detection.",
      results: [
        "99.9% threat detection accuracy",
        "60% reduction in security incidents",
        "100% regulatory compliance achieved",
        "40% improvement in incident response time"
      ],
      technologies: ["Cybersecurity", "AI/ML", "Zero Trust", "Compliance"],
      duration: "4 months",
      team: "10 experts",
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Cloud Migration and Digital Transformation",
      client: "Retail Chain Enterprise",
      industry: "Retail",
      challenge: "Migrate legacy systems to cloud and modernize customer experience across 200+ stores.",
      solution: "Complete cloud migration strategy, microservices architecture, and customer-facing mobile applications.",
      results: [
        "80% reduction in infrastructure costs",
        "45% improvement in application performance",
        "30% increase in online sales",
        "99.5% customer satisfaction rating"
      ],
      technologies: ["Cloud Computing", "Microservices", "Mobile Development", "DevOps"],
      duration: "10 months",
      team: "25 experts",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 5,
      title: "AI Customer Service Automation",
      client: "E-commerce Platform",
      industry: "E-commerce",
      challenge: "Scale customer support operations while maintaining high service quality and reducing costs.",
      solution: "Deployed AI-powered chatbots, automated ticket routing, and intelligent customer insights platform.",
      results: [
        "70% reduction in support ticket volume",
        "85% customer query resolution rate",
        "50% decrease in support costs",
        "4.8/5 customer satisfaction score"
      ],
      technologies: ["AI/ML", "Natural Language Processing", "Automation", "Analytics"],
      duration: "3 months",
      team: "8 experts",
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Data Analytics and Business Intelligence Platform",
      client: "Healthcare Provider Network",
      industry: "Healthcare",
      challenge: "Consolidate data from multiple systems and provide actionable insights for patient care and operations.",
      solution: "Built comprehensive data lake, real-time analytics platform, and predictive healthcare models.",
      results: [
        "60% improvement in patient outcomes",
        "35% reduction in operational costs",
        "90% faster data processing",
        "25% increase in operational efficiency"
      ],
      technologies: ["Data Analytics", "Machine Learning", "Data Lake", "Visualization"],
      duration: "7 months",
      team: "15 experts",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Cost Savings Delivered", value: "$50M+", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Average Project Duration", value: "6 months", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta
          name="description"
          content="Explore our successful technology implementations and client transformations across various industries. See how we've helped businesses achieve their digital goals."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client transformations, AI implementation, 5G deployment, cloud migration, cybersecurity, technology solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Case
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Studies
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations, 
              reduce costs, and achieve remarkable results with cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how our technology solutions have transformed businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          {study.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">{study.client}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-cyan-300 rounded text-xs border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results with our proven technology solutions. 
                Contact us today for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}