import Head from 'next/head';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "AI-Powered E-commerce Platform",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Needed to increase conversion rates and personalize customer experience",
      solution: "Implemented AI recommendation engine and dynamic pricing system",
      results: ["40% increase in conversion rates", "25% boost in average order value", "60% improvement in customer satisfaction"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Required real-time analysis of patient data for better treatment outcomes",
      solution: "Built comprehensive data analytics platform with predictive modeling",
      results: ["50% faster diagnosis times", "30% reduction in readmission rates", "95% data accuracy improvement"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Financial Risk Management System",
      client: "SecureBank Corp",
      industry: "Finance",
      challenge: "Needed advanced fraud detection and risk assessment capabilities",
      solution: "Developed AI-powered risk management system with real-time monitoring",
      results: ["80% reduction in false positives", "45% decrease in fraud incidents", "99.9% system uptime"],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses achieve their goals with AI and technology solutions." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results 
                with our AI and technology solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400">Case Study Image</span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{study.industry}</span>
                      <h2 className="text-3xl font-bold mt-4 mb-2">{study.title}</h2>
                      <p className="text-gray-400 text-lg">{study.client}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
