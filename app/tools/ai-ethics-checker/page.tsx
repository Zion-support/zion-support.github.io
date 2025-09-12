import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import Card from '../../../components/ui/Card';

export default function AIEthicsChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({});
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [complianceScore, setComplianceScore] = useState(0);

  const assessmentCategories = [
    {
      id: 'bias_fairness',
      title: 'Bias & Fairness',
      description: 'Assess potential biases in your AI system',
      icon: '⚖️',
      questions: [
        {
          id: 'bias_training_data',
          question: 'How diverse is your training data across different demographic groups?',
          options: [
            { value: 1, text: 'Limited diversity - mostly homogeneous data', points: 1 },
            { value: 2, text: 'Some diversity but gaps exist', points: 2 },
            { value: 3, text: 'Good diversity across most groups', points: 3 },
            { value: 4, text: 'Comprehensive diversity with ongoing monitoring', points: 4 }
          ]
        },
        {
          id: 'bias_testing',
          question: 'Do you regularly test for bias across different groups?',
          options: [
            { value: 1, text: 'No bias testing performed', points: 1 },
            { value: 2, text: 'Occasional bias testing', points: 2 },
            { value: 3, text: 'Regular bias testing with documentation', points: 3 },
            { value: 4, text: 'Continuous bias monitoring with automated alerts', points: 4 }
          ]
        },
        {
          id: 'fairness_metrics',
          question: 'Do you measure fairness metrics for your AI system?',
          options: [
            { value: 1, text: 'No fairness metrics tracked', points: 1 },
            { value: 2, text: 'Basic fairness metrics', points: 2 },
            { value: 3, text: 'Multiple fairness metrics with thresholds', points: 3 },
            { value: 4, text: 'Comprehensive fairness framework with continuous monitoring', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'transparency',
      title: 'Transparency & Explainability',
      description: 'Evaluate transparency and explainability of your AI system',
      icon: '🔍',
      questions: [
        {
          id: 'model_explainability',
          question: 'How explainable are your AI model decisions?',
          options: [
            { value: 1, text: 'Black box - no explanation provided', points: 1 },
            { value: 2, text: 'Basic explanations for some decisions', points: 2 },
            { value: 3, text: 'Good explanations for most decisions', points: 3 },
            { value: 4, text: 'Comprehensive explanations with user-friendly interfaces', points: 4 }
          ]
        },
        {
          id: 'data_transparency',
          question: 'How transparent are you about data usage and sources?',
          options: [
            { value: 1, text: 'Minimal information provided', points: 1 },
            { value: 2, text: 'Basic information about data sources', points: 2 },
            { value: 3, text: 'Detailed information about data collection and usage', points: 3 },
            { value: 4, text: 'Full transparency with public data documentation', points: 4 }
          ]
        },
        {
          id: 'decision_transparency',
          question: 'Do users understand how decisions are made?',
          options: [
            { value: 1, text: 'Users have no understanding of decision process', points: 1 },
            { value: 2, text: 'Basic explanation of decision factors', points: 2 },
            { value: 3, text: 'Clear explanation of decision logic and factors', points: 3 },
            { value: 4, text: 'Interactive explanations with decision visualization', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      description: 'Assess privacy protection and data security measures',
      icon: '🔒',
      questions: [
        {
          id: 'data_minimization',
          question: 'Do you follow data minimization principles?',
          options: [
            { value: 1, text: 'Collect more data than necessary', points: 1 },
            { value: 2, text: 'Some data minimization practices', points: 2 },
            { value: 3, text: 'Good data minimization with regular audits', points: 3 },
            { value: 4, text: 'Comprehensive data minimization with automated controls', points: 4 }
          ]
        },
        {
          id: 'consent_management',
          question: 'How do you manage user consent for data usage?',
          options: [
            { value: 1, text: 'No explicit consent management', points: 1 },
            { value: 2, text: 'Basic consent collection', points: 2 },
            { value: 3, text: 'Granular consent with opt-out options', points: 3 },
            { value: 4, text: 'Advanced consent management with real-time controls', points: 4 }
          ]
        },
        {
          id: 'data_security',
          question: 'What security measures protect user data?',
          options: [
            { value: 1, text: 'Basic security measures', points: 1 },
            { value: 2, text: 'Standard security practices', points: 2 },
            { value: 3, text: 'Strong security with encryption and access controls', points: 3 },
            { value: 4, text: 'Enterprise-grade security with continuous monitoring', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'accountability',
      title: 'Accountability & Governance',
      description: 'Evaluate governance structures and accountability measures',
      icon: '👥',
      questions: [
        {
          id: 'governance_framework',
          question: 'Do you have an AI governance framework?',
          options: [
            { value: 1, text: 'No formal governance framework', points: 1 },
            { value: 2, text: 'Basic governance policies', points: 2 },
            { value: 3, text: 'Comprehensive governance with regular reviews', points: 3 },
            { value: 4, text: 'Advanced governance with AI ethics board and oversight', points: 4 }
          ]
        },
        {
          id: 'human_oversight',
          question: 'What level of human oversight exists for AI decisions?',
          options: [
            { value: 1, text: 'Minimal human oversight', points: 1 },
            { value: 2, text: 'Some human review for critical decisions', points: 2 },
            { value: 3, text: 'Regular human oversight with escalation procedures', points: 3 },
            { value: 4, text: 'Comprehensive human oversight with continuous monitoring', points: 4 }
          ]
        },
        {
          id: 'responsibility_chain',
          question: 'Is there a clear chain of responsibility for AI decisions?',
          options: [
            { value: 1, text: 'Unclear responsibility structure', points: 1 },
            { value: 2, text: 'Basic responsibility assignments', points: 2 },
            { value: 3, text: 'Clear responsibility with documented procedures', points: 3 },
            { value: 4, text: 'Comprehensive responsibility framework with accountability measures', points: 4 }
          ]
        }
      ]
    }
  ];

  const handleAnswer = (categoryId, questionId, answer) => {
    setAssessmentData(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [questionId]: answer
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < assessmentCategories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateComplianceScore();
      setAssessmentComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateComplianceScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;
    
    assessmentCategories.forEach(category => {
      category.questions.forEach(question => {
        maxPoints += 4;
        if (assessmentData[category.id]?.[question.id]) {
          totalPoints += assessmentData[category.id][question.id].points;
        }
      });
    });
    
    const percentage = (totalPoints / maxPoints) * 100;
    setComplianceScore(percentage);
  };

  const getComplianceLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 40) return { level: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return [
        'Maintain current high standards and continue monitoring',
        'Consider implementing advanced bias detection tools',
        'Explore emerging AI ethics frameworks and best practices',
        'Share your ethical AI practices with the community'
      ];
    } else if (score >= 60) {
      return [
        'Implement comprehensive bias testing procedures',
        'Develop clear explainability frameworks',
        'Strengthen data privacy and security measures',
        'Establish formal AI governance structures'
      ];
    } else if (score >= 40) {
      return [
        'Conduct thorough bias and fairness assessments',
        'Implement basic explainability features',
        'Review and improve data collection practices',
        'Develop AI ethics policies and procedures'
      ];
    } else {
      return [
        'Conduct comprehensive AI ethics audit',
        'Implement basic bias testing and monitoring',
        'Develop data minimization and privacy policies',
        'Establish AI governance and oversight framework'
      ];
    }
  };

  const currentCategory = assessmentCategories[currentStep];
  const complianceLevel = getComplianceLevel(complianceScore);
  const recommendations = getRecommendations(complianceScore);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Ethics Compliance Checker - Zion Tech Group"
        description="Ensure your AI implementations comply with ethical guidelines and regulatory requirements. Comprehensive assessment covering bias, fairness, transparency, and privacy."
        keywords="AI ethics, AI compliance, bias detection, AI fairness, AI transparency, AI governance, ethical AI, responsible AI"
        url="/tools/ai-ethics-checker"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ⚖️ AI Ethics Compliance Checker
            </h1>
            <p className="text-xl">
              Ensure your AI implementations comply with ethical guidelines and regulatory requirements.
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
                  Category {currentStep + 1} of {assessmentCategories.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentStep + 1) / assessmentCategories.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / assessmentCategories.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{currentCategory.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h2>
                  <p className="text-gray-600">{currentCategory.description}</p>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-8">
              {currentCategory.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{question.question}</h3>
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          assessmentData[currentCategory.id]?.[question.id]?.value === option.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${currentCategory.id}_${question.id}`}
                          value={option.value}
                          checked={assessmentData[currentCategory.id]?.[question.id]?.value === option.value}
                          onChange={() => handleAnswer(currentCategory.id, question.id, option)}
                          className="sr-only"
                        />
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            assessmentData[currentCategory.id]?.[question.id]?.value === option.value
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300'
                          }`}>
                            {assessmentData[currentCategory.id]?.[question.id]?.value === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{option.text}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                {currentStep === assessmentCategories.length - 1 ? 'Complete Assessment' : 'Next Category'}
              </button>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <Card className="p-8 text-center">
              <div className="mb-6">
                <div className={`inline-block px-6 py-3 rounded-full text-2xl font-bold ${complianceLevel.bgColor} ${complianceLevel.color}`}>
                  {complianceLevel.level} Compliance
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI Ethics Compliance Score: {Math.round(complianceScore)}%
              </h2>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className="bg-green-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${complianceScore}%` }}
                ></div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {complianceScore >= 80 
                  ? "Excellent! Your AI system demonstrates strong ethical practices and compliance."
                  : complianceScore >= 60
                  ? "Good foundation! Continue improving your ethical AI practices."
                  : complianceScore >= 40
                  ? "Room for improvement. Focus on strengthening ethical AI practices."
                  : "Significant improvements needed. Prioritize ethical AI implementation."
                }
              </p>
            </Card>

            {/* Recommendations */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Ethical AI Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold mr-3">{index + 1}.</span>
                    <span className="text-gray-700">{recommendation}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resources */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Ethical AI Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">📖 AI Ethics Framework</h4>
                  <p className="mb-4">Download our comprehensive AI ethics framework and implementation guide.</p>
                  <a href="/resources" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Download Guide
                  </a>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">🎓 Ethics Training</h4>
                  <p className="mb-4">Access our AI ethics training program for your team.</p>
                  <a href="/services" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Training
                  </a>
                </div>
              </div>
            </Card>

            {/* Restart Assessment */}
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAssessmentData({});
                  setAssessmentComplete(false);
                  setComplianceScore(0);
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