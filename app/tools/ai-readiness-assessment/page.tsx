'use client';
import React, { useState } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AIReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 'data_quality',
      category: 'Data Infrastructure',
      question: 'How would you rate your organization\'s data quality and availability?',
      options: [
        { value: 1, text: 'Poor - Data is scattered and inconsistent', points: 1 },
        { value: 2, text: 'Fair - Some data is organized but gaps exist', points: 2 },
        { value: 3, text: 'Good - Most data is clean and accessible', points: 3 },
        { value: 4, text: 'Excellent - Comprehensive, clean, and well-organized data', points: 4 }
      ]
    },
    {
      id: 'technical_infrastructure',
      category: 'Technical Infrastructure',
      question: 'What is the state of your current technical infrastructure?',
      options: [
        { value: 1, text: 'Legacy systems with limited cloud adoption', points: 1 },
        { value: 2, text: 'Mixed environment with some cloud services', points: 2 },
        { value: 3, text: 'Mostly cloud-based with modern architecture', points: 3 },
        { value: 4, text: 'Fully cloud-native with scalable architecture', points: 4 }
      ]
    },
    {
      id: 'team_capabilities',
      category: 'Team Capabilities',
      question: 'How would you describe your team\'s AI and data science capabilities?',
      options: [
        { value: 1, text: 'Limited - No dedicated AI/data science team', points: 1 },
        { value: 2, text: 'Basic - Some team members with relevant skills', points: 2 },
        { value: 3, text: 'Intermediate - Dedicated team with good capabilities', points: 3 },
        { value: 4, text: 'Advanced - Strong team with proven AI experience', points: 4 }
      ]
    },
    {
      id: 'leadership_support',
      category: 'Leadership & Strategy',
      question: 'How strong is leadership support for AI initiatives?',
      options: [
        { value: 1, text: 'Weak - Limited understanding and support', points: 1 },
        { value: 2, text: 'Moderate - Some support but needs education', points: 2 },
        { value: 3, text: 'Strong - Good support with clear vision', points: 3 },
        { value: 4, text: 'Excellent - Strong champion with dedicated resources', points: 4 }
      ]
    },
    {
      id: 'budget_allocation',
      category: 'Budget & Resources',
      question: 'What is your budget allocation for AI initiatives?',
      options: [
        { value: 1, text: 'Limited - Less than 1% of IT budget', points: 1 },
        { value: 2, text: 'Moderate - 1-5% of IT budget', points: 2 },
        { value: 3, text: 'Good - 5-10% of IT budget', points: 3 },
        { value: 4, text: 'Excellent - More than 10% of IT budget', points: 4 }
      ]
    },
    {
      id: 'use_cases',
      category: 'Use Cases & Applications',
      question: 'How well-defined are your AI use cases?',
      options: [
        { value: 1, text: 'Unclear - No specific use cases identified', points: 1 },
        { value: 2, text: 'Basic - Some ideas but not well-defined', points: 2 },
        { value: 3, text: 'Good - Clear use cases with defined goals', points: 3 },
        { value: 4, text: 'Excellent - Comprehensive roadmap with priorities', points: 4 }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
      setAssessmentComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;
    
    questions.forEach(question => {
      maxPoints += 4;
      if (answers[question.id]) {
        totalPoints += answers[question.id].points;
      }
    });
    
    const percentage = (totalPoints / maxPoints) * 100;
    setScore(percentage);
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Advanced', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Intermediate', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 40) return { level: 'Basic', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Beginner', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        'Focus on advanced AI implementations and scaling',
        'Explore cutting-edge AI technologies and automation',
        'Consider AI governance and ethics frameworks',
        'Plan for AI-driven business transformation'
      ];
    } else if (score >= 60) {
      return [
        'Strengthen data infrastructure and quality',
        'Invest in team training and development',
        'Pilot AI projects with clear ROI metrics',
        'Develop comprehensive AI strategy'
      ];
    } else if (score >= 40) {
      return [
        'Improve data collection and organization',
        'Build foundational technical infrastructure',
        'Educate leadership on AI potential',
        'Start with simple automation projects'
      ];
    } else {
      return [
        'Assess and improve data quality',
        'Invest in basic technical infrastructure',
        'Build AI awareness and capabilities',
        'Start with small pilot projects'
      ];
    }
  };

  const currentQuestion = questions[currentStep];
  const scoreLevel = getScoreLevel(score);
  const recommendations = getRecommendations(score);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Readiness Assessment - Zion Tech Group"
        description="Evaluate your organization's readiness for AI transformation with our comprehensive assessment tool. Get personalized recommendations and roadmap."
        keywords="AI readiness, AI assessment, AI transformation, AI strategy, digital transformation, business readiness"
        url="/tools/ai-readiness-assessment"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 AI Readiness Assessment
            </h1>
            <p className="text-xl">
              Evaluate your organization's readiness for AI transformation and get personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!assessmentComplete ? (
          <Card className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
                  {currentQuestion.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      answers[currentQuestion.id]?.value === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={answers[currentQuestion.id]?.value === option.value}
                      onChange={() => handleAnswer(currentQuestion.id, option)}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        answers[currentQuestion.id]?.value === option.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion.id]?.value === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option.text}</span>
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
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={!answers[currentQuestion.id]}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
              </button>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <Card className="p-8 text-center">
              <div className="mb-6">
                <div className={`inline-block px-6 py-3 rounded-full text-2xl font-bold ${scoreLevel.bgColor} ${scoreLevel.color}`}>
                  {scoreLevel.level} Level
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI Readiness Score: {Math.round(score)}%
              </h2>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${score}%` }}
                ></div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {score >= 80 
                  ? "Excellent! Your organization is well-positioned for advanced AI implementations."
                  : score >= 60
                  ? "Good foundation! Focus on strengthening key areas for AI success."
                  : score >= 40
                  ? "Building momentum! Address foundational areas before scaling AI initiatives."
                  : "Getting started! Focus on building strong foundations for AI transformation."
                }
              </p>
            </Card>

            {/* Recommendations */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Personalized Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 font-bold mr-3">{index + 1}.</span>
                    <span className="text-gray-700">{recommendation}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">📞 Get Expert Consultation</h4>
                  <p className="mb-4">Schedule a personalized consultation with our AI experts to discuss your specific needs.</p>
                  <a href="/contact" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Call
                  </a>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">📋 Download Resources</h4>
                  <p className="mb-4">Access our comprehensive AI implementation guides and templates.</p>
                  <a href="/resources" className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Resources
                  </a>
                </div>
              </div>
            </Card>

            {/* Restart Assessment */}
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setAssessmentComplete(false);
                  setScore(0);
                }}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}