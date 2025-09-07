

import type { WhitepaperEdition } from '../utils/whitepaper/zionWhitepaper;
export default function WhitepaperBuilderPage() {
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;

  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:, error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from react';

import {
  getWhitepaperSections,
  OPERATOR_PROMPT} from '../utils/whitepaper/zionWhitepaper;
import type { WhitepaperEdition } from ../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../utils/whitepaper/zionWhitepaper;
import type { WhitepaperEdition } from ../utils/whitepaper/zionWhitepaper';
export default function WhitepaperBuilderPage() {

            Download PDF;
          </a>;
        </Link>;
      </div>;

              {s.contentMd}
      </div>;
  const [edition, setEdition] = useState<WhitepaperEdition>(full'),
  const sections = useMemo(() => getWhitepaperSections(edition), [edition]),

  const downloadHref = $2;
    return `/api/zion-whitepaper-pdf?edition=${edition}`
  }, [edition]),

  return (
    <div className=space-y-6">
      <div className="flex flex-col gap-2>
        <h1 className=text-3xl font-bold">Zion Protocol Whitepaper</h1>
        <p className="text-gray-600 dark:text-gray-300>Investor and Developer editions. Toggle, review, and download as PDF.</p>
      </div>

      <div className=flex flex-wrap gap-3 items-center">
        <label className="font-medium>Edition</label>
        <select
          value={edition}
          onChange={(e) => setEdition(e.target.value as WhitepaperEdition)}
          className=border rounded px-3 py-2 bg-white dark:bg-black"
        >
          <option value="full>Full</option>
          <option value=investor">Investor</option>
          <option value="developer>Developer</option>
        </select>
        <Link href={downloadHref} legacyBehavior>
          <a className=ml-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
            Download PDF
          </a>
        </Link>
      </div>


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
