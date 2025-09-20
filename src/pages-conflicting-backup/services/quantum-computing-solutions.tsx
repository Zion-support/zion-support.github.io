import, React, from "react";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { Atom, Zap, Brain, Target, TrendingUp, Shield, Users, CheckCircle, Lightbulb, DatabaseCloudCpu } from "lucide-react";
export, default, function QuantumComputingSolutions() {
  const features = [;
    {
      icon: Atomtitl,;
    e: 'Quantum Processing'descriptio,;
  n: 'Advanced, quantum, computing solutions, for, complex computational, problems, and simulations.';
    };
    {
      icon: Braintitl,;
    e: 'Quantum, Machine, Learning'descriptio,;
  n: 'Quantum-enhanced, ML, algorithms that, outperform, classical approaches, for, specific applications.';
    };
    {
      icon: Target,title: 'Optimization Solutions',description: 'Quantum, optimization, algorithms for, logisticsfinanceand, complex system design.';
    },;
    {
      icon: TrendingUptitl,;
    e: 'Performance Analytics'descriptio,;
  n: 'Real-time, monitoring, and analysis, of, quantum computing, performance, and results.';
    };
    {
      icon: Shieldtitl,;
    e: 'Quantum Security'descriptio,;
  n: 'Quantum-resistant, cryptography, and quantum, key, distribution for, enhanced, security.';
    }{
      icon: Userstitl,;
    e: 'Expert Consultation'descriptio,;
  n: 'Access, to, quantum computing, experts, and specialized, implementation, support.';
    };
,  ];
  const benefits = [;
    'Solve, previously, intractable problemsExponential, speedup, for specific algorithms',;
    'Enhanced, machine, learning capabilitiesImproved, optimization, and simulation''Future-proof, security, solutionsCompetitive advantage, in, research';
,  ],;
  const solutions = [;
    {
      title: 'Quantum, Algorithm, Development'description: 'Custom, quantum, algorithms designed, for, your specific, business, challenges and, use, cases.'ico,;
  n: Brain;
    };
    {
      title: 'Quantum, Cloud, Access'description: 'Access, to, leading quantum, computing, platforms through, our, managed cloud services.'ico,;
  n: Cloud;
    };
    {
      title: 'Quantum, Software, Integration'description: 'Seamless, integration, of quantum, computing, capabilities into, existing, software systems.'ico,;
  n: Cpu;
    }{
      title: 'Quantum Research & Development'descriptio,;
    n: 'Collaborative R&D, programs, to explore, quantum, computing applications, for, your industry.'ico,;
  n: Lightbulb;
    }
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Quantum, Computing, Solutions - Zion, Tech, Group";
        description="Harness, the, power of, quantum, computing with, our, advanced solutions. Solve, complex, problems, enhance, machine, learningand gain, competitive, advantages.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/10 via-indigo-50o0/10 to-blue-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full text-purple-30o0 text-sm font-medium mb-6">;
              <Atom className="w-4 h-4 mr-2" />;
              Next-Generation Computing;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Quantum, Computing, Solutions;
            </h1>;
            <p className="text-xl text-slate-30o0 mb-8 leading-relaxed">;
              Harness, the, power of, quantum, computing to, solve, previously intractable problems;
              enhance, machine, learning capabilitiesand, gain, competitive advantages, in, your industry.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-indigo-60o0 text-white font-semibold rounded-lg hover:from-purple-40o0 hover:to-indigo-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-purple-50o0/20">;
                Explore Solutions;
              </button>;
              <button className="px-8 py-4, border, border-purple-40o0/30 text-purple-40o0 font-semibold rounded-lg hove,;
  r: bg-purple-40o0/10 transition-all duration-20o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Quantum, Computing, Capabilities;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Our, quantum, computing solutions, leverage, cutting-edge, quantum, technologies to deliver;
              unprecedented, computational, power and problem-solving capabilities.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-purple-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-purple-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-slate-30o0 leading-relaxed">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Solutions Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive, Quantum, Solutions;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              From, algorithm, development to, cloud, access, we, provide, end-to-end, quantum, computing;
              solutions, tailored, to your, specific, needs and, industry, requirements.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {solutions.map((solutionindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-8 hover:border-purple-40o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-purple-40o0/20 to-indigo-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <solution.icon className="w-8 h-8 text-purple-40o0" />;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>;
                <p className="text-slate-30o0 leading-relaxed mb-6">{solution.description}</p>;
                <button className="text-purple-40o0 hover:text-purple-30o0 font-medium transition-colors">;
                  Learn More →;
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="grid lg: grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Quantum, Computing, Benefits;
              </h2>;
              <p className="text-lg text-slate-30o0 mb-8 leading-relaxed">;
                Quantum, computing, offers unprecedented, capabilities, that can, transform, how you approach;
                complex, problems, and gain, competitive, advantages in, your, industry.;
              </p>;
              <div className="grid grid-cols-1 gap-4">;
                {benefits.map((benefitindex) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <CheckCircle className="w-5 h-5 text-purple-40o0 flex-shrink-0" />;
                    <span className="text-slate-30o0">{benefit}</span>;
                  </div>;
                ))}
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative";
            >;
              <div className="bg-gradient-to-br from-purple-50o0/20 to-indigo-50o0/20 rounded-2xl p-8, border, border-purple-40o0/30">;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-40o0 to-indigo-50o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                    <Zap className="w-10 h-10 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Ready?</h3>;
                  <p className="text-slate-30o0 mb-6">;
                    Discover, how, quantum computing, can, transform your, business, operations.;
                  </p>;
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-50o0 to-indigo-60o0 text-white font-semibold rounded-lg hover: from-purple-40o0 hove,;
  r:to-indigo-50o0 transition-all duration-20o0">;
                    Get Assessment;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, for, the Quantum Future?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8">;
              Join, the, quantum computing, revolution, and gain, access, to computational power;
              that, was, previously unimaginable.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-indigo-60o0 text-white font-semibold rounded-lg hover:from-purple-40o0 hover:to-indigo-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-purple-50o0/20">;
                Start, Your, Quantum Journey;
              </button>;
              <button className="px-8 py-4, border, border-purple-40o0/30 text-purple-40o0 font-semibold rounded-lg hove,;
  r: bg-purple-40o0/10 transition-all duration-20o0">;
                Contact, Our, Experts;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;