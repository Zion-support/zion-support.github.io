import React from 'react';
import {ArrowRight} from 'lucide-react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

export default function Infrastructure Management Page() {
  return (
    <div className ="min-h-screenbg-gray-50">
      <Helmet>
        <title   />InfrastructureManagement Services - ZionTech Group</title>
        <meta name ="description" content="Complete IT infrastructuresetup, management, andoptimization services." / / />
      </Helmet>
      
      <sectionclassName ="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900" />
        <div className ="max-w-7 xlmx-autotext-center" />
          <h1className ="text-3 xlsm:text-4 xlmd:text-5 xlfont-boldtext-whitemb-4"  />InfrastructureManagement
          </h1>
          <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
            CompleteIT infrastructuresetup, management, andoptimization services.
          </p>
          <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-rfrom-blue-600 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              GetStarted
              <Arrow Rightclass Name="w-5h-5ml-2" />
            </Link>
            <Link to ="/it-services" className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">AllIT Services
            </Link>
          </div>
        </div>
      </section>

      <sectionclassName ="py-20px-4" />
        <div className ="max-w-4 xlmx-autotext-center" />
          <h2className ="text-3 xlfont-boldtext-gray-900mb-6"   />ComingSoon</h2>
          <pclassName ="text-xltext-gray-600mb-8" />
            We'redeveloping comprehensiveinfrastructure managementservices. Contactus todiscuss yourinfrastructure needs.
          </p>
          <Link to ="/contact" className="bg-gradient-to-rfrom-purple-600 to-pink-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-700 hover:to-pink-700transition-allduration-300">ContactUs
          </Link>
        </div>
      </section>
    </div>
  );
}