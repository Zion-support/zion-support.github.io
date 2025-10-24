'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Professional Team services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Team</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamPage;
