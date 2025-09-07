<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState,useEffect } from';react' import { Link } from';';react-router-dom' import { Logo } from './Logo'' import { UserMenu } from './UserMenu'' import { LanguageSelector } from './LanguageSelector'' import { MainNavigation } from';';@/layout/MainNavigation''; import { MobileMenu } from './MobileMenu' import { useAuth } from';';@/hooks/useAuth'' import { useWhitelabel } from';';@/context/WhitelabelContext''; import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'' import { generateSearchSuggestions } from '@/data/marketplaceData'' import { useNavigate } from 'react-router-dom'' import { Button } from '@/components/ui/button'' import { Menu,X,Sparkles } from 'lucide-react'' import { Search as SearchIcon } from 'lucide-react' export function Header({ hideLogin = false,customLogo,customTheme }) { const { user } = useAuth() const { isWhitelabel,primaryColor } = useWhitelabel()' const navigate = useNavigate()'; const [query,setQuery] = useState(') const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false) const [isScrolled,setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()'';
=======
import React,{ useState,useEffect } from\';react\' import { Link } from\';\';react-router-dom\' import { Logo } from \'./Logo\'' import { UserMenu } from \'./UserMenu\'' import { LanguageSelector } from \'./LanguageSelector\'' import { MainNavigation } from\';\';@/layout/MainNavigation\''; import { MobileMenu } from \'./MobileMenu\' import { useAuth } from\';\';@/hooks/useAuth\'' import { useWhitelabel } from\';\';@/context/WhitelabelContext\''; import { EnhancedSearchInput } from \'@/components/search/EnhancedSearchInput\'' import { generateSearchSuggestions } from \'@/data/marketplaceData\'' import { useNavigate } from \'react-router-dom\'' import { Button } from \'@/components/ui/button\'' import { Menu,X,Sparkles } from \'lucide-react\'' import { Search as SearchIcon } from \'lucide-react\' export function Header({ hideLogin = false,customLogo,customTheme }) { const { user } = useAuth() const { isWhitelabel,primaryColor } = useWhitelabel()\' const navigate = useNavigate()\'; const [query,setQuery] = useState(\') const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false) const [isScrolled,setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()\'';
const React,{ useState,useEffect } from";react" import { Link } from";";react-router-dom" import { Logo } from "./Logo"" import { UserMenu } from "./UserMenu"" import { LanguageSelector } from "./LanguageSelector"" import { MainNavigation } from";";@/layout/MainNavigation""; import { MobileMenu } from "./MobileMenu" import { useAuth } from";";@/hooks/useAuth"" import { useWhitelabel } from";";@/context/WhitelabelContext""; import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput"" import { generateSearchSuggestions } from "@/data/marketplaceData"" import { useNavigate } from "react-router-dom"" import { Button } from "@/components/ui/button"" import { Menu,X,Sparkles } from "lucide-react"" import { Search as SearchIcon } from "lucide-react" export function Header({ hideLogin = false,customLogo,customTheme }) { const { user } = useAuth() const { isWhitelabel,primaryColor } = useWhitelabel()" const navigate = useNavigate()"; const [query,setQuery] = useState(") const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false) const [isScrolled,setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()"";''"
import _React,{ useState,useEffect } from';react' import { Link } from';';react-router-dom' import { Logo } from './Logo'' import { UserMenu } from './UserMenu'' import { LanguageSelector } from './LanguageSelector'' import { MainNavigation } from';';@/layout/MainNavigation''; import { MobileMenu } from './MobileMenu' import { useAuth } from';';@/hooks/useAuth'' import { useWhitelabel } from';';@/context/WhitelabelContext''; import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'' import { generateSearchSuggestions } from '@/data/marketplaceData'' import { useNavigate } from 'react-router-dom'' import { Button } from '@/components/ui/button'' import { Menu,X,Sparkles } from 'lucide-react'' import { Search as SearchIcon } from 'lucide-react' export function Header({ hideLogin = false,customLogo,customTheme }) { const { user } = useAuth() const { isWhitelabel,primaryColor } = useWhitelabel()' const navigate = useNavigate()'; const [query,setQuery] = useState(') const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false) const [isScrolled,setIsScrolled] = useState(false) const searchSuggestions = generateSearchSuggestions()'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const Header.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>Header.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
