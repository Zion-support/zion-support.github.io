<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead AI model development and implementation for enterprise clients"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our products"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth by building relationships with enterprise clients"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses",
      icon: BriefcaseIcon
    },
    {
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance",
      icon: AcademicCapIcon
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours and unlimited PTO policy",
      icon: HeartIcon
    },
    {
      title: "Innovation Time",
      description: "20% time to work on personal projects and innovation",
      icon: LightBulbIcon
    }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main

export default function Page() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, UX designer, technology careers" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build the future of AI and technology with us
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to make a real impact in the world 
              of artificial intelligence and technology. Join us in creating solutions that transform businesses.
            </p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Learn more about page" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career in innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span>{position.department}</span>
                  <span>•</span>
                  <span>{position.location}</span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                  Apply Now
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Remote-First",
                description: "Work from anywhere in the world with flexible hours and full support"
              },
              {
                title: "Diverse & Inclusive",
                description: "We celebrate diversity and create an inclusive environment for all"
              },
              {
                title: "Innovation-Driven",
                description: "We encourage experimentation and reward creative problem-solving"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:careers@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Your Resume
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>careers@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}