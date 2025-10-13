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
      title: "Automated Migration",
      description: "Streamlined migration process with minimal downtime"
    },
    {
      title: "Data Security",
      description: "End-to-end encryption and secure data transfer"
    },
    {
      title: "Performance Optimization",
      description: "Optimized cloud configuration for maximum performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Migration Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional cloud migration services
          </p>
        </div>
      </div>
    </div>
  );
}
