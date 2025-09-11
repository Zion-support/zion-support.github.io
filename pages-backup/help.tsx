import React from "react";
import type { NextPage } from "next";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
const Help: NextPage = () => {;

  const supportOptions = [];
  return (";
<Layout title = "Help & Support - Zion Tech Group" description="Get help and support for all your technology needs with Zion Tech Group.">";
      <div className="min-h-screen bg-gray-50 py-12">";
        <div className="container mx-auto px-4">;
          {/* comment */}";
          <div className="text-center mb-12">";
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              How can we help you?;
            </h1>";
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
              Find answers to common questions or get in touch with our support team,
            </p>;
          </div>;
          {/* comment */}";
          <div className="max-w-2xl mx-auto mb-12">";
            <div className="relative">";
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />";
              <input type="text;
                placeholder="Search for help...;
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"  />;
            </div>;
          {/* comment */}";
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-12">,
            {supportOptions.map((option, index) => (";
              <div key="{index}" className="bg-white p-6 rounded-lg shadow-md hover: shadow-lg transition-shadow">";
                <option.icon className="w-8 h-8 text-blue-600 mb-4" />",
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>";
                <p className="text-gray-600 mb-4">{option.description}</p>";
                <button className="text-blue-600 hover: text-blue-700 font-medium">,