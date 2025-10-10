'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const TeamPage: React.FC = () => {
    return(<>)
      <Helmet />
        <title>Our Team - Zion Tech Group</title>
        <meta />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        <main className="pt-20"></main>
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1>
                Our Team</h1>
              </h1>
              <div className="prose prose-lg max-w-none"></div>
                <p>Meet the experts behind our success.</p>
                </p>
                <p>Coming soon - stay tuned to meet our team!</p>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>,
  )}};

export default TeamPage;
