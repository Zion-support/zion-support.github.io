<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
=======
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009

const StatusPage: React.FC = () => {
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function StatusZionTechGroup() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="System Status services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced System Status solutions by Zion Tech Group
=======
        <title>Status - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Status page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Status
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
<<<<<<< HEAD
  )
}

export default StatusPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
  );
};

export default StatusPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
