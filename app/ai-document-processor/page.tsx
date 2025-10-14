import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Page() {
  return (
    <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Learn more about page" />
      </Helmet>"
      <div className="container mx-auto px-4 py-16></div>"
        <div className="text-center></div>"
          <h1 className="text-4xl font-bold text-white mb-4>Page</h1>"
          <p className="text-gray-300 text-xl mb-8>Learn more about page</p>"
          <div className="max-w-4xl mx-auto></div>"
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700></div>"
              <h2 className="text-2xl font-semibold text-white mb-4>Coming Soon</h2>"
              <p className="text-gray-300 mb-6>"
                This page is currently under development. We're working hard to bring you the best experience.
              </p>"
              <div className="flex justify-center space-x-4></div>"
                <a "
                  href="/" "
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home;
                </a>
                <a "
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Automate Your Documents Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI document processor to streamline their operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
