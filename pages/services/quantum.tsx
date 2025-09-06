
import Head from 'next/head';
import { motion } from 'framer-motion';

import {

  Atom,
  Cpu,
  Shield,
  Rocket,
  Zap,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,

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
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for specific business problems",

  const stats = [
    { number: "100+", label: "Quantum Algorithms", icon: Atom },
    { number: "99.99%", label: "Security Guarantee", icon: Shield },
    { number: "10x", label: "Performance Boost", icon: TrendingUp },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>

        <meta name="description" content="Revolutionary quantum computing solutions from Zion Tech Group. Quantum algorithms, security, and AI integration for the future of computing." />
        <meta property="og:title" content="Quantum Computing Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary quantum computing solutions for the future of computing." />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum" />
      </Head>
      <EnhancedNavigation />

          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Quantum Computing
            </h1>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}

            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Experience the future of computing with our quantum solutions. From algorithm development

              to security protocols, we're pioneering the quantum revolution.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge quantum solutions designed to solve complex problems and secure the future
            </p>
          </motion.div>

              <motion.div
                key={service.title}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Quantum Computing Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Cutting-edge quantum solutions designed to solve complex problems;
              and secure the future;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />

                </ul>
                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>

          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's explore how quantum computing can revolutionize your business operations and solve previously impossible problems.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">

                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

}</div> </div> </section> <motion.div initial= {

  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0 && 0.8
}viewport= {
  {

              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
