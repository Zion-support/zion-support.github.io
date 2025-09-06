import EnhancedLayout from '../components/layout/EnhancedLayout';
import { Rocket, ShieldCheck, BadgeCheck } from 'lucide-react';
export default function ServicesPage() {
  return (
    <EnhancedLayout>

        </section>
        <section id="security" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <ShieldCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">Security & Compliance</div>
          <p className="mt-1 text-sm opacity-80">Secure architecture, audits, and compliance workflows (SOC2-ready).</p>
        </section>

        <section id="ai" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <BadgeCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">AI Integrations</div>
          <p className="mt-1 text-sm opacity-80">Copilots, agents, vector search, and automation tailored to your product.</p>

        </section>
      </div>
    </EnhancedLayout>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
