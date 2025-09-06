
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
import React from 'react';
<<<<<<< HEAD
import { ApiDocsSpec, Visibility } from '../../data/api-docs/types';
interface SidebarProps {
=======
import {ApiDocsSpec, Visibility} from '../../data/api-docs/types';

interface SidebarProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';

  onChangeVisibility: (v: Visibility | 'all') => void;

<<<<<<< HEAD
export default function Sidebar({
  spec
  activeEndpointId
  onSelectEndpoint
  selectedVersion
  onChangeVersion
  visibilityFilter
  onChangeVisibility
}: SidebarProps) {
=======
export default function Sidebar(): any ({;
  spec,;
  activeEndpointId,;
  onSelectEndpoint,;
  selectedVersion,;
  onChangeVersion,;
  visibilityFilter,;
  onChangeVisibility,;
}: SidebarProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <aside className='w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary'>;
      <div>;
        <div className='text-lg font-semibold'>Zion OS API</div>;
        <div className='text-xs text-high-contrast-muted'>Version</div>;
        <div className='flex gap-2 mt-2 flex-wrap'>;
          {spec && spec.versions.map(v => (;
            <button
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
            >;
              {v}
<<<<<<< HEAD
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>
        <div className="text-xs text-high-contrast-muted">Version</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {spec.versions.map((v) => (
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>
        </div>
      </div>
      <div>
        <div className='text-xs text-high-contrast-muted mb-1'>
          Publish Mode
        </div>
        <select
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm'
          value={visibilityFilter}
          onChange={e => onChangeVisibility(e.target.value as any)}
        >
          <option value='all'>All</option>
          <option value='public'>Public</option>
          <option value='partner'>Partner-only</option>
          <option value='internal'>Internal</option>
        </select>
      </div>
      <nav className='space-y-3'>
        {spec.sections.map(section => (
          <div key={section.id}>
            <div className='text-sm font-medium mb-1'>{section.title}</div>
            <ul className='space-y-1'>
              {section.endpoints
                .filter(e => e.versions.includes(selectedVersion))
                .filter(e =>
                  visibilityFilter === 'all'
                    ? true
                    : e.visibility === visibilityFilter
                )
                .map(e => (                  <li key={e.id}>        </select>
      </div>
      <nav className="space-y-3">
        {spec.sections.map((section) => (
          <div key={section.id}>
            <div className="text-sm font-medium mb-1">{section.title}</div>
            <ul className="space-y-1">
              {section.endpoints
                .filter((e) => e.versions.includes(selectedVersion))
                .filter((e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter)
                .map((e) => (
                  <li key={e.id}>
=======
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>;
        <div className="text-xs text-high-contrast-muted">Version</div>;
        <div className="flex gap-2 mt-2 flex-wrap">;
          {spec && spec.versions.map((v) => (;
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>;
        </div>;
      </div>;

      <div>;
        <div className='text-xs text-high-contrast-muted mb-1'>;
          Publish Mode;
        </div>;
        <select
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm'
          value={visibilityFilter}
          onChange={e => onChangeVisibility(e && e.target.value as any)}
        >;
          <option value='all'>All</option>;
          <option value='public'>Public</option>;
          <option value='partner'>Partner-only</option>;
          <option value='internal'>Internal</option>;
        </select>;
      </div>;

      <nav className='space-y-3'>;
        {spec && spec.sections.map(section => (;
          <div key={section && section.id}>;
            <div className='text-sm font-medium mb-1'>{section && section.title}</div>;
            <ul className='space-y-1'>;
              {section && section.endpoints;
                .filter(e => e && e.versions.includes(selectedVersion));
                .filter(e =>;
                  visibilityFilter === 'all';
                    ? true;
                    : e && e.visibility === visibilityFilter;
                );
                .map(e => (                  <li key={e && e.id}>        </select>;
      </div>;

      <nav className="space-y-3">;
        {spec && spec.sections.map((section) => (;
          <div key={section && section.id}>;
            <div className="text-sm font-medium mb-1">{section && section.title}</div>;
            <ul className="space-y-1">;
              {section && section.endpoints;
                .filter((e) => e && e.versions.includes(selectedVersion));
                .filter((e) => visibilityFilter === 'all' ? true : e && e.visibility === visibilityFilter);
                .map((e) => (;
                  <li key={e && e.id}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <button
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e && e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
                      onClick={() => onSelectEndpoint(e && e.id)}
                    >;
                      <span className='mr-2 inline-block w-10 text-center text-[10px] opacity-80'>;
                        {e && e.method}
                      </span>;
                      <span className='font-mono'>{e && e.path}</span>                    </button>                      <span className="mr-2 inline-block w-10 text-center text-[10px] opacity-80">{e && e.method}</span>;
                      <span className="font-mono">{e && e.path}</span>;
                    </button>;
                  </li>;
                ))}
            </ul>;
          </div>;
        ))}
      </nav>;
    </aside>;
  );
}