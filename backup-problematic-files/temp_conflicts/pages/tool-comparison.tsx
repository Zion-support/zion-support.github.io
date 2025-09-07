import React from 'react',;''
import Head from 'next/head',;''
import Card from '../components/ui/Card',;''
import Button from '../components/ui/Button',;'
import { ;
  Search,;
  Filter, ;
  TrendingUp, ;
  DollarSign, ;
  Users, ;
  Star,;
  Check,;
  X,;
  ArrowRight,;
  ExternalLink,;
  Zap,;
  Brain,;
  Globe,;
  Rocket;'
} from 'lucide-react',;'
;
export default function ToolComparisonPage() {;'
  const [searchTerm, setSearchTerm] = React.useState(''),;''
  const [selectedCategory, setSelectedCategory] = React.useState('All'),;''
  const [sortBy, setSortBy] = React.useState('rating'),;'
;
  const allTools = [;
    // AI Tools;
    {;'
      name:'ChatGPT',;''
      category:'AI Assistant',;''
      pricing:'Free - $20/month',;'
      rating:4.8,;'
      users:'100M+',;''
      bestFor:'Content creators, developers, researchers',;']'
      pros:['Powerful capabilitiesEasy to use', 'Regular updatesGood free tier'],;''
      cons:['Sometimes inaccurateLimited context', 'Privacy concerns'],;''
      website:'https://chat.openai.com',;''
      icon:<Brain className="w-6 h-6" />,;"
</Brain>"
      icon:<Zap className="w-6 h-6" />,;"
</Zap>"
      icon:<Brain className="w-6 h-6" />,;"
</Brain>"
      icon:<Zap className="w-6 h-6" />,;"
</Zap>"
      icon:<Globe className="w-6 h-6" />,;"
</Globe>"
      icon:<DollarSign className="w-6 h-6" />,;"
</DollarSign>"
      icon:<TrendingUp className="w-6 h-6" />,;"
</TrendingUp>"
      icon:<Users className="w-6 h-6" />,;"
</Users>"
      icon:<Globe className="w-6 h-6" />,;"
</Globe>
    <>;
      <Head>;
</Head>
        <title>Tool Comparison - Zion Tech Group</title>;"
        <meta name="description" content="Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison." />;"
</meta>"
        <meta property="og:title" content="Tool Comparison - Zion Tech Group" />;"
</meta>"
        <meta property="og:description" content="Comprehensive comparison of SaaS tools and AI services to help you make informed decisions." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      </Head>;"
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;"
</section>"
        <div className="absolute inset-0">;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />;"
</div>
        </div>;"
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />;"
</div>"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>"
          <div className="mb-20 animate-fade-in">;"
</div>"
            <div className="mb-8">;"
</div>"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in">;"
</div>"
                <Search className="w-4 h-4 mr-2" />;"
</Search>
              </div>;
            </div>;"
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">;"
</h1>
            </h1>;"
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;"
</div>
              <Button;"
                href="#comparison";""
                size="lg";""
                className="animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40";""
                style={{ animationDelay:'0.2s' }}'
              >;
</Button>'
                <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
              </Button>;
              <Button;"
                href="/contact";""
                variant="outline";""
                size="lg";""
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5";""
                style={{ animationDelay:'0.4s' }}'
              >;
</Button>
              </Button>;
            </div>;
          </div>;'
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay:'0.6s' }}>;'
</div>'
            <div className="text-center group">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">;"
</div>
              </div>;"
              <div className="text-gray-400 text-sm">Tools Analyzed</div>;"
            </div>;"
            <div className="text-center group">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">;"
</div>
              </div>;"
              <div className="text-gray-400 text-sm">Categories</div>;"
            </div>;"
            <div className="text-center group">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;"
</div>
              </div>;"
              <div className="text-gray-400 text-sm">Avg Rating</div>;"
            </div>;"
            <div className="text-center group">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;"
</div>
              </div>;"
              <div className="text-gray-400 text-sm">Total Users</div>;"
            </div>;
          </div>;
        </div>;
      </section>;"
      <section className="py-16 bg-gray-900">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;"
</div>"
            <div className="relative flex-1 max-w-md">;"
</div>"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;"
</Search>
              <input;"
                type="text";""
                placeholder="Search tools, categories, or use cases...";"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
            </div>;"
            <div className="flex flex-wrap gap-2">;"
</div>
                <button;
                  key={category}
                  onClick={() => setSelectedCategory(category)}
</button>
                </button>;
            </div>;"
            <div className="flex items-center space-x-2">;"
</div>"
              <Filter className="w-5 h-5 text-gray-400" />;"
</Filter>
              <select;
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
</select>"
                <option value="rating">Sort by Rating</option>;""
                <option value="users">Sort by Users</option>;""
                <option value="name">Sort by Name</option>;"
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;"
      <section id="comparison" className="py-24 bg-black">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="overflow-x-auto">;"
</div>"
            <table className="w-full">;"
</table>
              <thead>;
</thead>"
                <tr className="border-b border-gray-800">;"
</tr>"
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Tool</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Category</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Pricing</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rating</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Users</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Best For</th>;""
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Actions</th>;"
                </tr>;
              </thead>;
              <tbody>;
</tbody>"
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">;"
</tr>"
                    <td className="py-4 px-6">;"
</td>"
                      <div className="flex items-center space-x-3">;"
</div>
                        <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool.color}`}>;
</div>
                        </div>;
                        <div>;
</div>"
                          <div className="font-semibold text-white">{tool.name}</div>;"
                        </div>;
                      </div>;
                    </td>;"
                    <td className="py-4 px-6">;"
</td>"
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">;"
</span>
                      </span>;
                    </td>;"
                    <td className="py-4 px-6">;"
</td>
                      <span className={`font-medium ${getPricingColor(tool.pricing)}`}>;
</span>
                      </span>;
                    </td>;"
                    <td className="py-4 px-6">;"
</td>"
                      <div className="flex items-center space-x-1">;"
</div>"
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;"
</Star>"
                        <span className="text-white">{tool.rating}</span>;"
                      </div>;
                    </td>;"
                    <td className="py-4 px-6 text-gray-300">{tool.users}</td>;""
                    <td className="py-4 px-6">;"
</td>"
                      <div className="max-w-xs text-sm text-gray-400">{tool.bestFor}</div>;"
                    </td>;"
                    <td className="py-4 px-6">;"
</td>"
                      <div className="flex space-x-2">;"
</div>
                        <Button;
                          href={tool.website}"
                          variant="outline";""
                          size="sm";""
                          className="text-xs";"
                        >;
</Button>"
                          <ExternalLink className="w-3 h-3 ml-1" />;"
</ExternalLink>
                        </Button>;
                        <Button;"
                          href={`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}''
                          variant="ghost";""
                          size="sm";""
                          className="text-xs";"
                        >;
</Button>
                        </Button>;
                      </div>;
                    </td>;
                  </tr>;
              </tbody>;
            </table>;
          </div>;"
            <div className="text-center py-20">;"
</div>"
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />;"
</Search>"
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>;""
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>;"
            </div>;
        </div>;
      </section>;"
      <section className="py-24 bg-gray-900">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;"
</div>
              <Card;
                key={index}"
                className="group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1";"
                style={{ animationDelay:`${index * 0.1}s` }}
              >;
</Card>"
                <div className="flex items-start space-x-4 mb-4">;"
</div>
                  <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>;
</div>
                  </div>;"
                  <div className="flex-1">;"
</div>"
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                    </h3>;"
                    <div className="flex items-center space-x-4 text-sm text-gray-400">;"
</div>"
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{tool.category}</span>;""
                      <div className="flex items-center space-x-1">;"
</div>"
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;"
</Star>
                        <span>{tool.rating}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;"
                <div className="mb-4">;"
</div>"
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>;""
                  <p className="text-sm text-gray-400">{tool.bestFor}</p>;"
                </div>;"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">;"
</div>
                  <div>;
</div>"
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">;"
</h4>"
                      <Check className="w-4 h-4 mr-1" />;"
</Check>
                    </h4>;"
                    <ul className="space-y-1">;"
</ul>"
                        <li key={proIndex} className="text-xs text-gray-400 flex items-start">;"
</li>"
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />;"
</span>
                        </li>;
                    </ul>;
                  </div>;
                  <div>;
</div>"
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">;"
</h4>"
                      <X className="w-4 h-4 mr-1" />;"
</X>
                    </h4>;"
                    <ul className="space-y-1">;"
</ul>"
                        <li key={conIndex} className="text-xs text-gray-400 flex items-start">;"
</li>"
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />;"
</span>
                        </li>;
                    </ul>;
                  </div>;
                </div>;"
                <div className="flex items-center justify-between">;"
</div>
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>;
</span>
                  </span>;
                  <Button;
                    href={tool.website}"
                    variant="outline";""
                    size="sm";""
                    className="group-hover:border-purple-500 group-hover:text-purple-400";"
                  >;
</Button>"
                    <ExternalLink className="w-4 h-4 ml-2" />;"
</ExternalLink>
                  </Button>;
                </div>;
              </Card>;
          </div>;
        </div>;
      </section>;"
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">;"
</section>"
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />;"
</div>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">;"
</div>"
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">;"
</h2>
          </h2>;"
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">;"
</p>
          </p>;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;"
</div>
            <Button;"
              href="/contact";""
              variant="secondary";""
              size="lg";""
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl";"
            >;
</Button>"
              <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
            </Button>;
            <Button;"
              href="/saas-marketplace";""
              variant="outline";""
              size="lg";""
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl";"
            >;
</Button>
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}"