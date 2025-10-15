import React from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react";

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.
            We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Heart className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Work-Life Balance</h3>
            <p className="text-gray-300">Flexible hours and remote work options to support your lifestyle.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
            <p className="text-gray-300">Continuous learning and career development programs.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Target className="w-8 h-8 text-rose-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Impactful Work</h3>
            <p className="text-gray-300">Work on projects that make a real difference in the world.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
