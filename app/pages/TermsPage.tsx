<<<<<<< HEAD

import { Helmet }; from 'react-helmet-async';";";
const TermsPage: React.FC = () => {"";";
  const lastUpdated = 'January 1, 2024';";";
;
  const sections = [";"";";
    {"";";
      title: 'Acceptance of Terms';"";";";
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.';'";";";
    };"";";
    {"";";
      title: 'Description of Service';"";";";
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to micro SAAS applications, cloud infrastructure services, mobile development, data analytics, and consulting services. We reserve the right to modify or discontinue the service at any time.';";";
    };"";";
    {"";";
      title: 'User Accounts';"";";";
      content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.';";";
    };"";";
    {"";";
      title: 'Acceptable Use';"";";";
      content: 'You agree not to use the service for any unlawful purpose or any purpose prohibited under this clause. You may not use the service in any manner that could damage, disable, overburden, or impair any server, or the network(s) connected to any server.';";";
    };"";";
    {"";";
      title: 'Intellectual Property Rights';"";";";
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.';";";
    };"";";
    {"";";
      title: 'Privacy Policy';"";";";
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.';";";
    };"";";
    {"";";
      title: 'Payment Terms';"";";";
      content: 'Payment for services is due as specified in your service agreement. We reserve the right to change our fees at any time. All fees are non-refundable unless otherwise specified in writing.';";";
    };"";";
    {"";";
      title: 'Service Level Agreement';"";";";
      content: 'We strive to provide reliable services with 99.9% uptime. However, we do not guarantee uninterrupted service and are not liable for any downtime or service interruptions.';";";
    };"";";
    {"";";
      title: 'Limitation of Liability';"";";";
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.';";";
    };"";";
    {"";";
      title: 'Indemnification';"";";";
      content: 'You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees).';'";";";
    };"";";
    {"";";
      title: 'Termination';"";";";
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.';";";
    };"";";
    {"";";
      title: 'Governing Law';"";";";
      content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.';";";
    };"";";
    {"";";
      title: 'Changes to Terms';"";";";
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.';";";
    };"";";
    {"";";
      title: 'Contact Information';"";";";
      content: 'If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com or call us at +1 302 464 0950.';";";
    };
  ];
;
  const keyPoints = [";"";";
    {"";";
      icon: Shield;"";";
      title: 'Service Availability';"";";";
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service';";";
    };"";";
    {"";";
      icon: Users;"";";
      title: 'User Responsibility';"";";";
      description: 'Users are responsible for maintaining account security and compliance';";";
    };"";";
    {"";";
      icon: Scale;"";";
      title: 'Intellectual Property';"";";";
      description: 'All service content and features remain our exclusive property';";";
    };"";";
    {"";";
      icon: FileText;"";";
      title: 'Payment Terms';"";";";
      description: 'Fees are non-refundable unless otherwise specified in writing';";";
    };
  ];
;
  const prohibitedUses = [";"";";
    'Violating any applicable laws or regulations';"";";";
    'Transmitting harmful or malicious code';"";";";
    'Attempting to gain unauthorized access to our systems';"";";";
    'Interfering with the proper functioning of the service';"";";";
    'Using the service for any unlawful or prohibited purpose';"";";";
    'Impersonating another person or entity';"";";";
    'Collecting user information without consent';";";
  ];
      </section>
<<<<<<< HEAD
=======
import React from 'react';
const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {;
      title: 'Acceptance of Terms';
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'";
    },
    {
      title: 'Description of Service';
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to micro SAAS applications, cloud infrastructure services, mobile development, data analytics, and consulting services. We reserve the right to modify or discontinue the service at any time.'";
    },
    {
      title: 'User Accounts';
      content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.'";
    },
    {
      title: 'Acceptable Use';
      content: 'You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws).'";
    },
    {
      title: 'Privacy Policy';
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'";
    },
    {
      title: 'Intellectual Property Rights';
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'";
    },
    {
      title: 'Termination';
      content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'";
    },
    {
      title: 'Disclaimer';
      content: 'The information on this service is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our service and the use of this service.'";
    },
    {
      title: 'Governing Law';
      content: 'These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.'";
    },
    {
      title: 'Changes to Terms';
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.'";
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name ="description" content="Terms of Service for Zion Tech Group - AI and IT Solutions" />";
      </Helmet>
      
      <div className ="min-h-screen bg-slate-900 text-white">";
        <div className ="container mx-auto px-4 py-16">";
          <div className ="max-w-4xl mx-auto">";
            <h1: className ="text-4xl font-bold mb-8 text-center">Terms of Service</h1>";
            <p className ="text-gray-400 text-center mb-12">Last updated: {lastUpdated}</p>";
            
            <div className ="space-y-8">";
              {sections.map((section, index) => (
                <div key ={index} className="bg-slate-800 rounded-lg p-6">";
                  <h2: className ="text-2xl font-semibold mb-4 text-blue-400">";
                    {index + 1}. {section.title}
                  </h2>
                  <p className ="text-gray-300 leading-relaxed">";
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            <div className ="mt-12 text-center">";
              <p className ="text-gray-400">";
                If you have any questions about these Terms of Service, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
  );
};
;
export default TermsPage;
=======
import React from 'react';
import SEOHead from '../components/SEOHead';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="Terms of Service - Zion Tech Group"";
        description="Terms of service for Zion Tech Group. Read our terms and conditions for using our services."";
      />
      <div className ="min-h-screen bg-slate-900 text-white">";
        <div className ="max-w-4xl mx-auto py-20 px-4">";
          <div className ="text-center mb-16">";
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">";
              Terms of Service
            </h1>
            <p className ="text-xl text-gray-300">";
              Last updated: January 1, 2024
            </p>
          </div>

          <div className ="prose prose-invert max-w-none">";
            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Acceptance of Terms</h2>";
              <p className ="text-gray-300 mb-4">";
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by ";
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Description of Service</h2>";
              <p className ="text-gray-300 mb-4">";
                Zion Tech Group provides AI solutions, IT services, cybersecurity, cloud infrastructure, 
                and digital transformation services. Our services include but are not limited to:
              </p>
              <ul className ="list-disc list-inside text-gray-300 space-y-2">";
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>IT consulting and infrastructure management</li>
                <li>Cybersecurity services and threat protection</li>
                <li>Cloud migration and management</li>
                <li>Custom software development</li>
                <li>Digital transformation consulting</li>
              </ul>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">User Responsibilities</h2>";
              <p className ="text-gray-300 mb-4">";
                Users are responsible for:
              </p>
              <ul className ="list-disc list-inside text-gray-300 space-y-2">";
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using our services for illegal or unauthorized purposes</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Service Availability</h2>";
              <p className ="text-gray-300 mb-4">";
                We strive to maintain high service availability but do not guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                with or without notice.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Intellectual Property</h2>";
              <p className ="text-gray-300 mb-4">";
                All content, trademarks, and intellectual property on our website and in our services 
                are owned by Zion Tech Group or our licensors. You may not use, reproduce, or distribute 
                any content without our written permission.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Limitation of Liability</h2>";
              <p className ="text-gray-300 mb-4">";
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, or use, arising out of or relating to your use of our services.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Governing Law</h2>";
              <p className ="text-gray-300 mb-4">";
                These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Changes to Terms</h2>";
              <p className ="text-gray-300 mb-4">";
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the new terms on our website. Your continued use of our 
                services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className ="mb-8">";
              <h2: className ="text-2xl font-bold mb-4">Contact Information</h2>";
              <p className ="text-gray-300 mb-4">";
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className ="bg-slate-800 p-6 rounded-lg">";
                <p className ="text-gray-300">";
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
>>>>>>> cursor/comprehensive-app-audit-and-update-5693
    </>
  );
};

export default TermsPage;
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-604b
>>>>>>> cursor/comprehensive-app-audit-and-update-5693

}