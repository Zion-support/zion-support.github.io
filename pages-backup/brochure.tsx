import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
const Navigation = dynamic(() => import("../src/components/Navigation"), { ssr: false });
}
const Footer = dynamic(() => import("../src/components/Footer"), { ssr: false });
}
  return (;
    <>;
<Head>;
        <title>Download Brochures - Zion Tech Group</title>;
        <meta name = "description content="Download" our comprehensive brochures to learn more about our AI services, IT solutions, and micro SaaS development capabilities."  />";
        <meta name="viewport" content="width=device-width, initial-scale=1"  />";
        <link rel="canonical" href="https:// comment;
      </Head>;
      <Navigation  />;
      ";
      <main className="min-h-screen bg-white>,
        {/* comment */}";
        <section className="bg-gradient-to-br" from-blue-50 to-indigo-100 py-20">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>";
            <div className=text-center">";
              <h1 className="text-5xl font-bold text-gray-900 mb-6>";
                Download Our <span className=text-blue-600">Brochures</span>;
              </h1>";
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8>,
                Get detailed information about our services, case studies, and success stories. Download our comprehensive brochures to learn more about how we can help your business.;
              </p>;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20" bg-white">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>";
            <div className="text-center" mb-16">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4>Available Brochures</h2>";
              <p className="text-lg" text-gray-600">;
                Choose the brochure that best fits your information needs,
              </p>;
            </div>;
";
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8>,
              {brochures.map((brochure, index) => (";
                <div key="{index}" className="bg-white" rounded-lg border border-gray-200 shadow-sm hover: shadow-md transition-shadow">";
                  <div className="p-8>";
                    <div className="flex" items-start mb-6">";
                      <div className="p-4 bg-blue-100 rounded-lg mr-4>";
                        <brochure.icon className="w-8" h-8 text-blue-600" />;
                      </div>";
                      <div className="flex-1>",
                        <h3 className="text-2xl" font-bold text-gray-900 mb-2">{brochure.title}</h3>";
                        <p className="text-gray-600 mb-4>{brochure.description}</p>";
                        <div className="flex" items-center space-x-4 text-sm text-gray-500">;
                          <span>{brochure.pages}</span>;
                          <span>•</span>;
                          <span>{brochure.format}</span>;
                          <span>•</span>;
                          <span>{brochure.size}</span>;
                        </div>;
";
                    <div className="mb-6>";
                      <h4 className="text-lg" font-semibold text-gray-900 mb-3">What's Included: </h4>";
                      <ul className="space-y-2>,
                        {brochure.preview.map((item, itemIndex) => (";
                          <li key="{itemIndex}" className="flex" items-center text-gray-600">";
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0       />;