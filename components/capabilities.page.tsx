import EnhancedLayout from '../components/layout/EnhancedLayout';

<<<<<<< HEAD
const CAPABILITIES = [
  'Full‑stack Web'
  'Mobile (iOS/Android)'
  'AI/ML'
  'Cloud & DevOps'
  'Data Engineering'
  'Blockchain'
  'IoT'
  'Security',];const CAPABILITIES = [
  'Full‑stack WebMobile (iOS/Android)AI/MLCloud & DevOpsData EngineeringBlockchainIoTSecurity'
=======
const CAPABILITIES = [;
  'Full‑stack Web',;
  'Mobile (iOS/Android)',;
  'AI/ML',;
  'Cloud & DevOps',;
  'Data Engineering',;
  'Blockchain',;
  'IoT',;
  'Security',];const CAPABILITIES = [;
  'Full‑stack WebMobile (iOS/Android)AI/MLCloud & DevOpsData EngineeringBlockchainIoTSecurity';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];

export default function CapabilitiesPage() {;
  return (
    <EnhancedLayout>;
      <h1 className='text-2xl font-semibold'>Capabilities</h1>;
      <div className='mt-6 grid md:grid-cols-4 gap-4 text-sm'>;
        {CAPABILITIES && CAPABILITIES.map(c => (;
          <div
            key={c}
            className='rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950'>            {c}      <h1 className="text-2xl font-semibold">Capabilities</h1>;
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">;
        {CAPABILITIES && CAPABILITIES.map((c) => (;
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">;
          </div>;
        ))}
<<<<<<< HEAD
      </div>
    </EnhancedLayout>
);
}
=======
      </div>;
    </EnhancedLayout>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
