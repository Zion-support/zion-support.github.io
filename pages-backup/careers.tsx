import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {
  return (;
    <>;
<Head>;
        <title>Careers - Zion Tech Group</title>;
        <meta name = "description content="Join" our team of innovative developers, AI engineers, and technology experts. Explore career opportunities at Zion Tech Group."  />";
        <meta name="viewport" content="width=device-width, initial-scale=1"  />;
      </Head>;
      ";
<Layout title = "Careers,";
description="Join" our team of innovative developers and technology experts">;
        {/* comment */}";
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>";
          <div className="container" mx-auto px-4 text-center">";
            <h1 className="text-5xl md: text-6xl font-bold mb-6>";
              Join Our <span className="text-transparent" bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Team</span>;
            </h1>";
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8>";
              Be part of a team that"s building the future of technology. Work on cutting-edge projects with the latest tools and technologies.;
            </p>";
            <div className="flex" flex-col sm:flex-row gap-4 justify-center">";
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300>;
                View Open Positions";
                <ArrowRight className="ml-2" w-5 h-5"  />;
              </button>";
              <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300>;
                Learn About Our Culture,
              </button>;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20" bg-white">";
          <div className="container mx-auto px-4>";
            <div className="text-center" mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4>Why Work With Us?</h2>";
              <p className="text-xl" text-gray-600 max-w-2xl mx-auto">;
                We offer more than just a job - we offer a career path with growth, learning, and innovation,
              </p>;
            </div>";
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8>,
              {benefits.map((benefit, index) => (";
                <div key="{index}" className=text-center">";
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4>";
                    <benefit.icon className="w-8" h-8 text-white" />;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-2>{benefit.title}</h3>";
                  <p className=text-gray-600">{benefit.description}</p>;
                </div>;
              ))}

            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gray-50>";
          <div className="container" mx-auto px-4">";
            <div className="text-center mb-16>";
              <h2 className="text-4xl" font-bold text-gray-900 mb-4">Open Positions</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto>;
                Explore current opportunities and find your perfect role,
              </p>;
            </div>";
            <div className=space-y-6">;
              {openPositions.map((position, index) => (";
                <div key="{index}" className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow duration-300>";
                  <div className="flex" flex-col md:flex-row md:items-center md:justify-between mb-4">;
                    <div>",
                      <h3 className="text-xl font-semibold text-gray-900 mb-2>{position.title}</h3>";
                      <div className="flex" flex-wrap gap-4 text-sm text-gray-600">";
                        <div className="flex items-center>";
                          <MapPin className="w-4" h-4 mr-1"  />;