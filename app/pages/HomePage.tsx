
import React from "react";
import { Link } from "react-router-dom";

          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, 
            automation, and digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

}
 f7f852c0f7415181a1b362c4aa5a784585ad5828
