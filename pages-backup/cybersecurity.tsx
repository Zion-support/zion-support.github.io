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
    <div className="min-h-screen bg-gray-900 text-white">;
<Head>;
        <title>Cybersecurity Services | Zion Tech Group</title>";
        <meta name="description" content="Comprehensive cybersecurity services including security assessments, data protection, monitoring, and incident response. Protect your business with our expert security solutions."  />;
        <meta name="keywords" content="cybersecurity, security assessment, data protection, threat monitoring, incident response, compliance"  />";
        <link rel="canonical" href="https: // comment;
      </Head>;
      <Navigation  />;
      {/* comment */}";
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
          <div className="text-center">";
            <div className="flex items-center justify-center mb-6">";
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">";
                <Shield className="w-8 h-8 text-white"  />;
              </div>;
            </div>";
            <h1 className="text-4xl md:text-6xl font-bold mb-6">";
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">;
                Cybersecurity Services,
              </span>;
            </h1>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">,
              Protect your business with comprehensive cybersecurity solutions. Our expert team provides,
advanced security assessments, data protection, and 24/7 monitoring to keep your assets safe.;
            </p>";
            <div className="flex flex-col sm: flex-row gap-4 justify-center">";
              <Link href="/contact;
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">;
                Get Security Assessment";
                <ArrowRight className="w-5 h-5 ml-2 inline"  />;
              </Link>";
              <Link href="/contact;
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">;
                Schedule Consultation,
              </Link>;
            </div>;
      </section>;
      {/* comment */}";
      <section className="py-16 bg-gray-800">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">,
            {stats.map((stat, index) => (";
              <div key="{index}" className="text-center">";
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">";
                  <stat.icon className="w-8 h-8 text-red-400" />;
                </div>";
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>";
                <div className="text-gray-400">{stat.label}</div>;
              </div>;
            ))}

          </div>;
      </section>;
      {/* comment */}";
      <section className="py-20 bg-gray-900">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
          <div className="text-center mb-16">";
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;
              Comprehensive Security Solutions,
            </h2>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Our cybersecurity services cover every aspect of your security needs, from assessment to incident response.;
            </p>;
          </div>;
";
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {services.map((service, index) => (";
              <div key="{index}" className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover: border-red-500/50 transition-all duration-300">";
                <div className="flex items-center mb-6">";
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mr-4">";
                    <service.icon className="w-6 h-6 text-red-400" />;
                  </div>",
                  <h3 className="text-2xl font-semibold">{service.title}</h3>;
                </div>";
                <p className="text-gray-300 mb-6">{service.description}</p>";
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (";
                    <li key="{featureIndex}" className="flex items-center text-gray-400">";
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3"  />;