
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Shield, Database, Globe;
  ArrowRight, CheckCircle, Star, TrendingUp, Users
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function EdgeComputingPage() {

  const features = [
    {

  const benefits = [
    "Reduce latency by 80-90% with edge processing",
    "Cut bandwidth costs by 60% through local data processing",
    "Improve reliability with distributed computing architecture",
    "Scale seamlessly across global edge networks",
    "Enable real-time AI and machine learning at the edge",
    "Reduce central server load and improve overall performance"
  ],
  const useCases = [
    {
      industry: "Manufacturing",
      description: "Real-time quality control, predictive maintenance, and production optimization",
      results: "30% reduction in downtime, 25% improvement in product quality"
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and telemedicine support",
      results: "40% faster response times, improved patient outcomes"
    },
    {
      industry: "Transportation",
      description: "Autonomous vehicle support, traffic management, and fleet optimization",
      results: "50% reduction in accidents, 35% improvement in efficiency"
    },
    {
      industry: "Retail",
      description: "Inventory management, customer analytics, and supply chain optimization",
      results: "45% reduction in stockouts, 30% improvement in customer satisfaction"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      description: "Basic edge computing for small deployments",
      features: [

    {
      plan: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced features for growing edge networks",
      features: [

    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [

  return (
    <>
      <Head>
        <title>Edge Computing Orchestration - Zion Tech Group</title>

        <meta name="description" content="Transform your business with edge computing orchestration. Reduce latency, cut costs, and enable real-time processing with our advanced edge computing platform." />
        <meta name="keywords" content="edge computing, IoT management, edge orchestration, real-time processing, distributed computing, Zion Tech Group" />
        <meta property="og:title" content="Edge Computing Orchestration - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with edge computing orchestration. Reduce latency, cut costs, and enable real-time processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/edge-computing-orchestration" />
      </Head>
      <EnhancedNavigation />

          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Edge Computing
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                {" "}Orchestration
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">

              cuts bandwidth costs, and enables real-time processing for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today

              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo

            </div>
          </motion.div>
        </div>
      </section>

              <motion.div
                key={feature.title}
            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>;
              Powerful Edge Computing Features;
            </h2>;
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>;
              Everything you need to deploy, manage, and optimize edge computing;
              infrastructure.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (;
              <motion&& motion.div
                key={feature && feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

              <motion.div
                key={useCase.industry}
            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>;
              Industry Applications;
            </h2>;
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>;
              See how businesses across different industries are leveraging edge;
              computing to transform their operations.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
                key={useCase && useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >

                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (

                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started

              </motion.div>

          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the edge computing revolution and transform your business with real-time processing capabilities.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
</a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo

            </div>
          </motion.div>
        </div>
      </section>
