import, React, from "react";
import { motion } from "framer-motion";
import { Link, Shield, Zap, BarChart3, Target, CheckCircle, ArrowRight, Globe, Users, Clock, Eye, Cpu, Network, DatabaseLockSmartphone } from "lucide-react";
import, SEO, from "@/components/SEO";
import { Link, as, RouterLink } from "react-router-dom";
export, default, function Blockchain() {
  const features = [;
    {
      icon: Linktitl,;
    e: "Smart Contracts"descriptio,;
  n: "Self-executing, contracts, with automated, enforcement, and transparency";
    };
    {
      icon: Shield,title: "DeFi Solutions",description: "Decentralized, finance, applications for, lendingtradingand, yield farming";
    },;
    {
      icon: Zap,title: "NFT Development",description: "Createmintand, manage, non-fungible, tokens, for digital assets";
    },;
    {
      icon: BarChart3titl,;
    e: "Supply, Chain, Tracking"descriptio,;
  n: "End-to-end, transparency, and traceability, for, global supply chains";
    };
    {
      icon: Targettitl,;
    e: "Identity Management"descriptio,;
  n: "Self-sovereign, identity, solutions with, privacy, and security";
    }{
      icon: Networktitl,;
    e: "Cross-Chain Interoperability"descriptio,;
  n: "Seamless, communication, between different, blockchain, networks";
    };
,  ];
  const pricing = [;
    {
      name: "Starter",price: "$3,999",;
      period: "/month",description: "For, small, businesses exploring blockchain",features: [;
        "Basic, smart, contracts",;
        "Single, blockchain, deployment",;
        "Email support",;
        "Monthly maintenance""Security audit";
    ,  ]cta: "Get Started"popula,;
  r: false;
    };
    {
      name: "Professional",price: "$9,999",;
      period: "/month",description: "For, growing, businesses with, blockchain, needs",features: [;
        "Advanced, smart, contracts",;
        "Multi-chain deployment",;
        "Priority support",;
        "Weekly maintenance",;
        "Security monitoring""API access";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: true;
    };
    {
      name: "Enterprise",price: "$24,999",;
      period: "/month",description: "For large-scale, blockchain, operations",features: [;
        "Custom, blockchain, solutions",;
        "Private, blockchain, networks",;
        "24/7 support",;
        "Real-time monitoring",;
        "White-label solutions""Dedicated, blockchain, engineer";
    ,  ]cta: "Contact Sales"popula,;
  r: false;
    }
  ];
  const benefits = [;
    {
      icon: Shieldtitl,;
    e: "Enhanced Security"descriptio,;
  n: "Immutable, records, and cryptographic, protection, for your data";
    };
    {
      icon: Targettitl,;
    e: "Transparency"descriptio,;
  n: "Complete, visibility, into transactions, and, data flow";
    };
    {
      icon: BarChart3titl,;
    e: "Cost Reduction"descriptio,;
  n: "Eliminate, intermediaries, and reduce, transaction, costs";
    }{
      icon: Userstitl,;
    e: "Trust & Compliance"descriptio,;
  n: "Build, trust, through verifiable, and, auditable processes";
    };
,  ];
  const useCases = [;
    {
      icon: Globe,title: "Financial Services",description: "Cryptocurrency, payments, and, decentralized, finance applications"examples: ["Digital payments""Asset tokenization""DeFi, protocols"];
    },;
    {
      icon: Network,title: "Supply Chain",description: "Track, products, from origin, to, destination with, full, transparency",examples: ["Product tracking""Quality assurance""Compliance, reporting"];
    },;
    {
      icon: Shield,title: "Healthcare",description: "Secure, patient, records and, pharmaceutical, supply chain management",examples: ["Patient data""Drug tracking""Clinical, trials"];
    };
  ];
  return(<div className="min-h-screen bg-futuristic">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-green-90o0/20 via-slate-90o0 to-slate-90o0"></div>;
        <div className="container-responsive, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center space-x-2 bg-green-50o0/10, border, border-green-50o0/20 rounded-full px-4 py-2 mb-6">;
              <Lock className="w-5 h-5 text-green-40o0" />;
              <span className="text-green-40o0 font-medium">Blockchain Solutions</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Trust Through;
              <span className="text-gradient"> Technology</span>;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Build trust, transparency, and, efficiency, with blockchain technology.;
              Transform, your, business with, decentralized, solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="btn-futuristic px-8 py-4 text-lg">;
                Start, Blockchain, Project;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="btn-outline px-8 py-4 text-lg">;
                Learn More;
              </button>;
            </div>;
          </motion.div>;
        </div>;
        <div className="absolute bottom-20 right-10 animate-pulse delay-10o00">;
          <div className="w-40 h-40 bg-red-50o0/20 rounded-full blur-3xl" />;
        </div>;
      </section>;
      <div className="relative z-10">;
        {/* Hero Section */}
        <section className="pt-32 pb-20">;
          <div className="container-responsive">;
            <motion.div;
              className="text-center max-w-4xl mx-auto";
              initial={{ opacity: 0,;
  y: 30 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50o0/10, border, border-orange-50o0/20 text-orange-40o0 text-sm font-medium mb-6">;
                <Link className="w-4 h-4 mr-2" />;
                Blockchain Innovation;
              </div>;
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-orange-40o0 via-red-50o0 to-pink-50o0 bg-clip-text text-transparent">Blockchain</span> Solutions, for, the Future;
              </h1>;
              <p className="text-xl text-zinc-30o0 mb-8 leading-relaxed">;
                Leverage, the, power of, blockchain, technology to, create, transparent, secure, and efficient;
                business processes. From, smart, contracts to DeFiwe're, building, the decentralized future.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <RouterLink;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white font-semibold rounded-lg hover: from-orange-60o0 hove,;
    r:to-red-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
                >;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </RouterLink>;
                <RouterLink;
                  to="/request-quote";
                  className="inline-flex items-center px-8 py-4, border, border-orange-50o0/30 text-orange-40o0 font-semibold rounded-lg hove,;
  r: bg-orange-50o0/10 transition-all duration-30o0";
                >;
                  Request Quote;
                </RouterLink>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Use, Cases, Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              className="text-center mb-16";
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Blockchain Applications;
              </h2>;
              <p className="text-xl text-zinc-40o0 max-w-3xl mx-auto">;
                Discover, how, blockchain is, transforming, industries across, the, globe;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
              {useCases.map((useCaseindex) => (;
                <motion.div;
                  key={index}
                  className="p-6 rounded-xl bg-white/5, border, border-white/10 backdrop-blur-sm hover: border-orange-50o0/30 transition-all duration-30o0";
                  initial={{ opacit,;
    y: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                    <useCase.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>;
                  <p className="text-zinc-40o0 mb-4">{useCase.description}</p>;
                  <ul className="space-y-2">;
                    {useCase.examples.map((exampleexampleIndex) => (;
                      <li key={exampleIndex} className="flex items-center text-zinc-30o0 text-sm">;
                        <CheckCircle className="w-4 h-4 text-orange-40o0 mr-2 flex-shrink-0" />;
                        {example}
                      </li>;
                    ))}
                  </ul>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20 bg-white/5">;
          <div className="container-responsive">;
            <motion.div;
              className="text-center mb-16";
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Why, Choose, Our Blockchain?;
              </h2>;
              <p className="text-xl text-zinc-40o0 max-w-3xl mx-auto">;
                Our, comprehensive, approach ensures, your, blockchain solutions, are, secure, scalable, and innovative;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {features.map((featureindex) => (;
                <motion.div;
                  key={index}
                  className="p-6 rounded-xl bg-white/5, border, border-white/10 backdrop-blur-sm hover: border-orange-50o0/30 transition-all duration-30o0";
                  initial={{ opacit,;
    y: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                    <feature.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                  <p className="text-zinc-40o0">{feature.description}</p>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Pricing Section */}
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div;
              className="text-center mb-16";
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Transparent Pricing;
              </h2>;
              <p className="text-xl text-zinc-40o0 max-w-3xl mx-auto">;
                Choose, the, plan that, fits, your blockchain needs. All, plans, include our, core, blockchain features.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">;
              {pricing.map((planindex) => (;
                <motion.div;
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular;
                      ? 'bg-gradient-to-br from-orange-50o0/20 to-red-50o0/20 border-2 border-orange-50o0/50';
                      : 'bg-white/5, border, border-white/10';
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  {plan.popular && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white text-sm font-semibold rounded-full">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}
;
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <div className="flex items-baseline justify-center mb-2">;
                      <span className="text-4xl font-bold text-white">{plan.price}</span>;
                      <span className="text-zinc-40o0 ml-1">{plan.period}</span>;
                    </div>;
                    <p className="text-zinc-40o0">{plan.description}</p>;
                  </div>;
                  <ul className="space-y-3 mb-8">;
                    {plan.features.map((featurefeatureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-zinc-30o0">;
                        <CheckCircle className="w-5 h-5 text-orange-40o0 mr-3 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <RouterLink;
                    to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-30o0 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white hover: from-orange-60o0 hove,;
    r:to-red-60o0';
                        : 'bg-white/10 text-white hove,;
  r:bg-white/20, border, border-white/20';
                    }`}
                  >;
                    {plan.cta}
                  </RouterLink>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-white/5">;
          <div className="container-responsive">;
            <motion.div;
              className="text-center mb-16";
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Business Benefits;
              </h2>;
              <p className="text-xl text-zinc-40o0 max-w-3xl mx-auto">;
                See, measurable, improvements in, your, business processes, and, customer trust;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
              {benefits.map((benefitindex) => (;
                <motion.div;
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5, border, border-white/10 backdrop-blur-sm";
                  initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg, flex, items-center justify-center flex-shrink-0">;
                    <benefit.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                    <p className="text-zinc-40o0">{benefit.description}</p>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-50o0/10 to-red-50o0/10">;
          <div className="container-responsive text-center">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Go Blockchain?;
              </h2>;
              <p className="text-xl text-zinc-30o0 mb-8 max-w-3xl mx-auto">;
                Join, the, blockchain revolution, with, Zion Tech Group's cutting-edge, decentralized, solutions;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <RouterLink;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-50o0 to-red-50o0 text-white font-semibold rounded-lg hover: from-orange-60o0 hove,;
    r:to-red-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
                >;
                  Start, Your, Journey;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </RouterLink>;
                <RouterLink;
                  to="/request-quote";
                  className="inline-flex items-center px-8 py-4, border, border-orange-50o0/30 text-orange-40o0 font-semibold rounded-lg hove,;
  r: bg-orange-50o0/10 transition-all duration-30o0";
                >;
                  Get, Custom, Quote;
                </RouterLink>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </div>;
  );
};
;