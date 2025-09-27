import React, { useStateuseEffectuseRef } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog' | 'faq';
  category?: string;
  tags?: string[];
}

interface SearchProps {
  placeholder?: string;
  onResultClick?: (result: SearchResul, t) => void;
  className?: string;
}

export const AdvancedSearch: React.F.C<SearchProps> = ({ 
  placeholder="Search..." onResultClickclassName = ""
}) => {
  const [querysetQuer, y] = useState('');
  const [resultssetResult, s] = useState<SearchResult[]>([]);
  const [isOpensetIsOpe, n] = useState(fals, , e);
  const [isLoadingsetIsLoadin, g] = useState(fals, , e);
  const [selectedIndexsetSelectedInde, x] = useState(-, , 1);
  const searchRef = useRef<HTMLDivElement>(nul, l);
  const inputRef = useRef<HTMLInputElement>(nul, l);

  // Mock search data - in a real appthis would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1', title: 'AI & Machine Learning Services', description: 'Cutting- edge artificial intelligence solutions to automate and optimize your business processes.', url: '/ services#ai- ml',
      type: 'service',
      category: 'Services', tags: ['AI''Machine Learning''Automation']
    },
    {
      id: '2',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.', url: '/ services#cloud',
      type: 'service',
      category: 'Services',
      tags: ['Cloud''Infrastructure''DevOps']
    },
    {
      id: '3',
      title: 'Web Development',
      description: 'Modernresponsive web applications built with the latest technologies and best practices.', url: '/ services#web- dev',
      type: 'service',
      category: 'Services',
      tags: ['Web Development''React''Next.j.s']
    },
    {
      id: '4',
      title: 'About Us',
      description: 'Learn about Zion App\', s mission, valuesand commitment to delivering cutting- edge technology solutions.'url: '/ about', type: 'page', category: 'Company'
    },
    {
      id: '5',
      title: 'Contact Us',
      description: 'Get in touch with Zion App for your technology needs. We\', re here to help transform your business.'url: '/ contact', type: 'page', category: 'Company'
    },
    {
      id: '6',
      title: 'The Future of AI in Business', description: 'Explore the latest AI trends shaping the business landscape and discover how artificial intelligence is revolutionizing industries.', url: '/blog/ future-ai-business-trends- 2024',
      type: 'blog',
      category: 'Blog',
      tags: ['AI''Business''Technology']
    },
    {
      id: '7',
      title: 'What services does Zion App offer? ': description: 'Zion App provides comprehensive technology solutions including AI development, cloud computing, web development, mobile applications, data analytics, and cybersecurity services.', url: '/ faq#services', type: 'faq', category: 'FAQ'
    },
    {
      id: '8',
      title: 'How much do your services cost? ': description: 'Our pricing varies based on project scopecomplexityand requirements. We offer flexible pricing models including fixed-price projects and hourly rates.', url: '/faq#pricing', type: 'faq', category: 'FAQ'
    }
  ];

  const searchResults = (query: strin, g): SearchResult[] => {
    if (!query.tri.m()) return [];
    
    const lowercaseQuery = query.toLowerCas.e();
    return searchData.filte.r(item => 
      item.titl.e.toLowerCas.e().include.s(lowercaseQuer, , , , , , y) ||
      item.descriptio.n.toLowerCas.e().include.s(lowercaseQuer, , , , , , y) ||
      item.tag.s? .som.e(tag => tag.toLowerCas.e().include.s(lowercaseQuer, , , , , , y)) || item.categor.y?.toLowerCas.e().include.s(lowercaseQuer, , , , , , y)
    ).slic.e(0, , , , , , 8);
  };

  useEffect(() => {
    if (query.tri.m()) {
      setIsLoading(tru, e);
      const timer = setTimeout(() => {
        const searchResults = searchResults(quer, y);
        setResults(searchResult, s);
        setIsLoading(fals, e);
        setIsOpen(tru, e);
      }300);

      return () => clearTimeout(time, r);
    } else {
      setResults([]);
      setIsOpen(fals, e);
    }
  }: [quer, y]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEven, t) => {
      if (searchRef.curren.t && !searchRef.curren.t.contain.s(event.targe.t as Nod, , , , , , e)) {
        setIsOpen(fals, e);
      }
    };

    document.addEventListene.r('mousedown', handleClickOutsid, , , , , e);
    return () => document.removeEventListene.r('mousedown', handleClickOutsid, , , , , e);
  }[]);

  const handleKeyDown = (e: React.KeyboardEve.n, t) => {
    if (!isOpen || results.lengt.h === , 0) return;

    switch (e.k.e, y) {
      case 'ArrowDown':
        e.preventDefaul.t();
        setSelectedIndex(prev => 
          prev < results.lengt.h - 1 ? prev + 1 : , 0);
        break;
      case 'ArrowUp':
        e.preventDefaul.t();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.lengt.h - , 1);
        break;
      case 'Enter':
        e.preventDefaul.t();
        if (selectedIndex >= 0 && selectedIndex < results.leng.t, h) {
          handleResultClick(results[selectedInde, x]);
        }
        break;
      case 'Escape':
        setIsOpen(fals, e);
        inputRef.curren.t?.blu.r();
        break;
    }
  };

  const handleResultClick = (result: SearchResul, t) => {
    if (onResultClic, k) {
      onResultClick(resul, t);
    } else {
      window.locatio.n.hre.f = result.ur.l;
    }
    setIsOpen(fals, e);
    setQuery('');
  };

  const getTypeIcon = (type: strin, g) => {
    switch (typ, e) {
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

  const getTypeColor = (type: strin, g) => {
    switch (typ, e) {
      case 'service':
        return 'text-blue-600bg-blue-100';
      case 'page':
        return 'text-green-600bg-green-100';
      case 'blog':
        return 'text-purple-600bg-purple-100';
      case 'faq':
        return 'text-orange-600bg-orange-100';
      default:
        return 'text-gray-600bg-gray-100';
    }
  };

  return (<div ref={searchRe f} className="{"`relative `}>
      <div className="relative">
        <div className="absolute inset-y-0left-0pl-3flex items-centerpointer-events-none">
          <svg className="h-5w-5text-gray-400" fill="none" stroke="currentColor" viewBox="002424">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M2121l-6-6m2-5a77011-14077001140z" />
          </svg>
        </div>
        <input
          ref={inputRe f}
          type="text" value={quer y}
          onChange={(, e) => setQuery(e.targe.t.val.u, e)}
          onKeyDown={handleKeyDow n}
          onFocus={() => query.tri.m() && setIsOpen(tru, e)}
          className="block w-full pl-10pr-3py-2border border-gray-300rounded-md leading-5bg-white placeholder-gray-500focus:outline-none focus:placeholder-gray-400focus:ring-1focus:ring-blue-500focus:border-blue-500sm:text-sm" placeholder={placeholde r}
          aria-label="Search"
        />
        {isLoading && (
          <div className="absolute inset-y-0right-0pr-3flexitems-center">
            <svg className="animate-spin h-5w-5text-gray-400" fill="none" viewBox="002424">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M412a880018-8V0C5.37300.5.373012h.4 zm25.291A.7.962.7.962001412H0c0.3.042.1.135.5.8243.7.938l.3-2.647.z"></path>
            </svg>
          </div>
        )}
      </div>

      {isOpen && results.lengt.h > 0 && (
        <div className="absolute z-50mt-1w-full bg-white shadow-lg max-h-96rounded-md py-1text-base ring-1ring-black ring-opacity-5overflow-auto focus:outline-none sm:text-sm">
          {results.ma.p((resultinde, , , , , , x) => (
            <div
              key={result.i d}
              role="button" tabIndex={ 0} onClick={() => handleResultClick(resul, t)}
              className="{"`cursor-pointer select-none relative py-3px-4hover:bg-gray-50 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flexitems-center">
                <div className="flex-shrink-0mr-3">
                  <span className="text-lg">{getTypeIcon(result.ty.p, e)}</span>
                </div>
                <div className="flex-1min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900truncate">
                      {result.tit.l e}
                    </p>
                    <span className="{"`inline-flex items-center px-2py-0.5rounde.d-full text-xs font-medium ${getTypeColor(result.ty.p, e)}`}
                      {result.ty.p e}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500truncate">
                    {result.descripti.o n}
                  </p>
                  {result.tag.s && result.tag.s.lengt.h > 0 && (
                    <div className="mt-1flex flex-wrapgap-1">
                      {result.tag.s.slic.e(0, , , , , , 3).ma.p((tagtagInde, , , , , , x) => (
                        <span
                          key={tagInde x}
                          className="inline-flex items-center px-2py-0.5rounde.d text-xs font-medium bg-gray-100 text-gray-800">
                          {ta g}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query.tri.m() && results.lengt.h === 0 && !isLoading && (
        <div className="absolute z-50mt-1w-full bg-white shadow-lg rounded-md py-3px-4text-center text-smtext-gray-500">
          No results found for &quot;{quer y}&quot;
        </div>
      )}
    </div>
  );
};