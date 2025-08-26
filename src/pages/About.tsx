<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            The world's first free marketplace dedicated to high-tech and artificial intelligence. 
            Connecting innovators, talent, and cutting-edge technology worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-zion-blue-light/20 rounded-2xl p-8 md:p-12 mb-16 border border-zion-blue-light/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-zion-slate-light max-w-4xl mx-auto">
              To democratize access to cutting-edge technology and AI solutions by creating an open, 
              collaborative platform where innovation thrives and boundaries are pushed every day.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Innovation First</h3>
              <p className="text-zion-slate-light text-center">
                We constantly push the boundaries of what's possible, embracing emerging 
                technologies and creative solutions to solve complex challenges.
              </p>
            </div>

            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Excellence</h3>
              <p className="text-zion-slate-light text-center">
                We maintain the highest standards in everything we do, from code quality 
                to customer service, ensuring exceptional results for our clients.
              </p>
            </div>

            <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-green/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-zion-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Collaboration</h3>
              <p className="text-zion-slate-light text-center">
                We believe in the power of teamwork and partnerships, working closely 
                with clients and stakeholders to achieve shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-zion-blue-light/20 rounded-2xl p-8 md:p-12 mb-16 border border-zion-blue-light/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Zion Tech Group by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-green mb-2">98%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-orange mb-2">5+</div>
              <div className="text-zion-slate-light">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, developers, and businesses who are already 
            transforming the future with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from 'react';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function About() {
    return (
        <>
            <SEO 
                title="About Zion - The Future of AI & Tech Marketplace" 
                description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
                keywords="about Zion, AI marketplace, tech platform, mission, vision, team" 
                canonical="https://ziontechgroup.com/about"
            />
            <Header />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>About Zion</GradientHeading>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            The world's first free marketplace dedicated to high-tech and artificial intelligence
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-zion-slate-light text-lg mb-6">
                                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                                We believe that innovation thrives when barriers are removed and connections are made.
                            </p>
                            <p className="text-zion-slate-light text-lg mb-6">
                                Our platform brings together talented AI specialists, innovative companies, and the latest 
                                technological solutions in one seamless ecosystem.
                            </p>
                            <p className="text-zion-slate-light text-lg">
                                By connecting talent with opportunity and innovation with implementation, we're creating 
                                a global community where the future of technology is being built today.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                                alt="Team collaboration" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-zion-slate-light text-lg mb-6">
                                We envision a world where AI and technology are accessible to all, regardless of geographical 
                                or financial constraints. A world where the best minds can collaborate to solve the most 
                                challenging problems.
                            </p>
                            <p className="text-zion-slate-light text-lg mb-6">
                                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                                that puts people at the center of technological advancement.
                            </p>
                            <p className="text-zion-slate-light text-lg">
                                Our goal is to become the premier destination for AI and tech innovation, fostering 
                                a community that shapes the future of how we live, work, and interact with technology.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden lg:order-first">
                            <img 
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600" 
                                alt="Tech innovation" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                                <p className="text-zion-slate-light">
                                    We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                                </p>
                            </div>
                            
                            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                                <p className="text-zion-slate-light">
                                    We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                                </p>
                            </div>
                            
                            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                                <p className="text-zion-slate-light">
                                    We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
}
