
};export default CareersPage;import React, { useState } from 'react';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {motion} from 'framer-motion';
import {Users, Rocket, Brain, Globe, Award, Zap, Heart, Star, ArrowRight, CheckCircle, Briefcase} from 'lucide-react';
    }
    {
      id: 2
      title: 'Quantum Computing Researcher'
      department: 'quantum'
      location: 'Remote / Middletown, DE';
    }
    {
      id: 4
      title: 'Full Stack Developer'
      department: 'engineering'
      location: 'Remote / Middletown, DE';
    }
    {
      id: 5
      title: 'Business Development Manager'
      department: 'sales'
      location: 'Remote / Middletown, DE';
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
          className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Culture & Values</h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {companyValues && companyValues.map((value, index) => (;
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 text-center">;
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">;
                  {value && value.icon}
                </div>;
                <h3 className="text-lg font-bold text-white mb-3">{value && value.title}</h3>;
                <p className="text-gray-300 text-sm">{value && value.description}</p>;
              </div>;
            ))}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
          className="mb-16">;
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>;
          <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-8 rounded-2xl border border-gray-600/20 max-w-4xl mx-auto">;
            <div className="grid md:grid-cols-2 gap-6">;
              {benefits && benefits.map((benefit, index) => (;
                <div key={index} className="flex items-center">;
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                  <span className="text-gray-300">{benefit}</span>;
                </div>;
              ))}
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">;
            {departments && departments.map((dept) => (;
              <button
                key={dept && dept.id}
                onClick={() => setSelectedDepartment(dept && dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${;
                  selectedDepartment === dept && dept.id;
                    ? 'bg-blue-500 text-white';
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50';
                }`}
              >;
                {dept && dept.name}
              </button>;
            ))}
          {/* Job Listings */}
          <div className="space-y-6">;
            {filteredJobs && filteredJobs.map((job) => (;
              <motion&& motion.div
                key={job && job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300">;
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">;
                  <div>;
                    <h3 className="text-xl font-bold text-white mb-2">{job && job.title}</h3>;
                    <div className="flex flex-wrap gap-3 text-sm">;
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">;
                        {departments && departments.find(d => d && d.id === job && job.department)?.name}
                      </span>;
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">;
                        {job && job.location}
                      </span>;
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">;
                        {job && job.type}
                      </span>;
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">;
                        {job && job.experience}
                      </span>;
                    </div>;
                  </div>;
                  <a
                Learn More About Us;
              </a>;
            </div>;
          </div>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default CareersPage;

=======
        </motion.div>;
      </div>;
    </Layout>);
}
;
export default CareersPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
