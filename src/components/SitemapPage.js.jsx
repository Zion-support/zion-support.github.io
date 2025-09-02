import React from 'react';'
 export default function SitemapPage () { const publicRoutes = completeSitemap.filter (route => !route.requiredAuth)  const talentRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&' (route.requiredRoles.includes ('jobSeeker') ||' route.requiredRoles.includes ('creator') ) )  const employerRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&' (route.requiredRoles.includes ('employer') ||' route.requiredRoles.includes ('buyer') ) )  const adminRoutes = completeSitemap.filter () route => route.requiredAuth && route.requiredRoles &&' route.requiredRoles.includes ('admin') )  return () <div className='min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light'></div> <SEO ' title='Sitemap' description='Complete navigation guide for Zion Tech Group website' keywords='sitemap, navigation, website structure, Zion Tech Group' canonical='https:;import { Link } from 'react-router-dom';"''
import { SEO } from './SEO';"
export default function SitemapPage() {""
    const publicRoutes = completeSitemap.filter(route =" ></SEO> !route.requiredAuth)"
    const talentRoutes = completeSitemap.filter(route => route.requiredAuth &&"'"
        route.requiredRoles &&"'"'"
        (route.requiredRoles.includes('jobSeeker') ||"''
            route.requiredRoles.includes('creator')))"
    const employerRoutes = completeSitemap.filter(route => route.requiredAuth &&"'"
        route.requiredRoles &&"'"'"
        (route.requiredRoles.includes('employer') ||"''
            route.requiredRoles.includes('buyer')))"
    const adminRoutes = completeSitemap.filter(route => route.requiredAuth &&"'"
        route.requiredRoles &&"'"'"
        route.requiredRoles.includes('admin'))"'"'"
    return (<div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'></div>"'"'"
      <SEO title='Sitemap' description='Complete navigation guide for Zion Tech Group website' keywords='sitemap, navigation, website structure, Zion Tech Group' canonical='https://ziontechgroup.com/content/sitemap-page'/" ></SEO>"'"'"
      <div className='container mx-auto px-4 py-12'></div>"'"'"
        <div className='text-center mb-12'></div>"''
          <h1 className='text-4xl font-bold text-white mb-4'></h>Site Map</h1>          <p className='text-xl text-zion-slate-light'></p>"
            Complete navigation guide for Zion Tech Group"'"
          </p>"'
        </div>'
''
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'></div>'
          {/* Public Routes */}''"
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'></div>'"'"
            <h2 className='text-2xl font-semibold text-zion-cyan mb-4'></h2>"'
              Public Pages'
            </h2>''
            <ul className='space-y-2'></ul>"
              {publicRoutes.map(route => ("'"
                <li key={route.path}" ></li>"'
                  <Link'
                    to={route.path}''
                    className='text-zion-slate-light hover:text-zion-cyan transition-colors block '></Link>
                    {route.label || route.title}
                  </Link>
                </li>
              ))}"
            </ul>"'"
          </div>"'
'
          {/* Talent Routes */}''"
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'></div>'"'"
            <h2 className='text-2xl font-semibold text-zion-cyan mb-4'></h2>"'
              Talent & Job Seeker Pages'
            </h2>''
            <ul className='space-y-2'></ul>"
              {talentRoutes.map(route => ("'"
                <li key={route.path}" ></li>"'
                  <Link'
                    to={route.path}''
                    className='text-zion-slate-light hover:text-zion-cyan transition-colors block '></Link>
                    {route.label || route.title}
                  </Link>
                </li>
              ))}"
            </ul>"'"
          </div>"'
'
          {/* Employer Routes */}''"
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'></div>'"'"
            <h2 className='text-2xl font-semibold text-zion-cyan mb-4'></h2>"'
              Employer & Buyer Pages'
            </h2>''
            <ul className='space-y-2'></ul>"
              {employerRoutes.map(route => ("'"
                <li key={route.path}" ></li>"'
                  <Link'
                    to={route.path}''
                    className='text-zion-slate-light hover:text-zion-cyan transition-colors block '></Link>
                    {route.label || route.title}
                  </Link>
                </li>
              ))}"
            </ul>"'"
          </div>"'
'
          {/* Admin Routes */}''"
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'></div>'"'"
            <h2 className='text-2xl font-semibold text-zion-cyan mb-4'></h2>"'
              Administrative Pages'
            </h2>''
            <ul className='space-y-2'></ul>"
              {adminRoutes.map(route => ("'"
                <li key={route.path}" ></li>"'
                  <Link'
                    to={route.path}''
                    className='text-zion-slate-light hover:text-zion-cyan transition-colors block '></Link>
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>"
          </div>"'"
        </div>"'
'
        {/* All Routes List */}''"
        <div className='mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6'></div>'"'"
          <h2 className='text-2xl font-semibold text-zion-cyan mb-6'></h2>"'
            Complete Route List'
          </h2>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'></div>'"
            {completeSitemap.map(route => ('"'"
              <div key={route.path} className='bg-white/5 rounded p-3'></div>"'
                <Link'"
                  to={route.path}'"'"
                  className='text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium '></Link>"'
                  {route.path}'"
                </Link>'"'"
                <span className='ml-2 text-xs italic text-zion-slate-light'></span>"'
                  ({route.priority})'
                </span>''
                <p className='text-sm text-zion-slate-light mt-1'></p>
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>)}

export { SitemapPage }

export { SitemapPage }

export { SitemapPage }

export { SitemapPage }
"
export { SitemapPage };""
;"'"
}'"'"