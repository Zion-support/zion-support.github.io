'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const NetworkInfrastructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional network infrastructure services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Network Infrastructure Page</h1>
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;
