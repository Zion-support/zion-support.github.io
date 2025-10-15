import { ArrowRight } from "lucide-react;
;";,
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;

export default function ZionProjectMasterZionTechGroup() {;
  return (
    <>"
      <Helmet></Helmet><//Helmet>"
        <title>ZionProjectMaster - Zion Tech Group</title><//title>"
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-6"></h1>;";
            ZionProjectMaster"
          </h1>"
          <p className="text-lg text-gray-300 mb-8"></p>;
            Professional zionprojectmaster services coming soon.
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
