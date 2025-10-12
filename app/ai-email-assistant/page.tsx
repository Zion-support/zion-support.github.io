<<<<<<< HEAD


=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
  const features = [
      icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
      icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using AI to handle common inquiries.'
    },
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze email tone and sentiment to provide better customer service.'
    },
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Create automated workflows to streamline your email management.'
  ];
  const useCases = [
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users
    },
      title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: BarChart3
    },
      title: 'Email Marketing',
      description: 'Personalize and optimize email campaigns for better engagement.',
      icon: Zap
    },
      title: 'Internal Communication',
      description: 'Streamline internal email workflows and team communication.',
      icon: Shield
  ];
  return (
    
        <title />AI Email Assistant - Zion Tech Group</title>

        {/* Hero Section */}
                AI <span className="w-5 h-5ml-2" />Email Assistant</span>
              <p className="w-5 h-5ml-2">Transform your email management with intelligent automation, smart classification, 
                and AI-powered responses that save time and improve productivity.
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building
                <Link to="/ai-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All AI Services

        {/* Features Section */}
                Powerful <span className="w-5 h-5ml-2" />Features</span>
              <p className="w-5 h-5ml-2">Everything you need to automate and optimize your email management

 (
                    {feature.icon}
                  <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
              ))}

        {/* Use Cases Section */}
                Use <span className="w-5 h-5ml-2" />Cases</span>
              <p className="w-5 h-5ml-2">Discover how our AI email assistant can transform your communication workflows

 (
                    {useCase.icon}
                  <h3 className="w-5 h-5ml-2" />{useCase.title}
                  <p className="w-5 h-5ml-2">{useCase.description}
              ))}

        {/* CTA Section */}
              <h2 className="w-5 h-5ml-2" />Ready to Transform Your Email Management?
              <p className="w-5 h-5ml-2">Start automating your email workflows and boost productivity with AI-powered assistance.
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us

  );
};

export default AIEmailAssistantPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiEmailAssistant() {
  return (
    
        <title>AiEmailAssistant - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiEmailAssistant</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiemailassistant services coming soon.</p>
            
              Contact Us

  );

=======
export default function AIEmailAssistantPage() {
  return (
    <>
      <Helmet>
        <title>A I Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional a i email assistant by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Email Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional a i email assistant coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
