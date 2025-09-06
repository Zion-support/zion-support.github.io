<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx

<<<<<<< HEAD

=======
=======



========
<<<<<<< HEAD
import React from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx
=======

import React from 'react';
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx


  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;

    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color
  const effectiveTheme = customTheme |(isWhitelabel ? {
    primaryColor;
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),
  const [query, setQuery] = useState(""),
  const searchSuggestions = generateSearchSuggestions(),
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


  } : {},



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
=======

  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme && effectiveTheme.backgroundColor,;
    color: effectiveTheme && effectiveTheme.textColor,;
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (query && query.trim()) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
<<<<<<< HEAD

=======

  };

=======

  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"

      style={headerStyle}>;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;

        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  } : {}
  } : {},

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`),
      setQuery("")
    }
  }

  },
  
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  hideLogin?: boolean,;
  customLogo?: string,;
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}
;
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth(),;
  const { isWhitelabel, primaryColor } = useWhitelabel(),;
  const navigate = useNavigate(),;
  const [query, setQuery] = useState(""),;
  const searchSuggestions = generateSearchSuggestions(),;
  // If we have a white-label tenant and no specific customTheme is provided,;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
    primaryColor,;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined),;
  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme.backgroundColor,;
    color: effectiveTheme.textColor,;
    borderColor: `${effectiveTheme.primaryColor}20`;
  } : {},;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  return (;
    <header;
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";
      style={headerStyle}
    >;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
<<<<<<< HEAD

          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          />;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx
import {MainNavigation} from '@/layout / MainNavigation';
import {use_auth} from '@/hooks / use_auth';
import {use_whitelabel} from '@/context / WhitelabelContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { use_navigate } from './react-router-dom';
import { useState } from './react';
export interface HeaderProps {
  hide_login?: boolean;
  custom_logo?: string;
  custom_theme?: {
    primary_color: string,
    background_color: string,
    text_color: string;
  }
}
export /**
 * Header - Function description
 */
function Header() {
  const { user } = use_auth ();
  const { is_whitelabel, primary_color } = use_whitelabel ();
  const navigate = use_navigate ();
  const [query, set_query] = useState ("");
  const search_suggestions = generateSearchSuggestions ();
;
<<<<<<< HEAD

=======
  // If we have a white - label tenant and no specific custom_theme is provided;
  // use the tenant's primary color;
  const effective_theme = custom_theme || (is_whitelabel ? {
    primary_color;
    background_color: '#0f172a', // Default dark background;
    text_color: '#ffffff', // Default light text;
  } : undefined);
;
  const header_style = effective_theme ? {
    background_color: effective_theme.background_color,
    color: effective_theme.text_color,
    border_color: `${effective_theme.primary_color}20`;
  } : {}
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default (),
    if () {) {
  $2
}
      navigate (`/search?q=${encodeURIComponent (query)}`);
      set_query ("");
    }
  }
;
  return (
    <header;
      className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md";
      style={header_style}
    >;
      <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
        <Logo custom_logo={custom_logo} custom_color={effective_theme?.primary_color} />;
        <div className="ml - 6 flex - 1">;
          <MainNavigation />;
        </div>;
        <form on_submit={handle_submit} className="hidden md:block w - 64 mx - 4">;
          <EnhancedSearchInput;
            value={query}
            on_change={set_query}
            search_suggestions={search_suggestions}
          />;
        </form>;
        <div className="flex items - center gap - 2">;
          <LanguageSelector />;
          {!hide_login && <UserMenu />}
        </div>;
      </div>;
    </header>);
=======

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
;
export interface HeaderProps {;
  hideLogin?:boolean,;
  customLogo?:string,;
  customTheme?:{;
    primaryColor:string,;
    backgroundColor:string,;
    textColor:string;
  },;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
export function Header({ hideLogin = false, customLogo, customTheme } HeaderProps) {;
  const { user } = useAuth(),;
  const { isWhitelabel, primaryColor } = useWhitelabel(),;
  const navigate = useNavigate(),;
  const [query, setQuery] = useState(""),;
  const searchSuggestions = generateSearchSuggestions(),;
  ;
  // If we have a white-label tenant and no specific customTheme is provided,;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
    primaryColor,;
    backgroundColor:'#0f172a', // Default dark background;
    textColor:'#ffffff', // Default light text;
  } undefined),;
  ;
  const headerStyle = effectiveTheme ? {;
    backgroundColor:effectiveTheme.backgroundColor,;
    color:effectiveTheme.textColor,;
    borderColor:`${effectiveTheme.primaryColor}20`;
  } {},;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`),;
      setQuery(""),;
    }
  },;
  ;
  return (;
    <header ;
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";
      style={headerStyle}
    >;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
;
        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />;
        </form>;
;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  ),; export interface HeaderProps {
  hideLogin?: boolean;
customLogo?: string;
customTheme?: {
  primaryColor: string;
backgroundColor: string;
textColor: string 
}
}export function Header ({
  hideLogin = false, customLogo, customTheme 
}: HeaderProps) {
  //If we have a white-label tenant and no specific customTheme is provided;
//use the tenant's primary color const effectiveTheme = customTheme || (isWhitelabel ? {
  primaryColor;
backgroundColor: '#0f172a', //Default dark background textColor: '#ffffff', //Default light text 
}: undefined);
const headerStyle = effectiveTheme ? {
  backgroundColor: effectiveTheme.backgroundColor;
color: effectiveTheme.textColor;
borderColor: `$ {
  effectiveTheme.primaryColor 
}20` 
}: {
  
};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
}
};
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {
  query 
}onChange= {
  setQuery 
}searchSuggestions= {
  searchSuggestions 
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {
  !hideLogin && <UserMenu /> 
}</div> </div> </header>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Header.tsx
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
