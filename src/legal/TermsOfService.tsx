import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-zion-slate-light text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-6 text-zion-slate-light">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Zion Tech Group platform, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-lg leading-relaxed">
              The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-lg leading-relaxed">
              In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Revisions and Errata</h2>
            <p className="text-lg leading-relaxed">
              The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current.
            The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Site Terms of Use Modifications</h2>
            <p className="text-lg leading-relaxed">
              Zion Tech Group may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p className="text-lg leading-relaxed">
              Any claim relating to Zion Tech Group's website shall be governed by the laws of the jurisdiction in which Zion Tech Group operates without regard to its conflict of law provisions.
            </p>
          </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:underline">
              legal@ziontechgroup.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}