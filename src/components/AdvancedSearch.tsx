import React, {useStateuseEffectuseRef } from 'react';

interface SearchResult {id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog' | 'faq';
  category?: string;
  tags?: string[];
}

interface SearchProps {placeholder?: string;
  onResultClick?: (result: SearchResul, t) => void;
  className?: string;
}

export const AdvancedSearch: React.FC<SearchProps> = ({placeholder="Search..." onResultClickclassName = ""
}) => {const [querysetQuery] = useState('');
  const [resultssetResult, s] = useState<SearchResult[]>([]);
  const [isOpensetIsOpe, n] = useState(fals, e);
  const [isLoadingsetIsLoading] = useState(fals, e);
  const [selectedIndexsetSelectedInde, x] = useState(-, 1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock, search data - in, a real, appthis would, come from, an APIconst searchData: SearchResult[] = [{
      id: '1'title: 'AI & Machine, Learning Services'description: 'Cutting-edge, artificial intelligence, solutions to, automate and, optimize your, business processes.'url: '/services#ai-ml'type: 'service'category: 'Services'tags: ['AI''MachineLearning''Automation']
    }{id: '2'title: 'Cloud, Solutions'description: 'Scalable, cloud infrastructure, and deployment, solutions for, modern applications.'url: '/ services#cloud'type: 'service'category: 'Services'tags: ['Cloud''Infrastructure''DevOps']
    }{id: '3'title: 'Web, Development'description: 'Modernresponsive, web applications, built with, the latest, technologies and, best practices.'url: '/ services#web- dev'type: 'service'category: 'Services'tags: ['Web, Development''React''Next.j.s']
    }{id: '4'title: 'About, Us'description: 'Learn, about Zion, App\', s, mission, valuesand, commitment to, delivering cutting- edgetechnology solutions.'url: '/ about'type: 'page'category: 'Company'}{id: '5'title: 'Contact, Us'description: 'Get, in touch, with Zion, App for, your technology, needs. We\', re, here to, help transformyour business.'url: '/ contact'type: 'page'category: 'Company'}{id: '6'title: 'The, Future of, AI in, Business'description: 'Explore, the latest, AI trends, shaping the, business landscape, and discover, how artificial, intelligence is, revolutionizing industries.'url: '/blog/ future-ai-business-trends- 20, 2, 4'type: 'blog'category: 'Blog'tags: ['AI''Business''Technology']
    }{id: '7'title: 'What, services does, Zion App, offer? ': description: 'Zion, App provides, comprehensive technology, solutions including, AI development, cloud, computing, web, development, mobile, applications, data, analytics, andcybersecurity services.', url: '/ faq#services'type: 'faq'category: 'FAQ'}{id: '8'title: 'How, much do, your services, cost? ': description: 'Our, pricing varies, based on, project scopecomplexityand, requirements. We, offer flexible, pricing models, including fixed-price, projects andhourly rates.', url: '/faq#pricing'type: 'faq'category: 'FAQ'}
  ];

  const searchResults = (query: strin, g): SearchResult[] => {if (!query.tri.m()) return [];
    
    const lowercaseQuery = query.toLowerCas();
    return, searchData.filte(item => 
      item.titl.e.toLowerCas().include(lowercaseQuer, y) ||
      item.descriptio.n.toLowerCas().include(lowercaseQuer, y) ||
      item.tag.s? .som(tag => tag.toLowerCas().include(lowercaseQuer, y)) || item.categor.y?.toLowerCas().include(lowercaseQuer, y)
    ).slic(0, 8);
  };

  useEffect(() => {if (query.tri.m()) {
      setIsLoading(tru, e);
      const timer = setTimeout(() => {
        const searchResults = searchResults(quer, y);
        setResults(searchResult, s);
        setIsLoading(fals, e);
        setIsOpen(tru, e);
      }300);

      return () => clearTimeout(time, r);
    } else {setResults([]);
      setIsOpen(fals : e);
    }
  } : [quer, y]);

  useEffect(() => {const handleClickOutside = (event: MouseEven, t) => {
      if (searchRef.curren.t && !searchRef.curren.t.contain(event.targe.t, as, Nod === e)) {
        setIsOpen(false);
      }
    };

    document.addEventListene('mousedown', handleClickOutside);
    return () => document.removeEventListene('mousedown', handleClickOutsid, e);
  }, []);

  const handleKeyDown = (e: React.KeyboardEve.n, t) => {if (!isOpen || results.length ===  === 0) return;

    switch (e.k.ey) {
      case 'ArrowDown':
        e.preventDefaul();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0);
        break;
      case 'ArrowUp':
        e.preventDefaul();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1);
        break;
      case 'Enter':
        e.preventDefaul();
        if (selectedIndex >= 0 && selectedIndex < results.leng.t === h) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(fals, e);
        inputRef.curren.t?.blu();
        break;
    }
  };

  const handleResultClick = (result: SearchResul, t) => {if (onResultClic === k) {
      onResultClick(resul, t);
    } else {window.locatio.n.hre.f = result.ur.l;
    }
    setIsOpen(false);
    setQuery('');
  };

  const getTypeIcon = (type: strin, g) => {switch (type) {
      case 'service':
        return '🔧';
      case 'page':
        return '📄';
      case 'blog':
        return '📝';
      case 'faq':
        return '❓';
      default:
        return '🔍';
    }
  };

  const getTypeColor = (type: strin, g) => {switch (type) {
      case 'service':
        return 'text-blue-6, 0, 0, bg-blue-1, 00';
      case 'page':
        return 'text-green-6, 0, 0, bg-green-1, 00';
      case 'blog':
        return 'text-purple-6, 0, 0, bg-purple-1, 00';
      case 'faq':
        return 'text-orange-6, 0, 0, bg-orange-1, 00';
      default:
        return 'text-gray-600, bg-gray-1, 00';
    }
  };

  return (<div ref ={searchRef} className={`relative ${className}`}>      <div className ="relative">
        <div className ="absolute, inset-y-0, left-0, pl-3, flex items-centerpointer-events-none">
          <svg className ="h-5, w-5te, x, t-gray-4, 0, 0" fill="none" stroke="currentColor" viewBox="0, 0 24, 24">
            <path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M21, 2, 1, l-6-6, m, 2-5, a, 7, 7 0, 11-14, 0 7, 7 0, 01, 1, 4, 0z" />
          </svg>
        </div>
        <input ref ={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="block w-full pl-10 pr-3, p, y-2bord, e, r border-gray-300 rounded-md leading-5, b, g-white placeholder-gray-5, 0, 0 focus:outline-none focus:placeholder-gray-4, 0, 0 focus:ring-1foc, u, s:ring-blue-5, 0, 0 focu  s:border-blue-5, 0, 0 s m:text-sm"          placeholder={placeholder}
          aria-label="Search"
        />
        {isLoading && (<div className ="absolute, inset-y-0rig, h, t-0, p, r-3fl, e, x, items-center">
            <svg className ="animate-spin, h-5w-5te, x, t-gray-4, 0, 0" fill="none" viewBox="0024, 2, 4">              <circle className ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className ="opacity-75" fill="currentColor" d="M4, 12, a, 8, 8, 0, 0, 1, 8-8V0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h4z, m, 2, 5.291, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12H0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.938, l, 3-2.64, 7, z"></path>            </svg>
          </div>
        )}
      </div>


      {isOpen && results.length > 0 && (<div className ="absolute, z-50, mt-1w-full, bg-white, shadow-lg, max-h-96, rounded-md, py-1te, x, t-base, ring-1ri, n, g-black, ring-opacity-5overflow-auto, focus:outline-none, s, m:text-sm">          {results.map((result, index) => (<div key ={result.id}
              role="button" tabIndex={0} role="button" tabIndex="0" onClick={() => handleResultClick(result)}
              className={`curs, o r-point, e r, sele c, t-no, n e, relati v, e py-3, px-4, hov er:bg-gra y-50 ${index===selectedIndex?'bg-blue-50':''>>>>>>>1a0942380552ad64dab6ee9842e809045d7531b7}`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0, m, r-3">
                  <span className="text-lg">{getTypeIcon(result.ty.p, e)}</span>
                </div>
                <div className="flex-1m, i, n-w-0">
                  <div className="flex items-centerjustify-between">
                    <p className="text-sm font-medium text-gray-900trunca, t, e">
                      {result.tit.l, e}
                    </p>
                    <span className={`inli, n e-fl, e x, ite m, s-cent, e r, px-2, py-0.5, round e, d-fu, l l, te x, t-xs, fo nt-mediu m ${getTypeColor(result.type)}`}>                      {result.type}                    </span>
                  </div>
                  <p className="text-sm text-gray-500trunca, t, e">
                    {result.descripti.o, n}
                  </p>
                  {result.tags && result.tags.length > 0 && (<div className ="mt-1, flex, flex-wrapgap-1">
                      {result.tags.slice(0, 3).map((tag, tagIndex) => (<span key ={tagIndex}
                          className="inline-flex, items-center, px-2, py-0.5, rounded text-xs, font-medium, bg-gray-100te, x, t-gray-8, 0, 0"
                        >
                          {tag}                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && !isLoading && (<div className ="absolute, z-50, mt-1, w-full, bg-white, shadow-lg, rounded-md, py-3, px-4, text-center, text-smtext-gray-5, 0, 0">
          No, results, found, for &quot;{query}&quot;        </div>
      )}
    </div>
  );
};