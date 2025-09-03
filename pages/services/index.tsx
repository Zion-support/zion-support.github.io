import type { NextPage } from 'next';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Index: NextPage = () => {
  return (
    <EnhancedLayout>
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-700 mb-6">Comprehensive solutions across software, cloud, and AI.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/services/web-application-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Web Application Development
        </Link>
        <Link href="/services/mobile-app-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Mobile App Development
        </Link>
        <Link href="/services/cloud-migration-services-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Cloud Migration
        </Link>
        <Link href="/services/ai-model-development-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          AI Model Development
        </Link>
        <Link href="/services/performance-optimization-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Performance Optimization
        </Link>
        <Link href="/services/security-auditing-chat" className="bg-white p-4 rounded shadow hover:shadow-md transition">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  );
};

export default Index;