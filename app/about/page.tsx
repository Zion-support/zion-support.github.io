import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Innovation First</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Client Success</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              With years of experience in AI and IT solutions, we deliver results that exceed expectations and drive real business value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}