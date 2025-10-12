import React  from 'react';
import { Link  } from "react-router-dom";
import { ArrowRight  } from "lucide-react";
export default function AccessibilityPage() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" ></div>
      <Helmet></Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center" ></div>
        <h1 className="text-4xl font-bold text-white mb-6" >Accessibility</h1>
        <p className="text-lg text-gray-300 mb-8" >Professional accessibility services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" ></Link>
          Contact Us;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
      </div>
  );
}
    </>
</div>