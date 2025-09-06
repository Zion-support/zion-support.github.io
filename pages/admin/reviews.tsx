

    if (res.ok) refresh()
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Moderation</h1>
      <div className="enhanced-card">
        <label className="block text-sm mb-2">Admin Key</label>
        <input className="border p-2 rounded w-full" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Enter admin key" />
      </div>
      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
        <div className="space-y-4">
          {pending.map((r) => (
            <div key={r.id} className="border rounded p-3">
              <div className="text-sm text-gray-600 mb-1">Project: {r.projectId} • To: {r.toRole} {r.toId}</div>
              <div className="font-medium">{r.rating}★ — {r.text}</div>
              <div className="mt-2 flex gap-2">
                <button className="enhanced-button enhanced-button-primary" onClick={() => moderate('approve', r.id)}>Approve</button>
                <button className="enhanced-button enhanced-button-secondary" onClick={() => moderate('remove', r.id)}>Remove</button>
              </div>
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!pending.length && <div>No pending reviews.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>


      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},
export default AdminReviewsPage,

=======
},

export default AdminReviewsPage,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
