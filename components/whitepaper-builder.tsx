

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';export default function WhitepaperBuilderPage() {;
import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {

import React, { useMemo, useState } from 'react';

import Link from 'next/link';

import {

  getWhitepaperSections,;
  OPERATOR_PROMPT,;

} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';

export default function WhitepaperBuilderPage() {

=======
import Link from 'next/link';

} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {;
export default function WhitepaperBuilderPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]);


  const downloadHref = useMemo(() => {;
    if (edition === 'full') return '/docs/zion-protocol && protocol.pdf';

    return `/api/zion-whitepaper-pdf?edition=${edition}`;
  }, [edition]);
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <select
          value={edition}
          onChange={e => setEdition(e && e.target.value as WhitepaperEdition)}
          className='border rounded px-3 py-2 bg-white dark:bg-black';
        >;
          <option value='full'>Full</option>;
          <option value='investor'>Investor</option>;
          <option value='developer'>Developer</option>;
        </select>;
        <Link href={downloadHref} legacyBehavior>;
          <a className='ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90'>            Download PDF  }, [edition]);
=======
=======
=======
    return `/api/zion-whitepaper-pdf?edition=${edition}`
  }, [edition]);

  return (


      <div className="rounded border p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Operator Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{OPERATOR_PROMPT}</pre>
      </div>

      <div className="space-y-10">

import {
  getWhitepaperSections
  OPERATOR_PROMPT;
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {;
export default function WhitepaperBuilderPage() {
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
            Download PDF
          </a>
        </Link>
      </div>
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
            </article>          </section>      <div className="space-y-10">
==============        {sections.map((s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{s.contentMd}</article>
    <div className="space-y-6">;
      <div className="flex flex-col gap-2">;
        <h1 className="text-3xl font-bold">Zion Protocol Whitepaper</h1>;
        <p className="text-gray-600 dark:text-gray-300">Investor and Developer editions. Toggle, review, and download as PDF.</p>;
      </div>;
      <div className="flex flex-wrap gap-3 items-center">;
        <label className="font-medium" htmlFor="input-Edition">Edition</label>;
        <select
          value={edition}
          onChange={(e) => setEdition(e && e.target.value as WhitepaperEdition)}
          className="border rounded px-3 py-2 bg-white dark:bg-black";
import Link from 'next / link';
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,
} from '../utils / whitepaper / zion_whitepaper';
import type { WhitepaperEdition } from '../utils / whitepaper / zion_whitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils / whitepaper / zion_whitepaper';
import type { WhitepaperEdition } from '../utils / whitepaper / zion_whitepaper';
export default /**
 * WhitepaperBuilderPage - Function description
 */
function WhitepaperBuilderPage() {
  const [edition, set_edition] = useState < WhitepaperEdition>('full');
  const sections = useMemo (() => getWhitepaperSections (edition), [edition]);
;
  const download_href = useMemo (() => {
    // Check condition
if (return '/docs / zion - protocol.pdf') {
  $2
}
    return `/api / zion - whitepaper - pdf?edition=${edition}`;
  }, [edition]);
;
  return (
    <div className='space - y-6'>;
      <div className='flex flex - col gap - 2'>;
        <h1 className='text - 3xl font - bold'>Zion Protocol Whitepaper</h1>;
        <p className='text - gray - 600 dark:text - gray - 300'>;
          Investor and Developer editions. Toggle, review, and download as PDF.;
        </p>;
      </div>;
      <div className='flex flex - wrap gap - 3 items - center'>;
        <label className='font - medium'>Edition</label>;
        <select;
          value={edition}
          on_change={e => set_edition (e.target.value as WhitepaperEdition)}
          className='border rounded px - 3 py - 2 bg - white dark:bg - black';
        >;
          <option value='full'>Full</option>;
          <option value='investor'>Investor</option>;
          <option value='developer'>Developer</option>;
        </select>;
        <Link href={download_href} legacy_behavior>;
          <a className='ml - 2 inline - flex items - center gap - 2 px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black hover:opacity - 90'>            Download PDF  }, [edition]);
;
  return (
    <div className="space - y-6">;
      <div className="flex flex - col gap - 2">;
        <h1 className="text - 3xl font - bold">Zion Protocol Whitepaper</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Investor and Developer editions. Toggle, review, and download as PDF.</p>;
      </div>;
      <div className="flex flex - wrap gap - 3 items - center">;
        <label className="font - medium" html_for="input - Edition">Edition</label>;
        <select;
          value={edition}
          on_change={(e) => set_edition (e.target.value as WhitepaperEdition)}
          className="border rounded px - 3 py - 2 bg - white dark:bg - black";

          </section>
        ))}
      </div>
    </div>
);
}
=======      <div className='rounded border p - 4 bg - gray - 50 dark:bg - gray - 900'>;
        <h2 className='text - xl font - semibold mb - 2'>Operator Prompt</h2>;
        <pre className='whitespace - pre - wrap text - sm text - gray - 700 dark:text - gray - 200'>;
          {OPERATOR_PROMPT}
        </pre>;
      </div>;
      <div className='space - y-10'>;
        {sections.map (string => (
          <section key={s.id} className='space - y-2'>;
            <h2 className='text - 2xl font - bold'>{s.title}</h2>;
            {s.subtitle ? <p className='text - gray - 500'>{s.subtitle}</p> : null}
            <article className='prose dark:prose - invert max - w-none whitespace - pre - wrap'>;
              {s.content_md}
            </article>          </section>      <div className="space - y-10">;
        {sections.map ((s) => (
          <section key={s.id} className="space - y-2">;
            <h2 className="text - 2xl font - bold">{s.title}</h2>;
            {s.subtitle ? <p className="text - gray - 500">{s.subtitle}</p> : null}
            <article className="prose dark:prose - invert max - w-none whitespace - pre - wrap">{s.content_md}</article>))}
      </div>;
    </div>);
}
  );
}

<<<<<<< HEAD
        ))}
      </div>
    </div>
);
}
  );
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
);
}