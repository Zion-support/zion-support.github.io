import { Helmet , Link  } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
export default function Financialreportingtool() {
  return (
    <React.Fragment /><Helmet /><title>Financial Reporting Tool - Zion Tech Group</title>
        <meta;
          name="description"
          content="Professional financial reporting tool services from Zion Tech Group"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center" /><div className="max-w-4xl mx-auto px-4 text-center" /><h1 className="text-4xl font-bold text-white mb-6">Financial Reporting Tool</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional financial reporting tool services from Zion Tech Group</p>
          </p>
          <Link;
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us;
            </Link><ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
;