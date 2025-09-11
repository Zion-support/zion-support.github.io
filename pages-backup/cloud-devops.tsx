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
        <title>Cloud & DevOps Services | Zion Tech Group</title>";
        <meta name="description" content="Expert cloud migration, DevOps automation, and infrastructure management services. Scale your applications with our cloud and DevOps solutions."  />;
        <meta name="keywords" content="cloud migration, devops, infrastructure as code, CI/CD, AWS, Azure, GCP, Kubernetes"  />";
        <link rel="canonical" href="https: // comment;
      </Head>;
      <Navigation  />;
      {/* comment */}";
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
          <div className="text-center">";
            <div className="flex items-center justify-center mb-6">";
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">";
                <Cloud className="w-8 h-8 text-white"  />;
              </div>;
            </div>";
            <h1 className="text-4xl md:text-6xl font-bold mb-6">";
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">;
                Cloud & DevOps Services,
              </span>;
            </h1>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Scale your infrastructure with our expert cloud migration and DevOps automation services. ,
              We help you build, deploy, and manage applications with modern cloud technologies.;
            </p>";
            <div className="flex flex-col sm: flex-row gap-4 justify-center">";
              <Link href="/contact;
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">;
                Start Cloud Migration";
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">";
                  <stat.icon className="w-8 h-8 text-blue-400" />;
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
              Complete Cloud & DevOps Solutions,
            </h2>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              From cloud migration to DevOps automation, we provide end-to-end solutions for modern infrastructure.;
            </p>;
          </div>;
";
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {services.map((service, index) => (";
              <div key="{index}" className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover: border-blue-500/50 transition-all duration-300">";
                <div className="flex items-center mb-6">";
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4">";
                    <service.icon className="w-6 h-6 text-blue-400" />;
                  </div>",
                  <h3 className="text-2xl font-semibold">{service.title}</h3>;
                </div>";
                <p className="text-gray-300 mb-6">{service.description}</p>";
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (";
                    <li key="{featureIndex}" className="flex items-center text-gray-400">";
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3"  />;