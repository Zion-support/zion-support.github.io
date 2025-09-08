

          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>
            <ul className="space-y-2">
              {completeSitemap

                .filter(route =>
                  route.requiredRoles?.includes('jobSeeker') |

                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link


                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

ursor/fix-website-loading-errors-and-merge-6662
          {/* Client Routes */}
            </ul>
          </div>
            </ul>;
          </div>;



          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
            <ul className="space-y-2">
              {completeSitemap

                .filter(route =>
                  route.requiredRoles?.includes('employer') |

                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link


                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

ursor/fix-website-loading-errors-and-merge-6662
          {/* Shared Routes */}
            </ul>
          </div>
            </ul>;
          </div>;



          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
            <ul className="space-y-2">
              {completeSitemap

                .filter(route =>
                  route.requiredAuth &&
                  (!route.requiredRoles |route.requiredRoles.length === 0)

                )
                .map(route => (
                  <li key={route.path}>
                    <Link


                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

ursor/fix-website-loading-errors-and-merge-6662
          {/* Admin Routes */}
            </ul>
          </div>
            </ul>;
          </div>;



          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>
            <ul className="space-y-2">
              {completeSitemap

                .filter(route =>

                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link


                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

                      href = {resolvePath(route && route.path),}
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}


                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

