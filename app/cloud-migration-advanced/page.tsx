<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Cloud } from 'lucide-react';

export default function CloudMigrationAdvancedZionTechGroup() {

<<<<<<< HEAD
  return (
    <div>
      <Helmet>
        <title>CloudMigrationAdvanced - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            CloudMigrationAdvanced
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloudmigrationadvanced services coming soon.
          </p>
=======
export default function CloudmigrationadvancedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Advanced - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration advanced services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration Advanced</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration advanced services coming soon.</p>
          
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
          <Link
<<<<<<< HEAD
            to="/contact"
<<<<<<< HEAD
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
</div>
=======
      <Footer />
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
  );
}
=======
import React from 'react';

const CloudMigrationAdvancedPage: React.FC = () => {return (
    <>
      <title>CloudMigrationAdvanced - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
import React  from 'react';
const CloudMigrationAdvancedPage: React.FC = () => {
  return (
      <Helmet>
        <title>Cloud Migration Advanced - Zion Tech Group</title>
        <meta name="description" content="Cloud Migration Advanced services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="cloud-migration-advanced, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Cloud Migration Advanced
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional cloud migration advanced services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive cloud migration advanced solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default CloudMigrationAdvancedPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
