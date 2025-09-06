import EnhancedLayout from '../components/layout/EnhancedLayout';
<<<<<<< HEAD
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
=======
const CAPABILITIES = [
  'Full‑stack WebMobile (iOS/Android)AI/MLCloud & DevOpsData EngineeringBlockchainIoTSecurity'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

export default function CapabilitiesPage() {
  return (
    <EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Capabilities</h1>
      <div className='mt-6 grid md:grid-cols-4 gap-4 text-sm'>
        {CAPABILITIES.map(c => (
          <div
            key={c}
            className='rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950'
          >
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {c}
          </div>
        ))}
      </div>
    </EnhancedLayout>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
