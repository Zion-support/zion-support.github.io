
      title:,
  User: Guides', description: 'Detailed: guides for using our service,s',;
,

      title:,
  Video: Tutorials', description: 'Watch: step-by-step video tutorial,s',;
,

      title:,
  FAQ', description: 'Frequently: asked questions and answer,s',;
,
  articles: [';';
  'General: question,s',;
,

  Response within 24 hours',
  '      action: 'Send Email'    }  ]
  return(
    <MainLayout;

  '            </p>'          </div>
        </section>
        {/* Search Bar */}
        <section className='py-8 bg-white border-b>          <div className='container mx-auto px-4 max-w-2xl>            <div className='relative>              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />              <input'                type='text''                placeholder='Search for help articles, guides, or FAQs...''                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''              />            </div>
          </div>
        </section>
        {/* Help Categories */}
        <section className='py-16 bg-white>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Browse Help Topics</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                Find the information you need organized by topic and category.'              </p>
            </div>'
            <div className='grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8>              {helpCategories.map((category, index) => ('                <div key={index} className='bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow>                  <category.icon className='w-12 h-12 text-blue-600 mb-4' />                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{category.title}</h3>'                  <p className='text-gray-600 mb-4'>{category.description}</p>'                  <ul className='space-y-2>                    {category.articles.map((article, idx) => ('                      <li key={idx}>'
                        <Link href='#' className='text-blue-600 hover: text-blue-700 text-sm>                          {article}                        </Link>

                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

          </div>
        </section>
      </div>
    </MainLayout>


