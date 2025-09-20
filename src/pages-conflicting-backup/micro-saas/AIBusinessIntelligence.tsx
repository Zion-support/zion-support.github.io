import, React, from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Zap, Eye, ArrowRight, Shield, Cloud, Database, Cpu, UsersTrendingUpTarget } from "lucide-react";
export, default, function AIBusinessIntelligence() {
  const features = [;
    {
      icon: Braintitl,;
    e: 'AI-Powered Insights'descriptio,;
  n: 'Intelligent, analysis, and predictive modeling';
    };
    {
      icon: BarChart3titl,;
    e: 'Real-time Analytics'descriptio,;
  n: 'Live, data, visualization and reporting';
    };
    {
      icon: Zaptitl,;
    e: 'Automated Intelligence'descriptio,;
  n: 'Smart, automation, of business processes';
    }{
      icon: Eyetitl,;
    e: 'Predictive Analytics'descriptio,;
  n: 'Forecast, trends, and identify opportunities';
    };
,  ];
  const capabilities = [;
    {
      title: 'Business, Intelligence, Dashboard'description: 'Comprehensive, view, of all, business, metrics and KPIs'ico,;
  n: BarChart3;
    };
    {
      title: 'Predictive Modeling'descriptio,;
    n: 'AI, algorithms, to forecast, business, outcomes'ico,;
  n: TrendingUp;
    };
    {
      title: 'Natural, Language, Query'description: 'Ask, questions, in plain, English, and get, instant, answers'ico,;
  n: Database;
    }{
      title: 'Automated Reporting'descriptio,;
    n: 'Generate, reports, automatically with, AI, insights'ico,;
  n: Target;
    }
,  ];
  return (;
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-violet-90o0/20 via-slate-90o0 to-slate-90o0"></div>;
        <div className="container-responsive, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center space-x-2 bg-violet-50o0/10, border, border-violet-50o0/20 rounded-full px-4 py-2 mb-6">;
              <Brain className="w-5 h-5 text-violet-40o0" />;
              <span className="text-violet-40o0 font-medium">AI, Business, Intelligence</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Intelligence, at, Your;
              <span className="text-gradient"> Fingertips</span>;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Transform, your, business data, into, actionable intelligence, with, our AI-powered;
              business, intelligence, platform. Make, smarter, decisions faster.;
            </p>;
            <div className="flex flex-col s,;
  m: flex-row gap-4 justify-center">;
              <button className="btn-futuristic px-8 py-4 text-lg">;
                Start, Free, Trial;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="btn-outline px-8 py-4 text-lg">;
                Watch Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, AI Business Intelligence?;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Powerful, insights, that drive, business, growth and efficiency;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-6 hover: border-zion-cyan/40 transition-all duration-30o0 group";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-violet-50o0 to-violet-60o0 rounded-xl, flex, items-center justify-center mb-6 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-zion-slate-light">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Capabilities Section */}
      <section className="py-20 bg-white/5">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Platform Capabilities;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Everything, you, need to, transform, data into, business, intelligence;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {capabilities.map((capabilityindex) => (;
              <motion.div;
                key={capability.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8 hover: border-zion-cyan/40 transition-all duration-30o0 group";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-50o0 to-violet-60o0 rounded-xl, flex, items-center justify-center flex-shrink-0 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                    <capability.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-semibold text-white mb-3">{capability.title}</h3>;
                    <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Choose, the, plan that, fits, your business needs;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-5xl mx-auto">;
            {/* Starter Plan */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-30o0";
            >;
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>;
              <div className="text-4xl font-bold text-zion-cyan mb-6">$29<span className="text-lg text-zion-slate-light">/month</span></div>;
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Up, to, 5 users;
                </li>;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Basic, AI, insights;
                </li>;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Standard reports;
                </li>;
              </ul>;
              <button className="w-full btn-outline py-3">Get Started</button>;
            </motion.div>;
            {/* Pro Plan */}
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-60o0 to-violet-70o0 rounded-2xl p-8, border, border-violet-50o0 relative";
            >;
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">;
                Most Popular;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>;
              <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg text-violet-20o0">/month</span></div>;
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-violet-10o0">;
                  <CheckCircle className="w-5 h-5 text-white mr-3" />;
                  Up, to, 25 users;
                </li>;
                <li className="flex items-center text-violet-10o0">;
                  <CheckCircle className="w-5 h-5 text-white mr-3" />;
                  Advanced, AI, analytics;
                </li>;
                <li className="flex items-center text-violet-10o0">;
                  <CheckCircle className="w-5 h-5 text-white mr-3" />;
                  Custom dashboards;
                </li>;
                <li className="flex items-center text-violet-10o0">;
                  <CheckCircle className="w-5 h-5 text-white mr-3" />;
                  Priority support;
                </li>;
              </ul>;
              <button className="w-full bg-white text-violet-60o0 py-3 rounded-xl font-semibold hover: bg-gray-10o0 transition-colors duration-30o0">;
                Get Started;
              </button>;
            </motion.div>;
            {/* Enterprise Plan */}
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-30o0";
            >;
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>;
              <div className="text-4xl font-bold text-zion-cyan mb-6">Custom</div>;
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Unlimited users;
                </li>;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Custom, AI, models;
                </li>;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  White-label solution;
                </li>;
                <li className="flex items-center text-zion-slate-light">;
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />;
                  Dedicated support;
                </li>;
              </ul>;
              <button className="w-full btn-outline py-3">Contact Sales</button>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-60o0 to-violet-70o0 rounded-3xl p-12 text-center, relative, overflow-hidden";
          >;
            <div className="absolute inset-0 bg-black/20"></div>;
            <div className="relative z-10">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Get Started?;
              </h2>;
              <p className="text-xl text-violet-10o0 mb-8 max-w-2xl mx-auto">;
                Join, thousands, of businesses, using, AI to, make, smarter decisions.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="bg-white text-violet-60o0 px-8 py-4 rounded-xl font-semibold hove,;
    r:bg-gray-10o0 transition-colors duration-30o0">;
                  Start, Free, Trial;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hove,;
  r:text-violet-60o0 transition-colors duration-30o0">;
                  Schedule Demo;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
// Missing, icon, component;
const CheckCircle = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9, 12l2, 2 4-4m6, 2a9, 9 0 11-18, 0, 9 9, 0, 0o118 0z" />;
  </svg>;
);
;