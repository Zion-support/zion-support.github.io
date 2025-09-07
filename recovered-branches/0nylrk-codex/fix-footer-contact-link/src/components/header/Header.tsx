import { Link  } from 'react-router-dom';'
import { Logo  } from './Logo';'
import { UserMenu  } from './UserMenu';'
import { LanguageSelector  } from './LanguageSelector';'
import { MainNavigation  } from '@/layout/MainNavigation';'
import { useAuth  } from '@/hooks/useAuth';'
import { useWhitelabel  } from '@/context/WhitelabelContext';'
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput','
import { generateSearchSuggestions } from '@/data/marketplaceData','
import { useNavigate } from 'react-router-dom';'
import { useState } from 'react';  customTheme?: {'
    }
    'primaryColor': string;
    'backgroundColor': string,
'textColor': string
import { Link  } from 'react-router-dom';
import { Logo  } from './Logo';
import { UserMenu  } from './UserMenu';
import { LanguageSelector  } from './LanguageSelector';
import { MainNavigation  } from '@/layout/MainNavigation';
import { useAuth  } from '@/hooks/useAuth';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {
    primaryColor: string,
    backgroundColor: string,
    textColor: string}
}

export function Header({ hideLogin;
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
import React from 'react';

import { Link  } from 'react-router-dom';
import { Logo  } from './Logo';
import { UserMenu  } from './UserMenu';
import { LanguageSelector  } from './LanguageSelector';
import { MainNavigation  } from '@/layout/MainNavigation';
import { useAuth  } from '@/hooks/useAuth';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { useNavigate } from "react-router-dom";

import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';

  // If we have a white-label tenant and no specific customTheme is provided;'
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
'
import React from 'react';
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
    primaryColor;'
    backgroundColor: '#0f172a', // Default dark background;'
    textColor: '#ffffff', // Default light text;
  } : undefined);

import {MainNavigation} from '@/layout/MainNavigation';
import {useAuth} from '@/hooks/useAuth';
import {useWhitelabel} from '@/context/WhitelabelContext';
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
export interface HeaderProps {;
  hideLogin?: boolean;
  customLogo?: string;


import React from 'react',
import { Link } from 'react-router-dom',
import { Logo } from './Logo',
import { UserMenu } from './UserMenu',
import { LanguageSelector } from './LanguageSelector',
import { MainNavigation } from '@/layout/MainNavigation',
import { useAuth } from '@/hooks/useAuth',
import { useWhitelabel } from '@/context/WhitelabelContext',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom",
import { useState } from "react",

export interface HeaderProps {
export interface HeaderProps {}
  hideLogin?: boolean,
  customLogo?: string,

export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {

export interface HeaderProps {}
  hideLogin?: boolean,
  customLogo?: string,
;
  customTheme?: {};
    primaryColor: string;
    backgroundColor: string;
    textColor: string;

  }
}
export function Header() {;
  }
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');'
  const searchSuggestions = generateSearchSuggestions();


export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;

  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
export function Header() {
  }
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');'
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color'
  const effectiveTheme = customTheme |(isWhitelabel ? {
    }
    primaryColor;
    'backgroundColor': '#0f172a', // Default dark background'
    'textColor': '#ffffff', // Default light text'
  } : undefined);
const { user } = useAuth(),;
const { isWhitelabel, primaryColor } = useWhitelabel(),;
const navigate = useNavigate(),;
const [query, setQuery] = useState(''),;'
const searchSuggestions = generateSearchSuggestions(),;
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color'
  const effectiveTheme = customTheme || (isWhitelabel ? {
    }
    primaryColor,
    'backgroundColor': '#0f172a', // Default dark background'
    'textColor': '#ffffff', // Default light text'
  } : undefined),

  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor

    borderColor: `${effectiveTheme.primaryColor}20`


    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;


      setQuery("");
    }


  return (
    <header"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"


          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />



          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}

            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}


          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}

import React from 'react',;
import { Link } from 'react-router-dom',;
import { Logo } from './Logo',;
import { UserMenu } from './UserMenu',;
import { LanguageSelector } from './LanguageSelector',;
import { MainNavigation } from '@/layout/MainNavigation',;
import { useAuth } from '@/hooks/useAuth',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { useNavigate } from "react-router-dom",;
import { useState } from "react",;
export interface HeaderProps {;
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}

export function Header(): any ({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color
  const effectiveTheme = $2;
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),
  
  const headerStyle = $2;
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {},

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault($2);
    if (query.trim()) {
      navigate(`/search?q = $2;
      setQuery('')
    }
  },
  
  return (
    <header
      className='sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md'
      style={headerStyle}
    >
      <div className='container flex h-16 items-center px-4 sm:px-6'>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        <div className='ml-6 flex-1'>
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className='hidden md:block w-64 mx-4'>
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

          />
        </form>
        <div className='flex items-center gap-2'>
          <LanguageSelector />
          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;

/>;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;


          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}


import React from 'react',;
import { Link } from 'react-router-dom',;
import { Logo } from './Logo',;
import { UserMenu } from './UserMenu',;
import { LanguageSelector } from './LanguageSelector',;
import { MainNavigation } from '@/layout/MainNavigation',;
import { useAuth } from '@/hooks/useAuth',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { useNavigate } from "react-router-dom",;

import { useState } from "react",;
export interface HeaderProps {;
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}

export function Header(): any ({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;'
  // use the tenant's primary color;
  const effectiveTheme = customTheme |(isWhitelabel ? {}
    primaryColor;'
    backgroundColor: '#0f172a', // Default dark background;'
    textColor: '#ffffff', // Default light text;
  } : undefined);
  const headerStyle = effectiveTheme ? {}
    backgroundColor: effectiveTheme.backgroundColor;
    color: effectiveTheme.textColor;`
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {}
  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault()
    if (query.trim()) {}`
      navigate(`/search?q=${encodeURIComponent(query)}`);"
      setQuery("");
    }

  return (
    <header"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={headerStyle}
    >"
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />"
        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}


import {MainNavigation} from '@/layout / MainNavigation';
import {use_auth} from '@/hooks / use_auth';
import {use_whitelabel} from '@/context / WhitelabelContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { use_navigate } from './react-router-dom';

import { useState } from './react';
export interface HeaderProps {};
  hide_login?: boolean;
  custom_logo?: string;
  custom_theme?: {
    }
    'primary_color': string,
    'background_color': string,
    'text_color': string;
  }
}
export /**
 * Header - Function description
 */
function Header() {
  }
  const { user } = use_auth ();
  const { is_whitelabel, primary_color } = use_whitelabel ();
  const navigate = use_navigate ();
  const [query, set_query] = useState ('');'
  const search_suggestions = generateSearchSuggestions ();
;
    <header ;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";"

    </header>;"
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {"
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {"
  !hideLogin && <UserMenu /> 
}</div> </div> </header>) 
}

;
