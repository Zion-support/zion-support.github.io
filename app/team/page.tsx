'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;
=======
import Navigation from '../components
import Footer from '../components

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
const TeamPage: React.FC = () => {
<<<<<<< HEAD
  return (<div>
        <title>Our Team - Zion Tech Group<
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions." 
      <
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><
        
          <div className="container mx-auto px-4 py-16"><
            <div className="max-w-4xl mx-auto"><
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Team<
              <
              
              <div className="prose prose-lg max-w-none"><
                <p className="text-xl text-gray-600 mb-8">
=======
  return (
    <>
      <Helmet></Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions." />
      </Helmet>
      
      <div>
        <Navigation />
        
        <main className="pt-20"></main>
          <div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"></h1>
                Our Team</h1>
              </h1>
              
              <div>
                <p className="text-xl text-gray-600 mb-8"></p>
>>>>>>> main
                  Meet the experts behind our success.
                <
                
                <p className="text-gray-700 mb-6"></p>
                  Coming soon - stay tuned to meet our team!
                <
              <
            <
          <
        <
        
<<<<<<< HEAD
        <Footer 
      <
    <)
  );
=======
        <Footer />
      </div>
    </>
<<<<<<< HEAD
)]
    };
=======
  );)
>>>>>>> main
};

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
export default TeamPage;
}