<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { getWhitepaperSections, OPERATOR_PROMPT  } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = null;
=======
import React, { useMemo, useState } from 'react',
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import React, { useMemo, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Link from 'next/link';

import {
<<<<<<< HEAD
  getWhitepaperSections
  OPERATOR_PROMPT;
=======
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
<<<<<<< HEAD
=======
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,;
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
export default function WhitepaperBuilderPage() {;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function WhitepaperBuilderPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]);
  const downloadHref = useMemo(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf';
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
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
          <a className='ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90'>            Download PDF  }, [edition]);

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
=======
          <a className='ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            Download PDF
          </a>
        </Link>
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
            </article>          </section>      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{s.contentMd}</article>
        ))}
      </div>
    </div>
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD
            </article>
          </section>
        ))}
      </div>
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
