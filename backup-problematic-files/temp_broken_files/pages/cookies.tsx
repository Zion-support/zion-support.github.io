import React from 'react',;
import SEO from '../components/SEO',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
;
export default function CookiesPage() {;
  return (;
    <UltraAdvancedFuturisticBackground>;
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />;
      <div className="container mx-auto px-4 py-24 text-white">;
        <div className="max-w-3xl mx-auto space-y-6">;
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>;
          <p className="text-gray-300">We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>;
          <ul className="list-disc list-inside text-gray-300 space-y-1">;
            <li>Purpose:performance and security</li>;
            <li>Retention:session or short‑term</li>;
            <li>Opt‑out:browser settings and extensions</li>;
          </ul>;
          <p className="text-gray-400 text-sm">Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
}import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-blue-100">
                  Learn about how we use cookies and similar technologies to enhance your experience.
                </p>
                <p className="text-sm text-gray-400">Last updated: January 2025</p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>

                <h2 className="text-3xl font-bold mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>

                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our cookie policy, please contact us:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
 <li>Purpose: performance and security</li> <li>Retention: session or short‑term</li> <li>Opt‑out: browser settings and extensions</li> </ul> <p className="text-gray-400 text-sm" >Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com" >kleber@ziontechgroup.com</Link></p> </div> </div> </UltraAdvancedFuturisticBackground> 
