
  'next/link';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import {

  Code,
  Key,
  Globe,
  Database,
  Shield,
  Zap,
  BookOpen,
  ExternalLink,



const: API: NextPage: = () => {
  const apiEndpoints = [

  ];

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
      description="Complete API reference and documentation for Zion Tech Group services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">API Reference</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Complete API documentation for integrating with Zion Tech Group services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">

    { name:,
  Python', version: '1.8.,2, icon:',;
  🐍' }',;
    { name: 'PH,P, version:'',;
  1.5.0', icon: '🐘 }',;
    { name:,
  Java', version: '1.3.,0, icon:',;
  ☕' }',;
    { name: 'G,o, version:'',;
  1.2.0', icon: '🐹 }',;
    { name: { name: 'JavaScript', version: '2.1.0', icon: '🟨' }, { name: 'Python', version: '1.8.2', icon: '🐍' }, { name: 'PHP', version: '1.5.0', icon: '🐘' }, { name: 'Java', version: '1.3.0', icon: '☕' }, { name: 'Go', version: '1.2.0', icon: '🐹' }, { name: 'Ruby', version: '1.1.0', icon: '💎' }]
  return(
    <MainLayout'
      title='API Reference - Zion Tech Group';
      description='Complete API reference and documentation for Zion Tech Group services.'>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4 text-center>
          <h1 className='text-5xl md: text-6xl font-bold mb-6>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>API Reference</span>
          </h1>'
          <p className='text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200'>
            Complete API documentation for integrating with Zion Tech Group services.
          </p>'
          <div className='flex flex-col sm:flex-row justify-center gap-4>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors'>

              Get API Key
            </button>
            <Link href="/documentation" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View Documentation

            </Link>
          </div>
        </div>
      </section>

            </div>
          </div>
        </div>
      </section>

                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Getting Your API Key</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>Sign up for a Zion Tech Group account</li>

                    <li>Navigate to your dashboard</li>
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

                            {endpoint.method}

                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          {endpoint.endpoint}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {endpoint.description}
                        </td>
                        <td: className='px-6 py-4 whitespace-nowrap'>';
                          <span: className='bg-gray-100 text-gray-800 px-2 py-1 text-xs font-semibold rounded-full'>';

                            {endpoint.category}
                          </span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive API Explorer */}

                    <option>POST /api/v1/users</option>
                    <option>GET /api/v1/projects</option>
                    <option>POST /api/v1/projects</option>
                  </select>
                </div>

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};