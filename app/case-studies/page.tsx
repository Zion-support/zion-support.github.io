import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "AI-Powered Customer Service Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "High customer service costs and long response times affecting customer satisfaction.",
      solution: "Implemented AI-powered chatbots and automated ticket routing system with natural language processing.",
      results: [
        "75% reduction in response time",
        "60% decrease in support costs",
        "90% customer satisfaction rate",
        "24/7 automated support coverage"
      ],
      image: "/images/case-studies/ai-customer-service.jpg",
      duration: "3 months",
      team: "8 specialists"
    },
    {
      id: "2",
      title: "Cloud Migration for Financial Services",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.",
      solution: "Complete cloud migration to AWS with microservices architecture and automated scaling.",
      results: [
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs",
        "300% improvement in deployment speed",
        "Enhanced security compliance"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "6 months",
      team: "12 specialists"
    },
    {
      id: "3",
      title: "Cybersecurity Enhancement for Healthcare",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Increasing cyber threats and need for HIPAA compliance in patient data protection.",
      solution: "Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 12 months",
        "Real-time threat detection and response",
        "Automated compliance reporting"
      ],
      image: "/images/case-studies/cybersecurity-healthcare.jpg",
      duration: "4 months",
      team: "10 specialists"
    },
    {
      id: "4",
      title: "Machine Learning for Predictive Analytics",
      client: "RetailMax",
      industry: "Retail",
      challenge: "Inventory management inefficiencies leading to stockouts and overstock situations.",
      solution: "ML-powered demand forecasting system with real-time inventory optimization.",
      results: [
        "40% reduction in stockouts",
        "25% decrease in excess inventory",
        "15% increase in revenue",
        "Real-time demand prediction accuracy of 92%"
      ],
      image: "/images/case-studies/ml-predictive-analytics.jpg",
      duration: "5 months",
      team: "6 specialists"
    },
    {
      id: "5",
      title: "Digital Transformation for Manufacturing",
      client: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Manual processes and lack of real-time visibility into production efficiency.",
      solution: "IoT integration with AI-powered analytics dashboard and automated quality control.",
      results: [
        "30% increase in production efficiency",
        "50% reduction in quality defects",
        "Real-time production monitoring",
        "Predictive maintenance implementation"
      ],
      image: "/images/case-studies/digital-transformation.jpg",
      duration: "8 months",
      team: "15 specialists"
    },
    {
      id: "6",
      title: "Blockchain Integration for Supply Chain",
      client: "GlobalLogistics",
      industry: "Logistics",
      challenge: "Lack of transparency and traceability in complex supply chain operations.",
      solution: "Blockchain-based supply chain tracking system with smart contracts and real-time verification.",
      results: [
        "Complete supply chain transparency",
        "60% reduction in disputes",
        "Real-time shipment tracking",
        "Automated compliance verification"
      ],
      image: "/images/case-studies/blockchain-supply-chain.jpg",
      duration: "7 months",
      team: "11 specialists"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Industry Awards", value: "25+", icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses transform with cutting-edge AI and IT solutions. 
                Real results from real clients.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real impact
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {study.duration} • {study.team}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold">{study.client}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <button className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;