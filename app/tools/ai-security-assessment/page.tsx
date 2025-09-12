import React, { useState } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AISecurityAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({});
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);

  const securityCategories = [
    {
      id: 'data_security',
      title: 'Data Security & Privacy',
      description: 'Assess how your AI system protects sensitive data',
      icon: '🔐',
      questions: [
        {
          id: 'data_encryption',
          question: 'How is sensitive data encrypted in your AI system?',
          options: [
            { value: 1, text: 'No encryption implemented', points: 1 },
            { value: 2, text: 'Basic encryption for data at rest', points: 2 },
            { value: 3, text: 'Encryption for data at rest and in transit', points: 3 },
            { value: 4, text: 'End-to-end encryption with key management', points: 4 }
          ]
        },
        {
          id: 'data_access_control',
          question: 'How do you control access to sensitive data?',
          options: [
            { value: 1, text: 'No access controls in place', points: 1 },
            { value: 2, text: 'Basic user authentication', points: 2 },
            { value: 3, text: 'Role-based access control (RBAC)', points: 3 },
            { value: 4, text: 'Advanced access control with audit trails', points: 4 }
          ]
        },
        {
          id: 'data_anonymization',
          question: 'How do you handle data anonymization and pseudonymization?',
          options: [
            { value: 1, text: 'No anonymization practices', points: 1 },
            { value: 2, text: 'Basic data masking', points: 2 },
            { value: 3, text: 'Regular anonymization with review', points: 3 },
            { value: 4, text: 'Advanced anonymization with privacy-preserving techniques', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'model_security',
      title: 'Model Security & Integrity',
      description: 'Evaluate security measures protecting your AI models',
      icon: '🛡️',
      questions: [
        {
          id: 'model_protection',
          question: 'How do you protect your AI models from tampering?',
          options: [
            { value: 1, text: 'No model protection measures', points: 1 },
            { value: 2, text: 'Basic model versioning', points: 2 },
            { value: 3, text: 'Model signing and integrity checks', points: 3 },
            { value: 4, text: 'Advanced model protection with monitoring', points: 4 }
          ]
        },
        {
          id: 'adversarial_protection',
          question: 'How do you protect against adversarial attacks?',
          options: [
            { value: 1, text: 'No adversarial protection', points: 1 },
            { value: 2, text: 'Basic input validation', points: 2 },
            { value: 3, text: 'Adversarial training and detection', points: 3 },
            { value: 4, text: 'Comprehensive adversarial defense system', points: 4 }
          ]
        },
        {
          id: 'model_monitoring',
          question: 'How do you monitor model behavior for security threats?',
          options: [
            { value: 1, text: 'No model monitoring', points: 1 },
            { value: 2, text: 'Basic performance monitoring', points: 2 },
            { value: 3, text: 'Behavioral monitoring with alerts', points: 3 },
            { value: 4, text: 'Advanced monitoring with automated response', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'infrastructure_security',
      title: 'Infrastructure Security',
      description: 'Assess the security of your AI infrastructure',
      icon: '🏗️',
      questions: [
        {
          id: 'network_security',
          question: 'How do you secure your AI infrastructure network?',
          options: [
            { value: 1, text: 'No network security measures', points: 1 },
            { value: 2, text: 'Basic firewall and VPN', points: 2 },
            { value: 3, text: 'Network segmentation and monitoring', points: 3 },
            { value: 4, text: 'Zero-trust network architecture', points: 4 }
          ]
        },
        {
          id: 'container_security',
          question: 'How do you secure AI model containers and deployments?',
          options: [
            { value: 1, text: 'No container security', points: 1 },
            { value: 2, text: 'Basic container scanning', points: 2 },
            { value: 3, text: 'Container hardening and runtime protection', points: 3 },
            { value: 4, text: 'Advanced container security with compliance', points: 4 }
          ]
        },
        {
          id: 'cloud_security',
          question: 'How do you secure your cloud AI infrastructure?',
          options: [
            { value: 1, text: 'No cloud security measures', points: 1 },
            { value: 2, text: 'Basic cloud security settings', points: 2 },
            { value: 3, text: 'Cloud security best practices implemented', points: 3 },
            { value: 4, text: 'Advanced cloud security with compliance frameworks', points: 4 }
          ]
        }
      ]
    },
    {
      id: 'compliance_governance',
      title: 'Compliance & Governance',
      description: 'Evaluate regulatory compliance and security governance',
      icon: '📋',
      questions: [
        {
          id: 'security_policies',
          question: 'Do you have comprehensive AI security policies?',
          options: [
            { value: 1, text: 'No formal security policies', points: 1 },
            { value: 2, text: 'Basic security guidelines', points: 2 },
            { value: 3, text: 'Comprehensive security policies', points: 3 },
            { value: 4, text: 'Advanced policies with regular updates', points: 4 }
          ]
        },
        {
          id: 'incident_response',
          question: 'How do you handle AI security incidents?',
          options: [
            { value: 1, text: 'No incident response plan', points: 1 },
            { value: 2, text: 'Basic incident response procedures', points: 2 },
            { value: 3, text: 'Formal incident response plan', points: 3 },
            { value: 4, text: 'Advanced incident response with automation', points: 4 }
          ]
        },
        {
          id: 'security_training',
          question: 'How do you train your team on AI security?',
          options: [
            { value: 1, text: 'No security training', points: 1 },
            { value: 2, text: 'Basic security awareness', points: 2 },
            { value: 3, text: 'Regular security training', points: 3 },
            { value: 4, text: 'Comprehensive security training program', points: 4 }
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
    if (currentStep < securityCategories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateSecurityScore();
      setAssessmentComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateSecurityScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;
    
    securityCategories.forEach(category => {
      category.questions.forEach(question => {
        maxPoints += 4;
        if (assessmentData[category.id]?.[question.id]) {
          totalPoints += assessmentData[category.id][question.id].points;
        }
      });
    });
    
    const percentage = (totalPoints / maxPoints) * 100;
    setSecurityScore(percentage);
  };

  const getSecurityLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 60) return { level: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 40) return { level: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const getSecurityRecommendations = (score) => {
    if (score >= 80) {
      return [
        'Maintain current high security standards',
        'Implement advanced threat detection systems',
        'Conduct regular security audits and penetration testing',
        'Stay updated with latest AI security threats and defenses'
      ];
    } else if (score >= 60) {
      return [
        'Implement comprehensive data encryption',
        'Strengthen access controls and authentication',
        'Develop formal security incident response procedures',
        'Enhance model protection against adversarial attacks'
      ];
    } else if (score >= 40) {
      return [
        'Establish basic security policies and procedures',
        'Implement data encryption and access controls',
        'Conduct security awareness training for team',
        'Develop incident response and recovery plans'
      ];
    } else {
      return [
        'Implement immediate security measures for data protection',
        'Establish basic access controls and authentication',
        'Develop comprehensive security policies',
        'Conduct security audit and risk assessment'
      ];
    }
  };

  const currentCategory = securityCategories[currentStep];
  const securityLevel = getSecurityLevel(securityScore);
  const recommendations = getSecurityRecommendations(securityScore);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Security Assessment - Zion Tech Group"
        description="Comprehensive AI security assessment covering data protection, model security, infrastructure security, and compliance. Ensure your AI systems are secure and compliant."
        keywords="AI security, AI cybersecurity, AI data protection, AI model security, AI compliance, AI risk assessment"
        url="/tools/ai-security-assessment"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              🔐 AI Security Assessment
            </h1>
            <p className="text-xl">
              Comprehensive security assessment for your AI systems covering data protection, model security, and compliance.
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
                  Category {currentStep + 1} of {securityCategories.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentStep + 1) / securityCategories.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / securityCategories.length) * 100}%` }}
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
                            ? 'border-red-500 bg-red-50'
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
                              ? 'border-red-500 bg-red-500'
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
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                {currentStep === securityCategories.length - 1 ? 'Complete Assessment' : 'Next Category'}
              </button>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <Card className="p-8 text-center">
              <div className="mb-6">
                <div className={`inline-block px-6 py-3 rounded-full text-2xl font-bold ${securityLevel.bgColor} ${securityLevel.color}`}>
                  {securityLevel.level} Security
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI Security Score: {Math.round(securityScore)}%
              </h2>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className="bg-red-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${securityScore}%` }}
                ></div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {securityScore >= 80 
                  ? "Excellent! Your AI system demonstrates strong security practices and compliance."
                  : securityScore >= 60
                  ? "Good foundation! Continue strengthening your AI security measures."
                  : securityScore >= 40
                  ? "Room for improvement. Focus on implementing comprehensive security measures."
                  : "Significant security improvements needed. Prioritize AI security implementation."
                }
              </p>
            </Card>

            {/* Recommendations */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Security Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                    <span className="text-red-600 font-bold mr-3">{index + 1}.</span>
                    <span className="text-gray-700">{recommendation}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Security Resources */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔒 AI Security Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">🛡️ Security Framework</h4>
                  <p className="mb-4">Download our comprehensive AI security framework and implementation guide.</p>
                  <a href="/resources" className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Download Guide
                  </a>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">🎓 Security Training</h4>
                  <p className="mb-4">Access our AI security training program for your team.</p>
                  <a href="/services" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
                  setSecurityScore(0);
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