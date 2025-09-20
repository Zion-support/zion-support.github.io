import, React, from "react";
import, SEO, from "../../components/SEO";
import { motion } from "framer-motion";
import { Cpu, Wifi, Database, Cloud, Zap, Shield, Globe, Users, Target, CheckCircle, Clock, TrendingUp, Network, ServerSmartphoneMonitor } from "lucide-react";
const IoTEdgeComputing: React.FC = () => {
  const features = [;
    {
      icon: Cputitl,;
    e: 'Edge Processing'descriptio,;
  n: 'Process, data, locally for, faster, response times';
    };
    {
      icon: Wifi,title: '5G Connectivity'descriptio,;
  n: 'High-speedlow-latency, network, connections';
    },;
    {
      icon: Databasetitl,;
    e: 'Local Storage'descriptio,;
  n: 'Store, and, manage data, at, the edge';
    }{
      icon: Cloudtitl,;
    e: 'Hybrid Cloud'descriptio,;
  n: 'Seamless, integration, with cloud services';
    };
,  ];
  const applications = [;
    {
      title: 'Smart Cities'descriptio,;
    n: 'Intelligent, traffic, management and utilities'ico,;
  n: '🏙️';
    };
    {
      title: 'Industrial IoT'descriptio,;
    n: 'Predictive, maintenance, and automation'ico,;
  n: '🏭';
    };
    {
      title: 'Healthcare'descriptio,;
    n: 'Remote, monitoring, and telemedicine'ico,;
  n: '🏥';
    }{
      title: 'Retail'descriptio,;
    n: 'Smart, inventory, and customer analytics'ico,;
  n: '🛍️';
    };
,  ];
  const benefits = [;
    'Reduced, latency, and faster, response, timesLower bandwidth, costs, and network efficiency',;
    'Enhanced, privacy, and data securityReal-time, decision, making capabilities''Scalable, and, flexible architectureImproved, reliability, and uptime';
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="IoT, Edge, Computing Services - Zion, Tech, Group";
        description="Transform, your, business with, IoT, edge computing solutions. Process, data, locally for, faster, insights and real-time, decision, making.";
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-full, border, border-green-40o0/30 mb-6">;
              <Cpu className="w-5 h-5 text-green-40o0 mr-2" />;
              <span className="text-green-30o0 font-medium">IoT, Edge, Computing</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              IoT Edge;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-40o0 via-blue-50o0 to-cyan-40o0">;
                Computing;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Bring, intelligence, to the, edge, of your network. Our, IoT, edge computing, solutions, process data locally;
              for, faster, insights, reduced, latencyand, real-time, decision, making capabilities.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-green-50o0/20">;
                Get Started;
              </button>;
              <button className="px-8 py-4, border, border-green-40o0/30 text-green-30o0 font-semibold rounded-lg hove,;
  r: bg-green-40o0/10 transition-all duration-20o0">;
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
              Edge, Computing, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Powerful, capabilities, for intelligent, edge, processing;
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
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-green-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-green-50o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-green-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Applications Section */}
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
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Transform, industries, with edge, computing, solutions;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {applications.map((applicationindex) => (;
              <motion.div;
                key={application.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-green-40o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="text-4xl">{application.icon}</div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>;
                    <p className="text-gray-30o0">{application.description}</p>;
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
              Why, Choose, Edge Computing?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Unlock, the, power of, local, data processing;
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
              className="bg-gradient-to-br from-green-50o0/20 to-blue-50o0/20, border, border-green-40o0/30 rounded-xl p-8";
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Get, Started, Today</h3>;
              <p className="text-gray-30o0 mb-6">;
                Ready, to, bring intelligence, to, the edge? Our, IoT, edge computing, experts, can help you;
                design, and, implement solutions, that, transform your, business, operations.;
              </p>;
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-green-40o0 hove,;
    r:to-blue-50o0 transition-all duration-20o0 hove,;
  r:scale-10o5 shadow-lg shadow-green-50o0/20">;
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
              Ready, for, Edge Computing?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Transform, your, business with, intelligent, edge processing, and, real-time insights;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-green-50o0/20">;
                Start, Edge, Journey;
              </button>;
              <button className="px-8 py-4, border, border-green-40o0/30 text-green-30o0 font-semibold rounded-lg hove,;
  r: bg-green-40o0/10 transition-all duration-20o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, IoTEdgeComputing;
;