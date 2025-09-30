import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp } from 'lucide-react';

interface LatestContentBannerProps {
  variant?: 'info' | 'success' | 'warning';
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const LatestContentBanner: React.FC<LatestContentBannerProps> = ({
  variant = 'info',
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600'
  };

  return (
    <div className={`${variantStyles[variant]} text-white p-4 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <div>
<<<<<<< HEAD
              <h3 className="font-bold text-lg">
                🔥 New: Neural Architecture Search · Federated Learning · Privacy-First AI
              </h3>
              <p className="text-sm opacity-90">
                Discover breakthrough AI technologies delivering 300-500% performance improvements and 95% energy efficiency gains →
              </p>
            </div>
          </div>
          <Link
            to="/blog/ai-2026-neural-architecture-search-breakthrough"
=======
              <h3 className="font-bold text-lg">🔥 New: Governed Agent Patterns v2 · Consentless Experiments v3</h3>
              <p className="text-sm opacity-90">Approvals, budgets, rollback for agents + zero‑PII A/B at &lt;100ms. Explore the latest →</p>
            </div>
          </div>
          <Link
            to="/blog/ai-2025-oct-31-governed-agent-patterns-v2"
>>>>>>> feat/new-content-ads-sept30-2025
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <TrendingUp className="w-4 h-4" />
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner;