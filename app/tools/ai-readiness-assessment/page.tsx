"use client";
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const AIReadinessAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'data-quality',
      question: 'How would you rate your organization\'s data quality?',
      options: [
        { value: 1, text: 'Poor - Data is scattered and inconsistent', points: 1 },
        { value: 2, text: 'Fair - Some data is clean but many gaps', points: 2 },
        { value: 3, text: 'Good - Most data is clean and accessible', points: 3 },
        { value: 4, text: 'Excellent - Data is clean, structured, and well-governed', points: 4 }
      ]
    },
    {
      id: 'technical-infrastructure',
      question: 'What is your current technical infrastructure readiness?',
      options: [
        { value: 1, text: 'Legacy systems with limited cloud adoption', points: 1 },
        { value: 2, text: 'Mixed legacy and modern systems', points: 2 },
        { value: 3, text: 'Mostly modern, cloud-based infrastructure', points: 3 },
        { value: 4, text: 'Fully modern, scalable cloud infrastructure', points: 4 }
      ]
    },
    {
      id: 'ai-expertise',
      question: 'What is your team\'s AI expertise level?',
      options: [
        { value: 1, text: 'No AI expertise or experience', points: 1 },
        { value: 2, text: 'Basic understanding, some training completed', points: 2 },
        { value: 3, text: 'Good knowledge, some hands-on experience', points: 3 },
        { value: 4, text: 'Advanced expertise, proven AI implementations', points: 4 }
      ]
    },
    {
      id: 'leadership-support',
      question: 'How strong is leadership support for AI initiatives?',
      options: [
        { value: 1, text: 'No support or understanding', points: 1 },
        { value: 2, text: 'Limited support, some skepticism', points: 2 },
        { value: 3, text: 'Good support, willing to invest', points: 3 },
        { value: 4, text: 'Strong support, committed to AI transformation', points: 4 }
      ]
    },
    {
      id: 'budget-allocation',
      question: 'What is your AI budget allocation?',
      options: [
        { value: 1, text: 'No dedicated AI budget', points: 1 },
        { value: 2, text: 'Limited budget for pilot projects', points: 2 },
        { value: 3, text: 'Moderate budget for AI initiatives', points: 3 },
        { value: 4, text: 'Significant budget for comprehensive AI strategy', points: 4 }
      ]
    },
    {
      id: 'use-cases',
      question: 'How well-defined are your AI use cases?',
      options: [
        { value: 1, text: 'No clear use cases identified', points: 1 },
        { value: 2, text: 'Some ideas but not well-defined', points: 2 },
        { value: 3, text: 'Clear use cases with defined success metrics', points: 3 },
        { value: 4, text: 'Comprehensive use case portfolio with detailed plans', points: 4 }
      ]
    }
  ];

  const handleAnswer = (questionId, value, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value, points }
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
    const maxPoints = questions.length * 4;
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    setScore(percentage);
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Advanced', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Intermediate', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 40) return { level: 'Beginner', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Getting Started', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        'Implement advanced AI solutions across your organization',
        'Focus on AI innovation and competitive differentiation',
        'Consider quantum computing and next-generation AI',
        'Develop AI-first business models and strategies'
      ];
    } else if (score >= 60) {
      return [
        'Scale successful pilot projects across departments',
        'Invest in advanced AI training for your team',
        'Implement comprehensive AI governance framework',
        'Focus on AI-driven process optimization'
      ];
    } else if (score >= 40) {
      return [
        'Start with pilot AI projects in low-risk areas',
        'Invest in AI literacy training for all employees',
        'Improve data quality and governance processes',
        'Develop clear AI use cases and success metrics'
      ];
    } else {
      return [
        'Begin with AI education and awareness programs',
        'Focus on data quality and infrastructure improvements',
        'Start with simple automation and RPA solutions',
        'Develop AI strategy and secure leadership support'
      ];
    }
  };

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    const recommendations = getRecommendations(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Readiness Assessment Results</h1>
            <p className="text-xl opacity-90">Your organization's AI readiness level and recommendations</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${scoreLevel.bgColor} ${scoreLevel.color} mb-4`}>
                {scoreLevel.level} Level
              </div>
              <div className="text-6xl font-bold mb-2">{score}%</div>
              <div className="text-xl opacity-90">AI Readiness Score</div>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-4 mb-8">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">Strengths</h3>
              <ul className="space-y-2">
                {Object.entries(answers).map(([questionId, answer]) => {
                  const question = questions.find(q => q.id === questionId);
                  if (answer.points >= 3) {
                    return (
                      <li key={questionId} className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-sm">{question.question.split('?')[0]}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">Areas for Improvement</h3>
              <ul className="space-y-2">
                {Object.entries(answers).map(([questionId, answer]) => {
                  const question = questions.find(q => q.id === questionId);
                  if (answer.points < 3) {
                    return (
                      <li key={questionId} className="flex items-center">
                        <span className="text-yellow-400 mr-2">⚠</span>
                        <span className="text-sm">{question.question.split('?')[0]}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
            <h3 className="text-2xl font-bold mb-6">Recommended Next Steps</h3>
            <ul className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">→</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              >
                Get Personalized Consultation
              </Link>
              <Link
                href="/resources/ai-2025-implementation-roadmap-ultimate-guide"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Download Implementation Guide
              </Link>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                  setAnswers({});
                  setScore(0);
                }}
                className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Readiness Assessment</h1>
          <p className="text-xl opacity-90">Evaluate your organization's readiness for AI transformation</p>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-sm font-medium">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">{questions[currentStep].question}</h2>
            <div className="space-y-4">
              {questions[currentStep].options.map((option) => (
                <label
                  key={option.value}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    answers[questions[currentStep].id]?.value === option.value
                      ? 'border-yellow-400 bg-yellow-400 bg-opacity-20'
                      : 'border-white border-opacity-30 hover:border-opacity-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={questions[currentStep].id}
                    value={option.value}
                    checked={answers[questions[currentStep].id]?.value === option.value}
                    onChange={() => handleAnswer(questions[currentStep].id, option.value, option.points)}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      answers[questions[currentStep].id]?.value === option.value
                        ? 'border-yellow-400 bg-yellow-400'
                        : 'border-white border-opacity-50'
                    }`}>
                      {answers[questions[currentStep].id]?.value === option.value && (
                        <div className="w-2 h-2 bg-black rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="text-lg">{option.text}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentStep === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!answers[questions[currentStep].id]}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                !answers[questions[currentStep].id]
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
              }`}
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReadinessAssessment;