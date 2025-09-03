
  return(
    <MainLayout;
      title='Products - Zion Tech Group''      description='Discover our comprehensive suite of technology products designed to accelerate your business growth and digital transformation.''    >'      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>        <div className='container mx-auto px-4 text-center>          <h1 className='text-5xl md: text-6xl font-bold mb-6>            Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Products</span>'          </h1>'          <p className='text-xl m,
    d:text-2xl mb-8 max-w-4xl mx-auto text-gray-200>            Powerful, scalable solutions designed to transform your business and drive innovation.'          </p>
        </div>
      </section>
      {/* Products Content */}
      <section className='py-20 bg-gray-50>        <div className='container mx-auto px-4>          {/* Category Filter */}          <div className='flex flex-wrap justify-center gap-4 mb-12>            {categories.map((category, index) => ('              <button;
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${`                  index === 0;
                    ?,`
  bg-blue-600 text-white';
  ': 'bg-white text-gray-600 hover:bg-blue-50 hove,
    r:text-blue-600'                }`}              >`                {category}
              </button>
            ))}
          </div>
          {/* Products Grid */}`
          <div className='grid md: grid-cols-2 l,
    g:grid-cols-3 gap-8>            {products.map((product, index) => ('              <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow>                <div className='h-48 bg-gradient-to-br from-blue-400 to-purple-500'></div>'                <div className='p-6>                  <div className='flex items-center justify-between mb-3>                    <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium>                      {product.category}                    </span>'
                    <div className='flex items-center gap-1>                      <Star className='w-4 h-4 text-yellow-400 fill-current' />                      <span className='text-sm text-gray-600'>{product.rating}</span>'                    </div>'                  </div>'
                  <h2 className='text-xl font-bold text-gray-900 mb-3>                    {product.title}                  </h2>'
                  <p className='text-gray-600 mb-4>                    {product.description}                  </p>'
                  <div className='mb-4>                    <h3 className='font-semibold text-gray-700 mb-2'>Key Features:</h3>'                    <ul className='space-y-1>                      {product.features.slice(0, 3).map((feature, featureIndex) => ('                        <li key={featureIndex} className='flex items-center gap-2 text-sm text-gray-600>                          <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />                          <span>{feature}</span>'                        </li>
                      ))}
                    </ul>
                  </div>'
                  <div className='flex items-center justify-between mb-4>                    <div className='flex items-center gap-2 text-sm text-gray-500>                      <Users className='w-4 h-4' />                      <span>{product.users} users</span>'                    </div>'
                    <span className='text-lg font-bold text-blue-600>                      {product.pricing}                    </span>
                  </div>'
                  <div className='flex gap-3>                    <Link '                      href={`/products/${product.title.toLowerCase().replace(/\s+/g,`
  '-')}`}                      className='flex-1 bg-blue-600 hover: bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors''                    >'                      Learn More`                    </Link>`
                    <button className='bg-gray-100 hove,
    r:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors>                      Demo'                    </button>

                  </div>
                </div>
              </div>
            ),)}
          </div>
        </div>
      </section>

            </Link>
          </div>
        </div>
      </section>
    </MainLayout>


