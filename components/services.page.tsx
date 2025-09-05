<<<<<<< HEAD
import EnhancedLayout from '../components/layout/EnhancedLayout',
import { Rocket, ShieldCheck, BadgeCheck } from 'lucide-react',
=======
import EnhancedLayout from '../components/layout/EnhancedLayout';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ServicesPage() {_return (
    <EnhancedLayout>
      <h1 className=&quot;text-2xl font-semibold&quot;>Services</h1>
      <div className=&quot;mt-6 grid md:grid-cols-3 gap-6&quot;>
        <section id=&quot;mvp&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <Rocket className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>MVP Acceleration</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Dedicated squads to launch your MVP in weeks with tight feedback cycles.</p>
        </section>
<<<<<<< HEAD
        <section id=&quot;security&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <ShieldCheck className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>Security & Compliance</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Secure architecture, audits, and compliance workflows (SOC2-ready).</p>
        </section>
        <section id=&quot;ai&quot; className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <BadgeCheck className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>AI Integrations</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Copilots, agents, vector search, and automation tailored to your product.</p>
        </section>
      </div>
    </EnhancedLayout>
  )
}
=======
        <section id="security" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <ShieldCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">Security & Compliance</div>
          <p className="mt-1 text-sm opacity-80">Secure architecture, _audits, _and compliance workflows (SOC2-ready).</p>
        </section>
        <section id="ai" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <BadgeCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">AI Integrations</div>
          <p className="mt-1 text-sm opacity-80">Copilots, _agents, _vector search, _and automation tailored to your product.</p>
        </section>
      </div>
    </EnhancedLayout>
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
