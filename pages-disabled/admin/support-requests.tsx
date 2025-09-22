
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
import { GetServerSideProps } from 'next',;
import { useState } from 'react',;
import { readJson } from '../../utils/fsDb',;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const getServerSideProps: GetServerSideProps = async () => {
=======

export const getServerSideProps: GetServerSideProps = async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const requests = readJson<any[]>('support/requests.json', [])
  return { props: { initialRequests: requests } }
}
export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {}
  const [requests, setRequests] = useState(initialRequests)
  async function resolve() { return null; }
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
<<<<<<< HEAD

    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)))
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import { GetServerSideProps } from 'next','
import { useState } from 'react','
import { read_json } from '../../utils / fs_db',
export const getServerSideProps: GetServerSideProps = async () => {'
  const requests = read_json < any[]>('support / requests.json', []),
  return { props: { initial_requests: requests } }
},;
export default /**;
 * SupportRequests - Function description;
 */
function SupportRequests() {}
  const [requests, set_requests] = useState (initial_requests),
  async /**
 * resolve - Function description;
 */
function resolve() { return null; }
    await fetch ('/api / support / resolve', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ id }) }),'
    set_requests ((prev: any[]) => prev.map ((r) => (r.id === id ? { ...r, status: 'resolved', resolved_at: Date.now () } : r)));

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { GetServerSideProps } from 'next';
import { useState } from 'react';
=======

'
import { GetServerSideProps } from 'next';'
import { useState } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {;'
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props: { initialRequests: requests }   } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }

'
import { GetServerSideProps } from 'next';'
import { useState } from 'react';'
import { readJson } from '../../utils/fsDb';
export const getServerSideProps: GetServerSideProps = async () => {;'
  const requests = readJson<any[]>('support/requests.json', []),;
  return { props: { initialRequests: requests }   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
}
},;
export default function SupportRequests(req, res) {}
  try {};
  const [requests, setRequests] = useState(initialRequests);
  async function resolve() { return null; }
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });'
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)));
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (

}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <button on_click={() => resolve (r.id)} className="enhanced - button enhanced - button - primary">Mark Resolved</button>)}
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support Requests</h1>
      <div className="grid gap-3">
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {requests.map((r) => (
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">{r.id}</div>
              <div className="opacity-80">Session: {r.sessionId}</div>
              <div className="opacity-80">Tag: {r.tag}</div>
              <div className="opacity-80">Reason: {r.reason}</div>
=======

"
    <div className="space-y-6">"
      <h1 className="text-2xl font-semibold">Support Requests</h1>"
      <div className="grid gap-3">

"
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        {requests.map((r) => ("
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">"
            <div className="text-sm">"
              <div className="font-medium">{r.id}</div>"
              <div className="opacity-80">Session: {r.sessionId}</div>"
              <div className="opacity-80">Tag: {r.tag}</div>"
              <div className="opacity-80">Reason: {r.reason}</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="opacity-80">Status: {r.status}</div>
            </div>'
            {r.status !== 'resolved' && ("
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  );
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )  } catch (error) {
    console.error("Error:", error);
=======

            )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
