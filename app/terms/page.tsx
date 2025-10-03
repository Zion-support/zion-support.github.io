
export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Read the terms and conditions for using Zion Tech Group\'s AI, micro SaaS, and IT services.',
  keywords: 'terms of service, terms and conditions, service agreement, legal terms',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
            <p className="text-gray-600">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              Zion Tech Group provides AI, micro SaaS, and IT services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Artificial Intelligence and Machine Learning solutions</li>
              <li>Micro SaaS platform development and management</li>
              <li>IT consulting and implementation services</li>
              <li>Cloud migration and DevOps solutions</li>
              <li>Cybersecurity and data protection services</li>
              <li>Technical support and maintenance</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use services in compliance with applicable laws and regulations</li>
              <li>Not engage in any illegal or unauthorized activities</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any security breaches</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide continuous service availability, we do not guarantee 
              uninterrupted access to our services. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Perform scheduled maintenance and updates</li>
              <li>Modify or discontinue services with reasonable notice</li>
              <li>Suspend services for security or legal reasons</li>
              <li>Update terms and conditions as needed</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, trademarks, and intellectual property on our platform remain the 
              property of Zion Tech Group or our licensors.
            </p>
            <p className="text-gray-600">
              You may not reproduce, distribute, or create derivative works without explicit 
              written permission.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or downtime</li>
              <li>Third-party actions or content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms for our services are outlined in individual service agreements. 
              Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur additional fees</li>
              <li>Services may be suspended for non-payment</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate service agreements with appropriate notice as specified 
              in individual contracts.
            </p>
            <p className="text-gray-600">
              We reserve the right to terminate services immediately for violations of these terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of 
              Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions regarding these terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@ziontechgroup.com<br />
                <strong>Phone:</strong> +1 302 464 0950<br />
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}