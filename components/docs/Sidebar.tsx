
import React from 'react';
import { ApiDocsSpec, Visibility } from '../../data/api-docs/types';
interface SidebarProps {
import {ApiDocsSpec, Visibility} from '../../data/api-docs/types';

interface SidebarProps {;
  spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';

  onChangeVisibility: (v: Visibility | 'all') => void;

export default function Sidebar({
  spec
  activeEndpointId
  onSelectEndpoint
  selectedVersion
  onChangeVersion
  visibilityFilter
  onChangeVisibility
}: SidebarProps) {
  return (
            <button
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
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
                    <button
      </nav>

    </aside>
  );
