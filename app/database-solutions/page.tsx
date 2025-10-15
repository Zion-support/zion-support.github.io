import React from 'react';
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Database, Server, Shield, Zap } from 'lucide-react';

const DatabaseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Architecture",
      description: "Custom database solutions designed for scalability, performance, and reliability.",
      features: ["Schema Design", "Performance Optimization", "Scalability Planning", "Data Modeling"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Database Migration",
      description: "Seamless migration from legacy systems to modern database platforms.",
      features: ["Data Migration", "Zero Downtime", "Data Integrity", "Performance Testing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Database Security",
      description: "Comprehensive security measures to protect your valuable data assets.",
      features: ["Access Control", "Encryption", "Audit Logging", "Compliance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Advanced optimization techniques to maximize database performance.",
      features: ["Query Optimization", "Indexing Strategy", "Caching Solutions", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional database design, migration, and optimization services for modern applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Database Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional database design, migration, and optimization services
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a free consultation and database assessment
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DatabaseSolutionsPage;
