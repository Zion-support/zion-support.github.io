
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
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {;
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
        {sections.map((s) => (
          <section key={s.id} className="space-y-2">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.subtitle ? <p className="text-gray-500">{s.subtitle}</p> : null}
            <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap">{s.contentMd}</article>
        >;
          <option value="full">Full</option>;
          <option value="investor">Investor</option>;
          <option value="developer">Developer</option>;
        </select>;
            Download PDF;
          </a>;
        </Link>;
      </div>;
          </section>
        ))}
      </div>
    </div>

  );
}

