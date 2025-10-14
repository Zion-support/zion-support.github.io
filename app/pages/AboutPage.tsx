<<<<<<< HEAD
import React from 'react";
import { Helmet } from 'react-helmet-async";
=======
import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
<<<<<<< HEAD
} from '@heroicons/react/24/outline";
=======
} from '@heroicons/react/24/outline';

<<<<<<< HEAD
export default function AboutPage() {
=======
>>>>>>> origin/main
const AboutPage: React.FC = () => {
>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." />"
      </Helmet>
      
<<<<<<< HEAD
      <div className="min-h-screen bg-slate-900 text-white">"
=======
      <div className="min-h-screen bg-slate-900 text-white">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cybersecurity, 
              and digital transformation services that help businesses thrive in the digital age.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation.
=======
>>>>>>> origin/main
        {/* Hero Section */}
        <div className="relative overflow-hidden">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">"
            <div className="text-center">"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
                About Zion Tech Group
              </h1>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">"
                Empowering businesses with cutting-edge AI and IT solutions for the digital age
>>>>>>> origin/main
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Innovation-driven approach</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Client-focused solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Cutting-edge technology</span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <HeartIcon className="w-6 h-6 text-red-400 mr-3" />
                  <span className="text-gray-300">Passion for excellence</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">Security first</span>
                </div>
                <div className="flex items-center">
                  <LightBulbIcon className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-gray-300">Innovation mindset</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Team collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We are a team of passionate professionals dedicated to delivering exceptional 
              technology solutions and outstanding customer service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <UserGroupIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-300">Highly skilled professionals with years of experience</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <RocketLaunchIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Always pushing the boundaries of what's possible</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <StarIcon className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">Committed to delivering the highest quality solutions</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-800/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business? Let's discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+1-302-464-0950"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
=======
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                To transform businesses through innovative technology solutions that drive growth, efficiency, and success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <LightBulbIcon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>"
                <p className="text-gray-300">We stay at the forefront of technology to deliver cutting-edge solutions</p>"
              </div>
              <div className="text-center">"
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <ShieldCheckIcon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-semibold mb-3">Security</h3>"
                <p className="text-gray-300">Your data and systems are protected with enterprise-grade security</p>"
              </div>
              <div className="text-center">"
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <RocketLaunchIcon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth</h3>"
                <p className="text-gray-300">We help businesses scale and achieve their full potential</p>"
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
              <div className="bg-slate-800/50 rounded-lg p-6">"
                <CheckCircleIcon className="w-8 h-8 text-green-400 mb-4" />"
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>"
                <p className="text-gray-300">We strive for the highest quality in everything we deliver</p>"
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">"
                <UserGroupIcon className="w-8 h-8 text-blue-400 mb-4" />"
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>"
                <p className="text-gray-300">We work closely with our clients as trusted partners</p>"
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">"
                <HeartIcon className="w-8 h-8 text-red-400 mb-4" />"
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>"
                <p className="text-gray-300">We conduct business with honesty and transparency</p>"
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">"
                <StarIcon className="w-8 h-8 text-yellow-400 mb-4" />"
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>"
                <p className="text-gray-300">We embrace new technologies and creative solutions</p>"
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                Experienced professionals dedicated to your success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4"></div>"
                <h3 className="text-xl font-semibold mb-2">Expert Engineers</h3>"
                <p className="text-gray-300">Certified professionals with years of experience in AI and IT</p>"
              </div>
              <div className="text-center">"
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-4"></div>"
                <h3 className="text-xl font-semibold mb-2">Security Specialists</h3>"
                <p className="text-gray-300">Cybersecurity experts ensuring your systems are protected</p>"
              </div>
              <div className="text-center">"
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mx-auto mb-4"></div>"
                <h3 className="text-xl font-semibold mb-2">Project Managers</h3>"
                <p className="text-gray-300">Dedicated professionals ensuring smooth project delivery</p>"
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20">"
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
              Let's discuss how we can help transform your business'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <a
                href="/contact""
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300""
              >
                Get In Touch
              </a>
              <a
                href="/services""
                className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300""
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
export default AboutPage;
=======
  );
};

export default AboutPage;
=======

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about Zion Tech Group</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
