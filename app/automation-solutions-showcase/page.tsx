'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, Clock, DollarSign, Users, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function AutomationSolutionsShowcase() {
  const [roiInputs, setRoiInputs] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    manualProcessTime: 40,
    automationPotential: 80,
    implementationCost: 150000
  });

  const [calculatedROI, setCalculatedROI] = useState({
    annualSavings: 0,
    monthlySavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
    fiveYearValue: 0
  });

  useEffect(() => {
    calculateROI();
  }, [roiInputs]);

  const calculateROI = () => {
    const { currentEmployees, averageSalary, manualProcessTime, automationPotential, implementationCost } = roiInputs;
    
    const hourlyRate = averageSalary / 2080; // 2080 hours per year
    const timeSavings = (manualProcessTime * automationPotential) / 100;
    const annualSavings = currentEmployees * hourlyRate * timeSavings * 52; // 52 weeks
    const monthlySavings = annualSavings / 12;
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / annualSavings;
    const fiveYearValue = (annualSavings * 5) - implementationCost;

    setCalculatedROI({
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      roiPercentage: Math.round(roiPercentage * 100) / 100,
      paybackPeriod: Math.round(paybackPeriod * 100) / 100,
      fiveYearValue: Math.round(fiveYearValue)
    });
  };

  const automationSolutions = [
    {
      id: 'workflow-automation',
      name: 'Intelligent Workflow Automation',
      description: 'Automate complex business processes with AI-powered decision making',
      features: [
        'Process orchestration',
        'Intelligent routing',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        '90% process efficiency',
        '75% error reduction',
        '60% faster execution',
        '24/7 operation'
      ],
      icon: Zap,
      color: 'blue'
    },
    {
      id: 'document-processing',
      name: 'AI Document Processing',
      description: 'Automatically extract, analyze, and process documents with machine learning',
      features: [
        'OCR and text extraction',
        'Data validation',
        'Document classification',
        'Automated routing'
      ],
      benefits: [
        '95% accuracy rate',
        '80% time savings',
        'Zero manual errors',
        'Scalable processing'
      ],
      icon: Target,
      color: 'green'
    },
    {
      id: 'customer-service',
      name: 'Autonomous Customer Service',
      description: 'AI-powered customer service with human-like interactions and seamless escalation',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Intelligent escalation'
      ],
      benefits: [
        '85% query resolution',
        '70% cost reduction',
        '24/7 availability',
        'Enhanced satisfaction'
      ],
      icon: Users,
      color: 'purple'
    },
    {
      id: 'data-analytics',
      name: 'Predictive Data Analytics',
      description: 'Automated data analysis and forecasting for informed decision making',
      features: [
        'Real-time analytics',
        'Predictive modeling',
        'Automated reporting',
        'Anomaly detection'
      ],
      benefits: [
        '90% faster insights',
        '95% prediction accuracy',
        'Automated alerts',
        'Strategic advantage'
      ],
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Advanced Automation Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your business with intelligent automation that delivers measurable results and unprecedented efficiency gains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#solutions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                Explore Solutions <ArrowRight className="ml-2" />
              </Link>
              <Link href="#roi-calculator" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center">
                <Calculator className="mr-2" />
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Process Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6mo</div>
              <div className="text-gray-600">Payback Period</div>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Solutions */}
      <div id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation platforms designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationSolutions.map((solution) => {
              const IconComponent = solution.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600'
              };
              
              return (
                <div key={solution.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className={`bg-gradient-to-r ${colorClasses[solution.color as keyof typeof colorClasses]} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{solution.name}</h3>
                    </div>
                    <p className="text-blue-100">{solution.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link 
                        href={`/automation/${solution.id}`}
                        className="block w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div id="roi-calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate the potential return on investment for your automation project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Number of Employees
                  </label>
                  <input
                    type="number"
                    value={roiInputs.currentEmployees}
                    onChange={(e) => setRoiInputs(prev => ({ ...prev, currentEmployees: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average Annual Salary ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.averageSalary}
                    onChange={(e) => setRoiInputs(prev => ({ ...prev, averageSalary: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hours Spent on Manual Processes (per week)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.manualProcessTime}
                    onChange={(e) => setRoiInputs(prev => ({ ...prev, manualProcessTime: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Automation Potential (%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={roiInputs.automationPotential}
                    onChange={(e) => setRoiInputs(prev => ({ ...prev, automationPotential: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                  <div className="text-center text-sm text-gray-600 mt-1">{roiInputs.automationPotential}%</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Implementation Cost ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.implementationCost}
                    onChange={(e) => setRoiInputs(prev => ({ ...prev, implementationCost: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="font-semibold text-gray-900">Annual Savings</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ${calculatedROI.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Monthly: ${calculatedROI.monthlySavings.toLocaleString()}</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="font-semibold text-gray-900">ROI Percentage</h4>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {calculatedROI.roiPercentage}%
                  </div>
                  <div className="text-sm text-gray-600">First year return</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-purple-600 mr-3" />
                    <h4 className="font-semibold text-gray-900">Payback Period</h4>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {calculatedROI.paybackPeriod} years
                  </div>
                  <div className="text-sm text-gray-600">Time to break even</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <Target className="w-6 h-6 text-orange-600 mr-3" />
                    <h4 className="font-semibold text-gray-900">5-Year Value</h4>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    ${calculatedROI.fiveYearValue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total net benefit</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Start Your Automation Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses that have implemented our automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Quality Control Automation</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-sm text-gray-600 mb-4">Defect detection accuracy</div>
              <p className="text-gray-700 text-sm">"Automated quality control reduced defects by 95% and saved $5.2M annually."</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Healthcare</h3>
                  <p className="text-sm text-gray-600">Patient Processing</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-sm text-gray-600 mb-4">Faster processing time</div>
              <p className="text-gray-700 text-sm">"AI automation improved patient care efficiency and reduced wait times significantly."</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Finance</h3>
                  <p className="text-sm text-gray-600">Loan Processing</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-sm text-gray-600 mb-4">Faster approvals</div>
              <p className="text-gray-700 text-sm">"Automated loan processing reduced approval time from days to minutes."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Transform your business with intelligent automation. Get a free consultation and discover your automation potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Free Consultation
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}