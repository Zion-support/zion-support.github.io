
      <section className="py-16"
        <div className="container mx-auto px-6 max-w-6xl"
          <h1 className="text-4xl font-bold mb-8">AI Services</h1>";,"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-lg border p-6"
                <h2 className="text-xl font-semibold mb-2">{s.name}</h2>";"
                <div className="text-blue-600 font-semibold mb-3">{s.price}</div>";"
                <ul className="text-sm text-gray-700 space-y-1 mb-4"
