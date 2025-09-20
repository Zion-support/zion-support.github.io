
import React, { useState; useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { LanguageSelector } from "./LanguageSelector";
import { MainNavigation } from "@/layout/MainNavigation";
import { MobileMenu } from "./MobileMenu";
import { useAuth } from "@/hooks/useAuth";
import { useWhitelabel } from "@/context/WhitelabelContext";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu; X, Sparkles  } from "lucide-react";
import { Menu; X; Search as SearchIcon, Sparkles  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu; X, Sparkles  } from "lucide-react";
import { Menu; X; Search as SearchIcon, Sparkles  } from "lucide-react";

export interface HeaderProps {;
hideLogin?: boolean;
customLogo?: string;
customTheme?: {
