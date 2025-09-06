<<<<<<< HEAD


    }
  }
=======

import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { getZionDesignMap } from '../utils/design-map';

=======
<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { getZionDesignMap } from '../utils/design-map';
<<<<<<< HEAD
;
=======
import React, { useMemo, useState } from "react";
import Head from "next/head";
import { getZionDesignMap } from "../utils/design-map";
>>>>>>> main
export default function DesignMapPage() {
  const designMap = useMemo(() => getZionDesignMap(), [])
  const [screenName, setScreenName] = useState('')
  const [role, setRole] = useState('Talent')
  const [suggestion, setSuggestion] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function requestWireframe() {
<<<<<<< HEAD
    if (!screenName) return
    setIsLoading(true)
    setSuggestion(null)
=======
export default function DesignMapPage(req, res) {
  try {
  const designMap = useMemo(() => getZionDesignMap(), []);
  const [screenName, setScreenName] = useState('');
  const [role, setRole] = useState('Talent');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function requestWireframe() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {

      const res = await fetch('/api/figma/wireframe-suggest', {;
        method: 'POST';
        headers: { 'Content-Type': 'application/json' };
        body: JSON.stringify({ screenName, role })});
      const json = await res.json();
      setSuggestion(json?.suggestion || 'No suggestion received');
    } catch (error) {
      setSuggestion(e?.message || 'Failed to fetch suggestion');
    } finally {;
      setIsLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
=======
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);
    try {
      const res = await fetch("/api/figma/wireframe-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ screenName, role }),
      });
      const json = await res.json();
      setSuggestion(json?.suggestion || "No suggestion received");
    } catch (e: any) {
      setSuggestion(e?.message || "Failed to fetch suggestion");
    } finally {
      setIsLoading(false);
    }
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    try {
const res = await fetch("/api/figma/wireframe-suggest", {
        method: "POST"
        headers: { "Content-Type": "application/json" }
        body: JSON.stringify({ screenName, role })
      });
      const json = await res.json();
      setSuggestion(json?.suggestion |"No suggestion received");

    } catch (e: any) {
      setSuggestion(e?.message || "Failed to fetch suggestion");
    } finally {
      setIsLoading(false);
    }
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <>
      <Head>
        <title>Zion OS Design Map</title>
      </Head>
<<<<<<< HEAD
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>
          <div className="flex gap-2">


=======
<section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>
          <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <a href="/api/design-map" className="px-3 py-2 rounded bg-gray-900 text-white text-sm">JSON</a>
            <a href="/api/figma/export?kit=tailwind" className="px-3 py-2 rounded bg-neon-blue text-black text-sm">Export Tailwind</a>
            <a href="/api/figma/export?kit=chakra" className="px-3 py-2 rounded bg-neon-purple text-white text-sm">Export Chakra</a>
            <a href="/api/figma/export?kit=react" className="px-3 py-2 rounded bg-neon-green text-black text-sm">Export React</a>


=======
            <a href="/api/design-map" className="px-3 py-2 rounded bg-gray-900 text-white text-sm">JSON</Link>
            <a href="/api/figma/export?kit=tailwind" className="px-3 py-2 rounded bg-neon-blue text-black text-sm">Export Tailwind</Link>
            <a href="/api/figma/export?kit=chakra" className="px-3 py-2 rounded bg-neon-purple text-white text-sm">Export Chakra</Link>
            <a href="/api/figma/export?kit=react" className="px-3 py-2 rounded bg-neon-green text-black text-sm">Export React</Link>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MapColumn title="Foundations" sections={designMap.products.foundations} />
          <MapColumn title="Talent UI" sections={designMap.products.talent} />
          <MapColumn title="Client UI" sections={designMap.products.client} />
          <MapColumn title="AI Tools UI" sections={designMap.products.aiTools} />
          <MapColumn title="DAO & Token UI" sections={designMap.products.dao} />
          <MapColumn title="Admin Console" sections={designMap.products.admin} />
          <MapColumn title="Mobile Layouts" sections={designMap.products.mobile} />
        </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
            <a
              href="/api/design-map"
              className="px-3 py-2 rounded bg-gray-900 text-white text-sm"
            >
              JSON
            </a>
            <a
              href="/api/figma/export?kit=tailwind"
              className="px-3 py-2 rounded bg-neon-blue text-black text-sm"
            >
              Export Tailwind
            </a>
            <a
              href="/api/figma/export?kit=chakra"
              className="px-3 py-2 rounded bg-neon-purple text-white text-sm"
            >
              Export Chakra
            </a>
            <a
              href="/api/figma/export?kit=react"
              className="px-3 py-2 rounded bg-neon-green text-black text-sm"
            >
              Export React
            </a>
>>>>>>> main
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MapColumn
            title="Foundations"
            sections={designMap.products.foundations}
          />
          <MapColumn title="Talent UI" sections={designMap.products.talent} />
          <MapColumn title="Client UI" sections={designMap.products.client} />
          <MapColumn
            title="AI Tools UI"
            sections={designMap.products.aiTools}
          />
          <MapColumn title="DAO & Token UI" sections={designMap.products.dao} />
          <MapColumn
            title="Admin Console"
            sections={designMap.products.admin}
          />
          <MapColumn
            title="Mobile Layouts"
            sections={designMap.products.mobile}
          />
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
          <h2 className="font-medium mb-3">Create New Screen</h2>
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-end">
            <div className="flex-1 w-full">
<<<<<<< HEAD

              <select value={role} onChange={e => setRole(e.target.value)} className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40">

=======

              <label className="block text-xs text-gray-500 mb-1">Screen name</label>
              <input value={screenName} onChange={e => setScreenName(e.target.value)} className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40" placeholder="e.g., Talent Dashboard - Insights" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Role</label>
              <select value={role} onChange={e => setRole(e.target.value)} className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              <label className="block text-xs text-gray-500 mb-1">
                Screen name
              </label>
              <input
                value={screenName}
                onChange={(e) => setScreenName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40"
                placeholder="e.g., Talent Dashboard - Insights"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40"
              >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <option>Talent</option>
                <option>Client</option>
                <option>Admin</option>
                <option>DAO</option>
                <option>AI Tools</option>
                <option>Mobile</option>
              </select>
            </div>
<<<<<<< HEAD


            </button>
          </div>
          {suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}
        </div>
      </section>
    </>


=======
=======
<<<<<<< HEAD
            <button onClick={requestWireframe} className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60" disabled={isLoading || !screenName}>
<<<<<<< HEAD
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
=======
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            </button>
          </div>
          {suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
<<<<<<< HEAD
=======
            <button
              onClick={requestWireframe}
              className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60"
              disabled={isLoading || !screenName}
            >
              {isLoading ? "Generating…" : "GPT Wireframe Suggestion"}
            </button>
          </div>
          {suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">
              {suggestion}
            </pre>
>>>>>>> main
          )}
        </div>
      </section>
    </>
<<<<<<< HEAD
  )
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </pre>)}
        </div>;
      </section>;
    </>);
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
<<<<<<< HEAD
/**
 * MapColumn - Function description
 */
function MapColumn() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (

                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">

                  {i.title}
=======
function MapColumn({ title, sections }: { title: string, sections: { id: string, title: string, items: { id: string, title: string }[] }[] }) {
=======
  );
}

function MapColumn({
  title,
  sections,
}: {
  title: string;
  sections: {
    id: string;
    title: string;
    items: { id: string; title: string }[];
  }[];
}) {
>>>>>>> main
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid gap-3">
        {sections.map((s) => (
          <div
            key={s.id}
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40"
          >
            <div className="font-medium mb-2">{s.title}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
<<<<<<< HEAD
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
<<<<<<< HEAD
=======
                <span
                  key={i.id}
                  className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800"
                >
>>>>>>> main
                  {i.title}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid gap-3">
        {sections.map((s) => (

                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  )
};
=======
                  {i.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </span>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
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
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
}
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
