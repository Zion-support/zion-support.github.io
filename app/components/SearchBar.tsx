<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useState, useRef, useEffect} from 'react';
import { X } from 'lucide-react';
interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}
const SearchBar: React.FC<SearchBarProps /> = ({
  onSearch,
  const placeholder = "Search services...",
  className = ""
}) => {;
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement />(null);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };
  const handleClear = () => {;
    setQuery('');
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
