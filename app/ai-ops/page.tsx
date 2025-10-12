import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function AiOpsPage() {
  return (
    <>
      <Helmet>
        <title>Ai Ops - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced Ai Ops solutions powered by AI." />
=======
        <meta name="description" content="Professional ai ops services by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
export default function AiopsPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Aiops - Zion Tech Group</title>
        <meta name = "description" content="Professional aiops by Zion Tech Group. Transform your business with our expert solutions." />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Ops</h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">Advanced Ai Ops solutions powered by AI.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
=======
          <p className="text-lg text-gray-300 mb-8">Professional ai ops services coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
    </>
  );
=======
    </>;
  );
      </>
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <h1 className="text-4 xl font-bold text-white mb-6"  >Ai Ops</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai ops services coming soon.</p>;
        <Link;</Link></Link>
          to = "/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        ></Link>;
          Contact Us;
          <ArrowRight className = "w-5h-5ml-2" /></ArrowRight>
        </Link>
      </div>;
    </div>  );
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
}