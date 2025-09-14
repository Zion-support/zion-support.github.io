import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveAIAssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'industry',
      question: 'What industry does your company operate in?',
      type: 'select',
      options: [
        'Manufacturing',
        'Healthcare',
        'Financial Services',
        'Retail/E-commerce',
        'Technology',
        'Logistics/Supply Chain',
        'Energy/Utilities',
        'Education',
        'Real Estate',
        'Other'
      ]
    },
    {
      id: 'company_size',
      question: 'What is your company size?',
      type: 'select',
      options: [
        'Startup (1-10 employees)',
        'Small Business (11-50 employees)',
        'Medium Business (51-200 employees)',
        'Large Business (201-1000 employees)',
        'Enterprise (1000+ employees)'
      ]
    },
    {
      id: 'current_challenges',
      question: 'What are your biggest current challenges? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Manual processes causing inefficiency',
        'Data silos and poor integration',
        'High operational costs',
        'Poor customer experience',
        'Compliance and regulatory issues',
        'Outdated technology systems',
        'Difficulty in decision making',
        'Limited scalability',
        'Security concerns',
        'Talent acquisition and retention'
      ]
    },
    {
      id: 'ai_readiness',
      question: 'How would you rate your current AI readiness?',
      type: 'radio',
      options: [
        'Not started - No AI initiatives',
        'Exploring - Researching AI possibilities',
        'Pilot phase - Testing AI solutions',
        'Implementing - Rolling out AI projects',
        'Advanced - AI is core to operations'
      ]
    },
    {
      id: 'budget_range',
      question: 'What is your approximate budget for AI transformation?',
      type: 'select',
      options: [
        'Under $50K',
        '$50K - $100K',
        '$100K - $500K',
        '$500K - $1M',
        '$1M - $5M',
        '$5M+',
        'Not sure yet'
      ]
    },
    {
      id: 'timeline',
      question: 'What is your preferred timeline for implementation?',
      type: 'select',
      options: [
        'Immediate (0-3 months)',
        'Short-term (3-6 months)',
        'Medium-term (6-12 months)',
        'Long-term (1-2 years)',
        'Flexible timeline'
      ]
    },
    {
      id: 'goals',
      question: 'What are your primary goals for AI implementation? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Increase operational efficiency',
        'Reduce costs',
        'Improve customer experience',
        'Enhance decision making',
        'Automate repetitive tasks',
        'Improve data insights',
        'Increase revenue',
        'Gain competitive advantage',
        'Improve compliance',
        'Scale operations'
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateResults = () => {
    const results = {
      aiReadiness: answers.ai_readiness || 'Not started',
      industry: answers.industry || 'Technology',
      companySize: answers.company_size || 'Medium Business',
      challenges: answers.current_challenges || [],
      goals: answers.goals || [],
      budget: answers.budget_range || 'Not sure yet',
      timeline: answers.timeline || 'Flexible timeline'
    };

    // Calculate AI maturity score
    let maturityScore = 0;
    const readinessMap = {
      'Not started - No AI initiatives': 0,
      'Exploring - Researching AI possibilities': 1,
      'Pilot phase - Testing AI solutions': 2,
      'Implementing - Rolling out AI projects': 3,
      'Advanced - AI is core to operations': 4
    };
    maturityScore += readinessMap[results.aiReadiness] || 0;

    // Add points for goals and challenges
    maturityScore += results.goals.length * 0.5;
    maturityScore += results.challenges.length * 0.3;

    // Determine recommendations
    const recommendations = [];
    if (maturityScore < 2) {
      recommendations.push('Start with AI readiness assessment and pilot projects');
      recommendations.push('Focus on data quality and infrastructure');
    } else if (maturityScore < 4) {
      recommendations.push('Implement AI automation for high-impact processes');
      recommendations.push('Develop AI strategy and roadmap');
    } else {
      recommendations.push('Scale AI across the organization');
      recommendations.push('Explore advanced AI technologies');
    }

    return {
      ...results,
      maturityScore: Math.min(maturityScore, 10),
      recommendations
    };
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
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
    setShowResults(false);
  };

  if (showResults) {
    const results = calculateResults();
    
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">🎯 ASSESSMENT COMPLETE</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your AI Transformation Roadmap</h2>
              <p className="text-lg text-gray-600">
                Based on your responses, here's your personalized AI strategy and recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Maturity Score</h3>
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-4 mr-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-1000"
                      style={{ width: `${(results.maturityScore / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">{results.maturityScore.toFixed(1)}/10</span>
                </div>
                <p className="text-gray-600">
                  {results.maturityScore < 3 ? 'Beginner - Great time to start your AI journey' :
                   results.maturityScore < 6 ? 'Intermediate - Ready for strategic AI implementation' :
                   results.maturityScore < 8 ? 'Advanced - Scale and optimize your AI initiatives' :
                   'Expert - Lead the industry with cutting-edge AI solutions'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Focus</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{results.industry}</div>
                <p className="text-gray-600">
                  We have extensive experience in {results.industry.toLowerCase()} with proven solutions and case studies.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Next Steps</h3>
              <div className="space-y-3">
                {results.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-4">Personalized AI Solutions for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Primary Goals</h4>
                  <ul className="text-sm space-y-1">
                    {results.goals.slice(0, 3).map((goal, index) => (
                      <li key={index}>• {goal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Challenges</h4>
                  <ul className="text-sm space-y-1">
                    {results.challenges.slice(0, 3).map((challenge, index) => (
                      <li key={index}>• {challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Your Free Consultation
                </Link>
                <button
                  onClick={resetAssessment}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AI ASSESSMENT TOOL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your AI Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take our comprehensive assessment to get personalized AI transformation recommendations 
            and discover how AI can transform your business.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>
            
            {currentQuestion.type === 'select' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option}
                      checked={answers[currentQuestion.id] === option}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      className="mr-3 text-purple-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === 'radio' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option}
                      checked={answers[currentQuestion.id] === option}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      className="mr-3 text-purple-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === 'checkbox' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      name={currentQuestion.id}
                      value={option}
                      checked={answers[currentQuestion.id]?.includes(option) || false}
                      onChange={(e) => {
                        const currentAnswers = answers[currentQuestion.id] || [];
                        if (e.target.checked) {
                          handleAnswer(currentQuestion.id, [...currentAnswers, option]);
                        } else {
                          handleAnswer(currentQuestion.id, currentAnswers.filter(a => a !== option));
                        }
                      }}
                      className="mr-3 text-purple-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIAssessmentTool;