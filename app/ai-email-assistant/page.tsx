'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Shield, Bar Chart3, Users, Message Square, Brain, Settings } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, Shield, Bar Chart3, Users, Message Square, Brain, Settings} from 'lucide-react';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Brain, Zap, Check Circle, Users, Award, Star, Globe, Settings } from 'lucide-react';

const A I Email Assistant Page: React.F C = () => {
  const features = [
    {
      icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
    {
      icon: Message Square,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using A I to handle common inquiries.'
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
  const use Cases = [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users
    },
    {
      title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: Bar Chart3
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
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Email Assistant - Zion Tech Group</t itle>
        <m etaconstname = "description" content="Transform your email management with our A I Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." / / />
        <m eta name="keywords" content="A I email assistant, email automation, smart email management, auto-responses, email classification" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-32p b-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-center max-w-4xlmx-auto">
        </d iv>
              <h1 c lass Name="t e xt-5 xl md:t e xt-6 xl font-boldtext-white mb-6" />
                A I <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Email Assistant</s pan>
              </h1>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8leading-relaxed" />

                Transform your email management with intelligent automation, smart classification, 
                and A I-powered responses that save time and improve productivity.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building
                </L ink>
                <L ink to="/ai-services" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All A I Services
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Powerful <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Features</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Everything you need to automate and optimize your email management

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey={index} class Name="t e x t-centergroup" />
                  <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>

                    {feature.icon}

                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-4">{feature.title}</h3>
                  <p c lass Name="t e xt-g r ay-300leading-relaxed">{feature.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Use Cases Section */}

        <s ection class Name="p y-20 b g-g r adient-to-rfrom-slate-800/30to-slate-900/30" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Use <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Cases</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Discover how our A I email assistant can transform your communication workflows

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {use Cases.map((use Case, index) => (

                <d ivkey={index} class Name="b g-g r a dient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110transition-transformduration-300">
        </d iv>

                    {use Case.icon}

                  </d iv>
                  <h3 c lass Name="t e x t-lg font-bold text-white mb-3group-hover:text-cyan-400transition-colors">{use Case.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300text-smleading-relaxed" />

                    {use Case.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Transform Your Email Management?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                Start automating your email workflows and boost productivity with A I-powered assistance.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now
                </L ink>
                <L ink to="/about" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </L ink>
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

  );
};

export default A I Email Assistant Page;
