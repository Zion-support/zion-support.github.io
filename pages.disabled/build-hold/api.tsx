
  2.1.0;
  ', icon: '🟨 }, { name:',;
  Python;
  ', version: '1.8.,2, icon:',;
  🐍;

  1.2.0;
  ', icon: '🐹 }, { name:',;
  Ruby;

  return(
    <MainLayout;
      title='API Reference - Zion Tech Group''      description='Complete API reference and documentation for Zion Tech Group services.''    >'      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>        <div className='container mx-auto px-4 text-center>          <h1 className='text-5xl md: text-6xl font-bold mb-6>            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>API Reference</span>'          </h1>'          <p className='text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200>            Complete API documentation for integrating with Zion Tech Group services.'          </p>'
          <div className='flex flex-col sm:flex-row justify-center gap-4>            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors>              Get API Key'            </button>'
            <Link href='/documentation' className='bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg>              View Documentation'            </Link>
          </div>
        </div>
      </section>
      {/* API Overview */}
      <section className='py-16 bg-white>        <div className='container mx-auto px-4>          <div className='text-center mb-12>            <h2 className='text-3xl font-bold text-gray-900 mb-4'>API Overview</h2>'            <p className='text-xl text-gray-600 max-w-3xl mx-auto>              Our RESTful API provides programmatic access to all Zion Tech Group services.'            </p>
          </div>'
          <div className='grid md:grid-cols-2 l,
    g:grid-cols-4 gap-8 max-w-6xl mx-auto>            <div className='bg-blue-50 p-6 rounded-lg text-center>              <Globe className='w-12 h-12 text-blue-600 mx-auto mb-4' />              <h3 className='text-lg font-semibold text-gray-900 mb-2'>RESTful API</h3>'              <p className='text-gray-600'>Standard HTTP methods and status codes</p>'            </div>''
            <div className='bg-green-50 p-6 rounded-lg text-center>              <Shield className='w-12 h-12 text-green-600 mx-auto mb-4' />              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Secure</h3>'              <p className='text-gray-600'>OAuth 2.0 and API key authentication</p>'            </div>''
            <div className='bg-purple-50 p-6 rounded-lg text-center>              <Zap className='w-12 h-12 text-purple-600 mx-auto mb-4' />              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Fast</h3>'              <p className='text-gray-600'>Low latency and high performance</p>'            </div>''
            <div className='bg-orange-50 p-6 rounded-lg text-center>              <Database className='w-12 h-12 text-orange-600 mx-auto mb-4' />              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Reliable</h3>'              <p className='text-gray-600'>99.9% uptime guarantee</p>'            </div>'          </div>
        </div>
      </section>
      {/* Authentication */}
      <section className='py-16 bg-gray-50>        <div className='container mx-auto px-4>          <div className='max-w-4xl mx-auto>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center>                <Key className='w-8 h-8 text-blue-600 mr-3' />                Authentication'              </h2>'
              <p className='text-xl text-gray-600>                Secure your API requests with our authentication methods.'              </p>
            </div>'
            <div className='bg-white p-8 rounded-lg shadow-lg>              <h3 className='text-2xl font-semibold text-gray-900 mb-6'>API Key Authentication</h3>'              <p className='text-gray-600 mb-6>                Include your API key in the Authorization header of your requests: '              </p>'
              <div className='bg-gray-900 text-green-400 p-6 rounded-lg mb-6 overflow-x-auto>                <pre className='text-sm>{`curl -H 'Authorization: Bearer YOUR_API_KEY' \\'     -H 'Content-Typ,
    e: application/json' \\'     http,
    s://api.ziontechgroup.com/v1/users`}                </pre>`              </div>`
              <div className='grid md:grid-cols-2 gap-8>                <div>'                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>Getting Your API Key</h4>'                  <ol className='list-decimal list-inside text-gray-600 space-y-2>                    <li>Sign up for a Zion Tech Group account</li>'                    <li>Navigate to your dashboard</li>
                    <li>Go to API Keys section</li>

                    <li>Generate a new API key</li>
                    <li>Copy and store it securely</li>
                  </ol>
                </div>

                    <li>Rate limit headers included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

              </div>
            ),)}
          </div>
        </div>
      </section>

              </div>
            </div>
          </div>
        </div>
      </section>

          </div>
        </div>
      </section>
    </MainLayout>


