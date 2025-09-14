'use client';

import React, { useState, useEffect } from 'react';

const UltimateSuccessMetricsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    projects: 0,
    satisfaction: 0,
    roi: 0,
    support: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (key: keyof typeof animatedMetrics, target: number, duration: number) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedMetrics(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);

        return () => clearInterval(timer);
      };

      const cleanup1 = animateValue('projects', 500, 2000);
      const cleanup2 = animateValue('satisfaction', 98, 2500);
      const cleanup3 = animateValue('roi', 340, 3000);
      const cleanup4 = animateValue('support', 24, 1500);

      return () => {
        cleanup1();
        cleanup2();
        cleanup3();
        cleanup4();
      };
    }
  }, [isVisible]);

  const metrics = [
    {
      value: animatedMetrics.projects,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successfully completed AI implementations',
      color: 'from-purple-500 to-purple-600',
      icon: '🚀'
    },
    {
      value: animatedMetrics.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Average client satisfaction rating',
      color: 'from-blue-500 to-blue-600',
      icon: '⭐'
    },
    {
      value: animatedMetrics.roi,
      suffix: '%',
      label: 'Average ROI Increase',
      description: 'Typical return on investment achieved',
      color: 'from-green-500 to-green-600',
      icon: '📈'
    },
    {
      value: animatedMetrics.support,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support',
      color: 'from-orange-500 to-orange-600',
      icon: '🛠️'
    }
  ];

  const successStories = [
    {
      company: 'Fortune 500 Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes',
      solution: 'AI-powered visual inspection system',
      results: {
        efficiency: '85%',
        accuracy: '99.2%',
        costReduction: '60%',
        roi: '2,500%'
      },
      timeline: '6 months'
    },
    {
      company: 'Global Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Patient data analysis bottlenecks',
      solution: 'Advanced predictive analytics platform',
      results: {
        efficiency: '90%',
        accuracy: '95%',
        costReduction: '45%',
        roi: '1,200%'
      },
      timeline: '4 months'
    },
    {
      company: 'Financial Services Leader',
      industry: 'Finance',
      challenge: 'Fraud detection inefficiencies',
      solution: 'Real-time AI fraud detection system',
      results: {
        efficiency: '95%',
        accuracy: '98.5%',
        costReduction: '70%',
        roi: '1,500%'
      },
      timeline: '3 months'
    }
  ];

  return (
    <div className={`py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📊 SUCCESS METRICS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Proven Results That Matter
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Our AI solutions have delivered measurable results across industries, 
            transforming businesses and driving unprecedented growth.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.value}{metric.suffix}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <div className="text-sm opacity-75">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Real Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="text-sm text-blue-300 mb-2">{story.industry}</div>
                  <h4 className="text-xl font-bold mb-2">{story.company}</h4>
                  <p className="text-sm opacity-90 mb-4">
                    <strong>Challenge:</strong> {story.challenge}
                  </p>
                  <p className="text-sm opacity-90">
                    <strong>Solution:</strong> {story.solution}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Efficiency Gain</span>
                    <span className="font-bold text-green-400">{story.results.efficiency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accuracy Rate</span>
                    <span className="font-bold text-blue-400">{story.results.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost Reduction</span>
                    <span className="font-bold text-purple-400">{story.results.costReduction}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ROI Achieved</span>
                    <span className="font-bold text-yellow-400">{story.results.roi}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm opacity-75 mb-2">Implementation Timeline</div>
                  <div className="text-lg font-semibold text-green-400">{story.timeline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Industry-Wide Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2.3B+</div>
              <div className="text-sm opacity-90">Total Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm opacity-90">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-sm opacity-90">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm opacity-90">Uptime Achieved</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Let us help you achieve similar results with our proven AI solutions. 
              Schedule a consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateSuccessMetricsShowcase;