
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
  const features = [
    {
      icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
    {
      icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using AI to handle common inquiries.'
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze email tone and sentiment to provide better customer service.'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Create automated workflows to streamline your email management.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users;
    },
    {
      title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: BarChart3;
    },
    {
      title: 'Email Marketing',
      description: 'Personalize and optimize email campaigns for better engagement.',
      icon: Zap;
    },
    {
      title: 'Internal Communication',
      description: 'Streamline internal email workflows and team communication.',
      icon: Shield;
    }
  ];
  return (
    <><div></>
      <Helmet><div></Helmet></div></div></div>
        <title>AI Email Assistant - Zion Tech Group<div></title>
        <meta const name = "description" content="Transform your email management with our AI Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." /><div></meta></div></div></div>
        <div><div><meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classification"></meta></div></div>
      </Helmet></div>
      <div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        {/* Hero Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h1 className="w-5h-5ml-2"></h1>
                AI <span className="w-5h-5ml-2" />Email Assistant<div><div></span>
              </h1></div></div>
              <p className="w-5h-5ml-2"></div>Transform your email management with intelligent automation, smart classification,
                and AI-powered responses that save time and improve productivity.
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building;
                </Link>
                <Link to="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All AI Services;
                <div><div></Link>
              </div></div></div>
          </div><div></div>
        </section></div></div>
        {/* Features Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2"></h2>
                Powerful <span className="w-5h-5ml-2" />Features<div><div></span>
              </h2></div></div>
              <p className="w-5h-5ml-2"></div>Everything you need to automate and optimize your email management;
              <div><div></p>
            </div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {features.map((feature, index) => (
                <div><div><div key={index} className="text-centergroup"></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* Use Cases Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2"></h2>
                Use <span className="w-5h-5ml-2" />Cases<div><div></span>
              </h2></div></div>
              <p className="w-5h-5ml-2"></div>Discover how our AI email assistant can transform your communication workflows;
              <div><div></p>
            </div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {useCases.map((useCase, index) => (
                <div><div><div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 grouphover: transformhove,
  r:scale-105"></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    {useCase.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{useCase.title}
                  </h3>
                  <p className="w-5h-5ml-2">{useCase.description}
                  </p>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Email Management?
              </h2>
              <p className="w-5h-5ml-2">Start automating your email workflows and boost productivity with AI-powered assistance.
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now;
                </Link>
                <Link to="/about" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us;
                <div><div></Link>
              </div></div></div>
          </div></div>
        <div><div></section></div></div>
      </div>
    <div></></div></div></div>
  );
};
export default AIEmailAssistantPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function AiEmailAssistant() {
  return (
        <>
      <title>AiEmailAssistant - Zion Tech Group</title>
            <h1 className="text-4xl font-bold text-white mb-6">AiEmailAssistant</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiemailassistant services coming soon.</p>
              Contact Us
      </>
  );
}