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
      title: "Zero-Downtime Migration",
      description: "Seamless migration without interrupting your business operations",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security throughout the migration process",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with our optimization strategies",
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime and maximum security." />
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Cloud Migration Pro</h1>
          <p className="text-xl text-gray-300 text-center mb-12">Professional cloud migration services with zero downtime and maximum security.</p>
        </div>
      </div>
    </>
  );
};
