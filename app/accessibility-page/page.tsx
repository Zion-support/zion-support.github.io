<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;"
import SEOHead from '../components/SEOHead'
=======
<<<<<<< HEAD
import React from 'react";";";";
import SEOHead from '../components/SEOHead";
const AccessibilityPagePage: React.FC  =  () => {};
  return ()";
    <>{}</>";";
      <SEOHead>";";";
        title="Page - Zion Tech Group"
        description="Professional page solutions for modern businesses"
      />"
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold mb-4">Page</h1>"
          <p className="text-gray-300">Making digital experiences accessible to everyone</p>
=======
<<<<<<< HEAD
import React from 'react;'";
import { ArrowRight } from 'lucide-react;'";
import { CheckCircle } from 'lucide-react;'";
import { Star } from 'lucide-react;'";
import { Users } from 'lucide-react;'";
import { Clock } from 'lucide-react;'";
import { DollarSign } from 'lucide-react;'";
import { Shield } from 'lucide-react;'";
import { Code } from 'lucide-react;'";
import { Database } from 'lucide-react;'";
import { Mail } from 'lucide-react;'";
import { Settings } from 'lucide-react;'";
import { Target } from 'lucide-react;'";
import { TrendingUp } from 'lucide-react;'";
import { PieChart } from 'lucide-react;'";
import { MessageSquare } from 'lucide-react;'";
import { Heart } from 'lucide-react;'";
import { Globe } from 'lucide-react;'";
import { Smartphone } from 'lucide-react;'";
import { Network } from 'lucide-react;'";
import { Lock } from 'lucide-react;'";
import { Cpu } from 'lucide-react;'";
import { Wifi } from 'lucide-react;'";
import { Building2 } from 'lucide-react;'";
import { Briefcase } from 'lucide-react;'";
import { Lightbulb } from 'lucide-react;'";
import { Link } from 'react-router-dom;'";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
=======
import React from 'react';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Accessibility Solutions',
      description: 'Comprehensive accessibility solutions for inclusive digital experiences'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'WCAG Compliance',
      description: 'Ensure your website meets WCAG 2.1 AA standards'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our accessibility specialists'
    }
  ];
<<<<<<< HEAD
=======
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Code } from 'lucide-react';

export default function AccessibilityPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Accessibility Solutions
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Making technology accessible to everyone through innovative solutions and 
            inclusive design practices.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WCAG Compliance
              </h3>
              <p className="text-gray-600">
                Ensure your applications meet WCAG 2.1 AA standards for accessibility.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inclusive Design
              </h3>
              <p className="text-gray-600">
                Design products that work for users with diverse abilities and needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Code className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Implementation
              </h3>
              <p className="text-gray-600">
                Implement accessibility features with clean, semantic code.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
=======

  return (
    <>
      <EnhancedSEO title="Accessibility Solutions - Zion Tech Group" description="Comprehensive accessibility solutions for inclusive digital experiences" />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your digital experiences accessible to everyone with our comprehensive accessibility solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
>>>>>>> main
const AccessibilityPagePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="Page - Zion Tech Group""
        description="Professional page solutions for modern businesses""
      />
<<<<<<< HEAD
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div  className ="text-center">"
          <h1  className ="text-4xl font-bold mb-4">Page</h1>"
          <p  className ="text-gray-300">Making digital experiences accessible to everyone</p>"
=======
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Page</h1>";
          <p: className ="text-gray-300">Making digital experiences accessible to everyone</p>";
>>>>>>> main
>>>>>>> main
        </div>
      </div>
    </>
  )
    },
<<<<<<< HEAD
    {}
export default PagePage
=======
    {};
export default PagePage;
<<<<<<< HEAD
const AccessibilityPagePage: React.FC = () => {";
  ";";
  return (";";";
    <>";";";";
      <SEOHead title ="Accessibility Page - Zion Tech Group"";"
        description="Professional accessibility solutions for modern businesses"";";";";
      />"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Accessibility Page</$1>"
          <p className ="text-gray-300">Making digital experiences accessible to everyone</$1>
=======

const AccessibilityPagePage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="Accessibility Page - Zion Tech Group"";";
        description="Professional accessibility solutions for modern businesses"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Accessibility Page</h1>";";
          <p: className ="text-gray-300">Making digital experiences accessible to everyone</p>";";
>>>>>>> main
        </div>
      </div>
    </>,
  ),

};";
";";
export default AccessibilityPagePage;";";";
"
>>>>>>> main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
