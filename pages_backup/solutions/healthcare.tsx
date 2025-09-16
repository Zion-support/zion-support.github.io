import React from 'react';
<<<<<<< HEAD
=======
import Layout from '../../components/Layout';';
import { Heart, Shield, Database, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: Heart,
    title: 'Patient Data Management,',
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data.',
  },
  {}
    icon: Shield,
    title: 'Healthcare Security,',
    description: 'Advanced cybersecurity solutions designed specifically for healthcare environments.'';
  },
  {}
    icon: Database,
    title: 'Electronic Health Records,',
    description: 'Custom EHR solutions that integrate seamlessly with existing healthcare workflows.'';
  },
  {}
    icon: Users,
    title: 'Telemedicine Platforms,',
    description: 'Remote consultation and patient monitoring systems for modern healthcare delivery.'';
  },
  {}
    icon: Activity,
    title: 'Health Analytics,',
    description: 'AI-powered analytics for population health management and predictive insights.'';
import Layout from '../../components/Layout';
import { Heart, Shield, Activity, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { 
  Heart, 
  Shield, 
  Database, 
  Users, 
  Activity, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const healthcare: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">healthcare</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default healthcare;