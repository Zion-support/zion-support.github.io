import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  confidence: number;
  reason: string;
  estimatedROI: string;
  implementationTime: string;
}

const AIRecommendationEngine: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI recommendation generation
    const generateRecommendations = () => {
      const mockRecommendations: Recommendation[] = [
        {
          id: 'ai-autonomous-manager',
          title: 'AI Autonomous Business Manager',
          description: 'Based on your business profile, this revolutionary AI system could reduce your operational costs by 70% and increase efficiency by 300%.',
          category: 'AI & Machine Learning',
          confidence: 95,
          reason: 'Your business shows high operational complexity and decision-making volume',
          estimatedROI: '500-800% within 12 months',
          implementationTime: '6-8 weeks'
        },
        {
          id: 'quantum-cybersecurity',
          title: 'Quantum Cybersecurity Suite',
          description: 'Your industry requires enterprise-level security. This quantum-resistant solution provides future-proof protection against next-gen threats.',
          category: 'IT Security',
          confidence: 88,
          reason: 'High-value data and compliance requirements detected',
          estimatedROI: '400-600% within 18 months',
          implementationTime: '8-12 weeks'
        },
        {
          id: 'supply-chain-optimizer',
          title: 'AI-Powered Supply Chain Optimizer',
          description: 'Optimize your supply chain with 95% demand forecasting accuracy and reduce costs by 40% through intelligent automation.',
          category: 'AI & Machine Learning',
          confidence: 92,
          reason: 'Complex supply chain operations with optimization potential',
          estimatedROI: '350-500% within 12 months',
          implementationTime: '4-6 weeks'
        }
      ];
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    };

    const timer = setTimeout(generateRecommendations, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
              <h2 className="text-3xl font-bold text-gray-900">AI-Powered Recommendations</h2>
              <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
            </div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
            <p className="text-lg text-gray-600 mt-4">Analyzing your business profile and generating personalized recommendations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">AI-Powered Recommendations</h2>
            <Brain className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI has analyzed your business profile and identified the most impactful solutions for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-purple-200"
            >
              {/* Header */}
              <div className="p-6 border-b border-purple-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
                      <p className="text-sm text-purple-600 font-semibold">{rec.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{rec.confidence}%</div>
                    <div className="text-sm text-gray-500">Confidence</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{rec.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Why This Solution:</h4>
                  <p className="text-sm text-gray-600">{rec.reason}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ROI:</h4>
                    <p className="text-sm text-green-600 font-semibold">{rec.estimatedROI}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Timeline:</h4>
                    <p className="text-sm text-blue-600 font-semibold">{rec.implementationTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rec.confidence / 20) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">AI Confidence Score</span>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600">
                <button className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center gap-2">
                  Get This Solution
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get a personalized consultation and discover how our AI-powered solutions can revolutionize your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                <Brain className="w-5 h-5" />
                Get AI Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendationEngine;