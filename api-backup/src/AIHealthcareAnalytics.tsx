import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  BarChart3, 
  Activity, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  TrendingUp 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AIHealthcareAnalytics() {
  return (
    <>
      <SEOHead
        title="AI Healthcare Analytics - Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform that provides insights, predictions, and optimization for healthcare organizations."
        keywords="AI healthcare, healthcare analytics, medical AI, health insights, healthcare optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-pink-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-500/20 rounded-full px-6 py-3 mb-6">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-medium">AI Healthcare Analytics</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Intelligent
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent block">
                  Healthcare Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered healthcare analytics platform that provides insights, 
                predictions, and optimization for healthcare organizations with unprecedented accuracy.
              </p>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Analytics Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that transform healthcare data into actionable insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: BarChart3,
                  title: 'Predictive Analytics',
                  description: 'Predict patient outcomes and identify potential health risks before they occur',
                },
                {
                  icon: Activity,
                  title: 'Real-time Monitoring',
                  description: 'Monitor patient health metrics and vital signs in real-time',
                },
                {
                  icon: Brain,
                  title: 'Intelligent Diagnosis',
                  description: 'AI-assisted diagnosis with 99.2% accuracy in medical imaging',
                },
                {
                  icon: Shield,
                  title: 'Risk Assessment',
                  description: 'Comprehensive risk assessment and early warning systems',
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Optimization',
                  description: 'Optimize healthcare operations and resource allocation',
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Assurance',
                  description: 'Ensure the highest standards of care and patient safety',
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-red-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-red-500 mb-6" />
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
              Ready to Transform Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Healthcare Analytics platform and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
        </div>
      </section>
      </div>
    </>
  );
}
