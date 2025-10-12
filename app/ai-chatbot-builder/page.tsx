'use client';
import React, {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock} from 'lucide-react';

const Ai Chatbot Builder Page: React.FC = () => {
  constfeatures = [
    {
      title: 'No- Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zapclass Name ="w-8h-8text-cyan-400" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI- Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brainclass Name ="w-8h-8text-purple-400" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi- Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globeclass Name ="w-8h-8text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <Bar Chartclass Name="w-8h-8text-indigo-400" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shieldclass Name ="w-8h-8text-red-400" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <Message Circleclass Name="w-8h-8text-teal-400" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <Usersclass Name ="w-6h-6text-blue-500" />,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingual support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: <Targetclass Name ="w-6h-6text-green-500" />,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: <Shopping Cartclass Name="w-6h-6text-purple-500" />,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with HR, IT support, and knowledge management bots',
      icon: <Clockclass Name ="w-6h-6text-orange-500" />,
      benefits: ['Improve efficiency by 50%', 'Reduce response time', 'Standardized processes']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',
        'CRM integrations',
        'Advanced analytics',
        'Priority support',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale solution for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Advanced integrations',
        'Real-time monitoring',
        'Dedicated support',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title>AIChatbot Builder - ZionTech Group</title>
        <meta name ="description" content="Buildintelligent chatbotswithout coding. Deployacross multiplechannels withadvanced AIcapabilities." />
        <meta name ="keywords" content="AIchatbot builder, no-codechatbot, conversational AI, customersupport automation" />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20px-4" />
        <div className ="max-w-7xlmx-autotext-center" />
          <h1className ="text-5xlmd:text-7xlfont-boldtext-whitemb-6" />
            AIChatbot
            <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent" />
              {' '}Builder
            </span>
          </h1>
          <pclassName ="text-xltext-gray-300 mb-8max-w-3xlmx-auto" />
            Createintelligent, conversationalchatbots withoutany coding. Deployacross multiplechannels 
            andscale yourcustomer engagementwith advancedAI capabilities.
          </p>
          <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              StartBuilding Now
              <Arrow Rightclass Name="ml-2w-5h-5" />
            </Link>
            <Link to ="/demo" className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              ViewDemo
            </Link>
          </div>
        </div>
      </section>

      {/* FeaturesSection */}
      <sectionclassName ="py-20px-4" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4xlfont-boldtext-whitemb-4" />
              PowerfulFeatures forEvery Need
            </h2>
            <pclassName ="text-xltext-gray-300max-w-3xlmx-auto" />
              Everythingyou needto build, deploy, andmanage intelligentchatbots thatdeliver exceptionaluser experiences.
            </p>
          </div>
          
          <div className ="gridmd:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ={index} className="bg-slate-800/50 backdrop-blur-smrounded-xlp-6 borderborder-slate-700 hover:border-cyan-400/50transition-allduration-300" />
                <div className ={`w-16 h-16 rounded-lgbg-gradient-to-r${feature.color} flexitems-centerjustify-centermb-4`} />
                  {feature.icon}
                </div>
                <h3className ="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <pclassName ="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <sectionclassName ="py-20px-4bg-slate-800/30" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4xl font-boldtext-whitemb-4" />
              Perfect for Every Business
            </h2>
            <pclassName ="text-xl text-gray-300max-w-3xlmx-auto" />
              From customer support to lead generation, our chatbot builder adapts to your specific business needs.
            </p>
          </div>
          
          <div className ="grid md:grid-cols-2lg:grid-cols-4gap-8" />
            {use Cases.map((useCase, index) => (
              <divkey ={index} className="bg-slate-800/50 backdrop-blur-smrounded-xlp-6borderborder-slate-700" />
                <div className ="flexitems-centermb-4" />
                  {useCase.icon}
                  <h3className ="text-xlfont-semiboldtext-whiteml-3">{useCase.title}</h3>
                </div>
                <pclassName ="text-gray-300mb-4">{useCase.description}</p>
                <ulclassName ="space-y-2" />
                  {useCase.benefits.map((benefit, idx) => (
                    <likey ={idx} className="flexitems-centertext-smtext-gray-400" />
                      <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <sectionclassName ="py-20px-4" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4xl font-boldtext-whitemb-4" />
              Simple, Transparent Pricing
            </h2>
            <pclassName ="text-xl text-gray-300max-w-3xlmx-auto" />
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className ="gridmd:grid-cols-3gap-8" />
            {pricing Plans.map((plan, index) => (
              <divkey ={index} className ={`bg-slate-800/50 backdrop-blur-smrounded-xlp-8 border${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <spanclassName ="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-4 py-2 rounded-fulltext-smfont-semibold" />
                      MostPopular
                    </span>
                  </div>
                )}
                <div className ="text-centermb-6" />
                  <h3className ="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-4xlfont-boldtext-white">{plan.price}</span>
                    <spanclassName ="text-gray-400ml-1">{plan.period}</span>
                  </div>
                  <pclassName ="text-gray-300mt-2">{plan.description}</p>
                </div>
                <ulclassName ="space-y-3mb-8" />
                  {plan.features.map((feature, idx) => (
                    <likey ={idx} className="flexitems-centertext-gray-300" />
                      <Check Circleclass Name="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to ="/contact"
                  className ={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} />
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20px-4" />
        <div className ="max-w-4xlmx-autotext-center" />
          <h2className ="text-4xl font-boldtext-whitemb-6" />
            Ready to Build Your First Chatbot?
          </h2>
          <pclassName ="text-xltext-gray-300mb-8" />
            Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Your Free Trial
              <Arrow Rightclass Name="ml-2w-5h-5" />
            </Link>
            <Link to ="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ai Chatbot Builder Page;
