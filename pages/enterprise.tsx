<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Database,
  Lock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

      permanent: false}}
}
export default function EnterpriseRedirect() { return null }

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/enterprise.tsx






ursor/fix-website-loading-errors-and-merge-6662


      destination: '/plans/enterprise',
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
import type { GetServerSideProps } from 'next',
import type { GetServerSideProps } from 'next';

import type { GetServerSideProps } from 'next',;

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }

},
;
export default function EnterpriseRedirect() { return null };
import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/plans/enterprise';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function EnterpriseRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/enterprise.tsx

import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps;
export default function EnterpriseRedirect() { return null }



import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps;
export default function EnterpriseRedirect() { return null }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Enterprise | Zion Tech Group</title>
        <meta name="description" content="Professional enterprise solutions for your business." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional enterprise solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300">
              Professional solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300">
              Advanced technology solutions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300">
              Scalable and reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
