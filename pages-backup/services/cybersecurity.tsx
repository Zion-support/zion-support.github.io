import Head from "next/head";
const Component = () => {
import React from "react">;
  return (;
    <>;
<Head>;
        <title>Cybersecurity Services - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive cybersecurity services including security assessment, network protection, data security, and incident response. Protect your business from cyber threats."  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />";
        <link rel="canonical" href="https: // comment;
      </Head>;
      <Navigation  />;
      ";
      <main className="min-h-screen bg-white">,
        {/* comment */}";
        <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="text-center">";
              <div className="flex justify-center mb-6">";
                <div className="p-4 bg-red-100 rounded-full">";
                  <Shield className="w-12 h-12 text-red-600"  />;
                </div>;
              </div>";
              <h1 className="text-5xl font-bold text-gray-900 mb-6">";
                Comprehensive <span className="text-red-600">Cybersecurity</span> Services,
              </h1>";
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">;
                Protect your business from cyber threats with our advanced security solutions. ;
                We provide comprehensive cybersecurity services to keep your data and systems secure.;
              </p>";
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">;
                  Get Security Assessment,
                </Link>";
                <Link href="/solutions" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">;
                  View Solutions,
                </Link>;
              </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-white">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">,
              {stats.map((stat, index) => (";
                <div key="{index}" className="text-center">";
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>";
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>";
                  <div className="text-gray-600">{stat.description}</div>;
                </div>;
              ))}

            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gray-50">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="text-center mb-16">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>";
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive security solutions designed to protect your business from evolving cyber threats,
              </p>;
            </div>;
            ";
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
              {services.map((service, index) => (";
                <div key="{index}" className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow">";
                  <div className="flex items-center mb-6">";
                    <div className="p-3 bg-red-100 rounded-lg mr-4">";
                      <service.icon className="w-8 h-8 text-red-600" />;
                    </div>;
                    <div>",
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>";
                      <p className="text-gray-600">{service.description}</p>;
                    </div>;
                  </div>";
                  <ul className="space-y-3">;
                    {service.features.map((feature, featureIndex) => (";
                      <li key="{featureIndex}" className="flex items-center">";
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"  />";
                        <span className="text-gray-700">{feature}</span>;
                      </li>;