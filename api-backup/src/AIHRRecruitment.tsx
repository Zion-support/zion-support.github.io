import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Search, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  TrendingUp 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AIHRRecruitment() {
  return (
    <>
      <SEOHead
        title="AI HR Recruitment - Zion Tech Group"
        description="Revolutionary AI-powered HR recruitment platform that streamlines hiring processes, matches candidates with roles, and optimizes talent acquisition."
        keywords="AI recruitment, HR automation, talent acquisition, candidate matching, hiring optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-blue-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">AI HR Recruitment</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Intelligent
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
                  Talent Acquisition
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered HR recruitment platform that streamlines hiring processes, 
                matches candidates with roles, and optimizes talent acquisition with unprecedented efficiency.
              </p>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recruitment Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that transform how you find, evaluate, and hire talent
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: 'Smart Candidate Search',
                  description: 'AI-powered search that finds the best candidates based on skills, experience, and cultural fit',
                },
                {
                  icon: Target,
                  title: 'Precise Matching',
                  description: 'Advanced algorithms match candidates to roles with 95% accuracy',
                },
                {
                  icon: Brain,
                  title: 'Intelligent Screening',
                  description: 'Automated resume screening and initial candidate evaluation',
                },
                {
                  icon: Zap,
                  title: 'Rapid Processing',
                  description: 'Process hundreds of applications in minutes, not hours',
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Analytics',
                  description: 'Track hiring metrics and optimize recruitment strategies',
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Assurance',
                  description: 'Ensure only the best candidates make it through the process',
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-green-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-green-500 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI HR Recruitment platform and find the best talent faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
        </div>
      </section>
      </div>
    </>
  );
}
