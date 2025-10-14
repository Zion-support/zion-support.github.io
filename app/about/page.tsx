import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  UsersIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description content="Learn about Zion Tech Group's mission to revolutionize AI and IT solutions." />
      </Helmet>
      <div className=min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className=text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto>
              Pioneering the future of AI and IT solutions with cutting-edge technology and innovative approaches.
            </p>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className=max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className=text-lg text-gray-600 mb-6">
                  We are dedicated to transforming businesses through innovative AI and IT solutions.
                  Our mission is to make advanced technology accessible and practical for organizations
                  of all sizes, enabling them to thrive in the digital age.
                </p>
                <ul className="space-y-3>
                  <li className="flex items-center">
                    <CheckCircleIcon className=w-5 h-5 text-green-500 mr-3" />
                    <span>Innovation-driven solutions</span>
                  </li>
                  <li className="flex items-center>
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span>Client-focused approach</span>
                  </li>
                  <li className=flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 />
                    <span>Cutting-edge technology</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className=text-2xl font-bold mb-4">Our Vision</h3>
                <p className="mb-6>
                  To be the leading provider of AI and IT solutions, empowering businesses
                  to achieve unprecedented growth and efficiency through technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className=max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12>Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className=text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center>
                  <CpuChipIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className=text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600>Pushing boundaries with cutting-edge technology</p>
              </div>
              <div className="text-center">
                <div className=bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ShieldCheckIcon className="w-8 h-8 text-green-600 />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className=text-gray-600">Consistent, dependable solutions you can trust</p>
              </div>
              <div className="text-center>
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <UsersIcon className=w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2>Collaboration</h3>
                <p className="text-gray-600">Working together for mutual success</p>
              </div>
              <div className=text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center>
                  <RocketLaunchIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className=text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600>Delivering superior results in everything we do</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className=max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6>
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href=/services"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Our Services
              </a></div>
          </div></section>
      </div>
    </>
  );
}
export default AboutPage;