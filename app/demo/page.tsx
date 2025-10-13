<<<<<<< HEAD
  );
};

export default DemoPage;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo List */}
              <div className="space-y-6">"
                <h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>
                {demos.map((demo) => (
                  <div;
                    key={demo.id}
                    className={`cyber-card p-6 cursor-pointer transition-all ${
                      selectedDemo === demo.id ? 'ring-2 ring-cyan-500' : '
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="flex items-start justify-between">"
                      <div className="flex-1">"
                        <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>"
                        <p className="text-gray-300 mb-4">{demo.description}</p>"
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">"
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ml-4">"
                        <Play className="w-6 h-6 text-cyan-400" />
                      </div>
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8">"
                <h3 className="text-2xl font-bold text-white mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title} Demo;
                </h3>
                <div className="bg-gray-800 rounded-lg p-8 mb-6 text-center">"
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Live Demo;
                  </button>
                </div>
                <div className="space-y-4">"
                  <h4 className="text-lg font-semibold text-white">What you'll see:</h4>"'
                  <ul className="space-y-2">
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">"
                        <Star className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>"
            <p className="text-xl text-gray-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo;
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">"
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Sales;
              </button>
            </div>
          </div>
    </>
);
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
import React from 'react';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Demo</h1>
        <p className="text-gray-300 text-lg">
          This page is under development. Check back soon for our demo content.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
