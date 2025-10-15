import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIEducationTutorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Education Tutor - Zion Tech Group</title>
        <meta name="description" content="Personalized AI tutoring system that adapts to individual learning styles. Interactive lessons, progress tracking, and intelligent assessment for all subjects." />
        <meta name="keywords" content="AI tutor, personalized learning, education technology, adaptive learning, online tutoring" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Education Tutor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalized learning powered by AI. Get adaptive tutoring, 
              interactive lessons, and intelligent progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Personalized Learning Experience
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Education Tutor adapts to each student's learning style, pace, 
                and preferences. Get personalized lesson plans, interactive exercises, 
                and real-time feedback to maximize learning outcomes.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Adaptive curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Interactive lessons
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Progress tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Intelligent assessment
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Start Learning</h3>
              <div className="space-y-4">
                <select className="w-full p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-indigo-500 focus:outline-none">
                  <option>Select Subject</option>
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>Programming</option>
                  <option>Languages</option>
                </select>
                <select className="w-full p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-indigo-500 focus:outline-none">
                  <option>Select Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">K-12 Education</h3>
              <p className="text-gray-300">
                Comprehensive tutoring for students from kindergarten to 12th grade across all subjects.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Professional Development</h3>
              <p className="text-gray-300">
                Skill development and certification preparation for working professionals.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Language Learning</h3>
              <p className="text-gray-300">
                AI-powered language learning with conversation practice and pronunciation help.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Learning Journey
            </h2>
            <p className="text-gray-300 mb-8">
              Join students and professionals worldwide using our AI Education Tutor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEducationTutorPage;