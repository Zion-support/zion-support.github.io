'use client';

import React, { useState, useEffect } from 'react';

const UltimateSuccessMetricsShowcase2025 = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    projectsCompleted: 0,
    clientSatisfaction: 0,
    averageROI: 0,
    supportHours: 0,
    costSavings: 0,
    efficiencyGains: 0
  });

  const metrics = [
    {
      id: 1,
      title: "Projects Completed",
      value: 500,
      suffix: "+",
      description: "Successful AI and automation projects delivered",
      icon: "🚀",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      title: "Client Satisfaction",
      value: 98,
      suffix: "%",
      description: "Average client satisfaction rating",
      icon: "⭐",
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      id: 3,
      title: "Average ROI",
      value: 340,
      suffix: "%",
      description: "Average return on investment achieved",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      title: "Support Hours",
      value: 24,
      suffix: "/7",
      description: "Round-the-clock support availability",
      icon: "🛠️",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: 5,
      title: "Cost Savings",
      value: 50,
      suffix: "M+",
      description: "Total cost savings generated for clients",
      icon: "💵",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50"
    },
    {
      id: 6,
      title: "Efficiency Gains",
      value: 85,
      suffix: "%",
      description: "Average efficiency improvement achieved",
      icon: "⚡",
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-50 to-rose-50"
    }
  ];

  const industryMetrics = [
    {
      industry: "Manufacturing",
      projects: 125,
      avgROI: 380,
      efficiency: 88,
      costSavings: 15.2
    },
    {
      industry: "Healthcare",
      projects: 98,
      avgROI: 320,
      efficiency: 92,
      costSavings: 12.8
    },
    {
      industry: "Financial Services",
      projects: 87,
      avgROI: 450,
      efficiency: 95,
      costSavings: 18.5
    },
    {
      industry: "Retail",
      projects: 76,
      avgROI: 290,
      efficiency: 82,
      costSavings: 9.7
    },
    {
      industry: "Education",
      projects: 64,
      avgROI: 250,
      efficiency: 78,
      costSavings: 6.3
    },
    {
      industry: "Energy",
      projects: 50,
      avgROI: 420,
      efficiency: 90,
      costSavings: 14.1
    }
  ];

  useEffect(() => {
    const animateMetrics = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setAnimatedMetrics({
          projectsCompleted: Math.floor(500 * progress),
          clientSatisfaction: Math.floor(98 * progress),
          averageROI: Math.floor(340 * progress),
          supportHours: Math.floor(24 * progress),
          costSavings: Math.floor(50 * progress),
          efficiencyGains: Math.floor(85 * progress)
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 SUCCESS METRICS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. Discover the measurable impact we've delivered 
            for businesses across various industries.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric) => (
            <div key={metric.id} className={`bg-gradient-to-br ${metric.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <div className="text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.id === 1 && animatedMetrics.projectsCompleted}
                  {metric.id === 2 && animatedMetrics.clientSatisfaction}
                  {metric.id === 3 && animatedMetrics.averageROI}
                  {metric.id === 4 && animatedMetrics.supportHours}
                  {metric.id === 5 && animatedMetrics.costSavings}
                  {metric.id === 6 && animatedMetrics.efficiencyGains}
                  {metric.suffix}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Breakdown */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Results by Industry</h3>
            <p className="text-xl text-gray-600">Performance metrics across different sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryMetrics.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{industry.industry}</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects</span>
                    <span className="text-2xl font-bold text-blue-600">{industry.projects}+</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg ROI</span>
                    <span className="text-2xl font-bold text-green-600">{industry.avgROI}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Efficiency</span>
                    <span className="text-2xl font-bold text-purple-600">{industry.efficiency}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="text-2xl font-bold text-orange-600">${industry.costSavings}M</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Timeline */}
        <div className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Growth Journey</h3>
            <p className="text-xl opacity-90">Consistent growth and improvement over the years</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2022</div>
              <div className="text-2xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2023</div>
              <div className="text-2xl font-bold mb-2">250+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2024</div>
              <div className="text-2xl font-bold mb-2">400+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2025</div>
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Client Success Stories Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Success Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Project Success Rate</div>
                  <div className="text-gray-600">All projects delivered on time and within budget</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Average 6-Month ROI</div>
                  <div className="text-gray-600">Most clients see positive ROI within 6 months</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">🔄</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">95% Client Retention</div>
                  <div className="text-gray-600">Long-term partnerships and repeat business</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">AI & Machine Learning</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">95%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cloud Infrastructure</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">90%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Automation Solutions</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">98%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Data Analytics</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed their operations with our proven AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSuccessMetricsShowcase2025;