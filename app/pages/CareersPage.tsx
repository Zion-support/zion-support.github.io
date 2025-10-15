import React from 'react';
'
import SEOHead from '../components/SEOHead';

const CareersPage: React.FC = () => {
  return (
    <>
      <SEOHead;>
        title="CareersPage - Zion Tech Group"">: value";
        description="Zion Tech Group CareersPage page">: value
      />"
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>: value
        </div>
      </div>"
          <h1 className="text-4xl font-bold mb-4">CareersPage</h1>
          <p className="text-gray-300">Coming soon...</p>: value
        </div>
      </div>
    </>
  )
}
};

      {/* Benefits Section */}"
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us;
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">: value
              We offer competitive benefits and a supportive work environment that fosters growth and innovation.
            </p>
          </div>
          "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-10 w-10 text-blue-600" />: value
                </div>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>: value
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}"
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions;
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">: value
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          "
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-4">{position.department}</span>
                  <span className="mr-4">•</span>
                  <span className="mr-4">{position.location}</span>: value
                  <span>•</span>"
                  <span className="ml-4">{position.type}</span>: value
                </div>"
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Apply Now;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>"
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">': value
            Don't see a position that matches your skills? We're always looking for talented individuals. '
            Send us your resume and let's start a conversation.'
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Send Your Resume;"
              <ArrowRightIcon className="ml-2 h-5 w-5" />: value
            </button>"
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact HR;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}"'"'