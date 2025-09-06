<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail, Target, BarChart3, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIAutonomousMarketingPlatform() {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Marketing Platform - Zion Tech Group</title>
        <meta name="description" content="Fully autonomous marketing platform powered by AI for automated campaign management, audience targeting, and performance optimization." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Marketing Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your marketing with fully autonomous AI systems that 
                manage campaigns, optimize targeting, and maximize ROI without human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Marketing Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered marketing solutions for complete campaign automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Target className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Targeting</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered audience segmentation and targeting that automatically 
                  identifies and reaches your most valuable customers.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Dynamic segmentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Behavioral analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Predictive targeting
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-blue-400">
                  Starting at $3,500/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <BarChart3 className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Campaign Optimization</h3>
                <p className="text-gray-300 mb-6">
                  Continuous optimization of marketing campaigns using machine learning 
                  algorithms that improve performance in real-time.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Real-time optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    A/B testing automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Performance analytics
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-green-400">
                  Starting at $4,200/month
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Users className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Customer Journey Automation</h3>
                <p className="text-gray-300 mb-6">
                  End-to-end customer journey management with personalized experiences 
                  and automated touchpoints across all channels.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Journey mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Personalization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Multi-channel coordination
                  </li>
                </ul>
                <div className="mt-6 text-2xl font-bold text-purple-400">
                  Starting at $5,800/month
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your marketing automation needs 
                and get a comprehensive AI solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +1 302 464 0950
                </Link>
                <Link
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  kleber@ziontechgroup.com
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}
export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />
}
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
return (getSlugStaticProps as any)({ params: { slug: 'ai - autonomous - marketing - platform' } });
}
export default /**
 * AIAutonomousMarketingPlatform - Function description
 */
function AIAutonomousMarketingPlatform() {
return <ServicePage {...props} />;
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
