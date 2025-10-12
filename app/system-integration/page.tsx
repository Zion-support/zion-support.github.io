
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ArrowRight, Zap, Shield, Cloud  } from "lucide-react";
const Page: React.FC = () => {
  return (
  return (
  const features = [
    {
      icon: <Cloud className="w-12h-12text-cyan-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    
  );

  );
},
    {
      icon: <Zap className="w-12h-12text-purple-400" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {icon: <Shield className="w-12h-12text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];

  return (
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
        <meta name="keywords" content="system integration, IT services, Zion Tech Group" /></meta>
        <meta property="og:title" content="System Integration - Zion Tech Group" /></meta>
        <meta property="og:description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/system-integration" /></meta>
      </Helmet></>

      <>div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" ></div>
        {/* Hero Section */}
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" ></p>
              Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>/p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12" ></div>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" ></Link>
          Get Started;
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" /></ArrowRight>
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" /></>
                Learn More;
    <>/Link>
            </div>
        </section></>

        {/* Features Section */}
    <>section className="py-20" />
          <div className="containermx-autopx-4" ></div><div className="text-centermb-16" ></div></>
              <h2 className="text-4xl font-bold text-white mb-6" /></h2>
                Why Choose Our System Integration Services?
    <>/h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto" ></p>
              Our expert team helps you connect and optimize all your business systems;
              </p>
            </div></>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8" ></div>
              {features.map((feature, index) => (
    <>div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4" ></div>
  );
};



      </div></div></div></div>
}))

export default Page;