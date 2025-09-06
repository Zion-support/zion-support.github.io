import { useRouter  } from 'next/router';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import { TALENT_PROFILES  } from '../../../../data/talent';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function JobApplicantsPage() {
  const router = useRouter()
  const { id } = router.query;
  const { data: appsData } = useSWR(
    id ? `/api/applications?jobId=${id}` : null
    fetcher
  );  const { data: jobData } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);


  const job = jobData?.job;
  const applications = (appsData?.applications as any[]) |[];

export default function JobApplicantsPage() {
  const router = useRouter(),;
  const { id } = router.query;
  const { data: appsData } = useSWR(
    id ? `/api/applications?jobId=${id}` : null,
    fetcher
  );  const { data: jobData } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);

  const job = jobData?.job;
  const applications = (appsData?.applications as any[]) || [];

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
            <div key={a.id} className="border rounded p-4 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{talent?.name || a.talentSlug}</p>
                  <p className="text-xs text-gray-500">Status: {a.status} • Applied: {new Date(a.createdAtIso).toLocaleString()}</p>

                </div>
                <button className="px-2 py-1 text-sm border rounded">Message</button>
              </div>
            </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
