import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-9 0 0 to-slate-9 0 0">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Joinour team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers,jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      <div className="container mx-autopx-4 py-16">
        {/* Hero Section */}
        <div className="text-centermb-16">
          <h1 className="text-5 xlfont-boldtext-whitemb-6">
            Join Our <span className="text-transparentbg-clip-textbg-gradient-to-rfrom-rose-400 to-pink-4 0 0">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.';
            Work on cutting-edge projects and make a real impact.;
          </p>
          </div>
        </div>
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3 xlfont-boldtext-whitetext-centermb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4gap-8">
            {benefits.map((benefit, _index) => {
              const Icon = benefit.icon;
              return (
                <divkey={_index} className="bg-white/10 backdrop-blur-smrounded-xlp-6borderborder-white/2 0 text-center">
                  </div><div className="p-3 bg-gradient-to-rfrom-rose-50 0 to-pink-5 0 0 rounded-lgw-fitmx-automb-4">
                    <Icon className="w-6 h-6text-white" />
                    </div>
        </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
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
          <h2 className="text-3 xlfont-boldtext-whitetext-centermb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {open Positions.map((position, _index) => (
              <divkey={_index} className="bg-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/2 0 hover:border-white/4 0 transition-all duration-300">
                </div><div className="flexjustify-betweenitems-startmb-4">
                  <h3 className="text-xlfont-semiboldtext-white">{position.title}</h3>
                  <span className="bg-gradient-to-rfrom-rose-500 to-pink-5 0 0 text-whitepx-3 py-1 rounded-fulltext-sm">
                    {position.type}
                  </span>
                  </div>
        </div>
                <div className="flexitems-centertext-gray-400 mb-3">
                  <MapPin className="w-4 h-4mr-2" />
                  <span className="text-sm">{position.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{position.department}</span>
                  </div>
        </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <but ton className="w-fullbg-gradient-to-rfrom-rose-5 00 to-pink-5 00 text-white py-2 px-4 rounded-lgfont-mediumhover:from-rose-6 00 hover:to-pink-6 0 0 transition-all duration-300">
                  Apply Now;
                </butn>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
        {/* Company Culture */}
        <div className="bg-white/10 backdrop-blur-smrounded-xlp-8borderborder-white/2 0 mb-1 6">
          <h2 className="text-3 xlfont-boldtext-whitetext-centermb-8">Our Culture</h2>
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-rfrom-rose-50 0 to-pink-5 0 0 rounded-fullw-fitmx-automb-4">
                <Users className="w-8 h-8text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Collaborative</h3>
              <p className="text-gray-300">We believe in the power of teamwork and open communication to achieve great things.</p>
              </div>
        </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-rfrom-rose-50 0 to-pink-5 0 0 rounded-fullw-fitmx-automb-4">
                <Zap className="w-8 h-8text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Innovative</h3>
              <p className="text-gray-300">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
              </div>
        </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-rfrom-rose-50 0 to-pink-5 0 0 rounded-fullw-fitmx-automb-4">
                <Target className="w-8 h-8text-white" />
                </div>
        </div>
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Impact-Driven</h3>
              <p className="text-gray-300">We focus on delivering real value to our clients and making a positive impact.</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-smrounded-xlp-8 borderborder-white/2 0 max-w-2 xlmx-auto">
            <h2 className="text-2 xlfont-boldtext-white mb-4">Don't See Your Perfect Role?</h2>';
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.';
            </p>
            <but ton className="bg-gradient-to-rfrom-rose-500 to-pink-5 00 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-rose-6 00 hover:to-pink-6 0 0 transition-all duration-300">
              Send Resume;
            </butn>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
  };

export default CareersPage;