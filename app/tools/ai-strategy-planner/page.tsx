import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import Card from '../../../components/ui/Card';

export default function AIStrategyPlanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [strategyData, setStrategyData] = useState({});
  const [strategyComplete, setStrategyComplete] = useState(false);

  const strategySteps = [
    {
      id: 'business_objectives',
      title: 'Business Objectives',
      description: 'Define your AI transformation goals and success metrics',
      icon: '🎯',
      questions: [
        {
          id: 'primary_goals',
          question: 'What are your primary business objectives for AI adoption?',
          type: 'multiple',
          options: [
            'Increase operational efficiency',
            'Improve customer experience',
            'Reduce operational costs',
            'Enhance decision-making capabilities',
            'Automate repetitive processes',
            'Gain competitive advantage',
            'Improve product quality',
            'Expand market reach'
          ]
        },
        {
          id: 'success_metrics',
          question: 'How will you measure AI success?',
          type: 'multiple',
          options: [
            'ROI and cost savings',
            'Process efficiency improvements',
            'Customer satisfaction scores',
            'Revenue growth',
            'Time-to-market reduction',
            'Error rate reduction',
            'Employee productivity gains',
            'Market share growth'
          ]
        },
        {
          id: 'timeline',
          question: 'What is your target timeline for AI implementation?',
          type: 'single',
          options: [
            '3-6 months (Quick wins)',
            '6-12 months (Moderate transformation)',
            '12-24 months (Comprehensive transformation)',
            '24+ months (Enterprise-wide transformation)'
          ]
        }
      ]
    },
    {
      id: 'use_cases',
      title: 'AI Use Cases',
      description: 'Identify specific AI applications for your business',
      icon: '💡',
      questions: [
        {
          id: 'process_automation',
          question: 'Which processes would benefit from automation?',
          type: 'multiple',
          options: [
            'Customer service and support',
            'Data entry and processing',
            'Inventory management',
            'Financial reporting',
            'Quality control and testing',
            'Content creation and management',
            'Sales and marketing processes',
            'Human resources tasks'
          ]
        },
        {
          id: 'predictive_analytics',
          question: 'What predictions would help your business?',
          type: 'multiple',
          options: [
            'Customer behavior and preferences',
            'Demand forecasting',
            'Equipment maintenance needs',
            'Financial risk assessment',
            'Market trends and opportunities',
            'Employee turnover risk',
            'Product failure prediction',
            'Supply chain disruptions'
          ]
        },
        {
          id: 'personalization',
          question: 'Where could personalization improve your business?',
          type: 'multiple',
          options: [
            'Customer recommendations',
            'Marketing campaigns',
            'Product offerings',
            'User interface customization',
            'Pricing strategies',
            'Content delivery',
            'Service delivery',
            'Learning and development'
          ]
        }
      ]
    },
    {
      id: 'data_assessment',
      title: 'Data Assessment',
      description: 'Evaluate your data assets and requirements',
      icon: '📊',
      questions: [
        {
          id: 'data_sources',
          question: 'What data sources do you currently have?',
          type: 'multiple',
          options: [
            'Customer databases',
            'Sales and transaction data',
            'Website and app analytics',
            'Social media data',
            'IoT sensor data',
            'Financial records',
            'HR and employee data',
            'External market data'
          ]
        },
        {
          id: 'data_quality',
          question: 'How would you rate your data quality?',
          type: 'single',
          options: [
            'Excellent - Clean, complete, and well-structured',
            'Good - Mostly clean with minor issues',
            'Fair - Some quality issues that need attention',
            'Poor - Significant quality problems'
          ]
        },
        {
          id: 'data_volume',
          question: 'What is the volume of your data?',
          type: 'single',
          options: [
            'Small (< 1GB)',
            'Medium (1GB - 1TB)',
            'Large (1TB - 100TB)',
            'Very Large (> 100TB)'
          ]
        }
      ]
    },
    {
      id: 'technology_readiness',
      title: 'Technology Readiness',
      description: 'Assess your current technology infrastructure',
      icon: '⚙️',
      questions: [
        {
          id: 'cloud_infrastructure',
          question: 'What is your current cloud infrastructure status?',
          type: 'single',
          options: [
            'Fully cloud-native with modern architecture',
            'Hybrid cloud with some modernization',
            'Traditional on-premise with cloud migration in progress',
            'Mostly on-premise with limited cloud adoption'
          ]
        },
        {
          id: 'ai_capabilities',
          question: 'What AI capabilities does your team currently have?',
          type: 'multiple',
          options: [
            'Data science and machine learning expertise',
            'AI/ML development skills',
            'Data engineering capabilities',
            'Cloud platform experience',
            'AI ethics and governance knowledge',
            'AI project management experience',
            'AI security and compliance expertise',
            'Limited AI capabilities'
          ]
        },
        {
          id: 'integration_complexity',
          question: 'How complex is your current system integration?',
          type: 'single',
          options: [
            'Simple - Few integrated systems',
            'Moderate - Some system integration challenges',
            'Complex - Multiple legacy systems',
            'Very Complex - Highly integrated enterprise systems'
          ]
        }
      ]
    },
    {
      id: 'budget_resources',
      title: 'Budget & Resources',
      description: 'Plan your AI investment and resource allocation',
      icon: '💰',
      questions: [
        {
          id: 'budget_range',
          question: 'What is your AI transformation budget range?',
          type: 'single',
          options: [
            'Under $100K (Pilot projects)',
            '$100K - $500K (Department-level initiatives)',
            '$500K - $2M (Enterprise-wide transformation)',
            'Over $2M (Full digital transformation)'
          ]
        },
        {
          id: 'resource_allocation',
          question: 'How will you allocate resources for AI projects?',
          type: 'multiple',
          options: [
            'Hire new AI talent',
            'Train existing employees',
            'Partner with AI consultants',
            'Use managed AI services',
            'Invest in AI platforms and tools',
            'Outsource AI development',
            'Create internal AI center of excellence',
            'Establish AI partnerships'
          ]
        },
        {
          id: 'risk_tolerance',
          question: 'What is your risk tolerance for AI investments?',
          type: 'single',
          options: [
            'Low - Conservative, proven approaches only',
            'Moderate - Some experimentation with established vendors',
            'High - Willing to try innovative approaches',
            'Very High - Early adopter of cutting-edge AI'
          ]
        }
      ]
    }
  ];

  const handleAnswer = (stepId, questionId, answer) => {
    setStrategyData(prev => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [questionId]: answer
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < strategySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setStrategyComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateStrategy = () => {
    const recommendations = [];
    const priorities = [];
    const timeline = [];
    const risks = [];

    // Analyze business objectives
    const objectives = strategyData.business_objectives?.primary_goals || [];
    const metrics = strategyData.business_objectives?.success_metrics || [];
    
    if (objectives.includes('Increase operational efficiency')) {
      recommendations.push('Focus on process automation and workflow optimization');
      priorities.push('Implement RPA and intelligent document processing');
    }
    
    if (objectives.includes('Improve customer experience')) {
      recommendations.push('Develop AI-powered customer service and personalization');
      priorities.push('Implement chatbots, recommendation engines, and predictive analytics');
    }

    // Analyze use cases
    const automation = strategyData.use_cases?.process_automation || [];
    const analytics = strategyData.use_cases?.predictive_analytics || [];
    
    if (automation.length > 0) {
      recommendations.push('Start with high-impact, low-complexity automation projects');
      timeline.push('Phase 1: Process automation (3-6 months)');
    }
    
    if (analytics.length > 0) {
      recommendations.push('Develop predictive analytics capabilities');
      timeline.push('Phase 2: Predictive analytics (6-12 months)');
    }

    // Analyze data and technology
    const dataQuality = strategyData.data_assessment?.data_quality || '';
    const techReadiness = strategyData.technology_readiness?.cloud_infrastructure || '';
    
    if (dataQuality === 'Poor') {
      risks.push('Data quality issues may delay AI implementation');
      recommendations.push('Prioritize data quality improvement and governance');
    }
    
    if (techReadiness.includes('on-premise')) {
      risks.push('Legacy infrastructure may limit AI capabilities');
      recommendations.push('Consider cloud migration or hybrid approach');
    }

    return { recommendations, priorities, timeline, risks };
  };

  const currentStepData = strategySteps[currentStep];
  const strategyResults = strategyComplete ? generateStrategy() : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Strategy Planner - Zion Tech Group"
        description="Create a comprehensive AI strategy for your organization. Plan your AI transformation with our step-by-step strategy planner covering objectives, use cases, and implementation."
        keywords="AI strategy, AI planning, AI transformation strategy, AI roadmap, AI implementation plan"
        url="/tools/ai-strategy-planner"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 AI Strategy Planner
            </h1>
            <p className="text-xl">
              Create a comprehensive AI strategy for your organization with our step-by-step planning tool.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!strategyComplete ? (
          <Card className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Step {currentStep + 1} of {strategySteps.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentStep + 1) / strategySteps.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / strategySteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{currentStepData.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
                  <p className="text-gray-600">{currentStepData.description}</p>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-8">
              {currentStepData.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{question.question}</h3>
                  
                  {question.type === 'single' ? (
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            strategyData[currentStepData.id]?.[question.id] === option
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`${currentStepData.id}_${question.id}`}
                            value={option}
                            checked={strategyData[currentStepData.id]?.[question.id] === option}
                            onChange={() => handleAnswer(currentStepData.id, question.id, option)}
                            className="sr-only"
                          />
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              strategyData[currentStepData.id]?.[question.id] === option
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300'
                            }`}>
                              {strategyData[currentStepData.id]?.[question.id] === option && (
                                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                              )}
                            </div>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            strategyData[currentStepData.id]?.[question.id]?.includes(option)
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={strategyData[currentStepData.id]?.[question.id]?.includes(option) || false}
                            onChange={(e) => {
                              const currentAnswers = strategyData[currentStepData.id]?.[question.id] || [];
                              const newAnswers = e.target.checked
                                ? [...currentAnswers, option]
                                : currentAnswers.filter(answer => answer !== option);
                              handleAnswer(currentStepData.id, question.id, newAnswers);
                            }}
                            className="sr-only"
                          />
                          <div className="flex items-center">
                            <div className={`w-4 h-4 border-2 rounded mr-3 flex items-center justify-center ${
                              strategyData[currentStepData.id]?.[question.id]?.includes(option)
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300'
                            }`}>
                              {strategyData[currentStepData.id]?.[question.id]?.includes(option) && (
                                <span className="text-white text-xs">✓</span>
                              )}
                            </div>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
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
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {currentStep === strategySteps.length - 1 ? 'Generate Strategy' : 'Next Step'}
              </button>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Strategy Results */}
            <Card className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-block px-6 py-3 rounded-full text-2xl font-bold bg-purple-100 text-purple-600">
                  🎯 Your AI Strategy
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI Transformation Strategy Generated
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Based on your inputs, here's your personalized AI strategy with recommendations and implementation plan.
              </p>
            </Card>

            {/* Recommendations */}
            {strategyResults.recommendations.length > 0 && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Strategic Recommendations</h3>
                <div className="space-y-4">
                  {strategyResults.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <span className="text-purple-600 font-bold mr-3">{index + 1}.</span>
                      <span className="text-gray-700">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Priorities */}
            {strategyResults.priorities.length > 0 && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Implementation Priorities</h3>
                <div className="space-y-4">
                  {strategyResults.priorities.map((priority, index) => (
                    <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <span className="text-blue-600 font-bold mr-3">{index + 1}.</span>
                      <span className="text-gray-700">{priority}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Timeline */}
            {strategyResults.timeline.length > 0 && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Implementation Timeline</h3>
                <div className="space-y-4">
                  {strategyResults.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-green-600 font-bold mr-3">Phase {index + 1}:</span>
                      <span className="text-gray-700">{phase}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Risks */}
            {strategyResults.risks.length > 0 && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Risk Considerations</h3>
                <div className="space-y-4">
                  {strategyResults.risks.map((risk, index) => (
                    <div key={index} className="flex items-start p-4 bg-yellow-50 rounded-lg">
                      <span className="text-yellow-600 font-bold mr-3">⚠️</span>
                      <span className="text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Next Steps */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">🎯 Take Assessment</h4>
                  <p className="mb-4">Evaluate your current AI readiness with our comprehensive assessment tool.</p>
                  <a href="/tools/ai-readiness-assessment" className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Start Assessment
                  </a>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg">
                  <h4 className="text-xl font-bold mb-3">📞 Get Expert Consultation</h4>
                  <p className="mb-4">Schedule a consultation with our AI experts to refine your strategy.</p>
                  <a href="/contact" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Call
                  </a>
                </div>
              </div>
            </Card>

            {/* Restart Planner */}
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setStrategyData({});
                  setStrategyComplete(false);
                }}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Create New Strategy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}