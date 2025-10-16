import React from "react";
import { Helmet } from "react-helmet-async";

const MobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group</title>
        <meta
          name="description"
          content="Native and cross-platform mobile app development for iOS and Android."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Mobile Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Native and cross-platform mobile app development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                iOS Development
              </h3>
              <p className="text-gray-600">
                Create native iOS applications using Swift and the latest iOS
                technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Android Development
              </h3>
              <p className="text-gray-600">
                Build native Android applications using Kotlin and modern
                Android development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;
