


interface SearchResult {
  }
  "title": string;

interface SearchResult {
  }
  "title": string;
  "description": string;
  "url": string;
  "type": 'service' | 'page' | 'category';'

}

const "SearchBar": React.FC = () => {interface SearchResult {
  }
  "title": string, "description": string,"url": string, "type": 'service' | 'page' | 'category;'

}

const "SearchBar": React.FC = () => {const [query, setQuery] =;
  }
  useState('');'
  const [results, setResults] = useState<SearchResult[]>([])const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'


interface SearchResult {
  title: string
  description: string
  url: string
  type: 'service' | 'page' | 'category'
}


const SearchBar: React.FC = () => {


    {
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',
      url: '/micro-saas',

      type: 'category'

    },
    {
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',


      type: 'category',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',



    {
      title: 'Cloud Cost Guard',
      description: 'FinOps Assistant for anomaly detection and cost optimization',
      url: '/services',
      type: 'service',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our experts for consultation and quotes',
      url: '/contact',
      type: 'page',
    },
    {
      title: 'Pricing',
      description: 'View our transparent pricing for all services',
      url: '/pricing',
      type: 'page',
    },
  ];



    );

    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);


    setQuery(value);
    handleSearch(value);

  }

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery(');
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);

                        {result.description}
                      </p>;
                    </div>;
                  </div>;
                </Link>;
              ))}

            </div>;
          ) : query && !isLoading ? (<div className=\"px-4 py-3 text-sm text-gray-500\"    />;

              No results found for &quot;{query}&quot;
            </div>;
          ) : null}
        </div>;
      )}




export default SearchBar;

interface SearchResult  {title: string, description: string;}
  url: string, type: 'service' | 'page' | 'category';}
import { useState, useEffect, useCallback, useMemo  } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;}
  className?: string;}
}

const SearchBar: React.FC<SearchBarProps    /> = ({ onSearch,placeholder = 'Search...',className = '';}
   }) => {


const [query, setQuery]  = useState('');
  const handleSubmit = (e.preventDefault()if (onSearch && query.trim()) {onSearch(query.trim(),) => {
  return $3;}
}
}
    {title: 'Contact Us';
      description: 'Get in touch with our experts for consultation and quotes';
      url: '/contact';}
      type: 'page';}
    }
    {title: 'Pricing';
      description: 'View our transparent pricing for all services';
      url: '/pricing';}
      type: 'page';}
    }
  ];
    )setResults(filteredResults)setIsOpen(true)setIsLoading(false)}

const handleClear = (setQuery('');) => {
  return $3;}
}
  return (<div className={'relative ' + className}    />;
      <form onSubmit={handleSubmit} className=\"relative\"    />;
        <div className=\"relative\"    />;
          <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4\"    />;
          <input;
            type=\'text\';
    </div    />
  )
};








