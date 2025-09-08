




  return (
    <div className='space-y-8'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-2xl font-semibold'>Agency Dashboard</h1>;
        {!activeVendor && activeVendor.verified && (;
          <span className='text-xs px-2 py-0 && 0.5 rounded bg-yellow-100 text-yellow-800'>;
            Pending Verification;
          </span>;
        )}


      </div>;
      <section className='space-y-4'>;
        <h2 className='text-lg font-medium'>Profile</h2>;


        <form
          onSubmit={saveProfile}
          className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm mb-1'>Agency Name</label>;
            <input
              name='name'
              defaultValue={activeVendor && activeVendor.name}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm mb-1'>About</label>;
            <textarea
              name='about'


              defaultValue={activeVendor && activeVendor.about || ''}


              rows={4}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm mb-1'>Services Offered</label>;
            <input
              name='servicesOffered'



              defaultValue={activeVendor && activeVendor.servicesOffered?.join(', ') || ''}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <button className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Save;
            </button>          </div>;
        </form>;
      </section>;


      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Publish Packages</h2>;

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });


  return (







const packages = [}
  ...(activeVendor.packages || []),{id: `pkg_${Date.now(,}
}`;
        title: pkgTitle;
        description: pkgDesc;
        priceUsd: Number(pkgPrice,
}function addPackage() {if (!pkgTitle || !pkgPrice || !activeVendor) return;

const packages = [}
  ...(activeVendor && activeVendor.packages || []),{id: `pkg_${Date && Date.now(,}
}`,title: pkgTitle,description: pkgDesc,priceUsd: Number(pkgPrice),},];
    setActiveVendor({ ...activeVendor, packages })setPkgTitle('')setPkgDesc('')setPkgPrice('')}
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated)}
  function addPackage() {if (!pkgTitle || !pkgPrice || !activeVendor) return;return (<div className='space-y-8'    />;
      <div className='flex items-center justify-between'    />;
        <h1 className='text-2xl font-semibold'    />Agency Dashboard</h1>;
        {!activeVendor && activeVendor.verified && (<span className='text-xs px-2 py-0 && 0.5 rounded bg-yellow-100 text-yellow-800'    />;
            Pending Verification;}
          </span>;}
        )}
        <form;
          onSubmit={saveProfile}
          className='grid grid-cols-1 md:grid-cols-2 gap-4'    />;
          <div    />;
            <label className='block text-sm mb-1'    />Agency Name</label>;


<section className='space-y-3'    />
        <h2 className='text-lg font-medium'    />Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'    />



function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {;
    const res = await fetch(;
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`;


            <div className='font-medium'>{item && item.title}</div>;
            <div className='text-xs text-gray-500'>;
              {new Date(item && item.createdAt).toLocaleString()} • {item && item.status}
            </div>;
          </div>;
          <select
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';



          <input;
            placeholder='Title';
            value={pkgTitle}
            onChange={e =    /> setPkgTitle(e && e.target.value)}
            className='border rounded px-3 py-2 bg-transparent';
          />;
          <input;
            placeholder='Description';
            value={pkgDesc}
            onChange={e =    /> setPkgDesc(e && e.target.value)}
            className='border rounded px-3 py-2 bg-transparent';
          />;
          <div className='flex gap-2'    />;

            <input;
placeholder='Price (USD)'
              type='number'
              value={pkgPrice}

              onChange={e =    /> setPkgPrice(Number(e.target.value))}
              className='border rounded px-3 py-2 bg-transparent w-full'
            />
            <button;
onClick={addPackage}
              className='px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black'
                />
              Add;
            </button>

          </div>
        </div>
      </section>


<section className='space-y-3'    />
        <h2 className='text-lg font-medium'    />Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.i,}
}    />
      </section>
      <div className='text-center text-xs text-gray-500'    />Powered by Zion</div>

    </div>
  );

function Pipeline({ vendorId }: { vendorId: string,}
}) {
  const [items, setItems] = useState<any[]    />([]);
  async function fetchItems() {

}
const res = await fetch(}
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`

    );

    setItems(data.items || []);
  }


  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {

      method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},
body: JSON.stringify({ itemId, status }),
    });
    fetchItems();
  useEffect(() => {
;}
}
  }

    fetchItems();
  }, []);
  return (
    <div className='space-y-2'    />;
      {items && items.length === 0 && (;
        <div className='text-sm text-gray-500'    />No leads yet.</div>;}
}

          className='border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between'    />;
          <div    />;
            <div className='font-medium'    />{item && item.title}</div>;
            <div className='text-xs text-gray-500'    />;


            onChange={e =    /> changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm'>









