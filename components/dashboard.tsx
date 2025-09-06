import { useEffect, useMemo, useState } from 'react';
export default function Dashboard() {

=======
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams(),
  const tenantId = params.get('tenantId') || '',

  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  useEffect(() => {
    async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants'),
        const data = await resp.json(),

      } catch {
        setBranding({ name: 'Zion Hire AI' })
      }
    }

=======
    fetchBranding()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [tenantId]),

  const accent = branding?.primaryColor || '#111827',

  return (

      </header>
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="col-span-1 md:col-span-2 bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Onboarding</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={branding?.name || ''} />
            <input className="border rounded px-3 py-2" placeholder="Primary Color (hex)" />
            <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Hiring Needs (e.g., 3 engineers, 1 PM)" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 md: col-span-2">Save</button>
          </form>
        </section>
        <section className="bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Post a Job</h2>
          <form className="space-y-2">
            <input className="border rounded px-3 py-2 w-full" placeholder="Title" />
            <input className="border rounded px-3 py-2 w-full" placeholder="Location" />
            <input className="border rounded px-3 py-2 w-full" placeholder="Level" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full">Generate JD with AI</button>
          </form>
        </section>


        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Candidate Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="border rounded p-3"><div className="font-medium">Applied</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Screen</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Interview</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Offer</div><div className="text-gray-500">0</div></div>

          </div>
        </section>
      </main>
    </div>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
