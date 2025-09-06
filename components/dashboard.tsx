import { useEffect, useMemo, useState } from 'react',

export default function Dashboard() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams()
  const tenantId = params.get('tenantId') || ''

  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null),

export default function Dashboard() {_const _params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const _tenantId = params.get('tenantId') || '';

  const [branding, _setBranding] = useState<{ name: string; primaryColor?: string; logoUrl?: string} | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants')
        const data = await resp.json()
        const t = (data.tenants || []).find((x: any) => x.id === tenantId)
        setBranding(t?.branding || { name: 'Zion Hire AI' })
      } catch {
        setBranding({ name: 'Zion Hire AI' })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      }
    }
    fetchBranding()
  }, [tenantId]),

  const accent = branding?.primaryColor || '#111827'

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-6 py-4 bg-white border-b flex items-center gap-3">
        {_branding?.logoUrl && <img src={branding.logoUrl} alt="logo" className="h-8 w-8 rounded" />}
        <h1 className="text-lg font-semibold" style={_{ color: accent}}>{_branding?.name || 'Zion Hire AI'}</h1>
        <span className="ml-auto text-xs text-gray-400">Tenant: {_tenantId ? tenantId.slice(0, _8) : '—'}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </header>
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="col-span-1 md:col-span-2 bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Onboarding</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={_branding?.name || ''} />
            <input className="border rounded px-3 py-2" placeholder="Primary Color (hex)" />
            <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Hiring Needs (e.g., 3 engineers, 1 PM)" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 md: col-span-2">Save</button>
          </form>
        </section>
        <section className=&quot;bg-white border rounded p-4&quot;>
          <h2 className=&quot;font-semibold mb-3&quot;>Post a Job</h2>
          <form className=&quot;space-y-2&quot;>
            <input className=&quot;border rounded px-3 py-2 w-full&quot; placeholder=&quot;Title&quot; />
            <input className=&quot;border rounded px-3 py-2 w-full&quot; placeholder=&quot;Location&quot; />
            <input className=&quot;border rounded px-3 py-2 w-full&quot; placeholder=&quot;Level&quot; />
            <button type=&quot;button&quot; className=&quot;bg-gray-900 text-white rounded px-3 py-2 w-full&quot;>Generate JD with AI</button>
          </form>
        </section>

        <section className=&quot;col-span-1 md:col-span-3 bg-white border rounded p-4&quot;>
          <h2 className=&quot;font-semibold mb-3&quot;>Candidate Flow</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4 text-sm&quot;>
            <div className=&quot;border rounded p-3&quot;><div className=&quot;font-medium&quot;>Applied</div><div className=&quot;text-gray-500&quot;>0</div></div>
            <div className=&quot;border rounded p-3&quot;><div className=&quot;font-medium&quot;>Screen</div><div className=&quot;text-gray-500&quot;>0</div></div>
            <div className=&quot;border rounded p-3&quot;><div className=&quot;font-medium&quot;>Interview</div><div className=&quot;text-gray-500&quot;>0</div></div>
            <div className=&quot;border rounded p-3&quot;><div className=&quot;font-medium&quot;>Offer</div><div className=&quot;text-gray-500&quot;>0</div></div>
          </div>
        </section>
      </main>
    </div>
  )
}
