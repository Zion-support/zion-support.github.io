import React from 'react';
import { 
  Heart, 
  Activity, 
  Brain, 
  Target, 
  BarChart3, 
  ArrowRight,
  Database, 
  Shield
} from 'lucide-react';

const AIHealthcareAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Healthcare Analytics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Healthcare Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform healthcare data into actionable insights with AI-powered analytics 
              that improve patient outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Analytics Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare analytics powered by advanced AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Activity,
                title: 'Patient Monitoring',
                description: 'Real-time patient monitoring and health trend analysis'
              },
              {
                icon: BarChart3,
                title: 'Predictive Analytics',
                description: 'AI-powered predictions for patient outcomes and risk assessment'
              },
              {
                icon: Brain,
                title: 'Clinical Decision Support',
                description: 'Intelligent decision support systems for healthcare professionals'
              },
              {
                icon: Database,
                title: 'Data Integration',
                description: 'Seamless integration of healthcare data from multiple sources'
              },
              {
                icon: Shield,
                title: 'Compliance & Security',
                description: 'HIPAA-compliant analytics with enterprise-grade security'
              },
              {
                icon: Target,
                title: 'Outcome Optimization',
                description: 'Data-driven insights to optimize patient care and outcomes'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare Applications</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transform healthcare delivery with AI-powered analytics
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Hospital Management',
                description: 'Optimize hospital operations, resource allocation, and patient flow management.'
              },
              {
                title: 'Clinical Research',
                description: 'Accelerate clinical research with AI-powered data analysis and insights.'
              },
              {
                title: 'Population Health',
                description: 'Monitor and improve population health outcomes through predictive analytics.'
              },
              {
                title: 'Telemedicine',
                description: 'Enhance telemedicine services with intelligent patient monitoring and analysis.'
              }
            ].map((application, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionize Healthcare Analytics
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI Healthcare Analytics platform and transform your healthcare data into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;