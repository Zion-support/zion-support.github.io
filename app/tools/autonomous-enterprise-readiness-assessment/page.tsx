'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function AutonomousEnterpriseReadinessAssessment() {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'digital-infrastructure',
      question: 'How would you rate your current digital infrastructure?',
      options: [
        { value: 1, label: 'Basic - Limited digital systems' },
        { value: 2, label: 'Developing - Some digital processes' },
        { value: 3, label: 'Good - Well-integrated digital systems' },
        { value: 4, label: 'Advanced - Comprehensive digital ecosystem' },
        { value: 5, label: 'Excellent - Cutting-edge digital infrastructure' }
      ]
    },
    {
      id: 'data-quality',
      question: 'How would you assess your data quality and availability?',
      options: [
        { value: 1, label: 'Poor - Inconsistent, incomplete data' },
        { value: 2, label: 'Fair - Some data issues, basic quality' },
        { value: 3, label: 'Good - Reliable data with minor issues' },
        { value: 4, label: 'Very Good - High-quality, well-organized data' },
        { value: 5, label: 'Excellent - Perfect data quality and availability' }
      ]
    },
    {
      id: 'ai-experience',
      question: 'What is your organization\'s experience with AI and automation?',
      options: [
        { value: 1, label: 'None - No AI experience' },
        { value: 2, label: 'Limited - Basic automation tools' },
        { value: 3, label: 'Moderate - Some AI implementations' },
        { value: 4, label: 'Advanced - Multiple AI systems in use' },
        { value: 5, label: 'Expert - Leading AI adoption' }
      ]
    },
    {
      id: 'change-management',
      question: 'How prepared is your organization for major technological changes?',
      options: [
        { value: 1, label: 'Not prepared - Resistance to change' },
        { value: 2, label: 'Somewhat prepared - Limited change capability' },
        { value: 3, label: 'Moderately prepared - Some change experience' },
        { value: 4, label: 'Well prepared - Strong change management' },
        { value: 5, label: 'Excellent - Agile, change-ready culture' }
      ]
    },
    {
      id: 'technical-team',
      question: 'How would you rate your technical team\'s capabilities?',
      options: [
        { value: 1, label: 'Limited - Basic technical skills' },
        { value: 2, label: 'Fair - Some technical expertise' },
        { value: 3, label: 'Good - Solid technical team' },
        { value: 4, label: 'Strong - Highly skilled technical team' },
        { value: 5, label: 'Expert - World-class technical capabilities' }
      ]
    },
    {
      id: 'budget-commitment',
      question: 'What is your budget commitment for autonomous systems?',
      options: [
        { value: 1, label: 'Minimal - Very limited budget' },
        { value: 2, label: 'Small - Basic investment capability' },
        { value: 3, label: 'Moderate - Reasonable budget allocation' },
        { value: 4, label: 'Significant - Substantial investment planned' },
        { value: 5, label: 'Major - Unlimited budget for transformation' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    
    if (answeredQuestions < totalQuestions) {
      alert('Please answer all questions before calculating your score.');
      return;
    }

    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = totalQuestions * 5;
    const percentage = (totalScore / maxScore) * 100;

    setShowResults(true);
    return { totalScore, maxScore, percentage };
  };

  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'Ready', color: 'green', description: 'Your organization is well-prepared for autonomous enterprise implementation.' };
    if (percentage >= 60) return { level: 'Mostly Ready', color: 'blue', description: 'You\'re close to being ready with some areas to improve.' };
    if (percentage >= 40) return { level: 'Partially Ready', color: 'yellow', description: 'Significant preparation needed before implementation.' };
    if (percentage >= 20) return { level: 'Not Ready', color: 'orange', description: 'Substantial work required before autonomous systems.' };
    return { level: 'Not Ready', color: 'red', description: 'Major transformation needed before considering autonomous systems.' };
  };

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;
  const readiness = getReadinessLevel(percentage);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Autonomous Enterprise Readiness Assessment - Evaluate Your AI Readiness"
        description="Assess your organization's readiness for autonomous enterprise systems. Get personalized recommendations and implementation roadmap."
        keywords="autonomous enterprise assessment, AI readiness, business transformation assessment, autonomous systems evaluation"
        url="/tools/autonomous-enterprise-readiness-assessment"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS ENTERPRISE ASSESSMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Autonomous Enterprise Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluate your organization's readiness for autonomous AI systems and get personalized 
            recommendations for successful implementation.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => handleAnswer(question.id, option.value)}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center pt-6">
                <button
                  onClick={calculateScore}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors text-lg"
                >
                  Calculate My Readiness Score
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold mb-4 ${
                  readiness.color === 'green' ? 'bg-green-100 text-green-800' :
                  readiness.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  readiness.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                  readiness.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {readiness.level}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Readiness Score: {percentage.toFixed(0)}%
                </h2>
                <p className="text-lg text-gray-600">{readiness.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{totalScore}</div>
                  <div className="text-gray-600">Total Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{maxScore}</div>
                  <div className="text-gray-600">Maximum Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{percentage.toFixed(0)}%</div>
                  <div className="text-gray-600">Readiness Percentage</div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personalized Recommendations</h3>
              
              {percentage < 60 ? (
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-3">Foundation Building</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Strengthen your digital infrastructure</li>
                      <li>• Improve data quality and organization</li>
                      <li>• Build technical team capabilities</li>
                      <li>• Develop change management processes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Pilot Projects</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Start with small-scale AI implementations</li>
                      <li>• Focus on one business process at a time</li>
                      <li>• Build internal AI expertise gradually</li>
                      <li>• Measure and learn from each project</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Ready for Implementation</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Begin autonomous system pilot projects</li>
                      <li>• Scale successful implementations</li>
                      <li>• Focus on advanced AI capabilities</li>
                      <li>• Lead industry transformation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Advanced Strategies</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Implement quantum AI systems</li>
                      <li>• Develop fully autonomous operations</li>
                      <li>• Create competitive advantages</li>
                      <li>• Drive industry innovation</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">Get Expert Guidance</h4>
                  <p className="mb-4">Work with our autonomous systems experts to develop a customized implementation plan.</p>
                  <Link
                    href="/contact"
                    className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Schedule Consultation
                  </Link>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">Learn More</h4>
                  <p className="mb-4">Explore our case studies and resources to understand autonomous systems better.</p>
                  <Link
                    href="/blog/ai-2026-autonomous-enterprise-systems"
                    className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Read Articles
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowResults(false)}
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
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