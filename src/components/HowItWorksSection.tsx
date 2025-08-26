import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We begin by understanding your business needs, current technology stack, and strategic objectives through comprehensive discovery sessions.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our expert team designs a customized solution architecture that aligns with your business goals and technical requirements.",
      icon: "✏️",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We deploy your solution using industry best practices, ensuring minimal disruption to your existing operations.",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing and quality assurance processes ensure your solution meets the highest standards of performance and reliability.",
      icon: "✅",
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: "05",
      title: "Deployment & Training",
      description: "We launch your solution and provide comprehensive training to your team, ensuring smooth adoption and maximum value.",
      icon: "🚀",
      color: "from-red-500 to-pink-500"
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "24/7 monitoring, maintenance, and support ensure your solution continues to deliver optimal performance and value.",
      icon: "🆘",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery through a structured, collaborative approach that puts your success first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6`}>
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {step.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Agile Methodology</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <span className="text-white font-semibold">Continuous Delivery</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-white font-semibold">Quality First</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Consultation
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}