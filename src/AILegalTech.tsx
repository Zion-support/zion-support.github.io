import React from 'react';
import { 
  Scale, 
  FileText, 
  Search, 
  Brain, 
  Target, 
  BarChart3, 
  ArrowRight,
  Shield
} from 'lucide-react';

const AILegalTech = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Scale className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Legal Tech</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Legal Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize legal practice with AI-powered tools that streamline document analysis, 
              case research, and legal decision-making processes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Legal Tech Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Advanced AI tools for modern legal practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: 'Document Analysis',
                description: 'AI-powered analysis of legal documents, contracts, and case files'
              },
              {
                icon: Search,
                title: 'Legal Research',
                description: 'Intelligent legal research and case law analysis across multiple databases'
              },
              {
                icon: Brain,
                title: 'Case Prediction',
                description: 'Predictive analytics for case outcomes and legal strategy optimization'
              },
              {
                icon: BarChart3,
                title: 'Compliance Monitoring',
                description: 'Automated compliance checking and regulatory monitoring'
              },
              {
                icon: Shield,
                title: 'Risk Assessment',
                description: 'AI-powered risk analysis and mitigation strategies'
              },
              {
                icon: Target,
                title: 'Contract Review',
                description: 'Automated contract review and clause analysis'
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
            <h2 className="text-4xl font-bold text-white mb-4">Legal Applications</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transform legal practice with AI-powered solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Law Firm Operations',
                description: 'Streamline law firm operations with AI-powered case management and client services.'
              },
              {
                title: 'Corporate Legal',
                description: 'Enhance corporate legal departments with automated compliance and risk management.'
              },
              {
                title: 'Legal Research',
                description: 'Accelerate legal research with AI-powered case law analysis and precedent identification.'
              },
              {
                title: 'Document Automation',
                description: 'Automate document generation and review processes for increased efficiency.'
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
            Transform Your Legal Practice
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI Legal Tech platform and revolutionize your legal practice today.
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

export default AILegalTech;