.map (s => s.trim () ) .filter (Boolean) 
}as Vendor
//For MVP, update via direct API not implemented, keep local preview only setActiveVendor (updated) 
}</div> md:col-span-2"> <button className=" px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save</button> </div> </form> </section> </div> </div> </section> </section> <div className=" text-center text-xs text-gray-500" >Powered by Zion</div> </div>) 
}</select> </div>) ) 
}</div>) 
}
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [...(activeVendor.packages || []), {
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}],
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle(');
    setPkgDesc(');
    setPkgPrice(')
  }


    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated)}
  function addPackage() {if (!pkgTitle || !pkgPrice || !activeVendor) return;

}

const packages = [;

            Pending Verification;
          </span>;
        )}
        <form;
          onSubmit={saveProfile}

          </div>
        </form>
      </section>


          </div>
        </div>
      </section>


    </div>
  )
}

function Pipeline() {
  }
  const [items, setItems] = useState<any[]>([]);


    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])

  async function fetchItems() {


    );

    setItems(data.items || []);
  }

    fetchItems();
  useEffect(() => {}

    fetchItems();
  }, []);

      )}
      {items && items.map(item => { return (<div; }
          }
          key={item && item.id}

              {new Date(item && item.createdAt).toLocaleString()} • {item && item.status}
            </div>;
          </div>;
          <select;
            defaultValue={item && item.status}


const { listVendors,;
} = await import('../utils/vendor-store')const vendor = listVendors()[0] || null; // tie to auth later;'
return { "props": { vendor } }})defaultValue={item.statu,;
}
            onChange={e => { return changeStatus(item.id, e.target.value)}


          </select>
        </div>
      ))}
    </div>
); }

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null, // tie to auth later
  return { props: { vendor } }
};
}

    </div>
};
    </div>

};
        </div>))}
    </div>);
;
export const getServerSideProps: GetServerSideProps < Props> = async () => {
  const { list_vendors } = await import ('../utils / vendor - store');
  const vendor = list_vendors ()[0] || null; // tie to auth later;
  return { props: { vendor } }
}  );
}
export const getServerSideProps: GetServerSideProps < Props> = async () => {
  const { list_vendors } = await import ('../utils / vendor - store');
  const vendor = list_vendors ()[0] || null, // tie to auth later;
  return { props: { vendor } }
}
;
  return { props: { vendor } }}
  const { listVendors } = await import($2);
  const vendor = listVendors()[0] || null, // tie to auth later
  return { props: { vendor } }
},
