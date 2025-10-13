import { ArrowRight , Helmet  } from "lucide-react";
import { Link } from "react-router-dom";
export default function AIContentManagementZionTechGroup() {
  return (
    <React.Fragment /><Helmet /><title>AI Content Management - Zion Tech Group</title>
        <meta name="description" content="Professional AI content management services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" /><div className="text-center" /><h1 className="text-4xl font-bold text-white mb-6">
            AI Content Management</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional AI content management services coming soon.</p>
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
}
