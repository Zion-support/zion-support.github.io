import React from 'react';
import { CheckCircle, DollarSign, Zap, Users, Shield, BarChart } from 'lucide-react';

const ExpenseTrackerPage: React.FC = () => {
  const trackerFeatures = [
    {
      name: 'Personal Expense Tracking',
      price: '$19/month',
      description: 'AI-powered personal expense tracking and budgeting',
      features: [
        'Automatic categorization',
        'Receipt scanning',
        'Budget alerts',
        'Spending insights'
      ],
      icon: DollarSign,
      benefits: [
        '30% better budgeting',
        'Automated tracking',
        'Spending insights',
        'Financial goals'
      ]
    },
    {
      name: 'Business Expense Management',
      price: '$49/month',
      description: 'Comprehensive business expense tracking and management',
      features: [
        'Multi-user support',
        'Approval workflows',
        'Tax categorization',
        'Reporting and analytics'
      ],
      icon: Users,
      benefits: [
        'Reduced admin time',
        'Better compliance',
                'Cost visibility',
                'Automated workflows'
      ]
    },
    {
      name: 'Receipt Management',
      price: '$29/month',
      description: 'AI-powered receipt scanning and management',
      features: [
        'OCR receipt scanning',
        'Automatic data extraction',
        'Cloud storage',
        'Search and retrieval'
      ],
      icon: Shield,
      benefits: [
        'Paperless system',
        'Faster processing',
                        'Better organization',
                        'Reduced errors'
      ]
    },
    {
      name: 'Financial Analytics',
      price: '$39/month',
      description: 'Advanced financial analytics and reporting',
      features: [
        'Spending trends',
        'Budget analysis',
        'Financial forecasting',
        'Custom reports'
      ],
      icon: BarChart,
      benefits: [
        'Data-driven decisions',
        'Better financial planning',
                        'Trend identification',
                        'Goal tracking'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Personal Finance',
      description: 'Track personal expenses, create budgets, and achieve financial goals',
      benefits: ['Better spending control', 'Automated tracking', 'Financial insights', 'Goal achievement']
    },
    {
      title: 'Small Business',
      description: 'Manage business expenses, track reimbursements, and maintain records',
      benefits: ['Reduced admin work', 'Better compliance', 'Cost visibility', 'Automated workflows']
    },
    {
      title: 'Corporate Finance',
      description: 'Enterprise expense management with approval workflows and analytics',
      benefits: ['Streamlined processes', 'Better control', 'Compliance assurance', 'Advanced analytics']
    },
    {
      title: 'Freelancers',
      description: 'Track business expenses, manage receipts, and prepare for taxes',
      benefits: ['Tax preparation', 'Expense tracking', 'Receipt management', 'Financial planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Expense Tracker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Take control of your finances with our AI-powered expense tracker. 
            Automatically categorize expenses, track spending, and achieve your financial goals.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
              <div className="text-gray-300">Better Budgeting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Tracking</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Expense Tracker Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trackerFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{feature.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{feature.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Categorization</h3>
              <p className="text-gray-300">Automatically categorize expenses using AI and machine learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Insights</h3>
              <p className="text-gray-300">Advanced analytics and insights for better financial decisions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security & Privacy</h3>
              <p className="text-gray-300">Bank-level security and privacy protection for your financial data</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-purple-100 mb-6">
            Start tracking your expenses intelligently and achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerPage;