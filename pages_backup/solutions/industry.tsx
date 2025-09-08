

import React from 'react;
import Link from next/link';';



const industries = [;
  {}
    name: Healthcare,,
    icon: Heart,
    description: 'HIPAA-compliant solutions for healthcare providers and medical institutions,',
    features: [HIPAA Compliance, Patient Data Security', 'Telemedicine Platforms, Medical Records Management'],',
    color: from-red-500 to-pink-500';
  },


  { number: '500+, label: 'Industry Projects' }',
;];
export default function IndustrySolutionsPage() {
  return (;
    <Layout);
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions tailored to specific industries including healthcare, finance, e-commerce, education, manufacturing, and real estate.""
      keywords="industry solutions, healthcare technology, fintech, e-commerce, education technology, manufacturing IoT, real estate tech""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";

              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <BarChart3 className="w-16 h-16 text-indigo-400 mr-4" />";


            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";



        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}

              className="text-center mb-16"
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>;


              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                We have deep expertise across multiple industries, delivering solutions that meet specific regulatory and business requirements,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";



                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300
                >;"
                  <div className="flex items-center mb-6>;
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mr-4`}>,"
                      <industry.icon className="w-8 h-8 text-white />;


                      <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>"
                      <p className="text-gray-600">{industry.description}</p>"
                    </div>;
                  </div>;
                  <ul className="space-y-3">";
                    {industry.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";


        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}

              className=text-center mb-16""
            >;
              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our <span className=text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Capabilities</span>";



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";



                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>;


              ))}


        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.8 }}
            >,"
              <h2 className=text-4xl md:text-5xl font-bold mb-6>";
                Ready for Industry-Specific Solutions?;




              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  href="/contact";
                  className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center";
                >;
                  Schedule Industry Consultation;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link;
                  href="/solutions";
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg font-semibold transition-colors"";
                >;


