import Head from 'next/head';

export default function Docs() {
  const sections = [
    {
      title: "Getting Started",
      description: "Quick start guide and basic setup",
      articles: [
        "Installation Guide",
        "Configuration",
        "First Steps",
        "Common Issues"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      articles: [
        "Authentication",
        "Endpoints",
        "Rate Limits",
        "Error Handling"
      ]
    },
    {
      title: "AI Services",
      description: "AI-powered features and capabilities",
      articles: [
        "Content Generation",
        "Data Analysis",
        "Predictive Modeling",
        "Natural Language Processing"
      ]
    },
    {
      title: "Integration",
      description: "Integrate with your existing systems",
      articles: [
        "Webhooks",
        "SDKs",
        "Third-party Integrations",
        "Custom Solutions"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for our AI and technology services. Get started quickly with our guides and API references." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know to get started with our AI and technology services. 
                From quick start guides to detailed API references.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-200">
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-gray-400 mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                        {article} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/30 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Contact Support
                </button>
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
