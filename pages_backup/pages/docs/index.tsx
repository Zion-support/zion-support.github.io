<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import * as React from 'react';
import Link from 'next/link';

import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  ArrowRight,
  CheckCircle,
  Search,
  Download,
  ExternalLink,
  Users,
  Settings,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>index | Zion Tech Group</title>
        <meta name="description" content="index - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">index</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default index;