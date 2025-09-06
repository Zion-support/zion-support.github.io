
import Head from 'next/head';
import { motion } from 'framer-motion';

import {

  Rocket,
  Zap,
  Shield,
  Cpu,
  Database,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,

import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Rocket, Zap, Shield, Cpu, Database, Users,
  ArrowRight, CheckCircle, Star, Clock, TrendingUp, Globe
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',

export default function DigitalTransformationPage() {
  const services = [
    {
      title: "Digital Strategy & Roadmap",
      description: "Comprehensive digital transformation strategy and implementation planning",

  const stats = [
    { number: "500+", label: "Transformations Completed", icon: Rocket },
    { number: "40%", label: "Average Cost Reduction", icon: TrendingUp },
    { number: "300%", label: "ROI Improvement", icon: Star },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Digital Transformation Services - Zion Tech Group</title>

        <meta name="description" content="End-to-end digital transformation solutions from Zion Tech Group. Strategy, modernization, automation, and change management services." />
        <meta property="og:title" content="Digital Transformation Services - Zion Tech Group" />
        <meta property="og:description" content="End-to-end digital transformation solutions for modern businesses." />
        <link rel="canonical" href="https://ziontechgroup.com/services/transformation" />
      </Head>
      <EnhancedNavigation />

          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Digital Transformation
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
              From strategy development to implementation, we guide businesses through complete

              digital transformation journeys that drive innovation, efficiency, and growth.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Start Transformation
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
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className="text-4xl font-bold text-white mb-6">Digital Transformation Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive transformation solutions designed to modernize your business operations
            </p>
          </motion.div>

              <motion.div
                key={service.title}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Digital Transformation Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Comprehensive transformation solutions designed to modernize your;
              business operations;
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
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />

                </ul>
                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold text-orange-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>

          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital transformation solutions can modernize your operations and drive sustainable growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">

                View Success Stories
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
