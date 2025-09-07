
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



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
