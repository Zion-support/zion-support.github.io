import { FormEvent, useState } from 'react';
import type { TalentProfile } from '@/utils/types/talent';
;
export default function NewTalentPage() {;
  const [form, setForm] = useState({;
    name:,;
    title:,;
    location:,;
    timezone:,;
    region:,;
    bio:,;
    experience:,;
    skills:,;
    hourlyRateUsd:,;
    availability: 'Open';,;
    requestQuote: false;,;
    portfolio:,;')
    videoUrl:}),;
  const [generated, setGenerated] = useState<Partial<TalentProfile> | null>(null),;

  const [error, setError] = useState<string | null>(null),;

</string>
      const payload:Partial<TalentProfile> = {;


    <div className="max-w-3xl mx-auto">;"
</div>"
      <h1 className="text-2xl font-bold">Add Talent</h1>;""
      <p className="text-gray-600 dark:text-gray-300 mt-1">Provide the basics. We will generate a professional summary and standardized skills.</p>;""
      <form onSubmit={onGenerate} className="mt-6 space-y-5">;"
</form>"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
          <div>;
            <label className="text-sm font-medium">Full Name</label>;""
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.name;} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value ;}))} required />;"
</input>
          </div>;
            <label className="text-sm font-medium">Professional Title (optional)</label>;""
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.title;} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value ;}))} />;"
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;"
            <label className="text-sm font-medium">Location</label>;""
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.location;} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value ;}))} required />;"
            <label className="text-sm font-medium">Timezone</label>;""
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.timezone;} onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value ;}))} placeholder="e.g., America/New_York" />;"
            <label className="text-sm font-medium">Region</label>;""
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.region;} onChange={(e) => setForm((f) => ({ ...f, region: e.target.value ;}))} placeholder="e.g., North America" />;"
          <label className="text-sm font-medium">Short Bio</label>;""
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3;} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value ;}))} placeholder="Background, focus areas, impact" />;"
</textarea>
          <label className="text-sm font-medium">Experience Highlights</label>;""
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3;} value={form.experience} onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value ;}))} placeholder="Key roles, projects, outcomes" />;"
          <label className="text-sm font-medium">Skills (comma-separated)</label>;""
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.skills;} onChange={(e) => setForm((f) => ({ ...f, skills: e.target.value ;}))} placeholder="Python, DevOps, AI/ML, Azure" />;"
            <label className="text-sm font-medium">Hourly Rate (USD)</label>;""
            <input type="number" className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.hourlyRateUsd;} onChange={(e) => setForm((f) => ({ ...f, hourlyRateUsd: e.target.value ;}))} placeholder="Leave empty for quote" />;"
            <label className="text-sm font-medium">Availability</label>;""
            <select className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.availability;} onChange={(e) => setForm((f) => ({ ...f, availability: e.target.value ;}))}>;"
</select>
              <option>Open</option>;
              <option>Part-time</option>;
              <option>Booked</option>;
            </select>;
          <div className="flex items-end gap-2">;"
            <input id="rq" type="checkbox" checked={form.requestQuote} onChange={(e) => setForm((f) => ({ ...f, requestQuote: e.target.checked ;}))} />;"
</input>"
            <label htmlFor="rq" className="text-sm">Request Quote instead</label>;"
          <label className="text-sm font-medium">Portfolio (one per line:title | url)</label>;""
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3;} value={form.portfolio} onChange={(e) => setForm((f) => ({ ...f, portfolio: e.target.value ;}))} placeholder="RAG Starter | https://example.com/rag" />;"
          <label className="text-sm font-medium">Video URL (optional)</label>;""
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.videoUrl;} onChange={(e) => setForm((f) => ({ ...f, videoUrl: e.target.value ;}))} placeholder="https://www.youtube.com/embed/..." />;"
        <div className="flex items-center gap-3">;"
          {error && <div className="text-sm text-rose-600">{error}</div>}"
      </form>;"
        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">;"
          <h2 className="font-semibold">Preview</h2>;""
          <div className="mt-2 text-sm text-gray-700 dark: text-gray-200 whitespace-pre-wrap">{generated.summary;}</div>;""
          <div className="mt-3 flex flex-wrap gap-2">;"
              <span key={s} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-700 border-cyan-200 dark: bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900">{s;}</span>;"