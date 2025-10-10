'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
const AutonomousSystemsPage: React.FC = () => {
    return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1>
              Autonomous <span className="text-cyan-400">Systems</span>
            </h1>
            <p>
              Advanced autonomous systems solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </>,
  )
  }
};

export default AutonomousSystemsPage;