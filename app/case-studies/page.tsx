import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Platform",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual data analysis was taking 40+ hours per week, limiting patient care efficiency.",
      solution: "Implemented AI-driven analytics platform with real-time data processing and predictive insights.",
      results: [
        "85% reduction in data analysis time",
        "30% improvement in patient outcomes",
        "60% increase in operational efficiency"
      ],
      image: "/images/case-studies/healthcare-ai.jpg",
      technologies: ["Machine Learning", "Python", "TensorFlow", "AWS", "React"]
    },
    {
      id: 2,
      title: "5G Network Optimization for Smart City",
      client: "MetroCity Government",
      industry: "Smart City",
      challenge: "Inefficient 5G network causing connectivity issues for IoT devices and smart infrastructure.",
      solution: "Deployed advanced 5G optimization algorithms and edge computing infrastructure.",
      results: [
        "99.9% network uptime achieved",
        "50% improvement in data transfer speeds",
        "40% reduction in energy consumption"
      ],
      image: "/images/case-studies/smart-city-5g.jpg",
      technologies: ["5G Technology", "Edge Computing", "IoT", "Network Optimization", "Cloud Infrastructure"]
    },
    {
      id: 3,
      title: "Cybersecurity Transformation for Financial Services",
      client: "SecureBank International",
      industry: "Financial Services",
      challenge: "Legacy security systems vulnerable to modern cyber threats and compliance requirements.",
      solution: "Implemented comprehensive cybersecurity suite with AI-powered threat detection and zero-trust architecture.",
      results: [
        "99.8% threat detection accuracy",
        "Zero security breaches in 18 months",
        "100% compliance with financial regulations"
      ],
      image: "/images/case-studies/cybersecurity-finance.jpg",
      technologies: ["Cybersecurity", "AI Security", "Zero Trust", "Compliance", "Threat Detection"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies across various industries including healthcare, smart cities, and financial services." />
        <meta name="keywords" content="case studies, AI solutions, 5G technology, cybersecurity, success stories" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've transformed businesses across industries with cutting-edge AI and IT solutions
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-1 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-12 h-12" />
                          </div>
                          <h3 className="text-2xl font-bold">{study.industry}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                      <p className="text-lg text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
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
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;