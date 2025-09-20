<<<<<<< HEAD
  import { completeSitemap } from '../config / sitemap';

export default function Page() {
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent Routes */}"
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">
              Talent & Job Seeker Pages
            </h2>"
            <ul className="space-y-2">
              {talentRoutes.map(route => (
                <li key={route.path}>
                  <Link
                    to={route.path}"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employer Routes */}"
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">
              Employer & Buyer Pages
            </h2>"
            <ul className="space-y-2">
              {employerRoutes.map(route => (
                <li key={route.path}>
                  <Link
                    to={route.path}"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Routes */}"
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">
              Administrative Pages
            </h2>"
            <ul className="space-y-2">
              {adminRoutes.map(route => (
                <li key={route.path}>
                  <Link
                    to={route.path}"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All Routes List */}"
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">"
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">
            Complete Route List
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completeSitemap.map(route => ("
              <div key={route.path} className="bg-white/5 rounded p-3">
                <Link
                  to={route.path}"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  {route.path}
                </Link>"
                <span className="ml-2 text-xs italic text-zion-slate-light">
                  ({route.priority})
                </span>"
                <p className="text-sm text-zion-slate-light mt-1">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
'"
=======
import React from 'react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
