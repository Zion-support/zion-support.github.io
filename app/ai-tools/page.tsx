import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIToolsPage: React.FC = () => {
  const aiTools = [
    {
      id: 'ai-code-assistant',
      title: 'Zion AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with intelligent code completion, debugging, and optimization suggestions',
      features: [
        'Intelligent Code Completion',
        'Bug Detection & Fixing',
        'Code Optimization',
        'Documentation Generation',
        'Multi-language Support',
        'Real-time Suggestions',
        'Code Review',
        'Refactoring Assistance',
        'Testing Generation',
        'Learning Mode'
      ],
      pricing: '$29 - $199/month',
      category: 'Development',
      icon: '💻',
      benefits: [
        'Faster development cycles',
        'Reduced bugs and errors',
        'Improved code quality',
        'Continuous learning opportunities',
        'Significant time savings',
        'Enhanced developer productivity'
      ],
      useCases: [
        'Software development',
        'Code review and optimization',
        'Learning new programming languages',
        'Debugging complex issues',
        'Code refactoring',
        'Technical documentation'
      ]
    },
    {
      id: 'ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation service with context understanding, cultural adaptation, and real-time processing',
      features: [
        '100+ Languages',
        'Context Understanding',
        'Cultural Adaptation',
        'Real-time Translation',
        'Document Translation',
        'Voice Translation',
        'Batch Processing',
        'API Integration',
        'Custom Dictionaries',
        'Quality Assurance'
      ],
      pricing: '$19 - $149/month',
      category: 'Communication',
      icon: '🌍',
      benefits: [
        'Seamless global communication',
        'Cultural accuracy and context',
        'Significant time efficiency',
        'Cost-effective translation',
        'Scalable translation solutions',
        'Consistent quality output'
      ],
      useCases: [
        'International business expansion',
        'Content localization',
        'Multilingual customer support',
        'Document translation',
        'Website localization',
        'Multilingual application development'
      ]
    },
    {
      id: 'ai-video-generator',
      title: 'Zion AI Video Generator Pro',
      description: 'AI-powered video creation platform with automated editing, voice synthesis, and content generation',
      features: [
        'Automated Video Creation',
        'Voice Synthesis',
        'Text-to-Video',
        'Scene Generation',
        'Music & Sound Effects',
        'Template Library',
        'Brand Customization',
        'Multi-format Export',
        'Batch Processing',
        'Analytics Dashboard'
      ],
      pricing: '$39 - $299/month',
      category: 'Content Creation',
      icon: '🎬',
      benefits: [
        'Dramatically faster video production',
        'Significant cost reduction',
        'Consistent professional quality',
        'Scalable content creation',
        'Professional results without expertise',
        'Massive time savings'
      ],
      useCases: [
        'Marketing video production',
        'Training and educational content',
        'Social media content',
        'Product demonstration videos',
        'Brand storytelling',
        'Automated content generation'
      ]
    },
    {
      id: 'ai-data-scientist',
      title: 'Zion AI Data Scientist Pro',
      description: 'Automated data science platform with machine learning model building, feature engineering, and insights generation',
      features: [
        'Automated ML Model Building',
        'Feature Engineering',
        'Data Preprocessing',
        'Model Selection',
        'Hyperparameter Tuning',
        'Model Validation',
        'Insights Generation',
        'Visualization Creation',
        'API Integration',
        'Custom Algorithms'
      ],
      pricing: '$199 - $1,999/month',
      category: 'Data Science',
      icon: '🔬',
      benefits: [
        'Faster model development',
        'Reduced expertise requirements',
        'Better model performance',
        'Automated optimization',
        'Scalable data science operations',
        'Cost-effective analytics'
      ],
      useCases: [
        'Predictive modeling',
        'Business intelligence',
        'Risk assessment',
        'Customer analytics',
        'Process optimization',
        'Research and development'
      ]
    },
    {
      id: 'ai-legal-assistant',
      title: 'Zion AI Legal Assistant Pro',
      description: 'AI-powered legal research, document analysis, and contract review with compliance checking',
      features: [
        'Legal Research',
        'Contract Analysis',
        'Compliance Checking',
        'Document Review',
        'Case Law Search',
        'Risk Assessment',
        'Template Generation',
        'Due Diligence',
        'Regulatory Updates',
        'Client Communication'
      ],
      pricing: '$299 - $2,499/month',
      category: 'Legal',
      icon: '⚖️',
      benefits: [
        'Dramatically faster research',
        'Reduced human errors',
        'Significant cost savings',
        'Better compliance monitoring',
        'Improved accuracy',
        'Enhanced time efficiency'
      ],
      useCases: [
        'Contract review and analysis',
        'Legal research and case law',
        'Compliance monitoring',
        'Due diligence processes',
        'Risk assessment',
        'Document analysis and review'
      ]
    },
    {
      id: 'ai-healthcare-assistant',
      title: 'Zion AI Healthcare Assistant Pro',
      description: 'AI-powered healthcare solutions with medical image analysis, patient monitoring, and diagnostic assistance',
      features: [
        'Medical Image Analysis',
        'Patient Monitoring',
        'Diagnostic Assistance',
        'Drug Interaction Checking',
        'Symptom Analysis',
        'Treatment Recommendations',
        'Electronic Health Records',
        'Telemedicine Support',
        'Compliance Monitoring',
        'Research Analytics'
      ],
      pricing: '$499 - $4,999/month',
      category: 'Healthcare',
      icon: '🏥',
      benefits: [
        'Improved diagnostic accuracy',
        'Better patient care outcomes',
        'Reduced medical errors',
        'Faster processing times',
        'Cost efficiency in healthcare',
        'Enhanced clinical decision support'
      ],
      useCases: [
        'Medical imaging analysis',
        'Patient diagnosis support',
        'Treatment planning assistance',
        'Drug interaction monitoring',
        'Health analytics and insights',
        'Research and clinical studies'
      ]
    },
    {
      id: 'ai-meeting-assistant',
      title: 'Zion AI Meeting Assistant Pro',
      description: 'AI-powered meeting transcription, note-taking, and action item extraction with real-time insights',
      features: [
        'Real-time Transcription',
        'Action Item Extraction',
        'Meeting Summaries',
        'Speaker Identification',
        'Sentiment Analysis',
        'Calendar Integration',
        'Follow-up Reminders',
        'Multi-language Support',
        'Cloud Storage',
        'Team Collaboration'
      ],
      pricing: '$39 - $299/month',
      category: 'Productivity',
      icon: '🎯',
      benefits: [
        'Improved meeting efficiency',
        'Better follow-through on actions',
        'Reduced manual note-taking',
        'Enhanced team collaboration',
        'Valuable meeting insights',
        'Significant time savings'
      ],
      useCases: [
        'Team meetings and standups',
        'Client calls and consultations',
        'Training sessions',
        'Board meetings',
        'Interview processes',
        'Webinar management'
      ]
    },
    {
      id: 'ai-customer-insights',
      title: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral analysis, segmentation, and predictive modeling',
      features: [
        'Behavioral Analysis',
        'Customer Segmentation',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Sentiment Analysis',
        'Purchase Prediction',
        'Personalization Engine',
        'Real-time Analytics',
        'Integration APIs',
        'Custom Dashboards'
      ],
      pricing: '$99 - $999/month',
      category: 'Analytics',
      icon: '👥',
      benefits: [
        'Deeper customer understanding',
        'Improved targeting accuracy',
        'Increased customer retention',
        'Higher conversion rates',
        'Data-driven marketing decisions',
        'Personalized customer experiences'
      ],
      useCases: [
        'Customer segmentation strategies',
        'Churn prevention programs',
        'Marketing campaign optimization',
        'Product recommendation systems',
        'Pricing strategy development',
        'Customer success management'
      ]
    }
  ];

  const categories = ['All', 'Development', 'Communication', 'Content Creation', 'Data Science', 'Legal', 'Healthcare', 'Productivity', 'Analytics'];

  return (
    <>
      <Helmet>
        <title>AI Tools - Zion Tech Group</title>
        <meta name="description" content="Comprehensive collection of AI-powered tools for development, communication, content creation, data science, legal, healthcare, and productivity." />
        <meta name="keywords" content="AI tools, artificial intelligence software, AI development tools, AI productivity tools, AI analytics, AI automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Powerful AI tools designed to enhance productivity, streamline workflows, and unlock new possibilities. 
              Each tool is purpose-built to solve specific challenges with intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {aiTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{tool.icon}</div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {tool.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {tool.pricing}
                    </div>
                    <Link 
                      to="/contact" 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Try Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our AI Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Productivity</h3>
                <p className="text-gray-600">Get up and running in minutes with our intuitive AI tools designed for immediate impact.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
                <p className="text-gray-600">Access powerful AI capabilities at a fraction of the cost of traditional solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Each tool is backed by extensive testing and delivers measurable business impact.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Workflow?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals already using our AI tools to boost productivity and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIToolsPage;