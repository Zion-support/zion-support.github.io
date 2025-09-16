import React from 'react';
<<<<<<< HEAD
=======
import Layout from '../../components/Layout';';
import { Shield, Users, FileText, Globe, Database, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: Shield,
    title: 'Cybersecurity & Compliance,',
    description: 'FISMA, FedRAMP, and other government security standards compliance solutions.',
  },
  {}
    icon: Users,
    title: 'Citizen Services,',
    description: 'Digital platforms for citizen engagement, service delivery, and government transparency.',
  },
  {}
    icon: FileText,
    title: 'Document Management,',
    description: 'Secure document management and workflow systems for government operations.'';
  },
  {}
    icon: Globe,
    title: 'Open Data Platforms,',
    description: 'Public data portals and open government initiatives for transparency and accountability.'';
  },
  {}
    icon: Database,
    title: 'Data Analytics,',
    description: 'Government data analytics and business intelligence for informed decision making.'';
import Layout from '../../components/Layout';
import { Building2, Shield, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { 
  Shield, 
  Users, 
  FileText, 
  Globe, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const government: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">government</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default government;