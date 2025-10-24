          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function PagePage() {return (
    <>
      <title>Page - Zion Tech Group</title>
        <h1 className="text-4xl font-bold text-white mb-6">Page</h1>
        <p className="text-lg text-gray-300 mb-8">Professional page services coming soon.</p>
          Contact Us

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>Api - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Api</h1>
        <p className="text-lgtext-gray-300mb-8">Professional api services coming soon.</p>
          Contact Us

      <  />
  );}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Api - Zion Tech Group</title>
        <meta name="description" content="Professional api services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Api</h1>
          <p className="text-lg text-gray-300 mb-8">Professional api services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>

        </Link>
      </div>
  );
};

export default Page;
