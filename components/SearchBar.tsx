import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from 'next/link';

interface SearchResult { 
  title: string; 
  description: string; 
  url: string; 
  type: 'service' | 'page' | 'category';
  category?: strin,g;,;
}

const searchData: SearchResult[] = [;
  {";
    title: "Micro SaaS Product,s,",";
    description: "120+ innovative micro SaaS solutions including Cloud Cost Gua,r,d, Smart Invoice Processing, and AI-Powered Code Review",";
    url: "/micro-saa,s,",";
    type: "servic,e,",";
    category: "Service,s", },;
  {";
    title: "AI Service,s,",";
    description: "80+ advanced AI services including healthcare diagnosti,c,s, cybersecurity threat detection, and smart manufacturing",";
    url: "/ai-service,s,",";
    type: "servic,e,",";
    category: "Service,s", },;
  {";
    title: "IT Service,s,",";
    description: "80+ comprehensive IT solutions including enterprise integrati,o,n, high-performance computing, and IoT platforms",";
    url: "/it-service,s,",";
    type: "servic,e,",";
    category: "Service,s", },;
  {";
    title: "About U,s,",";
    description: "Learn about our compa,n,y, mission, and team",";
    url: "/abou,t,",";
    type: "pag,e", },;
  {";
    title: "Contac,t,",";
    description: "Get in touch with our tea,m,",";
    url: "/contac,t,",";
    type: "pag,e", },;
  {";
    title: "Pricin,g,",";
    description: "View our transparent pricing for all service,s,",";
    url: "/pricin,g,",";
    type: "pag,e", },;
  {";
    title: "FA,Q,",";
    description: "Frequently asked questions about our services and solution,s,",";
    url: "/fa,q,",";
    type: "servic,e,",";
    category: "Suppor,t", }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      retur,n;, }

    const filtered = searchData.filter(item =>;
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    );
    setResults(filtered);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(valu,e);,;
};
  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blu,r();, }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(fals,e);, }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (";
    <div className="relative w-full max-w-md" ref={searchRef}>";
      <div className="relative">;
        <input";
          type="text"";
          placeholder="Search services...";
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          ref={inputRef}";
          className="w-full px-4 py-2 pl-10 pr-4 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400";
        />";
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">";
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">";
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidt,h={,2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />;
          </svg>;
        </div>;
      </div>;

      {isOpen && query.length > 2 && results.length > 0 && (";
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">;
          {results.map((result, index) => (;
            <Link;
              key={index}
              href={result.url}
              onClick={handleResultClick}";
              className="block px-4 py-3 hover: bg-slate-700/50 border-b border-white/10 last:border-b-0";
            >";
              <div className="flex items-start space-x-3">";
                <div className="flex-1 min-w-0">";
                  <p className="text-white font-medium truncate">{result.tit,l,e}</p>";
                  <p className="text-gray-300 text-sm truncate">{result.description}</p>;
                  {result.category && (";
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">;
                      {result.category}
                    </span>;
                  )}
                </div>";
                <div className="flex-shrink-0">";
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">";
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />;
                  </svg>;
                </div>;
              </div>;
            </Link>;
          ))}
        </div>;
      )}

      {isOpen && query.length > 2 && results.length === 0 && (";
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 p-4">";
          <p className="text-slate-300 text-center">No results found for "{query}"</p>;
        </div>;
      )}
    </div>;
  );
}

}
</div></div></div></div></div></div></div></div>"