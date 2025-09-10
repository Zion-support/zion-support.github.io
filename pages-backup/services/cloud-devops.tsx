import Head from "next/head";
const Component = () => {
import React from "react";
  return (;
    <>;
<Head>;
        <title>Cloud & DevOps Services - Zion Tech Group</title>;
        <meta name="description" content="Professional cloud migration, DevOps implementation, and infrastructure management services. Scale your business with modern cloud solutions."  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />";
        <link rel="canonical" href="https: // comment;
      </Head>;
      <Navigation  />;
      ";
      <main className="min-h-screen bg-white">,
        {/* comment */}";
        <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="text-center">";
              <div className="flex justify-center mb-6">";
                <div className="p-4 bg-blue-100 rounded-full">";
                  <Cloud className="w-12 h-12 text-blue-600"  />;
                </div>;
              </div>";
              <h1 className="text-5xl font-bold text-gray-900 mb-6">";
                Cloud & <span className="text-blue-600">DevOps</span> Services,
              </h1>";
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">;
                Accelerate your digital transformation with our comprehensive cloud migration and DevOps services. ,
                Scale your infrastructure, improve deployment speed, and reduce operational costs.;
              </p>";
              <div className="flex flex-col sm: flex-row gap-4 justify-center">";
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">;
                  Start Migration,
                </Link>";
                <Link href="/solutions" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">;
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>";
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud & DevOps Services</h2>";
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive cloud and DevOps solutions to modernize your infrastructure and accelerate development,
              </p>;
            </div>;
            ";
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
              {services.map((service, index) => (";
                <div key="{index}" className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow">";
                  <div className="flex items-center mb-6">";
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">";
                      <service.icon className="w-8 h-8 text-blue-600" />;
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