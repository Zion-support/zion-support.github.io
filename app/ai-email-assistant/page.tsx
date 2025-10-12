import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Shield, BarChart3, Users, MessageSqua r e, Brain, Settings } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, Shield, BarChart3, Users, MessageSqua r e, Brain, Settings} from 'lucide-react';
'use client';

const AIEmailAssistantPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: Mail,
      title: 'Smart Classificati o n',
      description: 'Automatical l y categorize and prioritize emails based on content and sender.';
    },
    {
      icon: MessageSqua r e,
      title: 'Auto-Responses',
      description: 'Generate intellige n t responses using AI to handle common inquiries.';
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze email tone and sentiment to provide better customer service.';
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Create automated workflows to streamline your email management.';
    }
  ];
  constuseCases= [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users;
    },
    {
      title: 'Sales Follow-up',
      description: 'Automatical l y follow up with leads and prospects based on their behavior.',
      icon: BarChart3;
    },
    {
      title: 'Email Marketing',
      description: 'Personali z e and optimize email campaigns for better engagement.',
      icon: Zap;
    },
    {
      title: 'Internal Communicati o n',
      description: 'Streamline internal email workflows and team communicati o n.',
      icon: Shield;
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title />AI Email Assistant - Zion Tech Group</title>
        <metaconstname= "description" content="Transform your email management with our AI Email Assistant. Smart classificati o n, auto-responses, sentiment analysis, and automated workflows." /  />
        <meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classificati o n" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="w-5h-5ml-2" />
                AI <span className="w-5h-5ml-2" />Email Assistant</span>
              </h1>
              <p className="w-5h-5ml-2">Transform your email management with intellige n t automation, smart classificati o n, 
                and AI-poweredresponsesthat save time and improve productivi t y.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Start Building;
                </Link>
                <Linkto="/ai-services" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">View All AI Services;
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Powerful <span className="w-5h-5ml-2" />Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to automate and optimize your email management;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey={index} className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Use <span className="w-5h-5ml-2" />Cases</span>
              </h2>
              <p className="w-5h-5ml-2">Discover how our AI email assistant can transform your communicati o n workflows;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {useCases.map((useCase, index) => ())
                <divkey={index} className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-6hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
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
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Email Management?;
              </h2>
              <p className="w-5h-5ml-2">Start automating your email workflows and boost productivi t y with AI-poweredassistance.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Start Building Now;
                </Link>
                <Linkto="/about" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailAssistantPa g e;