<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Atom, Cpu, Shield, Rocket, Zap, Database, 
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function QuantumServicesPage() {
  const services = [
    {
      title: &quot;Quantum Algorithm Development&quot;,
      description: &quot;Custom quantum algorithms designed for specific business problems&quot;,
      features: [&quot;Optimization Algorithms&quot;, &quot;Machine Learning&quot;, &quot;Cryptography&quot;, &quot;Simulation&quot;],
      price: &quot;From $15,000&quot;,
      icon: Atom,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Quantum Security Solutions&quot;,
      description: &quot;Quantum-resistant cryptography and security protocols&quot;,
      features: [&quot;Post-Quantum Cryptography&quot;, &quot;Quantum Key Distribution&quot;, &quot;Security Auditing&quot;, &quot;Compliance&quot;],
      price: &quot;From $12,000&quot;,
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      title: &quot;Quantum Computing Infrastructure&quot;,
      description: &quot;Quantum computing hardware and cloud access solutions&quot;,
      features: [&quot;Cloud Quantum Access&quot;, &quot;Hardware Integration&quot;, &quot;Performance Optimization&quot;, &quot;Scalability&quot;],
      price: &quot;From $8,000&quot;,
      icon: Cpu,
      color: &quot;from-indigo-500 to-purple-500&quot;
    },
    {
      title: &quot;Quantum AI Integration&quot;,
      description: &quot;Hybrid quantum-classical AI systems for enhanced performance&quot;,
      features: [&quot;Quantum Neural Networks&quot;, &quot;Hybrid Algorithms&quot;, &quot;Performance Enhancement&quot;, &quot;Future-Proofing&quot;],
      price: &quot;From $20,000&quot;,
      icon: Zap,
      color: &quot;from-emerald-500 to-teal-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "100+", label: "Quantum Algorithms", icon: Atom },
    { number: "99.99%", label: "Security Guarantee", icon: Shield },
    { number: "10x", label: "Performance Boost", icon: TrendingUp },
    { number: "24/7", label: "Quantum Support", icon: Clock }
  ],
=======
    { number: &quot;100+&quot;, label: &quot;Quantum Algorithms&quot;, icon: Atom },
    { number: &quot;99.99%&quot;, label: &quot;Security Guarantee&quot;, icon: Shield },
    { number: &quot;10x&quot;, label: &quot;Performance Boost&quot;, icon: TrendingUp },
    { number: &quot;24/7&quot;, label: &quot;Quantum Support&quot;, icon: Clock }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary quantum computing solutions from Zion Tech Group. Quantum algorithms, security, and AI integration for the future of computing.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Quantum Computing Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary quantum computing solutions for the future of computing.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/quantum&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6&quot;>
              Quantum Computing
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Revolutionary quantum solutions that unlock unprecedented computational power
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              Experience the future of computing with our quantum solutions. From algorithm development 
              to security protocols, we're pioneering the quantum revolution.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Explore Quantum Solutions
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
=======
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import {;
  Atom, Cpu, Shield, Rocket, Zap, Database,;
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp;
} from 'lucide-react',;
import EnhancedNavigation from '../../components/EnhancedNavigation',;
import EnhancedFooter from '../../components/EnhancedFooter',;
export default function QuantumServicesPage() {;
  const services = [;
    {;
      title: "Quantum Algorithm Development",;
      description: "Custom quantum algorithms designed for specific business problems",;
      features: ["Optimization Algorithms", "Machine Learning", "Cryptography", "Simulation"],;
      price: "From $15,000",;
      icon: Atom,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "Quantum Security Solutions",;
      description: "Quantum-resistant cryptography and security protocols",;
      features: ["Post-Quantum Cryptography", "Quantum Key Distribution", "Security Auditing", "Compliance"],;
      price: "From $12,000",;
      icon: Shield,;
      color: "from-red-500 to-orange-500";
    },;
    {;
      title: "Quantum Computing Infrastructure",;
      description: "Quantum computing hardware and cloud access solutions",;
      features: ["Cloud Quantum Access", "Hardware Integration", "Performance Optimization", "Scalability"],;
      price: "From $8,000",;
      icon: Cpu,;
      color: "from-indigo-500 to-purple-500";
    },;
    {;
      title: "Quantum AI Integration",;
      description: "Hybrid quantum-classical AI systems for enhanced performance",;
      features: ["Quantum Neural Networks", "Hybrid Algorithms", "Performance Enhancement", "Future-Proofing"],;
      price: "From $20,000",;
      icon: Zap,;
      color: "from-emerald-500 to-teal-500";
    }
  ],;
  const stats = [;
    { number: "100+", label: "Quantum Algorithms", icon: Atom },;
    { number: "99.99%", label: "Security Guarantee", icon: Shield },;
    { number: "10x", label: "Performance Boost", icon: TrendingUp };
    { number: "24/7", label: "Quantum Support", icon: Clock }
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>Quantum Computing Services - Zion Tech Group</title>;
        <meta name="description" content="Revolutionary quantum computing solutions from Zion Tech Group. Quantum algorithms, security, and AI integration for the future of computing." />;
        <meta property="og:title" content="Quantum Computing Services - Zion Tech Group" />;
        <meta property="og:description" content="Revolutionary quantum computing solutions for the future of computing." />;
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8";
          >;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">;
              Quantum Computing;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
              Revolutionary quantum solutions that unlock unprecedented computational power;
            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12";
          >;
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">;
              Experience the future of computing with our quantum solutions. From algorithm development;
              to security protocols, we're pioneering the quantum revolution.;
            </p>;
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">;
              Explore Quantum Solutions;
              <ArrowRight className="w-5 h-5" />;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 px-6">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
              </motion.div>
=======
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                  <stat.icon className="w-8 h-8 text-cyan-400" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                <div className="text-white/70">{stat.label}</div>;
              </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
=======
      <section className="py-20 px-6">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Quantum Computing Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Cutting-edge quantum solutions designed to solve complex problems and secure the future
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
=======
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Services</h2>;
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;
              Cutting-edge quantum solutions designed to solve complex problems and secure the future;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center text-white/80&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-cyan-400 mr-3 flex-shrink-0&quot; />
=======
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300";
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>;
                  <service.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;
                <p className="text-white/70 mb-6">{service.description}</p>;
                <ul className="space-y-3 mb-6">;
                  {service.features.map((feature) => (;
                    <li key={feature} className="flex items-center text-white/80">;
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      {feature}
                    </li>;
                  ))}
<<<<<<< HEAD
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
                    Get Started
                  </button>
                </div>
              </motion.div>
=======
                </ul>;
                <div className="flex items-center justify-between">;
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>;
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">;
                    Get Started;
                  </button>;
                </div>;
              </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
=======
      <section className="py-20 px-6">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Experience Quantum Computing?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's explore how quantum computing can revolutionize your business operations and solve previously impossible problems.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Schedule Quantum Demo
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
=======
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Experience Quantum Computing?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Let's explore how quantum computing can revolutionize your business operations and solve previously impossible problems.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Schedule Quantum Demo;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                Learn More;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}