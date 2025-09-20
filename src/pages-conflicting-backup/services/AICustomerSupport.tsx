import, React, from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Clock, Users, TrendingUp, Shield, Zap, BarChart3, Globe, SmartphoneHeadphonesBot } from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function AICustomerSupport() {
  const features = [;
    {
      title: "24/7, AI, Chat Support",description: "Intelligent, chatbots, that handle, customer, inquiries around, the, clock with human-like responses"icon: Botcolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Multi-Language Support",description: "Automatically, detect, and respond, in, over 50, languages, to serve, global, customers"icon: Globecolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Smart, Ticket, Routing",description: "AI, automatically, categorizes and, routes, complex issues, to, the right, human, agents"icon: MessageCirclecolo,;
  r: "from-orange-50o0 to-red-50o0";
    };
    {
      title: "Sentiment Analysis",description: "Real-time, emotion, detection to, prioritize, urgent cases, and, improve customer satisfaction"icon: BarChart3colo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      title: "Knowledge, Base, Integration",description: "Seamlessly, connects, with your, existing, documentation to, provide, accurate answers instantly"icon: Shieldcolo,;
  r: "from-indigo-50o0 to-blue-50o0";
    },;
    {
      title: "Omnichannel Support",description: "Unified, support, across chat, email, social, mediaand, phone channels"icon: Smartphonecolo,;
  r: "from-teal-50o0 to-cyan-50o0";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Starter",price: "$39",period: "/month",description: "Perfect, for, small businesses",features: [;
        "Up, to, 1,0o00 conversations/month",;
        "Basic, AI, chatbot",;
        "Email support",;
        "Knowledge, base, integration""Mobile, app, access";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: false;
    };
    {
      name: "Professional",price: "$99",period: "/month",description: "Ideal, for, growing businesses",features: [;
        "Up, to, 10,0o00 conversations/month",;
        "Advanced, AI, with sentiment analysis",;
        "Multi-language support",;
        "Priority support",;
        "API access""Advanced analytics";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: true;
    };
    {
      name: "Enterprise",price: "$299",period: "/month",description: "For, large, organizations",features: [;
        "Unlimited conversations",;
        "Custom, AI, models",;
        "White-label solution",;
        "Dedicated support",;
        "Advanced security""Custom integrations";
    ,  ]cta: "Contact Sales"popula,;
  r: false;
    }
  ];
  const benefits = [;
    {
      title: "90% Faster, Response, Time",description: "AI, responds, instantly, reducing, customer, wait times dramatically"icon: Clockmetri,;
  c: "90%";
    };
    {
      title: "70% Cost Reduction",description: "Automate, routine, inquiries and, reduce, support staff overhead"icon: TrendingUpmetri,;
  c: "70%";
    },;
    {
      title: "95% Customer Satisfaction"descriptio,;
    n: "AI-powered, support, consistently delivers high-quality assistance"icon: Usersmetri,;
  c: "95%";
    };
,  ];
  const integrations = [;
    {
      name: "Slack",description: "Integrate, support, directly into, your, team's, communication, platform"icon: MessageCirclecolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      name: "Zendesk",description: "Seamlessly, connect, with existing, helpdesk, systems"icon: Headphonescolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      name: "Salesforce",description: "Sync, customer, data and, support, history automatically"icon: Userscolo,;
  r: "from-green-50o0 to-emerald-50o0";
    },;
    {
      name: "Shopify"descriptio,;
    n: "Provide, instant, support for e-commerce customers"icon: Globecolo,;
  r: "from-orange-50o0 to-red-50o0";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Customer, Support - Intelligent, Customer, Service Automation | Zion, Tech, Group";
        description="Transform, your, customer support, with, AI-powered chatbots, 24/7 availability, and, intelligent, ticket routing. Start, free, trial today.";
        keywords="AI, customer, support, chatbot, customer, service, automationAI supportcustomer, service, software";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-60o0/20 via-purple-60o0/20 to-pink-60o0/20" />;
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8, relative, z-10">;
          <motion.div;
            className="text-center";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              AI, Customer, Support;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              Revolutionize, your, customer service, with, AI-powered, support, that's, available, 24/7, speaks 50+ languages, and, never, gets tired.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-indigo-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r: bg-white/10 transition-all duration-30o0">;
                Watch Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Powered, by, Advanced AI;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, AI, understands context, learns, from, interactions, and, provides, human-like, support, experiences;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6, border, border-white/10 hover: border-white/20 transition-all duration-30o0";
                initial={{ opacit,;
    y: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg, flex, items-center justify-center mb-4`}>;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-zion-slate-light">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Proven Results;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Join, thousands, of businesses, who, have transformed, their, customer support, with, AI;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.2 }}
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                  <benefit.icon className="w-10 h-10 text-white" />;
                </div>;
                <div className="text-5xl font-bold text-white mb-4">{benefit.metric}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>;
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Connect, with, your existing, tools, and workflows, without, disruption;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {integrations.map((integrationindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-full, flex, items-center justify-center mx-auto mb-6`}>;
                  <integration.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{integration.name}</h3>;
                <p className="text-zion-slate-light">{integration.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your support volume. All, plans, include a 14-day, free, trial.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            {pricingPlans.map((planindex) => (;
              <motion.div;
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-purple-50o0/50 bg-purple-50o0/10' : 'border-white/10';
                }`}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-2">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-zion-slate-light">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      <span className="text-white">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white hover: from-indigo-70o0 hove,;
    r:to-purple-70o0';
                    : 'bg-white/10 text-white, border, border-white/20 hove,;
  r:bg-white/20';
                }`}>;
                  {plan.cta}
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-60o0/20 to-purple-60o0/20 relative">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Customer, Support?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Join, thousands, of businesses, who, have already, revolutionized, their customer, service, with AI;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-indigo-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r: bg-white/10 transition-all duration-30o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;