

import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, Bot, Code, Search, GitBranch, Database, Shield, CheckCircle, Zap, Brain, BarChart, Users} from 'lucide-react';

const AICodeAssistantProPage: React.FC = () => {const features = [{
      icon: <Bot className="w-6 h-6"   />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy',
      color: 'from-blue-500 to-cyan-500'},
    {icon: <Code className="w-6 h-6"   />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions',
      color: 'from-green-500 to-emerald-500'},
    {icon: <Search className="w-6 h-6"   />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues',
      color: 'from-yellow-500 to-orange-500'},
    {icon: <GitBranch className="w-6 h-6"   />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems',
      color: 'from-purple-500 to-pink-500'},
    {icon: <Database className="w-6 h-6"   />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
      color: 'from-indigo-500 to-purple-500'},
    {icon: <Shield className="w-6 h-6"   />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality',
      color: 'from-red-500 to-pink-500'}];

  const useCases = [{title: 'Rapid Prototyping',
      description: 'Quickly build and test new features with AI-generated code',
      benefits: ['Reduce development time by 70%', 'Generate boilerplate code instantly', 'Focus on business logic']},
    {title: 'Code Review & Optimization',
      description: 'Automatically review code for best practices and performance',
      benefits: ['Catch bugs before deployment', 'Improve code quality', 'Learn from AI suggestions']},
    {title: 'Legacy Code Modernization',
      description: 'Update and modernize existing codebases with AI assistance',
      benefits: ['Refactor complex code', 'Update deprecated patterns', 'Maintain functionality']}
  ];

  const pricingPlans = [{name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI features',
        '5 programming languages',
        'Email support',
        'Basic analytics'],
      popular: false;},
    {name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: ['Up to 10,000 code generations/month',
        'Advanced AI features',
        'All programming languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations'],
      popular: true;},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Unlimited code generations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'],
      popular: false;}
  ];

export default function AICodeAssistantPro() {</Link>
              </div>
  ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Supercharge Your Development?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers already using our AI assistant to write better code faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2"   />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeAssistantProPage;

