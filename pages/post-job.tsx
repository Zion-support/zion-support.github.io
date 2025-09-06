import { useState  } from 'react';
import { useRouter } from 'next/router';
export default function PostJobPage() {
  const router = null;
      router.push(`/client/dashboard`)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
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
  )
};