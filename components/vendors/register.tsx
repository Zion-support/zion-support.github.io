import { FormEvent, useState } from 'react',

export default function VendorRegisterPage() {
  const [loading, setLoading] = useState(false),
  const [message, setMessage] = useState<string | null>(null),

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(),
    setLoading(true),
    setMessage(null),
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/vendors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: String(payload.slug),
          name: String(payload.name),
          servicesOffered: String(payload.servicesOffered || '')
            .split()
            .map(s => s.trim())
            .filter(Boolean),
          teamSize: Number(payload.teamSize || 0),
          about: String(payload.about || ''),
          verificationDocs: String(payload.verificationDocs || '')
            .split()
            .map(s => s.trim())
            .filter(Boolean),
          caseStudies: []})}),
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to submit'),
      setMessage('Application submitted. Await approval.'),
      form.reset()
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Apply to become a Vendor Partner</h1>
      <form onSubmit={_onSubmit} className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Agency Name</label>
          <input name=&quot;name&quot; required className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Unique URL Slug</label>
          <input name=&quot;slug&quot; required pattern=&quot;[a-z0-9-]+&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
          <p className=&quot;text-xs text-gray-500&quot;>Example: acme-ai</p>
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Services Offered</label>
          <input name=&quot;servicesOffered&quot; placeholder=&quot;AI prototyping, Data labeling, MLOps&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Team Size</label>
          <input name=&quot;teamSize&quot; type=&quot;number&quot; min={1} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>About</label>
          <textarea name=&quot;about&quot; rows={4} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Verification Docs (URLs, comma-separated)</label>
          <input name=&quot;verificationDocs&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
        </div>
        <button disabled={loading} className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
      {message && <div className=&quot;text-sm&quot;>{message}</div>}
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  )
}