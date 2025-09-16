import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Link from 'next/link';

import { Building, Shield, Users, BarChart3, ArrowRight, CheckCircle, Clock, Globe, Database, Lock } from 'lucide-react';
import Layout from '../../components/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const enterprise: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>enterprise | Zion Tech Group</title>
        <meta name="description" content="enterprise - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">enterprise</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default enterprise;