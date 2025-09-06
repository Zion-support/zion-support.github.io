import Head from 'next/head';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models."
    },
    {
      title: "Full Stack Developer",
      department: "Engineering", 
      location: "New York, NY",
      type: "Full-time",
      description: "Build scalable web applications using modern technologies and frameworks."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time", 
      description: "Drive product strategy and roadmap for our AI-powered platform."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure and deployment pipelines for our services."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible remote work options",
    "Professional development budget",
    "Unlimited PTO",
    "Top-tier equipment and tools"
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of AI and technology. Explore open positions at Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Help us build the future of AI and technology. We're looking for passionate individuals 
                who want to make a real impact.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{position.type}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <span>{position.department}</span>
                      <span className="mx-2">•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <button className="text-blue-400 hover:text-blue-300 font-medium">Apply Now →</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                  <p className="text-gray-300">Work on cutting-edge AI and technology projects that push the boundaries of what's possible.</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                  <p className="text-gray-300">Continuous learning and development opportunities to advance your career.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Great Benefits</h3>
                  <ul className="text-gray-300 space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
