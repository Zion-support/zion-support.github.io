<<<<<<< HEAD
import EnhancedLayout from '../components/layout/EnhancedLayout',
import { Bot, Globe2, MonitorSmartphone } from 'lucide-react',

export default function FeaturesPage() {
  return (
    <EnhancedLayout>
<<<<<<< HEAD
      <h1 className="text-2xl font-semibold">Features</h1>
      <div className="mt-6 grid md: grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <Globe2 className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">Global Hiring</div>
          <p className="mt-1 text-sm opacity-80">Source across timezones and markets with vetted profiles.</p>
=======
      <h1 className=&quot;text-2xl font-semibold&quot;>Features</h1>
      <div className=&quot;mt-6 grid md:grid-cols-3 gap-6&quot;>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <Globe2 className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>Global Hiring</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Source across timezones and markets with vetted profiles.</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <Bot className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>AI Matching</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Instantly surface best-fit candidates for your role.</p>
        </div>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <MonitorSmartphone className=&quot;h-6 w-6 text-indigo-500&quot; />
          <div className=&quot;mt-3 text-lg font-semibold&quot;>Mobile Milestones</div>
          <p className=&quot;mt-1 text-sm opacity-80&quot;>Track deliverables and approvals anywhere.</p>
        </div>
      </div>
    </EnhancedLayout>
  )
=======
import EnhancedLayout from '../components/layout/EnhancedLayout',;
import { Bot, Globe2, MonitorSmartphone } from 'lucide-react';
export default function FeaturesPage() {;
  return (;
    <EnhancedLayout>;
      <h1 className="text-2xl font-semibold">Features</h1>;
      <div className="mt-6 grid md: grid-cols-3 gap-6">;
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">;
          <Globe2 className="h-6 w-6 text-indigo-500" />;
          <div className="mt-3 text-lg font-semibold">Global Hiring</div>;
          <p className="mt-1 text-sm opacity-80">Source across timezones and markets with vetted profiles.</p>;
        </div>;
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">;
          <Bot className="h-6 w-6 text-indigo-500" />;
          <div className="mt-3 text-lg font-semibold">AI Matching</div>;
          <p className="mt-1 text-sm opacity-80">Instantly surface best-fit candidates for your role.</p>;
        </div>;
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">;
          <MonitorSmartphone className="h-6 w-6 text-indigo-500" />;
          <div className="mt-3 text-lg font-semibold">Mobile Milestones</div>;
          <p className="mt-1 text-sm opacity-80">Track deliverables and approvals anywhere.</p>;
        </div>;
      </div>;
    </EnhancedLayout>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}