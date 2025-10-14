import React from "react";
import { Helmet } from "react-helmet-async";
import { Heart, Zap, Target } from "lucide-react";

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of passionate AI and IT experts
            who are building the next generation of digital solutions.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Join Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Heart className="h-8 w-8 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Passionate Team</h3>
              <p className="text-gray-300">
                Work with like-minded professionals who are passionate about technology and innovation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="h-8 w-8 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Projects</h3>
              <p className="text-gray-300">
                Work on innovative AI and IT projects that shape the future of technology.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="h-8 w-8 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Growth Opportunities</h3>
              <p className="text-gray-300">
                Continuous learning and career development opportunities in emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Explore our current openings and take the next step in your career.
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;