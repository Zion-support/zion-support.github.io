
import useSWR from 'swr';
import { TALENT_PROFILES  } from '../../../../data/talent';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());

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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Applicants</h1>
        <Link href="/client/dashboard"><a className="text-sm underline">Back to Dashboard</Link></Link>
      </div>

                </div>
                <button className="px-2 py-1 text-sm border rounded">Message</button>
              </div>
            </div>

          )
        })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

