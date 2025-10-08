import React from 'react';

const EnterprisePage = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence',
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Enterprise-grade infrastructure that grows with your business',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Empower your organization with our comprehensive enterprise AI and IT solutions
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Transform Your Enterprise?
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterprisePage;