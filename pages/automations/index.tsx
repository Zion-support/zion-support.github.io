

=======

    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
=======
export default AutomationsIndex,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;

    </main>;
  );
},;
export default AutomationsIndex;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
