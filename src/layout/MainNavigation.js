import { jsx as _jsx, jsxs as _jsxs   } from "react/jsx-runtime";
import { Link, useLocation   } from "react-router-dom";
import { cn   } from "@/lib/utils";
import { useAuth   } from "@/hooks/useAuth";
import { MessageSquare   } from "lucide-react";
import { useTranslation   } from "react-i18next";
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }) {
  const { user } = useAuth()
    const isAuthenticated = !!user;
const location = useLocation()
    const { t } = useTranslation()
    const baseLinks = [
  {
  k,
  e: y: 'home',hr,
  e: f: '/',match,
  e: s: (path) => path === '/'
},
  {
  k,
  e: y: 'marketplace',hr,
  e: f: '/marketplace',match,
  e: s: (path) => path.startsWith('/marketplace')
        },
  {
  k,
  e: y: 'services',hr,
  e: f: '/services',match,
  e: s: (path) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
        },
  {
  k,
  e: y: 'talent',hr,
  e: f: '/talent',match,
  e: s: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
        },
  {
  k,
  e: y: 'equipment',hr,
  e: f: '/equipment',match,
  e: s: (path) => path.startsWith('/equipment')
        },
  {
  k,
  e: y: 'community',hr,
  e: f: '/community',match,
  e: s: (path) => path.startsWith('/community') || path.startsWith('/forum')
        },
  {
  k,
  e: y: 'about',hr,
  e: f: '/about',match,
  e: s: (path) => path === '/about'
},
  ]
    let links = baseLinks.map(link => (Object.assign(Object.assign({}, link), { na,
  m: e: t(`nav.${link.key}`) })))
    // Add authenticated-only links;
    if (if (isAuthenticated) {
  ) {
        links.push({
  k,
  e: y: 'dashboard',na,
  m: e: t('nav.dashboard'),hr,
  e: f: '/dashboard',match,
  e: s: (path) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
})
    }
    // Add admin-only links;
    if (if (isAdmin) {
  ) {
        links.push({
  k,
  e: y: 'analytics',na,
  m: e: t('nav.analytics'),hr,
  e: f: '/analytics',match,
  e: s: (path) => path.startsWith('/analytics')
        })
    }
    return (_jsx("nav", { classNa,
  m: e: cn("navbar ml-6 hidden m,
  d:flex", className), childr,
  e: n: _jsxs("ul", { classNa,
  m: e: "flex items-center gap-1", childr,
  e: n: [links.map((link) => (_jsx("li", { childr,
  e: n: _jsx(Link, { to: link.href, classNa,
  m: e: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", link.matches(location.pathname)
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-white,
  hove: r: bg-zion-purple/10 hove,
  r:text-zion-cyan"), childr,
  e: n: link.name }) }, link.name))), isAuthenticated && (_jsx("li", { childr,
  e: n: _jsxs(Link, { to: "/messages", classNa,
  m: e: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative", location.pathname === "/messages" || location.pathname === "/inbox"
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-white,
  hove: r: bg-zion-purple/10 hove,
  r:text-zion-cyan"), childr,
  e: n: [_jsx(MessageSquare, { classNa,
  m: e: "w-4 h-4 mr-1" }), t('nav.messages'), unreadCount > 0 && (_jsx("span", { classNa,
  m: e: "absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", childr,
  e: n: unreadCount }))],
  }) }))],
  }) }))
}
