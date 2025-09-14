'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AIReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 'data_quality',
      question: 'How would you rate your current data quality and availability?',
      options: [
        { text: 'Poor - Limited data, inconsistent quality', value: 1 },
        { text: 'Fair - Some data available, moderate quality', value: 2 },
        { text: 'Good - Most data available, good quality', value: 3 },
        { text: 'Excellent - Comprehensive data, high quality', value: 4 }
      ]
    },
    {
      id: 'technical_infrastructure',
      question: 'What is your current technical infrastructure readiness?',
      options: [
        { text: 'Basic - Limited cloud infrastructure', value: 1 },
        { text: 'Developing - Some cloud services, basic automation', value: 2 },
        { text: 'Advanced - Good cloud infrastructure, some AI tools', value: 3 },
        { text: 'Enterprise - Full cloud-native, AI-ready infrastructure', value: 4 }
      ]
    },
    {
      id: 'team_expertise',
      question: 'How would you assess your team\'s AI and data science expertise?',
      options: [
        { text: 'Limited - No dedicated AI/data science team', value: 1 },
        { text: 'Basic - Some team members with basic knowledge', value: 2 },
        { text: 'Intermediate - Dedicated team with good skills', value: 3 },
        { text: 'Advanced - Expert team with proven AI experience', value: 4 }
      ]
    },
    {
      id: 'budget_allocation',
      question: 'What is your planned budget allocation for AI initiatives?',
      options: [
        { text: 'Under $50K annually', value: 1 },
        { text: '$50K - $250K annually', value: 2 },
        { text: '$250K - $1M annually', value: 3 },
        { text: 'Over $1M annually', value: 4 }
      ]
    },
    {
      id: 'leadership_support',
      question: 'How strong is leadership support for AI transformation?',
      options: [
        { text: 'Weak - Limited understanding or support', value: 1 },
        { text: 'Moderate - Some support, but concerns about ROI', value: 2 },
        { text: 'Strong - Clear support and understanding', value: 3 },
        { text: 'Excellent - Full commitment and strategic priority', value: 4 }
      ]
    },
    {
      id: 'use_cases',
      question: 'How many clear AI use cases have you identified?',
      options: [
        { text: 'None identified', value: 1 },
        { text: '1-2 potential use cases', value: 2 },
        { text: '3-5 clear use cases', value: 3 },
        { text: '6+ well-defined use cases', value: 4 }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    return { totalScore, maxScore, percentage };
  };

  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'AI-Ready', color: 'green', description: 'Your organization is well-positioned for AI transformation' };
    if (percentage >= 60) return { level: 'AI-Prepared', color: 'blue', description: 'Good foundation, some areas need attention' };
    if (percentage >= 40) return { level: 'AI-Developing', color: 'yellow', description: 'Moderate readiness, significant preparation needed' };
    return { level: 'AI-Planning', color: 'red', description: 'Early stage, comprehensive preparation required' };
  };

  const getRecommendations = (percentage: number) => {
    if (percentage >= 80) {
      return [
        'Start with pilot AI projects in high-impact areas',
        'Scale successful pilots across the organization',
        'Consider advanced AI technologies like quantum computing',
        'Focus on AI governance and ethics frameworks'
      ];
    } else if (percentage >= 60) {
      return [
        'Improve data quality and accessibility',
        'Invest in team training and development',
        'Strengthen technical infrastructure',
        'Develop clear AI use cases and ROI metrics'
      ];
    } else if (percentage >= 40) {
      return [
        'Build foundational data infrastructure',
        'Hire or train AI/data science talent',
        'Secure leadership buy-in and budget allocation',
        'Start with simple automation projects'
      ];
    } else {
      return [
        'Develop AI strategy and roadmap',
        'Build data governance framework',
        'Invest in basic technical infrastructure',
        'Educate leadership on AI potential and requirements'
      ];
    }
  };

  if (isComplete) {
    const { totalScore, maxScore, percentage } = calculateScore();
    const readiness = getReadinessLevel(percentage);
    const recommendations = getRecommendations(percentage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Results Header */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              🎯 ASSESSMENT COMPLETE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your AI Readiness
              <span className={`bg-gradient-to-r ${
                readiness.color === 'green' ? 'from-green-600 to-emerald-600' :
                readiness.color === 'blue' ? 'from-blue-600 to-cyan-600' :
                readiness.color === 'yellow' ? 'from-yellow-600 to-orange-600' :
                'from-red-600 to-pink-600'
              } bg-clip-text text-transparent`}>
                {' '}{readiness.level}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {readiness.description}
            </p>
          </div>
        </section>

        {/* Score Display */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className={`text-6xl font-bold mb-4 ${
                  readiness.color === 'green' ? 'text-green-600' :
                  readiness.color === 'blue' ? 'text-blue-600' :
                  readiness.color === 'yellow' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {percentage.toFixed(0)}%
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">
                  AI Readiness Score
                </div>
                <div className="text-gray-600">
                  {totalScore} out of {maxScore} points
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className={`h-4 rounded-full transition-all duration-1000 ${
                    readiness.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    readiness.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                    readiness.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    'bg-gradient-to-r from-red-500 to-pink-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions.map((question, index) => (
                  <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      {question.question}
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(answers[question.id] || 0) * 25}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {answers[question.id] || 0}/4
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Recommended Next Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {recommendation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized guidance and implementation support for your AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
              <Link 
                href="/resources/ai-2025-revolutionary-implementation-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            🎯 AI READINESS ASSESSMENT
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Readiness
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Assessment
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Evaluate your organization's readiness for AI transformation and get personalized recommendations.
          </p>
          
          <div className="bg-white rounded-lg p-4 shadow-md inline-block">
            <div className="text-sm text-gray-600 mb-2">Progress</div>
            <div className="flex items-center">
              <div className="w-64 bg-gray-200 rounded-full h-2 mr-3">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {currentStep + 1} of {questions.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {questions[currentStep].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    answers[questions[currentStep].id] === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      answers[questions[currentStep].id] === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[questions[currentStep].id] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              
              <button
                onClick={nextStep}
                disabled={!answers[questions[currentStep].id]}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}