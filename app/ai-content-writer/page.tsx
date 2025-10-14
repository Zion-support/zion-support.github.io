import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone } from "lucide-react";
import Footer from "../components/Footer";

const AIContentWriterPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI-powered content writing solutions from Zion Tech Group." />
        <meta name="keywords" content="AI content writer, content creation, automated writing, SEO content" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10"></div>
            <div className="container mx-auto px-4 py-20">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-6 neon-text">
                  AI Content Writer
                </h1>
                <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
                  Transform your content marketing with our advanced AI-powered writing solutions. 
                  Create engaging, SEO-optimized content at scale.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Content Marketing?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our AI content writer help you create compelling, SEO-optimized content 
                that engages your audience and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;