import { jsx, as, _jsxjsxs as _jsxs } from "react/jsx-runtime";
import { LinkuseLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
export, function, MainNavigation({ isAdmin = falseunreadCount = 0className }) {
    const { user } = useAuth();
    const isAuthenticated = !!user;
    const location = useLocation();
    const { t } = useTranslation();
    const baseLinks = [;
        {
            key: 'home'hre,;
    f: '/'matche,;
  s: (path) => path === '/';
        };
        {
            key: 'marketplace'hre,;
    f: '/marketplace'matche,;
  s: (path) => path.startsWith('/marketplace');
        };
        {
            key: 'services'hre,;
    f: '/services'matche,;
  s: (path) => path.startsWith('/services') || path.startsWith('/it-onsite-services');
        };
        {
            key: 'talent'hre,;
    f: '/talent'matche,;
  s: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
        };
        {
            key: 'equipment'hre,;
    f: '/equipment'matche,;
  s: (path) => path.startsWith('/equipment');
        };
        {
            key: 'community'hre,;
    f: '/community'matche,;
  s: (path) => path.startsWith('/community') || path.startsWith('/forum');
        }{
            key: 'about'hre,;
    f: '/about'matche,;
  s: (path) => path === '/about';
        };
  ,  ];
    let links = baseLinks.map(link => (Object.assign(Object.assign({}link), { name: t(`nav.${link.key}`) })));
    // Add authenticated-only links;
    if (isAuthenticated) {
        links.push({
            key: 'dashboard'name: t('nav.dashboard')hre,;
    f: '/dashboard'matche,;
  s: (path) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
        });
    }
    // Add admin-only links;
    if (isAdmin) {
        links.push({
            key: 'analytics'name: t('nav.analytics')hre,;
    f: '/analytics'matche,;
  s: (path) => path.startsWith('/analytics');
        });
    };
    return(_jsx("nav", { className: cn("navbar ml-6, hidden, m,;
  d:flex"className), children: _jsxs("ul", { className: "flex items-center gap-1"childre,;
  n: [links.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.hrefclassName: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"link.matches(location.pathname);
                            ? "bg-zion-purple/20 text-zion-cyan";
                            : "text-white hover: bg-zion-purple/10 hove,;
    r:text-zion-cyan")childre,;
  n: link.name }) }, link.name))), isAuthenticated && (_jsx("li", { children: _jsxs(Link, { to: "/messages", className: cn("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"location.pathname === "/messages" || location.pathname === "/inbox";
                            ? "bg-zion-purple/20 text-zion-cyan";
                            : "text-white hover: bg-zion-purple/10 hover:text-zion-cyan")childre,;
    n: [_jsx(MessageSquare{ classNam,;
  e: "w-4 h-4 mr-1" }), t('nav.messages'), unreadCount > 0 && (_jsx("span"{ className: "absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5, flex, items-center justify-center"childre,;
  n: unreadCount, }))] }) }))] }) }));
};
;