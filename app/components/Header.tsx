
import { Helmet } from "react-helmet-async";
      import { Link } from "react-router-dom";
      import { ArrowRight } from "lucide-react";
      export default function Header() {},
      return (
    <div></div>
      <Helmet></Helmet>
        <title>Header - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional header services by Zion Tech Group. Transform your business with our expert solutions."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6">Header</h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional header services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          ></Link
>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
    },
    {