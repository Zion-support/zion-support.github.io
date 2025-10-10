export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']
    }
  ];
  const purposes = [
    {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services'
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services'
    },
    {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features'
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'To protect against fraud and abuse'
    }
  ];
  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];
  return (
    <div className="min-h-screen bg-white"></div>
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-sm text-blue-200"></div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}</div>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>
