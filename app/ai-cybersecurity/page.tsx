import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced ai cybersecurity solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
          </p>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ai Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional ai cybersecurity services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced ai cybersecurity solutions. 
              Stay tuned for updates!
            </p>
          </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ai Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced ai cybersecurity solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
              </div>
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Key Benefits
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Experience the power of our page solutions for your business.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="flex items-start space-x-3">"
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />"
<p className="text-gray-300 text-lg">{benefit}</p></div>"
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Secure Your Business
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Get started with our AI-powered cybersecurity solutions today.
          </p>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">"
<ArrowRight className="w-5 h-5 mr-2" />"
            Get Started
          </button></div>
</section>
<Footer /></div>
  )
}
;
export default PagePage;

}
}
