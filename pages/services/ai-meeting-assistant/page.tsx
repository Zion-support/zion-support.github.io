import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function AIMeetingAssistantPage() {
  return (
    <>
      <Head>
        <title>AI Meeting Assistant | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI meeting platform with real-time transcription, intelligent summaries, and action item extraction. Transform your meetings with 95% accuracy and 50% time savings." />
        <meta name="keywords" content="AI meeting assistant, meeting transcription, meeting summaries, action items, meeting analytics, virtual meetings" />
      </Head>
      <div className="space-y-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                AI Meeting Assistant
              </h1>
              <p className="text-xl mb-8">
                Revolutionary AI meeting platform with real-time transcription, intelligent summaries, and action item extraction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Start Free Trial
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Meetings with AI
              </h2>
              <p className="text-xl text-gray-600">
                Our AI Meeting Assistant revolutionizes how you conduct and manage meetings, 
                providing real-time insights and automated follow-ups.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Transcription</h3>
                <p className="text-gray-600">
                  Get 95% accurate real-time transcription of your meetings with speaker identification.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Summaries</h3>
                <p className="text-gray-600">
                  Automatically generate intelligent summaries and extract key action items.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Meeting Analytics</h3>
                <p className="text-gray-600">
                  Track meeting effectiveness, participation, and follow-up completion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}