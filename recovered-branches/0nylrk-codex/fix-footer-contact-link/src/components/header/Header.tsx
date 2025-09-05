
import React from 'react';

export interface HeaderProps {_hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;};
}

export function Header(_{_hideLogin = false, _customLogo, _customTheme}: HeaderProps) {_const { user} = useAuth();
  const {_isWhitelabel, _primaryColor} = useWhitelabel();
  const _navigate = useNavigate();
  const [query, setQuery] = useState("");
  const _searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const _effectiveTheme = customTheme || (isWhitelabel ? {_primaryColor, _backgroundColor: '#0f172a', _// Default dark background
    textColor: '#ffffff', _// Default light text} : undefined);
  
  const _headerStyle = effectiveTheme ? {_backgroundColor: effectiveTheme.backgroundColor, _color: effectiveTheme.textColor, _borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={_headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={_customLogo} customColor={_effectiveTheme?.primaryColor} />

        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={_handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            searchSuggestions={_searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          {_!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  );
}
