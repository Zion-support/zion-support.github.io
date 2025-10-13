import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  TrendingUp,
  Server,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Layout from "../layout";

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Cloud Management",
      description:
        "Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with automated compliance monitoring and threat detection",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Cost Optimization",
      description:
        "Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing",
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: "24/7 Monitoring",
      description:
        "Proactive monitoring with automated scaling, performance optimization, and incident response",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Auto-Scaling",
      description:
        "Automatically scale resources based on demand to ensure optimal performance and cost efficiency",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: "Analytics & Insights",
      description:
        "Advanced analytics to optimize infrastructure performance and make data-driven decisions",
    },
  ];

  const managementFeatures = [
    {
      title: "Infrastructure as Code",
      description: "Manage your cloud infrastructure using code for consistency and version control",
      icon: <Server className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions to protect your data",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of your cloud infrastructure performance",
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Infrastructure <span className="text-cyan-400">Management</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Optimize, secure, and scale your cloud infrastructure with our comprehensive management solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
