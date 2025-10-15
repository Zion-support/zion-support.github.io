import { Helmet } from "react-helmet-async;";,
import { Link } from "react-router-dom;";
import { ArrowRight } from "lucide-react;

export default function AiAnalytics() {;
  return (
    <>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet>
        <title>AI Analytics - Zion Tech Group</title><//title><///title><////title></////title>
        <meta;";
          name="description;";
          content="Professional AI analytics services from Zion Tech Group"
        />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">"
        <div className="max-w-4xl mx-auto px-4 text-center">"
          <h1 className="text-4xl font-bold text-white mb-6">AI Analytics</h1>"
          <p className="text-lg text-gray-300 mb-8"></p>;
            Professional AI analytics services coming soon.
          </p><//p><///p><////p></////p>

          <Link;";
            to="/contact;";
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          ></Link"
>;";
            Contact Us"
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link><//Link><///Link><////Link></////Link>
        </div><//div><///div><////div></////div>
      </div><//div><///div><////div></////div>
    </>
  );
}
