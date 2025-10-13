import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function careers() {
export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" content="Careers solutions by Zion Tech Group"container mx-auto px-4 py-20"text-center"text-4 xl font-bold mb-8"text-xl text-gray-300 mb-8"text-4 xl font-bold mb-8"text-gray-300"w-6 h-6"w-6 h-6"w-6 h-6"w-6 h-6"description" content=" />
        <meta name="keywords"careers, jobs, technology, AI, software development, cybersecurity, remote work" />
//       </Helmet>

      <div className="py-20 px-4">
          <div className="text-5 xl md:text-6 xl font-bold mb-6">
              <span className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
//               Be part of a dynamic team that's shaping the future of technology.
              We're looking for passionate individuals who want to make a difference.
</p>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
//                 View Open Positions
                <ArrowRight className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
//                 Learn About Us
</button>
</div>
</div>
//         </section>

        {/* Benefits Section */}
        <section className="max-w-7 xl mx-auto">
            <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
</div>
                  <h3 className="text-gray-300">{benefit.description}</p>
</div>
              ))}
</div>
</div>
//         </section>

        {/* Job Openings Section */}
        <section className="max-w-7 xl mx-auto">
            <h2 className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                     <div>
                      <h3 className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="w-4 h-4 mr-2" />
                          {job.department}
</span>
                        <span className="w-4 h-4 mr-2" />
                          {job.location}
</span>
                        <span className="w-4 h-4 mr-2" />
                          {job.type}
</span>
                        <span className="w-4 h-4 mr-2" />
                          {job.experience}
</span>
</div>
</div>
                    <button className="text-gray-300 mb-4">{job.description}</p>
//                   <div>
                    <h4 className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {req}
//                         </li>
                      ))}
//                     </ul>
</div>
</div>
              ))}
</div>
</div>
//         </section>

        {/* CTA Section */}
        <section className="max-w-4 xl mx-auto text-center">
            <h2 className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
</p>
            <button className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</button>
</div>
//         </section>
</div>
//     </>
  );
