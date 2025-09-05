import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2024
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: kleber@ziontechgroup.com
              <br />
              Phone: +1 302 464 0950
              <br />
              Address: 364 E Main St STE 1008 Middletown DE 19709
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}