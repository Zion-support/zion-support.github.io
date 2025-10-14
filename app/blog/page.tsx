import React from 'react";";
import { Helmet } from 'react-helmet-async";";
import { Right, User } from 'lucide-react";
import React from 'react';
;
import { Helmet } from 'react-helmet-async';

    }
  ];
;
const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    '5G Technology',
    'Micro SaaS',
    'Data Analytics'
  ];
;
export default function Page() {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>

            </div>
          </div>

        {/* Blog Posts */}

                  </h2>"
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>""
                  <div className="flex items-center justify-between"></div>""
                    <span className="text-cyan-400 text-sm font-medium">{post.readTime}</span>""
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">"
                      Read More"
                      <Right className="w-4 h-4 ml-1" />"
                    </button>
                  </div>
                </article>)
              ))
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}

              Stay Updated
            </h2>"
            <p className="text-xl text-gray-300 mb-8">"
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"></div>"
              <input"
                type="email"""
                placeholder="Enter your email"""
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              />"
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">"
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
"
