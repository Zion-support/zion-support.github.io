
      const res = await fetch('/api/proposals/list');
      const data = await res.json();
      setItems(data.proposals || []);



      setLoading(false)
    })()
  }, [])
  async function updateStatus(id: string, status: string) {
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    const res = await fetch('/api/proposals/list')
    const data = await res.json()
    setItems(data.proposals |[])




        </div>
      )}
    </div>
  );
};




