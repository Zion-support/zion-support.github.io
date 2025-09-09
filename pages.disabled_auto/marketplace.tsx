
  ];

  return (
    <MainLayout
      title="Marketplace - Zion Tech Group"
      description="Discover products, talent, equipment, and services in our marketplace."
    >
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">

          {sections.map(s => (

            <Link
              key={s.title}
              href={s.href}

            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  )}
  );
};