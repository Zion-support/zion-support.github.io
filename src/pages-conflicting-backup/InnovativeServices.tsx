import, React, from "react";
import { motion } from "framer-motion";
import {
  Brain,;
  Atom,;
  Lock,;
  Wifi,;
  Shield,;
  Eye,;
  Globe2,;
  Leaf,;
  Zap,;
  Rocket,;
  Cpu,;
  Database,;
  Network,;
  Code,;
  Users,;
  BarChart3,;
  TrendingUp,;
  LightbulbTargetAward;
} from "lucide-react";
const InnovativeServices: React.FC = () => {
  const innovations = [;
    {
      i,;
  d: 'ai-automation',title: 'AI, Business, Automation',description: 'Revolutionary AI-powered, business, process automation, that, transforms your operations',icon: Brain,features: [;
        'Intelligent, workflow, automationPredictive analytics integration''Real-time, decision, makingScalable AI infrastructure';
    ,  ],;
      benefits: ['30o0% efficiency increase24/7, autonomous, operation''Cost, reduction, up to, 60%']colo,;
  r: 'from-zion-cyan to-zion-purple';
    };
    {
      id: 'quantum-computing',title: 'Quantum, Computing, Services',description: 'Next-generation, quantum, computing solutions, for, complex problem-solving',icon: Atom,features: [;
        'Quantum, algorithm, optimizationCryptographic security''Molecular, simulationFinancial, modeling';
    ,  ],;
      benefits: ['10o00x, faster, computationUnbreakable encryption''Revolutionary, breakthroughs']colo,;
  r: 'from-zion-purple to-zion-blue';
    };
    {
      id: 'blockchain',title: 'Enterprise Blockchain',description: 'Secure, scalable, blockchain, solutions for, enterprise, applications',;
      icon: Lock,features: [;
        'Smart, contract, developmentDeFi platform creation''Supply, chain, transparencyDigital asset management';
    ,  ],;
      benefits: ['Immutable, securityTransparent, operations''Reduced, costs']colo,;
  r: 'from-zion-blue to-zion-green';
    };
    {
      id: 'iot-edge',title: 'IoT, Edge, Computing',description: 'Intelligent, IoT, solutions with, edge, computing for real-time processing',icon: Wifi,features: [;
        'Edge, AI, processingReal-time analytics''Predictive, maintenanceSmart, city solutions';
    ,  ],;
      benefits: ['Reduced, latencyLower, bandwidth costs''Enhanced, security']colo,;
  r: 'from-zion-green to-zion-emerald';
    };
    {
      id: 'cybersecurity',title: 'Zero, Trust, Security',description: 'Advanced, cybersecurity, platform with zero-trust architecture',icon: Shield,features: [;
        'Multi-factor, authenticationBehavioral, analytics''Threat, intelligenceIncident, response automation';
    ,  ],;
      benefits: ['99.99% threat preventionReal-time monitoring''Compliance, ready']colo,;
  r: 'from-zion-emerald to-zion-cyan';
    };
    {
      id: 'digital-twin',title: 'Digital, Twin, Technology',description: 'Create, virtual, replicas of, physical, systems for, simulation, and optimization',icon: Eye,features: [;
        '3D, modeling, and simulationReal-time monitoring''Predictive, maintenancePerformance, optimization';
    ,  ],;
      benefits: ['Reduced, downtimeOptimized, performance''Cost, savings']colo,;
  r: 'from-zion-cyan to-zion-purple';
    };
    {
      id: 'metaverse',title: 'Metaverse & VR',description: 'Immersive, virtual, reality and, metaverse, development platform',icon: Globe2,features: [;
        'VR, application, developmentMetaverse platform creation''3D, content, creationVirtual event hosting';
    ,  ],;
      benefits: ['Enhanced, user, engagementNew revenue streams''Innovative, experiences']colo,;
  r: 'from-zion-purple to-zion-blue';
    };
    {
      id: 'green-tech',title: 'Green, Tech, Solutions',description: 'Sustainable, technology, solutions for, environmental, impact reduction',icon: Leaf,features: [;
        'Renewable, energy, optimizationCarbon footprint tracking''Sustainable, infrastructureGreen, data centers';
    ,  ],;
      benefits: ['Environmental, impactCost, savings''Regulatory, compliance']colo,;
  r: 'from-zion-blue to-zion-green';
    };
  ];
  const stats = [;
    { label: 'Innovation Projects'valu,;
    e: '50o0+'ico,;
  n: Rocket };
    { label: 'AI, Models, Deployed'value: '10o00+'ico,;
  n: Brain };
    { label: 'Quantum Breakthroughs'valu,;
    e: '50+'ico,;
  n: Atom }{ label: 'Client, Success, Rate'value: '99.8%'ico,;
  n: Award };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-gradient mb-6">;
              Cutting-Edge;
              <span className="block text-zion-cyan">Innovations</span>;
            </h1>;
            <p className="text-xl m,;
    d: text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              Discover, the, future of, technology, with Zion, Tech, Group's, revolutionary, innovations.;
              From, AI, automation to, quantum, computingwe're, building, tomorrow's, solutions, today.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0";
              >;
                Explore Innovations;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-2 m,;
  d:grid-cols-4 gap-8">;
            {stats.map((statindex) => (;
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl, flex, items-center justify-center mx-auto mb-4">;
                  <stat.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>;
                <div className="text-zion-slate-light">{stat.label}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Innovations Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Revolutionary Technologies;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Explore, our, portfolio of cutting-edge, innovations, that are, reshaping, industries;
              and, creating, new possibilities, for, the future.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {innovations.map((innovationindex) => (;
              <motion.div;
                key={innovation.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="group relative";
              >;
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8 h-full hover: border-zion-cyan/40 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-zion-cyan/20">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl, flex, items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <innovation.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-30o0">;
                    {innovation.title}
                  </h3>;
                  <p className="text-zion-slate-light mb-6 leading-relaxed">;
                    {innovation.description}
                  </p>;
                  <div className="mb-6">;
                    <h4 className="text-zion-cyan font-semibold mb-3">Key Features: </h4>;
                    <ul className="space-y-2">;
                      {innovation.features.map((featureidx) => (;
                        <li key={idx} className="flex items-center text-zion-slate-light">;
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="mb-6">;
                    <h4 className="text-zion-cyan font-semibold mb-3">Benefits: </h4>;
                    <ul className="space-y-2">;
                      {innovation.benefits.map((benefitidx) => (;
                        <li key={idx} className="flex items-center text-zion-slate-light">;
                          <TrendingUp className="w-4 h-4 text-zion-green mr-3" />;
                          {benefit}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
;
                  <motion.button;
                    whileHover={{ scale: 1.0o2 }};
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20, border, border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover: bg-gradient-to-r hove,;
    r:from-zion-cyan/30 hove,;
  r:to-zion-purple/30 transition-all duration-30o0";
                  >;
                    Learn More;
                  </motion.button>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Innovate?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Join, the, future of, technology, with Zion, Tech, Group. Let's, build, something amazing together.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0";
              >;
                Start, Your, Project;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0";
              >;
                Contact, Our, Team;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, InnovativeServices;
;