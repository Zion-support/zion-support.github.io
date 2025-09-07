<<<<<<< HEAD

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]),

  const load = $2;
  useEffect(() => {
    load()
  }, []),

=======
<<<<<<< HEAD
<<<<<<< HEAD
export default function GrantsAdminPage() {
  const [token, setToken] = useState('');
  const [items, setItems] = useState<GrantApplication[]>([]),
  const [selected, setSelected] = useState<GrantApplication | null>(null),
  const [milestones, setMilestones] = useState<Milestone[]>([]),

  const [items, setItems] = useState<GrantApplication[]>([]),
  const [selected, setSelected] = useState<GrantApplication | null>(null),
  const [milestones, setMilestones] = useState<Milestone[]>([]),

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, Content-Type': 'application/json } : { Content-Type': 'application/json }), [token]),

  const load = $2;
  useEffect(() => {
    load()
  }, []),

  const setStatus = async (id: string, status: Under Review' | 'Approved | Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST, headers, body: JSON.stringify({ status }) }),
    load()
  },

  const saveMilestones = $2;
    await fetch(`/api/grants/${selected.id}/milestones`, { method: POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved)
  },

  const markComplete = $2;
    await fetch($2);
    const r = $2;
    setSelected(r.record)
  },

  return (
    <EnhancedLayout>
=======


export default function GrantsAdminPage() {;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';

<<<<<<< HEAD
export default function GrantsAdminPage() {;
import { useEffect, useMemo, useState  } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';

export default function GrantsAdminPage() {;

export default function GrantsAdminPage() {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [token, setToken] = useState('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
<<<<<<< HEAD
  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]);
=======

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, Content-Type': 'application/json } : { Content-Type': 'application/json }), [token]);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const load = () => {
<<<<<<< HEAD
    fetch(/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
=======


export default function GrantsAdminPage() {
  const [token, setToken] = useState('');

const headers = useMemo(
    () =>
      token}
        ? {}
            Authorization: `Bearer ${token}`
            'Content-Type': 'application/json'
=======
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {
    load()
  }, []);
>>>>>>> merged-prs-20250907-203621
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) }),
    load()
<<<<<<< HEAD
  },

  const saveMilestones = $2;
    await fetch(`/api/grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved')
  },

  const markComplete = $2;
    await fetch($2);
    const r = $2;
    setSelected(r.record)
  },

  return (
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const headers = useMemo(;
    () =>;
      token;
        ? {;
            Authorization: `Bearer ${token}`,;
            'Content-Type': 'application/json',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        : { 'Content-Type': 'application/json',}
}
    [token]
  );
<<<<<<< HEAD

const load = (
    fetch('/api/grants?status=Submitted')
      .then(r => r.json())
      .then(d => setItems(d.items |[]));) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
  }
  useEffect(() => {
}
    load();}
  }, []);
<<<<<<< HEAD
  const setStatus = async (id: string, status: 'Under Review | Approved' | 'Rejected) => {
    await fetch(`/api/grants/${id}/status`, { method: POST', headers, body: JSON.stringify({ status }) })
    load()
=======
  const load = () => {;
    fetch('/api/grants?status=Submitted');
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  const saveMilestones = async () => {
    if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved')
  };
  const markComplete = async (milestoneId: string) => {
    if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones/${milestoneId}/complete`, { method: 'POST', headers });
    const r = await fetch(`/api/grants/${selected.id}`).then((x) => x.json());
    setSelected(r.record)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  useEffect(() => {;
    load();
  }, []);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const setStatus = async (;
    id: string,;
    status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {;
    await fetch(`/api/grants/${id}/status`, {;

export default function GrantsAdminPage() {};
  const [token, setToken] = useState('');
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]);

  const load = () => {
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {}
=======

const setStatus = async (
    id: string;
status: 'Under Review' | 'Approved' | 'Rejected'
  ) => {}
    await fetch(`/api/grants/${i,}
}/status`, {
      method: 'POST'}
      headers;}
body: JSON.stringify({ status })
   ,
});
>>>>>>> origin/chore/fix-lint-and-merge
    load()
  }, []);'
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {'`
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) })
    load()
  const setStatus = async (;
    id: string,;'
    status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {;`
    await fetch(`/api/grants/${id}/status`, {;'
      method: 'POST',;
      headers,;
      body: JSON && JSON.stringify({ status }),;
    });
<<<<<<< HEAD
    load()
}


const saveMilestones = async () => {
    if (!selected);}
  return;}
await fetch(`/api/grants/${selected.id}/milestones`, {
      method: 'POST',
      headers,}
      body: JSON.stringify({ milestones,}
}),
    });
    alert('Milestones saved')
};
<<<<<<< HEAD
=======
    load();  };
  const saveMilestones = async () => {;
    if (!selected) return;
  const load = () => {;
    fetch('/api/grants?status=Submitted').then((r) => r && r.json()).then((d) => setItems(d && d.items || []));
  };
  useEffect(() => {;
    load();
  }, []);
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {;
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON && JSON.stringify({ status }) }),;
    load();
  };
  const saveMilestones = async () => {;
    if (!selected) return;
    await fetch(`/api/grants/${selected && selected.id}/milestones`, {;
      method: 'POST',;
      headers,;
      body: JSON && JSON.stringify({ milestones }),;
    });
    alert('Milestones saved');  };
  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;    await fetch(`/api/grants/${selected && selected.id}/milestones`, { method: 'POST', headers, body: JSON && JSON.stringify({ milestones }) }),;
    alert('Milestones saved');
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;
    await fetch(;
      `/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,;
      { method: 'POST', headers }
    );
    const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json());
<<<<<<< HEAD
    setSelected(r && r.record)
};
=======
    setSelected(r && r.record);  };
  return (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types / grants';
export default /**
 * GrantsAdminPage - Function description
 */
function GrantsAdminPage() {
  const [token, set_token] = useState ('');
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [selected, set_selected] = useState < GrantApplication | null>(null);
  const [milestones, set_milestones] = useState < Milestone[]>([]);
;
  const headers = useMemo (
    () =>;
      token;
        ? {
            Authorization: `Bearer ${token}`,
            'Content - Type': 'application / json',
          }
        : { 'Content - Type': 'application / json' },
    [token]);
;
  const load = () =>: any {
    fetch ('/api / grants?status = Submitted');
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
  }
;
  useEffect (() => {
    load ();
  }, []);
;
  const set_status = async (
    id: string,
    status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch (`/api / grants/${id}/status`, {
      method: 'POST',
      headers,
      body: JSON.stringify ({ status }),
    });
    load ();  }
;
  const save_milestones = async () => {
    // Check condition
if (return) {
  $2
}
  const markComplete = async (milestoneId: string) => {
    if (!selected) return;    await fetch(`/api/grants/${selected && selected.id}/milestones`, { method: 'POST, headers, body: JSON && JSON.stringify({ milestones }) }),
    alert(Milestones saved')
}
    await fetch (`/api / grants/${selected.id}/milestones`, {
      method: 'POST',
      headers,
      body: JSON.stringify ({ milestones }),
    });
    alert ('Milestones saved');  }
;
  const mark_complete = async (milestone_id: string) => {
    // Check condition
if (return) {
  $2
}    await fetch (`/api / grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify ({ milestones }) }),
    alert ('Milestones saved');
  }
;
  const mark_complete = async (milestone_id: string) => {
    // Check condition
if (return) {
  $2
}
    await fetch (
      `/api / grants/${selected.id}/milestones/${milestone_id}/complete`,
      { method: 'POST', headers }
    );
    const r = await fetch (`/api / grants/${selected.id}`).then (coordinate_x => x.json ());
    set_selected (r.record);  }
;
  return (
    <EnhancedLayout>    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers });
    const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record);
  }
;
  return (
    <EnhancedLayout>;
export default function GrantsAdminPage() {const [token, setToken]  = useState('')const [items, setItems] = useState<GrantApplication[]>([])const [selected, setSelected] = useState<GrantApplication | null>(null)const [milestones, setMilestones]  = useState<Milestone[]>([])const headers  = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token])const load = () => {fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))}
  useEffect(() => {load()}, [])const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) })load()const setStatus = async (id: string,status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {await fetch(`/api/grants/${id}/status`, {method: 'POST',headers,body: JSON && JSON.stringify({ status }),})load()}const saveMilestones = async () => {if (!selected) return;
  const load = () => {fetch('/api/grants?status=Submitted').then((r) => r && r.json()).then((d) => setItems(d && d.items || []))}const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON && JSON.stringify({ status }) }),load()}const saveMilestones = async () => {if (!selected) return;
    await fetch(`/api/grants/${selected && selected.id}/milestones`, {method: 'POST',headers,body: JSON && JSON.stringify({ milestones }),})alert('Milestones saved')}const markComplete = async (milestoneId: string) => {if (!selected) return;    await fetch(`/api/grants/${selected && selected.id}/milestones`, { method: 'POST', headers, body: JSON && JSON.stringify({ milestones }) }),alert('Milestones saved')}const markComplete = async (milestoneId: string) => {if (!selected) return;
    await fetch(`/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,{ method: 'POST', headers }
    )const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json())setSelected(r && r.record)}import { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types / grants';
export default /**;
 * GrantsAdminPage - Function description;
 */;
function GrantsAdminPage() {const [token, set_token] = useState ('')const [items, set_items] = useState < GrantApplication[]>([])const [selected, set_selected] = useState < GrantApplication | null>(null)const [milestones, set_milestones]  = useState < Milestone[]>([])const headers = useMemo (() =>;
      token;
        ? {Authorization: `Bearer ${token}`,'Content - Type': 'application / json',}
        : { 'Content - Type': 'application / json' },[token])const load = () =>: any {fetch ('/api / grants?status = Submitted').then (r => r.json ()).then (d => set_items (d.items || []))}useEffect (() => {load ()}, [])const set_status = async (id: string,status: 'Under Review' | 'Approved' | 'Rejected') => {await fetch (`/api / grants/${id}/status`, {method: 'POST',headers,body: JSON.stringify ({ status }),})load ()}const save_milestones = async () => {// Check condition;
if (return) {$2;
}
  const load = () =>: any {fetch ('/api / grants?status = Submitted').then ((r) => r.json ()).then ((d) => set_items (d.items || []))}useEffect (() => {load ()}, [])const set_status = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {await fetch (`/api / grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify ({ status }) }),load ()}const save_milestones = async () => {// Check condition;
if (return) {$2;
}
    await fetch (`/api / grants/${selected.id}/milestones`, {method: 'POST',headers,body: JSON.stringify ({ milestones }),})alert ('Milestones saved')}const mark_complete = async (milestone_id: string) => {// Check condition;
if (return) {$2;
}    await fetch (`/api / grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify ({ milestones }) }),alert ('Milestones saved')}const mark_complete = async (milestone_id: string) => {// Check condition;
if (return) {$2;
}
    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`,{ method: 'POST', headers }
    )const r = await fetch (`/api / grants/${selected.id}`).then (coordinate_x => x.json ())set_selected (r.record)}const headers = useMemo(() =>;
      token;
        ? {Authorization: `Bearer ${token}`;
            'Content-Type': 'application/json';
          }
        : { 'Content-Type': 'application/json' }
    [token];
  )const load = () => {fetch('/api/grants?status=Submitted').then(r => r.json()).then(d => setItems(d.items |[]))}
  useEffect(() => {load()}, [])const setStatus = async (id: string;
    status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {await fetch(`/api/grants/${id}/status`, {method: 'POST';
      headers;
      body: JSON.stringify({ status })})load()}const saveMilestones = async () => {if (!selected) return;
await fetch(`/api/grants/${selected.id}/milestones`, {method: 'POST',headers,body: JSON.stringify({ milestones }),})alert('Milestones saved')}const markComplete = async (milestoneId: string) => {if (!selected) return;
await fetch(`/api/grants/${selected.id}/milestones/${milestoneId}/complete`,{ method: 'POST', headers }
    )const r = await fetch(`/api/grants/${selected.id}`).then(x => x.json())setSelected(r.record)}return (<EnhancedLayout>;
<h1 className='text-2xl font-semibold mb-4'>Grants Admin</h1>;
  return (<EnhancedLayout>    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers })const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ())set_selected (r.record)}return (<EnhancedLayout>;
      <h1 className='text - 2xl font - semibold mb - 4'>Grants Admin</h1>;
      <div className='grid md:grid - cols - 3 gap - 6'>;
        <div className='md:col - span - 2'>;
          <div className='mb - 3 flex items - center gap - 2'>;
  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;
    await fetch(;`
      `/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,'
      { method: POST, headers }
    );`
    const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json());
    setSelected(r && r.record)
};
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types / grants';
export default /**;
 * GrantsAdminPage - Function description;
 */
function GrantsAdminPage() { return null; }
        ? {}`
            Authorization: `Bearer ${token}`,
            Content - Type': 'application / json}
        : { 'Content - Type': application / json },
    [token]);
  const load = () =>: any {'
    fetch ('/api / grants?status = Submitted);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
  }
  useEffect (() => {}
    load ();
  }, []);
  const set_status = async (
    id: string,
    status: 'Under Review' | Approved | 'Rejected') => {}`
    await fetch (`/api / grants/${id}/status`, {
      method: POST',
      headers,
      body: JSON.stringify ({ status })});
    load ();  }
  const save_milestones = async () => {}
    // Check condition;
if (return) {}
  $2;
}
    fetch (/api / grants?status = Submitted).then ((r) => r.json ()).then ((d) => set_items (d.items || []));
  }
  useEffect (() => {}
    load ();
  }, []);'
  const set_status = async (id: string, status: 'Under Review | Approved' | 'Rejected) => {`
    await fetch (`/api / grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify ({ status }) }),
    load ();
  }
    // Check condition;
if (return) {}
  $2;
}`
    await fetch (`/api / grants/${selected.id}/milestones`, {
      method: POST',
      headers,
      body: JSON.stringify ({ milestones })});'
    alert (Milestones saved);  }
  const mark_complete = async (milestone_id: string) => {}
    // Check condition;
if (return) {}
  $2'`
}    await fetch (`/api / grants/${selected.id}/milestones`, { method: 'POST, headers, body: JSON.stringify ({ milestones }) }),
    alert ('Milestones saved');
  }
    // Check condition;
if (return) {}
  $2;
}
    await fetch (`
      `/api / grants/${selected.id}/milestones/${milestone_id}/complete`,
      { method: POST', headers }
    );`
    const r = await fetch (`/api / grants/${selected.id}`).then (coordinate_x => x.json ());
    set_selected (r.record);  }
;
=======
>>>>>>> origin/chore/fix-lint-and-merge


const markComplete = async (milestoneId: string) => {
    if (!selected);
  return;}
await fetch(}
      `/api/grants/${selected.id}/milestones/${milestoneId}/complete`,
      { method: 'POST', headers }
    );

const r = await fetch(`/api/grants/${selected.id}`).then(x => x.json());
    setSelected(r.record)
};


  return (
    <EnhancedLayout    />
<h1 className = 'text-2xl font-semibold mb-4'    />Grants Admin</h1>
 ;
  return (
<<<<<<< HEAD
    <EnhancedLayout>    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers });
    const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record);
  }
;
  return (
    <EnhancedLayout>;'
      <h1 className='text - 2xl font - semibold mb - 4'>Grants Admin</h1>;'
      <div className='grid md:grid - cols - 3 gap - 6'>;'
        <div className='md:col - span - 2'>;'
          <div className='mb - 3 flex items - center gap - 2'>;
            <input;'
              className='border rounded p - 2';'
    <EnhancedLayout />    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers });
=======
    <EnhancedLayout    />    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers });
>>>>>>> origin/chore/fix-lint-and-merge

const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record)
};

  return (
    <EnhancedLayout    />;

<<<<<<< HEAD
      <h1 className='text - 2xl font - semibold mb - 4' />Grants Admin</h1>;
      <div className='grid md:grid - cols - 3 gap - 6' />;
        <div className='md:col - span - 2' />;
          <div className='mb - 3 flex items - center gap - 2' />;
=======
      <h1 className='text - 2xl font - semibold mb - 4'    />Grants Admin</h1>;
      <div className='grid md:grid - cols - 3 gap - 6'    />;
        <div className='md:col - span - 2'    />;
          <div className='mb - 3 flex items - center gap - 2'    />;
>>>>>>> origin/chore/fix-lint-and-merge
            <input;
              className='border rounded p - 2';
              placeholder='Admin Token';
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold mb-4'>Grants Admin</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2'>
          <div className='mb-3 flex items-center gap-2'>
            <input
              className='border rounded p-2'
              placeholder='Admin Token'
              value={token}
<<<<<<< HEAD
              on_change={e => set_token (e.target.value)}
            />;
          </div>;'
          <div className='grid gap - 3'>;
            {items.map (g => (
              <div;
                key={g.id}'`
                className={`border rounded p - 3 ${selected?.id === g.id ? 'ring - 2 ring - blue - 500' : ''}`}
              >;'
                <div className='flex items - center justify - between'>;
                  <div>;'
                    <div className='font - medium'>{g.project_name}</div>;'
                    <div className='text - xs text - gray - 600'>;
                className={`border rounded p - 3 ${selected?.id === g.id ? 'ring - 2 ring - blue - 500' : ''}`}
              >;
                <div className='flex items - center justify - between'>;
                  <div>;
                    <div className='font - medium'>{g.project_name}</div>;'
                    <div className='text - xs text - gray - 600'>;'
              placeholder='Admin Token;
              value={token}
              on_change={e => set_token (e.target.value)}
            />;

                      {g.sector} • {g.region} • {g.program}
                    </div>;
                  </div>;
                  <div className='flex gap - 2'>;
                      {g.sector} • {g.region} • {g.program}
                    </div>;
                  </div>;'
                  <div className='flex gap - 2'>;
                    <button;'
                      className='px - 2 py - 1 border rounded';'
                      on_click={() => set_status (g.id, 'Under Review')}
                    >;
                      Under Review;
                    </button>;
                    <button;

                    >;
                      Approve;
                    </button>;
                    <button;

                    >;
                      Reject;
                    </button>;
                    <button;

                      className=px - 2 py - 1 border rounded;
                      on_click={() => set_selected (g)}
                    <button;
                      className='px - 2 py - 1 border rounded';
                      on_click={() => set_status (g.id, 'Under Review')}
=======
              on_change={e =    /> set_token (e.target.value)}
            />;
          </div>;
          <div className='grid gap - 3'    />;
            {items.map (g => (<div;}
                key={g.id}
                className={`border rounded p - 3 ${selected?.id === g.id ? 'ring - 2 ring - blue - 500' : ''}`}    />

                <div className='flex items - center justify - between'    />;
                  <div    />;
                    <div className='font - medium'    />{g.project_name}</div>;
                    <div className='text - xs text - gray - 600'    />;

                      {g.sector} • {g.region} • {g.program}

                    </div>
                  </div>
                  <div className='flex gap-2'    />
                    <button;
className='px-2 py-1 border rounded'

                      onClick={() =    /> setStatus(g.id, 'Under Review')}
>>>>>>> origin/chore/fix-lint-and-merge
                    >;
                      Under Review;
                    </button>;
                    <button;
<<<<<<< HEAD
                      className=px-2 py-1 bg-emerald-600 text-white rounded;
                      onClick={() => setStatus(g.id, 'Approved')}
=======
                      className='px-2 py-1 bg-emerald-600 text-white rounded';
                      onClick={() =    /> setStatus(g.id, 'Approved')}
>>>>>>> origin/chore/fix-lint-and-merge
                    >;
                      Approve;
                    </button>;
                    <button;
<<<<<<< HEAD
                      className=px-2 py-1 bg-red-600 text-white rounded;
                      onClick={() => setStatus(g.id, 'Rejected')}
=======
                      className='px-2 py-1 bg-red-600 text-white rounded';
                      onClick={() =    /> setStatus(g.id, 'Rejected')}
>>>>>>> origin/chore/fix-lint-and-merge
                    >;
                      Reject;
                    </button>;
                    <button;
<<<<<<< HEAD
                      className='px - 2 py - 1 border rounded';
                      on_click={() => set_selected (g)}
<<<<<<< HEAD
=======
                      className='px-2 py-1 border rounded';
                      onClick={() =    /> setSelected(g)}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    >;
                      Milestones;
                    </button>                  </div>;
                </div>;
<<<<<<< HEAD
              </div>))}                  <div className="flex gap-2">;
                    <button className="px-2 py-1 border rounded" on_click={() => set_status (g.id, 'Under Review')}>Under Review</button>;
                    <button className="px - 2 py - 1 bg - emerald-600 text-white rounded" on_click={() => set_status (g.id, 'Approved')}>Approve</button>;
                    <button className="px - 2 py - 1 bg - red-600 text-white rounded" on_click={() => set_status (g.id, 'Rejected')}>Reject</button>;
                    <button className="px-2 py-1 border rounded" on_click={() => set_selected (g)}>Milestones</button>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </div>;
        <div>;
          <div className='border rounded p-3'>;
            <h2 className='font-medium mb-2'>Milestone Planner</h2>;
            {selected ? (;
              <div className='space-y-2'>;
                {(milestones && milestones.length === 0;
                  ? selected && selected.milestones || [];
                  : milestones;
                ).map((m, idx) => (;
                  <div key={m && m.id || idx} className='border rounded p-2'>;
                    <input
                      className='w-full border rounded p-2 mb-2'
                      placeholder='Title'
                      value={m && m.title}
                      onChange={e =>;
                        setMilestones(ms => {;
                          const copy = ms && ms.length;
                            ? [...ms];
                            : [...(selected && selected.milestones || [])];
                          copy[idx] = { ...copy[idx], title: e && e.target.value };
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>))}                  <div className="flex gap - 2">;
                    <button className="px - 2 py - 1 border rounded" on_click={() => set_status (g.id, 'Under Review')}>Under Review</button>;
                    <button className="px - 2 py - 1 bg - emerald - 600 text - white rounded" on_click={() => set_status (g.id, 'Approved')}>Approve</button>;
                    <button className="px - 2 py - 1 bg - red - 600 text - white rounded" on_click={() => set_status (g.id, 'Rejected')}>Reject</button>;
                    <button className="px - 2 py - 1 border rounded" on_click={() => set_selected (g)}>Milestones</button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </div>;
              </div>))}
            {items.length === 0 && (<div className='text - sm text - gray - 600'>;
                No submitted applications.;
              </div>)}
          </div>;
        </div>;
        <div>;
          <div className='border rounded p - 3'>;
            <h2 className='font - medium mb - 2'>Milestone Planner</h2>;</div>;
                  </div>;
                  <div className='flex gap-2'>;
                    <button;
                      className='px-2 py-1 border rounded';
                      onClick={() => setStatus(g.id, 'Under Review')}
                    >;
                      Under Review;
                    </button>;
                    <button;
                      className='px-2 py-1 bg-emerald-600 text-white rounded';
                      onClick={() => setStatus(g.id, 'Approved')}
                    >;
                      Approve;
                    </button>;
                    <button;
                      className='px-2 py-1 bg-red-600 text-white rounded';
                      onClick={() => setStatus(g.id, 'Rejected')}
                    >;
                      Reject;
                    </button>;
                    <button;
                      className='px-2 py-1 border rounded';
                      onClick={() => setSelected(g)}
                    >;
                      Milestones;
                    </button>;
                  </div>;
                </div>;
<<<<<<< HEAD
              </div>))}                  <div className="flex gap-2">;
                    <button className="px-2 py-1 border rounded" on_click={() => set_status (g.id, 'Under Review')}>Under Review</button>;
                    <button className="px - 2 py - 1 bg - emerald-600 text-white rounded" on_click={() => set_status (g.id, 'Approved')}>Approve</button>;
                    <button className="px - 2 py - 1 bg - red-600 text-white rounded" on_click={() => set_status (g.id, 'Rejected')}>Reject</button>;
                    <button className="px-2 py-1 border rounded" on_click={() => set_selected (g)}>Milestones</button>;
                </div>;
              </div>))}
            {items.length === 0 && ('
              <div className='text - sm text - gray - 600>;
                No submitted applications.;
              </div>)}
          </div>;
        </div>;
        <div>;'
          <div className='border rounded p - 3'>;'
            <h2 className='font - medium mb - 2'>Milestone Planner</h2>;
                    </div>
                  </div>
                  <div className='flex gap-2>
                    <button
                      className=px-2 py-1 border rounded'
                      onClick={() => setStatus(g.id, 'Under Review)}
                    >
                      Under Review
                    </button>
                    <button
                      className=px-2 py-1 bg-emerald-600 text-white rounded'
                      onClick={() => setStatus(g.id, 'Approved)}
                    >
                      Approve
                    </button>
                    <button
                      className=px-2 py-1 bg-red-600 text-white rounded'
                      onClick={() => setStatus(g.id, 'Rejected)}
                    >
                      Reject
                    </button>
                    <button
                      className=px-2 py-1 border rounded'
                      onClick={() => setSelected(g)}
                    >
                      Milestones
                    </button>
                  </div>
                </div>
              </div>
              </div>;
            ))}

                No submitted applications.;
              </div>;
            )}
            <h2 className='font - medium mb - 2'>Milestone Planner</h2>;
            {selected ? (
              <div className='space - y-2'>;
          </div>;
        </div>;
        <div>;
          <div className='border rounded p-3'>;
            <h2 className='font-medium mb-2'>Milestone Planner</h2>;
            {selected ? (<div className='space - y-2'>;
                {(milestones.length === 0;
                  ? selected.milestones || [];
                  : milestones).map ((m, idx) => (<div key={m.id || idx} className='border rounded p - 2'>;
              <div className='space - y-2'>;
                {(milestones.length === 0;
                  ? selected.milestones || [];
                  : milestones).map ((m, idx) => ('
                  <div key={m.id || idx} className='border rounded p - 2'>;
                    <input;'
                      className='w - full border rounded p - 2 mb - 2';'
                      placeholder='Title';
                      value={m.title}
                      on_change={e =>;
                        set_milestones (ms => {}
                          const copy = ms.length;
              <div className='space - y-2' />;

                {(milestones.length === 0;}
                  ? selected.milestones || [];}
                  : milestones).map ((m, idx) => (<div key={m.id || idx} className='border rounded p - 2' />;
                    <input;
                      className=w - full border rounded p - 2 mb - 2;
                      placeholder='Title';
                      value={m.title}
                      on_change={e =>;
                        set_milestones (ms => {const copy = ms.length;
=======
              </div>;
            ))}
{items.length === 0 && (<div className='text-sm text-gray-600'    />;
                No submitted applications.;}
              </div>;}
            )}

          </div>
        </div>
        <div    />
          <div className='border rounded p-3'    />
            <h2 className='font-medium mb-2'    />Milestone Planner</h2>
            {selected ? (
              <div className='space - y-2'    />;

                {(milestones.length === 0;}
                  ? selected.milestones || [];}
                  : milestones).map ((m, idx) => (<div key={m.id || idx} className='border rounded p - 2'    />;
                    <input;
                      className='w - full border rounded p - 2 mb - 2';
                      placeholder='Title';
                      value={m.title}
                      on_change={e =    />;
                        set_milestones (ms = > ;
  const copy = ms.length;
>>>>>>> origin/chore/fix-lint-and-merge
                            ? [...ms];
<<<<<<< HEAD
                            : [...(selected.milestones || [])];}
                          copy[idx] = { ...copy[idx], title: e.target.value,}
}
=======
                            : [...(selected.milestones || [])];
                          copy[idx] = { ...copy[idx], title: e.target.value }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          return copy;
                        })}
                    />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      value={m && m.description || ''}
                      onChange={e =>;
                        setMilestones(ms => {;
                          const copy = ms && ms.length;
                            ? [...ms];
                            : [...(selected && selected.milestones || [])];
                          copy[idx] = {;
                            ...copy[idx],;
                            description: e && e.target.value,;
                          };
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <textarea;
<<<<<<< HEAD
                      className='w - full border rounded p - 2 mb - 2';'
                      placeholder='Description';'
                      value={m.description || ''}
                      on_change={e =>;
                        set_milestones (ms => {const copy = ms.length;
                            ? [...ms];
                            : [...(selected.milestones || [])];
                      on_change={e =>;
                        set_milestones (ms => {}
                          const copy = ms.length;
                            ? [...ms];
                            : [...(selected.milestones || [])];
                          copy[idx] = {}
                            ...copy[idx],
                            description: e.target.value,
                          }
                          return copy;
                        });
                      }
<<<<<<< HEAD
                    />;'
=======
                    />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        value={m && m.dueDate || ''}
                        onChange={e =>;
                          setMilestones(ms => {;
                            const copy = ms && ms.length;
                              ? [...ms];
                              : [...(selected && selected.milestones || [])];
                            copy[idx] = {;
                              ...copy[idx],;
                              dueDate: e && e.target.value,;
                            };
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <div className='grid grid - cols - 2 gap - 2'>;
                      <input;'
                        className='border rounded p - 2';'
                        placeholder='Due date (YYYY - MM - DD)';'
                        value={m.due_date || ''}
                        on_change={e =>;
                          set_milestones (ms => {}
                            const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                            copy[idx] = {}
                              ...copy[idx],
                              due_date: e.target.value,
                            }
=======
                      className='w - full border rounded p - 2 mb - 2';
                      placeholder='Description';
                      value={m.description || ''}
                      on_change={e =    />;
                        set_milestones (ms = > ;
  const copy = ms.length;
                            ? [...ms];}
                            : [...(selected.milestones || [])];}
>>>>>>> origin/chore/fix-lint-and-merge
                          copy[idx] = {...copy[idx],description: e.target.value,}
                          return copy;
                        })}
                    />;
                    <div className='grid grid - cols - 2 gap - 2'    />;
                      <input;
                        className='border rounded p - 2';
                        placeholder='Due date (YYYY - MM - DD)';
                        value={m.due_date || ''}
                        on_change={e =    />;
                          set_milestones (ms = > ;
  const copy = ms.length;
<<<<<<< HEAD
                              ? [...ms];
                              : [...(selected.milestones || [])];
<<<<<<< HEAD
=======
                              ? [...ms];}
                              : [...(selected.milestones || [])];}
>>>>>>> origin/chore/fix-lint-and-merge
                            copy[idx] = {...copy[idx],due_date: e.target.value,}
                            return copy;
                          })}
                      />;
=======
                            copy[idx] = {
                              ...copy[idx],
                              due_date: e.target.value,
                            }
                            return copy;
                          });
                        }
                      />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        value={m && m.trancheAmount || 0}
                        onChange={e =>;
                          setMilestones(ms => {;
                            const copy = ms && ms.length;
                              ? [...ms];
                              : [...(selected && selected.milestones || [])];
                            copy[idx] = {;
                              ...copy[idx],;
                              trancheAmount: Number(e && e.target.value),;
                            };
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <input;
                        className='border rounded p - 2';
                        placeholder='Tranche (amount)';
                        type='number';
                        value={m.tranche_amount || 0}
<<<<<<< HEAD
                        on_change={e =>;
                          set_milestones (ms => {const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                        on_change={e =>;
                          set_milestones (ms => {}
                            const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                            copy[idx] = {}
                              ...copy[idx],
                              tranche_amount: Number (e.target.value),
                            }
<<<<<<< HEAD
=======
                        on_change={e =    />;
                          set_milestones (ms = > ;
  const copy = ms.length;
                              ? [...ms];}
                              : [...(selected.milestones || [])];}
>>>>>>> origin/chore/fix-lint-and-merge
                            copy[idx] = {...copy[idx],tranche_amount: Number (e.target.value),}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            return copy;
                          })}
                      />;
<<<<<<< HEAD
                    </div>>

=======
                    </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className='mt - 2 flex items - center gap - 2'>;
                      <button;
                        className='px - 2 py - 1 border rounded';
                        on_click={() => mark_complete (m.id!)}
                        disabled={!m.id}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        Mark Complete;
                      </button>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>))}'
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onClick={() =>;
                      setMilestones(ms => [;
                        ...(ms && ms.length ? ms : selected && selected.milestones || []),;
                        {;
                          id: `${Date && Date.now()}-${Math && Math.random()}`,;
                          title: '',;
                          trancheAmount: 0,;
                          trancheCurrency: 'USDC',;
                        } as any,;
                      ]);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className='flex gap - 2 mt - 2'>;
                  <button;'
                    className='px - 2 py - 1 border rounded';
                    on_click={() =>;
                      set_milestones (ms => [;
                  >;
                        ...(ms.length ? ms : selected.milestones || []),
                        {}`
                          id: `${Date.now ()}-${Math.random ()}`,'
                          title: '',
                          tranche_amount: 0,'
=======
                  </div>))}
                <div className='flex gap - 2 mt - 2'    />;
                  <button;
                    className='px - 2 py - 1 border rounded';
                    on_click={() =    />;
                      set_milestones (ms => [;

                        ...(ms.length ? ms : selected.milestones || []),}
                        {}
                          id: `${Date.now ()}-${Math.random (,}
}`,
                          title: '',
  tranche_amount: 0,
>>>>>>> origin/chore/fix-lint-and-merge
                          tranche_currency: 'USDC',
                        } as any,
                      ]);
                    }
<<<<<<< HEAD
                  >;
                    Add Milestone;
                  </button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Grants Admin</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2">
<input className="border rounded p-2" placeholder="Admin Token" value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
          <div className="grid gap-3">
            {items.map((g) => (
              <div key={g.id} className={`border rounded p-3 ${selected?.id === g.id ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{g.projectName}</div>
                    <div className="text-xs text-gray-600">{g.sector} • {g.region} • {g.program}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => setStatus(g.id, 'Under Review')}>Under Review</button>
                    <button className="px-2 py-1 bg-emerald-600 text-white rounded" onClick={() => setStatus(g.id, 'Approved')}>Approve</button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => setStatus(g.id, 'Rejected')}>Reject</button>
                    <button className="px-2 py-1 border rounded" onClick={() => setSelected(g)}>Milestones</button>

                  </div>
                </div>
              </div>
            ))}
<<<<<<< HEAD
            {items.length === 0 && <div className="text-sm text-gray-600">No submitted applications.</div>}
          </div>
        </div>
        <div>
          <div className="border rounded p-3">
            <h2 className="font-medium mb-2">Milestone Planner</h2>
            {selected ? (
              <div className="space-y-2">
                {(milestones.length === 0 ? (selected.milestones || []) : milestones).map((m, idx) => (
                  <div key={m.id || idx} className="border rounded p-2">
                    <input className="w-full border rounded p-2 mb-2" placeholder="Title" value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />
                    <textarea className="w-full border rounded p-2 mb-2" placeholder="Description" value={m.description || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />
                    <div className="grid grid-cols-2 gap-2">
                      <input className="border rounded p-2" placeholder="Due date (YYYY-MM-DD)" value={m.dueDate || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />
                      <input className="border rounded p-2" placeholder="Tranche (amount)" type="number" value={m.trancheAmount || 0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
=======
{items.length === 0 && <div className="text-sm text-gray-600">No submitted applications.</div>}
          </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>
        <div>
          <div className="border rounded p-3">
            <h2 className=font-medium mb-2">Milestone Planner</h2>
            {selected ? ("
              <div className=space-y-2>
                {(milestones.length === 0 ? (selected.milestones |[]) : milestones).map((m, idx) => ("
                  <div key={m.id |idx} className="border rounded p-2>
                    <input className="w-full border rounded p-2 mb-2" placeholder=Title value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />'"
                    <textarea className="w-full border rounded p-2 mb-2 placeholder=Description" value={m.description |'} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />"
                    <div className=grid grid-cols-2 gap-2>"
                      <input className="border rounded p-2 placeholder=Due date (YYYY-MM-DD)" value={m.dueDate |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />"
                      <input className=border rounded p-2 placeholder="Tranche (amount)" type=number value={m.trancheAmount |0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />
                    </div>"
                    <div className="mt-2 flex items-center gap-2>
>>>>>>> merged-prs-20250907-203621
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>
                    </div>
                  </div>
                ))}
<<<<<<< HEAD
                <div className="flex gap-2 mt-2">
                  <button className="px-2 py-1 border rounded" onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones || [])), { id: `${Date.now()}-${Math.random()}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' } as any])}>Add Milestone</button>
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600">Select a grant to plan milestones.</div>
=======
                <div className=flex gap-2 mt-2">"`
                  <button className=px-2 py-1 border rounded onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones |[])), { id: `${Date.now()}-${Math.random()}`, title: ', trancheAmount: 0, trancheCurrency: 'USDC } as any])}>Add Milestone</button>"
                  <button className="px-2 py-1 bg-blue-600 text-white rounded onClick={saveMilestones}>Save Milestones</button>
                </div>
=======

>>>>>>> origin/chore/fix-lint-and-merge
                  >
                    Add Milestone;
                  </button>
                  <button;
className='px-2 py-1 bg-blue-600 text-white rounded'
                    onClick={saveMilestones}
<<<<<<< HEAD
                  >
                    Add Milestone;
                  </button>;
      <h1 className=text-2xl font-semibold mb-4">Grants Admin</h1>
      <div className="grid md:grid-cols-3 gap-6>
        <div className=md:col-span-2">
          <div className="mb-3 flex items-center gap-2>
            <input className=border rounded p-2" placeholder="Admin Token value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
          <div className=grid gap-3">
            {items.map((g) => (
              <div key={g.id} className={`border rounded p-3 ${selected?.id === g.id ? ring-2 ring-blue-500' : '}`}>
                <div className="flex items-center justify-between>
                  <div>
                    <div className=font-medium">{g.projectName}</div>
                    <div className="text-xs text-gray-600>{g.sector} • {g.region} • {g.program}</div>
                  </div>
                  <div className=flex gap-2">
                    <button className="px-2 py-1 border rounded onClick={() => setStatus(g.id, Under Review')}>Under Review</button>
                    <button className=px-2 py-1 bg-emerald-600 text-white rounded" onClick={() => setStatus(g.id, 'Approved)}>Approve</button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded onClick={() => setStatus(g.id, Rejected')}>Reject</button>
                    <button className=px-2 py-1 border rounded" onClick={() => setSelected(g)}>Milestones</button>
                  </div>
                </div>
              </div>

              </div>
            ) : (
              <div className="text-sm text-gray-600">Select a grant to plan milestones.</div>
<<<<<<< HEAD
=======
                      />
                    Save Milestones;
                  </button>
                </div>
              </div>
            ) : (
              <div className='text-sm text-gray-600'    />
                Select a grant to plan milestones.
              </div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            )}
=======
            )}
<<<<<<< HEAD
=======
=======
    <EnhancedLayout>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            )}


<<<<<<< HEAD
            )}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
);
}
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
                        ...(ms.length ? ms : selected.milestones || []),{id: `${Date.now ()}-${Math.random ()}`,title: '',tranche_amount: 0,tranche_currency: 'USDC',} as any,])}>;
                    Add Milestone;
                  </button>;
        </div>;
        <div>;
          <div className="border rounded p-3">;
            <h2 className="font-medium mb-2">Milestone Planner</h2>;
            {selected ? (<div className="space-y-2">;
                {(milestones.length === 0 ? (selected.milestones |[]) : milestones).map((m, idx) => (<div key={m.id |idx} className="border rounded p-2">;
                    <input className="w-full border rounded p-2 mb-2" placeholder="Title" value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />;
                    <textarea className="w-full border rounded p-2 mb-2" placeholder="Description" value={m.description |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />;
                    <div className="grid grid-cols-2 gap-2">;
                      <input className="border rounded p-2" placeholder="Due date (YYYY-MM-DD)" value={m.dueDate |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />;
                      <input className="border rounded p-2" placeholder="Tranche (amount)" type="number" value={m.trancheAmount |0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />;
                    </div>;
                    <div className="mt-2 flex items-center gap-2">;
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>;
                    </div>;
                  </div>;
                ))}
                <div className="flex gap-2 mt-2">;
                  <button className="px-2 py-1 border rounded" onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones |[])), { id: `${Date.now()}-${Math.random()}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' } as any])}>Add Milestone</button>;
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>;
                </div>;
                  >;
                    Add Milestone;
                  </button>;
                  <button;
                    className='px-2 py-1 bg-blue-600 text-white rounded';
                    onClick={saveMilestones}
                  >;
                    Save Milestones;
                  </button>;
                </div>;
              </div>;
            ) : (<div className='text-sm text-gray-600'>;
                Select a grant to plan milestones.;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>;
=======
                    onClick={saveMilestones}>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    onClick={saveMilestones}>;
                    Save Milestones;
                  </button>;
                </div>;
              </div>;
            ) : (<div className='text-sm text-gray-600'>;
                Select a grant to plan milestones.;
              </div>            )}          </div>;
        </div>;
        <div>;
          <div className="border rounded p-3">;
            <h2 className="font-medium mb-2">Milestone Planner</h2>;
            {selected ? (<div className="space-y-2">;
                {(milestones && milestones.length === 0 ? (selected && selected.milestones || []) : milestones).map((m, idx) => (<div key={m && m.id || idx} className="border rounded p-2">;
                    <input className="w-full border rounded p-2 mb-2" placeholder="Title" value={m && m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e && e.target.value }, return copy })} />;
                    <textarea className="w-full border rounded p-2 mb-2" placeholder="Description" value={m && m.description || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e && e.target.value }, return copy })} />;
                    <div className="grid grid-cols-2 gap-2">;
                      <input className="border rounded p-2" placeholder="Due date (YYYY-MM-DD)" value={m && m.dueDate || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], dueDate: e && e.target.value }, return copy })} />;
                      <input className="border rounded p-2" placeholder="Tranche (amount)" type="number" value={m && m.trancheAmount || 0} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e && e.target.value) }, return copy })} />;
                    </div>;
                    <div className="mt-2 flex items-center gap-2">;
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m && m.id!)} disabled={!m && m.id}>Mark Complete</button>;
                    </div>;
                  </div>;
                ))}
                <div className="flex gap-2 mt-2">;
                  <button className="px-2 py-1 border rounded" onClick={() => setMilestones((ms) => [...(ms && ms.length ? ms : (selected && selected.milestones || [])), { id: `${Date && Date.now()}-${Math && Math.random()}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' } as any])}>Add Milestone</button>;
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>;
                </div>;
              </div>;
            ) : (<div className="text-sm text-gray-600">Select a grant to plan milestones.</div>;
            )}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>;
  ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
}

}
  );
}
                  <button;
                    className='px - 2 py - 1 bg - blue - 600 text - white rounded';
                    on_click={save_milestones}
                  >;
                    Save Milestones;
                  </button>;
                </div>;
              </div>) : (
              <div className='text - sm text - gray - 600'>;
                Select a grant to plan milestones.;
              </div>            )}          </div>;
        </div>;
        <div>;
          <div className="border rounded p - 3">;
            <h2 className="font - medium mb - 2">Milestone Planner</h2>;
            {selected ? (
              <div className="space - y-2">;
                {(milestones.length === 0 ? (selected.milestones || []) : milestones).map ((m, idx) => (
                  <div key={m.id || idx} className="border rounded p - 2">;
                    <input className="w - full border rounded p - 2 mb - 2" placeholder="Title" value={m.title} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />;
                    <textarea className="w - full border rounded p - 2 mb - 2" placeholder="Description" value={m.description || ''} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />;
                    <div className="grid grid - cols - 2 gap - 2">;
                      <input className="border rounded p - 2" placeholder="Due date (YYYY - MM - DD)" value={m.due_date || ''} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], due_date: e.target.value }, return copy })} />;
                      <input className="border rounded p - 2" placeholder="Tranche (amount)" type="number" value={m.tranche_amount || 0} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], tranche_amount: Number (e.target.value) }, return copy })} />;
                    </div>;
                    <div className="mt - 2 flex items - center gap - 2">;
                      <button className="px - 2 py - 1 border rounded" on_click={() => mark_complete (m.id!)} disabled={!m.id}>Mark Complete</button>;
                    </div>;
                  </div>))}
                <div className="flex gap - 2 mt - 2">;
                  <button className="px - 2 py - 1 border rounded" on_click={() => set_milestones ((ms) => [...(ms.length ? ms : (selected.milestones || [])), { id: `${Date.now ()}-${Math.random ()}`, title: '', tranche_amount: 0, tranche_currency: 'USDC' } as any])}>Add Milestone</button>;
                  <button className="px - 2 py - 1 bg - blue - 600 text - white rounded" on_click={save_milestones}>Save Milestones</button>;
                </div>;
              </div>) : (
              <div className="text - sm text - gray - 600">Select a grant to plan milestones.</div>)}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>);
}
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
