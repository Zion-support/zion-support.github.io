import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Habit Tracking & Wellness Platform - Zion Tech Group',
  description: 'AI-powered habit tracking and wellness platform for personal development. Build consistent routines, track progress, and achieve your goals with intelligent insights.',
  keywords: 'habit tracking, wellness platform, personal development, goal setting, routine building, health monitoring',
  robots: {
    index: true,
    follow: true,
  },
};

export default function HabitTrackingWellnessPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Habit Tracking & Wellness Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your life with AI-powered habit tracking and wellness insights. Build consistent routines, 
          track progress, and achieve your personal development goals.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Better Habits, Achieve Your Goals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
            <p className="text-gray-600">Higher habit success rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2.5x</div>
            <p className="text-gray-600">Faster goal achievement</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">91%</div>
            <p className="text-gray-600">User satisfaction rate</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Habit Builder</h3>
          <p className="text-gray-600 mb-4">
            AI-powered habit formation system that creates personalized routines based on your goals, schedule, and preferences.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Personalized habit recommendations</li>
            <li>• Progress tracking and analytics</li>
            <li>• Streak monitoring and rewards</li>
            <li>• Habit stacking suggestions</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $9.99/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Morning Routine Optimizer</h3>
          <p className="text-gray-600 mb-4">
            Build and optimize your morning routine with ready-made templates, step-by-step sequences, and progress milestones.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Ready-made routine templates</li>
            <li>• Step-by-step guidance</li>
            <li>• Progress milestone tracking</li>
            <li>• Custom routine creation</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $7.99/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Wellness Analytics</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive wellness tracking with mood monitoring, energy levels, sleep patterns, and health insights.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Mood and energy tracking</li>
            <li>• Sleep pattern analysis</li>
            <li>• Health correlation insights</li>
            <li>• Wellness trend reporting</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $12.99/month</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Intelligent Insights</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Pattern recognition in habits</li>
              <li>• Predictive success modeling</li>
              <li>• Personalized recommendations</li>
              <li>• Behavioral change suggestions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Adaptive Coaching</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Dynamic goal adjustment</li>
              <li>• Motivational messaging</li>
              <li>• Challenge level optimization</li>
              <li>• Support system integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Wellness Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Health</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Exercise and fitness tracking</li>
              <li>• Nutrition and meal planning</li>
              <li>• Hydration monitoring</li>
              <li>• Sleep optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Mental Wellness</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Meditation and mindfulness</li>
              <li>• Stress management</li>
              <li>• Mood tracking</li>
              <li>• Cognitive exercises</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Productivity</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Focus and concentration</li>
              <li>• Time management</li>
              <li>• Goal setting and tracking</li>
              <li>• Learning and development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Community & Social Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Accountability Partners</h3>
            <p className="text-gray-600 mb-4">
              Connect with like-minded individuals for mutual support, accountability, and motivation in your wellness journey.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Partner matching system</li>
              <li>• Shared goal tracking</li>
              <li>• Progress sharing</li>
              <li>• Encouragement messaging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Challenges</h3>
            <p className="text-gray-600 mb-4">
              Participate in community-wide challenges, competitions, and group activities to stay motivated and engaged.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Monthly wellness challenges</li>
              <li>• Leaderboards and rankings</li>
              <li>• Group achievements</li>
              <li>• Reward and recognition system</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration & Compatibility</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Wearable Devices</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Apple Watch integration</li>
              <li>• Fitbit connectivity</li>
              <li>• Garmin device support</li>
              <li>• Samsung Health sync</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Apps</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• MyFitnessPal integration</li>
              <li>• Strava connectivity</li>
              <li>• Headspace meditation</li>
              <li>• Calm app integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Calendar Systems</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Google Calendar</li>
              <li>• Apple Calendar</li>
              <li>• Outlook integration</li>
              <li>• Custom scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Wellness Journey Today</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of users who have transformed their lives with our AI-powered habit tracking and wellness platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="https://ziontechgroup.com/services/habit-tracking-wellness-platform" 
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            View Features
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <div className="text-gray-600 space-y-1">
          <p><strong>Mobile:</strong> +1 302 464 0950</p>
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}