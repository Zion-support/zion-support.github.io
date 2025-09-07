import React from 'react';
import Head from 'next/head';
const allTools = [ //AI Tools {
  const filteredTools = allTools.filter (tool => {
  const matchesSearch = tool.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || tool.category.toLowerCase () .includes (searchTerm.toLowerCase () ) || const sortedTools = [...filteredTools].sort ( (a, b) => {
  switch (sortBy) {
  case 'rating': return b.rating - a.rating
case 'users': return (<> <Head> <title>Tool Comparison - Zion Tech Group</title> <meta name="description" content="Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison." /> <meta property="og:title" content="Tool Comparison - Zion Tech Group" /> <meta property="og:description" content="Comprehensive comparison of SaaS tools and AI services to help you make informed decisions." /> <meta name="twitter:card" content="summary large image" /> </Head> </div> <div className="absolute inset-0 bg-[linear-gradient (rgba (59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (59, 130, 246, 0.1) 1px, transparent 1px) ] bg-[size:50px 50px] opacity-20" /> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" > <div className="mb-20 animate-fade-in" > <div className="mb-8" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in" > <Search className="w-4 h-4 mr-2" /> Smart Tool Selection </div> </div> <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight" > Tool Comparison </h1> <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light" > Compare SaaS tools, AI services, and business solutions. Make informed decisions with our comprehensive analysis and expert insights. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" > <Button > Start Comparing <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button > Get Expert Advice </Button> </div> </div> </div> <div className="text-gray-400 text-sm" >Tools Analyzed</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" > 9 </div> <div className="text-gray-400 text-sm" >Categories</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300" > 4.7+ </div> <div className="text-gray-400 text-sm" >Avg Rating</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300" > 250M+ </div> <div className="text-gray-400 text-sm" >Total Users</div> </div> </div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> > <option value="rating" >Sort by Rating</option> <option value="users" >Sort by Users</option> <option value="name" >Sort by Name</option> </select> </div> </div> </div> </section> Tool Comparison </h2> <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" > Compare features, pricing, and user ratings to find the perfect tools for your business needs. </p> </div> <div className="overflow-x-auto" > <table className="w-full" > <thead> <tr className="border-b border-gray-800" > <th className="text-left py-4 px-6 text-gray-300 font-medium" >Tool</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Category</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Pricing</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Rating</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Users</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Best For</th> <th className="text-left py-4 px-6 text-gray-300 font-medium" >Actions</th> </tr> </thead> <tbody> </td> <td className="py-4 px-6" > <div className="flex space-x-2" > <Button > Visit <ExternalLink className="w-3 h-3 ml-1" /> </Button> <Button > Details </Button> </div> </td> </tr>) ) 
}</tbody> </table> </div> </div>) 
}</div> </section> Detailed Analysis </h2> <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" > Deep dive into each tool's pros, cons, and use cases to make the best decision for your business. </p> </div> </div> </div> </div> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" > <div> <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center" > <Check className="w-4 h-4 mr-1" /> Pros </h4> </li>) ) 
}</ul> </div> <div> <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center" > <X className="w-4 h-4 mr-1" /> Cons </h4> </li>) ) 
}</ul> </div> </div> > Visit Website <ExternalLink className="w-4 h-4 ml-2" /> </Button> </div> </Card>) ) 
}</div> </div> </section> <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden"> <div className="absolute inset-0 bg-[radial-gradient (circle, rgba (255, 255, 255, 0.1) 1px, transparent 1px) ] bg-[size: 20px 20px] opacity-10" /> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8"> text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed"> Our experts can analyze your business needs and recommend the perfect combination of tools to accelerate your growth. </p> <div className=" flex flex-col sm:flex-row gap-6 justify-center"> <Button href=" /contact"variant=" secondary"size=" lg"className=" bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"> Get Expert Consultation <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /saas-marketplace"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl" > Explore All Tools </Button> </div> </div> </section> </>) 
}
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
  Search,Filter,TrendingUp,DollarSign,Users,Star,Check,X,ArrowRight,ExternalLink,Zap,Brain,Globe,Rocket,} from 'lucide-react';import {Search;
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

  );
}
}
}
})}
  )
}
