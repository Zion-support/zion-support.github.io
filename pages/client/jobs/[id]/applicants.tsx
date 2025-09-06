import { useRouter } from 'next/router'
import useSWR from 'swr'
import { TALENT_PROFILES } from '../../../../data/talent'
import Link from 'next/link'
const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function JobApplicantsPage() {
  const router = useRouter()
  const { id } = router.query
  const { data: appsData } = useSWR(id ? `/api/applications?jobId=${id}` : null, fetcher),
  const { data: jobData } = useSWR(id ? `/api/jobs/${id}` : null, fetcher),

  const job = jobData?.job
  const applications = (appsData?.applications as any[]) || []

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Applicants</h1>
        <Link href=&quot;/client/dashboard&quot;><a className=&quot;text-sm underline&quot;>Back to Dashboard</Link></Link>
      </div>
      {job && <p className=&quot;text-sm text-gray-600&quot;>For job: {job.title}</p>}
      <div className=&quot;grid gap-3&quot;>
        {applications.length === 0 && <p className=&quot;text-sm text-gray-500&quot;>No applicants yet.</p>}
        {applications.map((a) => {
          const talent = TALENT_PROFILES.find((t) => t.slug === a.talentSlug)
import useSWR from 'swr';
import Link from 'next/link';

const _fetcher = (_url: string) => fetch(url).then(_(r) => r.json());

export default function JobApplicantsPage() {_const _router = useRouter();
  const { id} = router.query;
  const {_data: appsData} = useSWR(id ? `/api/applications?jobId=${_id}` : null, fetcher);
  const {_data: jobData} = useSWR(id ? `/api/jobs/${_id}` : null, fetcher);

  const _job = jobData?.job;
  const _applications = (appsData?.applications as any[]) || [];

  return (_<div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Applicants</h1>
        <Link href="/client/dashboard"><a className="text-sm underline">Back to Dashboard</a></Link>
      </div>
      {_job && <p className="text-sm text-gray-600">For job: {job.title}</p>}
      <div className="grid gap-3">
        {applications.length === 0 && <p className="text-sm text-gray-500">No applicants yet.</p>}
        {applications.map((a) => {
          const talent = TALENT_PROFILES.find((t) => t.slug === a.talentSlug)
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
          return (
            <div key={a.id} className=&quot;border rounded p-4 bg-white dark:bg-gray-900&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <p className=&quot;font-medium&quot;>{talent?.name || a.talentSlug}</p>
                  <p className=&quot;text-xs text-gray-500&quot;>Status: {a.status} • Applied: {new Date(a.createdAtIso).toLocaleString()}</p>
                </div>
                <button className=&quot;px-2 py-1 text-sm border rounded&quot;>Message</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}