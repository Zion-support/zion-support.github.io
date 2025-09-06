import Head from 'next/head';

export default function Solutions() {
  const solutions = [
    {
      title: "AI-Powered Business Automation",
      description: "Streamline your operations with intelligent automation solutions that adapt to your business needs.",
      features: ["Process Automation", "Intelligent Workflows", "Predictive Analytics", "Real-time Monitoring"],
      icon: "🤖"
    },
    {
      title: "Cloud Infrastructure Solutions",
      description: "Scalable, secure, and reliable cloud infrastructure tailored to your organization's requirements.",
      features: ["Cloud Migration", "Hybrid Cloud", "Security & Compliance", "24/7 Support"],
      icon: "☁️"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning.",
      features: ["Data Visualization", "Predictive Modeling", "Real-time Dashboards", "Custom Reports"],
      icon: "📊"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with comprehensive security solutions and threat monitoring.",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Incident Response"],
      icon: "🔒"
    },
    {
      title: "Mobile App Development",
      description: "Create powerful mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      icon: "📱"
    },
    {
      title: "Micro SaaS Platforms",
      description: "Build and deploy specialized software solutions that solve specific business challenges.",
      features: ["Rapid Development", "Scalable Architecture", "API Integration", "Custom Features"],
      icon: "⚡"
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions to transform your business. AI, cloud, security, and more." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-200">
                  {solution.title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/30 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve your goals.
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
