<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
export default function TutorialsPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Tutorials solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive tutorials solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Tutorials() {return (
    <title>Tutorials - Zion Tech Group</title>

        <>
      <title>Tutorials - Zion Tech Group</title>

      <  />
  );}

    <><  />
      <Helmet></Helmet>
=======
import React  from 'react';
const TutorialsPage: React.FC = () => {
  return (
      <Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides."   /></meta>
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education"   /></meta>
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Tutorials & Learning Center;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Tutorials & Learning Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            {/* AI Tutorials */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h3 className="text-2 xl font-bold text-white mb-4"  >AI Tutorials</h3>
              <p className="w-5h-5ml-2">Learn artificial intelligence from basics to advanced implementations.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• Machine Learning Fundamentals</li>
                <li  >• Deep Learning with TensorFlow</li>
                <li  >• Natural Language Processing</li>
                <li  >• Computer Vision Applications</li>
              </ul>
            </div>
<<<<<<< HEAD
            {/* IT Infrastructure */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {/* IT Infrastructure */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40transition-allduration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <h3 className="text-2 xl font-bold text-white mb-4"  >IT Infrastructure</h3>
              <p className="w-5h-5ml-2">Master cloud computing, DevOps, and system administration.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• Cloud Architecture Design</li>
                <li  >• Container Orchestration</li>
                <li  >• CI/CD Pipeline Setup</li>
                <li  >• Security Best Practices</li>
              </ul>
            </div>
<<<<<<< HEAD
            {/* Web Development */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {/* Web Development */}
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40transition-allduration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <h3 className="text-2 xl font-bold text-white mb-4"  >Web Development</h3>
              <p className="w-5h-5ml-2">Build modern, scalable web applications with cutting-edge technologies.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• React & Next.js Mastery</li>
                <li  >• Full-Stack Development</li>
                <li  >• API Design & Integration</li>
                <li  >• Performance Optimization</li>
              </ul>
            </div>
<<<<<<< HEAD
            {/* Data Science */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {/* Data Science */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40transition-allduration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <h3 className="text-2 xl font-bold text-white mb-4"  >Data Science</h3>
              <p className="w-5h-5ml-2">Extract insights from data using advanced analytics and visualization.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• Data Analysis with Python</li>
                <li  >• Statistical Modeling</li>
                <li  >• Data Visualization</li>
                <li  >• Big Data Processing</li>
              </ul>
            </div>
<<<<<<< HEAD
            {/* Cybersecurity */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {/* Cybersecurity */}
            <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/40transition-allduration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <h3 className="text-2 xl font-bold text-white mb-4"  >Cybersecurity</h3>
              <p className="w-5h-5ml-2">Protect systems and data with comprehensive security strategies.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• Threat Detection & Response</li>
                <li  >• Penetration Testing</li>
                <li  >• Security Architecture</li>
                <li  >• Compliance & Governance</li>
              </ul>
            </div>
<<<<<<< HEAD
            {/* Mobile Development */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======

            {/* Mobile Development */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40transition-allduration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <h3 className="text-2 xl font-bold text-white mb-4"  >Mobile Development</h3>
              <p className="w-5h-5ml-2">Create cross-platform mobile applications with modern frameworks.
              </p>
              <ul className="w-5h-5ml-2"   /></ul>
                <li  >• React Native Development</li>
                <li  >• Flutter Applications</li>
                <li  >• Native iOS & Android</li>
                <li  >• Mobile UI/UX Design</li>
              </ul>
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  >Ready to Start Learning?</h2>
<<<<<<< HEAD
            <p className="w-5h-5ml-2">Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2">Browse All Tutorials;
=======
            <p className="text-gray-300 mb-8 max-w-2xlmx-auto">
              Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300"  />Browse All Tutorials
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
              <button className="w-5h-5ml-2">Get Personalized Recommendations;
              </button>
            </div>
        </div>
<<<<<<< HEAD
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Professional tutorials services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Tutorials</h1>
          <p className="text-lg text-gray-300 mb-8">Professional tutorials services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default TutorialsPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
