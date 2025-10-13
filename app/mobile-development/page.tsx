<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'react-helmet-async';';';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';';'
;
const PagePage: React.FC = () => {;
const features = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Brain,
      title: 'AI-Powered Solutions','
      description: 'Advanced AI technology to transform your business operations and improve efficiency''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: 'High Performance','
      description: 'Lightning-fast processing and real-time analytics for optimal results''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Enterprise Security','
      description: 'Bank-level security with encryption and compliance standards''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: 'Global Reach','
      description: 'Worldwide deployment and support for international businesses''
    }
  ];
;
const MobileDevelopmentPage: React.FC = () => {;
const features = [
  // TODO: Add items
]
  // TODO: Add items
]
    'iOS development','
    'Android development','
    'Cross-platform solutions','
    'UI/UX design','
    'App store optimization','
    'Maintenance and support''
  ]
>>>>>>> cursor/delete-records-a75e

export default function PagePage() {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const MobileDevelopmentPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
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
=======
export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Advanced mobile development solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Mobile Development services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="mobile-development, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional mobile development services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced mobile development solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<Navigation />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Mobile <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Development</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Create powerful mobile applications for iOS and Android platforms.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">"
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></button>"
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">"
                Learn More
              </button></div>
>>>>>>> origin/main
          </div></div>
</section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Mobile Solutions
            </h2>
<p className="text-xl text-gray-300">"
              Comprehensive mobile development services for all platforms.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {features.map((feature, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">"
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">"
<feature.icon className="h-6 w-6 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
<p className="text-gray-300">{feature.description}</p></div>"
            ))}
          </div></div>
</section>
      {/* Benefits Section */} <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
<p className="text-xl text-gray-300">Section description</p></div>"
</div></section>
<div className="max-w-7xl mx-auto"></div>"
<div className="text-center mb-16"></div>"
<h2>Key Benefits;</h2>
>>>>>>> origin/main
            </h2>
<p>Experience the power of our page solutions for your business.</p></p>
</div></div>
</div></section>;
export default PagePage;

}})
>>>>>>> cursor/delete-records-a75e
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
export default MobileDevelopmentPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
