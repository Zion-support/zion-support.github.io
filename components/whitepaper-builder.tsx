import React, { useMemo, useState } from 'react',
import Link from 'next/link',
import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper',
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper',
export default function WhitepaperBuilderPage() {
  const [edition, setEdition] = useState<WhitepaperEdition>('full'),
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]),

  const downloadHref = useMemo(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf',
    return `/api/zion-whitepaper-pdf?edition=${edition}`
  }, [edition]),

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-col gap-2&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Zion Protocol Whitepaper</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Investor and Developer editions. Toggle, review, and download as PDF.</p>
      </div>

      <div className=&quot;flex flex-wrap gap-3 items-center&quot;>
        <label className=&quot;font-medium&quot;>Edition</label>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value as WhitepaperEdition)}
          className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot;
        >
          <option value=&quot;full&quot;>Full</option>
          <option value=&quot;investor&quot;>Investor</option>
          <option value=&quot;developer&quot;>Developer</option>
        </select>
        <Link href={downloadHref} legacyBehavior>
          <a className=&quot;ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90&quot;>
            Download PDF
          </a>
        </a>
      </div>

      <div className=&quot;rounded border p-4 bg-gray-50 dark:bg-gray-900&quot;>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Operator Prompt</h2>
        <pre className=&quot;whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200&quot;>{OPERATOR_PROMPT}</pre>
      </div>

      <div className=&quot;space-y-10&quot;>
        {sections.map((s) => (
          <section key={s.id} className=&quot;space-y-2&quot;>
            <h2 className=&quot;text-2xl font-bold&quot;>{s.title}</h2>
            {s.subtitle ? <p className=&quot;text-gray-500&quot;>{s.subtitle}</p> : null}
            <article className=&quot;prose dark:prose-invert max-w-none whitespace-pre-wrap&quot;>{s.contentMd}</article>
          </section>
        ))}
      </div>
    </div>
  )
}