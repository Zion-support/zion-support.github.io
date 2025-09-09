React: from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../components/layout/MainLayout';';
import: { Book, Code, Database, Cloud, Shield, Zap, Download, ExternalLink } from;
  'lucide-react';import: Link from;';
  'next/link'';const: Documentation: NextPage: = () => {';
  const: docCategories = [
    {

  /docs/introduction;
  ' }, { title: 'Account: Setu,p, href:',;
  /docs/account-setup;
  ' }, { title: 'First: Step,s, href:',;
  /docs/first-steps;

      title:,
  Data: Management', description: Data: handlin,g, storage, and processing guides',;
  ,

      title:,
  Security', description: 'Security: best practices and implementatio,n'];
  const: quickLinks = [{ title: 'API: Playgroun,d, href: ;';
  '/api-playground',, icon: Code }, { title:,';
  Status: Page', href: '/statu,s, icon: Zap }',;
,

  return(
    <MainLayout;
      title='Documentation - Zion Tech Group''      description='Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and technical resources to help you succeed.''      keywords='documentation, API reference, guides, tutorials, technical documentation, developer resources''    >'      <div className='min-h-screen bg-gray-50>        {/* Hero Section */}        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>          <div className='container mx-auto px-4 text-center>            <h1 className='text-4xl md: text-5xl font-bold mb-6'>Documentation</h1>'            <p className='text-xl text-gray-200 max-w-3xl mx-auto>              Comprehensive guides, API references, and technical resources to help you '              make the most of our services and build amazing solutions.
            </p>
          </div>
        </section>
        {/* Quick Links */}
        <section className='py-8 bg-white border-b>          <div className='container mx-auto px-4>            <div className='flex flex-wrap justify-center gap-4>              {quickLinks.map((link, index) => ('                <Link;
                  key={index}
                  href={link.href}
                  className='flex items-center px-4 py-2 bg-gray-100 hover: bg-gray-200 rounded-lg transition-colors''                >'                  <link.icon className='w-4 h-4 mr-2' />                  {link.title}                </Link>

              ))}
            </div>
          </div>
        </section>

                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>

              </Link>
              <Link;
                href='/faq''                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-900 transition-colors''              >"                View FAQ

              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>


