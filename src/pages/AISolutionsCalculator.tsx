import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Calculator,
  DollarSign,
  Clock,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AISolutionsCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    currentChallenges: [],
    budget: '',
    timeline: '',
    goals: []
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const steps = [
    { id: 'industry', title: 'Industry & Size', icon: Building },
    { id: 'challenges', title: 'Current Challenges', icon: AlertTriangle },
    { id: 'budget', title: 'Budget & Timeline', icon: DollarSign },
    { id: 'goals', title: 'Business Goals', icon: Target },
    { id: 'results', title: 'Recommended Solutions', icon: CheckCircle }
  ];

  const industries = [
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'technology', name: 'Technology', icon: Code },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'logistics', name: 'Logistics & Supply Chain', icon: Truck },
    { id: 'other', name: 'Other', icon: MoreHorizontal }
  ];

  const companySizes = [
    { id: 'startup', name: 'Startup (1-50 employees)', value: 'startup' },
    { id: 'small', name: 'Small Business (51-200 employees)', value: 'small' },
    { id: 'medium', name: 'Medium Business (201-1000 employees)', value: 'medium' },
    { id: 'large', name: 'Large Enterprise (1000+ employees)', value: 'large' }
  ];

  const challenges = [
    { id: 'automation', name: 'Process Automation', description: 'Automate repetitive tasks and workflows' },
    { id: 'analytics', name: 'Data Analytics', description: 'Extract insights from large datasets' },
    { id: 'customer-service', name: 'Customer Service', description: 'Improve customer support efficiency' },
    { id: 'security', name: 'Cybersecurity', description: 'Enhance threat detection and prevention' },
    { id: 'prediction', name: 'Predictive Analytics', description: 'Forecast trends and outcomes' },
    { id: 'optimization', name: 'Resource Optimization', description: 'Optimize operations and resource allocation' },
    { id: 'personalization', name: 'Personalization', description: 'Deliver personalized experiences' },
    { id: 'compliance', name: 'Compliance & Reporting', description: 'Ensure regulatory compliance' }
  ];

  const budgetRanges = [
    { id: 'under-50k', name: 'Under $50,000', value: 'under-50k' },
    { id: '50k-100k', name: '$50,000 - $100,000', value: '50k-100k' },
    { id: '100k-500k', name: '$100,000 - $500,000', value: '100k-500k' },
    { id: '500k-1m', name: '$500,000 - $1,000,000', value: '500k-1m' },
    { id: 'over-1m', name: 'Over $1,000,000', value: 'over-1m' }
  ];

  const timelines = [
    { id: 'immediate', name: 'Immediate (1-3 months)', value: 'immediate' },
    { id: 'short', name: 'Short-term (3-6 months)', value: 'short' },
    { id: 'medium', name: 'Medium-term (6-12 months)', value: 'medium' },
    { id: 'long', name: 'Long-term (12+ months)', value: 'long' }
  ];

  const goals = [
    { id: 'cost-reduction', name: 'Cost Reduction', description: 'Reduce operational costs' },
    { id: 'efficiency', name: 'Increase Efficiency', description: 'Improve process efficiency' },
    { id: 'revenue-growth', name: 'Revenue Growth', description: 'Drive revenue growth' },
    { id: 'customer-satisfaction', name: 'Customer Satisfaction', description: 'Enhance customer experience' },
    { id: 'innovation', name: 'Innovation', description: 'Drive innovation and competitiveness' },
    { id: 'scalability', name: 'Scalability', description: 'Scale operations effectively' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate recommendations based on form data
    const recommendations = generateRecommendations(formData);
    setResults(recommendations);
    setCurrentStep(4);
    setIsCalculating(false);
  };

  const generateRecommendations = (data) => {
    const solutions = [
      {
        id: 'ai-automation',
        name: 'AI Process Automation',
        description: 'Automate repetitive tasks and workflows with intelligent AI agents',
        cost: '$25,000 - $100,000',
        timeline: '2-4 months',
        roi: '150-300%',
        features: ['Workflow automation', 'Intelligent document processing', 'Predictive maintenance'],
        icon: Zap,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'predictive-analytics',
        name: 'Predictive Analytics Platform',
        description: 'Advanced analytics to forecast trends and optimize decision making',
        cost: '$50,000 - $200,000',
        timeline: '3-6 months',
        roi: '200-400%',
        features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards'],
        icon: BarChart3,
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 'ai-security',
        name: 'AI-Powered Cybersecurity',
        description: 'Advanced threat detection and prevention using machine learning',
        cost: '$75,000 - $300,000',
        timeline: '4-8 months',
        roi: '250-500%',
        features: ['Threat detection', 'Behavioral analysis', 'Incident response'],
        icon: Shield,
        color: 'from-green-500 to-emerald-500'
      },
      {
        id: 'customer-ai',
        name: 'AI Customer Service',
        description: 'Intelligent chatbots and customer service automation',
        cost: '$30,000 - $150,000',
        timeline: '2-5 months',
        roi: '180-350%',
        features: ['24/7 support', 'Natural language processing', 'Sentiment analysis'],
        icon: Users,
        color: 'from-orange-500 to-red-500'
      }
    ];

    // Filter and rank solutions based on form data
    let filteredSolutions = solutions;
    
    if (data.budget === 'under-50k') {
      filteredSolutions = solutions.filter(s => s.id === 'ai-automation' || s.id === 'customer-ai');
    } else if (data.budget === '50k-100k') {
      filteredSolutions = solutions.filter(s => s.id !== 'ai-security');
    }

    if (data.currentChallenges.includes('automation')) {
      filteredSolutions = filteredSolutions.filter(s => s.id === 'ai-automation');
    }
    if (data.currentChallenges.includes('analytics')) {
      filteredSolutions = filteredSolutions.filter(s => s.id === 'predictive-analytics');
    }
    if (data.currentChallenges.includes('security')) {
      filteredSolutions = filteredSolutions.filter(s => s.id === 'ai-security');
    }
    if (data.currentChallenges.includes('customer-service')) {
      filteredSolutions = filteredSolutions.filter(s => s.id === 'customer-ai');
    }

    return {
      solutions: filteredSolutions.slice(0, 3),
      totalInvestment: calculateTotalInvestment(filteredSolutions),
      expectedROI: calculateExpectedROI(filteredSolutions),
      implementationPlan: generateImplementationPlan(filteredSolutions)
    };
  };

  const calculateTotalInvestment = (solutions) => {
    const ranges = solutions.map(s => {
      const [min, max] = s.cost.replace(/[$,]/g, '').split(' - ').map(Number);
      return { min, max };
    });
    
    const totalMin = ranges.reduce((sum, range) => sum + range.min, 0);
    const totalMax = ranges.reduce((sum, range) => sum + range.max, 0);
    
    return `$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`;
  };

  const calculateExpectedROI = (solutions) => {
    const roiRanges = solutions.map(s => {
      const [min, max] = s.roi.replace('%', '').split('-').map(Number);
      return { min, max };
    });
    
    const avgMin = roiRanges.reduce((sum, range) => sum + range.min, 0) / roiRanges.length;
    const avgMax = roiRanges.reduce((sum, range) => sum + range.max, 0) / roiRanges.length;
    
    return `${Math.round(avgMin)}% - ${Math.round(avgMax)}%`;
  };

  const generateImplementationPlan = (solutions) => {
    return [
      {
        phase: 'Phase 1: Assessment & Planning',
        duration: '2-4 weeks',
        description: 'Comprehensive analysis of current systems and requirements'
      },
      {
        phase: 'Phase 2: Development & Integration',
        duration: '2-6 months',
        description: 'Custom development and integration of AI solutions'
      },
      {
        phase: 'Phase 3: Testing & Optimization',
        duration: '2-4 weeks',
        description: 'Rigorous testing and performance optimization'
      },
      {
        phase: 'Phase 4: Deployment & Training',
        duration: '2-6 weeks',
        description: 'Full deployment and team training'
      }
    ];
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleArrayItem = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What industry are you in?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => updateFormData('industry', industry.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      formData.industry === industry.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <industry.icon size={24} className="mx-auto mb-2" />
                    <span className="text-sm font-medium">{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Company Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companySizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => updateFormData('companySize', size.value)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.companySize === size.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{size.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">What challenges are you facing?</h3>
            <p className="text-gray-600 mb-6">Select all that apply</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => toggleArrayItem('currentChallenges', challenge.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.currentChallenges.includes(challenge.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-semibold mb-2">{challenge.name}</h4>
                  <p className="text-sm text-gray-600">{challenge.description}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What's your budget range?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => updateFormData('budget', budget.value)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.budget === budget.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{budget.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementation Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => updateFormData('timeline', timeline.value)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.timeline === timeline.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{timeline.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">What are your primary business goals?</h3>
            <p className="text-gray-600 mb-6">Select all that apply</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => toggleArrayItem('goals', goal.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.goals.includes(goal.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-semibold mb-2">{goal.name}</h4>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            {isCalculating ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Analyzing Your Requirements</h3>
                <p className="text-gray-600">Finding the perfect AI solutions for your business...</p>
              </div>
            ) : results && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Your AI Solutions Report</h3>
                  <p className="text-gray-600">Based on your requirements, here are our recommendations</p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign size={24} />
                      <span className="text-2xl font-bold">Investment</span>
                    </div>
                    <div className="text-3xl font-bold">{results.totalInvestment}</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp size={24} />
                      <span className="text-2xl font-bold">Expected ROI</span>
                    </div>
                    <div className="text-3xl font-bold">{results.expectedROI}</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Clock size={24} />
                      <span className="text-2xl font-bold">Timeline</span>
                    </div>
                    <div className="text-3xl font-bold">4-8 months</div>
                  </div>
                </div>

                {/* Recommended Solutions */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold">Recommended Solutions</h4>
                  {results.solutions.map((solution, index) => (
                    <motion.div
                      key={solution.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center text-white`}>
                          <solution.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-semibold mb-2">{solution.name}</h5>
                          <p className="text-gray-600 mb-4">{solution.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <span className="text-sm text-gray-500">Investment</span>
                              <div className="font-semibold">{solution.cost}</div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Timeline</span>
                              <div className="font-semibold">{solution.timeline}</div>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Expected ROI</span>
                              <div className="font-semibold text-green-600">{solution.roi}</div>
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 mb-2 block">Key Features</span>
                            <div className="flex flex-wrap gap-2">
                              {solution.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Implementation Plan */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4">Implementation Plan</h4>
                  <div className="space-y-4">
                    {results.implementationPlan.map((phase, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{phase.phase}</h5>
                          <p className="text-sm text-gray-600">{phase.description}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Let our AI experts help you implement these solutions and transform your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact" 
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                    >
                      Schedule Consultation
                    </a>
                    <button 
                      onClick={() => {
                        setCurrentStep(0);
                        setFormData({
                          industry: '',
                          companySize: '',
                          currentChallenges: [],
                          budget: '',
                          timeline: '',
                          goals: []
                        });
                        setResults(null);
                      }}
                      className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">Zion Tech Group</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">AI Solutions Calculator</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Calculator size={24} />
              <span className="font-semibold">Interactive Calculator</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    index <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    index <= currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${
                      index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {renderStepContent()}
          </motion.div>

          {/* Navigation */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              
              {currentStep === 3 ? (
                <button
                  onClick={handleCalculate}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Calculate My Solutions
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISolutionsCalculator;