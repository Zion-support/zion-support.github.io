<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useMemo, useState } from "react";
import Head from "next/head";
import { getZionDesignMap } from "../utils/design-map";
export default function DesignMapPage() {

  const designMap = useMemo(() => getZionDesignMap(), []);
  const [screenName, setScreenName] = useState("");
  const [role, setRole] = useState("Talent");
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function requestWireframe() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx



<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { getZionDesignMap } from '../utils/design-map';

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function DesignMapPage() {
=======
export default function DesignMapPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
  const designMap = useMemo(() => getZionDesignMap(), [])
  const [screenName, setScreenName] = useState('')'
  const [role, setRole] = useState('Talent')
  const [suggestion, setSuggestion] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

<<<<<<< HEAD:pages_backup/design-map.tsx
  async function requestWireframe() {
<<<<<<< HEAD
=======
export default function DesignMapPage() {
=======
  async function requestWireframe() {}
export default function DesignMapPage() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
  const designMap = useMemo(() => getZionDesignMap(), []);
  const [screenName, setScreenName] = useState("");"
  const [role, setRole] = useState("Talent");
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD:pages_backup/design-map.tsx
  async function requestWireframe() {
<<<<<<< HEAD
    if (!screenName) return
    setIsLoading(true)
    setSuggestion(null)
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function DesignMapPage(req, res) {
  try {
  const designMap = useMemo(() => getZionDesignMap(), []);
  const [screenName, setScreenName] = useState('');
  const [role, setRole] = useState('Talent');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function requestWireframe() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);
<<<<<<< HEAD
    try {
      const res = await fetch("/api/figma/wireframe-suggest", {
        method: "POST"
        headers: { "Content-Type": "application/json" }
        body: JSON.stringify({ screenName, role })
      });
      const json = await res.json();
      setSuggestion(json?.suggestion |"No suggestion received");

    } catch (e: any) {
      setSuggestion(e?.message |"Failed to fetch suggestion");
    } finally {
      setIsLoading(false);
    }
  }
=======
=======
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    try {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);
    try {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      const res = await fetch('/api/figma/wireframe-suggest', {;
        method: 'POST';
=======
  async function requestWireframe() {}
export default function DesignMapPage(req, res) {}
  try {};
  const designMap = useMemo(() => getZionDesignMap(), []);'
  const [screenName, setScreenName] = useState('');'
  const [role, setRole] = useState('Talent');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function requestWireframe() { return null; }
    try {}
'
      const res = await fetch('/api/figma/wireframe-suggest', {;'
        method: 'POST';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
        headers: { 'Content-Type': 'application/json' };
        body: JSON.stringify({ screenName, role })});
      const json = await res.json();'
      setSuggestion(json?.suggestion || 'No suggestion received');
    } catch (error) {'
      setSuggestion(e?.message || 'Failed to fetch suggestion');
    } finally {;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { getZionDesignMap } from '../utils/design-map';

export default function DesignMapPage() {
      const res = await fetch('/api/figma/wireframe-suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ screenName, role }),
      });
      const json = await res.json();
      setSuggestion(json?.suggestion |"No suggestion received");
    } catch (e: any) {
      setSuggestion(e?.message |"Failed to fetch suggestion");
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD:pages/design-map.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(false);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
    if (!screenName) return;
    setIsLoading(true);
    setSuggestion(null);
    try {"
      const res = await fetch("/api/figma/wireframe-suggest", {"
        method: "POST","
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ screenName, role }),
      });
      const json = await res.json();"
      setSuggestion(json?.suggestion || "No suggestion received");
    } catch (e: any) {"
      setSuggestion(e?.message || "Failed to fetch suggestion");
    } finally {}
      setIsLoading(false);
    }
<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> main
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx



<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
  return (
    <>
      <Head>
        <title>Zion OS Design Map</title>
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>
          <div className="flex gap-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
"
      <section className="space-y-6">"
        <div className="flex items-center justify-between">"
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>"
          <div className="flex gap-2">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx



          </div>
        </div>
"
        <div className="grid md:grid-cols-2 gap-6">"
          <MapColumn title="Foundations" sections={designMap.products.foundations} />"
          <MapColumn title="Talent UI" sections={designMap.products.talent} />"
          <MapColumn title="Client UI" sections={designMap.products.client} />"
          <MapColumn title="AI Tools UI" sections={designMap.products.aiTools} />"
          <MapColumn title="DAO & Token UI" sections={designMap.products.dao} />"
          <MapColumn title="Admin Console" sections={designMap.products.admin} />"
          <MapColumn title="Mobile Layouts" sections={designMap.products.mobile} />
        </div>

<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<section className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Zion OS Design Map</h1>
          <div className='flex gap-2'>
<<<<<<< HEAD
<<<<<<< HEAD:pages/design-map.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <a
              href="/api/design-map"
=======










            <a"
              href="/api/design-map""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
              className="px-3 py-2 rounded bg-gray-900 text-white text-sm"
            >
              JSON;
            </a>
            <a"
              href="/api/figma/export?kit=tailwind""
              className="px-3 py-2 rounded bg-neon-blue text-black text-sm"
            >
              Export Tailwind;
            </a>
            <a"
              href="/api/figma/export?kit=chakra""
              className="px-3 py-2 rounded bg-neon-purple text-white text-sm"
            >
              Export Chakra;
            </a>
            <a"
              href="/api/figma/export?kit=react""
              className="px-3 py-2 rounded bg-neon-green text-black text-sm"
            >
              Export React;
            </a>
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
          </div>
        </div>
"
        <div className="grid md:grid-cols-2 gap-6">
          <MapColumn"
            title="Foundations"
            sections={designMap.products.foundations}
          />"
          <MapColumn title="Talent UI" sections={designMap.products.talent} />"
          <MapColumn title="Client UI" sections={designMap.products.client} />
          <MapColumn"
            title="AI Tools UI"
            sections={designMap.products.aiTools}
          />"
          <MapColumn title="DAO & Token UI" sections={designMap.products.dao} />
          <MapColumn"
            title="Admin Console"
            sections={designMap.products.admin}
          />
          <MapColumn"
            title="Mobile Layouts"
            sections={designMap.products.mobile}
          />
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <a href="/api/design-map" className="px-3 py-2 rounded bg-gray-900 text-white text-sm">JSON</a>
            <a href="/api/figma/export?kit=tailwind" className="px-3 py-2 rounded bg-neon-blue text-black text-sm">Export Tailwind</a>
            <a href="/api/figma/export?kit=chakra" className="px-3 py-2 rounded bg-neon-purple text-white text-sm">Export Chakra</a>
            <a href="/api/figma/export?kit=react" className="px-3 py-2 rounded bg-neon-green text-black text-sm">Export React</a>
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
          <h2 className="font-medium mb-3">Create New Screen</h2>
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-end">
            <div className="flex-1 w-full">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


        </div>


"
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">"
          <h2 className="font-medium mb-3">Create New Screen</h2>"
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-end">"
            <div className="flex-1 w-full">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx



"
              <label className="block text-xs text-gray-500 mb-1">
<<<<<<< HEAD:pages_backup/design-map.tsx
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>

        <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>
          <h2 className='font-medium mb-3'>Create New Screen</h2>
          <div className='flex flex-col md:flex-row gap-3 items-start md:items-end'>
            <div className='flex-1 w-full'>
              <label className='block text-xs text-gray-500 mb-1'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Screen name
=======
                Screen name;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
              </label>
              <input;
                value={screenName}
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
                onChange={(e) => setScreenName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40"
=======
                onChange={(e) => setScreenName(e.target.value)}"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
                placeholder="e.g., Talent Dashboard - Insights"
              />
            </div>
            <div>"
              <label className="block text-xs text-gray-500 mb-1">Role</label>
              <select;
                value={role}
                onChange={(e) => setRole(e.target.value)}"
                className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40"
              >
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                onChange={e => setScreenName(e.target.value)}
                className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40'
                placeholder='e.g., Talent Dashboard - Insights'
              />
            </div>
            <div>
              <label className='block text-xs text-gray-500 mb-1'>Role</label>
              <select
                value={role}
                onChange={e => setRole(e.target.value)}
                className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40'
              >
<<<<<<< HEAD
<<<<<<< HEAD:pages/design-map.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <option>Talent</option>
                <option>Client</option>
                <option>Admin</option>
                <option>DAO</option>
                <option>AI Tools</option>
                <option>Mobile</option>
              </select>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
            </button>
          </div>
          {suggestion && ("
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
<<<<<<< HEAD
          )}
        </div>
      </section>
    </>


            </button>
          </div>
          {suggestion && ("
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<button
              onClick={requestWireframe}
              className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60"
              disabled={isLoading |!screenName}
            >
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
            </button>
          </div>
          {suggestion && (
<pre className='mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800'>
              {suggestion}
            </pre>
<<<<<<< HEAD
<<<<<<< HEAD:pages/design-map.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          )}
        </div>
      </section>
    </>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
            </pre>)}
        </div>;
      </section>;
    </>);
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx


}

function MapColumn({ title, sections }: { title: string, sections: { id: string, title: string, items: { id: string, title: string }[] }[] }) {}
  );
}
=======
}
function MapColumn({ title, sections }: { title: string, sections: { id: string, title: string, items: { id: string, title: string }[] }[] }) {
  );
}
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

function MapColumn({}
  title,
  sections,
}: {}
  title: string;
  sections: {}
    id: string;
    title: string;
    items: { id: string; title: string }[];
  }[];
<<<<<<< HEAD:pages_backup/design-map.tsx
}) {
<<<<<<< HEAD
<<<<<<< HEAD
            <button onClick={requestWireframe} className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60" disabled={isLoading || !screenName}>
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </button>
          </div>
          {suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}
        </div>
      </section>
    </>
  )
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
/**
 * MapColumn - Function description
 */
function MapColumn() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
=======
}) {}
  return ("
    <div className="space-y-3">"
      <h3 className="text-lg font-semibold">{title}</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
      <div className="grid gap-3">
        {sections.map((s) => (
          <div;
            key={s.id}"
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40"
          >"
            <div className="font-medium mb-2">{s.title}</div>"
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
<<<<<<< HEAD
=======
                <span
                  key={i.id}
                  className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800"
                >
<<<<<<< HEAD
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {i.title}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx

"
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">

                  {i.title}



                  {i.title}
<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  return (
    <div className='space-y-3'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <div className='grid gap-3'>
        {sections.map(s => (
          <div
            key={s.id}
            className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'
          >
            <div className='font-medium mb-2'>{s.title}</div>
            <div className='flex flex-wrap gap-2'>
              {s.items.map(i => (
                <span
                  key={i.id}
                  className='text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800'
                >
                  {i.title}

                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">

                  {i.title}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD:pages/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  );
          <div key={s.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
            <div className="font-medium mb-2">{s.title}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx



<<<<<<< HEAD:pages_backup/design-map.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx

  )
};
<<<<<<< HEAD:pages_backup/design-map.tsx
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  )
};
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  {i.title  } catch (error) {
    console.error("Error:", error);
=======


                  {i.title  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </span>;
              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
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
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
}


  );
}
<<<<<<< HEAD:pages_backup/design-map.tsx
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
}
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
  );
}
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/design-map.tsx
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/design-map.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
