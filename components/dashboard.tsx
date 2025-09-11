<<<<<<< HEAD


import {useEffect, useMemo, useState} from 'react';



=======
import { useEffect, useMemo, useState } from 'react';
import {useEffect, useMemo, useState} from 'react';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Dashboard() {

  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
<<<<<<< HEAD
import {useEffect, useMemo, useState} from 'react';
import { useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
import {useEffect, useMemo, useState} from 'react';
import { useEffect, useMemo, useState } from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import {useEffect, useMemo, useState} from 'react';
=======
import { useEffect, useMemo, useState } from 'react';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Dashboard() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') || '';
export default function Dashboard() {;
  const params =;
    typeof window !== 'undefined';
      ? new URLSearchParams(window && window.location.search);
      : new URLSearchParams();
  const tenantId = params && params.get('tenantId') || '';
  const [branding, setBranding] = useState<{;
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window && window.location.search) : new URLSearchParams();
  const tenantId = params && params.get('tenantId') || '';
  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const data = await resp && resp.json();
        const t = (data && data.tenants || []).find((x: any) => x && x.id === tenantId);
        setBranding(t?.branding || { name: 'Zion Hire AI' });
      } catch {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {;
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();

<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useEffect, useMemo, useState} from 'react';

export default function Dashboard() {

  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search);
      : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{
    name: string;
    primaryColor?: string;
    logoUrl?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const [branding, setBranding] = useState<{ name: string, primaryColor?: string, logoUrl?: string } | null>(null);
  useEffect(() => {
    async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants');
        const data = await resp.json();
        const t = (data.tenants |[]).find((x: any) => x.id === tenantId);
        setBranding(t?.branding |{ name: 'Zion Hire AI' });
      } catch {
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {
        setBranding({ name: 'Zion Hire AI' })
      }
    }
    fetchBranding()
<<<<<<< HEAD
<<<<<<< HEAD
  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';
        <h1 className='text-lg font-semibold' style={{ color: accent }}>;
          {branding?.name || 'Zion Hire AI'}
        </h1>;
        <span className='ml-auto text-xs text-gray-400'>;
          Tenant: {tenantId ? tenantId && tenantId.slice(0, 8) : '—'}
        </span>;
      <main className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>;
        <section className='col-span-1 md:col-span-2 bg-white border rounded p-4'>;
          <h2 className='font-semibold mb-3'>Onboarding</h2>;
          <form className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
            <input
              className='border rounded px-3 py-2'
              placeholder='Company Name'
              defaultValue={branding?.name || ''}
            />;
            <input
              className='border rounded px-3 py-2'
              placeholder='Primary Color (hex)'
            />;
            <input
              className='border rounded px-3 py-2 md:col-span-2'
              placeholder='Hiring Needs (e && e.g., 3 engineers, 1 PM)'
            />;
            <button
              type='button'
              className='bg-gray-900 text-white rounded px-3 py-2 md:col-span-2'>;
import {useEffect, useMemo, useState} from 'react';
export default /**
 * Dashboard - Function description
 */
function Dashboard() {
  const params =;
    typeof window !== 'undefined';
      ? new URLSearchParams (window.location.search);
      : new URLSearchParams ();
  const tenant_id = params.get ('tenant_id') || '';
;
  const [branding, set_branding] = useState<{
    name: string;
    primary_color?: string;
    logo_url?: string;
  } | null>(null);  const params = typeof window !== 'undefined' ? new URLSearchParams (window.location.search) : new URLSearchParams ();
  const tenant_id = params.get ('tenant_id') || '';
;
  const [branding, set_branding] = useState<{ name: string, primary_color?: string, logo_url?: string } | null>(null);
  useEffect (() => {
    async /**
 * fetch_branding - Function description
 */
function fetch_branding() {
      try {
        const resp = await fetch ('/api / tenants');
        const data = await resp.json ();
        const t = (data.tenants || []).find ((coordinate_x: any) => x.id === tenant_id);
        set_branding (t?.branding || { name: 'Zion Hire AI' });
      } catch {
        set_branding ({ name: 'Zion Hire AI' });
      }
    }
    fetch_branding ();  }, [tenant_id]);      } catch {
        set_branding ({ name: 'Zion Hire AI' });
      }
    }
    fetch_branding ();
  }, [tenant_id]);
;
  const accent = branding?.primary_color || '#111827';
;
  return (
    <div className='min - h-screen bg - gray - 50'>;
      <header className='px - 6 py - 4 bg - white border - b flex items - center gap - 3'>;
        {branding?.logo_url && (
          <img src={branding.logo_url} alt='logo' className='h - 8 w - 8 rounded' />)}
        <h1 className='text - lg font - semibold' style={{ color: accent }}>;
          {branding?.name || 'Zion Hire AI'}
        </h1>;
        <span className='ml - auto text - xs text - gray - 400'>;
          Tenant: {tenant_id ? tenant_id.slice (0, 8) : '—'}
        </span>;
      <main className='max - w-6xl mx - auto p - 6 grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
        <section className='col - span - 1 md:col - span - 2 bg - white border rounded p - 4'>;
          <h2 className='font - semibold mb - 3'>Onboarding</h2>;
          <form className='grid grid - cols - 1 md:grid - cols - 2 gap - 3'>;
            <input;
              className='border rounded px - 3 py - 2';
              placeholder='Company Name';
              default_value={branding?.name || ''}
            />;
            <input;
              className='border rounded px - 3 py - 2';
              placeholder='Primary Color (hex)';
            />;
            <input;
              className='border rounded px - 3 py - 2 md:col - span - 2';
              placeholder='Hiring Needs (e.g., 3 engineers, 1 PM)';
            />;
            <button;
              type='button';
              className='bg - gray - 900 text - white rounded px - 3 py - 2 md:col - span - 2';
            >;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';
<<<<<<< HEAD
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Save;
            </button>;
          </form>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min-h-screen bg-gray-50">
      <header className="px-6 py-4 bg-white border-b flex items-center gap-3">
        {branding?.logoUrl && <img src={branding.logoUrl} alt="logo" className="h-8 w-8 rounded" />}
        <h1 className="text-lg font-semibold" style={{ color: accent }}>{branding?.name || 'Zion Hire AI'}</h1>
        <span className="ml-auto text-xs text-gray-400">Tenant: {tenantId ? tenantId.slice(0,8) : '—'}</span>
<<<<<<< HEAD

  useEffect__(() => {_async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants')
        const data = await resp.json()
        const t = (data.tenants || []).find((x: any) => x.id === tenantId)
        setBranding(t?.branding || { name: 'Zion Hire AI' })
      } catch {
        setBranding({ name: 'Zion Hire AI' })

      }
    }
    fetchBranding()
  }, [tenantId]),

  const accent = branding?.primaryColor || '#111827'

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-6 py-4 bg-white border-b flex items-center gap-3">
        {_branding?.logoUrl && <img src={branding.logoUrl} alt="logo" className="h-8 w-8 rounded" />}
        <h1 className="text-lg font-semibold" style={_{ color: accent}}>{_branding?.name || 'Zion Hire AI'}</h1>
        <span className="ml-auto text-xs text-gray-400">Tenant: {_tenantId ? tenantId.slice(0, _8) : '—'}</span>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </header>
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="col-span-1 md:col-span-2 bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Onboarding</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
<<<<<<< HEAD
<input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={branding?.name || ''} />
=======
            <input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={branding?.name || ''} />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input className="border rounded px-3 py-2" placeholder="Primary Color (hex)" />
            <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Hiring Needs (e.g., 3 engineers, 1 PM)" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 md: col-span-2">Save</button>
          </form>
        </section>
<<<<<<< HEAD
<section className="bg-white border rounded p-4">
=======
        <section className="bg-white border rounded p-4">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h2 className="font-semibold mb-3">Post a Job</h2>
          <form className="space-y-2">
            <input className="border rounded px-3 py-2 w-full" placeholder="Title" />
            <input className="border rounded px-3 py-2 w-full" placeholder="Location" />
            <input className="border rounded px-3 py-2 w-full" placeholder="Level" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full">Generate JD with AI</button>
          </form>
        </section>
<<<<<<< HEAD
        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='px-6 py-4 bg-white border-b flex items-center gap-3'>
        {branding?.logoUrl && (
          <img src={branding.logoUrl} alt='logo' className='h-8 w-8 rounded' />
        )}
        <h1 className='text-lg font-semibold' style={{ color: accent }}>
          {branding?.name |'Zion Hire AI'}
        </h1>
        <span className='ml-auto text-xs text-gray-400'>
          Tenant: {tenantId ? tenantId.slice(0, 8) : '—'}
        </span>
      <main className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <section className='col-span-1 md:col-span-2 bg-white border rounded p-4'>
          <h2 className='font-semibold mb-3'>Onboarding</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <input
              className='border rounded px-3 py-2'
              placeholder='Company Name'
              defaultValue={branding?.name |''}
            />
            <input
              className='border rounded px-3 py-2'
              placeholder='Primary Color (hex)'
            />
            <input
              className='border rounded px-3 py-2 md:col-span-2'
              placeholder='Hiring Needs (e.g., 3 engineers, 1 PM)'
            />
            <button
              type='button'
              className='bg-gray-900 text-white rounded px-3 py-2 md:col-span-2'
            >
              Save
            </button>
          </form>
        </section>
        <section className='bg-white border rounded p-4'>
          <h2 className='font-semibold mb-3'>Post a Job</h2>
          <form className='space-y-2'>
            <input
              className='border rounded px-3 py-2 w-full'
              placeholder='Title'
            />
            <input
              className='border rounded px-3 py-2 w-full'
              placeholder='Location'
            />
            <input
              className='border rounded px-3 py-2 w-full'
              placeholder='Level'
            />
            <button
              type='button'
              className='bg-gray-900 text-white rounded px-3 py-2 w-full'
            >
              Generate JD with AI
            </button>
          </form>
        </section>
        <section className='col-span-1 md:col-span-3 bg-white border rounded p-4'>
          <h2 className='font-semibold mb-3'>Candidate Flow</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-sm'>
            <div className='border rounded p-3'>
              <div className='font-medium'>Applied</div>
              <div className='text-gray-500'>0</div>
            </div>
            <div className='border rounded p-3'>
              <div className='font-medium'>Screen</div>
              <div className='text-gray-500'>0</div>
            </div>
            <div className='border rounded p-3'>
              <div className='font-medium'>Interview</div>
              <div className='text-gray-500'>0</div>
            </div>
            <div className='border rounded p-3'>
              <div className='font-medium'>Offer</div>
              <div className='text-gray-500'>0</div>
            </div>          </div>        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">
=======

        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h2 className="font-semibold mb-3">Candidate Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="border rounded p-3"><div className="font-medium">Applied</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Screen</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Interview</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Offer</div><div className="text-gray-500">0</div></div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='bg-gray-900 text-white rounded px-3 py-2 w-full'>;
        <section className='bg - white border rounded p - 4'>;
          <h2 className='font - semibold mb - 3'>Post a Job</h2>;
          <form className='space - y-2'>;
            <input;
              className='border rounded px - 3 py - 2 w - full';
              placeholder='Title';
            />;
            <input;
              className='border rounded px - 3 py - 2 w - full';
              placeholder='Location';
            />;
            <input;
              className='border rounded px - 3 py - 2 w - full';
              placeholder='Level';
            />;
            <button;
              type='button';
              className='bg - gray - 900 text - white rounded px - 3 py - 2 w - full';
            >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Generate JD with AI;
            </button>;
          </form>;
        </section>;
<<<<<<< HEAD
=======


  );
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );


=======

  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';
=======
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <section className='col-span-1 md:col-span-3 bg-white border rounded p-4'>;
          <h2 className='font-semibold mb-3'>Candidate Flow</h2>;
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-sm'>;
            <div className='border rounded p-3'>;
              <div className='font-medium'>Applied</div>;
              <div className='text-gray-500'>0</div>;
            </div>;
            <div className='border rounded p-3'>;
              <div className='font-medium'>Screen</div>;
              <div className='text-gray-500'>0</div>;
            </div>;
            <div className='border rounded p-3'>;
              <div className='font-medium'>Interview</div>;
              <div className='text-gray-500'>0</div>;
            </div>;
            <div className='border rounded p-3'>;
              <div className='font-medium'>Offer</div>;
              <div className='text-gray-500'>0</div>;
            </div>          </div>        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">;
          <h2 className="font-semibold mb-3">Candidate Flow</h2>;
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">;
            <div className="border rounded p-3"><div className="font-medium">Applied</div><div className="text-gray-500">0</div></div>;
            <div className="border rounded p-3"><div className="font-medium">Screen</div><div className="text-gray-500">0</div></div>;
            <div className="border rounded p-3"><div className="font-medium">Interview</div><div className="text-gray-500">0</div></div>;
            <div className="border rounded p-3"><div className="font-medium">Offer</div><div className="text-gray-500">0</div></div>;
        </section>;
      </main>;
    </div>;
  );

}fetchBranding () ;
<<<<<<< HEAD
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </section>
      </main>
    </div>
  );
<<<<<<< HEAD
}

<<<<<<< HEAD
);
);
}fetchBranding ()
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }
  );
  );
=======
=======
  );
}

=======
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}fetchBranding () 
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }
<<<<<<< HEAD
=======
=======
        <section className='col - span - 1 md:col - span - 3 bg - white border rounded p - 4'>;
          <h2 className='font - semibold mb - 3'>Candidate Flow</h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 text - sm'>;
            <div className='border rounded p - 3'>;
              <div className='font - medium'>Applied</div>;
              <div className='text - gray - 500'>0</div>;
            </div>;
            <div className='border rounded p - 3'>;
              <div className='font - medium'>Screen</div>;
              <div className='text - gray - 500'>0</div>;
            </div>;
            <div className='border rounded p - 3'>;
              <div className='font - medium'>Interview</div>;
              <div className='text - gray - 500'>0</div>;
            </div>;
            <div className='border rounded p - 3'>;
              <div className='font - medium'>Offer</div>;
              <div className='text - gray - 500'>0</div>;
            </div>          </div>        <section className="col - span - 1 md:col - span - 3 bg - white border rounded p - 4">;
          <h2 className="font - semibold mb - 3">Candidate Flow</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 text - sm">;
            <div className="border rounded p - 3"><div className="font - medium">Applied</div><div className="text - gray - 500">0</div></div>;
            <div className="border rounded p - 3"><div className="font - medium">Screen</div><div className="text - gray - 500">0</div></div>;
            <div className="border rounded p - 3"><div className="font - medium">Interview</div><div className="text - gray - 500">0</div></div>;
            <div className="border rounded p - 3"><div className="font - medium">Offer</div><div className="text - gray - 500">0</div></div>;
        </section>;
      </main>;
    </div>);
;
}fetch_branding ();
}, [tenant_id]);
</header> </form> </section> <section className="bg - white border rounded p - 4" > <h2 className="font - semibold mb - 3" >Post a Job</h2> <form className="space - y-2" > <input className="border rounded px - 3 py - 2 w - full" placeholder="Title" /> <input className="border rounded px - 3 py - 2 w - full" placeholder="Location" /> <input className="border rounded px - 3 py - 2 w - full" placeholder="Level" /> <button type="button" className="bg - gray - 900 text - white rounded px - 3 py - 2 w - full" >Generate JD with AI</button> </form> </section> <section className="col - span - 1 md:col - span - 3 bg - white border rounded p - 4" > <h2 className="font - semibold mb - 3" >Candidate Flow</h2> <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 text - sm" > <div className="border rounded p - 3" ><div className="font - medium" >Applied</div><div className="text - gray - 500" >0</div></div> <div className="border rounded p - 3" ><div className="font - medium" >Screen</div><div className="text - gray - 500" >0</div></div> <div className="border rounded p - 3" ><div className="font - medium" >Interview</div><div className="text - gray - 500" >0</div></div> <div className="border rounded p - 3" ><div className="font - medium" >Offer</div><div className="text - gray - 500" >0</div></div> </div> </section> </main> </div>) }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
