'use client';
import React from 'react';
<<<<<<< HEAD

export default function ZionAiCrmProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Zion AI CRM Pro</h1>
          <p className="text-gray-300 text-lg">This page is under development.</p>
=======
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Zion Ai Crm Pro - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai crm pro services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Zion Ai Crm Pro</h1>
          <p className="text-gray-300">Coming soon...</p>
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
        </div>
      </div>
    </div>
  );
}