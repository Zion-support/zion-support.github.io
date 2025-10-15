<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms and conditions for using Zion Tech Group services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Terms and conditions for using our services.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
            <p className="text-gray-300 mb-6">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">3. Disclaimer</h2>
            <p className="text-gray-300 mb-6">
              The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">4. Limitations</h2>
            <p className="text-gray-300 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Accuracy of Materials</h2>
            <p className="text-gray-300 mb-6">
              The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Links</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Modifications</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">8. Governing Law</h2>
            <p className="text-gray-300 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
=======
<<<<<<< HEAD
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
const TermsPage: React.FC = () => {
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">;""
          <div className="max-w-7xl mx-auto text-center">;""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
              Terms of;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                Service;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
              Please read these terms carefully before using our services.;
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-20 px-4">;""
          <div className="max-w-4xl mx-auto">;""
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">;""
              <div className="prose prose-invert max-w-none">;""
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>;""
                <p className="text-gray-300 mb-6">;""
                  By accessing and using our services, you accept and agree to be bound by the terms;
                  and provision of this agreement.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>;""
                <p className="text-gray-300 mb-6">;""
                  Permission is granted to temporarily download one copy of our materials for personal,
                  non-commercial transitory viewing only.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>;""
                <p className="text-gray-300 mb-6">;'"'"'"'"'"
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes;''
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>;""
                <p className="text-gray-300 mb-6">;""
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising;
                  out of the use or inability to use the materials on our website.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Accuracy of Materials</h2>;""
                <p className="text-gray-300 mb-6">;""
                  The materials appearing on our website could include technical, typographical, or;
                  photographic errors. We do not warrant that any of the materials on its website are;
                  accurate, complete, or current.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">s</h2>;""
                <p className="text-gray-300 mb-6">;""
                  We have not reviewed all of the sites linked to our website and are not responsible;
                  for the contents of any such linked site.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>;""
                <p className="text-gray-300 mb-6">;""
                  We may revise these terms of service at any time without notice. By using this website,
                  you are agreeing to be bound by the then current version of these terms.;
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>;""
                <p className="text-gray-300 mb-6">;""
                  If you have any questions about these terms of service, please contact us at;
                  <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">;""
                    legal@ziontechgroup.com;
                  </a>.;
                </p>
                <p className="text-gray-400 text-sm mt-8">;""
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
=======
import SEOHead from '../components/SEOHead';

const PagePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="page - Zion Tech Group"
        description="Zion Tech Group page service page"

const TermsPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage agreement for Zion Tech Group services and website." />
      </Helmet>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h1 className='text-4xl font-bold text-gray-900 mb-8'>
                Terms of Service
              </h1>
=======
      <SEOHead title ="terms - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group terms service page"";
>>>>>>> main

      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">terms - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
>>>>>>> main
      </div>
    </>

  )
    },
    {}
export default PagePage;

  ),
};
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
        <div className="container mx-auto px-4 py-20"></div>
          <h1>Terms</h1>
          <p className="text-xl text-gray-600"></p>
            This page is under development. Please check back soon for more information about our terms services.
          </p>;
        </div>;
      </div>;
    </div>;
  )};
const page = React.lazy(() => import('./page'));''
export default page;
=======

>>>>>>> main
>>>>>>> main
