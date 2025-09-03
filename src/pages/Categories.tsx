
              </p>
              <a""
                href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`}""

    { name: 'Cybersecurity', icon: Shield, count: 12 }, { name: 'Development', icon: Code, count: 18 }, { name: 'Data Analytics', icon: Database, count: 10 }, { name: 'Infrastructure', icon: Network, count: 8 }

  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
      <div className='max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16>
        <div className='text-center mb-12>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Service Categories</h1>'
          <p className='text-xl text-gray-600'>Explore our comprehensive range of technology services</p>'
        </div>""
        <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-3 gap-6'>
          {categories.map((category, index) => ('
            <div key={index} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow>
              <div className='flex items-center mb-4>
                <category.icon className='h-8 w-8 text-blue-600 mr-3' />
                <h2 className='text-xl font-semibold text-gray-900'>{category.name}</h2>'
              </div>""
              <p className='text-gray-600 mb-4'>
                {category.count} services available in this category

              </p>




                className='text-blue-600 hover: text-blue-700 font-medium'>

                View Services →


              </a>
            </div>
          ))}
        </div>
      </div>


  )}





