"use client";
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AITransformationReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'leadership',
      category: 'Leadership & Strategy',
      question: 'How would you rate your organization\'s executive support for AI transformation?',
      options: [
        { value: 1, text: 'No executive support', points: 0 },
        { value: 2, text: 'Limited support from some executives', points: 25 },
        { value: 3, text: 'Moderate support from key executives', points: 50 },
        { value: 4, text: 'Strong support from most executives', points: 75 },
        { value: 5, text: 'Complete support from all executives', points: 100 }
      ]
    },
    {
      id: 'data',
      category: 'Data & Infrastructure',
      question: 'How would you describe your organization\'s data quality and availability?',
      options: [
        { value: 1, text: 'Poor data quality, limited availability', points: 0 },
        { value: 2, text: 'Some data available, quality issues', points: 25 },
        { value: 3, text: 'Good data in some areas, inconsistent quality', points: 50 },
        { value: 4, text: 'High-quality data in most areas', points: 75 },
        { value: 5, text: 'Excellent data quality across all systems', points: 100 }
      ]
    },
    {
      id: 'technology',
      category: 'Technology & Infrastructure',
      question: 'How would you rate your current technology infrastructure for AI implementation?',
      options: [
        { value: 1, text: 'Legacy systems, no cloud infrastructure', points: 0 },
        { value: 2, text: 'Some modern systems, limited cloud adoption', points: 25 },
        { value: 3, text: 'Mixed legacy and modern systems', points: 50 },
        { value: 4, text: 'Mostly modern, cloud-based infrastructure', points: 75 },
        { value: 5, text: 'Fully modern, cloud-native architecture', points: 100 }
      ]
    },
    {
      id: 'skills',
      category: 'Skills & Talent',
      question: 'How would you assess your organization\'s AI and data science capabilities?',
      options: [
        { value: 1, text: 'No AI/data science skills', points: 0 },
        { value: 2, text: 'Limited skills in some areas', points: 25 },
        { value: 3, text: 'Basic skills, some external support', points: 50 },
        { value: 4, text: 'Good internal capabilities', points: 75 },
        { value: 5, text: 'Excellent internal AI expertise', points: 100 }
      ]
    },
    {
      id: 'processes',
      category: 'Processes & Governance',
      question: 'How mature are your organization\'s processes for AI governance and ethics?',
      options: [
        { value: 1, text: 'No AI governance framework', points: 0 },
        { value: 2, text: 'Basic governance, limited ethics framework', points: 25 },
        { value: 3, text: 'Some governance policies in place', points: 50 },
        { value: 4, text: 'Comprehensive governance framework', points: 75 },
        { value: 5, text: 'Advanced governance and ethics program', points: 100 }
      ]
    },
    {
      id: 'culture',
      category: 'Culture & Change Management',
      question: 'How would you describe your organization\'s readiness for AI-driven change?',
      options: [
        { value: 1, text: 'Resistant to change, no AI culture', points: 0 },
        { value: 2, text: 'Some resistance, limited AI awareness', points: 25 },
        { value: 3, text: 'Moderate openness to AI adoption', points: 50 },
        { value: 4, text: 'Good change management, AI-positive culture', points: 75 },
        { value: 5, text: 'Excellent change readiness, AI-native culture', points: 100 }
      ]
    }
  ];

  const handleAnswer = (questionId, points) => {
    const newResponses = { ...responses, [questionId]: points };
    setResponses(newResponses);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore(newResponses);
    }
  };

  const calculateScore = (responses) => {
    const totalPoints = Object.values(responses).reduce((sum, points) => sum + points, 0);
    const maxPoints = questions.length * 100;
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    setScore(percentage);
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setResponses({});
    setScore(0);
    setShowResults(false);
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 40) return { level: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        'Your organization is well-positioned for AI transformation',
        'Focus on advanced AI capabilities and innovation',
        'Consider becoming an AI leader in your industry',
        'Explore cutting-edge AI technologies and applications'
      ];
    } else if (score >= 60) {
      return [
        'Build on your current strengths',
        'Address identified gaps in data quality and infrastructure',
        'Invest in AI skills development and training',
        'Develop a comprehensive AI governance framework'
      ];
    } else if (score >= 40) {
      return [
        'Focus on foundational improvements',
        'Invest heavily in data quality and infrastructure',
        'Build strong executive support for AI initiatives',
        'Develop a phased AI implementation strategy'
      ];
    } else {
      return [
        'Start with basic AI readiness improvements',
        'Focus on data quality and governance first',
        'Build executive support and change management',
        'Consider external AI expertise and partnerships'
      ];
    }
  };

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    const recommendations = getRecommendations(score);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <SEO
          title="AI Transformation Readiness Assessment Results"
          description="Get your personalized AI transformation readiness assessment results and recommendations."
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI Transformation Readiness Assessment Results
              </h1>
              <div className={`inline-flex items-center px-6 py-3 rounded-full ${scoreLevel.bgColor}`}>
                <span className={`text-2xl font-bold ${scoreLevel.color}`}>
                  {score}% - {scoreLevel.level}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Summary</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Based on your responses, your organization has a <strong>{score}%</strong> readiness level for AI transformation.
                </p>
                <p className="text-gray-700">
                  This assessment evaluated six key areas: Leadership & Strategy, Data & Infrastructure, 
                  Technology & Infrastructure, Skills & Talent, Processes & Governance, and Culture & Change Management.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h2>
              <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Free Consultation</h3>
                  <p className="text-blue-700 mb-4">
                    Schedule a free consultation with our AI experts to discuss your specific needs and challenges.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-2">AI Implementation Guide</h3>
                  <p className="text-green-700 mb-4">
                    Download our comprehensive AI implementation guide tailored to your readiness level.
                  </p>
                  <Link
                    href="/resources/ai-implementation-guide"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Download Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetAssessment}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors mr-4"
              >
                Retake Assessment
              </button>
              <Link
                href="/tools"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore More Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="AI Transformation Readiness Assessment"
        description="Assess your organization's readiness for AI transformation with our comprehensive assessment tool."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              AI Transformation Readiness Assessment
            </h1>
            <p className="text-gray-600 mb-6">
              Assess your organization's readiness for AI transformation across six key areas.
            </p>
            <div className="flex justify-center">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Question {currentStep + 1} of {questions.length}
            </p>
          </div>

          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {currentQuestion.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, option.points)}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Your responses are confidential and will be used only to provide personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}