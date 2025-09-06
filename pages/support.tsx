import Head from 'next/head';

export default function Support() {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: "📚",
      action: "View Docs"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get help",
      icon: "💬",
      action: "Join Forum"
    },
    {
      title: "Live Chat",
      description: "Get instant support from our team",
      icon: "💬",
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: "📧",
      action: "Send Email"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with your services?",
      answer: "Simply contact us through our contact form or call us directly. We'll schedule a consultation to understand your needs."
    },
    {
      question: "What is your response time for support requests?",
      answer: "We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent matters."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for our Enterprise customers. Standard support is available during business hours."
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! We offer free demos to showcase our solutions. Contact us to schedule a personalized demonstration."
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and technology services. Documentation, community, and direct support options." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Choose the support option that works best for you.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {option.title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {option.description}
                </p>
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  {option.action}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-800/50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
