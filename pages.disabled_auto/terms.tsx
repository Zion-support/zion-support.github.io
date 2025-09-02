import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const TermsPage: NextPage = () => {
  const keyTerms = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Service Agreement',
      description: 'These terms govern your use of our technology services and solutions. By using our services, you agree to be bound by these terms.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Legal Compliance',
      description: 'All services are provided in compliance with applicable laws and regulations. We maintain the highest standards of legal and ethical conduct.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'We are committed to protecting your data and maintaining confidentiality. Our security measures meet industry standards.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Limitation of Liability',
      description: 'Our liability is limited as outlined in these terms. We provide services with reasonable care and skill.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'We stand behind our work and provide warranties as specified in individual service agreements.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Relationship',
      description: 'We value our client relationships and work to resolve any disputes fairly and professionally.'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms of service for Zion Tech Group. Understand your rights and responsibilities when using our technology services and solutions."
      keywords="terms of service, legal terms, service agreement, user agreement, terms and conditions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            These terms govern your use of our technology services and solutions.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important aspects of our service agreement and your rights as a client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using the services provided by Zion Tech Group ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">2. Description of Services</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides technology solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Micro SaaS application development and hosting</li>
              <li>IT services including cloud migration and infrastructure management</li>
              <li>AI and machine learning solutions</li>
              <li>Web and mobile application development</li>
              <li>Consulting and technical support services</li>
              <li>Data analytics and business intelligence solutions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">3. User Accounts and Registration</h2>
            <p className="text-gray-600 mb-6">
              To access certain services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">4. Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms vary by service and are specified in individual service agreements. General terms include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Fees are due as specified in your service agreement</li>
              <li>Late payments may incur additional charges</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>We reserve the right to suspend services for non-payment</li>
              <li>Prices are subject to change with 30 days notice</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">5. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              Intellectual property ownership is determined by individual service agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>You retain ownership of your existing intellectual property</li>
              <li>We retain ownership of our proprietary technologies and methodologies</li>
              <li>Work product ownership is specified in individual agreements</li>
              <li>You grant us necessary licenses to provide services</li>
              <li>We respect third-party intellectual property rights</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">6. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              Both parties agree to maintain confidentiality of sensitive information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Confidential information includes business plans, technical data, and proprietary information</li>
              <li>Information must be marked as confidential or reasonably identifiable as such</li>
              <li>Confidentiality obligations survive termination of services</li>
              <li>Exceptions include publicly available information and independently developed information</li>
              <li>Disclosure may be required by law or court order</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">7. Service Level Agreements</h2>
            <p className="text-gray-600 mb-6">
              Service level commitments are specified in individual service agreements and may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Uptime guarantees and availability targets</li>
              <li>Response times for support requests</li>
              <li>Performance benchmarks and metrics</li>
              <li>Remedies for service level failures</li>
              <li>Exclusions for planned maintenance and force majeure events</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Our total liability is limited to the amount paid for services in the 12 months preceding the claim</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not liable for loss of profits, data, or business opportunities</li>
              <li>These limitations apply regardless of the legal theory of liability</li>
              <li>Some jurisdictions may not allow these limitations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">9. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold us harmless from claims arising from:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Your use of our services in violation of these terms</li>
              <li>Your violation of applicable laws or regulations</li>
              <li>Your infringement of third-party rights</li>
              <li>Your provision of inaccurate or misleading information</li>
              <li>Your failure to comply with service agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">10. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate services as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>With notice as specified in individual service agreements</li>
              <li>Immediately for material breach of these terms</li>
              <li>Upon non-payment of fees after notice and cure period</li>
              <li>For convenience with appropriate notice and transition assistance</li>
              <li>Termination does not relieve obligations accrued before termination</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">11. Data Protection and Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our data practices are governed by our Privacy Policy, which is incorporated by reference. We:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Comply with applicable data protection laws</li>
              <li>Implement appropriate security measures</li>
              <li>Process data only as necessary for service provision</li>
              <li>Provide data subject rights as required by law</li>
              <li>Maintain data processing records and documentation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">12. Force Majeure</h2>
            <p className="text-gray-600 mb-6">
              We are not liable for delays or failures due to circumstances beyond our reasonable control, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Natural disasters and extreme weather events</li>
              <li>Government actions and regulatory changes</li>
              <li>Internet outages and infrastructure failures</li>
              <li>Cybersecurity incidents and attacks</li>
              <li>Pandemic or public health emergencies</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">13. Governing Law and Disputes</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by the laws of Delaware, United States. Disputes will be resolved through:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Good faith negotiations between the parties</li>
              <li>Mediation if negotiations fail</li>
              <li>Binding arbitration if mediation fails</li>
              <li>Courts of competent jurisdiction in Delaware</li>
              <li>Each party bears their own legal costs unless otherwise ordered</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">14. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We may modify these terms at any time by:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Posting updated terms on our website</li>
              <li>Providing notice via email or other communication</li>
              <li>Giving reasonable notice before changes take effect</li>
              <li>Continuing to use services constitutes acceptance of changes</li>
              <li>You may terminate if you disagree with material changes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">15. Severability</h2>
            <p className="text-gray-600 mb-6">
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">16. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsPage;