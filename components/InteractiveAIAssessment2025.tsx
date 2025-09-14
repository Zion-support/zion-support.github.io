"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveAIAssessment2025 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is your current AI adoption level?",
      options: [
        "No AI implementation yet",
        "Basic AI tools (chatbots, simple automation)",
        "Some machine learning applications",
        "Advanced AI systems with deep learning",
        "Fully integrated AI ecosystem"
      ],
      scores: [0, 1, 2, 3, 4]
    },
    {
      id: 2,
      question: "How much data do you have available for AI training?",
      options: [
        "Very limited data",
        "Some structured data",
        "Good amount of clean data",
        "Large datasets with good quality",
        "Massive datasets with excellent quality"
      ],
      scores: [0, 1, 2, 3, 4]
    },
    {
      id: 3,
      question: "What is your team's AI expertise level?",
      options: [
        "No AI expertise",
        "Basic understanding",
        "Some AI practitioners",
        "Experienced AI team",
        "World-class AI experts"
      ],
      scores: [0, 1, 2, 3, 4]
    },
    {
      id: 4,
      question: "What is your budget for AI implementation?",
      options: [
        "Under $10K",
        "$10K - $50K",
        "$50K - $200K",
        "$200K - $1M",
        "Over $1M"
      ],
      scores: [0, 1, 2, 3, 4]
    },
    {
      id: 5,
      question: "What is your timeline for AI implementation?",
      options: [
        "No specific timeline",
        "6+ months",
        "3-6 months",
        "1-3 months",
        "Immediate implementation"
      ],
      scores: [0, 1, 2, 3, 4]
    },
    {
      id: 6,
      question: "What are your primary AI use cases?",
      options: [
        "Not sure yet",
        "Basic automation",
        "Customer service",
        "Data analytics and insights",
        "Advanced AI applications (NLP, computer vision, etc.)"
      ],
      scores: [0, 1, 2, 3, 4]
    }
  ];

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    setAssessmentScore(percentage);
    setShowResults(true);
  };

  const getRecommendation = (score: number) => {
    if (score < 25) {
      return {
        level: "Beginner",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        recommendation: "Start with basic AI tools and build foundational knowledge",
        nextSteps: [
          "Begin with simple automation tools",
          "Invest in team training",
          "Start with pilot projects",
          "Focus on data collection and quality"
        ]
      };
    } else if (score < 50) {
      return {
        level: "Intermediate",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        recommendation: "Implement targeted AI solutions and expand gradually",
        nextSteps: [
          "Deploy machine learning models",
          "Enhance data infrastructure",
          "Scale successful pilots",
          "Invest in advanced AI tools"
        ]
      };
    } else if (score < 75) {
      return {
        level: "Advanced",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        recommendation: "Optimize existing AI systems and explore advanced applications",
        nextSteps: [
          "Implement deep learning solutions",
          "Optimize AI performance",
          "Explore new AI technologies",
          "Scale across organization"
        ]
      };
    } else {
      return {
        level: "Expert",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        recommendation: "Lead AI innovation and develop cutting-edge solutions",
        nextSteps: [
          "Develop proprietary AI solutions",
          "Explore emerging technologies",
          "Share expertise with industry",
          "Drive AI strategy and vision"
        ]
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setAssessmentScore(0);
  };

  if (showResults) {
    const recommendation = getRecommendation(assessmentScore);
    
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your AI Readiness Assessment</h2>
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${recommendation.bgColor} ${recommendation.color} ${recommendation.borderColor} border-2`}>
            {recommendation.level} Level - {Math.round(assessmentScore)}% Ready
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendation</h3>
          <p className="text-gray-600 text-lg">{recommendation.recommendation}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
          <ul className="space-y-2">
            {recommendation.nextSteps.map((step, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-600">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetAssessment}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Retake Assessment
          </button>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🤖</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Readiness Assessment 2025</h2>
        <p className="text-gray-600 text-lg">
          Discover your AI readiness level and get personalized recommendations
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(questions[currentQuestion].id, questions[currentQuestion].scores[index])}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                answers[questions[currentQuestion].id] === questions[currentQuestion].scores[index]
                  ? 'border-purple-600 bg-purple-50 text-purple-900'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  answers[questions[currentQuestion].id] === questions[currentQuestion].scores[index]
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {answers[questions[currentQuestion].id] === questions[currentQuestion].scores[index] && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            currentQuestion === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          disabled={answers[questions[currentQuestion].id] === undefined}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            answers[questions[currentQuestion].id] === undefined
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default InteractiveAIAssessment2025;