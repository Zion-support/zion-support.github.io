import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Seamless Migration",
      description: "Zero-downtime migration to cloud platforms with minimal business disruption"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security First",
      description: "Enterprise-grade security measures throughout the migration process"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Performance Optimization",
      description: "Optimize your applications for cloud performance and scalability"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure everything works perfectly after migration"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamlessly move your applications and data to the cloud with zero downtime." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, data migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional cloud migration services to seamlessly move your applications and data to the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 group hover:scale-105 flex items-center justify-center"
              >
                Start Migration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationProPage;
