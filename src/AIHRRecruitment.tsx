import React from 'react';
import { 
  Users, 
  Search, 
  Target, 
  ArrowRight,
  BarChart3,
  Clock,
  CheckCircle,
  Brain
} from 'lucide-react';

const AIHRRecruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI HR Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Talent Acquisition
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your hiring process with AI-powered recruitment tools that identify, 
              assess, and match the best candidates for your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recruitment Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Advanced AI tools for every stage of the recruitment process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: 'Smart Candidate Sourcing',
                description: 'AI-powered candidate discovery across multiple platforms and databases'
              },
              {
                icon: Target,
                title: 'Precision Matching',
                description: 'Advanced matching algorithms that align candidate skills with job requirements'
              },
              {
                icon: Brain,
                title: 'AI Screening',
                description: 'Automated initial screening and assessment of candidate qualifications'
              },
              {
                icon: BarChart3,
                title: 'Analytics Dashboard',
                description: 'Comprehensive analytics and insights into recruitment performance and trends'
              },
              {
                icon: Clock,
                title: 'Time Optimization',
                description: 'Streamlined processes that reduce time-to-hire and improve efficiency'
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                description: 'Built-in quality checks to ensure the best candidate selection'
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
            <h2 className="text-4xl font-bold text-white mb-4">Recruitment Solutions</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive recruitment solutions for organizations of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enterprise Recruitment',
                description: 'Full-scale recruitment solutions for large organizations with complex hiring needs.'
              },
              {
                title: 'Startup Hiring',
                description: 'Streamlined recruitment tools designed for fast-growing startups and scale-ups.'
              },
              {
                title: 'Executive Search',
                description: 'Specialized AI tools for identifying and recruiting top-level executive talent.'
              },
              {
                title: 'Technical Recruitment',
                description: 'Advanced screening and assessment tools for technical and specialized roles.'
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Hiring Process Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI HR Recruitment platform and find the best talent for your organization.
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

export default AIHRRecruitment;