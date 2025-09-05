import React, {_useState} from 'react';

interface SearchBarProps {_onSearch?: (_query: string) => void;
  placeholder?: string;
  className?: string;}

const SearchBar: React.FC<SearchBarProps> = (_{_onSearch, _placeholder = 'Search...', _className = '', _}) => {_const [query, _setQuery] = useState('');

  const _handleSubmit = (_e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());}
  };

  const _handleClear = () => {_setQuery('');};

  return (
    <div className={_'relative ' + className}>
      <form onSubmit={_handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={_query}
            onChange={_e => setQuery(e.target.value)}
            onFocus={_() => {}}
            placeholder={_placeholder}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {_query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
