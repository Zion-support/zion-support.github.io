import React from "react";
import { Helmet } from "react-helmet-async";

const CriticalResourcePreloader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>CriticalResourcePreloader - Zion Tech Group</title>
        <meta name="description" content="Professional criticalresourcepreloader services by Zion Tech Group." />
        <meta name="keywords" content="criticalresourcepreloader, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CriticalResourcePreloader
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional criticalresourcepreloader services designed to help your business grow and succeed.
          </p>
        </div>
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading resources:', error);
        setIsLoading(false);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CriticalResourcePreloader;
