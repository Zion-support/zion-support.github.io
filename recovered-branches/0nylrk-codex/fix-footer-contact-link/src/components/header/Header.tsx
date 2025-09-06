<<<<<<< HEAD
import React from 'react';
=======

<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Link  } from 'react-router-dom';
import { Logo  } from './Logo';
import { UserMenu  } from './UserMenu';
import { LanguageSelector  } from './LanguageSelector';
import { MainNavigation  } from '@/layout/MainNavigation';
import { useAuth  } from '@/hooks/useAuth';
import { useWhitelabel  } from '@/context/WhitelabelContext';
<<<<<<< HEAD
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom";
import { useState } from "react";
=======
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom";
import { useState } from "react";
=======
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}
<<<<<<< HEAD
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
import {MainNavigation} from '@/layout/MainNavigation';
import {useAuth} from '@/hooks/useAuth';
import {useWhitelabel} from '@/context/WhitelabelContext';
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
<<<<<<< HEAD
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
=======
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),
  const [query, setQuery] = useState(""),
  const searchSuggestions = generateSearchSuggestions(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`


  } : {},



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

  };

=======

  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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

          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />
<<<<<<< HEAD
<<<<<<< HEAD
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  const effectiveTheme = customTheme |(isWhitelabel ? {
    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  }

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
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
<<<<<<< HEAD
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />
=======

          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
