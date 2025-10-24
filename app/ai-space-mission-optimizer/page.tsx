import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { Activity } from 'lucide-react';
  Satellite, 
  Orbit, 
  Zap, 
  Target, 
  CheckCircle, 
  Globe,
  Activity,
  Navigation,
  Gauge
} from 'lucide-react';
const AISpaceMissionOptimizerPage = () => {
  return null;
};

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AispacemissionoptimizerPage() {
  return (
export default function AispacemissionoptimizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Space Mission Optimizer - Zion Tech Group</title>
        <meta name="description" content="Professional ai space mission optimizer services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Space Mission Optimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai space mission optimizer services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Space Mission Optimizer - Zion Tech Group</title>
        <meta name="description" content="Professional ai space mission optimizer services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Ai Space Mission Optimizer</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai space mission optimizer services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
