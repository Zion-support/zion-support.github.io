import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
<<<<<<< HEAD
const TermsPage: React.FC = () => {
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
<span className="text-cyan-400">Terms of Service</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Terms and conditions for using our services.
          </p>
<div></div>
<Calendar className="h-4 w-4 mr-2" />"
            Last updated: {lastUpdated}
          </div></div>
</div>
<div></div>
<div></div>
<div></div>
<div className="space-y-8"></div>"
              {sections.map((section, index) => (</div>
<div></div>
<div></div>
<div></div>
<section.icon className="h-6 w-6 text-blue-600" /></section>"
</div>
<div></div>
<h2 className="text-2xl font-bold text-gray-900 mb-3"></h2>"
                        {index + 1}. {section.title}
                      </h2>
<p className="text-gray-700 leading-relaxed"></p>"
                        {section.content}
                      </p></div>
</div></div>
              ));
            </div>
<div></div>
<h3 className="text-2xl font-bold text-gray-900 mb-4"></h>Contact Information</h3>"
<p className="text-gray-700 mb-6"></p>"
                If you have any questions about these Terms of Service, please contact us:
              </p>
<div></div>
<div></div>
<Mail className="h-5 w-5 text-blue-600 mr-3" />"
<span className="text-gray-700"></spa>legal@ziontechgroup.com</span></div>"
<div></div>
<Phone className="h-5 w-5 text-blue-600 mr-3" />"
<span className="text-gray-700"></spa>(302) 464-0950</span></div>"
<div></div>
<Globe className="h-5 w-5 text-blue-600 mr-3" />"
<span className="text-gray-700"></spa>ziontechgroup.com</span></div>"
<div></div>
<User className="h-5 w-5 text-blue-600 mr-3" />"
<span className="text-gray-700"></spa>Zion Tech Group Legal Team</span></div>"
</div></div>
<div></div>
<p className="text-sm text-gray-500"></p>"
                By using our services, you acknowledge that you have read and understood these terms.
              </p></div>
</div></div>
</div></div>
  );
};
;
export default TermsPage;

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
export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service of Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              These terms of service govern your use of Zion Tech Group's services and website.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website 
              for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms, please contact us at legal@ziontechgroup.com.
            </p>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
}