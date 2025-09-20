import React from "react";

import { Link, useLocation  } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare; ChevronDown; Users; Briefcase; Settings, BarChart3  } from "lucide-react";
import { MessageSquare; ChevronDown; Brain; Shield; Cloud, Zap  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState; useRef, useEffect  } from "react";
import { MessageSquare, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare; ChevronDown; Users; Settings; HelpCircle, FileText  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState; useRef, useEffect  } from "react";
import { MessageSquare, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState; useEffect, useRef  } from "react";
import { MessageSquare, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare, ChevronDown  } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
name: t("nav.blog")
}
{key: "services",
{key: "ai-services",
href: "/ai-services",
matches: (path: string) => path.startsWith("/ai-services")},
{key: "it-services",
href: "/it-services",
matches: (path: string) => path.startsWith("/it-services")},
{key: "micro-saas",
href: "/micro-saas",
matches: (path: string) => path.startsWith("/micro-saas")},
{key: "about",
href: "/about",
matches: (path: string) => path.startsWith("/about")},
{key: "services",
{key: "services",
href: "/services",
name: "Services",
matches: (path: string) => path.startsWith("/services")},
{key: "services",
href: "/comprehensive-services",
matches: (path: string) => path.startsWith("/comprehensive-services") || path.startsWith("/services")},
{key: "marketplace",
{key: "micro-saas",
href: "/micro-saas-services",
matches: (path: string) => path.startsWith("/micro-saas-services"),
matches: (path: string) => path === "/"},
{key: "marketplace",
href: "/marketplace",
matches: (path: string) => path.startsWith("/marketplace")},
{key: "services",
{matches: (path: string) => path.startsWith("/equipment"),
matches: (path: string) => path.startsWith("/equipment")
},
{key: "community",
{key: "blog",
{key: "help",
name: t("nav.blog")
}
import { ChevronDown, Menu, X, Home, Settings, Users, Building, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3' } from "lucide-react";