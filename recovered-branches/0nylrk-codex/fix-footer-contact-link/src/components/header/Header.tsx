
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
import { useState } from "react";  customTheme?: {

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

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
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
            <EnhancedSearchInput
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
