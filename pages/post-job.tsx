
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function PostJobPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [skills, setSkills] = useState<string>('')
  const [budgetMinUsd, setBudgetMinUsd] = useState<string>('')
  const [budgetMaxUsd, setBudgetMaxUsd] = useState<string>('')
  const [deliveryDeadlineIso, setDeliveryDeadlineIso] = useState<string>('')
  const [clientEmail, setClientEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!title |!description |!category |!clientEmail) {
      setError('Please fill in all required fields.')

      return
    }
    try {
      setIsSubmitting(true)
      const res = await fetch('/api/jobs', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({


      router.push(`/client/dashboard`)
    } catch (err: any) {
      setError(err.message |'Something went wrong')
    } finally {

      setIsSubmitting(false),

    }

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Project Title *</label>
          <input className="mt-1 w-full border rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Description *</label>
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Category *</label>
          <input className="mt-1 w-full border rounded p-2" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., LLM App, Data Engineering" />
        </div>
        <div>
          <label className="block text-sm font-medium">Required Skills (comma-separated)</label>
          <input className="mt-1 w-full border rounded p-2" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="OpenAI, LangChain, RAG" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Budget Min (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMinUsd} onChange={(e) => setBudgetMinUsd(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget Max (USD)</label>
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetMaxUsd} onChange={(e) => setBudgetMaxUsd(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Deadline (ISO or YYYY-MM-DD)</label>
          <input className="mt-1 w-full border rounded p-2" value={deliveryDeadlineIso} onChange={(e) => setDeliveryDeadlineIso(e.target.value)} placeholder="2025-09-30" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" className="mt-1 w-full border rounded p-2" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="pt-2">
          <button type="submit" className="px-4 py-2 rounded bg-black text-white disabled:opacity-50" disabled={isSubmitting}>

            {isSubmitting ? 'Posting…' : 'Post Job'}
          </button>
        </div>
      </form>
    </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
