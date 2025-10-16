import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone } from "lucide-react";

const AIContentWriterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta
          name="description"
          content="AI Content Writer - Zion Tech Group"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            AI Content Writer
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            This page is under construction. Please check back later.
          </p>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Content Marketing?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our AI content writer help you create compelling,
                SEO-optimized content that engages your audience and drives
                business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Start Creating Content
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIContentWriterPage;
