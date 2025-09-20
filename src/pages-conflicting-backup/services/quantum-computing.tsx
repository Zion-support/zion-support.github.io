import, React, from "react";
import, SEO, from "../../components/SEO";
import { motion } from "framer-motion";
import { Zap, Brain, Shield, Cpu, Rocket, Globe, Users, Award, Star, ArrowRight, CheckCircle, Clock, TrendingUp, Target, Lightbulb, Code, Database, NetworkLockCloud } from "lucide-react";
const QuantumComputing: React.FC = () => {
  const features = [;
    {
      icon: Zaptitl,;
    e: 'Quantum Supremacy'descriptio,;
  n: 'Achieve, computational, power beyond, classical, computers';
    };
    {
      icon: Braintitl,;
    e: 'AI Acceleration'descriptio,;
  n: 'Train, machine, learning models, exponentially, faster';
    };
    {
      icon: Shieldtitl,;
    e: 'Quantum Cryptography'descriptio,;
  n: 'Unbreakable, encryption, for next-generation security';
    }{
      icon: Cputitl,;
    e: 'Quantum Simulation'descriptio,;
  n: 'Model, complex, molecular and, physical, systems';
    };
,  ];
  const useCases = [;
    {
      title: 'Drug Discovery'descriptio,;
    n: 'Accelerate, pharmaceutical, research and development'ico,;
  n: '💊';
    };
    {
      title: 'Financial Modeling'descriptio,;
    n: 'Optimize, portfolio, management and, risk, assessment'ico,;
  n: '💰';
    };
    {
      title: 'Climate Research'descriptio,;
    n: 'Advanced, climate, modeling and prediction'ico,;
  n: '🌍';
    }{
      title: 'Logistics Optimization'descriptio,;
    n: 'Solve, complex, routing and, supply, chain problems'ico,;
  n: '🚚';
    };
,  ];
  const benefits = [;
    'Exponential, speedup, for specific, algorithmsUnprecedented, computational power',;
    'Breakthrough, capabilities, in cryptographyRevolutionary, AI, and machine learning''Advanced, scientific, research capabilitiesCompetitive, advantage, in innovation';
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Quantum, Computing, Services - Zion, Tech, Group";
        description="Revolutionary, quantum, computing solutions, for, AI, cryptographyand, scientific, research. Achieve, quantum, supremacy with, our, cutting-edge technology.";
      />;
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50o0/20 to-blue-50o0/20 rounded-full, border, border-purple-40o0/30 mb-6">;
              <Zap className="w-5 h-5 text-purple-40o0 mr-2" />;
              <span className="text-purple-30o0 font-medium">Quantum Computing</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Quantum Computing;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 via-blue-50o0 to-cyan-40o0">;
                Revolution;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Unlock, the, power of, quantum, mechanics to, solve, problems that, are, impossible for, classical, computers.;
              Our, quantum, computing services, deliver, exponential speedup, for, AI, cryptographyand, scientific, research.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-purple-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-purple-50o0/20">;
                Get Started;
              </button>;
              <button className="px-8 py-4, border, border-purple-40o0/30 text-purple-30o0 font-semibold rounded-lg hove,;
  r: bg-purple-40o0/10 transition-all duration-20o0">;
                Learn More;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Quantum, Computing, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, the, future of, computing, with our, advanced, quantum capabilities;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
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
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-purple-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-purple-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-16 px-4 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Quantum, Computing, Use Cases;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Transform, industries, with quantum, computing, applications;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-purple-40o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="text-4xl">{useCase.icon}</div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>;
                    <p className="text-gray-30o0">{useCase.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Quantum Computing?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Unlock, unprecedented, computational power, and, capabilities;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-8";
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <ul className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <li key={index} className="flex items-center space-x-3">;
                    <CheckCircle className="w-5 h-5 text-green-40o0 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </li>;
                ))}
              </ul>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50o0/20 to-blue-50o0/20, border, border-purple-40o0/30 rounded-xl p-8";
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Get, Started, Today</h3>;
              <p className="text-gray-30o0 mb-6">;
                Ready, to, experience the, future, of computing? Our, quantum, computing experts, are, here to, help, you;
                harness, the, power of, quantum, mechanics for, your, business.;
              </p>;
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-purple-40o0 hove,;
    r:to-blue-50o0 transition-all duration-20o0 hove,;
  r:scale-10o5 shadow-lg shadow-purple-50o0/20">;
                Contact, Our, Experts;
              </button>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready, for, the Quantum Future?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, the, quantum revolution, and, transform your, business, with unprecedented, computational, power;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-purple-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-purple-50o0/20">;
                Start, Quantum, Journey;
              </button>;
              <button className="px-8 py-4, border, border-purple-40o0/30 text-purple-30o0 font-semibold rounded-lg hove,;
  r: bg-purple-40o0/10 transition-all duration-20o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, QuantumComputing;
;