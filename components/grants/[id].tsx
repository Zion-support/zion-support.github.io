import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import { useEffect, useState  } from 'react';
import { useRouter  } from 'next/router';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';

export default function GrantDetailPage() {;

  const { id } = router && router.query as { id: string },;

  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ content: updateContent })
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev
      );
      setUpdateContent('');
    }
  }
  if (loading)
  const addUpdate = async () => {;
    if (!id || !updateContent && updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r && r.json()).then((d) => setItem(d && d.record)).finally(() => setLoading(false));
  }, [id]);
  const addUpdate = async () => {;
    if (!id || !updateContent && updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ content: updateContent }),;
    });
      const u = await resp && resp.json();
      setItem(prev =>;
        prev ? { ...prev, updates: [...(prev && prev.updates || []), u && u.update] } : prev;
      );
      setUpdateContent('');
    }
  };
  if (loading);
    return (
      <EnhancedLayout>;
        <div>Loading...</div>;
      </EnhancedLayout>;
    );
  if (!item);
    return (
      <EnhancedLayout>;
        <div>Not found</div>;
      </EnhancedLayout>;
    );
  return (
import {useEffect, useState} from 'react';
import {use_router} from 'next / router';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication } from '../../types / grants';
export default /**
 * GrantDetailPage - Function description
 */
function GrantDetailPage() {
  const router = use_router ();
  const { id } = router.query as { id: string }  const [item, set_item] = useState < GrantApplication | null>(null);export default /**
 * GrantDetailPage - Function description
 */
function GrantDetailPage() {
  const router = use_router ();
  const { id } = router.query as { id: string },
  const [item, set_item] = useState < GrantApplication | null>(null);
  const [loading, set_loading] = useState (true);
  const [update_content, setUpdateContent] = useState ('');
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    fetch (`/api / grants/${id}`);
      .then (r => r.json ());
      .then (d => set_item (d.record));
      .finally (() => set_loading (false));  }, [id]);
;
  const add_update = async () => {
    if () return) {
  $2
}    fetch (`/api / grants/${id}`).then ((r) => r.json ()).then ((d) => set_item (d.record)).finally (() => set_loading (false));
  }, [id]);
;
  const add_update = async () => {
    if () return) {
  $2
}
    const resp = await fetch (`/api / grants/${id}/updates`, {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ content: update_content }),
    });
      const u = await resp.json ();
      set_item (prev =>;
        prev ? { ...prev, updates: [...(prev.updates || []), u.update] } : prev);
      setUpdateContent ('');
    }
  }
;
  // Check condition
if (
    return () {
  $2
}
      <EnhancedLayout>;
        <div > Loading...</div>;
      </EnhancedLayout>);
  // Check condition
if (
    return () {
  $2
}
      <EnhancedLayout>;
        <div > Not found</div>;
      </EnhancedLayout>);
;
  return (
    <EnhancedLayout>;
      <div className='flex items - center justify - between mb - 4'>;
        <div>;
          <h1 className='text - 2xl font - semibold'>{item.project_name}</h1>;
          <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {item.sector || 'General'} • {item.region || 'Global'} •{' '}=======
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>;
        </div>;
        <div className='flex gap - 2 items - center'>;
          {item.program === 'incubator' && (
    <EnhancedLayout>;
      <div className='flex items-center justify-between mb-4'>;
        <div>;
          <h1 className='text-2xl font-semibold'>{item && item.projectName}</h1>;
          <div className='text-sm text-gray-600 dark:text-gray-400'>;
            {item && item.sector || 'General'} • {item && item.region || 'Global'} •{' '}
            {item && item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>;
        </div>;
        <div className='flex gap-2 items-center'>;
          {item && item.program === 'incubator' && (;
            <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
              Incubated by Zion;
            </span>;
          )}
          {item && item.status === 'Approved' && (;
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
              Grant Winner;
            </span>;
          )}

          <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>;
            {item && item.status}
          </span>;
        </div>;
      </div>;
      <div className='grid md:grid-cols-3 gap-6'>;
        <div className='md:col-span-2 space-y-4'>;
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <h2 className='font-medium mb-2'>Proposal</h2>;
            <p className='text-sm whitespace-pre-wrap'>;
              {item && item.proposalSummary}
            </p>;
            <div className='mt-2 text-sm text-gray-600'>;
              Timeline: {item && item.timeline}
            </div>;
            <div className='mt-1 text-sm text-gray-600'>;
              Budget: {item && item.budgetAmount} {item && item.budgetCurrency}
            </div>;
            {item && item.supportingLinks && item && item.supportingLinks.length > 0 && (;
              <div className='mt-2'>;
                <div className='text-sm font-medium'>Supporting Links</div>;
                <ul className='list-disc list-inside text-sm'>;
                  {item && item.supportingLinks.map((l, i) => (;
                    <li key={i}>;
export default function GrantDetailPage() {;
  const router = useRouter();
  const { id } = router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);export default function GrantDetailPage() {;
  const router = useRouter();
  const { id } = router.query as { id: string }
  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
    if (!id || !updateContent.trim()) return;

    if (!id || !updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
    if (!id || !updateContent.trim()) return;

  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ content: updateContent })
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev
      );
      setUpdateContent('');
    }
  }
  if (loading)
    return (
      <EnhancedLayout>
        <div>Loading...</div>
      </EnhancedLayout>
    );
  if (!item)
    return (
      <EnhancedLayout>
        <div>Not found</div>
      </EnhancedLayout>
    );

  return (
    <EnhancedLayout>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h1 className='text-2xl font-semibold'>{item.projectName}</h1>
          <div className='text-sm text-gray-600 dark:text-gray-400'>
            {item.sector |'General'} • {item.region |'Global'} •{' '}
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          {item.program === 'incubator' && (
            <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
              Incubated by Zion
            </span>
          )}
          {item.status === 'Approved' && (
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>
              Grant Winner
            </span>
          )}
          <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>
            {item.status}
          </span>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-4'>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>
            <h2 className='font-medium mb-2'>Proposal</h2>
            <p className='text-sm whitespace-pre-wrap'>
              {item.proposalSummary}
            </p>
            <div className='mt-2 text-sm text-gray-600'>
              Timeline: {item.timeline}
            </div>
            <div className='mt-1 text-sm text-gray-600'>
              Budget: {item.budgetAmount} {item.budgetCurrency}
            </div>
            {item.supportingLinks && item.supportingLinks.length > 0 && (
              <div className='mt-2'>
                <div className='text-sm font-medium'>Supporting Links</div>
                <ul className='list-disc list-inside text-sm'>
                  {item.supportingLinks.map((l, i) => (
                    <li key={i}>

                      <a
                        className='text-blue-600'
                        href={l}
                        target='_blank'
            )}
                  <span
                    className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}
                  />;
                  <div>;
                    <div className='font-medium'>{m && m.title}</div>;
                    {m && m.description && (;
                      <div className='text-gray-600'>{m && m.description}</div>;
                    )}
                    {m && m.trancheAmount ? (;
                      <div className='text-xs text-gray-600'>;
                        Tranche: {m && m.trancheAmount} {m && m.trancheCurrency}
                      </div>;
                    ) : null}
                    {m && m.dueDate && (;
                      <div className='text-xs text-gray-600'>;
                        Due: {new Date(m && m.dueDate).toLocaleDateString()}
                      </div>;
                    )}
                  </div>;
                </li>;
              ))}
              </div>
            </div>
          </section>
        </div>
<aside className="space-y-4">
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Milestones</h3>
            <ul className="space-y-2">
              {(item.milestones || []).map((m) => (
                <li key={m.id} className="text-sm flex items-start gap-2">
                  <span className={`mt-1 inline-block h-3 w-3 rounded-full ${m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                  <div>
    </EnhancedLayout>
  );
}
    </EnhancedLayout>
  );
}
