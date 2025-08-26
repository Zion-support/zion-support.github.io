import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Brain,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Shield,
  Cpu
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      industry: "Banking & Finance",
      challenge: "Legacy system modernization and customer experience improvement",
      solution: "AI-powered digital transformation platform with autonomous business processes",
      results: [
        "40% reduction in operational costs",
        "60% improvement in customer satisfaction",
        "3x faster transaction processing",
        "99.9% system uptime achieved"
      ],
      metrics: {
        costReduction: "40%",
        efficiencyGain: "60%",
        customerSatisfaction: "95%",
        timeToMarket: "50% faster"
      },
      icon: TrendingUp
    },
    {
      title: "Healthcare AI Implementation",
      company: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Patient data management and diagnostic accuracy improvement",
      solution: "AI-powered healthcare platform with autonomous diagnostic assistance",
      results: [
        "30% improvement in diagnostic accuracy",
        "50% reduction in patient wait times",
        "Enhanced patient data security",
        "Streamlined administrative processes"
      ],
      metrics: {
        accuracyImprovement: "30%",
        waitTimeReduction: "50%",
        securityScore: "99.9%",
        efficiencyGain: "45%"
      },
      icon: Brain
    },
    {
      title: "Manufacturing Process Optimization",
      company: "International Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production inefficiencies and quality control issues",
      solution: "AI autonomous manufacturing system with predictive maintenance",
      results: [
        "25% increase in production efficiency",
        "90% reduction in quality defects",
        "Predictive maintenance implementation",
        "Real-time performance monitoring"
      ],
      metrics: {
        productionEfficiency: "25%",
        qualityImprovement: "90%",
        downtimeReduction: "70%",
        costSavings: "35%"
      },
      icon: Cpu
    },
    {
      title: "E-commerce Platform Enhancement",
      company: "Online Retail Giant",
      industry: "E-commerce",
      challenge: "Customer personalization and conversion rate optimization",
      solution: "AI-powered recommendation engine with autonomous marketing",
      results: [
        "45% increase in conversion rates",
        "35% improvement in customer retention",
        "Personalized shopping experience",
        "Automated marketing campaigns"
      ],
      metrics: {
        conversionIncrease: "45%",
        retentionImprovement: "35%",
        customerSatisfaction: "92%",
        revenueGrowth: "40%"
      },
      icon: Users
    }
  ];

  const industries = [
    "Banking & Finance",
    "Healthcare",
    "Manufacturing",
    "E-commerce",
    "Technology",
    "Education",
    "Government",
    "Energy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Case Studies - Zion Tech Group"
        description="Discover how Zion Tech Group has transformed businesses across industries with AI-powered solutions. Real results, measurable outcomes, and success stories."
        keywords="case studies, success stories, AI implementation, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Success Stories
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Real results from real businesses. Discover how our AI-powered solutions have 
            transformed organizations across industries and delivered measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Case Studies
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center">
                    <study.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-medium mb-4">{study.company}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-700/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join the ranks of successful businesses that have transformed with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;