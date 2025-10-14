import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: {
        conversion: '+45%',
      revenue: '+$2.3M',
      abandonment: '-30%',
      timeframe: '6 months'
      }
      description: 'TechRetail Inc. transformed their e-commerce platform with our AI solutions, resulting in significant improvements in conversion rates and customer satisfaction.'
    }
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Developed comprehensive data analytics platform with predictive modeling',
      results: {
        diagnosis: '+60%',
      efficiency: '+40%',
      accuracy: '+85%',
      timeframe: '8 months'
      }
      description: 'MedTech Solutions achieved breakthrough improvements in patient care through our advanced data analytics and AI-powered diagnostic tools.'
    }
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: {
        performance: '+200%',
      costs: '-35%',
      security: '+99.9%',
      timeframe: '12 months'
      }
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-violet-500 transition-all duration-300 hover:scale-105">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm rounded-full">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="text-violet-400 font-semibold">Client: {study.client}</div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{study.results.conversion}</div>
                  <div className="text-gray-400 text-sm">Conversion Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{study.results.revenue}</div>
                  <div className="text-gray-400 text-sm">Revenue Increase</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">{study.results.efficiency}</div>
                  <div className="text-gray-400 text-sm">Efficiency Gain</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">{study.results.timeframe}</div>
                  <div className="text-gray-400 text-sm">Implementation</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can transform your business and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a,
  href ="/contact"
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a,
  href ="/demo"
              className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CaseStudiesPage