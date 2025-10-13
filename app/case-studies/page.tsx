import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Star,
  Calendar,
  User,
  Building,
  Target,
  Award,
  Clock
} from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';
import EnhancedSEO from '../components/EnhancedSEO';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and automated customer support",
      results: [
        "60% reduction in inventory costs",
        "40% increase in customer satisfaction",
        "80% faster response times"
      ],
      image: "/images/case-study-1.jpg",
      testimonial: "Zion Tech Group transformed our entire operation. The AI solutions saved us thousands of hours and significantly improved our bottom line.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc."
    },
    {
      id: 2,
      title: "Healthcare Data Security Enhancement",
      company: "MedSecure Health",
      industry: "Healthcare",
      challenge: "Compliance with HIPAA regulations and data security concerns",
      solution: "Comprehensive cybersecurity framework and data protection system",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 12 months",
        "50% reduction in security incidents"
      ],
      image: "/images/case-study-2.jpg",
      testimonial: "The security solutions provided by Zion Tech Group gave us complete peace of mind. Our data is now fully protected.",
      author: "Dr. Michael Chen",
      role: "CTO, MedSecure Health"
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "IoT integration and AI-powered quality control systems",
      results: [
        "35% increase in production efficiency",
        "90% reduction in quality defects",
        "25% decrease in operational costs"
      ],
      image: "/images/case-study-3.jpg",
      testimonial: "The automation solutions revolutionized our manufacturing process. We're now more efficient and profitable than ever.",
      author: "Robert Martinez",
      role: "Operations Director, AutoParts Manufacturing"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Case Studies - Zion Tech Group | Success Stories & Client Results"
        description="Explore our success stories and see how we've helped businesses transform with AI, cybersecurity, and digital solutions. Real results from real clients."
        keywords="case studies, success stories, client results, AI implementation, cybersecurity solutions, digital transformation"
        canonical="https://ziontechgroup.com/case-studies"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Real Results, Real Impact
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform with cutting-edge technology solutions. 
            See the measurable impact of our AI, cybersecurity, and digital transformation services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses across industries achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{study.company}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="text-white font-medium mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <blockquote className="text-gray-300 text-sm italic mb-3">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="text-xs text-gray-400">
                    <div className="font-medium">{study.author}</div>
                    <div>{study.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the growing list of businesses that have transformed with our technology solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
