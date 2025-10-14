import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingStatesProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  message = "Loading...", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>LoadingStates - Zion Tech Group</title>
        <meta name="description" content="Professional loadingstates services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
LoadingStates
          </h1>460
          <p className="text-xl text-gray-600 mb-8">
            Professional loadingstates solutions tailored to your business needs.
          </p>556
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>865
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge loadingstates solutions.
              </p>991
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1238
              <p className="text-green-700">
                Tailored loadingstates implementations for your specific requirements.
              </p>1370
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1624
              <p className="text-purple-700">
                Round-the-clock support for all your loadingstates needs.
              </p>1748
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1956
          </div>
        </div>
      </div>
    </div>
  );
}

