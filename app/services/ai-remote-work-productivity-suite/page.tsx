import React from 'react';
import { 
  Laptop, 
  Users, 
  Clock, 
  Target, 
  Brain, 
  CheckCircle, 
  Star,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Bell,
  Award,
  TrendingUp,
  DollarSign,
  Shield,
  Zap
} from 'lucide-react';


export default function AIRemoteWorkProductivitySuite() {
  const features = [
    {
      icon: Laptop,
      title: 'Intelligent Task Management',
      description: 'AI-powered task prioritization and automated workflow optimization for remote teams'
    },
    {
      icon: Users,
      title: 'Smart Team Collaboration',
      description: 'Enhanced collaboration tools with AI-driven meeting optimization and communication insights'
    },
    {
      icon: Clock,
      title: 'Time Tracking & Analytics',
      description: 'Advanced time tracking with productivity analytics and focus time optimization'
    },
    {
      icon: Target,
      title: 'Goal & KPI Tracking',
      description: 'Automated goal setting and progress tracking with intelligent performance insights'
    },
    {
      icon: Brain,
      title: 'Work Pattern Analysis',
      description: 'AI analysis of work patterns to identify productivity bottlenecks and optimization opportunities'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent meeting scheduling that respects time zones, availability, and focus time'
    }
  ];

  const benefits = [
    '35% increase in team productivity',
    '50% reduction in meeting time waste',
    '40% improvement in project delivery',
    '60% better work-life balance'
  ];

  const productivityTools = [
    {
      title: 'Project Management',
      description: 'AI-powered project planning and resource allocation',
      icon: Target,
      features: ['Smart project planning', 'Resource optimization', 'Risk assessment', 'Milestone tracking']
    },
    {
      title: 'Communication Hub',
      description: 'Unified communication platform with AI insights',
      icon: MessageSquare,
      features: ['Smart notifications', 'Message prioritization', 'Meeting summaries', 'Team insights']
    },
    {
      title: 'Document Collaboration',
      description: 'AI-enhanced document management and collaboration',
      icon: FileText,
      features: ['Smart document organization', 'Version control', 'Collaborative editing', 'Content suggestions']
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive team and individual performance insights',
      icon: BarChart3,
      features: ['Productivity metrics', 'Team performance', 'Individual insights', 'ROI tracking']
    }
  ];

  const pricingTiers = [
    {
      name: 'Team Starter',
      price: '$19.99',
      period: '/user/month',
      description: 'Perfect for small remote teams',
      features: [
        'Up to 10 team members',
        'Basic task management',
        'Time tracking',
        'Video conferencing integration',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Team Professional',
      price: '$39.99',
      period: '/user/month',
      description: 'Advanced features for growing teams',
      features: [
        'Up to 50 team members',
        'Advanced AI analytics',
        'Custom workflows',
        'Advanced integrations',
        'Priority support',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79.99',
      period: '/user/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'Advanced security & compliance',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const integrations = [
    'Slack', 'Microsoft Teams', 'Zoom', 'Google Workspace', 'Microsoft 365',
    'Asana', 'Trello', 'Jira', 'Notion', 'Dropbox', 'OneDrive', 'GitHub',
    'Salesforce', 'HubSpot', 'Monday.com', 'Basecamp', 'ClickUp'
  ];

  const successStories = [
    {
      company: 'TechStart Inc.',
      team: '15-person development team',
      result: '40% faster project delivery with AI-powered task optimization',
      improvement: '2x productivity increase'
    },
    {
      company: 'Global Marketing Agency',
      team: '25-person distributed team',
      result: '50% reduction in meeting time waste with smart scheduling',
      improvement: '60% better work-life balance'
    },
    {
      company: 'Consulting Firm',
      team: '50-person consulting team',
      result: '35% improvement in client satisfaction with better collaboration',
      improvement: '25% revenue increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Remote Work Productivity Suite
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              Transform your remote team's productivity with AI-powered collaboration tools, 
              intelligent scheduling, and automated workflow optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Free Team Assessment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Productivity Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your remote team needs to maximize productivity and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Productivity Tools */}
      <div className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Productivity Tools
            </h2>
            <p className="text-xl text-gray-600">
              All-in-one platform for remote team management and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productivityTools.map((tool, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <tool.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Remote Work Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of remote teams who have transformed their productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from remote teams using our productivity suite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                  <p className="text-gray-600">{story.team}</p>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.result}"</p>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <span className="text-green-700 font-semibold">{story.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Works with all your favorite tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-sm font-semibold text-gray-700">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Team Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your team size and productivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-indigo-500 scale-105' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+13024640950" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security & Compliance */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600">
              Your team's data is protected with the highest security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-600">Certified security controls and regular audits</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Full compliance with European data protection regulations</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
              <p className="text-gray-600">Reliable service with guaranteed availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Remote Team Today
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of remote teams who have boosted productivity with AI-powered tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-indigo-100 mb-4">Visit our website for more information:</p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-white underline hover:text-indigo-200 transition-colors"
            >
              https://ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-indigo-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}