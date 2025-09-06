

export default function GrantsAdminPage() {

  const [token, setToken] = useState('');

  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);


  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]);


  const load = () => {
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {
    load()
  }, []);
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) })
    load()


  const headers = useMemo(;
    () =>;
      token;
        ? {;
            Authorization: `Bearer ${token}`,;
            'Content-Type': 'application/json',;
          }
        : { 'Content-Type': 'application/json' },;
    [token];
  );

  const load = () => {;
    fetch('/api/grants?status=Submitted');
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
  };

  const saveMilestones = async () => {
    if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones`, {
      method: 'POST'
      headers
      body: JSON.stringify({ milestones })
    });
    alert('Milestones saved');  }
  const markComplete = async (milestoneId: string) => {
    if (!selected) return;    await fetch(`/api/grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify({ milestones }) })
    alert('Milestones saved')
  };

  const markComplete = async (milestoneId: string) => {
    if (!selected) return;
    await fetch(
      `/api/grants/${selected.id}/milestones/${milestoneId}/complete`
      { method: 'POST', headers }
    );
    const r = await fetch(`/api/grants/${selected.id}`).then(x => x.json());
    setSelected(r.record);  }
  return (
    <EnhancedLayout>    await fetch(`/api/grants/${selected.id}/milestones/${milestoneId}/complete`, { method: 'POST', headers });
    const r = await fetch(`/api/grants/${selected.id}`).then((x) => x.json());
    setSelected(r.record)

  };

  useEffect(() => {;
    load();
  }, []);

  const setStatus = async (;
    id: string,;
    status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {;
    await fetch(`/api/grants/${id}/status`, {;
      method: 'POST',;
      headers,;
      body: JSON && JSON.stringify({ status }),;
    });
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

  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;
    await fetch(;
      `/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,;
      { method: 'POST', headers }
    );
    const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json());
    setSelected(r && r.record);  };
  return (
    <EnhancedLayout>

          </div>
        </div>
      </div>
    </EnhancedLayout>

}

}

  );
}

