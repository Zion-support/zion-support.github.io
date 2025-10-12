import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ArrowRight } from 'lucide-react';

export default function Ai Drug Discovery Pro Page() {
  return (
    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <H elmet>
        <t itle>A I Drug Discovery Pro - Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered drug discovery platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <m eta name="keywords" content="A I drug discovery, pharmaceutical A I, molecular modeling, drug development, clinical trials, biotechnology" />
      </H elmet>

      {/* Hero Section */}
      <s ection class Name="r elative py-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="t ext-center mb-16">
            <h1 c lass Name="t ext-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              A I Drug Discovery Pro
            </h1>
            <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced A I-powered drug discovery platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <A rrow Right class Name="m l-2 w-5 h-5" />
              </L ink>
              <L ink
                to="/demo"
                class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </L ink>
            </d iv>
        </d iv>
      </s ection>

      {/* Features Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="t ext-center mb-16">
            <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Drug Discovery Features
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge A I technology to accelerate pharmaceutical research and development.
            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <d iv key={index} class Name="b g-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <d iv class Name="m b-4">{feature.icon}</d iv>
                <h3 c lass Name="t ext-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p c lass Name="t ext-gray-300">{feature.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>

      {/* Applications Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <d iv class Name="t ext-center mb-12">
              <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p c lass Name="t ext-xl text-gray-300">
                Our A I drug discovery platform supports research across multiple therapeutic areas
              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <d iv key={index} class Name="f lex items-center text-gray-300">
                  <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3 flex-shrink-0" />
                  <s pan class Name="t ext-sm">{application}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>

      {/* C TA Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="b g-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 c lass Name="t ext-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Drug Discovery?
            </h2>
            <p c lass Name="t ext-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your pharmaceutical research with our A I-powered drug discovery platform.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </L ink>
              <L ink
                to="/ai-services"
                class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All A I Services
              </L ink>
            </d iv>
        </d iv>
      </s ection>    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <H elmet>
        <t itle>A I Drug Discovery Pro - Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered drug discovery platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <m eta name="keywords" content="A I drug discovery, pharmaceutical A I, molecular modeling, drug development, clinical trials, biotechnology" />
      </H elmet>

      {/* Hero Section */}
      <s ection class Name="r elative py-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="t ext-center mb-16">
            <h1 c lass Name="t ext-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              A I Drug Discovery Pro
            </h1>
            <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced A I-powered drug discovery platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <A rrow Right class Name="m l-2 w-5 h-5" />
              </L ink>
              <L ink
                to="/demo"
                class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </L ink>
            </d iv>
        </d iv>
      </s ection>

      {/* Features Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="t ext-center mb-16">
            <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Drug Discovery Features
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge A I technology to accelerate pharmaceutical research and development.
            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <d iv key={index} class Name="b g-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <d iv class Name="m b-4">{feature.icon}</d iv>
                <h3 c lass Name="t ext-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p c lass Name="t ext-gray-300">{feature.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>

      {/* Applications Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <d iv class Name="t ext-center mb-12">
              <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p c lass Name="t ext-xl text-gray-300">
                Our A I drug discovery platform supports research across multiple therapeutic areas
              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <d iv key={index} class Name="f lex items-center text-gray-300">
                  <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3 flex-shrink-0" />
                  <s pan class Name="t ext-sm">{application}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>

      {/* C TA Section */}
      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv class Name="m ax-w-7xl mx-auto">
          <d iv class Name="b g-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 c lass Name="t ext-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Drug Discovery?
            </h2>
            <p c lass Name="t ext-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your pharmaceutical research with our A I-powered drug discovery platform.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </L ink>
              <L ink
                to="/ai-services"
                class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All A I Services
              </L ink>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}