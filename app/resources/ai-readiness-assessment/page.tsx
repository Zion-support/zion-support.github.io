'use client';

import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 'data_quality',
      title: 'Data Quality & Infrastructure',
      description: 'How would you rate your organization\'s data quality and infrastructure?',
      options: [
        { value: 1, label: 'Limited data quality, basic infrastructure', description: 'Data scattered across systems, limited analytics' },
        { value: 2, label: 'Moderate data quality, some centralized systems', description: 'Some data governance, basic analytics tools' },
        { value: 3, label: 'Good data quality, well-organized systems', description: 'Strong data governance, integrated analytics' },
        { value: 4, label: 'Excellent data quality, advanced infrastructure', description: 'Enterprise-grade data platform, real-time analytics' }
      ]
    },
    {
      id: 'technical_capabilities',
      title: 'Technical Capabilities',
      description: 'What is your current technical capability for AI implementation?',
      options: [
        { value: 1, label: 'Limited technical expertise', description: 'No dedicated AI/ML team, basic IT capabilities' },
        { value: 2, label: 'Some technical knowledge', description: 'Basic data science skills, limited ML experience' },
        { value: 3, label: 'Good technical foundation', description: 'Experienced data scientists, some ML implementations' },
        { value: 4, label: 'Advanced technical capabilities', description: 'Expert AI/ML team, multiple successful implementations' }
      ]
    },
    {
      id: 'business_strategy',
      title: 'Business Strategy & Vision',
      description: 'How well-defined is your AI strategy and business vision?',
      options: [
        { value: 1, label: 'No clear AI strategy', description: 'AI not part of business planning, reactive approach' },
        { value: 2, label: 'Basic AI awareness', description: 'Some AI initiatives, limited strategic planning' },
        { value: 3, label: 'Developed AI strategy', description: 'Clear AI roadmap, defined use cases' },
        { value: 4, label: 'Advanced AI strategy', description: 'AI-first approach, comprehensive transformation plan' }
      ]
    },
    {
      id: 'organizational_readiness',
      title: 'Organizational Readiness',
      description: 'How ready is your organization for AI transformation?',
      options: [
        { value: 1, label: 'Low organizational readiness', description: 'Resistance to change, limited AI awareness' },
        { value: 2, label: 'Moderate readiness', description: 'Some enthusiasm, basic change management' },
        { value: 3, label: 'Good readiness', description: 'Strong support, effective change management' },
        { value: 4, label: 'Excellent readiness', description: 'AI-native culture, agile transformation approach' }
      ]
    },
    {
      id: 'budget_resources',
      title: 'Budget & Resources',
      description: 'What is your current budget and resource allocation for AI initiatives?',
      options: [
        { value: 1, label: 'Limited budget and resources', description: 'No dedicated AI budget, minimal resources' },
        { value: 2, label: 'Basic budget allocation', description: 'Some AI funding, limited dedicated resources' },
        { value: 3, label: 'Good budget and resources', description: 'Dedicated AI budget, adequate resources' },
        { value: 4, label: 'Strong budget and resources', description: 'Significant AI investment, abundant resources' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let readinessLevel, color, recommendations, nextSteps;

    if (percentage >= 80) {
      readinessLevel = 'AI-Ready';
      color = 'green';
      recommendations = [
        'Begin immediate AI implementation',
        'Focus on advanced use cases',
        'Consider AI-first product development',
        'Explore emerging AI technologies'
      ];
      nextSteps = [
        'Implement pilot AI projects',
        'Scale successful initiatives',
        'Develop AI governance framework',
        'Build AI talent pipeline'
      ];
    } else if (percentage >= 60) {
      readinessLevel = 'AI-Prepared';
      color = 'blue';
      recommendations = [
        'Strengthen data infrastructure',
        'Develop AI strategy and roadmap',
        'Invest in team training',
        'Start with low-risk AI projects'
      ];
      nextSteps = [
        'Conduct AI strategy workshop',
        'Improve data quality and governance',
        'Pilot AI implementation',
        'Build internal AI capabilities'
      ];
    } else if (percentage >= 40) {
      readinessLevel = 'AI-Developing';
      color = 'yellow';
      recommendations = [
        'Focus on foundational improvements',
        'Develop basic AI awareness',
        'Invest in data quality',
        'Start with simple automation'
      ];
      nextSteps = [
        'Assess and improve data infrastructure',
        'Provide AI education and training',
        'Identify quick-win opportunities',
        'Develop basic AI strategy'
      ];
    } else {
      readinessLevel = 'AI-Exploring';
      color = 'red';
      recommendations = [
        'Build AI awareness and education',
        'Improve basic data infrastructure',
        'Develop organizational readiness',
        'Start with AI exploration phase'
      ];
      nextSteps = [
        'Conduct AI awareness sessions',
        'Assess current data landscape',
        'Develop AI readiness roadmap',
        'Consider external AI expertise'
      ];
    }

    setResults({
      totalScore,
      percentage,
      readinessLevel,
      color,
      recommendations,
      nextSteps
    });
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  if (results) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="AI Readiness Assessment Results | Free Tool | Zion Tech Group"
          description="Get your personalized AI readiness assessment results with actionable recommendations and next steps for AI implementation success."
          keywords="AI readiness assessment, AI implementation, AI strategy, digital transformation readiness, AI planning tool"
          url="/resources/ai-readiness-assessment"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Back to Resources
              </Link>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 text-sm">Assessment Results</span>
            </div>
            
            <div className={`inline-flex items-center ${results.color === 'green' ? 'bg-green-100 text-green-800' : results.color === 'blue' ? 'bg-blue-100 text-blue-800' : results.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'} rounded-full px-4 py-2 mb-4`}>
              <span className="text-sm font-medium">📊 ASSESSMENT RESULTS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI Readiness Assessment Results
            </h1>
          </div>

          {/* Results Summary */}
          <div className={`bg-gradient-to-r ${results.color === 'green' ? 'from-green-600 to-blue-600' : results.color === 'blue' ? 'from-blue-600 to-purple-600' : results.color === 'yellow' ? 'from-yellow-600 to-orange-600' : 'from-red-600 to-pink-600'} rounded-xl p-8 text-white mb-12`}>
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">{results.percentage}%</div>
              <div className="text-3xl font-bold mb-2">{results.readinessLevel}</div>
              <div className="text-xl opacity-90">
                Your organization's AI readiness level
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Recommendations */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Recommendations</h2>
              <div className="space-y-4">
                {results.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${results.color === 'green' ? 'bg-green-500' : results.color === 'blue' ? 'bg-blue-500' : results.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Next Steps</h2>
              <div className="space-y-4">
                {results.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${results.color === 'green' ? 'bg-green-500' : results.color === 'blue' ? 'bg-blue-500' : results.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {questions.map((question, index) => (
                <div key={question.id} className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{question.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${results.color === 'green' ? 'bg-green-500' : results.color === 'blue' ? 'bg-blue-500' : results.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${(answers[question.id] / 4) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {answers[question.id]}/4
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {question.options.find(opt => opt.value === answers[question.id])?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your AI Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get expert guidance tailored to your readiness level. Our team has helped 100+ organizations 
              successfully implement AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🚀 Get Expert Consultation
              </Link>
              <Link
                href="/resources/ai-implementation-checklist-2025"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📋 Download Implementation Guide
              </Link>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetAssessment}
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Retake Assessment
            </button>
            <Link
              href="/resources"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Explore More Resources
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Readiness Assessment | Free Tool | Zion Tech Group"
        description="Assess your organization's readiness for AI implementation with our comprehensive assessment tool. Get personalized recommendations and actionable next steps."
        keywords="AI readiness assessment, AI implementation readiness, AI strategy assessment, digital transformation readiness, AI planning"
        url="/resources/ai-readiness-assessment"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">Interactive Assessment</span>
          </div>
          
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">📊 AI READINESS ASSESSMENT</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Readiness Assessment
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Evaluate your organization's readiness for AI implementation. This comprehensive assessment 
            will help you understand your current capabilities and identify areas for improvement.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentQuestion.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{currentQuestion.description}</p>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion.id] === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{option.label}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
          </button>
        </div>

        {/* Assessment Info */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Assessment</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Get</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Comprehensive AI readiness score</li>
                <li>Personalized recommendations</li>
                <li>Actionable next steps</li>
                <li>Detailed analysis by category</li>
                <li>Free consultation offer</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Data quality and infrastructure</li>
                <li>Technical capabilities</li>
                <li>Business strategy and vision</li>
                <li>Organizational readiness</li>
                <li>Budget and resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}