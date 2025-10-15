<<<<<<< HEAD

<<<<<<< HEAD
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading provider of AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
  </Helmet>
);

export default function AboutPage() {

    }
  ]
  return (
    <>

              We are a leading technology company specializing in AI-powered solutions and innovative IT services that transform businesses and drive digital transformation.

            </p>

          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}

        {/* Stats Section */}

                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p: className ="text-lg text-gray-600 max-w-4xl mx-auto">";

                To revolutionize the way businesses operate by providing innovative AI and IT solutions 
                that are not just cutting-edge, but also practical, scalable, and designed to deliver 
                real-world value. We believe technology should empower, not complicate, and our solutions 
                reflect this philosophy in every line of code and every strategic recommendation.
              </p>
            </div>
>>>>>>> main
          </div>
        </div>
      </div>


}))))

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive page solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Page Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
