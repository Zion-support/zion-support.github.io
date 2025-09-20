import, React, from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Wifi, Zap, Shield, BarChart3, Network, Users, Globe, GitFork, Target, Rocket, LockCpuSettings } from "lucide-react";
const FiveGEnterpriseSolutions = () => {
    const features = [;
        {
            icon: Wifititl,;
    e: "Ultra-Fast Connectivity"descriptio,;
  n: "Lightning-fast, 5G, network speeds, for, enterprise applications";
        };
        {
            icon: Zaptitl,;
    e: "Low Latency"descriptio,;
  n: "Ultra-low, latency, for real-time, applications, and IoT devices";
        };
        {
            icon: Shieldtitl,;
    e: "Enhanced Security"descriptio,;
  n: "Advanced, security, protocols for enterprise-grade protection";
        };
        {
            icon: BarChart3titl,;
    e: "Network Slicing"descriptio,;
  n: "Customized, network, segments for, different, business needs";
        };
        {
            icon: Networktitl,;
    e: "Edge Computing"descriptio,;
  n: "Distributed, computing, at the, network, edge for, faster, processing";
        }{
            icon: Userstitl,;
    e: "Massive, IoT, Support"descriptio,;
  n: "Support, for, thousands of, connected, devices simultaneously";
        };
  ,  ];
    const solutions = [;
        {
            title: "Smart Manufacturing",description: "Enable, Industry, 4.0, with, real-time, monitoring, and automation"application,;
  s: ["Predictive Maintenance""Quality Control""Supply, Chain,, Optimization"];
        },;
        {
            title: "Healthcare Innovation",description: "Transform, healthcare, delivery with, connected, medical devices",applications: ["Remote Monitoring""Telemedicine""Medical, IoT"];
        },;
        {
            title: "Autonomous Vehicles",description: "Power, the, future of, transportation, with reliable connectivity",applications: ["Vehicle-to-Everything""Fleet Management""Safety, Systems"];
        },;
        {
            title: "Smart Cities",description: "Build, intelligent, urban infrastructure, and, services",applications: ["Traffic Management""Energy Grids""Public, Safety"];
        }
    ],;
    const benefits = [;
        {
            icon: Rockettitl,;
    e: "10x, Faster, Speeds"descriptio,;
  n: "Achieve, unprecedented, network performance";
        };
        {
            icon: Targettitl,;
    e: "Improved Efficiency"descriptio,;
  n: "Streamline, operations, with real-time connectivity";
        }{
            icon: Globetitl,;
    e: "Global Reach"descriptio,;
  n: "Connect, your, enterprise worldwide";
        };
  ,  ];
    return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-teal-90o0 to-slate-90o0">;
      <Helmet>;
        <title>5G, Enterprise, Solutions - Zion, Tech, Group</title>;
        <meta name="description" content="Revolutionary, 5G, enterprise solutions, for, ultra-fast connectivity, low, latencyand, massive IoT, support, across all industries."/>;
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise connectivity, IoT, network, slicingZion, Tech Group"/>;
      </Helmet>;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-teal-60o0/20 to-blue-60o0/20"></div>;
        <div className="relative, container, mx-auto px-4 text-center">;
          <motion.h1 initial={{ opacity: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md: text-7xl font-bold text-white mb-6">;
            5G Enterprise;
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-40o0 to-blue-40o0">;
              Solutions;
            </span>;
          </motion.h1>;
          <motion.p initial={{ opacit,;
    y: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: 0.2 }} className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
            Transform, your, enterprise with next-generation, 5G, connectivity.;
            Experience ultra-fast speeds, ultra-low, latencyand, massive IoT support.;
          </motion.p>;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: 0.4 }} className="flex flex-col sm: flex-row gap-4 justify-center">;
            <button className="bg-gradient-to-r from-teal-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-70o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5">;
              Start, Free, Trial;
            </button>;
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hove,;
  r: bg-white/10 transition-all duration-30o0">;
              Schedule Demo;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 bg-black/20">;
        <div className="container mx-auto px-4">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              5G, Technology, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Revolutionary, 5G, capabilities for, enterprise, transformation;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (<motion.div key={index} initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: index * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6, border, border-white/10 hover:border-white/20 transition-all duration-30o0">;
                <div className="w-12 h-12 bg-gradient-to-r from-teal-50o0 to-blue-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Solutions Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Transform, industries, with 5G-powered, enterprise, solutions;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {solutions.map((solutionindex) => (<motion.div key={index} initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1,;
  x: 0 }} transition={{ duration: 0.8dela,;
  y: index * 0.2 }} className="bg-gradient-to-r from-teal-60o0/10 to-blue-60o0/10 rounded-xl p-8, border, border-teal-50o0/20">;
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>;
                <p className="text-gray-30o0 text-lg mb-6">{solution.description}</p>;
                <ul className="space-y-2">;
                  {solution.applications.map((appappIndex) => (<li key={appIndex} className="flex items-center text-gray-30o0">;
                      <div className="w-2 h-2 bg-teal-40o0 rounded-full mr-3"></div>;
                      {app}
                    </li>))}
                </ul>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-teal-60o0/20 to-blue-60o0/20">;
        <div className="container mx-auto px-4">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Enterprise Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Transform, your, business with, 5G, technology advantages;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (<motion.div key={index} initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: index * 0.1 }} className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-r from-teal-50o0 to-blue-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <benefit.icon className="w-8 h-8 text-white"/>;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>;
                <p className="text-gray-30o0">{benefit.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Technology, Stack, Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              5G, Technology, Stack;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Comprehensive, 5G, infrastructure and, enterprise, solutions;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-8">;
            {[;
            { icon: Networknam,;
    e: "Core Network"descriptio,;
  n: "5G, core, infrastructure" };
            { icon: Cpunam,;
    e: "Edge Computing"descriptio,;
  n: "Distributed, edge, nodes" };
            { icon: Locknam,;
    e: "Security Layer"descriptio,;
  n: "Enterprise-grade security" }{ icon: GitForknam,;
    e: "Management"descriptio,;
  n: "Network orchestration" }
      ,  ].map((techindex) => (<motion.div key={index} initial={{ opacity: 0scal,;
  e: 0.8 }} whileInView={{ opacity: 1scal,;
  e: 1 }} transition={{ duration: 0.8dela,;
  y: index * 0.1 }} className="text-center">;
                <div className="w-20 h-20 bg-gradient-to-r from-teal-50o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-4, border, border-teal-50o0/30">;
                  <tech.icon className="w-10 h-10 text-teal-40o0"/>;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>;
                <p className="text-gray-30o0 text-sm">{tech.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Implementation, Process, Section */}
      <section className="py-20 bg-gradient-to-r from-teal-60o0/20 to-blue-60o0/20">;
        <div className="container mx-auto px-4">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Implementation Process;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Seamless, 5G, deployment for, your, enterprise;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-8">;
            {[;
            { icon: Targettitl,;
    e: "Assessment"descriptio,;
  n: "Evaluate, current, infrastructure and requirements" };
            { icon: Settingstitl,;
    e: "Planning"descriptio,;
  n: "Design, 5G, network architecture, and, deployment strategy" };
            { icon: Wifititl,;
    e: "Deployment"descriptio,;
  n: "Install, and, configure 5G infrastructure" }{ icon: BarChart3titl,;
    e: "Optimization"descriptio,;
  n: "Monitor, performance, and optimize network" }
      ,  ].map((stepindex) => (<motion.div key={index} initial={{ opacity: 0scal,;
  e: 0.8 }} whileInView={{ opacity: 1scal,;
  e: 1 }} transition={{ duration: 0.8dela,;
  y: index * 0.2 }} className="text-center">;
                <div className="w-20 h-20 bg-gradient-to-r from-teal-50o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-4, border, border-teal-50o0/30">;
                  <step.icon className="w-10 h-10 text-teal-40o0"/>;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>;
                <p className="text-gray-30o0 text-sm">{step.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }}>;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform with 5G?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, leading, enterprises leveraging, 5G, for competitive advantage;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="bg-white text-teal-90o0 px-8 py-4 rounded-lg font-semibold hove,;
    r:bg-gray-10o0 transition-all duration-30o0">;
                Get, Started, Now;
              </button>;
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hove,;
  r: bg-white/10 transition-all duration-30o0">;
                Contact Sales;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
};
export, default, FiveGEnterpriseSolutions;
;