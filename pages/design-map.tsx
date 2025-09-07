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
  }

  return (
    <>
      <Head>
        <title>Zion OS Design Map</title>
      </Head>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>
          <div className="flex gap-2">
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Request Wireframe</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Screen name"
                value={screenName}
                onChange={(e) => setScreenName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Talent">Talent</option>
                <option value="Client">Client</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                onClick={requestWireframe}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Request Wireframe"}
              </button>
            </div>
            {suggestion && (
              <div className="p-4 bg-gray-100 rounded-md">
                <h3 className="font-medium mb-2">Suggestion:</h3>
                <p className="text-sm text-gray-700">{suggestion}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Design Map</h2>
            <div className="p-4 bg-gray-50 rounded-md">
              <pre className="text-xs overflow-auto">
                {JSON.stringify(designMap, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}