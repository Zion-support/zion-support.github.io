import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: "🔍",
      title: "Discover",
      description: "Browse our comprehensive catalog of services, talent, and solutions",
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      icon: "🤝",
      title: "Connect",
      description: "Get matched with the perfect team or service for your project",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      icon: "📋",
      title: "Plan",
      description: "Collaborate on project requirements, timeline, and deliverables",
      color: "from-zion-blue to-zion-blue-dark"
    },
    {
      icon: "🚀",
      title: "Execute",
      description: "Watch your vision come to life with our expert execution",
      color: "from-zion-cyan-light to-zion-cyan"
    },
    {
      icon: "✅",
      title: "Deliver",
      description: "Receive your completed project with ongoing support and maintenance",
      color: "from-zion-purple-light to-zion-purple"
    }
  ];

  const stats = [
    { icon: "⏱️", value: "3x Faster", label: "Project Delivery" },
    { icon: "🎯", value: "99.9%", label: "Success Rate" },
    { icon: "📈", value: "50%", label: "Cost Reduction" },
    { icon: "🏆", value: "1000+", label: "Projects Completed" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
              <div className="text-zion-cyan mb-2 flex justify-center text-2xl">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10">
                  {index + 1}
                </div>
                
                {/* Step content */}
                <div className="bg-zion-blue-dark/40 backdrop-blur-sm p-6 rounded-xl border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}