'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings} from 'lucide-react';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Star, Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings} from 'lucide-react';
'use client';

const AIEmail Assistant Page: React.FC = () => {
  constfeatures = [
    {
      icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
    {
      icon: Message Square,
      title: 'Auto- Responses',
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
  return (
    <>
      <Helmet />
        <title   />AIEmail Assistant - ZionTech Group</title>
        <metaconstname = "description" content="Transformyour emailmanagement withour AIEmail Assistant. Smartclassification, auto-responses, sentimentanalysis, andautomated workflows." / / />
        <meta name ="keywords" content="AIemail assistant, emailautomation, smartemail management, auto-responses, emailclassification" / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-32pb-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermax-w-4xlmx-auto" />
              <h1className ="text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                AI <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />EmailAssistant</span>
              </h1>
              <pclassName ="text-xltext-gray-300mb-8leading-relaxed" />
                Transformyour emailmanagement withintelligent automation, smartclassification, 
                andAI-poweredresponses thatsave timeand improveproductivity.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300transformhover:scale-105">StartBuilding
                </Link>
                <Link to ="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ViewAll AIServices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xlfont-boldtext-whitemb-6" />
                Powerful <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Features</span>
              </h2>
              <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
                Everythingyou needto automateand optimizeyour emailmanagement
              </p>
            </div>

            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <divkey ={index} className="text-centergroup" />
                  <div className ="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-fullflex items-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300" />
                    {feature.icon}
                  </div>
                  <h3className ="text-xlfont-boldtext-whitemb-4"   />{feature.title}</h3>
                  <pclassName ="text-gray-300leading-relaxed" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <sectionclassName ="py-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6" />
                Use <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Cases</span>
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Discover how our AI email assistant can transform your communication workflows
              </p>
            </div>

            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {use Cases.map((useCase, index) => (
                <divkey ={index} className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborder border-gray-700/50 rounded-xlp-6 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105" />
                  <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lgflex items-centerjustify-centermb-4 group-hover:scale-110transition-transformduration-300" />
                    {useCase.icon}
                  </div>
                  <h3className ="text-lgfont-boldtext-whitemb-3group-hover:text-cyan-400transition-colors"  />{useCase.title}
                  </h3>
                  <pclassName ="text-gray-300text-smleading-relaxed" />
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  />Ready to Transform Your Email Management?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Start automating your email workflows and boost productivity with AI-powered assistance.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now
                </Link>
                <Link to ="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmail Assistant Page;