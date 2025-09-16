<<<<<<< HEAD
import React from 'react';

const whitepaper-builder: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">whitepaper-builder</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
import React, { useMemo, useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';

export default function WhitepaperBuilderPage() {
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]);
  const downloadHref = useMemo(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf';
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
  }, [edition]);
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Zion Protocol Whitepaper</h1>
        <p className="text-gray-600 dark:text-gray-300">Investor and Developer editions. Toggle, review, and download as PDF.</p>
      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-medium">Edition</label>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value as WhitepaperEdition)}
          className="border rounded px-3 py-2 bg-white dark:bg-black"
        >
          <option value="full">Full</option>
          <option value="investor">Investor</option>
          <option value="developer">Developer</option>
        <a href={downloadHref} legacyBehavior>
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
            Download PDF
      <div className="rounded border p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Operator Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{OPERATOR_PROMPT}</pre>
      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{s.contentMd}</article>
        ))}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default whitepaper-builder;