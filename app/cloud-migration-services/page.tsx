<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async';

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
const CloudMigrationServicesPage: React.FC = () => {
  const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react';
;
const CloudMigrationServicesPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
<<<<<<< HEAD
icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Safe and secure migration of your applications and data to the cloud'
    },
    {
      icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with minimal to zero downtime for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution powered by AI technology'
    },
    {
<<<<<<< HEAD
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    }
  ];
  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
=======
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards'
    };
  ];
;
const benefits = [
];
    'Seamless cloud migration',
    'Minimal downtime during migration',
    'Cost-effective solutions',
    'High availability and reliability',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
=======
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <>
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <title>Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<<<<<<< HEAD
      </Helmet>
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration Services;</h1>
=======
          <h1 className="text-5xl font-bold text-white mb-6">
=======
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            Cloud Migration Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced cloud migration services.</p>
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
<<<<<<< HEAD
        <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
=======
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          {features.map((feature, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description</p>}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Cloud Migration Services?</h2>
          </h2>
          <div className="grid md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
<<<<<<< HEAD
                <span className="text-gray-300">{benefit</span>}</span>
=======
                <span className="text-gray-300">{benefit}</span>
=======
      </section>
      {/* Features Section */};
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature .icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your cloud migration needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
=======
<<<<<<< HEAD
      {/* Benefits Section */}
=======
      {/* Benefits Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our cloud migration solutions for your business.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
=======
<<<<<<< HEAD
      {/* CTA Section */}
=======
      {/* CTA Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your cloud migration needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  ),
=======
    </>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
};

export default CloudMigrationServicesPage;
=======
  )
}
export default CloudMigrationServicesPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </button>
  </button>
  </h2>
  </button>
  </button>
  </h1>
  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
