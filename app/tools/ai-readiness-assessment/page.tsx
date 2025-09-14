'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 'data-quality',
      question: 'How would you rate your current data quality?',
      options: [
        { value: 'excellent', label: 'Excellent - Clean, structured, and comprehensive', points: 4 },
        { value: 'good', label: 'Good - Mostly clean with some gaps', points: 3 },
        { value: 'fair', label: 'Fair - Some quality issues but manageable', points: 2 },
        { value: 'poor', label: 'Poor - Significant data quality problems', points: 1 }
      ]
    },
    {
      id: 'technology-infrastructure',
      question: 'What is your current technology infrastructure maturity?',
      options: [
        { value: 'cloud-native', label: 'Cloud-native with modern architecture', points: 4 },
        { value: 'hybrid', label: 'Hybrid cloud and on-premises', points: 3 },
        { value: 'on-premises', label: 'Mostly on-premises with some cloud', points: 2 },
        { value: 'legacy', label: 'Legacy systems with limited cloud adoption', points: 1 }
      ]
    },
    {
      id: 'ai-expertise',
      question: 'What is your organization\'s AI expertise level?',
      options: [
        { value: 'advanced', label: 'Advanced - Dedicated AI team and proven implementations', points: 4 },
        { value: 'intermediate', label: 'Intermediate - Some AI projects and basic expertise', points: 3 },
        { value: 'beginner', label: 'Beginner - Limited AI experience but interested', points: 2 },
        { value: 'none', label: 'None - No AI experience or expertise', points: 1 }
      ]
    },
    {
      id: 'budget',
      question: 'What is your AI transformation budget range?',
      options: [
        { value: 'high', label: '$1M+ annually for AI initiatives', points: 4 },
        { value: 'medium', label: '$100K - $1M annually', points: 3 },
        { value: 'low', label: '$10K - $100K annually', points: 2 },
        { value: 'minimal', label: 'Under $10K annually', points: 1 }
      ]
    },
    {
      id: 'executive-support',
      question: 'How strong is executive support for AI transformation?',
      options: [
        { value: 'strong', label: 'Strong - Full C-suite commitment and sponsorship', points: 4 },
        { value: 'moderate', label: 'Moderate - Some executive support', points: 3 },
        { value: 'limited', label: 'Limited - Minimal executive engagement', points: 2 },
        { value: 'none', label: 'None - No executive support', points: 1 }
      ]
    }
  ];

  const handleAnswer = (questionId, value, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value, points }
    }));
  };

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
    const maxPoints = questions.length * 4;
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    setScore(percentage);
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Advanced', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Intermediate', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    if (score >= 40) return { level: 'Beginner', color: 'text-orange-600', bgColor: 'bg-orange-100' };
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
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
    setScore(null);
  };

  if (score !== null) {
    const scoreInfo = getScoreLevel(score);
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <SEO
          title="AI Readiness Assessment Results - Zion Tech Group"
          description="Get your personalized AI readiness assessment results and recommendations for AI transformation success."
          keywords="AI readiness, AI assessment, AI transformation, enterprise AI"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Readiness Assessment Results</h1>
            <p className="text-lg text-gray-600">Your personalized AI transformation roadmap</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${scoreInfo.bgColor} ${scoreInfo.color} mb-4`}>
                {scoreInfo.level} AI Readiness
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{score}%</div>
              <div className="text-gray-600">Overall AI Readiness Score</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths</h3>
                <ul className="space-y-2 text-gray-600">
                  {Object.entries(answers).map(([questionId, answer]) => {
                    const question = questions.find(q => q.id === questionId);
                    if (answer.points >= 3) {
                      return (
                        <li key={questionId} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {question.question}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas for Improvement</h3>
                <ul className="space-y-2 text-gray-600">
                  {Object.entries(answers).map(([questionId, answer]) => {
                    const question = questions.find(q => q.id === questionId);
                    if (answer.points < 3) {
                      return (
                        <li key={questionId} className="flex items-center">
                          <span className="text-red-500 mr-2">⚠</span>
                          {question.question}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mr-4"
              >
                Get Personalized Recommendations
              </Link>
              <button
                onClick={resetAssessment}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="AI Readiness Assessment - Zion Tech Group"
        description="Assess your organization's AI readiness and get personalized recommendations for AI transformation success."
        keywords="AI readiness, AI assessment, AI transformation, enterprise AI"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Readiness Assessment</h1>
          <p className="text-lg text-gray-600">Evaluate your organization's readiness for AI transformation</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentStep].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
                <label key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${currentStep}`}
                    value={option.value}
                    onChange={() => handleAnswer(questions[currentStep].id, option.value, option.points)}
                    className="mr-4"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            <button
              onClick={nextStep}
              disabled={!answers[questions[currentStep].id]}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700"
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}