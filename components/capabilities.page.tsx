import EnhancedLayout from '../components/layout/EnhancedLayout';
<<<<<<< HEAD

const CAPABILITIES = [
  'Full‑stack Web',
  'Mobile (iOS/Android)',
  'AI/ML',
  'Cloud & DevOps',
  'Data Engineering',
  'Blockchain',
  'IoT',
  'Security',
=======
const CAPABILITIES = [
  'Full‑stack WebMobile (iOS/Android)AI/MLCloud & DevOpsData EngineeringBlockchainIoTSecurity'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
];

export default function CapabilitiesPage() {
  return (
    <EnhancedLayout>
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Capabilities</h1>
      <div className='mt-6 grid md:grid-cols-4 gap-4 text-sm'>
        {CAPABILITIES.map(c => (
          <div
            key={c}
            className='rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950'
          >
=======
      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            {c}
          </div>
        ))}
      </div>
    </EnhancedLayout>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
