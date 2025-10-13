<<<<<<< HEAD
<<<<<<< HEAD
'use client';';
import React from 'react';';'
;
const TutorialsPage: React.FC = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen pt-20">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
<span className="text-cyan-400">Tutorials</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Learn how to implement AI and IT solutions with our step-by-step guides.
          </p></div>
</div></div>
  );
};

      {/* Tutorials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {tutorials.map((tutorial, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">"
<div className="flex items-center mb-4">"
<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">"
<BookOpen className="w-6 h-6 text-white" /></div>"
<div>
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">"
                      {tutorial.level}
                    </span></div>
</div>
<h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>"
<p className="text-gray-300 mb-6">{tutorial.description}</p>"
<div className="flex items-center justify-between">"
<span className="text-gray-400 text-sm">{tutorial.duration}</span>"
<button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">"
<Play className="w-4 h-4 mr-2" />"
                    Start
                  </button></div>
</div>
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Ready to Learn?
          </h2>
<p className="text-xl text-gray-300 mb-8">"
            Start your learning journey with our comprehensive tutorials and expert guidance.
          </p>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">"
<ArrowRight className="w-5 h-5 mr-2" />"
            Get Started
          </button></div>
</section>
<Footer /></div>
  )
}
;
export default TutorialsPage;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your business",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation for immediate results",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Advanced  solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learning tutorials by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutorials
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn from our comprehensive tutorials and guides.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
              <p className="text-gray-600">
                Beginner-friendly tutorials to get you started with our platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Topics</h3>
              <p className="text-gray-600">
                Deep dive into advanced features and capabilities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
              <p className="text-gray-600">
                Learn industry best practices and optimization techniques.
              </p>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">
          This page is under development. Please check back later for updates.
        </p>
      </div>
    
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
}
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
}
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
