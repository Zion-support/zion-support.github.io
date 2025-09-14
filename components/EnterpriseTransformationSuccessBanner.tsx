import React from 'react';
import Link from 'next/link';

const EnterpriseTransformationSuccessBanner: React.FC = () => {
  const successMetrics = [
    { metric: "500+", label: "Enterprise Clients", icon: "🏢" },
    { metric: "340%", label: "Average ROI Increase", icon: "📈" },
    { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
    { metric: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Manufacturing",
      result: "500% ROI in 6 months",
      description: "Implemented autonomous production systems and AI-driven quality control",
      link: "/case-studies/fortune-500-manufacturing"
    },
    {
      company: "Global Financial Services",
      result: "1000% efficiency increase",
      description: "Deployed quantum AI algorithms for risk assessment and fraud detection",
      link: "/case-studies/global-financial-services"
    },
    {
      company: "Healthcare Technology Leader",
      result: "95% accuracy improvement",
      description: "Integrated neural interface technology for diagnostic precision",
      link: "/case-studies/healthcare-tech-leader"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 ENTERPRISE SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Enterprise with AI
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Join industry leaders who have achieved unprecedented success through our revolutionary AI solutions and enterprise automation technologies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {successMetrics.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">{item.metric}</div>
              <div className="text-sm opacity-90">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">{study.company}</h3>
              <div className="text-2xl font-bold text-green-300 mb-4">{study.result}</div>
              <p className="opacity-90 mb-6">{study.description}</p>
              <Link 
                href={study.link}
                className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors inline-flex items-center"
              >
                Read Full Case Study →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our expert team is ready to help you implement the same revolutionary technologies that have transformed these industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              🚀 Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
            >
              📋 View Our Services
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-80">
              <span className="font-bold text-yellow-300">Free consultation</span> • <span className="font-bold text-yellow-300">Custom solution design</span> • <span className="font-bold text-yellow-300">24/7 expert support</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTransformationSuccessBanner;