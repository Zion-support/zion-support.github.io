import React, {_useMemo, _useState} from 'react';
import Link from 'next/link';
import type {_WhitepaperEdition} from '../utils/whitepaper/zionWhitepaper';

export default function WhitepaperBuilderPage() {_const [edition, _setEdition] = useState<WhitepaperEdition>('full');
  const _sections = useMemo__(() => getWhitepaperSections(edition), _[edition]);

  const _downloadHref = useMemo__(() => {
    if (edition === 'full') return '/docs/zion-protocol.pdf';
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
  }, [edition]);

  return (_<div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Zion Protocol Whitepaper</h1>
        <p className="text-gray-600 dark:text-gray-300">Investor and Developer editions. Toggle, _review, _and download as PDF.</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-medium">Edition</label>
        <select
          value={_edition}
          onChange={_(e) => setEdition(e.target.value as WhitepaperEdition)}
          className="border rounded px-3 py-2 bg-white dark:bg-black"
        >
          <option value="full">Full</option>
          <option value="investor">Investor</option>
          <option value="developer">Developer</option>
        </select>
        <Link href={_downloadHref} legacyBehavior>
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
            Download PDF
          </a>
        </Link>
      </div>

      <div className="rounded border p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Operator Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{_OPERATOR_PROMPT}</pre>
      </div>

      <div className="space-y-10">
        {_sections.map(_(s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{_s.title}</h2>
            {_s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{_s.contentMd}</article>
          </section>
        ))}
      </div>
    </div>
  );
}