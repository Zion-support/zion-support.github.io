import EnhancedLayout from '../components/layout/EnhancedLayout';
<<<<<<< HEAD
<<<<<<< HEAD
const CAPABILITIES = null;
=======
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
];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

const CAPABILITIES = [
  'Full‑stack Web',
  'Mobile (iOS/Android)',
  'AI/ML',
  'Cloud & DevOps',
  'Data Engineering',
  'Blockchain',
  'IoT',
  'Security',
];
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function CapabilitiesPage() {
  return (
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold'>Capabilities</h1>
      <div className='mt-6 grid md:grid-cols-4 gap-4 text-sm'>
        {CAPABILITIES.map(c => (
          <div
            key={c}
            className='rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950'
<<<<<<< HEAD
          >            {c}      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
=======
          >
            {c}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </div>
        ))}
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
);
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
