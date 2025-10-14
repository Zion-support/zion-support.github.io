import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered AI and IT solutions"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services"
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "50+",
      label: "Micro SAAS Apps",
      description: "Ready-to-use business applications"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>ContentStatistics - Zion Tech Group</title>
        <meta name="description" content="Professional contentstatistics services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
ContentStatistics
          </h1>468
          <p className="text-xl text-gray-600 mb-8">
            Professional contentstatistics solutions tailored to your business needs.
          </p>568
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>881
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge contentstatistics solutions.
              </p>1007
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1258
              <p className="text-green-700">
                Tailored contentstatistics implementations for your specific requirements.
              </p>1390
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1648
              <p className="text-purple-700">
                Round-the-clock support for all your contentstatistics needs.
              </p>1772
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1984
          </div>
        </div>
      </div>
    </section>
  );
}

