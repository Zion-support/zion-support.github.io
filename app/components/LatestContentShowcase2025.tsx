<<<<<<< HEAD
import React from 'react';
=======
import Link from 'next/link';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const LatestContentShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LatestContentShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

<<<<<<< HEAD
export default LatestContentShowcase2025;
=======
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trustworthy Autonomous Agents 2026</h3>
            <p className="text-gray-600 mb-4">
              Governance-by-design with evals-as-code, policy-as-code, and safety telemetry.
            </p>
            <Link 
              href="/content/trustworthy-autonomous-agents-2026"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Blueprint →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Aware Agents Blueprint</h3>
            <p className="text-gray-600 mb-4">
              Policy-constrained, risk-scored agent workflows with evals and guardrails.
            </p>
            <Link 
              href="/content/ai-2026-risk-aware-agents-blueprint"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🧭</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trustworthy Autonomous Agents Blueprint</h3>
            <p className="text-gray-600 mb-4">
              Governance-by-design with evals, policy, and safety telemetry for reliable autonomy.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/blog/ai-2026-trustworthy-autonomous-agents-blueprint" className="text-purple-600 font-semibold hover:text-purple-800">
                Read Article →
              </Link>
              <Link href="/content/trustworthy-autonomous-agents-2026" className="text-blue-600 font-semibold hover:text-blue-800">
                Implementation Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
