import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://ziontechgroup.com/terms"
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-gray-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                <p>
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
                <p>
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:underline">
                    legal@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
