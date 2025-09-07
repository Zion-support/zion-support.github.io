import React from "react";""
import { completeSitemap, dynamicPaths } from "@/config/sitemap";""
import { Link } from "react-router-dom";""
import { ChevronRight } from "lucide-react";""
import { SEO } from "./SEO";""
import { AppLayout } from "@/layout/AppLayout";"
export const SitemapPage: React.FC = () => {
  return (
    <AppLayout>
</AppLayout>
      <SEO;"
        title="Sitemap | Zion AI Marketplace"""
        description="Complete sitemap of the Zion AI Marketplace"""
        keywords="sitemap, zion, ai marketplace, navigation"""
        canonical="https://app.ziontechgroup.com/sitemap-page""
      />
</SEO>"
      <div className="container mx-auto px-4 py-12">"
</div>"
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>""
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <ul className="space-y-2">"
</ul>
                  <li key={route.path}>
</li>
                    <Link;
                      to={route.path}"
                      className="flex items-center hover:text-zion-purple""
                    >
</Link>"
                      <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>
                    </Link>
                  </li>
            </ul>
          </div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <p className="text-sm text-zion-slate mb-4">"
</p>
            </p>"
            <ul className="space-y-2">"
</ul>
                  <li key={route.path}>
</li>
                    <Link;
                      to={route.path}"
                      className="flex items-center hover:text-zion-purple""
                    >
</Link>"
                      <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>
                    </Link>
                  </li>
            </ul>
          </div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <p className="text-sm text-zion-slate mb-4">"
</p>
            </p>"
            <ul className="space-y-2">"
</ul>
                  <li key={route.path}>
</li>
                    <Link;
                      to={route.path}"
                      className="flex items-center hover:text-zion-purple""
                    >
</Link>"
                      <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>
                    </Link>
                  </li>
            </ul>
          </div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <p className="text-sm text-zion-slate mb-4">"
</p>
            </p>"
            <ul className="space-y-2">"
</ul>
                  <li key={route.path}>
</li>
                    <Link;
                      to={route.path}"
                      className="flex items-center hover:text-zion-purple""
                    >
</Link>"
                      <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>
                    </Link>
                  </li>
            </ul>
          </div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <p className="text-sm text-zion-slate mb-4">"
</p>
            </p>"
            <ul className="space-y-2">"
</ul>
                  <li key={route.path}>
</li>
                    <Link;
                      to={route.path}"
                      className="flex items-center hover:text-zion-purple""
                    >
</Link>"
                      <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>
                    </Link>
                  </li>
            </ul>
          </div>"
          <div className="bg-zion-blue-dark p-6 rounded-lg">"
</div>"
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">"
</h2>
            </h2>"
            <p className="text-sm text-zion-slate mb-4">"
</p>
            </p>"
            <ul className="space-y-2">"
</ul>
                <li key={key}>
</li>"
                  <div className="flex items-center text-zion-slate">"
</div>"
                    <ChevronRight className="h-4 w-4 mr-2" />"
</ChevronRight>)"
                    {path} <span className="ml-2 text-xs italic">({key})</span>"
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>"