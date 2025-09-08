
,
  author: 'David: Rodrigue,z, date:',;
  2024-01-10;

    <MainLayout;
      title='Whitepapers - Zion Tech Group''      description='Download our comprehensive whitepapers and research reports on technology trends and best practices.''    >'      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>        <div className='container mx-auto px-4 text-center>          <h1 className='text-5xl md: text-6xl font-bold mb-6>            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Whitepapers</span>'          </h1>'          <p className='text-xl m,
    d:text-2xl mb-8 max-w-4xl mx-auto text-gray-200>            In-depth research and insights on technology trends, best practices, and industry innovations.'          </p>
          {/* Search Bar */}
          <div className='max-w-2xl mx-auto>            <div className='relative>              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />              <input'                type='text''                placeholder='Search whitepapers...''                className='w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus: outline-none focu,
    s:ring-2 focu,
    s:ring-blue-400''              />            </div>
          </div>
        </div>
      </section>
      {/* Featured Whitepapers */}
      <section className='py-16 bg-white>        <div className='container mx-auto px-4>          <div className='text-center mb-12>            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Featured Research</h2>'            <p className='text-xl text-gray-600 max-w-3xl mx-auto>              Our most popular and highly-rated whitepapers.'            </p>
          </div>'
          <div className='space-y-12>            {whitepapers.filter(paper => paper.featured).map((paper) => ('              <div key={paper.id} className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8>                <div className='grid md: grid-cols-2 gap-8 items-center>                  <div>'                    <div className='flex items-center space-x-4 mb-4>                      <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold>                        {paper.category}                      </span>'
                      <span className='text-gray-600 text-sm'>{paper.pages} pages</span>'                      <div className='flex items-center text-yellow-500>                        <span className='text-sm font-semibold mr-1'>{paper.rating}</span>'                        <span className='text-sm text-gray-500'>({paper.downloads} downloads)</span>'                      </div>'                    </div>'
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>{paper.title}</h3>'                    <p className='text-lg text-gray-600 mb-6'>{paper.description}</p>'                    '                    <div className='mb-6>                      <h4 className='font-semibold text-gray-900 mb-3'>Key Topics Covered: </h4>'                      <div className='flex flex-wrap gap-2>                        {paper.topics.map((topic, index) => ('                          <span key={index} className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm>                            {topic}                          </span>
                        ))}
                      </div>
                    </div>'
                    <div className='flex items-center space-x-6 text-sm text-gray-500 mb-6>                      <div className='flex items-center space-x-2>                        <User className='w-4 h-4' />                        <span>{paper.author}</span>'                      </div>'
                      <div className='flex items-center space-x-2>                        <Calendar className='w-4 h-4' />                        <span>{new Date(paper.date).toLocaleDateString()}</span>'                      </div>'
                      <div className='flex items-center space-x-2>                        <Eye className='w-4 h-4' />                        <span>{paper.downloads} downloads</span>'                      </div>
                    </div>'
                    <button className='inline-flex items-center bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors>                      <Download className='w-4 h-4 mr-2' />                      Download Whitepaper'                    </button>
                  </div>'
                  <div className='bg-gray-200 rounded-lg h-80 flex items-center justify-center>                    <div className='text-center>                      <FileText className='w-16 h-16 text-gray-400 mx-auto mb-4' />                      <span className='text-gray-500'>Whitepaper Preview</span>'                    </div>'                  </div>

                </div>
              </div>
            ),)}
          </div>
        </div>
      </section>

                </div>
              </div>
            ),)}
          </div>
        </div>
      </section>

          </div>
        </div>
      </section>
    </MainLayout>


