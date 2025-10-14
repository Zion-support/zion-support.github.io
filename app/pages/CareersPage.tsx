import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-rose-9 0 0to-slate-9 0 0">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5 xlfont-boldtext-whitemb-6">
            Join Our <span className="text-transparentbg-clip-textbg-gradient-to-r from-rose-40 0 to-pink-4 0 0">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.';
            Work on cutting-edge projects and make a real impact.;
          </p>
          </div>
        </div>
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3 xlfont-boldtext-whitetext-center mb-12">Why Work With Us?</h2>
          <div className="gridmd:grid-cols-2 lg:grid-cols-4gap-8">
            {benefits.map((benefit, _index) => {
              const Icon = benefit.icon;
              return (
                <div key={_index} className="bg-white/10 backdrop-blur-smrounded-xlp-6borderborder-white/2 0text-center">
                  </div><div className="p-3 bg-gradient-to-r from-rose-5 0 0to-pink-5 0 0rounded-lgw-fitmx-automb-4">
                    <Icon className="w-6 h-6 text-white" />
                    </div>
        </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{benefit.title}</h3>
                  <p className="text-gray-30 0 text-sm">{benefit.description}</p>
                  </div>
        </div>
              )
  })}
            </div>
        </div>
          </div>
        </div>
        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3 xlfont-boldtext-whitetext-center mb-12">Open Positions</h2>
          <div className="gridmd:grid-cols-2 gap-6">
            {openPositions.map((position, _index) => (
              <div key={_index} className="bg-white/1 0 backdrop-blur-smrounded-xlp-6 borderborder-white/2 0hover:border-white/4 0transition-all duration-300">
                </div><div className="flexjustify-betweenitems-startmb-4">
                  <h3 className="text-xlfont-semiboldtext-white">{position.title}</h3>
                  <span className="bg-gradient-to-r from-rose-5 0 0 to-pink-5 0 0text-whitepx-3py-1rounded-fulltext-sm">
                    {position.type}
                  </span>
                  </div>
        </div>
                <div className="flexitems-centertext-gray-40 0 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{position.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{position.department}</span>
                  </div>
        </div>
                <p className="text-gray-30 0 mb-4">{position.description}</p>
                <button className="w-full bg-gradient-to-r from-rose-5 00 to-pink-5 00 text-white py-2 px-4rounded-lgfont-mediumhover:from-rose-6 00hover:to-pink-6 0 0transition-all duration-300">
                  Apply Now;
                </button>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
        {/* Company Culture */}
        <div className="bg-white/10 backdrop-blur-smrounded-xlp-8borderborder-white/2 0mb-1 6">
          <h2 className="text-3 xlfont-boldtext-whitetext-center mb-8">Our Culture</h2>
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-5 0 0to-pink-5 0 0rounded-fullw-fitmx-automb-4">
                <Users className="w-8 h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Collaborative</h3>
              <p className="text-gray-30 0">We believe in the power of teamwork and open communication to achieve great things.</p>
              </div>
        </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-5 0 0to-pink-5 0 0rounded-fullw-fitmx-automb-4">
                <Zap className="w-8 h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Innovative</h3>
              <p className="text-gray-30 0">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
              </div>
        </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-rose-5 0 0to-pink-5 0 0rounded-fullw-fitmx-automb-4">
                <Target className="w-8 h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Impact-Driven</h3>
              <p className="text-gray-30 0">We focus on delivering real value to our clients and making a positive impact.</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/1 0 backdrop-blur-smrounded-xlp-8borderborder-white/2 0max-w-2xlmx-auto">
            <h2 className="text-2 xlfont-bold text-white mb-4">Don't See Your Perfect Role?</h2>';
            <p className="text-gray-30 0 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.';
            </p>
            <button className="bg-gradient-to-r from-rose-5 00 to-pink-5 00 text-white px-8 py-3rounded-lgfont-semiboldhover:from-rose-6 00hover:to-pink-6 0 0transition-all duration-300">
              Send Resume;
            </button>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
  };

export default CareersPage;