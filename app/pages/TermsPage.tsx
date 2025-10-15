
import { Helmet } from 'react-helmet-async',
      const TermsPage: React.FC = () => {",
        "
  const lastUpdated = 'January 1, 2024';
,
      const sections = [",
        "
    {",
        "
      title: 'Acceptance of Terms',",
        "
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.';'
    },",
        "
    {",
        "
      title: 'Description of Service',",
        "
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to micro SAAS applications, cloud infrastructure services, mobile development, data analytics, and consulting services. We reserve the right to modify or discontinue the service at any time.';
    },",
        "
    {",
        "
      title: 'User Accounts',",
        "
      content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.';
    },",
        "
    {",
        "
      title: 'Acceptable Use',",
        "
      content: 'You agree not to use the service for any unlawful purpose or any purpose prohibited under this clause. You may not use the service in any manner that could damage, disable, overburden, or impair any server, or the network(s) connected to any server.';
    },",
        "
    {",
        "
      title: 'Intellectual Property Rights',",
        "
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.';
    },",
        "
    {",
        "
      title: 'Privacy Policy',",
        "
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.';
    },",
        "
    {",
        "
      title: 'Payment Terms',",
        "
      content: 'Payment for services is due as specified in your service agreement. We reserve the right to change our fees at any time. All fees are non-refundable unless otherwise specified in writing.';
    },",
        "
    {",
        "
      title: 'Service Level Agreement',",
        "
      content: 'We strive to provide reliable services with 99.9% uptime. However, we do not guarantee uninterrupted service and are not liable for any downtime or service interruptions.';
    },",
        "
    {",
        "
      title: 'Limitation of Liability',",
        "
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.';
    },",
        "
    {",
        "
      title: 'Indemnification',",
        "
      content: 'You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees).';'
    },",
        "
    {",
        "
      title: 'Termination',",
        "
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.';
    },",
        "
    {",
        "
      title: 'Governing Law',",
        "
      content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.';
    },",
        "
    {",
        "
      title: 'Changes to Terms',",
        "
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.';
    },",
        "
    {",
        "
      title: 'Contact Information',",
        "
      content: 'If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com or call us at +1 302 464 0950.'
    },
    {
  ];
,
      const keyPoints = [",
        "
    {",
        "
      icon: Shield,",
        "
      title: 'Service Availability',",
        "
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service';
    },",
        "
    {",
        "
      icon: Users,",
        "
      title: 'User Responsibility',",
        "
      description: 'Users are responsible for maintaining account security and compliance';
    },",
        "
    {",
        "
      icon: Scale,",
        "
      title: 'Intellectual Property',",
        "
      description: 'All service content and features remain our exclusive property';
    },",
        "
    {",
        "
      icon: FileText,",
        "
      title: 'Payment Terms',",
        "
      description: 'Fees are non-refundable unless otherwise specified in writing'
    },
    {
  ];
,
      const prohibitedUses = [",
        "
    'Violating any applicable laws or regulations',",
        "
    'Transmitting harmful or malicious code',",
        "
    'Attempting to gain unauthorized access to our systems',",
        "
    'Interfering with the proper functioning of the service',",
        "
    'Using the service for any unlawful or prohibited purpose',",
        "
    'Impersonating another person or entity',",
        "
    'Collecting user information without consent';
  ];
<<<<<<< HEAD
,
      return (",
        "
    <>",
        "
      <Helmet>",
        "
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>",
        "
=======
;
  return (";"
    <>";"
      <Helmet>";"
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>";"
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and obligations when using our AI and IT solutions." />";"
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />";"
        <link rel="canonical" href="https://ziontechgroup.com/terms" />",
        "
      </Helmet>",
        "
      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">";"
        <div className="absolute inset-0 overflow-hidden">";"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>";"
<<<<<<< HEAD
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>",
        "
        </div>",
        "
      </section>",
        "
    </>",
        "
      </section>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
  )
    },
    {
,
      export default TermsPage;
=======
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>";"
        </div>";"
      </section>";"
    </>";"
      </section>
    </>
  );
};
;
export default TermsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
