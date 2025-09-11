import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
      ],";
      category: "AI Solutions",";
      pricing: "Starting at $2,999/month";
},
    {;
      id: 2,";
      name: "Cloud Infrastructure Suite",";
      description: "Scalable, secure, and reliable cloud infrastructure tailored to your business needs.",
      icon: Cloud,
      features: [",
        "Multi-cloud deployment",";
        "Auto-scaling capabilities",";
        "99.9% uptime guarantee",";
        "24/7 monitoring",";
        "Disaster recovery" ],";
      category: "Cloud Solutions",";
      pricing: "Starting at $1,999/month";
},
    {;
      id: 3,";
      name: "Cybersecurity Shield",";
      description: "Comprehensive security solution protecting your digital assets from modern threats.",
      icon: Shield,
      features: [",
        "Threat detection",";
        "Vulnerability scanning",";
        "Incident response",";
        "Compliance monitoring",";
        "Security training" ],";
      category: "Security",";
      pricing: "Starting at $1,499/month";
},
    {;
      id: 4,";
      name: "IoT Management Platform",";
      description: "Connect, monitor, and manage your IoT devices with our intelligent platform.",
      icon: Network,
      features: [",
        "Device management",";
        "Data visualization",";
        "Remote monitoring",";
        "Predictive maintenance",";
        "Custom integrations" ],";
      category: "IoT Solutions",";
      pricing: "Starting at $2,499/month";
},
    {;
      id: 5,";
      name: "Blockchain Solutions",";
      description: "Leverage blockchain technology for secure, transparent, and efficient operations.",
      icon: Database,
      features: [",
        "Smart contracts",";
        "Decentralized applications",";
        "Tokenization",";
        "Supply chain tracking",";
        "Digital identity" ],";
      category: "Blockchain",";
      pricing: "Custom pricing"},
    {;
      id: 6,";
      name: "Global Connectivity Suite",";
      description: "Seamless global connectivity and communication solutions for modern businesses.",
      icon: Globe,
      features: [",
        "Global network access",";
        "Low-latency connections",";
        "Load balancing",";
        "CDN integration",";
        "Performance optimization" ],";
      category: "Networking",";
      pricing: "Starting at $999/month"}

  ];
";
  const categories = [];
  return (;
    <PageTransition>;
<Head>;
        <title>Products & Solutions — Zion Tech Group</title>";
        <meta name = "description" content="Explore Zion Tech Group"s comprehensive suite of technology products and solutions designed to transform your business."  />";
        <meta name="viewport" content="width=device-width, initial-scale=1"  />";
        <link rel="canonical" href="https: // comment;
      </Head>;
      {/* comment */}";
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";
        <div className="container mx-auto px-4 text-center">";
          <h1 className="text-5xl md: text-6xl font-bold mb-6">";
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>;
          </h1>";
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">,
            Powerful, scalable solutions designed to transform your business and drive innovation.;
          </p>";
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: py-32">";
        <div className="mx-auto max-w-7xl px-6 lg:px-8">";
          <div className="mx-auto max-w-2xl text-center">";
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">;
              Innovative Technology Solutions,
            </h1>";
            <p className="mt-6 text-lg leading-8 text-gray-600">,
              Discover our comprehensive suite of products designed to accelerate your digital,
transformation and drive business growth.;
            </p>;
          </div>;
      </section>;
      {/* comment */}";
      <section className="py-8 bg-white border-b">";
        <div className="mx-auto max-w-7xl px-6 lg: px-8">";
          <div className="{"flex" flex-wrap gap-2 justify-center">;
            {categories.map((category) => (",
              <button key="{category}
                className="{"px-4" py-2 rounded-full text-sm font-medium transition-colors ${";
                  category === "All;
                    ? "bg-blue-600 text-white;