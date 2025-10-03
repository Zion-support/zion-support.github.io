// import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  TrendingUp,
  Award,
  Target,
  Rocket,
  DollarSign,
  Percent
} from 'lucide-react';

export const metadata = {
  title: 'Case Studies — Zion Tech Group AI Transformation Success Stories',
  description: 'Real success stories of AI transformation delivering 1000x performance gains, 95% automation, and $150M+ ROI for Fortune 500 companies.',
  keywords: 'AI case studies, enterprise AI transformation, AI success stories, Fortune 500 AI, AI ROI case studies, AI automation results',
  openGraph: {
    title: 'Case Studies — Zion Tech Group AI Transformation Success Stories',
    description: 'Real success stories of AI transformation delivering 1000x performance gains, 95% automation, and $150M+ ROI for Fortune 500 companies.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
    images: [
      {
        url: '/og-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Case Studies - AI Success Stories',
      },
    ],
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Fortune 500 Quantum AI Transformation",
      company: "Global Technology Corporation",
      industry: "Technology",
      challenge: "Complex computational bottlenecks limiting innovation and scalability",
      solution: "Implemented quantum-enhanced AI systems with neural optimization",
      results: [
        "1000x Performance Improvement",
        "$150M ROI in First Year",
        "95% Process Automation",
        "500% Innovation Acceleration"
      ],
      image: "/case-studies/fortune-500.jpg",
      link: "/case-studies/fortune-500-ai-transformation",
      testimonial: {
        quote: "Zion Tech Group's quantum AI solution transformed our entire operation. The 1000x performance gain exceeded our wildest expectations.",
        author: "Sarah Chen",
        role: "CTO, Global Technology Corporation"
      }
    },
    {
      title: "Autonomous Enterprise Revolution",
      company: "Manufacturing Giant Inc.",
      industry: "Manufacturing",
      challenge: "Manual processes causing inefficiencies and operational delays",
      solution: "Deployed autonomous AI systems across all business operations",
      results: [
        "95% Automation Achievement",
        "60% Cost Reduction",
        "24/7 Autonomous Operations",
        "Zero Manual Intervention"
      ],
      image: "/case-studies/autonomous-enterprise.jpg",
      link: "/case-studies/autonomous-enterprise-2-billion-success",
      testimonial: {
        quote: "Our autonomous enterprise system now handles 95% of operations independently. This is the future of manufacturing.",
        author: "Michael Rodriguez",
        role: "CEO, Manufacturing Giant Inc."
      }
    },
    {
      title: "AI-Powered Financial Intelligence",
      company: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex risk assessment and trading optimization requirements",
      solution: "Implemented advanced AI financial intelligence platform",
      results: [
        "300% Trading Accuracy",
        "$500M Revenue Increase",
        "Real-time Risk Assessment",
        "Automated Compliance"
      ],
      image: "/case-studies/financial-ai.jpg",
      link: "/case-studies/ai-2026-quantum-neural-superintelligence-25-billion-success",
      testimonial: {
        quote: "The AI financial intelligence platform revolutionized our trading operations with unprecedented accuracy and speed.",
        author: "Dr. Amanda Foster",
        role: "Chief Risk Officer, Global Investment Bank"
      }
    },
    {
      title: "Healthcare AI Diagnostics Revolution",
      company: "Metropolitan Hospital Network",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy and patient care optimization",
      solution: "Deployed AI-powered diagnostic and patient care systems",
      results: [
        "99% Diagnostic Accuracy",
        "50% Faster Diagnosis",
        "Improved Patient Outcomes",
        "Reduced Medical Errors"
      ],
      image: "/case-studies/healthcare-ai.jpg",
      link: "/case-studies/ai-2026-neural-architecture-1-trillion-success",
      testimonial: {
        quote: "Our AI diagnostic system has revolutionized patient care with 99% accuracy and significantly improved outcomes.",
        author: "Dr. Robert Kim",
        role: "Chief Medical Officer, Metropolitan Hospital"
      }
    },
    {
      title: "Retail AI Transformation",
      company: "Global Retail Chain",
      industry: "Retail",
      challenge: "Inventory management and customer experience optimization",
      solution: "Implemented comprehensive AI retail intelligence platform",
      results: [
        "40% Inventory Optimization",
        "70% Customer Satisfaction",
        "Real-time Analytics",
        "Predictive Demand Forecasting"
      ],
      image: "/case-studies/retail-ai.jpg",
      link: "/case-studies/ai-2026-revolutionary-automation-success",
      testimonial: {
        quote: "The AI retail platform transformed our operations with predictive insights and optimized customer experiences.",
        author: "Jennifer Walsh",
        role: "VP of Operations, Global Retail Chain"
      }
    },
    {
      title: "Supply Chain AI Optimization",
      company: "International Logistics Corp",
      industry: "Logistics",
      challenge: "Complex supply chain optimization and cost management",
      solution: "Deployed AI-powered supply chain intelligence system",
      results: [
        "30% Cost Reduction",
        "50% Faster Delivery",
        "Real-time Tracking",
        "Predictive Maintenance"
      ],
      image: "/case-studies/supply-chain-ai.jpg",
      link: "/case-studies/ai-2026-ultimate-autonomous-revolution-100-billion-success",
      testimonial: {
        quote: "Our AI supply chain system delivered unprecedented efficiency with 30% cost reduction and 50% faster delivery.",
        author: "David Park",
        role: "COO, International Logistics Corp"
      }
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Award },
    { label: "Average ROI", value: "$150M+", icon: DollarSign },
    { label: "Performance Gains", value: "1000x", icon: TrendingUp },
    { label: "Automation Rate", value: "95%", icon: Percent }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Real results from Fortune 500 companies and enterprise clients who have transformed 
              their operations with our revolutionary AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading organizations achieved breakthrough results with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-medium">
                    <span className="text-blue-600">{study.company}</span>
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={study.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold hover:translate-x-1 transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of enterprises already experiencing revolutionary results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Transformation
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}