import EnhancedLayout from '../components/layout/EnhancedLayout';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

export default function CapabilitiesPage() {;
  return (
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold'>Capabilities</h1>
      <div className='mt-6 grid md:grid-cols-4 gap-4 text-sm'>
        {CAPABILITIES.map(c => (
          <div
            key={c}
            className='rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950'
          >            {c}      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
          </div>
        ))}
      </div>
<<<<<<< HEAD
    </EnhancedLayout>
<<<<<<< HEAD
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    </EnhancedLayout>;
);
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
