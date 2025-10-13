import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing: AI-Powered Predictive Maintenance",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Unplanned equipment downtime costing $2M annually",
      solution: "AI-powered predictive maintenance system with IoT sensors",
      results: [
        "85% reduction in unplanned downtime",
        "$1.7M annual cost savings",
        "99.2% equipment uptime achieved",
        "ROI of 340% in first year"
      ],
      duration: "6 months",
      team: "8 specialists",
      technologies: ["AI/ML", "IoT", "Predictive Analytics", "Cloud Infrastructure"],
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Provider: AI-Driven Patient Care Optimization",
      company: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Patient wait times and resource allocation inefficiencies",
      solution: "AI analytics platform for patient flow optimization",
      results: [
        "40% reduction in patient wait times",
        "25% improvement in resource utilization",
        "95% patient satisfaction score",
        "30% increase in patient capacity"
      ],
      duration: "4 months",
      team: "6 specialists",
      technologies: ["AI Analytics", "Machine Learning", "Data Visualization", "Cloud Computing"],
      featured: false
    },
    {
      id: 3,
      title: "Financial Services: Advanced Fraud Detection System",
      company: "National Bank",
      industry: "Financial Services",
      challenge: "Increasing fraud incidents and false positives",
      solution: "AI-powered fraud detection with real-time monitoring",
      results: [
        "92% fraud detection accuracy",
        "60% reduction in false positives",
        "$3.2M prevented fraud losses",
        "99.8% system uptime"
      ],
      duration: "5 months",
      team: "10 specialists",
      technologies: ["AI/ML", "Real-time Analytics", "Cybersecurity", "Blockchain"],
      featured: false
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses achieve remarkable results with AI, technology, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Success Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results 
            through innovative technology solutions and AI implementation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Case Studies
          </h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 ${study.featured ? 'ring-2 ring-cyan-400' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-6">{study.company}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.team}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business achieve similar results with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}