import React from 'react';
import { ArrowRight } from "lucide-react";

const Pagebroken2 Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet >
        <title>Page Broken2 | Zion Tech Group</>
        <meta name="description"
          content="Professional page broken2 services by Zion Tech Group"
        />
      </>
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Page Broken2
            </>
          </>
          <p >
            Professional page broken2 services by Zion Tech Group
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
            <Link to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </>
          </>
        </>
      </>
    </>
  );
};

export default Pagebroken2 Page;
