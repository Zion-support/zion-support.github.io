<<<<<<< HEAD
import ArrowRight from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';


=======
import Link from 'next/link';
import { Link } from 'react-router-dom';

import { Calendar } from 'lucide-react';
import { User } from 'lucide-react';
import { Clock } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
>>>>>>> b47e9d4b5bd1af22dc9e86e7460fed7a11146a22

export default function MultiAgentOpsControlTowerBlueprintPage() {
  return (
    <div>
      <section>
        <div>
          <div>
            <div>
              <span>🛰️ MULTI-AGENT OPS CONTROL</span>
            </div>
            <h1>AI 2025: Multi‑Agent Ops Control Tower Blueprint</h1>
            <p>
              Operationalize AI agents with observability, approvals, runbooks, and fail‑safes.
            </p>
            <div>
              <div><Calendar /> September 30, 2025</div>
              <div><User /> Zion Tech Group</div>
              <div><Clock /> 7 min read</div>
            </div>
          </div>
        </div>
      </section>

      <article>
        <div>
          <h2>Control Tower Capabilities</h2>
          <ul>
            <li>Unified agent registry, routing, and permissions</li>
            <li>Approval workflows for sensitive operations</li>
            <li>Runtime observability: traces, metrics, event timelines</li>
            <li>Safeguards: budget limits, blast‑radius controls, auto‑rollback</li>
          </ul>

          <h2>Day‑2 Operations</h2>
          <p>Runbooks, incident response, and continuous evaluation ensure reliability and trust.</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white text-center mt-12">
          <h3 className="text-2xl font-bold mb-3">Stand Up Your Agent Ops</h3>
          <p className="opacity-90 mb-6">We implement control towers tailored to your governance needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Explore Services</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Talk to Experts</Link>
          </div>
        </div>
      </article>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
}

