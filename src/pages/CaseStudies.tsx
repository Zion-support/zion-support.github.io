import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  DollarSign,
  ChartBar,
  Clock,
  Award
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      icon: Building,
      title: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Complex supply chain optimization and real-time production monitoring across 15 facilities worldwide.",
      solution: "Implemented AI-powered autonomous business operations platform with IoT integration and predictive analytics.",
      results: [
        "40% reduction in operational costs",
        "60% improvement in production efficiency",
        "Real-time visibility across all facilities",
        "Predictive maintenance preventing 85% of downtime"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Financial Services Enterprise",
      industry: "Financial Services",
      challenge: "Complex compliance requirements and security threats requiring 24/7 monitoring and automated response.",
      solution: "Deployed SOC2 compliance automation platform with AI-powered threat detection and automated compliance reporting.",
      results: [
        "90% reduction in compliance audit time",
        "Real-time security threat detection",
        "Automated compliance reporting",
        "Zero security breaches in 18 months"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Healthcare Research Institute",
      industry: "Healthcare",
      challenge: "Massive data analysis requirements for drug discovery and clinical research across multiple research domains.",
      solution: "Implemented AI autonomous research assistant with quantum neural network capabilities for accelerated research.",
      results: [
        "10x faster research timeline",
        "Discovery of 3 new drug candidates",
        "Automated literature review and analysis",
        "95% accuracy in research findings"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Technology Startup",
      industry: "Technology",
      challenge: "Rapid scaling requirements with limited IT resources and need for enterprise-grade infrastructure.",
      solution: "Deployed comprehensive IT infrastructure with AI-powered asset management and 5G enterprise solutions.",
      results: [
        "300% growth in user base",
        "99.9% system uptime",
        "Automated infrastructure scaling",
        "50% reduction in IT operational costs"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Retail Chain",
      industry: "Retail",
      challenge: "Inventory management across 200+ locations with real-time demand forecasting and supply chain optimization.",
      solution: "Implemented AI-powered business intelligence platform with autonomous operations and predictive analytics.",
      results: [
        "25% reduction in inventory costs",
        "Improved customer satisfaction by 35%",
        "Real-time demand forecasting",
        "Automated supply chain optimization"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services Provider",
      industry: "Cloud Services",
      challenge: "Managing complex multi-cloud environments with security compliance and performance optimization requirements.",
      solution: "Deployed comprehensive cloud management platform with AI-powered optimization and security automation.",
      results: [
        "40% improvement in cloud performance",
        "Automated security compliance",
        "Reduced cloud costs by 30%",
        "99.99% service availability"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const industries = [
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Technology",
    "Retail",
    "Cloud Services",
    "Education",
    "Government",
    "Energy",
    "Transportation"
  ];

  const metrics = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "40%",
      description: "Average cost savings across all implementations"
    },
    {
      icon: ChartBar,
      title: "Efficiency Gain",
      value: "60%",
      description: "Average improvement in operational efficiency"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "10x",
      description: "Average acceleration in project timelines"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "98%",
      description: "Successful project completion rate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's AI-powered solutions have transformed businesses across industries. See measurable results and success stories." />
        <meta name="keywords" content="case studies, success stories, AI implementation, business transformation, ROI, customer success" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success Stories
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                & Case Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how our AI-powered solutions have transformed businesses across industries. 
              Real results, measurable impact, and proven success stories from organizations 
              that trusted Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                View All Case Studies
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-xl transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions deliver measurable, impactful results across all industries 
                and business sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="text-4xl font-bold text-yellow-400 mb-2">{metric.value}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                      <p className="text-gray-300 text-sm">{metric.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing real implementations, 
                challenges overcome, and measurable results achieved.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-yellow-400 mb-1">Challenge</h4>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-1">Solution</h4>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have been successfully implemented across diverse industries, 
                delivering measurable results and transformative impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {industry}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing list of organizations that have transformed their business 
                with Zion Tech Group's AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;