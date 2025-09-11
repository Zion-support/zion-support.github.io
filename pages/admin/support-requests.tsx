

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { GetServerSideProps } from 'next',;
import { useState } from 'react',;
import { readJson } from '../../utils/fsDb',;
<<<<<<< HEAD
<<<<<<< HEAD
import { GetServerSideProps } from 'next',;
import { useState } from 'react',;
import { readJson } from '../../utils/fsDb',;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getServerSideProps: GetServerSideProps = async () => {
  const requests = readJson<any[]>('support/requests.json', [])
  return { props: { initialRequests: requests } }
}
export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests)
  async function resolve(id: string) {
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
<<<<<<< HEAD
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)))
<<<<<<< HEAD
=======
=======

    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)))
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { GetServerSideProps } from 'next',
import { useState } from 'react',
import { read_json } from '../../utils / fs_db',
export const getServerSideProps: GetServerSideProps = async () => {
  const requests = read_json < any[]>('support / requests.json', []),
  return { props: { initial_requests: requests } }
},
export default /**
 * SupportRequests - Function description
 */
function SupportRequests() {
  const [requests, set_requests] = useState (initial_requests),
  async /**
 * resolve - Function description
 */
function resolve() {
    await fetch ('/api / support / resolve', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ id }) }),
    set_requests ((prev: any[]) => prev.map ((r) => (r.id === id ? { ...r, status: 'resolved', resolved_at: Date.now () } : r)));

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {;
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props: { initialRequests: requests }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {;
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props: { initialRequests: requests }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
},;
export default function SupportRequests(req, res) {
  try {
  const [requests, setRequests] = useState(initialRequests);
  async function resolve(id: string) {;
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

  }
  return (

<<<<<<< HEAD
}

=======
=======
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <button on_click={() => resolve (r.id)} className="enhanced - button enhanced - button - primary">Mark Resolved</button>)}
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support Requests</h1>
      <div className="grid gap-3">

        {requests.length === 0 && <div className="opacity-70">No requests found.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {requests.map((r) => (
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">{r.id}</div>
              <div className="opacity-80">Session: {r.sessionId}</div>
              <div className="opacity-80">Tag: {r.tag}</div>
              <div className="opacity-80">Reason: {r.reason}</div>
              <div className="opacity-80">Status: {r.status}</div>
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>

<<<<<<< HEAD
  );
};

  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support Requests</h1>
      <div className="grid gap-3">
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>}
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {requests.map((r) => (
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">{r.id}</div>
              <div className="opacity-80">Session: {r.sessionId}</div>
              <div className="opacity-80">Tag: {r.tag}</div>
              <div className="opacity-80">Reason: {r.reason}</div>
              <div className="opacity-80">Status: {r.status}</div>
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
<<<<<<< HEAD
            )}
          </div>
        ))}
      </div>
    </div>
  )
  );
};
  );
};
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
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
<<<<<<< HEAD
<<<<<<< HEAD
}

}
}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
