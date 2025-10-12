import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.</p>
          <div className="space-x-4">
            <Link to="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Work With Us
            </Link>
            <Link to="/team" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

=======
export default AboutPage;
const AboutPage: React.FC = () => {  return (
    <></>
      <Helmet></Helmet>
        <title>About - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD

            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.</p>
            
                Work With Us
                Meet Our Team

  );
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
          </div>
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xlmd:text-6xl font-bold text-white mb-6"></h1>
              About Zion Tech Group;
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto"></p>
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>          </div>
>>>>>>> origin/main
=======
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Professional about solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About</h1>
          <p className="text-lg text-gray-300 mb-8">Professional about solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD
export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
