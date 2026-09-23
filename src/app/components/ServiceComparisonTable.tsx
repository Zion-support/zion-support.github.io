export default function ServiceComparisonTable() {
  const rows = [
    { name: 'AI Discovery', price: '$99 one-time', best: 'Validate an AI idea with a scoped roadmap', href: '/discovery/' },
    { name: 'Consulting Session', price: '$499', best: 'Deep-dive architecture & strategy session', href: '/en/plans/' },
    { name: 'Starter', price: '$2,500', best: 'Pilot build: first production AI workflow', href: '/en/plans/' },
    { name: 'Growth', price: '$8,000/mo', best: 'Dedicated AI delivery team, continuous shipping', href: '/en/plans/' },
  ];
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Compare Engagement Options</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Pick the right way to start</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-4">Plan</th>
              <th className="py-2 pr-4">Price</th>
              <th className="py-2 pr-4">Best for</th>
              <th className="py-2">Get started</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t border-slate-100">
                <td className="py-3 pr-4 font-semibold text-slate-900">{r.name}</td>
                <td className="py-3 pr-4 text-slate-700">{r.price}</td>
                <td className="py-3 pr-4 text-slate-600">{r.best}</td>
                <td className="py-3"><a href={r.href} className="font-semibold text-blue-600 hover:underline">Choose &rarr;</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
