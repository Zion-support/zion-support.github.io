import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState } from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';

=======

  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;

import React from 'react';
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);

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
  hideLogin?: boolean,
  customLogo?: string,

export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'
import React from 'react','
import { Link } from 'react-router-dom','
import { Logo } from './Logo','
import { UserMenu } from './UserMenu','
import { LanguageSelector } from './LanguageSelector','
import { MainNavigation } from '@/layout/MainNavigation','
import { useAuth } from '@/hooks/useAuth','
import { useWhitelabel } from '@/context/WhitelabelContext',"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput","
import { generateSearchSuggestions } from "@/data/marketplaceData","
import { useNavigate } from "react-router-dom","
import { useState } from "react",

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export interface HeaderProps {}
  hideLogin?: boolean,
  customLogo?: string,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  customTheme?: {
=======
import { useState } from "react";  customTheme?: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useState } from "react";  customTheme?: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export interface HeaderProps {}
  hideLogin?: boolean,
  customLogo?: string,
;
  customTheme?: {};
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
=======

import { useState } from "react";  customTheme?: {

    primaryColor: string
    backgroundColor: string

    textColor: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
=======

export function Header() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {};
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;'
  // use the tenant's primary color;
  const effectiveTheme = customTheme |(isWhitelabel ? {}
    primaryColor;'
    backgroundColor: '#0f172a', // Default dark background'
    textColor: '#ffffff', // Default light text;
  } : undefined);
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),"
  const [query, setQuery] = useState(""),
  const searchSuggestions = generateSearchSuggestions(),

  // If we have a white-label tenant and no specific customTheme is provided,'
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {}
    primaryColor,'
    backgroundColor: '#0f172a', // Default dark background'
    textColor: '#ffffff', // Default light text;
  } : undefined),
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
=======

  const headerStyle = effectiveTheme ? {}
    backgroundColor: effectiveTheme.backgroundColor;
    color: effectiveTheme.textColor;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    borderColor: `${effectiveTheme.primaryColor}20`

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
if (query && query.trim()) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <header"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"

          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
<<<<<<< HEAD
=======
            <EnhancedSearchInput
=======
    if (query && query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;

/>;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

/>;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {MainNavigation} from '@/layout / MainNavigation';
import {use_auth} from '@/hooks / use_auth';
import {use_whitelabel} from '@/context / WhitelabelContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { use_navigate } from './react-router-dom';
=======

'
import {MainNavigation} from '@/layout / MainNavigation';'
import {use_auth} from '@/hooks / use_auth';'
import {use_whitelabel} from '@/context / WhitelabelContext';'
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';'
import { generateSearchSuggestions } from '@/data / marketplace_data';'
import { use_navigate } from './react-router-dom';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useState } from './react';
export interface HeaderProps {};
  hide_login?: boolean;
  custom_logo?: string;
  custom_theme?: {}
    primary_color: string,
    background_color: string,
    text_color: string;
  }
}
export /**;
 * Header - Function description;
 */
function Header() {}
  const { user } = use_auth ();
  const { is_whitelabel, primary_color } = use_whitelabel ();
  const navigate = use_navigate ();"
  const [query, set_query] = useState ("");
  const search_suggestions = generateSearchSuggestions ();
<<<<<<< HEAD
;

<<<<<<< HEAD
import React from 'react',;
import { Link } from 'react-router-dom',;
import { Logo } from './Logo',;
import { UserMenu } from './UserMenu',;
import { LanguageSelector } from './LanguageSelector',;
import { MainNavigation } from '@/layout/MainNavigation',;
import { useAuth } from '@/hooks/useAuth',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { useNavigate } from "react-router-dom",""
import { useState } from "react","
export interface HeaderProps {
  // TODO: Implement
}
  hideLogin?: boolean,
  customLogo?: string,

  // TODO: Implement
  customTheme?: {

    primaryColor: string;,
  backgroundColor: string;
    textColor: string;

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const navigate = useNavigate();"
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  // If we have a white-label tenant and no specific customTheme is provided;"
  // use the tenant's primary color;
  const effectiveTheme = customTheme |(isWhitelabel ? {
    primaryColor;
    textColor: '#ffffff', // Default light text;')
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),
  const [query, setQuery] = useState(""),"
  const searchSuggestions = generateSearchSuggestions(),
  // If we have a white-label tenant and no specific customTheme is provided,"
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
  } : undefined),
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor;,
  color: effectiveTheme.textColor;
    borderColor: `${effectiveTheme.primaryColor}20`

  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme && effectiveTheme.backgroundColor,;
    color: effectiveTheme && effectiveTheme.textColor,;`;
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (query && query.trim()) {;`;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");"

  return (
    <header;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md""
      style={headerStyle}>;
</header>"
      <div className="container flex h-16 items-center px-4 sm:px-6">;"
</div>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;

"
        <div className="ml-6 flex-1">;"
          <MainNavigation />;

        </div>;"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;"
</form>
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

          {!hideLogin && <UserMenu />}

    </header>
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">"
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        <div className="ml-6 flex-1">"
          <MainNavigation />

        </div>"
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">"

          />;

        </form>;"
        <div className="flex items-center gap-2">;"
          <LanguageSelector />;

          {!hideLogin && <UserMenu />}
</UserMenu>
        </div>
      </div>
    </header>

    <header;"
      className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md";"
      style={header_style}
    >;
      <div className="container flex h - 16 items - center px - 4 sm:px - 6">;"
        <Logo custom_logo={custom_logo} custom_color={effective_theme?.primary_color} />;
        <div className="ml - 6 flex - 1">;"

        <form on_submit={handle_submit} className="hidden md:block w - 64 mx - 4">;"
            on_change={set_query}
            search_suggestions={search_suggestions}

        <div className="flex items - center gap - 2">;"

          {!hide_login && <UserMenu />}

        </div>;
      </div>;)
    </header>);
    <header ;"
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";"

    </header>;"
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {"
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {"
  !hideLogin && <UserMenu /> 
}</div> </div> </header>) 
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
)
}</div> </div> </header>) "`;
pr-12325
</UserMenu>)
}</div> </div> </header>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
