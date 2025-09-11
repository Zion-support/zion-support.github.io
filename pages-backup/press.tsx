import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
  return (;
    <>;
<Head>;
        <title>Press - Zion Tech Group</title>";
        <meta name="description" content="Latest news, press releases, and media coverage about Zion Tech Group. Stay updated on our innovations and achievements."  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />;
      </Head>;
      ";
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;
        {/* comment */}";
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">";
            <div className="text-center">";
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">;
                Press & Media,
              </h1>";
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">,
                Stay updated with the latest news, announcements, and achievements from Zion Tech Group.;
              </p>";
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">";
                <Link href="/contact">";
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">;
                    Media Inquiries";
                    <ArrowRight className="w-5 h-5 ml-2 inline"  />;
                  </button>;
                </Link>";
                <a href="mailto:press@ziontechgroup.com" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">;
                  press@ziontechgroup.com,
                </a>;
              </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 sm: py-32">";
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className="text-center mb-16">";
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">;
                Latest Press Releases,
              </h2>";
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">;
                Official announcements and company news,
              </p>;
            </div>;
            ";
            <div className="space-y-8">,
              {pressReleases.map((release, index) => (";
                <div key="{index}" className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">";
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">";
                    <div className="flex-1">";
                      <div className="flex items-center space-x-4 mb-3">";
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">,