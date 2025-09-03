import React { useState } from "react" className)"}>";" {}""" <Button: variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20" aria-label="{isOpen:" ? "Close menu" : "Open: menu,"}>""" {isOpen ? <X className="h-6 w-6"/>  : <Menu: className="h-6 w-6"/>}" </Button>", {}""" {isOpen: && (<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">""" <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">""" <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""" <h2 className="text-lg font-semibold text-white">Menu</h2>""" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20">""" <X: className="h-5 w-5"/>" </Button>" </div>","  {}""" <nav: className="p-4 space-y-2"> {navigationItems.map((item) => {" const Icon = item.icon", const isActive = item.matches(location.pathname)" return (<Link key="{item.href}" to="{item.href}" onClick="{toggleMenu}" className = {"; cn("flex: items - center gap-3 px-4 py-3 rounded-lg text-white transition-colors",", isActive"";" ? "bg - zion-purple/20: text-zion-cyan border border-zion-purple/40""," : "hover: bg-zion-purple/10: hover:text-zion-cyan")","}>""" <Icon: className="w-5 h-5"/>""" <span className="font-medium">{item.label}</span>" </Link>)})}" </nav>", {}""" <div: className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">""" {isAuthenticated ? (<div className="space-y-3">""" <div className="flex items-center gap-3 px-4 py-2">""" <User className="h-5 w-5 text-zion-cyan"/>""" <span className="text-white font-medium">"{user?.email || "User"}" </span>"" </div>""" <Link to="/messages" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover : text-zion-cyan: transition-colors">""" <MessageSquare className="h-5 w-5"/>" <span>Messages</span>"" </Link>""" <Link to="/profile" onClick="{toggleMen,u}" className="flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan: transition-colors">""" <Settings className="h-5 w-5"/>" <span>Profile</span>"" </Link>""" </div>) : (<div: className="space-y-3">""" <Link to="/login" onClick="{toggleMen,u}" className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark: transition-colors">"{t("auth.login")}"" </Link>""" <Link to="/signup" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan: hover:text-zion-blue-dark: transition-colors"> {t("auth.signup")} </Link> </div>)} </div>" </div>" </div>)}" </div>)}",","";";"
    <div className = { cn("md: hidden", "; className)"}>"" {}""" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20" aria-label="{isOpen" ? "Close menu" : "Open menu"}>""" {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}" </Button>"" {}""" {isOpen && (<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">""" <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">""" <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""" <h2 className="text-lg font-semibold text-white">Menu</h2>""" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20">""" <X className="h-5 w-5"/>" </Button>" </div>"" {}""" <nav className="p-4 space-y-2"> {navigationItems.map((item) => {" const Icon = item.icon" const isActive = item.matches(location.pathname)" return (<Link key="{item.href}" to="{item.href}" onClick="{toggleMenu}" className = {"; cn("flex items - center gap-3 px-4 py-3 rounded-lg text-white transition-colors", ", isActive"";" ? "bg - zion-purple/20 text-zion-cyan border border-zion-purple/40"", : "hover: bg-zion-purple/10 hover:text-zion-cyan")"," }>""" <Icon className="w-5 h-5"/>""" <span className="font-medium">{item.label}</span>" </Link>)})}" </nav>"" {}""" <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">""" {isAuthenticated ? (<div className="space-y-3">""" <div className="flex items-center gap-3 px-4 py-2">""" <User className="h-5 w-5 text-zion-cyan"/>""" <span className="text-white font-medium">"{user?.email || "User"}" </span>"" </div>""" <Link to="/messages" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover : text-zion-cyan transition-colors">""" <MessageSquare className="h-5 w-5"/>" <span>Messages</span>"" </Link>""" <Link to="/profile" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors">""" <Settings className="h-5 w-5"/>" <span>Profile</span>"" </Link>""" </div>) : (<div className="space-y-3">""" <Link to="/login" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark transition-colors">"{t("auth.login")}"" </Link>""" <Link to="/signup" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hover:text-zion-blue-dark transition-colors"> {t("auth.signup")} </Link> </div>)} </div>" </div>" </div>)}" </div>)}",""""
    <div className = { cn("md: hidden","; className)"}>";" {}"" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20" aria-label="{isOpen" ? "Close menu" : "Open menu"}>"" {isOpen ? <X className="h-6 w-6"/>  : <Menu className="h-6 w-6"/>}" </Button>", {}"" {isOpen && (<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">"" <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">"" <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">"" <h2 className="text-lg font-semibold text-white">Menu</h2>"" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20">"" <X className="h-5 w-5"/>" </Button>" </div>"," {}"" <nav className="p-4 space-y-2"> {navigationItems.map((item) => {" const Icon = item.icon"; const isActive = item.matches(location.pathname)" return (<Link key="{item.href}" to="{item.href}" onClick="{toggleMenu}" className = {"; cn("flex items - center gap-3 px-4 py-3 rounded-lg text-white transition-colors",", isActive";" ? "bg - zion-purple/20 text-zion-cyan border border-zion-purple/40", : "hover: bg - zion-purple/10 hover:text-zion-cyan")"," }>"" <Icon className="w-5 h-5"/>"" <span className="font-medium">{item.label}</span>" </Link>)})}" </nav>", {}"" <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">"" {isAuthenticated ? (<div className="space-y-3">"" <div className="flex items-center gap-3 px-4 py-2">"" <User className="h-5 w-5 text-zion-cyan"/>"" <span className="text-white font-medium">"{user?.email || "User"}" </span>" </div>"" <Link to="/messages" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover : text-zion-cyan transition-colors">"" <MessageSquare className="h-5 w-5"/>" <span>Messages</span>" </Link>"" <Link to="/profile" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors">"" <Settings className="h-5 w-5"/>" <span>Profile</span>" </Link>"" </div>) : (<div className="space-y-3">"" <Link to="/login" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark transition-colors">"{t("auth.login")}" </Link>"" <Link to="/signup" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hover:text-zion-blue-dark transition-colors"> {t("auth.signup")} </Link> </div>)} </div>" </div>" </div>)}" </div>)}",
  ]

  const handleNavigation = (path) => {onNavigate(path)}
  if (!isOpen) return null
"
  return ("
    <div className = "lg: hidden fixed inset-0 z-50">,
      {/*   */}"
      <div "
  return ("
    <div className="lg: hidden fixed inset-0 z-50">",,
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick="{onClose}" />next/link";react&apos;react-router-dom&apos;lucide-react/dist/esm/icons/menu&apos;lucide-react/dist/esm/icons/x&apos;lucide-react/dist/esm/icons/user&apos;lucide-react/dist/esm/icons/message-square&apos;lucide-react/dist/esm/icons/home&apos;lucide-react/dist/esm/icons/store&apos;lucide-react/dist/esm/icons/users&apos;lucide-react/dist/esm/icons/settings&apos;@/hooks/useAuth&apos;react-i18next&apos;@/lib/utils&apos;@/components/ui/button&apos;&apos, export function MobileMenu({ className }) {} const { user, isAuthenticated } = useAuth() const location = useLocation() const { t } = useTranslation() const [isOpen, setIsOpen] = useState(false) const toggleMenu = () => setIsOpen(!isOpen) const;const;const navigationItems = [ { href: &apos,/&apos, label: t(&apos,nav.home&apos) icon: Home, matches: (path === &apos) => $3/&apos} { href: &apos,/marketplace&apos, label: t(&apos,nav.marketplace&apos) icon: Store, matches: (path.startsWith(&apos) => $3/marketplace&apos) } { href: &apos,/talent&apos, label: t(&apos,nav.talent&apos) icon: Users, matches: (path.startsWith(&apos,/talent&apos) && !path.includes(&apos) => $3/talent-dashboard&apos) } { href: &apos,/categories&apos, label: t(&apos,nav.categories&apos) icon: Store, matches: (path.startsWith(&apos) => $3/categories&apos) } { href: &apos,/equipment&apos, label: t(&apos,nav.equipment&apos) icon: Store, matches: (path.startsWith(&apos) => $3/equipment&apos) } { href: &apos,/community&apos, label: t(&apos,nav.community&apos) icon: Users, matches: (path.startsWith(&apos) => $3/community&apos) }] if (isAuthenticated) { navigationItems.push({ href: &apos,/dashboard&apos, label: t(&apos,nav.dashboard&apos) icon: Settings, matches: (path.startsWith(&apos) => $3/dashboard&apos) })} return ("
    &apos;&apos;<div className = { cn(&apos;md: hidden&apos,"; className)&apos}>";&apos {}&apos;&apos,&apos;&apos; <Button variant="&apos;ghost&apos;" size="&apos;sm&apos;" onClick="{toggleMenu}" className="&apos;p-2" text-white hover: bg-zion-purple/20&apos, aria-label="{isOpen" ? &apos,Close menu&apos, : &apos,Open menu&apos}>&apos;&apos, {isOpen ?&apos}&apos; <X className="&apos;h-6" w-6&apos;/> :&apos; <Menu className="&apos;h-6" w-6&apos;/>}&apos;&apos, </Button>";&apos {}&apos;&apos, {isOpen && (&apos}&apos;<div className="&apos;fixed" inset-0 z-50 bg-black/50 backdrop-blur-sm&apos;>"&apos;&apos," <div className="&apos;fixed" inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20&apos;>"&apos;&apos," <div className="&apos;flex" items-center justify-between p-4 border-b border-zion-purple/20&apos;>"&apos;&apos," <h2 className="&apos;text-lg" font-semibold text-white&apos;>Menu&apos;</h2>&apos;&apos,&apos;&apos; <Button variant="&apos;ghost&apos;" size="&apos;sm&apos;" onClick="{toggleMenu}" className="&apos;p-2" text-white hover: bg-zion-purple/20&apos,>"&apos,&apos," <X className="&apos;h-5" w-5&apos;/>&apos;&apos, </Button>&apos,&apos," </div>",&apos {}&apos;&apos,&apos;&apos; <nav className="&apos;p-4" space-y-2&apos;> {navigationItems.map((item) => {&apos;&apos}}&apos; const Icon = item.icon";&apos;&apos; const isActive = item.matches(location.pathname)&apos; return (&apos;<;<Link key="{item.href}" to="{item.href}" onClick="{toggleMenu}" className = {";&apos;&apos; cn(&apos;flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors&apos,";&apos; isActive&apos;&apos; ? &apos;bg-zion-purple/20 text-zion-cyan border border-zion-purple/40&apos;&apos; : &apos;hover:bg-zion-purple/10 hove,r: text-zion-cyan&apos)",&apos}>&apos;&apos,&apos;&apos; <Icon className="&apos;w-5" h-5&apos;/>&apos;&apos,&apos;&apos; <span className="&apos;font-medium&apos;">{item.label}&apos;</span>&apos;&apos, </Link>)})}&apos;&apos, </nav>";&apos {}&apos;&apos,&apos;&apos; <div className="&apos;absolute" bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20&apos;>"&apos;&apos {isAuthenticated ? (&apos}&apos;<div className="&apos;space-y-3&apos;">"&apos;&apos," <div className="&apos;flex" items-center gap-3 px-4 py-2&apos;>"&apos;&apos," <User className="&apos;h-5" w-5 text-zion-cyan&apos;/>&apos;&apos,&apos;&apos; <span className="&apos;text-white" font-medium&apos;>&apos {user?.email || &apos;User&apos}"&apos;&apos; </span>&apos;&apos," </div>&apos;&apos,&apos;&apos; <Link to="&apos;/messages&apos;" onClick="{toggleMenu}" className="&apos;flex" items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors&apos,>"&apos,&apos," <MessageSquare className="&apos;h-5" w-5&apos;/>&apos;&apos, <span>Messages</span>&apos;&apos," </Link>&apos;&apos,&apos;&apos, <Link to="&apos,/profile&apos," onClick="{toggleMenu}" className="&apos;flex" items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors&apos,>"&apos,&apos," <Settings className="&apos;h-5" w-5&apos;/>&apos;&apos, <span>Profile</span>&apos;&apos," </Link>&apos;&apos,&apos;&apos; </div>) : (<div className="&apos;space-y-3&apos;">"&apos;&apos,"" <Link to="&apos,/login&apos," onClick="{toggleMenu}" className="&apos;block" w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark transition-colors&apos,>&apos {t(&apos,auth.login&apos)}&apos;&apos," </Link>&apos;&apos,&apos;&apos; <Link to="&apos;/signup&apos;" onClick="{toggleMenu}" className="&apos;block" w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hove,r: text-zion-blue-dark transition-colors&apos,> {t(&apos,auth.signup&apos)}&apos; </Link> </div>)} </div>&apos;&apos, </div>&apos;&apos, </div>)}&apos;&apos, </div>)}";&apos;&apos,&quot;&quot;"""""""
    <div className = { cn("md: hidden", "; className)"}>";" {}""" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20" aria-label="{isOpen" ? "Close menu" : "Open menu"}>""" {isOpen ? <X className="h-6 w-6"/>  : <Menu className="h-6 w-6"/>}" </Button>", {}""" {isOpen && (<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">""" <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">""" <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""" <h2 className="text-lg font-semibold text-white">Menu</h2>""" <Button variant="ghost" size="sm" onClick="{toggleMenu}" className="p-2 text-white hover: bg-zion-purple/20">""" <X className="h-5 w-5"/>" </Button>" </div>"," {}""" <nav className="p-4 space-y-2"> {navigationItems.map((item) => {" const Icon = item.icon"; const isActive = item.matches(location.pathname)" return (<Link key="{item.href}" to="{item.href}" onClick="{toggleMenu}" className = {"; cn("flex items - center gap-3 px-4 py-3 rounded-lg text-white transition-colors", ", isActive"";" ? "bg - zion-purple/20 text-zion-cyan border border-zion-purple/40"", : "hover: bg - zion-purple/10 hover:text-zion-cyan")"," }>""" <Icon className="w-5 h-5"/>""" <span className="font-medium">{item.label}</span>" </Link>)})}" </nav>", {}""" <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">""" {isAuthenticated ? (<div className="space-y-3">""" <div className="flex items-center gap-3 px-4 py-2">""" <User className="h-5 w-5 text-zion-cyan"/>""" <span className="text-white font-medium">"{user?.email || "User"}" </span>"" </div>""" <Link to="/messages" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover : text-zion-cyan transition-colors">""" <MessageSquare className="h-5 w-5"/>" <span>Messages</span>"" </Link>""" <Link to="/profile" onClick="{toggleMenu}" className="flex items-center gap-3 px-4 py-2 text-white hover: text-zion-cyan transition-colors">""" <Settings className="h-5 w-5"/>" <span>Profile</span>"" </Link>""" </div>) : (<div className="space-y-3">""" <Link to="/login" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover: bg-zion-purple-dark transition-colors">"{t("auth.login")}"" </Link>""" <Link to="/signup" onClick="{toggleMenu}" className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hover:text-zion-blue-dark transition-colors"> {t("auth.signup")} </Link> </div>)} </div>" </div>" </div>)}" </div>)}",",""""
    onNavigate(path)}
"
  return ("""
      <div """
        className = "absolute inset-0 bg-black/50 backdrop-blur-sm""
        onClick="{onClose}""
      /" >"
      "
      {/*   */}""
      <div className="absolute right-0 top-0 h-full w-80 bg-zion-blue-dark border-l border-zion-purple/20 shadow-2xl">"
        {/*   */}""
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">""
          <div className="flex items-center space-x-2">""
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
              <span className="text-white font-bold text-lg">Z</span>"
            </div>""
            <span className="text-white font-semibold">Zion Tech Group</span>
          </div>"
          <button onClick={onClose}""
            className="p-2 text-zion-slate-light hover:text-white hove,"
    r: bg-zion-purple/10 rounded-lg transition-colors""
          >"",
      {/*   */}"""
        {/*   */}"""
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">"""
          <div className="flex items-center space-x-2">"""
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">"""
            </div>"""
          <button onClick="{onClose}" className="p-2 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors" >"
            <X className="h-5 w-5" />",
          <button onClick={onClose}"""
            className="p-2 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors"" >""
            <X className="h-5 w-5" /" >"",
          <button onClick={onClose}""
            className="p-2 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors  >""
            <X className="h-5 w-5" /" >
          </button>
",
        {/*   */}""
        <div className="flex-1 overflow-y-auto py-4">""
        {/*   */}"""
        <div className="flex-1 overflow-y-auto py-4">"""
          <nav className="space-y-1">
            {navigationItems.map((item) => ("
              <div key="{item.name}">"
                {item.children ? (""
                  <details className="group">""
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light hover:text-white hove,"
    r: bg-zion-purple/10 cursor-pointer transition-colors">""
                      <div className="flex items-center space-x-3">""
                        <item.icon className="h-5 w-5" />"",
                        <span className="font-medium">{item.name}</span>"
                      <ChevronRight className="h-4 w-4 group-open: rotate-90 transition-transform" />"
                    </summary>""
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (",
                        <Link key="{child.name}""
                          to={child.href}""
                          className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hove,"
    r: bg-zion-purple/10 transition-colors"">
                          onClick="{()" => handleNavigation(child.href)}
                {item.children ? ("
                  <details className="group">"
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 cursor-pointer transition-colors">"
                      <div className="flex items-center space-x-3">"
                        <item.icon className="h-5 w-5" />"
                      <ChevronRight className="h-4 w-4 group-open: rotate-90 transition-transform" />
                    </summary>",
                        <Link key="{child.name}" to="{child.href}" className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 transition-colors" onClick="{()" => handleNavigation(child.href)}
                        >"
                          {child.icon && <child.icon className="h-4 w-4 mr-3" />}"
              <div key={item.name}" >""
                {item.children ? ("""
                  <details className="group">"""
                    <summary className="flex items-center justify-between px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 cursor-pointer transition-colors">"""
                      <div className="flex items-center space-x-3">"""
                        <item .icon className="h-5 w-5" /" >""
                      <ChevronRight className="h-4 w-4 group-open:rotate-90 transition-transform" /" >""
                    </summary>""",
                        <Link key="{child.name}""
                          to={child.href}"""
                          className="flex items-center px-4 py-2 text-sm text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 transition-colors"">
                          onClick="{()" =" > handleNavigation(child.href)}""
                        >"""
                          {child.icon && <child .icon className="h-4 w-4 mr-3" /" >}"
                          <span>{child.name}</span>
                        </Link>
                      ))}
                  </details>
                ) : ("
                    to={item.href}""
                    className="flex items-center px-4 py-3 text-zion-slate-light hover:text-white hove,"
                    onClick="{()" => handleNavigation(item.href)}"
                    <item.icon className="h-5 w-5 mr-3" />""
                  <Link to="{item.href}" className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick="{()" => handleNavigation(item.href)}"
                    <item.icon className="h-5 w-5 mr-3" />"
                  <Link to={item.href}"""
                    className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"">
                    onClick="{()" =" > handleNavigation(item.href)}""
                    <item .icon className="h-5 w-5 mr-3" /" >"
                )}
          </nav>
"
        {/*   */}""
        <div className="p-4 border-t border-zion-purple/20 space-y-3">"
          {user ? (""
            <div className="text-center">""
              <p className="text-sm text-zion-slate-light mb-2">Welcome back {user.name}</p>"
              <Link""
                to="/dashboard"""
                className="block w-full px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover: bg-zion-purple/80 transition-colors""">
                onClick="{()" => handleNavigation("/dashboard")}"
        {/*   */}"""
          {user ? ("""
            <div className="text-center">"""
              <Link to="/dashboard" className="block w-full px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover: bg-zion-purple/80 transition-colors" onClick="{()" => handleNavigation("/dashboard")}"
              <Link """
                to="/dashboard""
                className="block w-full px-4 py-2 bg-zion-purple text-white text-center rounded-lg hover: bg-zion-purple/80 transition-colors"">
                onClick="{()" =" > handleNavigation("/dashboard")}"
                Go to Dashboard"
          ) : ("
            <div className="space-y-3">"
                to="/login"""
                className="block w-full px-4 py-2 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover: bg-zion-purple/10 transition-colors""",
                onClick="{()" => handleNavigation("/login")}
                Sign In"
              <Link"
                to="/register"""
                className="block w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover:from-zion-purple/80 hove,"
    r: to-zion-cyan/80 transition-all duration-300""">
                onClick="{()" => handleNavigation("/register")}"
          ) : ("""
              <Link to="/login" className="block w-full px-4 py-2 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover: bg-zion-purple/10 transition-colors" onClick="{()" => handleNavigation("/login")}"
              <Link to="/register" className="block w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover: from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300" onClick="{()" => handleNavigation("/register")}"
                to="/login""
                className="block w-full px-4 py-2 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover: bg-zion-purple/10 transition-colors"",
                onClick="{()" =" > handleNavigation("/login")}""
                to="/register""
                className="block w-full px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover: from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300"",
                onClick="{()" =" > handleNavigation("/register")}"
                Get Started,
          )} {/*   */}"
          <div className="pt-3 border-t border-zion-purple/20">"
              to="/request-quote"""
              className="flex items-center justify-center space-x-2 px-4 py-2 text-zion-cyan hover:text-white hove,"
    r: bg-zion-purple/10 rounded-lg transition-colors""",
              onClick="{()" => handleNavigation("/request-quote")}"
            >"
            <Link to="/request-quote" className="flex items-center justify-center space-x-2 px-4 py-2 text-zion-cyan hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors" onClick="{()" => handleNavigation("/request-quote")}"
              <DollarSign className="h-4 w-4" />
          "
          {/*   */}"""
              to="/request-quote""
              className="flex items-center justify-center space-x-2 px-4 py-2 text-zion-cyan hover: text-white hover:bg-zion-purple/10 rounded-lg transition-colors"",
              onClick="{()" =" > handleNavigation("/request-quote")}""
              <DollarSign className="h-4 w-4" /" >"
              <span>Request Quote</span>"
  )}""
  )}"";";,
}""
"