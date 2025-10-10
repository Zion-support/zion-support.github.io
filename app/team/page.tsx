'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title></title>Our Team - Zion Tech Group</title>
        <meta _name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions." />
      </Helmet>
      
      <div></div>
        <Navigation />
        
        <main className="pt-20"></main>
          <div></div>
            <div></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"></h1>
                Our Team</h1>
              </h1>
              
              <div></div>
                <p className="text-xl text-gray-600 mb-8"></p>
                  Meet the experts behind our success.
                </p>
                
                <p className="text-gray-700 mb-6"></p>
                  Coming soon - stay tuned to meet our team!
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );)
};

export default TeamPage;
}