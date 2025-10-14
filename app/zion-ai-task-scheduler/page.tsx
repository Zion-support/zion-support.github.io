import { ArrowRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiTaskSchedulerZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Zion Ai Task Scheduler - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai task scheduler services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Zion Ai Task Scheduler
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional zion ai task scheduler services by Zion Tech Group.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
