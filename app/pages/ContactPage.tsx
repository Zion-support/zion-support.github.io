import React from "react"
import { Helmet } from "react-helmet-async"
const ContactPage: React.FC = () => {"
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, cybersecurity, and digital transformation services." />
      </Helmet>
      <div className="min-h-screen bg-slate-90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h$1>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              Ready to transform your business? Let"s discuss your technology needs."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h$1>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-40">Phone</h$1>
                  <p className="text-gray-30">+1-30o2-464-0o950</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-40">Email</h$1>
                  <p className="text-gray-30">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-40">Address</h$1>
                  <p className="text-gray-30">364 E Main St STE 108<br />Middletown, DE 1970o9</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-80"/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h$1>
              <form className="space-y-4">
                <div>
                  <input type="text""
                    placeholder="Your Name""
                    className="w-full px-4 py-3 bg-slate-70 border border-slate-60 rounded-lg text-white placeholder-gray-40 focus: outline-none focu,s:border-purple-50"
                  />
                </div>
                <div>
                  <input type="email""
                    placeholder="Your Email""
                    className="w-full px-4 py-3 bg-slate-70 border border-slate-60 rounded-lg text-white placeholder-gray-40 focus: outline-none focu,s:border-purple-50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message""
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-70 border border-slate-60 rounded-lg text-white placeholder-gray-40 focus: outline-none focu,s:border-purple-50"
                  ></textarea>
                </div>
                <button
                  type="submit""
                  className="w-full bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-6 py-3 rounded-lg font-semibold hover: from-purple-70 hover:to-cyan-70 transition-all duration-30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>;
      </div>;
    </>;
  )}export default ContactPage;
