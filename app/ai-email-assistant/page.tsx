import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function AiEmailAssistantPage() {
=======
import React from 'react';
export default AIEmailAssistantPage;
'use client';
'use client';
const AIEmailAssistantPage: React.FC = () => {
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
    };
  ];
const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',;
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
    <div>Content</div>
  );
    <></>
      <Helmet></Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta const name = "description" content="Transform your email management with our AI Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." /  /></meta>
        <meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classification" /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="w-5h-5ml-2" /></h1>
                AI <span className="w-5h-5ml-2" />Email Assistant</span>
              </h1>
              <p className="w-5h-5ml-2">Transform your email management with intelligent automation, smart classification, 
                and AI-powered responses that save time and improve productivity.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building;
                </Link>
                <Link to="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All AI Services;
                </Link>
              </div>
          </div>
        </section>
        {/* Features Section */}
        <section className = "w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Powerful <span className="w-5h-5ml-2" />Features</span>
              </h2>;
              <p className="w-5h-5ml-2">Everything you need to automate and optimize your email management;
              </p>
            </div>
            <div className = "min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="text-centergroup" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Use <span className="w-5h-5ml-2" />Cases</span>
              </h2>;
              <p className="w-5h-5ml-2">Discover how our AI email assistant can transform your communication workflows;
              </p>
            </div>
            <div className = "min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 grouphover: transformhove,  r:scale-105" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
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
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Email Management?
              </h2>
              <p className="w-5h-5ml-2">Start automating your email workflows and boost productivity with AI-powered assistance.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now;
                </Link>
                <Link to="/about" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default function AIEmailAssistantPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced Ai Email Assistant solutions powered by AI." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Email Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced Ai Email Assistant solutions powered by AI.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
        <meta name="description" content="Professional ai email assistant services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Email Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email assistant services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
          >
=======
      <Helmet >
        <title>A I Email Assistant - Zion Tech Group</title>
        <meta name = "description" content="Professional a i email assistant by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Email Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional a i email assistant coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>;
  );
}