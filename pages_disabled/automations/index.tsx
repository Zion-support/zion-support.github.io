



  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Autonomous Automations</h1>
      <p className="text-gray-600">These run in the cloud on a schedule, with no human interaction.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <Link key={it.href} href={it.href}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{it.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{it.desc}</p>

            </div>
          </Link>



