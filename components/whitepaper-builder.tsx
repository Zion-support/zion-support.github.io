
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

import {;
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
} from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper';
import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {;
export default function WhitepaperBuilderPage() {
  const [edition, setEdition] = useState<WhitepaperEdition>('full');
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]);
    return `/api/zion-whitepaper-pdf?edition=${edition}`;
  }, [edition]);
  return (

  return (
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
      <div className='rounded border p - 4 bg - gray - 50 dark:bg - gray - 900'>;
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
