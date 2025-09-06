
import {Rocket, ShieldCheck, BadgeCheck} from 'lucide-react';
<<<<<<< HEAD

export default function ServicesPage() {;

=======

import {Rocket, ShieldCheck, BadgeCheck} from 'lucide-react';

export default function ServicesPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <EnhancedLayout>;
      <h1 className='text-2xl font-semibold'>Services</h1>;
      <div className='mt-6 grid md:grid-cols-3 gap-6'>;
        <section
          id='mvp'
          className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <Rocket className='h-6 w-6 text-indigo-500' />;
          <div className='mt-3 text-lg font-semibold'>MVP Acceleration</div>;
          <p className='mt-1 text-sm opacity-80'>;
            Dedicated squads to launch your MVP in weeks with tight feedback;
            cycles.;
          </p>;
        <section
          id='security'
          className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <ShieldCheck className='h-6 w-6 text-indigo-500' />;
          <div className='mt-3 text-lg font-semibold'>;
            Security & Compliance;
          </div>;
          <p className='mt-1 text-sm opacity-80'>;
            Secure architecture, audits, and compliance workflows (SOC2-ready).;
          </p>;
        </section>;
        <section
          id='ai'
          className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <BadgeCheck className='h-6 w-6 text-indigo-500' />;
          <div className='mt-3 text-lg font-semibold'>AI Integrations</div>;
          <p className='mt-1 text-sm opacity-80'>;
            Copilots, agents, vector search, and automation tailored to your;
            product.;
          </p>        </section>;
      </div>;
    </EnhancedLayout>;
  );

  );
}
=======
import { Rocket, ShieldCheck, BadgeCheck } from 'lucide-react';

=======
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default function ServicesPage() {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Services</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <section id="mvp" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <Rocket className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">MVP Acceleration</div>
          <p className="mt-1 text-sm opacity-80">Dedicated squads to launch your MVP in weeks with tight feedback cycles.</p>
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

  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import EnhancedLayout from '../components / layout / EnhancedLayout';
import {Rocket, ShieldCheck, BadgeCheck} from 'lucide-react';
export default /**
 * ServicesPage - Function description
 */
function ServicesPage() {
  return (
    <EnhancedLayout>;
      <h1 className='text - 2xl font - semibold'>Services</h1>;
      <div className='mt - 6 grid md:grid - cols - 3 gap - 6'>;
        <section;
          id='mvp';
          className='rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950';
        >;
          <Rocket className='h - 6 w - 6 text - indigo - 500' />;
          <div className='mt - 3 text - lg font - semibold'>MVP Acceleration</div>;
          <p className='mt - 1 text - sm opacity - 80'>;
            Dedicated squads to launch your MVP in weeks with tight feedback;
            cycles.;
          </p>;
        <section;
          id='security';
          className='rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950';
        >;
          <ShieldCheck className='h - 6 w - 6 text - indigo - 500' />;
          <div className='mt - 3 text - lg font - semibold'>;
            Security & Compliance;
          </div>;
          <p className='mt - 1 text - sm opacity - 80'>;
            Secure architecture, audits, and compliance workflows (SOC2 - ready).;
          </p>;
        </section>;
        <section;
          id='ai';
          className='rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950';
        >;
          <BadgeCheck className='h - 6 w - 6 text - indigo - 500' />;
          <div className='mt - 3 text - lg font - semibold'>AI Integrations</div>;
          <p className='mt - 1 text - sm opacity - 80'>;
            Copilots, agents, vector search, and automation tailored to your;
            product.;
          </p>        </section>;
      </div>;
    </EnhancedLayout>);
}        <section id="ai" className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950">;
          <BadgeCheck className="h - 6 w - 6 text - indigo - 500" />;
          <div className="mt - 3 text - lg font - semibold">AI Integrations</div>;
          <p className="mt - 1 text - sm opacity - 80">Copilots, agents, vector search, and automation tailored to your product.</p>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}        <section id="ai" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <BadgeCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">AI Integrations</div>
          <p className="mt-1 text-sm opacity-80">Copilots, agents, vector search, and automation tailored to your product.</p>
      </div>
    </EnhancedLayout>

  );
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
