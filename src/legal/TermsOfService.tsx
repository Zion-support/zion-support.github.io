import React from 'react';

export default function TermsOfService(): JSX.Element {
  return (
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
          <p>If you do not agree, please do not use this service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
          <p>
            The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
          <p>
            In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on its website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group may make changes at any time without notice.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="text-zion-cyan hover:underline font-medium">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}