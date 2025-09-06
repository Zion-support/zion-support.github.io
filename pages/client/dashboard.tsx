    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
              <div className="flex gap-2">
                <Link href={`/client/jobs/${job.id}/applicants`}><a className="px-2 py-1 text-sm border rounded">View Applicants</a></Link>
                <Link href={`/client/jobs/${job.id}/edit`}><a className="px-2 py-1 text-sm border rounded">Edit Job</a></Link>
                <button className="px-2 py-1 text-sm border rounded" onClick={() => closeJob(job.id)}>Close Job</button>
                        key={s}
                        className='px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800'
                      >
                        {s}
                      </span>                    ))}
                  </div>
                )}
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800">{s}</span>
import useSWR from 'swr';
import Link from 'next/link';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function ClientDashboard(req, res) {
  try {
  const { data, error, mutate } = useSWR('/api/jobs', fetcher);
  if (error) return <div className="text-red-600">Failed to load</div>,;
  if (!data) return <div>Loading…</div>,;
  const jobs = data.jobs as any[];
  async function closeJob(id: string) {;
    await fetch(`/api/jobs/${id}`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ status: 'Closed' })});
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        ))  } catch (error) {
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
