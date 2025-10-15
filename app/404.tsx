import React from "react";
import { Helmet } from 'react-helmet-async';

const NotFoundPage: React.FC = () => { return (
    <> <Helmet> <title>404 - Page Not Found</title> <meta name="description" content="The page you are looking for could not be found." /> </Helmet> 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        
        <div className="text-center">
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          
          <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
          
          <a href="/" className="text-purple-400 hover:text-purple-300">Go Home</a>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;