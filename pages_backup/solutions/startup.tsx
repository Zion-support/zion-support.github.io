

import React from 'react;
import Link from next/link';';


  { number: '2-4, label: 'Weeks to MVP' }',
;];

export default function StartupSolutionsPage() {

  return (;
    <Layout);"
      title="Startup Solutions - Zion Tech Group"";"
      description="Rapid development and scaling solutions for startups. MVP development, tech stack selection, and growth-focused technology solutions."""
      keywords="startup solutions, MVP development, rapid prototyping, startup technology, scaling solutions""
    >;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}"
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">""
          <div className="absolute inset-0">";"
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";"

        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}

              className="text-center mb-16
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6>;"
                Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600>Advantages</span>;


              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                We understand the unique challenges startups face and provide solutions that help you move fast, stay lean, and scale efficiently,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";

                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">";
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;
                  <ul className="space-y-3">";
                    {feature.benefits.map((benefit, benefitIndex) => (,
                      <li key={benefitIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";


        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              className=text-center mb-16""
            >;
              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our <span className=text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Services</span>";




                  transition={{ duration: 0.8, delay: index * 0.1 }}

                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>;



        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}





              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  href="/contact";
                  className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center";
                >;
                  Start Your Project;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link;
                  href="/solutions";
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-green-600 rounded-lg font-semibold transition-colors"";
                >;


