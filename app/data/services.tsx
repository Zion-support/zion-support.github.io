import React from "react";";
import { Helmet     } from "react-helmet-async";";

export default function Page() {
  return (
<>    <div className="min-h-screen bg-white"></div>""
      <Helmet></Helmet>
        <title>Services - Zion Tech Group</title>"""
        <meta name="description" content="Professional services by Zion Tech Group." /></meta>""
      </Helmet>"""
      <div className="container mx-auto px-4 py-16"></div>"""
    </>
        <div className="text-center"></div>"""
          <h1 className="text-4xl font-bold text-gray-900 mb-8"></h1>"";
            Services;
          </h1>"""
          <p className="text-xl text-gray-600 mb-8"></p>"";
            Professional solutions tailored to your business needs.
          </p>"""
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"></div>"""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6"></div>"""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Solutions</h3>"""
              <p className="text-blue-700">Our team of experts delivers cutting-edge solutions.</p>""
            </div>"""
            <div className="bg-green-50 border border-green-200 rounded-lg p-6"></div>"""
              <h3 className="text-lg font-semibold text-green-900 mb-2">Custom Implementation</h3>"""
              <p className="text-green-700">Tailored implementations for your specific requirements.</p>""
            </div>"""
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6"></div>"""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">24/7 Support</h3>"""
              <p className="text-purple-700">Round-the-clock support for all your needs.</p>""
            </div>
          </div>"""
          <div className="mt-12"></div>"""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"></button>"";
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>)}
  );
}"""
