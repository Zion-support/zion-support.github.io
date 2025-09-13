import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AI2026ReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 'infrastructure',
      question: 'What is your current AI infrastructure maturity?',
      options: [
        { value: 'basic', label: 'Basic - Limited AI tools and platforms', score: 1 },
        { value: 'intermediate', label: 'Intermediate - Some AI systems in production', score: 2 },
        { value: 'advanced', label: 'Advanced - Comprehensive AI platform', score: 3 },
        { value: 'cutting-edge', label: 'Cutting-edge - Next-gen AI systems', score: 4 }
      ]
    },
    {
      id: 'data_quality',
      question: 'How would you rate your data quality and availability?',
      options: [
        { value: 'poor', label: 'Poor - Data is scattered and inconsistent', score: 1 },
        { value: 'fair', label: 'Fair - Some data integration exists', score: 2 },
        { value: 'good', label: 'Good - Well-integrated data systems', score: 3 },
        { value: 'excellent', label: 'Excellent - Real-time, high-quality data', score: 4 }
      ]
    },
    {
      id: 'talent',
      question: 'What is your AI talent and expertise level?',
      options: [
        { value: 'limited', label: 'Limited - No dedicated AI team', score: 1 },
        { value: 'basic', label: 'Basic - Some AI knowledge in IT team', score: 2 },
        { value: 'intermediate', label: 'Intermediate - Dedicated AI team', score: 3 },
        { value: 'expert', label: 'Expert - Advanced AI specialists', score: 4 }
      ]
    },
    {
      id: 'governance',
      question: 'How mature is your AI governance and ethics framework?',
      options: [
        { value: 'none', label: 'None - No formal AI governance', score: 1 },
        { value: 'basic', label: 'Basic - Some policies in place', score: 2 },
        { value: 'comprehensive', label: 'Comprehensive - Full governance framework', score: 3 },
        { value: 'advanced', label: 'Advanced - AI ethics and compliance', score: 4 }
      ]
    },
    {
      id: 'use_cases',
      question: 'What AI use cases are you currently implementing?',
      options: [
        { value: 'none', label: 'None - No AI implementations', score: 1 },
        { value: 'basic', label: 'Basic - Simple automation tasks', score: 2 },
        { value: 'intermediate', label: 'Intermediate - Complex AI applications', score: 3 },
        { value: 'advanced', label: 'Advanced - Next-gen AI systems', score: 4 }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => {
      const question = questions.find(q => q.id === Object.keys(answers).find(key => answers[key] === answer));
      const option = question?.options.find(opt => opt.value === answer);
      return sum + (option?.score || 0);
    }, 0);

    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let level, description, recommendations;
    
    if (percentage >= 90) {
      level = 'AI 2026 Ready';
      description = 'Your organization is well-positioned for next-generation AI systems. You have the infrastructure, talent, and governance in place to implement cutting-edge AI solutions.';
      recommendations = [
        'Implement quantum-enhanced AI systems',
        'Deploy autonomous decision-making capabilities',
        'Scale advanced neural architectures',
        'Launch real-time learning systems'
      ];
    } else if (percentage >= 75) {
      level = 'AI Advanced';
      description = 'You have a strong foundation for AI implementation. Focus on scaling your current systems and preparing for next-generation capabilities.';
      recommendations = [
        'Enhance data integration and quality',
        'Develop advanced AI talent',
        'Implement comprehensive governance',
        'Pilot next-generation AI systems'
      ];
    } else if (percentage >= 50) {
      level = 'AI Intermediate';
      description = 'You have basic AI capabilities but need to strengthen your foundation before implementing advanced systems.';
      recommendations = [
        'Improve data quality and integration',
        'Build AI talent and expertise',
        'Develop governance frameworks',
        'Implement foundational AI systems'
      ];
    } else {
      level = 'AI Beginner';
      description = 'Your organization needs to build fundamental AI capabilities before considering advanced implementations.';
      recommendations = [
        'Establish data management practices',
        'Hire or train AI talent',
        'Create AI strategy and roadmap',
        'Start with basic AI automation'
      ];
    }

    setResults({
      level,
      description,
      recommendations,
      percentage,
      totalScore,
      maxScore
    });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2026 Readiness Assessment - Evaluate Your AI Transformation Readiness"
        description="Take our comprehensive AI 2026 readiness assessment to evaluate your organization's preparedness for next-generation AI systems and get personalized recommendations."
        keywords="AI readiness assessment, AI 2026, AI transformation, AI evaluation, AI implementation readiness"
        url="/tools/ai-2026-readiness-assessment"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/tools" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to AI Tools
            </Link>
          </div>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-blue-800">🛠️ AI TOOL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2026 Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Evaluate your organization's readiness for next-generation AI systems and get personalized recommendations for your AI transformation journey.
          </p>
        </div>

        {!results ? (
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[currentStep].question}
              </h2>
              
              <div className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      answers[questions[currentStep].id] === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={questions[currentStep].id}
                      value={option.value}
                      checked={answers[questions[currentStep].id] === option.value}
                      onChange={(e) => handleAnswer(questions[currentStep].id, e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[questions[currentStep].id] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-900 font-medium">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={nextStep}
                disabled={!answers[questions[currentStep].id]}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  !answers[questions[currentStep].id]
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold mb-2">{results.level}</h2>
              <div className="text-4xl font-bold mb-2">{results.percentage}%</div>
              <div className="text-lg opacity-90">AI Readiness Score</div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment Summary</h3>
              <p className="text-lg text-gray-700">{results.description}</p>
            </div>

            {/* Recommendations */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
              <ul className="space-y-3">
                {results.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Score */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Score</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{results.totalScore}/{results.maxScore}</div>
                  <div className="text-gray-600">Total Points</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{results.percentage}%</div>
                  <div className="text-gray-600">Readiness Percentage</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetAssessment}
                className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Retake Assessment
              </button>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors text-center"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/resources/ai-2026-implementation-toolkit"
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Assessment</h3>
            <p className="text-gray-600">
              Evaluate all aspects of AI readiness including infrastructure, talent, and governance.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Analysis</h3>
            <p className="text-gray-600">
              Get detailed insights and personalized recommendations for your AI transformation.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Action Plan</h3>
            <p className="text-gray-600">
              Receive a clear roadmap for implementing next-generation AI systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}