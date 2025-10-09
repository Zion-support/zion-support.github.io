
import React from 'react';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Users, Database, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from cyber threats
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SecurityPage;

