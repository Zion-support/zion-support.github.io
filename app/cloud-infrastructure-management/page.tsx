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
      title: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting for all your cloud resources",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Automated Scaling",
      description: "Dynamic resource allocation based on demand patterns",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Intelligent cost management and resource optimization",
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure management services for optimal performance and cost efficiency." />
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Cloud Infrastructure Management</h1>
          <p className="text-xl text-gray-300 text-center mb-12">Optimize your cloud infrastructure for maximum performance and efficiency.</p>
        </div>
      </div>
    </>
  );
};
