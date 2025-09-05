import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  User,
  Star,
  TrendingUp,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "TechCorp Solutions",
    industry: "Technology",
    challenge: "High customer service costs and long response times",
    solution: "Implemented AI chatbot system with natural language processing",
    results: [
      "60% reduction in customer service costs",
      "80% faster response times",
      "95% customer satisfaction rate",
      "24/7 availability"
    ],
    technologies: ["AI/ML", "Natural Language Processing", "Cloud Computing"],
    duration: "3 months",
    team: "5 developers",
    image: "/case-studies/techcorp.jpg",
    testimonial: "Zion Tech Group transformed our customer service operations. The AI solution exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    rating: 5
  },
  {
    id: 2,
    title: "Cloud Migration and Infrastructure Optimization",
    client: "Global Finance Inc.",
    industry: "Financial Services",
    challenge: "Legacy systems causing performance issues and high maintenance costs",
    solution: "Complete cloud migration with microservices architecture",
    results: [
      "70% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "50% faster application performance",
      "Enhanced security compliance"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Microservices"],
    duration: "6 months",
    team: "8 engineers",
    image: "/case-studies/finance.jpg",
    testimonial: "The migration was seamless and the results speak for themselves. Our systems are now more reliable than ever.",
    author: "Michael Chen",
    position: "VP of Engineering, Global Finance Inc.",
    rating: 5
  },
  {
    id: 3,
    title: "Predictive Analytics for Manufacturing",
    client: "ManufacturingPro",
    industry: "Manufacturing",
    challenge: "Equipment downtime causing production delays and losses",
    solution: "AI-powered predictive maintenance system with IoT sensors",
    results: [
      "40% reduction in unplanned downtime",
      "25% increase in production efficiency",
      "30% reduction in maintenance costs",
      "Real-time monitoring capabilities"
    ],
    technologies: ["IoT", "Machine Learning", "Data Analytics", "Edge Computing"],
    duration: "4 months",
    team: "6 specialists",
    image: "/case-studies/manufacturing.jpg",
    testimonial: "The predictive maintenance system has revolutionized our operations. We can now prevent issues before they occur.",
    author: "David Rodriguez",
    position: "Operations Director, ManufacturingPro",
    rating: 5
  },
  {
    id: 4,
    title: "E-commerce Platform Modernization",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Outdated e-commerce platform with poor user experience",
    solution: "Complete platform rebuild with modern technologies and AI features",
    results: [
      "200% increase in conversion rates",
      "50% improvement in page load times",
      "35% increase in average order value",
      "Enhanced mobile experience"
    ],
    technologies: ["React", "Node.js", "AI Recommendations", "Payment Integration"],
    duration: "5 months",
    team: "10 developers",
    image: "/case-studies/retail.jpg",
    testimonial: "Our new platform has transformed our online business. Sales have increased dramatically.",
    author: "Lisa Wang",
    position: "CEO, RetailMax",
    rating: 5
  }
];

const industries = [
  "All Industries",
  "Technology",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education"
];

const technologies = [
  "All Technologies",
  "AI/ML",
  "Cloud Computing",
  "IoT",
  "Data Analytics",
  "Web Development",
  "Mobile Development"
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedTechnology, setSelectedTechnology] = useState("All Technologies");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "All Industries" || study.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === "All Technologies" || 
      study.technologies.some(tech => tech === selectedTechnology);
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesTechnology && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world success stories showcasing how we've helped businesses transform with technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Industry Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Technology Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedTechnology}
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    {technologies.map(technology => (
                      <option key={technology} value={technology}>{technology}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm opacity-90">Case Study Image</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{study.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.client}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 3).map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center mb-2">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm italic mb-2">"{study.testimonial}"</p>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">{study.author}</p>
                          <p className="text-gray-500">{study.position}</p>
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredCaseStudies.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}