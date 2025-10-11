'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const lastUpdated = 'December 2024';

  const sections = const sections = const sections = [
=======
  const sections = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.'
      ]
    },
    {
      icon: Users,
      title: 'Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.'
      ]
    },
    {
      icon: Shield,
      title: 'Disclaimer',
      content: [
        'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, Zion Tech Group does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Limitations',
      content: [
        'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group\'s website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
      ]
<<<<<<< HEAD
    },
    {
      icon: Shield,
      title: 'Service Terms',
      content: [
        'Our AI and IT services are provided subject to separate service agreements that will be executed at the time of engagement.',
        'Service availability is subject to maintenance windows and technical requirements.',
        'We reserve the right to modify or discontinue services with reasonable notice.',
        'Client data security and confidentiality are maintained in accordance with industry best practices and applicable regulations.'
      ];
    };
  ];

  const additionalSections = const additionalSections = const additionalSections = [
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on Zion Tech Group\'s website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice. However, Zion Tech Group does not make any commitment to update the materials.'
    },
    {
      title: 'Links',
      content: 'Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: 'Modifications',
      content: 'Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: 'Governing Law',;
<<<<<<< HEAD;
      icon: Scale,];
=======
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, service marks, trade names, logos, and other intellectual property on this website are the property of Zion Tech Group or its licensors and are protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.'
    },
    {
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.'
    },
    {
      title: 'Prohibited Uses',
      content: 'You may not use our website or services for any unlawful purpose or to solicit others to perform unlawful acts, to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances, to infringe upon or violate our intellectual property rights or the intellectual property rights of others, to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate, to submit false or misleading information, or to upload or transmit viruses or any other type of malicious code.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
  return ()
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website located at 
                ziontechgroup.com (the "Service") operated by Zion Tech Group ("us", "we", or "our").
              </p>
              <p className="text-gray-300 leading-relaxed" /></p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part 
                of these terms, then you may not access the Service.
=======
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Zion Tech Group - Legal Terms</title>
        <meta name="description" content="Read our terms of service and legal terms for using Zion Tech Group's website and services. Understand your rights and obligations." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, website terms, service agreement" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our website and services.
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* Main Sections */}
            <div className="space-y-8" /></div>
              {sections.map((section, index) => ()
                    {section.content.map((item, itemIndex) => ()
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-8" /></div>
              {additionalSections.map((section, index) => ()
              ))}
            </div>

            {/* Service-Specific Terms */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Service-Specific Terms</h2>
              <div className="space-y-6" /></div>
                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI Services</h3>
                  <ul className="space-y-2 text-gray-300" /></ul>
                    <li>• AI models and algorithms are provided "as is" and may require customization for specific use cases</li>
                    <li>• Performance metrics and accuracy claims are based on our testing and may vary in production environments</li>
                    <li>• Client data used for AI training is handled in accordance with our privacy policy and data protection standards</li>
                    <li>• AI services may require ongoing maintenance and updates to maintain optimal performance</li>
                  </ul>
                </div>
                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">IT Services</h3>
                  <ul className="space-y-2 text-gray-300" /></ul>
                    <li>• Service level agreements (SLAs) are defined in individual service contracts</li>
                    <li>• Maintenance windows and updates will be scheduled with advance notice when possible</li>
                    <li>• Security measures and compliance requirements are maintained according to industry standards</li>
                    <li>• Backup and disaster recovery procedures are implemented as per service agreements</li>
                  </ul>
                </div>
                <div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Micro SaaS Tools</h3>
                  <ul className="space-y-2 text-gray-300" /></ul>
                    <li>• Subscription terms and pricing are subject to change with 30 days notice</li>
                    <li>• Feature updates and improvements are included in active subscriptions</li>
                    <li>• Data export capabilities are provided for client data portability</li>
                    <li>• Service availability targets are defined in individual service level agreements</li>
                  </ul>
                </div>
=======
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>

<<<<<<< HEAD
            {/* Payment Terms */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  Payment terms for our services are defined in individual service agreements. Generally:
                </p>
                <ul className="space-y-2 ml-6" /></ul>
                  <li>• Invoices are due within 30 days of receipt unless otherwise specified</li>
                  <li>• Late payments may incur additional charges as specified in service agreements</li>
                  <li>• Services may be suspended for non-payment after appropriate notice periods</li>
                  <li>• Refund policies are outlined in individual service contracts</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8 mt-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-6" /></p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" /></div>
                <div className="flex items-center space-x-3" /></div>
                  <Mail className="w-5 h-5 text-cyan-400" / /></Mail>
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3" /></div>
                  <Phone className="w-5 h-5 text-cyan-400" / /></Phone>
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3" /></div>
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1" / /></Calendar>
                  <div className="text-gray-300" /></div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
=======
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Contact Information
                </h3>
                <p className="text-blue-800">
                  If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com.
                </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're here to help. Contact us if you have any questions about our terms of service.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service for using our AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Read our terms of service for using our AI and IT solutions
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </>
  );
};

<<<<<<< HEAD
export default TermsPage;
=======
export default TermsPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
