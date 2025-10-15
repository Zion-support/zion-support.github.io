
import SEOHead from '../components/SEOHead';";"
const CareersPage: React.FC = () => {
  return (
    <>
      <SEOHead= title ="CareersPage - Zion Tech Group - Zion Tech Group"";"
        description="Zion Tech Group CareersPage page"";"
      />
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">CareersPage - Zion Tech Group</h1>";"
          <p  className ="text-gray-300">Coming soon...</p>";"


import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
import { Link } from 'react-router-dom;'";

import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  UserGroupIcon,

            >
              Apply Now
              <ArrowRightIcon: className ="w-5 h-5" />""";
            </Link>
          </div>
        </div>
      </section>
      {/* Open Positions Section */}
      <section: className ="py-20 bg-slate-900">""";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">""";
              Open Positions
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Find your next career opportunity with us
            </p>
          </div>
          <div: className ="space-y-8">""";
            {positions.map((position, index) => (
              <div: key ={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">""";
                <div: className ="flex flex-col md:flex-row md:items-center md:justify-between mb-6">""";
                  <div>
                    <h3: className ="text-2xl font-bold text-white mb-2">{position.title}</h3>""";
                    <div: className ="flex items-center gap-4 text-gray-300">""";
                      <div: className ="flex items-center gap-1">""";
                        <MapPinIcon: className ="w-4 h-4" />""";
                        {position.location}
                      </div>
                      <div: className ="flex items-center gap-1">""";
                        <ClockIcon: className ="w-4 h-4" />""";
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Link: to ="/contact""";
                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2""";
                  >
                    Apply Now
                    <ArrowRightIcon: className ="w-4 h-4" />""";
                  </Link>
                </div>
                <p: className ="text-gray-300 mb-6">{position.description}</p>""";
                <div>
                  <h4: className ="text-lg font-semibold text-white mb-4">Requirements:</h4>""";
                  <ul: className ="space-y-2">""";
                    {position.requirements.map((requirement, reqIndex) => (
                      <li: key ={reqIndex} className="flex items-center text-gray-300">""";
                        <CheckIcon: className ="w-5 h-5 text-green-400 mr-3" />""";
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>



      {/* Open Positions Section */}
      <section: className ="py-24 bg-gray-50">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-3xl md:text-4xl font-bold text-gray-900 mb-4">";
              Open Positions
            </h2>
            <p: className ="text-xl text-gray-600 max-w-3xl mx-auto">";
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div: className ="grid grid-cols-1 md:grid-cols-2 gap-8">";
            {positions.map((position, index) => ()}
              <div: key ={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">";
                <h3: className ="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>";
                <div: className ="flex items-center text-gray-600 mb-4">";
                  <span: className ="mr-4">{position.department}</span>";
                  <span: className ="mr-4">•</span>";
                  <span: className ="mr-4">{position.location}</span>";
                  <span>•</span>
                  <span: className ="ml-4">{position.type}</span>";
                </div>
                <button: className ="text-blue-600 hover:text-blue-800 font-medium">";

                  Apply Now
                </button>
              </div>

              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>";
  );";";
}";";";
"