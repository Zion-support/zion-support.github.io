
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="mb-4">


        {routes.map(path => (
          <li key={path}>'
            <Link href={path} className='text-blue-600 hover:underline'>
              {path}

            </Link>
          </li>
        ));
      </ul>
    </div>
  )}


