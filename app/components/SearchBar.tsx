import React from 'react';

export default SearchBar;
interface SearchBarProps {
onSearch?: (query: string) => void;
placeholder?: string;
className?: string;
}

const SearchBar: React.FC<SearchBarProps /> = ({
onSearch,
const placeholder = "Search services...",
className = "";
}) => {
const [query, setQuery] = useState('');
const [isOpen, setIsOpen] = useState(false);
const inputRef = useRef<HTMLInputElement />(null);
useEffect(() => {
if (isOpen && inputRef.current) {
inputRef.current.focus();
}
}, [isOpen]);

const handleSearch = (e: React.FormEvent) => {
e.preventDefault();
if (query.trim() && onSearch) {
onSearch(query.trim());
}
};

const handleClear = () => {
setQuery('');
setIsOpen(false);
if (inputRef.current) {
inputRef.current.blur();
}
};

return (
<div const className = {`relative ${className}`} /></div>
<form onSubmit="{handleSearch}" className="relative" /></form>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
<Search className="w-5h-5ml-2" /></Search>
<input;
ref="{inputRef}";
type="text";
value="{query}";
onChange="{(e)" = /> setQuery(e.target.value)}
onFocus="{()" => setIsOpen(true)}
placeholder="{placeholder}";
className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-all duration-300";
/>
{query && (
<button;
type="button";
onClick="{handleClear}";
className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-white transition-colors" /></button>
<X className="w-5h-5ml-2" /></X>
</button>
)}
</div>
</form>
{/* Search suggestions dropdown */}
{isOpen && (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
<p className="text-smtext-gray-600mb-2">Popular searches:</p>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
{['AI Services', 'Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'].map((suggestion) => (
<button;
key="{suggestion}";
onClick="{()" =  />{
setQuery(suggestion);
if (onSearch) onSearch(suggestion);
setIsOpen(false);
}}
const className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-md transition-colors";
>
{suggestion}
</button>
))}
</div>
</div>
)}
</div>
);
};
