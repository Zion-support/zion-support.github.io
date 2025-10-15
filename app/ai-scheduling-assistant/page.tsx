import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISchedulingAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Scheduling Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent scheduling assistant powered by AI to manage appointments, meetings, and calendar optimization." />
        <meta name="keywords" content="AI scheduling assistant, appointment scheduling, meeting scheduler, calendar optimization, smart scheduling" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Scheduling Assistant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent scheduling assistant powered by AI to manage appointments, meetings, and calendar optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600">
                AI-powered scheduling that finds optimal meeting times based on availability and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calendar Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with popular calendar applications and scheduling systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conflict Resolution</h3>
              <p className="text-gray-600">
                Automatically detect and resolve scheduling conflicts with intelligent suggestions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Optimization</h3>
              <p className="text-gray-600">
                Optimize meeting schedules based on participant availability and time zones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Reminders</h3>
              <p className="text-gray-600">
                Send intelligent reminders and notifications to ensure no meetings are missed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resource Management</h3>
              <p className="text-gray-600">
                Manage meeting rooms, equipment, and other resources efficiently.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Language Processing</h3>
                <p className="text-gray-600">Understand scheduling requests in natural language and convert them to appointments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Zone Handling</h3>
                <p className="text-gray-600">Automatically handle time zone conversions for global teams and participants.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recurring Events</h3>
                <p className="text-gray-600">Create and manage recurring meetings and appointments with intelligent patterns.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability Checking</h3>
                <p className="text-gray-600">Check participant availability in real-time and suggest alternative times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISchedulingAssistantPage;