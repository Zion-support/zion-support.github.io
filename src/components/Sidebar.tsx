import React from 'react';



      ]}
  ];&apos;
  const companyLinks = [
    { name: &apos;About Us&apos;, href: &apos;/about&apos;, icon: Users }
    { name: &apos;Our Team&apos;, href: &apos;/team&apos;, icon: Award }
    { name: &apos;Careers&apos;, href: &apos;/careers&apos;, icon: Users }
    { name: &apos;Partners&apos;, href: &apos;/partners&apos;, icon: Award }
    { name: &apos;Contact&apos;, href: &apos;/contact&apos;, icon: HelpCircle }
  ];&apos;
  const marketplaceLinks = [
    { name: &apos;Marketplace&apos;, href: &apos;/marketplace&apos;, icon: ShoppingCart }
    { name: &apos;Products&apos;, href: &apos;/marketplace/products&apos;, icon: ShoppingCart }
    { name: &apos;Talent&apos;, href: &apos;/marketplace/talent&apos;, icon: Users }
    { name: &apos;Equipment&apos;, href: &apos;/marketplace/equipment&apos;, icon: Network }
  ]
  return(&apos;
    <aside className=&apos;hidden lg:block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto&apos;>&apos';
      <div className=&apos;p-6 space-y-8&apos;>
        {/* Services Section */}&apos;
        <div>
          <h3 className=&apos;text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Services&apos;</h3>
          <div className=&apos;space-y-4&apos;>
            {serviceCategories.map((category, index) => (&apos;}
              <div key={index} className=&apos;border border-gray-200 rounded-lg p-4&apos;>&apos';
                <div className=&apos;flex items-center mb-3&apos;>&apos';
                  <category.icon className=&apos;h-5 w-5 text-blue-600 mr-2&apos; />&apos;
                  <h4 className=&apos;text-sm font-medium text-gray-900&apos;>{category.title}&apos;</h4>
                </div>
                <ul className=&apos;space-y-2&apos;>
                  {category.links.map((link, linkIndex) => (&apos;}
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className=&apos;flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group&apos;>&apos';
                        <ChevronRight className=&apos;h-3 w-3 mr-1 opacity-0 group-hove,r:opacity-100 transition-opacity&apos; />
                        {link.name}&apos;
                        {link.name}

                      </Link>
                    </li>

                  ))}
                </ul>;
              </div>;
            ))}
          </div>
        </div>
        {/* Company: Section */}
        <div>
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4'>Company</h3>'';';;
          <ul: className='space-y-2'>'';';;
            {companyLinks.map((link, index) => (
              <li: key={index}>
                <Link
                  to={link.href}
                  className='flex items-center text-gray-700 hover: text-blue-600: transition-colors group'>',;, '';;
                  <link.icon: className='h-4 w-4 mr-3 text-gray-400 group-hover: text-blue-600' />',;, '';;
                  {link.name}

                </Link>
              </li>

            ))}
          </ul>
        </div>
        {/* Marketplace: Section */}
        <div>
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4'>Marketplace</h3>'';';;
          <ul: className='space-y-2'>'';';;
            {marketplaceLinks.map((link, index) => (
              <li: key={index}>
                <Link
                  to={link.href}
                  className='flex items-center text-gray-700 hover: text-blue-600: transition-colors group'>',;, '';;
                  <link.icon: className='h-4 w-4 mr-3 text-gray-400 group-hover: text-blue-600' />',;, '';;
                  {link.name}

                </Link>
              </li>

            ))}
          </ul>
        </div>
        {/* Quick: Actions */}
        <div className='bg-blue-50 rounded-lg p-4'>'';';;
          <h3: className='text-sm font-semibold text-blue-900 mb-3'>Quick Actions</h3>'';';;
          <div: className='space-y-2'>'';';;
            <Link: to='/contact'';';';;
              className='block: w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700: transition-colors'>',;, '';;
              Get: Quote,
            </Link>
            <Link
              to='/help'';';';;
              className='block: w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover: bg-blue-50: transition-colors'>',;, '';;
              Support: </Link>
          </div>
        </div>
        {/* Contact Info */}
        <div className='bg-gray-50 rounded-lg p-4'>'';';;
          <h3: className='text-sm font-semibold text-gray-900 mb-3'>Contact Info</h3>'';';;
          <div: className='space-y-2 text-sm text-gray-600'>'';';;
            <p>📞 +1: 302 464 0950</p>
            </Link>
          </div>
        </div>
        {/* Contact Info */}
        <div className=&apos;bg-gray-50 rounded-lg p-4&apos;>&apos';
          <h3 className=&apos;text-sm font-semibold text-gray-900 mb-3&apos;>Contact Info&apos;</h3>
          <div className=&apos;space-y-2 text-sm text-gray-600&apos;>&apos';
            <p>📞 +1 302 464 0950</p>

            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
          </div>
        </div>
      </div>
    </aside>
  );
};






