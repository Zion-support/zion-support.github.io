import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Clock, Star } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "Global Retail Chain",
      industry: "Retail",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbots and intelligent routing system",
      results: [
        "40% reduction in customer service costs",
        "60% faster response times",
        "95% customer satisfaction rate"
      ],
      duration: "6 months",
      teamSize: "8 developers",
      rating: 5,
      image: "/images/case-studies/retail-ai.jpg"
    },
    {
      id: 2,
      title: "Cloud Migration & DevOps Transformation",
      client: "Financial Services Provider",
      industry: "Finance",
      challenge: "Legacy infrastructure causing deployment delays",
      solution: "Complete cloud migration with CI/CD pipeline",
      results: [
        "80% faster deployment times",
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs"
      ],
      duration: "12 months",
      teamSize: "12 engineers",
      rating: 5,
      image: "/images/case-studies/finance-cloud.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Infrastructure Overhaul",
      client: "Healthcare Organization",
      industry: "Healthcare",
      challenge: "Vulnerable legacy security systems",
      solution: "Zero-trust security architecture implementation",
      results: [
        "100% compliance with HIPAA regulations",
        "90% reduction in security incidents",
        "Real-time threat detection and response"
      ],
      duration: "8 months",
      teamSize: "6 security specialists",
      rating: 5,
      image: "/images/case-studies/healthcare-security.jpg"
    },
    {
      id: 4,
      title: "Data Analytics & Business Intelligence Platform",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Lack of real-time insights for decision making",
      solution: "Custom BI platform with predictive analytics",
      results: [
        "30% improvement in operational efficiency",
        "Real-time visibility across all operations",
        "Data-driven decision making capabilities"
      ],
      duration: "10 months",
      teamSize: "10 data scientists",
      rating: 5,
      image: "/images/case-studies/manufacturing-bi.jpg"
    }
  ];

  const industries = [
    "All Industries",
    "Retail",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Technology",
    "Education",
    "Government"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries transform their operations, 
            reduce costs, and achieve remarkable results through innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full">
              <Users className="inline w-4 h-4 mr-2" />
              50+ Successful Projects
            </span>
            <span className="bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full">
              <TrendingUp className="inline w-4 h-4 mr-2" />
              95% Client Satisfaction
            </span>
            <span className="bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full">
              <Clock className="inline w-4 h-4 mr-2" />
              Average 40% Cost Reduction
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Industry Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">Filter by Industry</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study) => (
            <article key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                <span className="text-white text-lg font-medium">{study.industry}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zion-slate-light bg-zion-cyan/20 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-zion-slate-dark mb-3">
                  {study.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4">
                  <strong>Client:</strong> {study.client}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Results:</h4>
                  <ul className="text-zion-slate-light text-sm space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {study.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {study.teamSize}
                  </span>
                </div>
                
                <Link 
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 text-zion-purple hover:text-zion-cyan transition-colors font-medium"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-zion-gradient rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business operations 
            and help you achieve similar results. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-zion-purple hover:bg-zion-purple/80 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote"
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
