import React from 'react'
import { Helmet } from 'react-helmet-async'
import {



      <div className="min-h-screenbg-slate-900text-white">
        {/* Hero Section */}
        <section className="relativ e py-20bg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900">
          <div className="containermx-autopx-4text-center">
            <h1 className="text -5xl md:text-6xlfont-boldmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses 
              through innovative technology solutions.
            </p>
            </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="max-w-4xlmx-autotext-center">
              <h2 className="text-4xlmd:text-5xlfont-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xltext-gray-300mb-12leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.
              </p>
              
              <div className="gridmd:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                    </div>
        </div>
                ))}
  )
                </div>
              </div>
            </div>
        </section>

        {/* Values Section */}
        <section className="py-20bg-slate-800/5 0">
          <div className="containermx-autopx-4">
            <div className="text-center mb-16">
              <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6">
                Our Values
              </h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                These core values guide everything we do and shape our approach to client success.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                    <value.icon className="w -8h-8 text-white" />
                    </div>
        </div>
                  <h3 className="text-xlfont-bold text-whitemb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                  </div>
              ))}
  )
              </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="text-center mb-16">
              <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6">
                Meet Our Team
              </h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and business transformation.
              </p>
              </div>
            
            <div className="gridmd:grid-cols-2 lg:grid-cols-4gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                    </div>
        </div>
                  <h3 className="text-xlfont-bold text-whitemb-2">{member.name}</h3>
                  <div className="text-purple-400font-semiboldmb-3">{member.role}</div>
                  <p className="text-gray-300text-sm">{member.description}</p>
                  </div>
              ))}
  )
              </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20bg-gradient-to-rfrom-purple-900/3 0to-cyan-900/3 0">
          <div className="containermx-autopx-4text-center">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Let&apos;s discuss how our team can help transform your business with 
              cutting-edge AI and IT solutions.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to- r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-allduration-300transformhover:scale-105flexitems-centerjustify-centergap-2">
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border -2 border-white text-white px-8py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-900transition-allduration-300">
                View Our Work
              </button>
              </div>
            </div>
        </section>
      </div>
</>
  );
};

export default AboutPage;
