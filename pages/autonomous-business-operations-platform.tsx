<<<<<<< HEAD
import React from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion } from 'framer-motion',;
import { ;
  Bot, Brain, Cpu, Zap, Shield, Globe, ;
  Rocket, Target, TrendingUp, Users, CheckCircle,;
  ArrowRight, Star, Award, Clock, DollarSign,;
  Building2, Gauge, BarChart3, Settings, Workflow;
} from 'lucide-react',;
;
const AutonomousBusinessOperationsPlatform = () => {;
  const features = [;
    {;
      icon:Bot,;
      title:"AI Autonomous Management",;
      description:"Fully autonomous business operations with intelligent decision-making",;
      color:"from-blue-500 to-cyan-500";
    },;
    {;
      icon:Brain,;
      title:"Cognitive Business Intelligence",;
      description:"Advanced AI that understands and optimizes your business processes",;
      color:"from-purple-500 to-pink-500";
    },;
    {;
      icon:Workflow,;
      title:"Automated Workflows",;
      description:"Seamless automation of complex business processes and operations",;
      color:"from-emerald-500 to-teal-500";
    },;
    {;
      icon:Shield,;
      title:"Intelligent Security",;
      description:"AI-powered security monitoring and threat prevention",;
      color:"from-red-500 to-orange-500";
    }
  ],;
;
  const capabilities = [;
    "24/7 autonomous operation",;
    "Real-time decision making",;
    "Predictive analytics",;
    "Process optimization",;
    "Resource management",;
    "Performance monitoring",;
    "Risk assessment",;
    "Compliance automation";
  ],;
;
  const industries = [;
    {;
      title:"Manufacturing",;
      description:"Automated production lines, quality control, and supply chain management";
    },;
    {;
      title:"Healthcare",;
      description:"Patient care automation, medical device management, and administrative tasks";
    },;
    {;
      title:"Finance",;
      description:"Automated trading, risk management, and compliance monitoring";
    },;
    {;
      title:"Retail",;
      description:"Inventory management, customer service, and sales optimization";
    }
  ],;
;
  const benefits = [;
    {;
      icon:TrendingUp,;
      title:"Increased Efficiency",;
      value:"300%",;
      description:"Boost in operational efficiency";
    },;
    {;
      icon:DollarSign,;
      title:"Cost Reduction",;
      value:"40%",;
      description:"Reduction in operational costs";
    },;
    {;
      icon:Clock,;
      title:"Time Savings",;
      value:"80%",;
      description:"Faster decision making";
    },;
    {;
      icon:Users,;
      title:"Team Productivity",;
      value:"250%",;
      description:"Increase in team productivity";
    }
  ],;
;
  return (;
    <>;
      <Head>;
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>;
        <meta name="description" content="Revolutionary AI-powered autonomous business operations platform that manages your entire business with intelligent automation and decision-making capabilities." />;
        <meta name="keywords" content="autonomous business, AI automation, business operations, intelligent automation, process optimization" />;
        <meta property="og:title" content="Autonomous Business Operations Platform - Zion Tech Group" />;
        <meta property="og:description" content="Revolutionary AI-powered autonomous business operations platform." />;
        <meta property="og:type" content="website" />;
        <meta property="og:url" content="https://ziontechgroup.com/autonomous-business-operations-platform" />;
      </Head>;
;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">;
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>;
          <div className="relative max-w-7xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
            >;
              <div className="flex justify-center mb-6">;
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">;
                  <Bot className="w-8 h-8 text-white" />;
                </div>;
              </div>;
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                Autonomous Business;
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">;
                  Operations Platform;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Transform your business with AI-powered autonomous operations that work 24/7, ;
                making intelligent decisions and optimizing every aspect of your business.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">;
                  Start Automation;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">;
                  Learn More;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
;
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Revolutionary Features;
              </h2>;
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
                Experience the future of business automation with our cutting-edge platform;
              </p>;
            </motion.div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300";
                >;
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>;
                    <feature.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                  <p className="text-gray-400">{feature.description}</p>;
                </motion.div>;
=======
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Bot, Brain, Cpu, Zap, Shield, Globe,
  Rocket, Target, TrendingUp, Users, CheckCircle,
  ArrowRight, Star, Award, Clock, DollarSign,
  Building2, Gauge, BarChart3, Settings, Workflow
} from 'lucide-react',
const _AutonomousBusinessOperationsPlatform = () => {_const _features = [
    {
      icon: Bot,
      title: &quot;AI Autonomous Management&quot;,
      description: &quot;Fully autonomous business operations with intelligent decision-making&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      icon: Brain,
      title: &quot;Cognitive Business Intelligence&quot;,
      description: &quot;Advanced AI that understands and optimizes your business processes&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      icon: Workflow,
      title: &quot;Automated Workflows&quot;,
      description: &quot;Seamless automation of complex business processes and operations&quot;,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      icon: Shield,
      title: &quot;Intelligent Security&quot;,
      description: &quot;AI-powered security monitoring and threat prevention&quot;,
      color: &quot;from-red-500 to-orange-500&quot;
    }
  ],

  const capabilities = [
    "24/7 autonomous operation",
    "Real-time decision making",
    "Predictive analytics",
    "Process optimization",
    "Resource management",
    "Performance monitoring",
    "Risk assessment",
    "Compliance automation"
  ],
    &quot;24/7 autonomous operation&quot;,
    &quot;Real-time decision making&quot;,
    &quot;Predictive analytics&quot;,
    &quot;Process optimization&quot;,
    &quot;Resource management&quot;,
    &quot;Performance monitoring&quot;,
    &quot;Risk assessment&quot;,
    &quot;Compliance automation&quot;
  ];

  const industries = [
    {
      title: &quot;Manufacturing&quot;,
      description: &quot;Automated production lines, quality control, and supply chain management&quot;
    },
    {
      title: &quot;Healthcare&quot;,
      description: &quot;Patient care automation, medical device management, and administrative tasks&quot;
    },
    {
      title: &quot;Finance&quot;,
      description: &quot;Automated trading, risk management, and compliance monitoring&quot;
    },
    {
      title: &quot;Retail&quot;,
      description: &quot;Inventory management, customer service, and sales optimization&quot;
    }
  ],

  const benefits = [
    {
      icon: TrendingUp,
      title: &quot;Increased Efficiency&quot;,
      value: &quot;300%&quot;,
      description: &quot;Boost in operational efficiency&quot;
    },
    {
      icon: DollarSign,
      title: &quot;Cost Reduction&quot;,
      value: &quot;40%&quot;,
      description: &quot;Reduction in operational costs&quot;
    },
    {
      icon: Clock,
      title: &quot;Time Savings&quot;,
      value: &quot;80%&quot;,
      description: &quot;Faster decision making&quot;
    },
    {
      icon: Users,
      title: &quot;Team Productivity&quot;,
      value: &quot;250%&quot;,
      description: &quot;Increase in team productivity&quot;
    }
  ],
  return (_<>
      <Head>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary AI-powered autonomous business operations platform that manages your entire business with intelligent automation and decision-making capabilities.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;autonomous business, AI automation, business operations, intelligent automation, process optimization&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Autonomous Business Operations Platform - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary AI-powered autonomous business operations platform.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/autonomous-business-operations-platform&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900&quot;>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;>            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className=&quot;flex justify-center mb-6&quot;>
                <div className=&quot;p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full&quot;>
                  <Bot className=&quot;w-8 h-8 text-white&quot; />
                </div>
              </div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
                Autonomous Business
                <span className=&quot;block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                  Operations Platform
                </span>
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Transform your business with AI-powered autonomous operations that work 24/7, 
                making intelligent decisions and optimizing every aspect of your business.              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200&quot;>
                  Start Automation
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </Link>
                <Link href=&quot;/services&quot; className=&quot;inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200&quot;>
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Revolutionary Features
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto&quot;>
                Experience the future of business automation with our cutting-edge platform
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300&quot;
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-400&quot;>{feature.description}</p>                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* Capabilities Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Advanced Capabilities;
              </h2>;
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
                Comprehensive automation capabilities that transform your business operations;
              </p>;
            </motion.div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              {capabilities.map((capability, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}
                  className="flex items-center space-x-3";
                >;
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />;
                  <span className="text-gray-300">{capability}</span>;
                </motion.div>;
=======
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Advanced Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto&quot;>
                Comprehensive automation capabilities that transform your business operations
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;flex items-center space-x-3&quot;
                >
                  <CheckCircle className=&quot;w-6 h-6 text-blue-400 flex-shrink-0&quot; />
                  <span className=&quot;text-gray-300&quot;>{capability}</span>                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Measurable Results;
              </h2>;
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
                See the real impact of autonomous operations on your business;
              </p>;
            </motion.div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits.map((benefit, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}
                  className="text-center";
                >;
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">;
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">;
                      <benefit.icon className="w-8 h-8 text-white" />;
                    </div>;
                    <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.value}</div>;
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>;
                    <p className="text-gray-400 text-sm">{benefit.description}</p>;
                  </div>;
                </motion.div>;
=======
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Measurable Results
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto&quot;>
                See the real impact of autonomous operations on your business
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-center&quot;                >
                  <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50&quot;>
                    <div className=&quot;inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4&quot;>
                      <benefit.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>{benefit.value}</div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{benefit.title}</h3>
                    <p className=&quot;text-gray-400 text-sm&quot;>{benefit.description}</p>                  </div>
                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* Industries Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Industry Applications;
              </h2>;
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
                Transform operations across diverse industries with autonomous automation;
              </p>;
            </motion.div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {industries.map((industry, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50";
                >;
                  <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>;
                  <p className="text-gray-400 text-lg">{industry.description}</p>;
                </motion.div>;
=======
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Industry Applications
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-2xl mx-auto&quot;>
                Transform operations across diverse industries with autonomous automation
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50&quot;
                >
                  <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>{industry.title}</h3>
                  <p className=&quot;text-gray-400 text-lg&quot;>{industry.description}</p>                </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Ready to Automate Your Business?;
              </h2>;
              <p className="text-xl text-gray-400 mb-8">;
                Join the autonomous business revolution and transform your operations today;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-lg">;
                  Start Automation;
                  <Bot className="ml-2 w-6 h-6" />;
                </Link>;
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg">;
                  Explore All Services;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
},;
;
export default AutonomousBusinessOperationsPlatform,;
=======
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">                Ready to Automate Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-400 mb-8&quot;>
                Join the autonomous business revolution and transform your operations today
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-lg&quot;>
                  Start Automation
                  <Bot className=&quot;ml-2 w-6 h-6&quot; />
                </Link>
                <Link href=&quot;/services&quot; className=&quot;inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg&quot;>
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
},

export default AutonomousBusinessOperationsPlatform,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
