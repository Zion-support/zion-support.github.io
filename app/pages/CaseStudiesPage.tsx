import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon,
  NetworkIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbot and automated ticketing system",
      results: ["60% reduction in response time", "40% cost savings", "95% customer satisfaction"],
      icon: ChatBubbleLeftRightIcon,
      color: "from-blue-500 to-purple-500",
      duration: "3 months"
    },
    {
      title: "Cloud Migration for E-commerce Platform",
      client: "RetailMax Inc.",
      industry: "E-commerce",
      challenge: "Scalability issues and high infrastructure costs",
      solution: "Migrated to AWS with auto-scaling and load balancing",
      results: ["50% cost reduction", "99.9% uptime", "3x faster page loads"],
      icon: CloudIcon,
      color: "from-green-500 to-teal-500",
      duration: "6 months"
    },
    {
      title: "Cybersecurity Enhancement for Financial Services",
      client: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Implemented comprehensive security framework and monitoring",
      results: ["Zero security incidents", "100% compliance", "24/7 threat monitoring"],
      icon: ShieldCheckIcon,
      color: "from-pink-500 to-rose-500",
      duration: "4 months"
    },
    {
      title: "Process Automation for Manufacturing",
      client: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Manual processes causing delays and errors",
      solution: "Automated workflow and integrated ERP systems",
      results: ["70% process efficiency", "90% error reduction", "30% faster delivery"],
      icon: CogIcon,
      color: "from-indigo-500 to-purple-500",
      duration: "5 months"
    },
    {
      title: "Data Analytics Platform for Healthcare",
      client: "HealthTech Systems",
      industry: "Healthcare",
      challenge: "Fragmented data and lack of insights",
      solution: "Built comprehensive analytics platform with real-time dashboards",
      results: ["Real-time insights", "50% faster decisions", "Improved patient outcomes"],
      icon: ChartBarIcon,
      color: "from-orange-500 to-red-500",
      duration: "8 months"
    },
    {
      title: "Digital Transformation for Logistics",
      client: "LogiFlow Corp",
      industry: "Logistics",
      challenge: "Outdated systems and poor visibility",
      solution: "Complete digital transformation with IoT and AI integration",
      results: ["Real-time tracking", "25% cost savings", "98% on-time delivery"],
      icon: RocketLaunchIcon,
      color: "from-cyan-500 to-blue-500",
      duration: "12 months"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "4+", label: "Years Experience" }
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Financial Services",
    "E-commerce",
    "Manufacturing",
    "Logistics",
    "Education",
    "Government"
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client testimonials, AI solutions, IT services, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Real results for real businesses
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries transform
                their operations with our AI and IT solutions. See the measurable impact
                of our work.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mb-6`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <p className="text-purple-400 font-semibold">{study.client}</p>
                    <p className="text-gray-400 text-sm">{study.industry} • {study.duration}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have experience across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <span className="text-gray-300 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business and achieve
              similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;