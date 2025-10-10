'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const TeamPage: React.FC = () => {return (
    <>
       <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="AI Services - Advanced AI Solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        <main className="pt-20"></main>
          <div className="container mx-auto px-4 py-16"></div>
            <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Team</h1>
              </h1>
              <div>
            <p className="text-xl text-gray-600 mb-8">
                  Meet the experts behind our success.
                </p>
                <p className="text-gray-700 mb-6">
                  Coming soon - stay tuned to meet our team!
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  ) }
export default TeamPage
