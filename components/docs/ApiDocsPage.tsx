
import React, { useMemo, useState } from 'react',
import Sidebar from './Sidebar',
import EndpointDetail from './EndpointDetail',
import v1 from '../../data/api-docs/v1';
import { ApiDocsSpec, EndpointSpec, Visibility } from '../../data/api-docs/types';

export default function ApiDocsPage() {
  const spec: ApiDocsSpec;
    setMessage('Saved')
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={load} className="px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">Load</button>
        <button onClick={save} className="px-3 py-1 rounded bg-high-contrast-accent text-black">Save</button>
        {message && <span className="text-xs text-high-contrast-muted">{message}</span>}
      </div>
      <textarea className="w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add changelog entries here..." />
    </div>
  )
};