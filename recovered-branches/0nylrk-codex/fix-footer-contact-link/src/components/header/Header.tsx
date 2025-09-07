
import { Link  } from 'react-router-dom';''
import { Logo  } from './Logo';''
import { UserMenu  } from './UserMenu';''
import { LanguageSelector  } from './LanguageSelector';''
import { MainNavigation  } from '@/layout/MainNavigation';''
import { useAuth  } from '@/hooks/useAuth';''
import { useWhitelabel  } from '@/context/WhitelabelContext';''
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",""
import { generateSearchSuggestions } from "@/data/marketplaceData",""
import { useNavigate } from "react-router-dom";""
import { useState } from "react";""
import {Link} from 'react-router-dom';''
import {Logo} from './Logo';''
import {UserMenu} from './UserMenu';''
import {LanguageSelector} from './LanguageSelector';'
  // If we have a white-label tenant and no specific customTheme is provided;'
  // use the tenant's primary color;'
  const effectiveTheme = customTheme || (isWhitelabel ? {;
'
import React from 'react';')
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();'
  const [query, setQuery] = useState("");"
  const searchSuggestions = generateSearchSuggestions();
    primaryColor;"
    backgroundColor: '#0f172a', // Default dark background;''
    textColor: '#ffffff', // Default light text;'
  } : undefined);

'
import React from 'react',''
import { Link } from 'react-router-dom',''
import { Logo } from './Logo',''
import { UserMenu } from './UserMenu',''
import { LanguageSelector } from './LanguageSelector',''
import { MainNavigation } from '@/layout/MainNavigation',''
import { useAuth } from '@/hooks/useAuth',''
import { useWhitelabel } from '@/context/WhitelabelContext',''
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",""
import { generateSearchSuggestions } from "@/data/marketplaceData",""
import { useNavigate } from "react-router-dom",""
import { useState } from "react","
export interface HeaderProps {
  // TODO: Implement
}
  hideLogin?: boolean,
  customLogo?: string,

export interface HeaderProps {
  // TODO: Implement
}
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {

    primaryColor: string;,
  backgroundColor: string;
    textColor: string;
  }
}



export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");"
  const searchSuggestions = generateSearchSuggestions();
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");"
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;"
  // use the tenant's primary color;'
  const effectiveTheme = customTheme |(isWhitelabel ? {
    primaryColor;'
    backgroundColor: '#0f172a', // Default dark background;''
    textColor: '#ffffff', // Default light text;')
  } : undefined);
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),'
  const [query, setQuery] = useState(""),"
  const searchSuggestions = generateSearchSuggestions(),
  
  // If we have a white-label tenant and no specific customTheme is provided,"
  // use the tenant's primary color;'
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,'
    backgroundColor: '#0f172a', // Default dark background;''
    textColor: '#ffffff', // Default light text;')
  } : undefined),
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor;,
  color: effectiveTheme.textColor;
    borderColor: `${effectiveTheme.primaryColor}20`

  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme && effectiveTheme.backgroundColor,;
    color: effectiveTheme && effectiveTheme.textColor,;
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (query && query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`);'
      setQuery("");"
    }

  return (
    <header;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md""
      style={headerStyle}>;
</header>"
      <div className="container flex h-16 items-center px-4 sm:px-6">;"
</div>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
</Logo>
"
        <div className="ml-6 flex-1">;"
</div>
          <MainNavigation />;
</MainNavigation>
        </div>;"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;"
</form>
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

          {!hideLogin && <UserMenu />}
</EnhancedSearchInput>
        </div>
      </div>
    </header>
    <header;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md""
      style={headerStyle}
    >
</header>"
      <div className="container flex h-16 items-center px-4 sm:px-6">"
</div>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
</Logo>"
        <div className="ml-6 flex-1">"
</div>
          <MainNavigation />
</MainNavigation>
        </div>"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">"
</form>
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

          />;
</EnhancedSearchInput>
        </form>;"
        <div className="flex items-center gap-2">;"
</div>
          <LanguageSelector />;
</LanguageSelector>
        </form>;"
        <div className="flex items-center gap-2">;"
</div>
          <LanguageSelector />;
</LanguageSelector>



          {!hideLogin && <UserMenu />}
</UserMenu>
        </div>
      </div>
    </header>
    <header;"
      className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md";"
      style={header_style}
    >;
</header>"
      <div className="container flex h - 16 items - center px - 4 sm:px - 6">;"
</div>
        <Logo custom_logo={custom_logo} custom_color={effective_theme?.primary_color} />;
</Logo>"
        <div className="ml - 6 flex - 1">;"
</div>
          <MainNavigation />;
</MainNavigation>
        </div>;"
        <form on_submit={handle_submit} className="hidden md:block w - 64 mx - 4">;"
</form>
          <EnhancedSearchInput;
            value={query}
            on_change={set_query}
            search_suggestions={search_suggestions}
          />;
</EnhancedSearchInput>
        </form>;"
        <div className="flex items - center gap - 2">;"
</div>
          <LanguageSelector />;
</LanguageSelector>
          {!hide_login && <UserMenu />}
</UserMenu>
        </div>;
      </div>;)
    </header>);
    <header ;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";"
      style={headerStyle}
    >;
</header>"
      <div className="container flex h-16 items-center px-4 sm:px-6">;"
</div>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
</Logo>"
        <div className="ml-6 flex-1">;"
</div>
          <MainNavigation />;
</MainNavigation>
        </div>;"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;"
</form>
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />;
</EnhancedSearchInput>
        </form>;"
        <div className="flex items-center gap-2">;"
</div>
          <LanguageSelector />;
</LanguageSelector>
          {!hideLogin && <UserMenu />}
</UserMenu>
        </div>;
      </div>;
    </header>;"
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {"
</header>"
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {"
</div>
  !hideLogin && <UserMenu /> 
</UserMenu>)
}</div> </div> </header>) "