'use client';

<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
=======
const CustomSoftwarePage: React.FC = () => {
  return(<>)
      <Helmet><title>Custom Software Development - Zion Tech Group</title>
        <meta name="description" content="Tailored custom software solutions designed specifically for your business needs including web applications, mobile apps, and enterprise software." />
        <meta name="keywords" content="custom software development, tailored solutions, web applications, mobile apps, enterprise software, bespoke development" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">Custom Software Development;</h1>
            </h1>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Get tailored software solutions designed specifically for your business needs.</p>
              From web applications to mobile apps and enterprise software.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8 mb-16">,</div>
            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Web Applications</h3>
              <p className="text-gray-300mb-4">Modern, responsive web applications built with the latest technologies.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• React & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• Database integration</li>
                <li>• API development</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Mobile Applications</h3>
              <p className="text-gray-300mb-4">Cross-platform mobile apps for iOS and Android using React Native.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• React Native</li>
                <li>• Native performance</li>
                <li>• App store deployment</li>
                <li>• Push notifications</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Enterprise Software</h3>
              <p className="text-gray-300mb-4">Scalable enterprise solutions for large organizations.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Microservices architecture</li>
                <li>• Cloud deployment</li>
                <li>• Security & compliance</li>
                <li>• Integration capabilities</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">E-commerce Solutions</h3>
              <p className="text-gray-300mb-4">Complete e-commerce platforms with payment processing and inventory management.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Shopping cart functionality</li>
                <li>• Payment integration</li>
                <li>• Inventory management</li>
                <li>• Order processing</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">CRM Systems</h3>
              <p className="text-gray-300mb-4">Custom customer relationship management systems tailored to your business.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Lead management</li>
                <li>• Sales tracking</li>
                <li>• Customer communication</li>
                <li>• Analytics & reporting</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">API Development</h3>
              <p className="text-gray-300mb-4">RESTful APIs and GraphQL endpoints for seamless integration.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• RESTful APIs</li>
                <li>• GraphQL endpoints</li>
                <li>• Authentication & security</li>
                <li>• Documentation</li></ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-rfrom-cyan-500to-blue-600text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>
              Start Your Custom Project;
            </button>
          </div>
        </div>
      </div>
    </>
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5

      <Footer />
    </>
  );
};

export default PagePage;
