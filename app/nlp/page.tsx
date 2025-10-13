<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

export default function NlpPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Nlp - Zion Tech Group</title>
        <meta name="description" content="Nlp solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Nlp</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive nlp solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Helmet>
//         <title>Natural Language Processing | Zion Tech Group</title>
//         <meta
          name="description"
          content="Advanced NLP solutions for text analysis and understanding"
//         />
//       </Helmet>

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//               Natural Language Processing
</span>
</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced NLP solutions for text analysis and understanding
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
//             >
//               Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
</Link>
//             <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
//             >
//               Learn More
</Link>
</div>
</div>
</div>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
