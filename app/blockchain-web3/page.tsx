import React from "react";

const Page = () => {
  return (
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <Link to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Building
                  <ArrowRight className="ml-2 w-5 h-5"
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  )

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      <Helmet >
        <title>Page - Zion Tech Group</title><meta name="description" content="Professional services by Zion Tech Group."
      </Helmet><div className="container mx-auto px-4 py-16"
        <div className="text-center"
          <h1 className="text-4xl font-bold text-white mb-8"
          <p className="text-gray-300 text-lg"
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  ); }
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
  )
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Page</h2>
      <p className="text-gray-300">
        This is a placeholder component for Page.
      </p>
    </div>
  );
};

export default Page;
