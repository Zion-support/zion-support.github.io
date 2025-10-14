import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ItConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>It consulting - Zion Tech Group</title>
        <meta name="description" content="Professional It consulting solutions and services" />
        <meta name="keywords" content="it, consulting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 0 0 via-purple-9 0 0 to-slate-9 0 0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">It consulting</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-2 0 0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-9 0 0 mb-2  ">Expert Solutions
                </h3>
                <p className="text-blue-7 0 0   ">Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-2 0 0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-9 0 0 mb-2  ">Custom Implementation
                </h3>
                <p className="text-green-7 0 0   ">Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-2 0 0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-9 0 0 mb-2  ">24/7 Support
                </h3>
                <p className="text-purple-7 0 0   ">Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
        </div>
              <div className="bg-green-50 border border-green-2 0 0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-9 0 0 mb-2  ">Custom Implementation
                </h3>
                <p className="text-green-7 0 0   ">Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-2 0 0 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-9 0 0 mb-2  ">24/7 Support
                </h3>
                <p className="text-purple-7 0 0   ">Round-the-clock support for all your needs.
                </p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    
  );
}
export default ItConsultingPage;

              </p>
              </p>