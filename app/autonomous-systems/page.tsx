'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group." />
      </Helmet>
      
          <p className="text-xl text-gray-300 mb-8">
            Professional Page services powered by advanced AI and cutting-edge technology.
          </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
