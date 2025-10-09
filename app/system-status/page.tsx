import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, XCircle, Clock, Zap, RefreshCw } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  // This is a redirect page to the main status page
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting to Status Page</h1>
        <p className="text-gray-300 mb-6">You are being redirected to our main status page.</p>
        <Link
          to="/status"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          Go to Status Page
        </Link>
      </div>
    </div>
  );
};

export default SystemStatusPage;