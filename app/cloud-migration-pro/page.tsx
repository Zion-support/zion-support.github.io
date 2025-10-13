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
      title: "Quality Assurance",
      description: "Comprehensive testing and validation to ensure successful migration"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime and maximum security." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Migration <span className="text-cyan-400">Pro</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Professional cloud migration services with zero downtime and maximum security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 group hover:scale-105 inline-flex items-center"
              >
                Start Migration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudMigrationProPage;
