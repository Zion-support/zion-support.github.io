import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client'
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            404;
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional 404 solutions tailored to your business needs.;
          </p>
        </div>
      </div>
    </>
  )}
