import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
return (
    <>
      <Helmet></Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edgeAIsolutions, cloud infrastructu r e, cybersecuri t y, and custom software developme n t." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="max-w-7xl mx-autop x-4sm:px-6lg:px-8pt-20pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              Transform Your Business with;
              <span className="blockbg-gradient-to-rfrom-purple-400to-pink-400bg-clip-texttext-transparent">
                Advanced AI & IT Solutions;
              </span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              We deliver cutting-edgetechnologysolutions that drive innovation, efficiency, and growth for businesses worldwide.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link;
                to="/contact";
                className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
              >
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Link;
                to="/about";
                className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-slate-900transition-allduration-300"
              >
                Learn More;
              </Link>
            </div>
        </div>
    </>
  );
};

export default HomePage;