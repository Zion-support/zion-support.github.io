import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {,
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center" /></div>
      <Helmet /></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." / /></meta>
      </Helmet>
      <div className="text-center" /></div>
        <h1 className="text-4xl font-bold text-white mb-6" /></h1>
          Coming Soon;
        </h1>
        <p className="text-lg text-gray-300 mb-8" /></p>
          Professional services coming soon.
        </p>
        <Link;
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
         /></Link>
          Contact Us;
          <ArrowRight className="ml-2 h-5 w-5" / /></ArrowRight>
        </Link>
      </div>
    </div>)
  );
}