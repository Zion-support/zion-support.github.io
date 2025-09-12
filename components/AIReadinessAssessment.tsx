'use client';

import React, { useState } from 'react';

interface AssessmentQuestion {
  id: string;
  question: string;
  category: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

interface AssessmentResult {
  overallScore: number;
  categoryScores: {
    data: number;
    technology: number;
    people: number;
    process: number;
    strategy: number;
  };
  readinessLevel: string;
  recommendations: string[];
}

const questions: AssessmentQuestion[] = [
  {
    id: 'data_quality',
    question: 'How would you rate your current data quality?',
    category: 'data',
    options: [
      { value: 1, label: 'Poor', description: 'Data is scattered, inconsistent, and unreliable' },
      { value: 2, label: 'Fair', description: 'Some data is clean but many gaps and inconsistencies' },
      { value: 3, label: 'Good', description: 'Most data is clean and well-organized' },
      { value: 4, label: 'Excellent', description: 'Data is clean, consistent, and well-documented' },
      { value: 5, label: 'Outstanding', description: 'Data is pristine with comprehensive governance' }
    ]
  },
  {
    id: 'data_volume',
    question: 'How much data does your organization have?',
    category: 'data',
    options: [
      { value: 1, label: 'Minimal', description: 'Less than 1GB of structured data' },
      { value: 2, label: 'Small', description: '1-10GB of structured data' },
      { value: 3, label: 'Medium', description: '10-100GB of structured data' },
      { value: 4, label: 'Large', description: '100GB-1TB of structured data' },
      { value: 5, label: 'Massive', description: 'More than 1TB of structured data' }
    ]
  },
  {
    id: 'tech_infrastructure',
    question: 'How would you describe your current technology infrastructure?',
    category: 'technology',
    options: [
      { value: 1, label: 'Basic', description: 'Limited computing power and storage' },
      { value: 2, label: 'Standard', description: 'Adequate for current needs but not scalable' },
      { value: 3, label: 'Good', description: 'Modern infrastructure with some cloud adoption' },
      { value: 4, label: 'Advanced', description: 'Cloud-first with scalable architecture' },
      { value: 5, label: 'Cutting-edge', description: 'State-of-the-art infrastructure with AI capabilities' }
    ]
  },
  {
    id: 'ai_expertise',
    question: 'What is your team\'s AI and machine learning expertise?',
    category: 'people',
    options: [
      { value: 1, label: 'None', description: 'No AI/ML experience on the team' },
      { value: 2, label: 'Basic', description: 'Some team members have basic AI knowledge' },
      { value: 3, label: 'Intermediate', description: 'Team has practical AI implementation experience' },
      { value: 4, label: 'Advanced', description: 'Team includes AI specialists and data scientists' },
      { value: 5, label: 'Expert', description: 'Team has deep AI expertise and research capabilities' }
    ]
  },
  {
    id: 'change_management',
    question: 'How well does your organization handle technology change?',
    category: 'process',
    options: [
      { value: 1, label: 'Poor', description: 'Resistant to change, slow adoption' },
      { value: 2, label: 'Fair', description: 'Some change management but inconsistent' },
      { value: 3, label: 'Good', description: 'Generally adapts well to new technologies' },
      { value: 4, label: 'Excellent', description: 'Proactive change management and training' },
      { value: 5, label: 'Outstanding', description: 'Change is embraced as a competitive advantage' }
    ]
  },
  {
    id: 'ai_strategy',
    question: 'Do you have a clear AI strategy and roadmap?',
    category: 'strategy',
    options: [
      { value: 1, label: 'None', description: 'No AI strategy or planning' },
      { value: 2, label: 'Informal', description: 'Some informal discussions about AI' },
      { value: 3, label: 'Developing', description: 'AI strategy is being developed' },
      { value: 4, label: 'Defined', description: 'Clear AI strategy with defined goals' },
      { value: 5, label: 'Executing', description: 'Comprehensive AI strategy being actively executed' }
    ]
  }
];

export default function AIReadinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
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
    const categoryScores = {
      data: 0,
      technology: 0,
      people: 0,
      process: 0,
      strategy: 0
    };

    let totalScore = 0;
    let questionCount = 0;

    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        categoryScores[question.category as keyof typeof categoryScores] += answer;
        totalScore += answer;
        questionCount++;
      }
    });

    // Calculate average scores
    const overallScore = Math.round((totalScore / questionCount) * 20); // Convert to percentage
    Object.keys(categoryScores).forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      categoryScores[category as keyof typeof categoryScores] = Math.round(
        (categoryScores[category as keyof typeof categoryScores] / categoryQuestions.length) * 20
      );
    });

    // Determine readiness level
    let readinessLevel = '';
    let recommendations: string[] = [];

    if (overallScore >= 80) {
      readinessLevel = 'AI-Ready';
      recommendations = [
        'You\'re ready to implement AI solutions!',
        'Focus on advanced AI use cases and optimization',
        'Consider becoming an AI leader in your industry'
      ];
    } else if (overallScore >= 60) {
      readinessLevel = 'Nearly Ready';
      recommendations = [
        'Address identified gaps before major AI implementation',
        'Invest in team training and data quality improvements',
        'Start with pilot AI projects to build experience'
      ];
    } else if (overallScore >= 40) {
      readinessLevel = 'Getting Started';
      recommendations = [
        'Focus on foundational improvements first',
        'Invest heavily in data quality and team training',
        'Consider partnering with AI experts for guidance'
      ];
    } else {
      readinessLevel = 'Needs Work';
      recommendations = [
        'Prioritize basic infrastructure and data improvements',
        'Invest in comprehensive team training',
        'Consider a phased approach to AI adoption'
      ];
    }

    setResult({
      overallScore,
      categoryScores,
      readinessLevel,
      recommendations
    });
    setIsComplete(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
    setResult(null);
  };

  if (isComplete && result) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Readiness Assessment Results</h2>
          <p className="text-gray-600">Your organization's AI readiness analysis</p>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{result.overallScore}%</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">{result.readinessLevel}</div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${result.overallScore}%` }}
              ></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Scores</h3>
              {Object.entries(result.categoryScores).map(([category, score]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-gray-700 capitalize">{category}</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                    <span className="font-semibold text-gray-900">{score}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={resetAssessment}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Assessment Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Readiness Assessment</h2>
        <p className="text-gray-600">
          Evaluate your organization's readiness for AI implementation
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h3>
        
        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                answers[currentQ.id] === option.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name={currentQ.id}
                value={option.value}
                checked={answers[currentQ.id] === option.value}
                onChange={() => handleAnswer(currentQ.id, option.value)}
                className="sr-only"
              />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    answers[currentQ.id] === option.value
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQ.id] === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={nextQuestion}
          disabled={!answers[currentQ.id]}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}