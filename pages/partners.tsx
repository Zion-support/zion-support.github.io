import Head from 'next/head';

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      description: "Cloud infrastructure and AI services",
      category: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100", 
      description: "Cloud computing and storage solutions",
      category: "Cloud Partner"
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      description: "AI and machine learning platforms",
      category: "AI Partner"
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      description: "Enterprise solutions and consulting",
      category: "Enterprise Partner"
    },
    {
      name: "Salesforce",
      logo: "/api/placeholder/200/100",
      description: "CRM and business automation",
      category: "Business Partner"
    },
    {
      name: "Oracle",
      logo: "/api/placeholder/200/100",
      description: "Database and enterprise software",
      category: "Data Partner"
    }
  ];

  const benefits = [
    "Access to cutting-edge technology",
    "Joint go-to-market opportunities",
    "Technical support and training",
    "Co-marketing and co-selling programs",
    "Priority access to new features",
    "Dedicated partner success manager"
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's technology solutions." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best technology solutions to our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300">
                <div className="w-32 h-16 mx-auto mb-6 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{partner.name}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{partner.category}</p>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partner Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
              <p className="text-gray-300 mb-6">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="space-y-4">
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Apply to Become a Partner
                </button>
                <button className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200">
                  Download Partner Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
