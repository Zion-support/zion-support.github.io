
  Filter;
  TrendingUp;
  DollarSign;
  Users;

import {
import Head from 'next / head;
import Card from ../components / ui / Card';
import Button from '../components / ui / Button;
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Users,
  Search,
  Filter, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Search;
  Filter,TrendingUp,DollarSign,Users,import { Search;
  Filter;
  TrendingUp;
  DollarSign;
  Users;Star;
  Check;
  X;
  ArrowRight;
  ExternalLink;
  Zap;
  Brain;
  Globe;



        'Limited free features','
        'Basic customization','
        'Can be expensive','
      ],
      "website": '"https"://calendly.com','
      "icon": <Globe className='w-6 h-6' />,'
      "color": 'text-blue-400','
    }
  ];


  }return (<>;
      <Head>;
        <title>Tool Comparison - Zion Tech Group</title>;
<meta;

            </p>
            <div className='flex flex-col "sm": flex-row gap-6 justify-center items-center mb-20'>'
              <Button,
href='#comparison''
                size='lg''
                className='animate-scale-in shadow-2xl shadow-purple-500/25 "hover":shadow-purple-500/40''
              <Button,
href='/contact''
variant='outline';'
                size='lg''


              >
                Get Expert Advice
              </Button>
            </div>
          </div>


            </div>
          </div>
        </div>
      </section>

                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              {categories && categories.map((category) => (;
                <button
              {categories.map(category => (                <button


              />
            </div>

            {/* Category Filter */}

<div className='flex flex-wrap gap-2'>'
              {categories.map(category => (
                <button

            </div>;
            {/* Category Filter */}<div className=flex flex-wrap gap-2'>;
              {categories.map(category => (<button;
            <div className="flex flex-wrap gap-2>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg
                      : bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}

              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Comparison Table */}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500
              >
                <option value=rating">Sort by Rating</option>
                <option value="users>Sort by Users</option>
                <option value=name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>


                        <div;
                          className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool && tool.color}`}>`
                          {tool && tool.icon}
                        </div>;
                        <div>;

                            {tool && tool.name}
                          </div>;
                        </div>;
                      </div>;
                    </td>;

                      <span;
                        className={`font-medium ${getPricingColor(tool && tool.pricing)}`}>`
                        {tool && tool.pricing}
                      </span>;
                    </td>;

                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                          variant='ghost;
                          size=sm';
                          variant='ghost;
                          size=sm';
                          className='text-xs>                          variant=ghost";
                          size="sm;
                          className=text-xs";
                        >;
                          Details;
                        </Button>;
                      </div>;
                    </td>;
                  </tr>;className=text-xs';
                        >;
                          Details;
                        </Button>;
                      </div>;
                    </td>;
                  </tr>;
                ))}
          )}
        </div>;
      </section>;
      {/* Detailed Comparison Cards */}

              best decision for your business.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 "lg":grid-cols-2 gap-8'>;'
            {sortedTools.slice(0, 6).map((tool, index) => (</tbody>;
            </table>;

                No tools found;
              </h3>;
              <p className='text-gray-500'>;'
                Try adjusting your search criteria or category filter.;

            {sortedTools && sortedTools.slice(0, 6).map((tool, index) => (</tbody>;
            </table>;
          </div>;


          <div className='grid grid-cols-1 "lg":grid-cols-2 gap-8'>;'
            {sortedTools && sortedTools.slice(0, 6).map((tool, index) => (;
              </tbody>
            </table>
          </div>
          {sortedTools.length === 0 && (
<div className='text-center py-20'>'
              <Search className='w-16 h-16 text-gray-600 mx-auto mb-4' />'
              <h3 className='text-xl font-semibold text-gray-400 mb-2'>'
                }
                No tools found
              </h3>
              <p className='text-gray-500'>'
                Try adjusting your search criteria or category filter.

          {sortedTools.length === 0 && (
            <div className="text-center py-20>
              <Search className=w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2>No tools found</h3>
              <p className=text-gray-500">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>
              </p>            </div>            <div className="text-center py-20>
              <Search className=w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2>No tools found</h3>
              <p className=text-gray-500">Try adjusting your search criteria or category filter.</p>

      {/* Detailed Comparison Cards */}

                        <span>{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>


                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>

                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>


                  </Button>


                </div>
              </Card>
            )
}

          </div>;

          {sortedTools.length === 0 && (<div className=text-center py-20>;
              <Search className='w-16 h-16 text-gray-600 mx-auto mb-4' />;
              <h3 className=text-xl font-semibold text-gray-400 mb-2>;
                No tools found;
              </h3>;
              <p className='text-gray-500'>;
                Try adjusting your search criteria or category filter.;
              </p>            </div>            <div className="text-center py-20>;
              <Search className=w-16 h-16 text-gray-600 mx-auto mb-4" />;
              <h3 className="text-xl font-semibold text-gray-400 mb-2>No tools found</h3>;
              <p className=text-gray-500">Try adjusting your search criteria or category filter.</p>;
              </p>;
            </div>;
          )}
        </div>;
      </section>;
      {/* Detailed Comparison Cards */}

            {sortedTools.slice(0, 6).map((tool, index) => ()}
        </div>;
      </section>;
      {/* Detailed Comparison Cards */}
              <Card;
                key={index}

                  <div;
                  <span;
                    className={`text-sm font-medium ${getPricingColor(tool && tool.pricing)}`}>                    {tool && tool.pricing}`                  </span>;
                  <Button;

                  <span;
                    className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}`                  >                    {tool.pricing}
                  </span>;
                  <Button;
                    className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>`
                    {tool.icon}
                  </div>;

                        <span>{tool.rating}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;

                      {tool.pros.slice(0, 3).map((pro, proIndex) => (<li;
                          }
                          key={proIndex}

                          {pro}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div>;

                      {tool.cons.slice(0, 3).map((con, conIndex) => (<li;
                          }
                          key={conIndex}

                          {con}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;

                  <span;
                    className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>`

                    {tool.pricing}
                  </span>;
                  <Button;

                  </Button>;
                </div>;
              </Card>;
            ))}</div>;
        </div>;
      </section>;{/* CTA Section */}{/* CTA Section */}

            >
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>
    </>
            <Button;
              href='/contact;
              variant=secondary';
              size='lg;
            <Button;
              href=/saas-marketplace';
              variant='outline;
              size=lg';
              Explore All Tools;
            </Button>;
          </div>;
        </div>;
      </section>;
  )}
    </>)}
              className='border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl            >              href="/saas-marketplace;
              variant=outline";
              size="lg;
              className=border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl";
              className=border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl';
            >;
              Explore All Tools;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
})}
}
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
