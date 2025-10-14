import React from 'react';
import React from 'react';
import React from 'react';'
import { Link  } from "react-router-dom";'
import { ArrowRightIcon, PlayIcon  } from "@heroicons/react/24/outline";
ursor/fix-errors-and-merge-to-main-94 a7
const Hero: React.FC = () => {
  return ()
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"></section>,
      {/* Background */}"
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <div></>
      </>
      {/* Animated background elements */}"
      <div className="absolute inset-0 overflow-hidden">"
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
        <div></>
      </>
      {/* Content */}"
      <div className="relative z-10 max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
        <div className="max-w-4 xl mx-auto">"
          <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with"
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI & Technology
            </>
          </>
          "
          <p>,
            Leading provider of AI and IT solutions, empowering businesses to scale, 
            innovate, and succeed in the digital age.
          </>
          "
          <div></>
            <Link"
              to="/contact""
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            ></>
              <span>Get Started Today</span>"
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
            "
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center space-x-2">"
              <PlayIcon className="h-5 w-5" />
              <span>Watch Demo</>
            </>
          </>
          ,
          {/* Stats */}"
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-3 xl mx-auto">"
            <div className="text-center">"
              <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">500+</div>"
              <div>Projects Completed</>
            </div>"
            <div className="text-center">"
              <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">99%</div>"
              <div>Client Satisfaction</>
            </div>"
            <div className="text-center">"
              <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">24/7</div>"
              <div>Support Available</>
            </>
          </>
        </>
      </>
      ,
      {/* Scroll indicator */}"
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">"
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">"
          <div></>
        </>
      </>
    </>
  );
};
"'
export default Hero;
