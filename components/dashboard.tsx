<<<<<<< HEAD
<<<<<<< HEAD

=======


import {useEffect, useMemo, useState} from 'react';



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
import {useEffect, useMemo, useState} from 'react';
=======
import { useEffect, useMemo, useState } from 'react';

=======
import {useEffect, useMemo, useState} from 'react';
import { useEffect, useMemo, useState } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const data = await resp && resp.json();
        const t = (data && data.tenants || []).find((x: any) => x && x.id === tenantId);
        setBranding(t?.branding || { name: 'Zion Hire AI' });
      } catch {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {;
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();

=======
<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
=======
import {useEffect, useMemo, useState} from 'react';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  useEffect(() => {
    async function fetchBranding() {
      try {
        const resp = await fetch('/api/tenants');
        const data = await resp.json();
<<<<<<< HEAD
        const t = (data.tenants || []).find((x: any) => x.id === tenantId),
        setBranding(t?.branding || { name: 'Zion Hire AI' })
      } catch {
=======
        const t = (data.tenants |[]).find((x: any) => x.id === tenantId);
        setBranding(t?.branding |{ name: 'Zion Hire AI' });
      } catch {
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        setBranding({ name: 'Zion Hire AI' })
      }
    }
    fetchBranding()
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';
<<<<<<< HEAD
  return (
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Save;
            </button>;
          </form>;
        </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="min-h-screen bg-gray-50">
      <header className="px-6 py-4 bg-white border-b flex items-center gap-3">
        {branding?.logoUrl && <img src={branding.logoUrl} alt="logo" className="h-8 w-8 rounded" />}
        <h1 className="text-lg font-semibold" style={{ color: accent }}>{branding?.name || 'Zion Hire AI'}</h1>
        <span className="ml-auto text-xs text-gray-400">Tenant: {tenantId ? tenantId.slice(0,8) : '—'}</span>
<<<<<<< HEAD
=======

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </header>
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="col-span-1 md:col-span-2 bg-white border rounded p-4">
          <h2 className="font-semibold mb-3">Onboarding</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
<<<<<<< HEAD
            <input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={branding?.name || ''} />
=======
<input className="border rounded px-3 py-2" placeholder="Company Name" defaultValue={branding?.name || ''} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <input className="border rounded px-3 py-2" placeholder="Primary Color (hex)" />
            <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Hiring Needs (e.g., 3 engineers, 1 PM)" />
            <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 md: col-span-2">Save</button>
          </form>
        </section>
<<<<<<< HEAD
        <section className="bg-white border rounded p-4">
=======
<section className="bg-white border rounded p-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
        <section className="col-span-1 md:col-span-3 bg-white border rounded p-4">
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <h2 className="font-semibold mb-3">Candidate Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="border rounded p-3"><div className="font-medium">Applied</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Screen</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Interview</div><div className="text-gray-500">0</div></div>
            <div className="border rounded p-3"><div className="font-medium">Offer</div><div className="text-gray-500">0</div></div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Generate JD with AI;
            </button>;
          </form>;
        </section>;
<<<<<<< HEAD


  );
=======
=======
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>
        </section>
      </main>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

}fetchBranding () 
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }

=======
  );
}

=======
=======
);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
}fetchBranding ()
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }
=======
  );
=======
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}fetchBranding () 
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
