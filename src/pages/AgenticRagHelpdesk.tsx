import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, Zap, Users, Shield, BarChart3, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function AgenticRagHelpdesk() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Knowledge Retrieval',
      description: 'AI-powered retrieval of relevant information from your knowledge base',
      benefits: ['Context-aware responses', 'Multi-source information synthesis', 'Real-time learning']
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'Understand and respond to customer queries in natural language',
      benefits: ['Human-like conversations', 'Multi-language support', 'Sentiment analysis']
    },
    {
      icon: Zap,
      title: 'Instant Response Generation',
      description: 'Generate accurate and helpful responses in real-time',
      benefits: ['24/7 availability', 'Consistent quality', 'Scalable support']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance features',
      benefits: ['Data encryption', 'Access controls', 'Audit trails']
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant, accurate responses to customer inquiries',
      icon: Users,
      benefits: ['Reduced response time', 'Improved customer satisfaction', 'Lower support costs']
    },
    {
      title: 'Internal Knowledge Management',
      description: 'Help employees find information quickly and efficiently',
      icon: Brain,
      benefits: ['Faster problem resolution', 'Knowledge retention', 'Training support']
    },
    {
      title: 'Sales Support',
      description: 'Assist sales teams with product information and customer queries',
      icon: BarChart3,
      benefits: ['Increased conversion rates', 'Better customer engagement', 'Sales enablement']
    },
    {
      title: 'Technical Documentation',
      description: 'Provide technical support and documentation assistance',
      icon: Globe,
      benefits: ['Reduced support tickets', 'Faster issue resolution', 'Improved user experience']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Support
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Agentic RAG Helpdesk
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your customer support with our intelligent, AI-powered helpdesk that combines 
            Retrieval-Augmented Generation (RAG) with autonomous agents for exceptional customer experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-200"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/ai-helpdesk"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our agentic RAG helpdesk combines the power of AI with intelligent knowledge retrieval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Use Cases
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Versatile AI helpdesk solutions for various business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Agentic RAG Works
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A sophisticated process that combines AI intelligence with knowledge retrieval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Query Understanding</h3>
              <p className="text-slate-400 text-sm">AI analyzes customer query and identifies intent</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Knowledge Retrieval</h3>
              <p className="text-slate-400 text-sm">RAG system searches relevant knowledge sources</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Response Generation</h3>
              <p className="text-slate-400 text-sm">AI generates contextual, accurate responses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning</h3>
              <p className="text-slate-400 text-sm">System learns from interactions to improve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Agentic RAG Helpdesk?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Proven benefits that transform customer support operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
              <p className="text-slate-400">Provide instant support around the clock without increasing staff costs.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Support</h3>
              <p className="text-slate-400">Handle unlimited customer queries simultaneously without quality degradation.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Consistent Quality</h3>
              <p className="text-slate-400">Deliver uniform, high-quality responses across all customer interactions.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Cost Reduction</h3>
              <p className="text-slate-400">Significantly reduce support costs while improving customer satisfaction.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Faster Resolution</h3>
              <p className="text-slate-400">Resolve customer issues in seconds instead of hours or days.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Data Insights</h3>
              <p className="text-slate-400">Gain valuable insights into customer needs and support patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Customer Support?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join forward-thinking companies that use our agentic RAG helpdesk to deliver 
            exceptional customer experiences while reducing support costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-200"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}