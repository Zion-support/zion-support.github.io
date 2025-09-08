
  }, [id]);

  const addUpdate = async () => {
    if (!id || !updateContent.trim()) return;
const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: updateContent }),
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev;
      );'
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
  return (


  const addUpdate = $2;
    const resp = await fetch(`/api/grants/${id}/updates`, { method: 'POST', headers: { Content-Type: 'application/json' }, body: JSON.stringify({ content: updateContent}) }),
    if (resp.ok) {
      const u = await resp.json($2);
      setItem((prev) => prev ? { ...prev, updates: [...(prev.updates || []), u.update] } : prev),
      setUpdateContent()

    }
  },

  if (loading) return <EnhancedLayout><div>Loading...</div></EnhancedLayout>,
  if (!item) return <EnhancedLayout><div>Not found</div></EnhancedLayout>,

  return (
    <EnhancedLayout>

      <div className="flex items-center justify-between mb-4>
      <div className=flex items-center justify-between mb-4>;


              {(!item.milestones |item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>
            <div className="mt-3 text-sm">Funds Released: {item.fundsReleased |0}</div>
          </section>
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Team</h3>
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>


                    <div className="font-medium">{m.title}</div>"
                    {m.description && <div className="text-gray-600">{m.description}</div>}"
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}"
