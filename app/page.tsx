import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

const Home Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ZionTech Group - AdvancedAI & ITSolutions</title>
        <meta name ="description" content="Zion Tech Groupprovides cutting-edge AI solutions, cloudinfrastructure, cybersecurity, andcustom softwaredevelopment." />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className ="text-center">
            <h1className ="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              TransformYour Businesswith
              <spanclassName ="blockbg-gradient-to-rfrom-purple-400 to-pink-400 bg-clip-texttext-transparent">
                AdvancedAI & ITSolutions
              </span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              Wedeliver cutting-edgetechnology solutionsthat driveinnovation, efficiency, andgrowth forbusinesses worldwide.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4 justify-center">
              <Link to ="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center"
              >
                GetStarted
                <Arrow Rightclass Name="ml-2 w-5 h-5" />
              </Link>
              <Link to ="/about"
                className="borderborder-cyan-400 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900 transition-allduration-300"
              >
                LearnMore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home Page;