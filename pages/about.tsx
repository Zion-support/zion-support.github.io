import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Users, Award, Target, Heart, Globe, Shield, Zap, CheckCircle, 
  ArrowRight, Star, TrendingUp, Building, Rocket, Lightbulb, Handshake 
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Your data and systems are protected with enterprise-grade security measures.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their unique needs and challenges.'
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Our solutions are designed to maximize efficiency and minimize waste.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions that transform businesses." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, micro SaaS, company values" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              We are a leading technology solutions provider dedicated to transforming 
              businesses through innovative AI, cloud, and micro SaaS solutions.
            </motion.p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
            >
              Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}