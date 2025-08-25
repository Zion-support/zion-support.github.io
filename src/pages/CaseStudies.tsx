import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Globe, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  BarChart3
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% production delays and 25% quality issues",
      solution: "AI-powered autonomous business operations platform with predictive maintenance",
      results: [
        "60% reduction in production downtime",
        "35% improvement in product quality",
        "$12M annual cost savings",
        "Real-time monitoring of 10,000+ IoT devices"
      ],
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare AI Revolution",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient wait times averaging 3 hours, diagnostic accuracy below 80%",
      solution: "AI autonomous research assistant with medical imaging analysis",
      results: [
        "85% reduction in patient wait times",
        "95% diagnostic accuracy improvement",
        "40% faster treatment planning",
        "24/7 AI-powered patient monitoring"
      ],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Financial Services Security Overhaul",
      company: "International Bank Group",
      industry: "Financial Services",
      challenge: "Increasing cyber threats, 15% false positive rate in fraud detection",
      solution: "Quantum-secure cloud infrastructure with AI-powered threat detection",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 18 months",
        "60% reduction in false positives",
        "Real-time fraud prevention"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Retail Digital Transformation",
      company: "National Retail Chain",
      industry: "Retail",
      challenge: "Declining foot traffic, poor customer engagement, inventory inefficiencies",
      solution: "AI-powered customer intelligence platform with predictive analytics",
      results: [
        "45% increase in customer engagement",
        "30% improvement in inventory turnover",
        "25% increase in average order value",
        "Personalized shopping experiences"
      ],
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Technology Company Innovation",
      company: "Tech Startup Inc",
      industry: "Technology",
      challenge: "Manual development processes, 6-month product release cycles",
      solution: "AI autonomous DevOps platform with automated testing and deployment",
      results: [
        "90% reduction in deployment time",
        "80% fewer production bugs",
        "Continuous integration and deployment",
        "Automated quality assurance"
      ],
      icon: Cpu,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Government Digital Services",
      company: "Federal Agency",
      industry: "Government",
      challenge: "Citizen service delays, paper-based processes, security vulnerabilities",
      solution: "AI-powered digital transformation with blockchain security",
      results: [
        "70% faster citizen services",
        "100% digital process adoption",
        "Enhanced security compliance",
        "Improved citizen satisfaction"
      ],
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const industries = [
    { name: "Manufacturing", count: 15, icon: Building },
    { name: "Healthcare", count: 12, icon: Users },
    { name: "Financial Services", count: 18, icon: Shield },
    { name: "Retail", count: 9, icon: Target },
    { name: "Technology", count: 22, icon: Cpu },
    { name: "Government", count: 8, icon: Globe },
    { name: "Energy", count: 6, icon: Zap },
    { name: "Transportation", count: 11, icon: Network }
  ];

  return (
    <>
      <SEOHead 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories of how our AI and technology solutions have transformed businesses across industries. See measurable results and ROI."
        keywords="case studies, success stories, AI transformation, digital transformation, business results, ROI, customer success"
        type="website"
        url="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success Stories That Inspire
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how organizations across industries have transformed their businesses 
                with our AI-powered solutions. Real results, measurable impact, proven success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Success Story
                </Link>
                <Link
                  to="/demo"
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Overview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transforming Industries Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have delivered measurable results across diverse industries, 
                from manufacturing to healthcare, financial services to government.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-cyan-400 font-bold">{industry.count}+ Success Stories</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real organizations, real challenges, real solutions, real results. 
                See how our technology transforms businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => {
                const Icon = study.icon;
                return (
                  <div key={study.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{study.industry}</p>
                        <p className="text-xs text-gray-500">{study.company}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">CHALLENGE</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">SOLUTION</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">RESULTS</h4>
                      <div className="space-y-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results Across All Engagements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself. Here are the aggregate results 
                from all our client engagements over the past three years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">95%</div>
                <p className="text-gray-300">Client Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">$2.1B</div>
                <p className="text-gray-300">Total Client Value Generated</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">150+</div>
                <p className="text-gray-300">Successful Implementations</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">12.5x</div>
                <p className="text-gray-300">Average ROI for Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations that have already transformed their businesses 
              with our AI-powered solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/demo"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;