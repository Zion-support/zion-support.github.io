

import React from 'react;
import Link from next/link';';


  { number: '5+, label: 'Years Experience' }',
;];

export default function CustomDevelopmentPage() {

  return (;
    <Layout);"
      title="Custom Development - Zion Tech Group"";"
      description="Bespoke software solutions designed for your unique needs. Full stack development, API integration, and ongoing support for custom applications."""
      keywords="custom development, bespoke software, full stack development, API integration, custom applications""
    >;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}"
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">""
          <div className="absolute inset-0">";"
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";"

        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}

              className="text-center mb-16
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6>;"
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600>Capabilities</span>;



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";

                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">";
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
                Technology <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Stack</span>";


                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6""
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>"
                  <div className="flex flex-wrap gap-2">";
                    {category.techs.map((tech, techIndex) => (,
                      <span}),
                        key={techIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm""


        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}

              className=text-center mb-16"
            >;"
              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6>";"
                Development <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600>Process</span>";


              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our proven development process ensures your custom solution is delivered on time, on budget, and exceeds expectations,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";



                  className=bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300""
                >;
                  <div className=flex items-center mb-4">";
                    <div className=w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">";
                      <span className=text-white font-bold text-lg">{index + 1}</span>"



        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">;
                Ready to Build Something Custom?;




              <div className=flex flex-col sm:flex-row gap-4 justify-center>";
                <Link;"
                  href=/contact";"
                  className=px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center";
                >;
                  Start Custom Project;"
                  <ArrowRight className=ml-2 w-5 h-5 />";
                </Link>;
                <Link;"
                  href=/solutions";"
                  className=px-8 py-4 border border-white text-white hover:bg-white hover:text-purple-600 rounded-lg font-semibold transition-colors";
                >;


