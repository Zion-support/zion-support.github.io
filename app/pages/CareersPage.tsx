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
            Be part of a team that&apos;s shaping the future of AI and IT solutions.
            Work on cutting-edge projects and make a real impact.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Heart className="w-12 h-12 text-rose-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Passionate Team</h3>
            <p className="text-gray-300">
              Work alongside passionate professionals who are dedicated to innovation and excellence.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="w-12 h-12 text-rose-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
            <p className="text-gray-300">
              Work with the latest AI, cloud, and cybersecurity technologies.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Target className="w-12 h-12 text-rose-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
            <p className="text-gray-300">
              Continuous learning and career development opportunities.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">Senior AI Engineer</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" />Engineering</span>
              </div>
              <p className="text-gray-300 mb-4">
                Lead the development of cutting-edge AI solutions and machine learning models.
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">Cloud Solutions Architect</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" />Architecture</span>
              </div>
              <p className="text-gray-300 mb-4">
                Design and implement scalable cloud infrastructure solutions for our clients.
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity Specialist</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Full-time</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" />Security</span>
              </div>
              <p className="text-gray-300 mb-4">
                Protect our clients&apos; digital assets with advanced security solutions.
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Health Insurance</h3>
              <p className="text-gray-300">Comprehensive health coverage for you and your family</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Flexible Schedule</h3>
              <p className="text-gray-300">Work-life balance with flexible working hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Learning Budget</h3>
              <p className="text-gray-300">Annual budget for courses, conferences, and certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Remote Work</h3>
              <p className="text-gray-300">Work from anywhere with our remote-first culture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Stock Options</h3>
              <p className="text-gray-300">Equity participation in our growing company</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Team Events</h3>
              <p className="text-gray-300">Regular team building and social events</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your resume and let&apos;s talk!
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Send Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;