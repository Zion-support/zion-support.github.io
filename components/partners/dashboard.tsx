
  }, []);


    }


=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

    const saved = null;}
    if (saved) setToken(saved);}
  }, []);
  async function getToken() {
    const res = await fetch('/api/partners/token, {}
      method: POST'}
      headers: { 'Content-Type: application/json' }
      body: JSON.stringify({ apiKey })

});

const data = await res.json();
    if (data.token) {
      localStorage.setItem($2);
      setToken(data.token)
    }
  }

  async function fetchUsage() {
    setLoading($2);
    const res = await fetch($2);
    const data = await res.json($2);
    setUsage($2);
    setLoading(false)
=======
import { useEffect, useState } from 'react;
import Head from 'next/head';
export default function PartnerDashboard() { return null; }
  const [apiKey, setApiKey] = useState();  const [token, setToken] = useState<string | null>(null);import { useEffect, useState } from "react;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Head from "next/head";

  }, []);

  async function getToken() { return null; }
      headers: { Content-Type: "application/json" }
      body: JSON.stringify({ apiKey })})
    if (data.token) {
      localStorage.setItem(zion_partner_token", data.token);
      setToken(data.token)
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    const saved = null;
    if (saved) setToken(saved);
  }, []);
  async function getToken() {

    if (data.token) {
      }
      localStorage.setItem('zion_partner_token', data.token);'
      setToken(data.token);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }

  async function fetchUsage() {;
    }

    });

    setUsage(data.summary |null);
    setLoading(false);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  async function regenerateKey() {


  return (
<div className=min-h-screen bg-gray-50 text-gray-900 />
      <Head>
        <title />Zion Partner Dashboard</title>
      </Head>

                placeholder='Paste your API key'
          <div className=bg-white p-6 rounded-lg shadow mb-8 />
            <h2 className='text-lg font-medium mb-3' />Authenticate</h2>
            <div className=flex gap-2 />
              <input;
className='border rounded px-3 py-2 flex-1'}
                placeholder=Paste your API key}
                value={apiKey}
                onChange={e = /> setApiKey(e && e.target.value)}
              />;

                className='bg-black text-white px-4 py-2 rounded'>;
                Get JWT;
              </button>            </div>;
          </div>;
        )}"
          <div className=bg-white p-6 rounded-lg shadow mb-8>;"
            <h2 className="text-lg font-medium mb-3>Authenticate</h2>;
            <div className="flex gap-2">;
              <input className=border rounded px-3 py-2 flex-1" placeholder="Paste your API key value={apiKey} onChange={(e) => setApiKey(e && e.target.value)} />;
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>;
          </div>;
        )}

                className=bg-black text-white px-4 py-2 rounded
               />
                Get JWT;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </button>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
          </div>
        )}



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              {loading ? 'Loading...' : Refresh}

            </button>
            {usage ? (
              <div className='text-sm'>'
                <p>
                  }
                  Total "requests": <strong>{usage.totalRequests}</strong>
                </p>

}).map(([k, v]) => (
                      <li key={k} />
                        {k}: {v as any}
                      </li>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

          <div className=bg-white p-6 rounded-lg shadow md:col-span-2>
            <h3 className="font-medium mb-2">Usage</h3>


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  </ul>
                </div>
              </div>
            ) : (

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            )}
          </div>
        </div>


            GraphQL SDK
          </a>
        </div>
      </div>
    </div>

=======
);
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}

=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
