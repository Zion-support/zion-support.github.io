import Head from 'next/head';
import Link from 'next/link';

export default function Cookies() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com'
  };

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Enable basic website functionality, security, and user authentication.",
      examples: [
        "Session management cookies",
        "Security and authentication cookies",
        "Load balancing cookies",
        "User interface customization cookies"
      ],
      retention: "Session or up to 1 year"
    },
    {
      type: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      purpose: "Analyze website traffic, user behavior, and improve website performance.",
      examples: [
        "Google Analytics cookies",
        "Heat mapping cookies",
        "A/B testing cookies",
        "Performance monitoring cookies"
      ],
      retention: "Up to 2 years"
    },
    {
      type: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as videos and live chat.",
      purpose: "Provide enhanced features and personalization options.",
      examples: [
        "Language preference cookies",
        "Video player cookies",
        "Chat widget cookies",
        "Social media integration cookies"
      ],
      retention: "Up to 1 year"
    },
    {
      type: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Deliver personalized advertisements and measure campaign effectiveness.",
      examples: [
        "Advertising network cookies",
        "Social media advertising cookies",
        "Retargeting cookies",
        "Conversion tracking cookies"
      ],
      retention: "Up to 1 year"
    }
  ];

  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to enhance your browsing experience and improve our services." />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Head>
      
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies to enhance your browsing experience and improve our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-8">
                {cookieTypes.map((cookieType, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{cookieType.type}</h3>
                    <p className="text-gray-600 mb-4">{cookieType.description}</p>
                    <p className="text-gray-600 mb-4"><strong>Purpose:</strong> {cookieType.purpose}</p>
                    <div className="mb-4">
                      <strong className="text-gray-900">Examples:</strong>
                      <ul className="list-disc list-inside mt-2 text-gray-600">
                        {cookieType.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex}>{example}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-gray-600"><strong>Retention:</strong> {cookieType.retention}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Managing Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 mb-8">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies can 
                impact your user experience and parts of our website may no longer be fully accessible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-6">
                Most browsers allow you to refuse cookies or delete them. You can usually find these settings in the 
                options or preferences menu of your browser.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Consent</h3>
              <p className="text-gray-600 mb-6">
                When you first visit our website, you'll see a cookie consent banner. You can choose which types of 
                cookies you want to allow. You can change your preferences at any time by clicking the cookie settings 
                link in our website footer.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> {contact.phone}</p>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> {contact.email}</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> {contact.address}</p>
                <p className="text-gray-600"><strong>Website:</strong> {contact.site}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}