import React from "react";"
import { Helmet } from "react-helmet-async";"
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react;const CareersPage: React.FC = () => {""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90 via-rose-90 to-slate-90">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-40 to-pink-40">Team</span>
          </h$1>
          <p className="text-xl text-gray-30 mb-8 max-w-3xl mx-auto">
            Be part of a team that"s shaping the future of AI and IT solutions.";"
            Work on cutting-edge projects and make a real impact.;
          </p>
        </div>
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h$1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(benefit, _index) => {
              const Icon = benefit.icon;
              return (
                <div key={_index} className="bg-white"/10 backdrop-blur-sm rounded-xl p-6 border border-white"/20 text-center">
                  <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h$1>
                  <p className="text-gray-30 text-sm">{benefit.description}</p>
                </div>
              )})}
          </div>
        </div>
        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h$1>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map(position, _index) => (
              <div key={_index} className="bg-white"/10 backdrop-blur-sm rounded-xl p-6 border border-white"/20 hover:border-white"/40 transition-all duration-30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h$1>
                  <span className="bg-gradient-to-r from-rose-50 to-pink-50 text-white px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-40 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{position.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{position.department}</span>
                </div>
                <p className="text-gray-30 mb-4">{position.description}</p>
                <button className="w-full bg-gradient-to-r from-rose-50 to-pink-50 text-white py-2 px-4 rounded-lg font-medium hover: from-rose-60 hover:to-pink-60 transition-all duration-30">
                  Apply Now;
                </button>
              </div>)}
          </div>
        </div>
        {/* Company Culture */}
        <div className="bg-white"/10 backdrop-blur-sm rounded-xl p-8 border border-white"/20 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture</h$1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative</h$1>
              <p className="text-gray-30">We believe in the power of teamwork and open communication to achieve great things.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-full w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovative</h$1>
              <p className="text-gray-30">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-full w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Impact-Driven</h$1>
              <p className="text-gray-30">We focus on delivering real value to our clients and making a positive impact.</p>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white"/10 backdrop-blur-sm rounded-xl p-8 border border-white"/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Don"t See Your Perfect Role?</h$1>";""
            <p className="text-gray-30 mb-6">
              We"re always looking for talented individuals. Send us your resume and we"ll keep you in mind for future opportunities.";"
            </p>
            <button className="bg-gradient-to-r from-rose-50 to-pink-50 text-white px-8 py-3 rounded-lg font-semibold hover: from-rose-60 hover:to-pink-60 transition-all duration-30">
              Send Resume;
            </button>
          </div>
        </div>
      </div>
    </div>;  )}export default CareersPage;
        </div>
      </div>
    </>
  )};
export default CareersPage;
