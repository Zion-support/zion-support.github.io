import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation with AI",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "AI-powered recommendation engine and personalized shopping experience",
      results: [
        "40% increase in conversion rates",
        "60% improvement in customer satisfaction",
        "35% boost in average order value"
      ],
      image: "/api/placeholder/600/400",
      slug: "ecommerce-ai-transformation",
      featured: true
    },
    {
      title: "Healthcare Data Analytics Revolution",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Inefficient patient data analysis and treatment optimization",
      solution: "Advanced AI analytics platform for predictive healthcare",
      results: [
        "50% faster diagnosis times",
        "30% reduction in readmission rates",
        "25% improvement in treatment outcomes"
      ],
      image: "/api/placeholder/600/400",
      slug: "healthcare-data-analytics",
      featured: true
    },
    {
      title: "Manufacturing Process Optimization",
      company: "Global Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "High production costs and quality control issues",
      solution: "IoT sensors and AI-powered predictive maintenance",
      results: [
        "20% reduction in production costs",
        "45% decrease in equipment downtime",
        "30% improvement in product quality"
      ],
      image: "/api/placeholder/600/400",
      slug: "manufacturing-process-optimization",
      featured: false
    },
    {
      title: "Financial Services Fraud Detection",
      company: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Increasing fraud cases and security threats",
      solution: "AI-powered fraud detection and prevention system",
      results: [
        "90% reduction in false positives",
        "85% improvement in fraud detection accuracy",
        "60% decrease in financial losses"
      ],
      image: "/api/placeholder/600/400",
      slug: "financial-fraud-detection",
      featured: false
    },
    {
      title: "Smart City Infrastructure Implementation",
      company: "City of Innovation",
      industry: "Government",
      challenge: "Inefficient city services and resource management",
      solution: "5G-enabled smart city platform with IoT integration",
      results: [
        "35% improvement in traffic flow",
        "40% reduction in energy consumption",
        "50% faster emergency response times"
      ],
      image: "/api/placeholder/600/400",
      slug: "smart-city-infrastructure",
      featured: false
    },
    {
      title: "Retail Chain Customer Experience Enhancement",
      company: "RetailMax Corporation",
      industry: "Retail",
      challenge: "Declining customer engagement and sales",
      solution: "AI-powered customer analytics and personalized marketing",
      results: [
        "55% increase in customer engagement",
        "25% boost in sales revenue",
        "40% improvement in customer retention"
      ],
      image: "/api/placeholder/600/400",
      slug: "retail-customer-experience",
      featured: false
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" },
    { number: "24/7", label: "Support Available" }
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Manufacturing",
    "Financial Services",
    "Government",
    "Retail",
    "Education",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Case Studies - Success Stories & Client Results | Zion Tech Group"
        description="Explore our successful client projects and case studies. See how we've helped businesses across industries achieve remarkable results with AI and technology solutions."
        keywords="case studies, success stories, client results, AI projects, technology solutions, business transformation"
        canonical="https://ziontechgroup.com/case-studies"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable results 
            with our AI-powered solutions and technology expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results, real impact
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-cyan-400 font-medium">{study.industry}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {study.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {study.challenge}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience across multiple industries and sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months."
              </p>
              <div>
                <div className="font-semibold text-white">Sarah Johnson</div>
                <div className="text-sm text-gray-400">CEO, TechStart Inc.</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools."
              </p>
              <div>
                <div className="font-semibold text-white">Michael Chen</div>
                <div className="text-sm text-gray-400">CTO, E-commerce Solutions</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs."
              </p>
              <div>
                <div className="font-semibold text-white">Emily Rodriguez</div>
                <div className="text-sm text-gray-400">Operations Director, Digital Marketing Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and explore how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;