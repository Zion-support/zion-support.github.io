import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { ArrowRight, TrendingUp, Users, Zap, Shield, Brain, Clock, DollarSign, CheckCircle, ExternalLink } from 'lucide-react';

export default function CaseStudiesComprehensivePage() {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Giant: 99.9% Operational Efficiency",
      company: "TechManufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiencies and $50M annual losses",
      solution: "AI Autonomous Operations Platform with quantum-enhanced optimization",
      results: {
        efficiency: "+99.9%",
        costReduction: "-85%",
        revenueGrowth: "+300%",
        timeToMarket: "-90%"
      },
      testimonial: "Zion Tech Group's AI solutions transformed our entire operation. We achieved 99.9% efficiency and saved $42M annually while increasing revenue by 300%.",
      author: "Jennifer Martinez",
      position: "CEO, TechManufacturing Corp",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Financial Services Leader: Quantum Risk Assessment Revolution",
      company: "Quantum Financial Services",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking weeks with 60% accuracy",
      solution: "Quantum Financial Risk Assessment & Portfolio Optimization Platform",
      results: {
        accuracy: "+95%",
        speed: "10,000x faster",
        costReduction: "-70%",
        clientSatisfaction: "+85%"
      },
      testimonial: "The quantum risk assessment platform reduced our modeling time from weeks to minutes with 95% accuracy. Our clients love the real-time insights.",
      author: "David Thompson",
      position: "Chief Risk Officer, Quantum Financial Services",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Healthcare Network: Neural Interface Patient Care",
      company: "NeuroCare Health Systems",
      industry: "Healthcare",
      challenge: "Patient monitoring gaps and delayed diagnosis causing poor outcomes",
      solution: "IoT Healthcare Remote Monitoring with Neural Interface Technology",
      results: {
        patientOutcomes: "+45%",
        readmissions: "-30%",
        diagnosisSpeed: "+200%",
        costSavings: "-40%"
      },
      testimonial: "Neural interface technology revolutionized our patient care. We improved outcomes by 45% and reduced readmissions by 30%.",
      author: "Dr. Sarah Williams",
      position: "Chief Medical Officer, NeuroCare Health Systems",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "E-commerce Platform: AI Customer Experience Optimization",
      company: "NextGen Commerce",
      industry: "E-commerce",
      challenge: "Low conversion rates and high customer churn affecting growth",
      solution: "Autonomous Customer Experience Optimization Platform",
      results: {
        conversionRate: "+50%",
        customerSatisfaction: "+35%",
        retention: "+40%",
        revenue: "+250%"
      },
      testimonial: "The autonomous customer experience platform increased our conversion rates by 50% and customer satisfaction by 35%. Revenue grew 250% in 6 months.",
      author: "Alex Chen",
      position: "VP of Growth, NextGen Commerce",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Energy Grid: Autonomous Energy Management",
      company: "SmartGrid Energy Corp",
      industry: "Energy & Utilities",
      challenge: "Energy waste and grid instability causing $100M annual losses",
      solution: "Autonomous Energy Grid Optimization & Management System",
      results: {
        energyWaste: "-25%",
        gridStability: "+40%",
        costSavings: "-35%",
        renewableIntegration: "+60%"
      },
      testimonial: "The autonomous energy management system reduced waste by 25% and improved grid stability by 40%. We saved $35M annually.",
      author: "Robert Johnson",
      position: "Grid Operations Director, SmartGrid Energy Corp",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Legal Firm: AI Contract Analysis & Risk Assessment",
      company: "Elite Legal Partners",
      industry: "Legal Services",
      challenge: "Contract review taking 80% of lawyer time with 70% accuracy",
      solution: "AI-Powered Legal Contract Analysis & Risk Assessment Platform",
      results: {
        reviewTime: "-80%",
        accuracy: "+95%",
        costReduction: "-60%",
        clientSatisfaction: "+90%"
      },
      testimonial: "AI contract analysis reduced review time by 80% while improving accuracy to 95%. Our lawyers can focus on strategic work now.",
      author: "Amanda Foster",
      position: "Managing Partner, Elite Legal Partners",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Success Stories & Case Studies | Zion Tech Group"
        description="Real-world case studies showcasing how our AI services deliver 2,500-5,000% ROI. See how businesses transformed with autonomous operations, quantum computing, and neural interfaces."
        keywords="AI case studies, success stories, business transformation, ROI, autonomous operations, quantum computing, neural interfaces"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Success Stories & Case Studies
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-world transformations with measurable results. See how our AI services 
                deliver 2,500-5,000% ROI across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ai-services-comprehensive" 
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2,500%</div>
              <div className="text-white font-semibold">Average ROI</div>
              <div className="text-gray-400 text-sm">Within 6-12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white font-semibold">Efficiency Gain</div>
              <div className="text-gray-400 text-sm">Operational optimization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-white font-semibold">Speed Improvement</div>
              <div className="text-gray-400 text-sm">Processing acceleration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$50M+</div>
              <div className="text-white font-semibold">Average Savings</div>
              <div className="text-gray-400 text-sm">Annual cost reduction</div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth analysis of how our AI solutions transformed businesses across 
              different industries with measurable results.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{study.industry}</div>
                        <div className="text-lg font-semibold text-white">{study.company}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-green-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-purple-500/20">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                            <svg viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          </div>
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-300 italic mb-6">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="border-l-4 border-cyan-400 pl-4">
                        <div className="font-semibold text-white">{study.author}</div>
                        <div className="text-gray-400">{study.position}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link 
                        href="/contact" 
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Get Similar Results
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link 
                        href="/ai-services-comprehensive" 
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-300">
                Our AI solutions deliver measurable results across diverse sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { industry: "Manufacturing", icon: Zap, results: "99.9% efficiency, $50M savings" },
                { industry: "Financial Services", icon: DollarSign, results: "95% accuracy, 10,000x speed" },
                { industry: "Healthcare", icon: Shield, results: "45% better outcomes, 30% fewer readmissions" },
                { industry: "E-commerce", icon: TrendingUp, results: "50% conversion increase, 250% revenue growth" },
                { industry: "Energy & Utilities", icon: Zap, results: "25% waste reduction, 40% stability improvement" },
                { industry: "Legal Services", icon: Brain, results: "80% time reduction, 95% accuracy" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <item.icon className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{item.industry}</h3>
                  </div>
                  <p className="text-gray-300">{item.results}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed with our AI solutions. 
              Get started with a free consultation and see how we can deliver similar results for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-services-comprehensive" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}