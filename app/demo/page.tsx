<<<<<<< HEAD
import React from 'react';'react-helmet-async;'
import { Play, Right, Circle, Star } from 'lucide-react;'
const DemoPage: "React.FC = () => {"
  const features = [{''
      icon: "'Analytics'",';''
      title: "'AI-Powered Analytics'",';''
      description: "'See how our AI analyzes your data in real-time'",';''
      demo: "'Live Demo';"}'
    },
    {''
      icon: "'Security'",';''
      title: "'Advanced Security'",';''
      description: "'Experience our enterprise-grade security features'",';''
      demo: "'Demo';"}'
    },
    {''
      icon: "'Intelligence'",';''
      title: "'Business Intelligence'",';''
      description: "'Explore our comprehensive BI dashboard'",';''
      demo: "'BI Demo';"}'
    },
    {
      icon: "'Collaboration'",';'
      title: "'Team Collaboration'",';'
      description: "'See how teams work together seamlessly'",';'
      demo: "'Collaboration Demo';"}'
    {''
      icon: "'Collaboration'",';''
      title: "'Team Collaboration'",';''
      description: "'See how teams work together seamlessly'",';''
      demo: "'Collaboration Demo';"}'
    }
  ];
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/main

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
