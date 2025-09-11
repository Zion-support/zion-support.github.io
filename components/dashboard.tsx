import { useEffect, useMemo, useState } from 'react';
import {useEffect, useMemo, useState} from 'react';

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

        const data = await resp && resp.json();
        const t = (data && data.tenants || []).find((x: any) => x && x.id === tenantId);
        setBranding(t?.branding || { name: 'Zion Hire AI' });
      } catch {;

        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();  }, [tenantId]);      } catch {;
        setBranding({ name: 'Zion Hire AI' });
      }
    }
    fetchBranding();

=======
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

  }, [tenantId]);
  const accent = branding?.primaryColor |'#111827';
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
          </div>
        </section>
      </main>
    </div>
  );
=======
  );
}

=======
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

}fetchBranding () 
}, [tenantId]);
</header> </form> </section> <section className="bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Post a Job</h2> <form className="space-y-2" > <input className="border rounded px-3 py-2 w-full" placeholder="Title" /> <input className="border rounded px-3 py-2 w-full" placeholder="Location" /> <input className="border rounded px-3 py-2 w-full" placeholder="Level" /> <button type="button" className="bg-gray-900 text-white rounded px-3 py-2 w-full" >Generate JD with AI</button> </form> </section> <section className="col-span-1 md:col-span-3 bg-white border rounded p-4" > <h2 className="font-semibold mb-3" >Candidate Flow</h2> <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm" > <div className="border rounded p-3" ><div className="font-medium" >Applied</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Screen</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Interview</div><div className="text-gray-500" >0</div></div> <div className="border rounded p-3" ><div className="font-medium" >Offer</div><div className="text-gray-500" >0</div></div> </div> </section> </main> </div>) }
