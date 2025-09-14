'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';

export default function AutonomousEnterpriseReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'data-quality',
      question: 'How would you rate your current data quality?',
      options: [
        { value: 'excellent', label: 'Excellent - Clean, complete, and well-structured', score: 4 },
        { value: 'good', label: 'Good - Mostly clean with minor issues', score: 3 },
        { value: 'fair', label: 'Fair - Some quality issues but manageable', score: 2 },
        { value: 'poor', label: 'Poor - Significant quality problems', score: 1 }
      ]
    },
    {
      id: 'infrastructure',
      question: 'What is your current IT infrastructure readiness?',
      options: [
        { value: 'cloud-native', label: 'Cloud-native with modern architecture', score: 4 },
        { value: 'hybrid', label: 'Hybrid cloud and on-premises setup', score: 3 },
        { value: 'legacy', label: 'Legacy systems with some modernization', score: 2 },
        { value: 'outdated', label: 'Outdated infrastructure needing major upgrades', score: 1 }
      ]
    },
    {
      id: 'skills',
      question: 'How would you assess your team\'s AI/ML skills?',
      options: [
        { value: 'expert', label: 'Expert level with dedicated AI team', score: 4 },
        { value: 'intermediate', label: 'Intermediate with some AI experience', score: 3 },
        { value: 'beginner', label: 'Beginner level with basic knowledge', score: 2 },
        { value: 'none', label: 'No AI/ML skills in the team', score: 1 }
      ]
    },
    {
      id: 'budget',
      question: 'What is your AI implementation budget?',
      options: [
        { value: 'unlimited', label: 'Unlimited budget for AI initiatives', score: 4 },
        { value: 'substantial', label: 'Substantial budget ($500K+)', score: 3 },
        { value: 'moderate', label: 'Moderate budget ($100K-500K)', score: 2 },
        { value: 'limited', label: 'Limited budget (<$100K)', score: 1 }
      ]
    },
    {
      id: 'leadership',
      question: 'How strong is your leadership support for AI?',
      options: [
        { value: 'champion', label: 'Strong champion with full support', score: 4 },
        { value: 'supportive', label: 'Supportive but cautious', score: 3 },
        { value: 'neutral', label: 'Neutral - waiting to see results', score: 2 },
        { value: 'skeptical', label: 'Skeptical or resistant', score: 1 }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
        }
      }
    });
    return totalScore;
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 18) return { level: 'High', color: 'green', description: 'Ready for immediate AI implementation' };
    if (score >= 14) return { level: 'Medium', color: 'yellow', description: 'Some preparation needed before implementation' };
    if (score >= 10) return { level: 'Low', color: 'orange', description: 'Significant preparation required' };
    return { level: 'Very Low', color: 'red', description: 'Extensive preparation needed' };
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalScore = calculateScore();
      setScore(finalScore);
      setShowResults(true);
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
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const readiness = getReadinessLevel(score);
    const maxScore = questions.length * 4;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Autonomous Enterprise Readiness Assessment Results</h1>
              <p className="text-gray-600">Your organization's autonomous enterprise readiness score</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">{percentage}%</div>
              <div className={`text-2xl font-semibold mb-2 text-${readiness.color}-600`}>
                {readiness.level} Readiness
              </div>
              <p className="text-gray-600">{readiness.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{score}</div>
                <div className="text-sm text-gray-600">Total Score</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{maxScore}</div>
                <div className="text-sm text-gray-600">Maximum Score</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{questions.length}</div>
                <div className="text-sm text-gray-600">Questions Answered</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
              <div className="space-y-3">
                {score < 10 && (
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Focus on data quality improvement and team training before AI implementation</span>
                  </div>
                )}
                {score >= 10 && score < 14 && (
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Address infrastructure gaps and build AI capabilities before scaling</span>
                  </div>
                )}
                {score >= 14 && score < 18 && (
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Start with pilot projects and gradually scale AI implementation</span>
                  </div>
                )}
                {score >= 18 && (
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Ready for full-scale AI implementation with proper planning</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetAssessment}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Retake Assessment
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <ArrowRight className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Autonomous Enterprise Readiness Assessment</h1>
            <p className="text-gray-600">Evaluate your organization's readiness for autonomous enterprise transformation</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-700">{currentStep + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentStep].question}
            </h2>
            <div className="space-y-3">
              {questions[currentStep].options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                    className="mt-1 mr-3"
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
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!answers[questions[currentStep].id]}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}