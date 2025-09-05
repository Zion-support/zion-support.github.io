<<<<<<< HEAD
import EnhancedLayout from '../components/layout/EnhancedLayout',;
;
const CAPABILITIES = [;
  'Full‑stack WebMobile (iOS/Android)','AI/MLCloud & DevOps','Data EngineeringBlockchain','IoTSecurity';
],;
;
export default function CapabilitiesPage() {;
  return (;
    <EnhancedLayout>;
      <h1 className="text-2xl font-semibold">Capabilities</h1>;
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">;
        {CAPABILITIES.map((c) => (;
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">;
            {c}
          </div>;
        ))}
      </div>;
    </EnhancedLayout>;
  ),;
=======
import EnhancedLayout from '../components/layout/EnhancedLayout',
const CAPABILITIES = [
  'Full‑stack WebMobile (iOS/Android)AI/MLCloud & DevOpsData EngineeringBlockchainIoTSecurity'
],

export default function CapabilitiesPage() {
  return (
    <EnhancedLayout>
      <h1 className=&quot;text-2xl font-semibold&quot;>Capabilities</h1>
      <div className=&quot;mt-6 grid md:grid-cols-4 gap-4 text-sm&quot;>
        {CAPABILITIES.map((c) => (
          <div key={c} className=&quot;rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950&quot;>
            {c}          </div>
        ))}
      </div>
    </EnhancedLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}