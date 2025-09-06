import React, { useMemo, useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,;
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
<<<<<<< HEAD
=======

=======
import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function WhitepaperBuilderPage() {
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]);

  const downloadHref = useMemo(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf';
<<<<<<< HEAD
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
=======
    return `/api/zion-whitepaper-pdf?edition=${edition}`
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [edition]);

  return (
    <div className='space-y-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Zion Protocol Whitepaper</h1>
        <p className='text-gray-600 dark:text-gray-300'>
          Investor and Developer editions. Toggle, review, and download as PDF.
        </p>
      </div>

      <div className='flex flex-wrap gap-3 items-center'>
        <label className='font-medium'>Edition</label>
        <select
          value={edition}
          onChange={e => setEdition(e.target.value as WhitepaperEdition)}
          className='border rounded px-3 py-2 bg-white dark:bg-black'
        >
          <option value='full'>Full</option>
          <option value='investor'>Investor</option>
          <option value='developer'>Developer</option>
        </select>
        <Link href={downloadHref} legacyBehavior>
<<<<<<< HEAD
          <a className='ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90'>            Download PDF
=======
<<<<<<< HEAD
          <a className='ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90'>
=======
    return `/api/zion-whitepaper-pdf?edition=${edition}`
  }, [edition]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Zion Protocol Whitepaper</h1>
        <p className="text-gray-600 dark:text-gray-300">Investor and Developer editions. Toggle, review, and download as PDF.</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-medium" htmlFor="input-Edition">Edition</label>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value as WhitepaperEdition)}
          className="border rounded px-3 py-2 bg-white dark:bg-black"
        >
          <option value="full">Full</option>
          <option value="investor">Investor</option>
          <option value="developer">Developer</option>
        </select>
        <Link href={downloadHref} legacyBehavior>
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Download PDF
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </a>
        </Link>
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='rounded border p-4 bg-gray-50 dark:bg-gray-900'>
        <h2 className='text-xl font-semibold mb-2'>Operator Prompt</h2>
        <pre className='whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200'>
          {OPERATOR_PROMPT}
        </pre>
      </div>

      <div className='space-y-10'>
        {sections.map(s => (
          <section key={s.id} className='space-y-2'>
            <h2 className='text-2xl font-bold'>{s.title}</h2>
            {s.subtitle ? <p className='text-gray-500'>{s.subtitle}</p> : null}
            <article className='prose dark:prose-invert max-w-none whitespace-pre-wrap'>
              {s.contentMd}
<<<<<<< HEAD
            </article>          </section>
=======
            </article>
=======
      <div className="rounded border p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Operator Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{OPERATOR_PROMPT}</pre>
      </div>

=======
      <div className="rounded border p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Operator Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{OPERATOR_PROMPT}</pre>
      </div>

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{s.contentMd}</article>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </section>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
