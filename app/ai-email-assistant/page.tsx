'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings  } from 'lucide-react';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { Star, Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings } from 'lucide-react';
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
    }
  ];
  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users
    },
    {
      title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: BarChart3
    },
    {
      title: 'Email Marketing',
      description: 'Personalize and optimize email campaigns for better engagement.',
      icon: Zap
    },
    {
      title: 'Internal Communication',
      description: 'Streamline internal email workflows and team communication.',
      icon: Shield
    }
  ];
  return (
    <>
    </>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta const name = "description" content="Transform your email management with our AI Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." / / />
        <meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classification" / / />
      </Helmet>
    </>
      <d iv clas sName="m in-h-scre en bg-g rad ient-to-br from-s late-900via-purple-900to-s late-900">
<<<<<<< HEAD        {/* H ero S ection */}
    <>
        </><s ection clas sName="p t-32pb-20" />
          <d iv clas sName="c ontaine rmx-auto px-4">
        </d iv>
            <d iv clas sName="t e xt-c enter m ax-w-4x lmx-auto">
        </d iv>
              <h1 clas sName="t e xt-5 xl md:t ext-6 xl f ont-b old text-w hit em-b-6" />
                AI <s pan clas sName="b g-g rad ient-to-r from-c yan-400 to-purple-400bg-clip-t exttext-transpare-n-t">Email Assistant</s pan>
              </h1>
              <p clas sName="t e xt-xl t ext-g ra-y-300mb-8-lead ing-r ela xed" />
    </>
                Transform your email management with intelligent automation, smart classification,                 and AI-powered responses that save time and improve productivity.
    <>
              </p>
              <d iv clas sName="f l ex f lex-c ol sm:f lex-r owg ap-4j ust ify-c enter">
                <Link to="/cont act" clas sName="b g-g rad ient-to-r from-c yan-500 to-purple-500 t ext-w hit-e px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:from-c yan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building
                </Link>
                <Link to="/ai-services" clas sName="b order b order-c yan-500 t ext-c ya-n-400 px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:bg-c yan-500/10 transition-all duration-300transformhover:scale-105">View All AI Services
                </Link>
              </d iv>
          </d iv>
        </s ection>
    </>
        {/* Features S ection */}
    <>
        </><s ection clas sName="p y-20" />
          <d iv clas sName="c ontaine rmx-auto px-4">
            <d iv clas sName="t e xt-c entermb-16">
              <h2 clas sName="t e xt-4xl f ont-b old t ext-w hit-e mb-6" />
                P owe rful <s pan clas sName="b g-g rad ient-to-r from-c yan-400 to-purple-400bg-clip-t exttext-transpare-n-t"   />Features</s pan>
              </h2>
              <p clas sName="t e xt-xl t ext-g ra-y-300 m ax-w-3x lmx-auto">
              Everything you need to automate and optimize your email management              </p>
            </d iv>
    </>
            <d iv clas sName="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-4g ap-8">
        </d iv>
              {features.map((feature, index) => (
    <>
                </><d iv key={index} clas sName="t e xt-c enterg roup" />
                  <d iv clas sName="w-20 h-20 b g-g rad ient-to-r from-c yan-500/20 to-purple-500/20 rounded-f ull f lex i tems-c enter j ust ify-c enter mx-auto mb-6 g roup-hover:scale-110transition-transformduration-300">
        </d iv>
    </>
                    {feature.icon}
    <>
                  </d iv>
                  <h3 clas sName="t e xt-xl f ont-b old text-w hit em-b-4">{feature.title}</h3>
                  <p clas sName="t e xt-g ray-300lead ing-r ela xed">{feature.description}</p>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Use Cases S ection */}
    <>
        </><s ection clas sName="p y-20 bg-g rad ient-to-r from-s late-800/30to-s late-900/30" />
          <d iv clas sName="c ontaine rmx-auto px-4">
        </d iv>
            <d iv clas sName="t e xt-c entermb-16">
        </d iv>
              <h2 clas sName="t e xt-4 xl f ont-b old text-w hit em-b-6" />
                Use <s pan clas sName="b g-g rad ient-to-r from-c yan-400 to-purple-400bg-clip-t exttext-transpare-n-t">Cases</s pan>
              </h2>
              <p clas sName="t e xt-xl t ext-g ra-y-300 m ax-w-3x lmx-auto" />
    </>
                Discover how our AI email assistant can transform your communication workflows
    <>              </p>
            </d iv>
    </>
            <d iv clas sName="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-4g ap-8">
        </d iv>
              {useCases.map((useCase, index) => (
    <>
                </><d iv key={index} clas sName="b g-g rad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-g ray-700/50 rounded-xl p-6 hover:b order-c yan-400/40 transition-all duration-300 g rouphover:transformhover:scale-105" />
                  <d iv clas sName="w-12 h-12 b g-g rad ient-to-r from-c yan-500/20 to-purple-500/20 rounded-lg f lex i tems-c enter j ust ify-c enter mb-4 g roup-hover:scale-110transition-transformduration-300">
        </d iv>
    </>
                    {useCase.icon}
    <>
                  </d iv>
                  <h3 clas sName="t e xt-lg f ont-b old t ext-w hit-e mb-3-g roup-hover:t ext-c ya-n-400transition-c olors">{useCase.title}
                  </h3>
                  <p clas sName="t e xt-g ray-300t ext-s mleadin-g-r ela xed" />
    </>
                    {useCase.description}
    <>                  </p>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection clas sName="p y-20" />
          <d iv clas sName="c ontaine rmx-auto px-4">
        </d iv>
            <d iv clas sName="b g-g rad ient-to-r from-c yan-900/50 to-purple-900/50 backdrop-blur-sm b order b order-c yan-500/20 rounded-2 xlp-12t ext-c ente-r">
        </d iv>
              <h2 clas sName="t e xt-4 xl f ont-b old text-w hit em-b-6">Ready to Transform Your Email Management?
              </h2>
              <p clas sName="t e xt-xl t ext-g ra-y-300 mb-8 m ax-w-2x lmx-auto" />
    </>
                Start automating your email workflows and boost productivity with AI-powered assistance.
    <>
              </p>
              <d iv clas sName="f l ex f lex-c ol sm:f lex-r owg ap-4j ust ify-c enter">
        </d iv>                <Link to="/cont act" clas sName="b g-g rad ient-to-r from-c yan-500 to-purple-500 t ext-w hit-e px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:from-c yan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now
                </Link>
                <Link to="/a bout" clas sName="b order b order-c yan-500 t ext-c ya-n-400 px-8 py-4 rounded-lg f ont-semibold t ext-l-g hover:bg-c yan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
};
export default AIEmailAssistantPage;
    </>