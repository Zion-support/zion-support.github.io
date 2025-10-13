import React,{useState}useEffect } from \"react\" ; ShoppingCart;} from \"lucide-react\" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(\"scroll\")handleScroll);} return () => window.removeEventListener(\"scroll\")handleScroll);} },[]);} const handleSearch = async (\"e\": React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push(\"/search?q=\"${encodeURIComponent(searchQuery.trim())}\");\"} ; const toggleDropdown = (\"itemName\": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {\" \"name\": \"Solutions\",\" \"href\": \"/solutions\"; \"dropdown\": [\"} { \"name\": \"AI Content Creation\"}\"href\": \"/solutions/ai-content-creation\" },\" {\"name\": \"Customer Support\"}\"href\": \"/solutions/customer-support\" },\" {\"name\": \"Email Automation\"}\"href\": \"/solutions/email-automation\" },\" {\"name\": \"Event Management\"}\"href\": \"/solutions/event-management\" },\" {\"name\": \"Project Management\"}\"href\": \"/solutions/project-management\" },\" {\"name\": \"Workflow Automation\"}\"href\": \"/solutions/workflow-automation\" }; ];},\" {\"name\": \"About\"}\"href\": \"/about\" },\" {\"name\": \"Blog\"}\"href\": \"/blog\" },\" {\"name\": \"Careers\"}\"href\": \"/careers\" },\" {\"name\": \"Contact\"}\"href\": \"/contact\" }; ]; return (\" <header className = \"{\"fixed\" w-full z-50 transition-all duration-300 ${\" scrolled ? \"bg-white shadow-lg\" : \"bg-white/95 backdrop-blur-sm\">}}\"} ; >\" <div className = \"max-w-7xl mx-auto px-4 \"sm\": px-6 lg: px-8\">\"</div>";"
<div className=\"flex justify-between items-center py-4\">; {}\"</div>"
<div className=\"flex items-center\">\"</div>"
<Link href=\"/\" className=\"flex items-center space-x-2\">\" <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\">\"</div>"
<span className=\"text-white font-bold text-lg\">Z>"
</div></div>\" <div className=\"hidden \"sm\": block\">\"</div>"
<span className=\"text-xl font-bold text-gray-900\"> Zion Tech Group</$1>"
<\" <div className=\"text-xs text-gray-500\"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}\" <nav className=\"hidden \"lg\": flex items-center space-x-1\"> {navigation.map(item => (\"}) <div key=\"{item.name}\" className=\"relative\"> {item.dropdown ? (\"</div>"
<div className=\"{\"relative>\"</div>"
<button onClick=\"{()\" => toggleDropdown(item.name)}\" className=\"{\"text-sm\" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \"/\")\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600 hover:bg-gray-50\"}\"} ; > {item.name}\" </button>"
<ChevronDown className=ml-1\" h-4 w-4\"} /> >"
</div> {activeDropdown === item.name && (\" <div className=\"absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border\"> {item.dropdown.map(dropdownItem => (\"</div>"
<Link key=\"{dropdownItem.name} href=\"{dropdownItem.href} className=\"{\"block\" px-4 py-2 text-sm text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600 transition-colors> onClick=\"{()\" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" <Link href=\"{item.href} className=\"{\"text-sm\" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600 hover:bg-gray-50\"}\"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}\" <div className=hidden\" \"md\": flex items-center space-x-4\"}>\"</div>"
<form onSubmit=\"{handleSearch}\" className=\"relative\">\" <input type=\"text; placeholder=\"Search...; value=\"{searchQuery} onChange=\"{e\" => setSearchQuery(e.target.value)}\" className=\"w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent\" />\" <Search className=\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" /></form>\" <div className=\"flex items-center space-x-3 text-sm text-gray-600\">\"</div>"
<a href=\"tel:+13024640950; className=\"flex items-center space-x-1 hover:text-blue-600 transition-colors\">\" <Phone className=\"h-4 w-4\" />\" <span className=\"hidden lg:inline\">+1 (302) 464-0950>"
</div></a>\" <a href=\"mailto: kleber@ziontechgroup.com, className=\"flex items-center space-x-1 hover:text-blue-600 transition-colors\">\" <Mail className=\"h-4 w-4\" />\" <span className=\"hidden lg:inline\">Contact>"
</div> >
</div> >
</div> ; {}\" <button onClick=\"{()\" => setMobileMenuOpen(!mobileMenuOpen)}\" className=\"lg\": hidden p-2 rounded-md text-gray-600 hover: text-gray-900 hover:bg-gray-100\"> {mobileMenuOpen ? (\" </button>"
<X className=\"h-6 w-6\" /> ) : (\" <Menu className=\"h-6 w-6\" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (\" <div className=\"lg\": hidden\">\"</div>"
<div className=\"{\"px-2\" pt-2 pb-3 space-y-1 bg-white border-t\"> {navigation.map(item => (\"})</div>"
<div key=\"{item.name}\"> {item.dropdown ? (}</div>"
<div>\"</div>"
<button onClick=\"{()\" => toggleDropdown(item.name)}\" className=\"{\"w-full\" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \"/\")\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600 hover:bg-gray-50\"}\"} ; > {item.name}\" </button>"
<ChevronDown className=h-4\" w-4\"} /> >"
</div> {activeDropdown === item.name && (\" <div className=\"pl-4 space-y-1\"> {item.dropdown.map(dropdownItem => (\"</div>"
<Link key=\"{dropdownItem.name} href=\"{dropdownItem.href} className=\"{\"block\" px-3 py-2 text-sm text-gray-600 \"hover\": text-blue-600 hover: bg-gray-50 rounded-md) onClick=\"{()\" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" <Link href=\"{item.href} className=\"{\"block\" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600 hover:bg-gray-50\"}\"}\" onClick=\"{()\" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}\" <div className=px-3\" py-2\"}>\"</div>"
<form onSubmit=\"{handleSearch}\" className=\"relative\">\" <input type=\"text; placeholder=\"Search...; value=\"{searchQuery} onChange=\"{e\" => setSearchQuery(e.target.value)}\" className=\"w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent\" />\" <Search className=\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" /> >"
</div> >
</div> ; {}\" <div className=\"px-3 py-2 space-y-2\">\"</div>"
<a href=\""tel\": +13024640950; className=\"flex items-center space-x-2 text-sm text-gray-600 hover: text-blue-600\">\" <Phone className=\"h-4 w-4\" />"
<span>+1 (302) 464-0950>
</div></a>\" <a href=\"mailto: kleber@ziontechgroup.com, className=\"flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600\">\" <Mail className=\"h-4 w-4\" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} } const React,{useState}useEffect } from "react" ; ShoppingCart;} from "lucide-react" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener("scroll")handleScroll);} return () => window.removeEventListener("scroll")handleScroll);} },[]);} const handleSearch = async (e: React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("/search?q="${encodeURIComponent(searchQuery.trim())}");"} ; const toggleDropdown = (itemName: string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {"; name: "Solutions"," href: "/solutions"; dropdown: ["} { name: "AI Content Creation"}href: "/solutions/ai-content-creation" }," {name: "Customer Support"}href: "/solutions/customer-support" }," {name: "Email Automation"}href: "/solutions/email-automation" }," {name: "Event Management"}href: "/solutions/event-management" }," {name: "Project Management"}href: "/solutions/project-management" }," {name: "Workflow Automation"}href: "/solutions/workflow-automation" }; ];}," {name: "About"}href: "/about" }," {name: "Blog"}href: "/blog" }," {name: "Careers"}href: "/careers" }," {name: "Contact"}href: "/contact" }; ]; return (" <header className = "{"fixed" w-full z-50 transition-all duration-300 ${" scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">}}"} ; >" <div className = "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"</div>"
<div className="text-left">; {}"</div>"
<div className="text-left">"</div>"
<Link href="/" className="text-left">" <div className="text-left">"</div>"
<span className="text-left">Z>"
</div></div>" <div className="text-left">"</div>"
<span className="text-left"> Zion Tech Group</$1>"
<" <div className="text-left"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}" <nav className="text-left"> {navigation.map(item => ("}) <div key="{item.name}" className="text-left"> {item.dropdown ? ("</div>"
<div className="text-left" relative>"</div>"
<button onClick="{()" => toggleDropdown(item.name)}" className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href |" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=ml-1" h-4 w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => ("</div>"
<Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-4 py-2 text-sm text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors> onClick="{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="{item.href} className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" <div className=hidden" md: flex items-center space-x-4"}>"</div>"
<form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search.; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" />" <Search className="text-left" /></form>" <div className="text-left">"</div>"
<a href="tel: +13024640950; className="text-left">" <Phone className="text-left" />" <span className="text-left">+1 (302) 464-0950>"
</div></a>" <a href="mailto: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />" <span className="text-left">Contact>"
</div> >
</div> >
</div> ; {}" <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}" className="text-left"> {mobileMenuOpen ? (" </button>"
<X className="text-left" /> ) : (" <Menu className="text-left" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (" <div className="text-left">"</div>"
<div className="text-left" px-2" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("})</div>"
<div key="{item.name}"> {item.dropdown ? (}</div>"
<div>"</div>"
<button onClick="{()" => toggleDropdown(item.name)}" className="text-left" w-full" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href |" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=h-4" w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => ("</div>"
<Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-3 py-2 text-sm text-gray-600 hover: text-blue-600 hover:bg-gray-50 rounded-md) onClick="{()" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="{item.href} className="text-left" block" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}"}" onClick="{()" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}" <div className=px-3" py-2"}>"</div>"
<form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search.; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" />" <Search className="text-left" /> >"
</div> >
</div> ; {}" <div className="text-left">"</div>"
<a href="tel: +13024640950; className="text-left">" <Phone className="text-left" />"
<span>+1 (302) 464-0950>
</div></a>" <a href="mailto: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }"" import _React,{useState}useEffect } from "react" ; ShoppingCart;} from "lucide-react" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener("scroll")handleScroll);} return () => window.removeEventListener("scroll")handleScroll);} },[]);} const handleSearch = async ("e": _React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("/search?q="${encodeURIComponent(searchQuery.trim())}");"} ; const toggleDropdown = ("itemName": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {" "name": "Solutions"," "href": "/solutions"; "dropdown": ["} { "name": "AI Content Creation"}"href": "/solutions/ai-content-creation" }," {"name": "Customer Support"}"href": "/solutions/customer-support" }," {"name": "Email Automation"}"href": "/solutions/email-automation" }," {"name": "Event Management"}"href": "/solutions/event-management" }," {"name": "Project Management"}"href": "/solutions/project-management" }," {"name": "Workflow Automation"}"href": "/solutions/workflow-automation" }; ];}," {"name": "About"}"href": "/about" }," {"name": "Blog"}"href": "/blog" }," {"name": "Careers"}"href": "/careers" }," {"name": "Contact"}"href": "/contact" }; ]; return (" <header className = "{"fixed" w-full z-50 transition-all duration-300 ${" scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">}}"} ; >" <div className = "max-w-7xl mx-auto px-4 "sm": px-6 lg: px-8">"</div>";"
<div className="text-left">; {}"</div>"
<div className="text-left">"</div>"
<Link href="/" className="text-left">" <div className="text-left">"</div>"
<span className="text-left">Z>"
</div></div>" <div className="text-left" sm": block">"</div>"
<span className="text-left"> Zion Tech Group</$1>"
<" <div className="text-left"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}" <nav className="text-left" lg": flex items-center space-x-1"> {navigation.map(item => ("}) <div key="{item.name}" className="text-left"> {item.dropdown ? ("</div>"
<div className="text-left" relative>"</div>"
<button onClick="{()" => toggleDropdown(item.name)}" className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600 hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=ml-1" h-4 w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => ("</div>"
<Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-4 py-2 text-sm text-gray-700 "hover": bg-blue-50 hover:text-blue-600 transition-colors> onClick="{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="{item.href} className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600 hover:bg-gray-50"}"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" <div className=hidden" "md": flex items-center space-x-4"}>"</div>"
<form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent" />" <Search className="text-left" /></form>" <div className="text-left">"</div>"
<a href="tel:+13024640950; className="text-left">" <Phone className="text-left" />" <span className="text-left">+1 (302) 464-0950>"
</div></a>" <a href="mailto: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />" <span className="text-left">Contact>"
</div> >
</div> >
</div> ; {}" <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}" className="text-left" lg": hidden p-2 rounded-md text-gray-600 hover: text-gray-900 hover:bg-gray-100"> {mobileMenuOpen ? (" </button>"
<X className="text-left" /> ) : (" <Menu className="text-left" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (" <div className="text-left" lg": hidden">"</div>"
<div className="text-left" px-2" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("})</div>"
<div key="{item.name}"> {item.dropdown ? (}</div>"
<div>"</div>"
<button onClick="{()" => toggleDropdown(item.name)}" className="text-left" w-full" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600 hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=h-4" w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => ("</div>"
<Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-3 py-2 text-sm text-gray-600 "hover": text-blue-600 hover: bg-gray-50 rounded-md) onClick="{()" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="{item.href} className="text-left" block" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600 hover:bg-gray-50"}"}" onClick="{()" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}" <div className=px-3" py-2"}>"</div>"
<form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent" />" <Search className="text-left" /> >"
</div> >
</div> ; {}" <div className="text-left">"</div>"
<a href=""tel": +13024640950; className="text-left">" <Phone className="text-left" />"
<span>+1 (302) 464-0950>
</div></a>" <a href="mailto: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }
import React,{useState}useEffect } from \"react\" ; ShoppingCart;} from \"lucide-react\" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(\"scroll\")handleScroll);} return () => window.removeEventListener(\"scroll\")handleScroll);} },[]);} const handleSearch = async (\"e\": React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push(\"/search?q=\"${encodeURIComponent(searchQuery.trim())}\");\"} ; const toggleDropdown = (\"itemName\": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {\" \"name\": \"Solutions\",\" \"href\": \"/solutions\"; \"dropdown\": [\"} { \"name\": \"AI Content Creation\"}\"href\": \"/solutions/ai-content-creation\" },\" {\"name\": \"Customer Support\"}\"href\": \"/solutions/customer-support\" },\" {\"name\": \"Email Automation\"}\"href\": \"/solutions/email-automation\" },\" {\"name\": \"Event Management\"}\"href\": \"/solutions/event-management\" },\" {\"name\": \"Project Management\"}\"href\": \"/solutions/project-management\" },\" {\"name\": \"Workflow Automation\"}\"href\": \"/solutions/workflow-automation\" }; ];},\" {\"name\": \"About\"}\"href\": \"/about\" },\" {\"name\": \"Blog\"}\"href\": \"/blog\" },\" {\"name\": \"Careers\"}\"href\": \"/careers\" },\" {\"name\": \"Contact\"}\"href\": \"/contact\" }; ]; return (\" <header className = \"{\"fixed\" w-full z-50 transition-all duration-300 ${\" scrolled ? \"bg-white shadow-lg\" : \"bg-white/95 backdrop-blur-sm\">}}\"} ; >\" < className = \"max-w-7xl mx-auto px-4 \"sm\": px-6,")$2 />";"
  lg: px-8\">\" <div className=\"flex justify-between items-center py-4\">; {}\" <div className=\"flex items-center\">\" <Link href=\"/\" className=\"flex items-center space-x-2\">\" <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\">\" <span className=\"text-white font-bold text-lg\">Z>"
</div></div>\" <div className=\"hidden \"sm\": block\">\" <span className=\"text-xl font-bold text-gray-900\"> Zion Tech Group; <\" <div className=\"text-xs text-gray-500\"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}\" <nav className=\"hidden \"lg\": flex items-center space-x-1\"> {navigation.map(item => (\"}) <div key=\"{item.name}\" className=\"relative\"> {item.dropdown ? (\" <div className=\"{\"relative>\" <button onClick=\"{()\" => toggleDropdown(item.name)}\" className=\"{\"text-sm\" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \"/\")\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600,""
  hover:bg-gray-50\"}\"} ; > {item.name}\" </button>"
<ChevronDown className=ml-1\" h-4 w-4\"} /> >"
</div> {activeDropdown === item.name && (\" <div className=\"absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border\"> {item.dropdown.map(dropdownItem => (\" < key=\"{dropdownItem.name} href=\"{dropdownItem.href} className=\"{/* TODO: Fix JSX expression */}")$2 />"
  hover:text-blue-600 transition-colors> onClick=\"{()\" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" < href=\"{item.href} className=\"{\"text-sm\" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600,")$2 />"
  hover:bg-gray-50\"}\"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}\" <div className=hidden\" \"md\": flex items-center space-x-4\"}>\" <form onSubmit=\"{handleSearch}\" className=\"relative\">\" <input type=\"text; placeholder=\"Search...; value=\"{searchQuery} onChange=\"{e\" => setSearchQuery(e.target.value)}\" className=\"w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,""
  focus:border-transparent\" />\" <Search className=\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" /></form>\" <div className=\"flex items-center space-x-3 text-sm text-gray-600\">\" < href=\"te,"$2 />"
  l:+13024640950; className=\"flex items-center space-x-1,""
  hover:text-blue-600 transition-colors\">\" <Phone className=\"h-4 w-4\" />\" < className=\"hidden,"$2 />"
  lg:inline\">+1 (302) 464-0950>"
</div></a>\" < href=\"mailt,"$2 />"
  o: kleber@ziontechgroup.com, className=\"flex items-center space-x-1,""
  hover:text-blue-600 transition-colors\">\" <Mail className=\"h-4 w-4\" />\" < className=\"hidden,"$2 />"
  lg:inline\">Contact>"
</div> >
</div> >
</div> ; {}\" <button onClick=\"{()\" => setMobileMenuOpen(!mobileMenuOpen)}\" className=\"lg\": hidden p-2 rounded-md text-gray-600,"
  hover: text-gray-900,""
  hover:bg-gray-100\"> {mobileMenuOpen ? (\" </button>"
<X className=\"h-6 w-6\" /> ) : (\" <Menu className=\"h-6 w-6\" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (\" <div className=\"lg\": hidden\">\" <div className=\"{\"px-2\" pt-2 pb-3 space-y-1 bg-white border-t\"> {navigation.map(item => (\"}) <div key=\"{item.name}\"> {item.dropdown ? (} <div>\" <button onClick=\"{()\" => toggleDropdown(item.name)}\" className=\"{\"w-full\" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \"/\")\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600,""
  hover:bg-gray-50\"}\"} ; > {item.name}\" </button>"
<ChevronDown className=h-4\" w-4\"} /> >"
</div> {activeDropdown === item.name && (\" <div className=\"pl-4 space-y-1\"> {item.dropdown.map(dropdownItem => (\" < key=\"{dropdownItem.name} href=\"{dropdownItem.href} className=\"{/* TODO: Fix JSX expression */}")$2 />"
  hover: bg-gray-50 rounded-md) onClick=\"{()\" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" < href=\"{item.href} className=\"{\"block\" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href\" ? \"text-blue-600 bg-blue-50} : \"text-gray-700 \"hover\": text-blue-600,"$2 />"
  hover:bg-gray-50\"}\"}\" onClick=\"{()\" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}\" <div className=px-3\" py-2\"}>\" <form onSubmit=\"{handleSearch}\" className=\"relative\">\" <input type=\"text; placeholder=\"Search...; value=\"{searchQuery} onChange=\"{e\" => setSearchQuery(e.target.value)}\" className=\"w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,""
  focus:border-transparent\" />\" <Search className=\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" /> >"
</div> >
</div> ; {}\" <div className=\"px-3 py-2 space-y-2\">\" < href=\"tel\": +13024640950; className=\"flex items-center space-x-2 text-sm text-gray-600,"$2 />"
  hover: text-blue-600\">\" <Phone className=\"h-4 w-4\" />"
<span>+1 (302) 464-0950>
</div></a>\" < href=\"mailt,"$2 />"
  o: kleber@ziontechgroup.com, className=\"flex items-center space-x-2 text-sm text-gray-600,""
  hover:text-blue-600\">\" <Mail className=\"h-4 w-4\" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} } const React,{useState}useEffect } from "react" ; ShoppingCart;} from "lucide-react" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener("scroll")handleScroll);} return () => window.removeEventListener("scroll")handleScroll);} },[]);} const handleSearch = async (e: React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("/search?q="${encodeURIComponent(searchQuery.trim())}");"} ; const toggleDropdown = (itemNam)"
  e: string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {/* TODO: Fix JSX expression */}""
  n: ["} {/* TODO: Fix JSX expression */}""
  e: "AI Content Creation"}hre,""
  f: "/solutions/ai-content-creation" }," {/* TODO: Fix JSX expression */}""
  e: "Customer Support"}hre,""
  f: "/solutions/customer-support" }," {/* TODO: Fix JSX expression */}""
  e: "Email Automation"}hre,""
  f: "/solutions/email-automation" }," {/* TODO: Fix JSX expression */}""
  e: "Event Management"}hre,""
  f: "/solutions/event-management" }," {/* TODO: Fix JSX expression */}""
  e: "Project Management"}hre,""
  f: "/solutions/project-management" }," {/* TODO: Fix JSX expression */}""
  e: "Workflow Automation"}hre,""
  f: "/solutions/workflow-automation" }; ];}," {/* TODO: Fix JSX expression */}""
  e: "About"}hre,""
  f: "/about" }," {/* TODO: Fix JSX expression */}""
  e: "Blog"}hre,""
  f: "/blog" }," {/* TODO: Fix JSX expression */}""
  e: "Careers"}hre,""
  f: "/careers" }," {/* TODO: Fix JSX expression */}""
  e: "Contact"}hre,""
  f: "/contact" }; ]; return (" <header className = "{"fixed" w-full z-50 transition-all duration-300 ${" scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">}}"} ; >" < className = "max-w-7xl mx-auto px-4,$2 />"
  sm: px-6,")"
  lg:px-8">" <div className="text-left">; {}" <div className="text-left">" <Link href="/" className="text-left">" <div className="text-left">" <span className="text-left">Z>"
</div></div>" <div className="text-left">" <span className="text-left"> Zion Tech Group; <" <div className="text-left"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}" <nav className="text-left"> {navigation.map(item => ("}) <div key="{item.name}" className="text-left"> {item.dropdown ? (" <div className="text-left" relative>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href |" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700,"
  hover: text-blue-600,""
  hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=ml-1" h-4 w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" < key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-4 py-2 text-sm text-gray-700,$2 />"
  hover: bg-blue-50,")"
  hover:text-blue-600 transition-colors> onClick="{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="{item.href} className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700,$2 />"
  hover: text-blue-600,")"
  hover:bg-gray-50"}"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" < className=hidden" m,"$2 />"
  d: flex items-center space-x-4"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search.; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" />" <Search className="text-left" /></form>" <div className="text-left">" < href="te,"$2 />"
  l: +13024640950; className="text-left">" <Phone className="text-left" />" <span className="text-left">+1 (302) 464-0950>"
</div></a>" < href="mailt,"$2 />"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />" <span className="text-left">Contact>"
</div> >
</div> >
</div> ; {}" <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}" className="text-left"> {mobileMenuOpen ? (" </button>"
<X className="text-left" /> ) : (" <Menu className="text-left" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (" <div className="text-left">" <div className="text-left" px-2" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("}) <div key="{item.name}"> {item.dropdown ? (} <div>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" w-full" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href |" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700,"
  hover: text-blue-600,""
  hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=h-4" w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" < key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-3 py-2 text-sm text-gray-600,$2 />"
  hover: text-blue-600,")"
  hover:bg-gray-50 rounded-md) onClick="{()" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="{item.href} className="text-left" block" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700,$2 />"
  hover: text-blue-600,""
  hover:bg-gray-50"}"}" onClick="{()" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}" <div className=px-3" py-2"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search.; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" />" <Search className="text-left" /> >"
</div> >
</div> ; {}" <div className="text-left">" < href="te,"$2 />"
  l: +13024640950; className="text-left">" <Phone className="text-left" />"
<span>+1 (302) 464-0950>
</div></a>" < href="mailt,"$2 />"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }"" import _React,{useState}useEffect } from "react" ; ShoppingCart;} from "lucide-react" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener("scroll")handleScroll);} return () => window.removeEventListener("scroll")handleScroll);} },[]);} const handleSearch = async ("e": _React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("/search?q="${encodeURIComponent(searchQuery.trim())}");"} ; const toggleDropdown = ("itemName": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {" "name": "Solutions"," "href": "/solutions"; "dropdown": ["} { "name": "AI Content Creation"}"href": "/solutions/ai-content-creation" }," {"name": "Customer Support"}"href": "/solutions/customer-support" }," {"name": "Email Automation"}"href": "/solutions/email-automation" }," {"name": "Event Management"}"href": "/solutions/event-management" }," {"name": "Project Management"}"href": "/solutions/project-management" }," {"name": "Workflow Automation"}"href": "/solutions/workflow-automation" }; ];}," {"name": "About"}"href": "/about" }," {"name": "Blog"}"href": "/blog" }," {"name": "Careers"}"href": "/careers" }," {"name": "Contact"}"href": "/contact" }; ]; return (" <header className = "{"fixed" w-full z-50 transition-all duration-300 ${" scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">}}"} ; >" < className = "max-w-7xl mx-auto px-4 "sm": px-6,")$2 />";"
  lg: px-8">" <div className="text-left">; {}" <div className="text-left">" <Link href="/" className="text-left">" <div className="text-left">" <span className="text-left">Z>"
</div></div>" <div className="text-left" sm": block">" <span className="text-left"> Zion Tech Group; <" <div className="text-left"> Technology Solutions) >"
</div> >
</div> >
</div> ); {}" <nav className="text-left" lg": flex items-center space-x-1"> {navigation.map(item => ("}) <div key="{item.name}" className="text-left"> {item.dropdown ? (" <div className="text-left" relative>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,""
  hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=ml-1" h-4 w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" < key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-4 py-2 text-sm text-gray-700 "hover": bg-blue-50,")$2 />"
  hover:text-blue-600 transition-colors> onClick="{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="{item.href} className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,")$2 />"
  hover:bg-gray-50"}"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" <div className=hidden" "md": flex items-center space-x-4"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,""
  focus:border-transparent" />" <Search className="text-left" /></form>" <div className="text-left">" < href="te,"$2 />"
  l:+13024640950; className="text-left">" <Phone className="text-left" />" <span className="text-left">+1 (302) 464-0950>"
</div></a>" < href="mailt,"$2 />"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />" <span className="text-left">Contact>"
</div> >
</div> >
</div> ; {}" <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}" className="text-left" lg": hidden p-2 rounded-md text-gray-600,"
  hover: text-gray-900,""
  hover:bg-gray-100"> {mobileMenuOpen ? (" </button>"
<X className="text-left" /> ) : (" <Menu className="text-left" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (" <div className="text-left" lg": hidden">" <div className="text-left" px-2" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("}) <div key="{item.name}"> {item.dropdown ? (} <div>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" w-full" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,""
  hover:bg-gray-50"}"} ; > {item.name}" </button>"
<ChevronDown className=h-4" w-4"} /> >"
</div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" < key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-3 py-2 text-sm text-gray-600 "hover": text-blue-600,")$2 />"
  hover: bg-gray-50 rounded-md) onClick="{()" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="{item.href} className="text-left" block" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,"$2 />"
  hover:bg-gray-50"}"}" onClick="{()" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}" <div className=px-3" py-2"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,""
  focus:border-transparent" />" <Search className="text-left" /> >"
</div> >
</div> ; {}" <div className="text-left">" <a href="tel": +13024640950; className="text-left">" <Phone className="text-left" />"
<span>+1 (302) 464-0950>
</div></a>" < href="mailt,"$2 />"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }"</span></span>"
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</span></span>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</a></header>
</header></header>
</header></header>
</header></nav>
</nav></nav>
</nav></nav>
</nav>