import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react'




const Careers Page: React.FC = () => {
  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900 via-rose-900to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of A I and I T experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, A I engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xlfont-bold text-whitemb-6">
            Join Our <span className="text-transparentbg-clip-textbg-gradient-to-rfrom-rose-400to-pink-400">Team</span>
          </h1>
          <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.';
            Work on cutting-edge projects and make a real impact.;
          </p>
          </div>
        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xlfont-bold text-whitetext-centermb-12">Why Work With Us?</h2>
          <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8">
            {benefits.map((benefit, _index) => {
              const Icon = benefit.icon
              return (
                <div key={_index} className="bg-white/1 0backdrop-blur-smrounded-xlp-6borderborder-white/2 0text-center">
              </div>
              <div className="p -3bg-gradient-to-rfrom-rose-500to-pink-500rounded-lgw-fitmx-automb-4">
                    <Icon className="w -6h-6 text-white" />
                    </div>
        </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300text-sm">{benefit.description}</p>
                  </div>
              )
  })}
  )
            </div>
          </div>
        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xlfont-bold text-whitetext-centermb-12">Open Positions</h2>
          <div className="gridmd:grid-cols-2gap-6">
            {openPositions.map((position, _index) => (
              <div key={_index} className="bg-whit e/1 0 backdrop-blur-smrounded-xlp-6borderborder-white/2 0hover:border-white/4 0transition-allduration-300">
              </div>
              <div className="flexjustify-betweenitems-startmb-4">
                  <h3 className="text-xlfont-semiboldtext-white">{position.title}</h3>
                  <span className="bg-gradient-to- rfrom-rose-500to-pink-500text-whitepx-3py-1rounded-fulltext-sm">
                    {position.type}
  )
                  </span>
                  </div>
        </div>
                <div className="flexitems-centertext-gray-400mb-3">
                  <MapPin className="w -4h-4 mr-2" />
                  <span className="text-sm">{position.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{position.department}</span>
                  </div>
        </div>
                <p className="text-gray-300mb-4">{position.description}</p>
                <button className="w-ful l bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2px-4rounded-lgfont-mediumhover:from-rose-600 hover:to-pink-600transition-allduration-300">
                  Apply Now;
                </button>
                </div>
            ))}
  )
            </div>
          </div>
        {/* Company Culture */}
        <div className="bg-white/1 0backdrop-blur-smrounded-xlp-8borderborder-white/2 0mb-16">
          <h2 className="text-3xlfont-bold text-whitetext-centermb-8">Our Culture</h2>
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p -4bg-gradient-to-rfrom-rose-500to-pink-500rounded-fullw-fitmx-automb-4">
                <Users className="w -8h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative</h3>
              <p className="text-gray-300">We believe in the power of teamwork and open communication to achieve great things.</p>
              </div>
            <div className="text-center">
              <div className="p -4bg-gradient-to-rfrom-rose-500to-pink-500rounded-fullw-fitmx-automb-4">
                <Zap className="w -8h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovative</h3>
              <p className="text-gray-300">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
              </div>
            <div className="text-center">
              <div className="p -4bg-gradient-to-rfrom-rose-500to-pink-500rounded-fullw-fitmx-automb-4">
                <Target className="w -8h-8 text-white" />
                </div>
        </div>
              <h3 className="text-xl font-semibold text-white mb-3">Impact-Driven</h3>
              <p className="text-gray-300">We focus on delivering real value to our clients and making a positive impact.</p>
              </div>
            </div>
          </div>
        {/* CT A Section */}
  )
        <div className="text-center">
          <div className="bg-white/10backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xlfont-bold text-white mb-4">Don't See Your Perfect Role?</h2>';
            <p className="text-gray-300mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.';
            </p>
            <button className="bg-gradient-to-r from-rose-5 00 to-pink-5 00 text-white px-8 py-3rounded-lgfont-semiboldhover:from-rose-6 00hover:to-pink-6 0 0transition-all duration-300">
          <div className="bg-whit e/1 0backdrop-blur-smrounded-xlp-8borderborder-white/2 0max-w-2xlmx-auto">
            <h2 className="text-2xlfont-bold text-whitemb-4">Don't See Your Perfect Role?</h2>';
            <p className="text-gray-300mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.';
            </p>
            <button className="bg-gradient-to- r from-rose-500 to-pink-500 text-white px-8py-3rounded-lgfont-semiboldhover:from-rose-600 hover:to-pink-600transition-allduration-300">
              Send Resume;
            </button>
            </div>
          </div>
      </div>
  )
  }
  )
export default Careers;; Page
