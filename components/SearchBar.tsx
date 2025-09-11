



=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState, useRef, useEffect } from 'react';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import Link from 'next/link';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SearchResult {
  title: string, description: string
  url: string, type: 'service' | 'page' | 'category'
}
const SearchBar: React.FC = () => {
interface SearchResult {;
  title: string, description: string,;
  url: string, type: 'service' | 'page' | 'category',;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const SearchBar: React.FC = () => {
  const [query, set_query] = useState ('');
  const [results, set_results] = useState < SearchResult[]>([]);
  const [is_open, setIsOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const search_ref = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
;
  // Mock search data - in a real app, this would come from an API;
  const search_data: SearchResult[] = [;
    {
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',
      url: '/micro - saas',
      type: 'category',
    },
    {
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',
  // Mock search data - in a real app, this would come from an API;
  const searchData: SearchResult[] = [;
    {;
      title: 'Micro SaaS Products',;
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',;
      url: '/micro-saas',;
      type: 'category',;
    },;
    {;
      title: 'AI Services',;
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',;
      url: '/ai-services',;
      type: 'category',;
    },;
    {;
      title: 'IT Services',;
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',;
      url: '/it-services',;
      type: 'category',;
    },;
    {;
      title: 'Cloud Cost Guard',;
      description: 'FinOps Assistant for anomaly detection and cost optimization',;
      url: '/services',;
      type: 'service',;
    },;
    {;
      title: 'Contact Us',;
      description: 'Get in touch with our experts for consultation and quotes',;
      url: '/contact',;
      type: 'page',;
    },;
    {;
      title: 'Pricing',;
      description: 'View our transparent pricing for all services',;
      url: '/pricing',;
      type: 'page',;
    },;
  ];
  const handleSearch = async (searchQuery: string) => {;
    if (!searchQuery && searchQuery.trim()) {;
      setResults([]);
      setIsOpen(false);
      return,;
    }
    setIsLoading(true);


  };
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const value = e && e.target.value;
    setQuery(value);
    handleSearch(value),;
  };
  const handleResultClick = () => {;
    setIsOpen(false),;
    setQuery('');
  };
  const handleKeyDown = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === 'Escape') {;
    setIsOpen(false),;
    inputRef && inputRef.current?.blur();
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, []);
  return (
    <div ref={searchRef} className="relative w-full max-w-md">;
      <div className="relative">;
        <input
          ref={inputRef}
          type="text"
          placeholder="Search services, pages..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => query && setIsOpen(true)}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
        />;
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">;
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">;
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />;
          </svg>;
        </div>;
        {isLoading && (;
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">;
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>;
          </div>;
        )}
      </div>;


      {/* Search Results Dropdown */}
      {isOpen && (;
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">;
          {results && results.length > 0 ? (;
            <div className="py-2">;
              {results && results.map((result, index) => (;                <Link
                  key={index}
                  href={result && result.url}
                  onClick={handleResultClick}
;
  const handle_search = async (search_query: string) => {
    if () {) {
  $2
}
      set_results ([]);
      setIsOpen (false);
      return,
    }
    setIsLoading (true);
;
    // Simulate API delay;
    await new Promise (resolve => set_timeout (resolve, 300));
;
    const filtered_results = search_data.filter (item =>;
      item.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      item.description.toLowerCase ().includes (search_query.toLowerCase ()));
;
    set_results (filtered_results);
    setIsOpen (true);
    setIsLoading (false);
  }
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const value = e.target.value;
    set_query (value);
    handle_search (value),
  }
;
  const handleResultClick = () =>: any {
    setIsOpen (false),
    set_query ('');
  }
;
  const handleKeyDown = (e: React.KeyboardEvent) =>: any {
    // Check condition
if ( {) {
  $2
}
    setIsOpen (false),
    input_ref.current?.blur ();
  }
  }
;
  useEffect (() => {
    const handleClickOutside = (event: MouseEvent) =>: any {
      if () {) {
  $2
}
        setIsOpen (false),
      }
    }
;
    document.addEventListener ('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener ('mousedown', handleClickOutside);
    }
  }, []);
;
  return (
    <div ref={search_ref} className="relative w - full max - w-md">;
      <div className="relative">;
        <input;
          ref={input_ref}
          type="text";
          placeholder="Search services, pages...";
          value={query}
          on_change={handleInputChange}
          on_focus={() => query && setIsOpen (true)}
          className="w - full px - 4 py - 2 pl - 10 pr - 4 text - gray - 700 bg - white border border - gray - 300 rounded - lg focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
        />;
        <div className="absolute inset - y-0 left - 0 flex items - center pl - 3">;
          <svg;
            className="w - 5 h - 5 text - gray - 400";
            fill="none";
            stroke="current_color";
            view_box="0 0 24 24";
          >;
            <path;
              stroke_linecap="round";
              stroke_linejoin="round";
              stroke_width={2}
              d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z";
            />;
          </svg>;
        </div>;
        {is_loading && (
          <div className="absolute inset - y-0 right - 0 flex items - center pr - 3">;
            <div className="animate - spin rounded - full h - 4 w - 4 border - b-2 border - blue - 500"></div>;
          </div>)}
      </div>;
      {/* Search Results Dropdown */}
      {is_open && (
        <div className="absolute top - full left - 0 right - 0 mt - 1 bg - white border border - gray - 200 rounded - lg shadow - lg z - 50 max - h-96 overflow - y-auto">;
          {results.length > 0 ? (
            <div className="py - 2">;
              {results.map ((result, index) => (
                <Link;
                  key={index}
                  href={result.url}
                  on_click={handleResultClick}
                  className="block px - 4 py - 3 hover:bg - gray - 50 transition - colors";
                >;
                  <div className="flex items - start space - x-3">;
                    <div className="flex - shrink - 0">;
                      <div className={`w - 2 h - 2 rounded - full mt - 2 ${
                        result.type === 'service' ? 'bg - blue - 500' :;
                        result.type === 'page' ? 'bg - green - 500' : 'bg - purple - 500';
                      }`}></div>;
                    </div>;
                    <div className="flex - 1 min - w-0">;
                      <p className="text - sm font - medium text - gray - 900 truncate">;
                        {result.title}
                      </p>;
                      <p className="text - sm text - gray - 500 truncate">;
                        {result.description}
                      </p>;
                    </div>;
                  </div>;
                </Link>))}
            </div>) : query && !is_loading ? (
            <div className="px - 4 py - 3 text - sm text - gray - 500">;
              No results found for &quot;{query}&quot;
            </div>) : null}
        </div>)}
    </div>);
}
;

=======
};


export default SearchBar;
};

export default SearchBar;
=======export default SearchBar;=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
