import React,{useState}useEffect } from \"react\"lucide-react\" export default function EnhancedHeader() {;
const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(\")handleScroll);} return () => window.removeEventListener(\"scroll\"e\": React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push(\"${encodeURIComponent(searchQuery.trim())}\");\"itemName\": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {\"name\": \",\" \": \"/solutions\"dropdown\": [\"name\": \"}\"href\"/solutions/ai-content-creation\" },\"name\": \"}\"href\"/solutions/customer-support\" },\"name\": \"}\"href\"/solutions/email-automation\" },\"name\": \"}\"href\"/solutions/event-management\" },\"name\": \"}\"href\"/solutions/project-management\" },\"name\": \"}\"href\"/solutions/workflow-automation\" }; ];},\"name\": \"}\"href\"/about\" },\"name\": \"}\"href\"/blog\" },\"name\": \"}\"href\"/careers\" },\"name\": \"}\"href\"/contact\" }; ]; return (\"{\"fixed\" scrolled ? \"bg-white shadow-lg\"bg-white/95 backdrop-blur-sm\">}}\" <div className = \"max-w-7 xl mx-auto px-4 \": px-6 lg: px-8\">\";"
<div className=\">; {}\"</div>"flex items-center\">\"
<Link href=\"/\"flex items-center space-x-2\">\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\">\"
<span className=\"text-white font-bold text-lg\"
</div></div>\" <div className=\"sm\": block\"</div>"
<span className=\"> Zion Tech Group</$1>"
<\"text-xs text-gray-500\"> Technology Solutions) >" <nav className=\"hidden \": flex items-center space-x-1\"> {navigation.map(item => (\"{item.name}\" className=\"> {item.dropdown ? (\"</div>"{\"relative>\"
<button onClick=\"{()\" className=\"{\" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \")\" ? \"text-gray-700 \"hover\"}\"} ; > {item.name}\"
<ChevronDown className=ml-1\" h-4 w-4\"
</div> {activeDropdown === item.name && (\" <div className=\"> {item.dropdown.map(dropdownItem => (\"</div>"{dropdownItem.name} href=\"{dropdownItem.href} className=\"block\" px-4 py-2 text-sm text-gray-700 \": bg-blue-50 hover:text-blue-600 transition-colors> onClick=\"{()\"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" <Link href=\"{\"text-sm\" ? \"text-blue-600 bg-blue-50} : \"hover\": text-blue-600 hover:bg-gray-50\"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}\" \"md\"}>\"</div>"{handleSearch}\" className=\">\" <input type=\"Search...; value=\"{searchQuery} onChange=\" => setSearchQuery(e.target.value)}\" className=\"focus\": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent\" <Search className=\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" <div className=\"flex items-center space-x-3 text-sm text-gray-600\"</div>"
<a href=\"flex items-center space-x-1 hover:text-blue-600 transition-colors\">\"h-4 w-4\" />\"hidden lg:inline\">+1 (302) 464-0950>" <a href=\"mailto: kleber@ziontechgroup.com, className=\">\" <Mail className=\" />\" <span className=\">Contact>"
</div> >
</div> >
</div> ; {}\"{()\" => setMobileMenuOpen(!mobileMenuOpen)}\"lg\": hidden p-2 rounded-md text-gray-600 hover: text-gray-900 hover:bg-gray-100\" </button>"
<X className=\" /> ) : (\" <Menu className=\" />}) )} ; >"
</div> >
</div> {} ; {mobileMenuOpen && (\"lg\": hidden\"</div>"
<div className=\"px-2\" pt-2 pb-3 space-y-1 bg-white border-t\"})</div>"
<div key=\"> {item.dropdown ? (}</div>"
<div>\"
<button onClick=\"{()\" className=\"{\" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \")\" ? \"text-gray-700 \"hover\"}\"} ; > {item.name}\"
<ChevronDown className=h-4\" w-4\"
</div> {activeDropdown === item.name && (\" <div className=\"> {item.dropdown.map(dropdownItem => (\"</div>"{dropdownItem.name} href=\"{dropdownItem.href} className=\"block\" px-3 py-2 text-sm text-gray-600 \": text-blue-600 hover: bg-gray-50 rounded-md) onClick=\"{()\"
</div> ))} ; >
</div> )} ; >
</div> ) : (\" <Link href=\"{\"block\" ? \"text-blue-600 bg-blue-50} : \"hover\": text-blue-600 hover:bg-gray-50\"}\" onClick=\" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}\" py-2\"}>\"
<form onSubmit=\"{handleSearch}\"relative\">\"text; placeholder=\"Search...; value=\"{e\" => setSearchQuery(e.target.value)}\"w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\" />\" <Search className=\" /> >"
</div> >
</div> ; {}\"px-3 py-2 space-y-2\">\"
<a href=\"": +13024640950; className=\"flex items-center space-x-2 text-sm text-gray-600 hover: text-blue-600\" <Phone className=\"h-4 w-4\"
<span>+1 (302) 464-0950>
</div></a>\" <a href=\"flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600\">\"h-4 w-4\" />"react" ; ShoppingCart;} from " export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener("scroll"scroll")handleScroll);} },[]);} const handleSearch = async (e: React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("${encodeURIComponent(searchQuery.trim())}");"; name: "Solutions" href: "/solutions"} { name: "AI Content Creation"/solutions/ai-content-creation" },"Customer Support"}href: " }," {name: "}href: "/solutions/email-automation" {name: "Event Management"/solutions/event-management" },"Project Management"}href: " }," {name: "}href: "/solutions/workflow-automation" {name: "About"/about" },"Blog"}href: " }," {name: "}href: "/careers" {name: "Contact"/contact" }; ]; return ("{" w-full z-50 transition-all duration-300 ${"bg-white shadow-lg" : ">}}"} ; >"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8"</div>"text-left"</div>"text-left"</div>"/" className=" <div className="text-left"
<span className="text-left" <div className="text-left"
<span className="text-left" <div className="text-left" <nav className="text-left"{item.name}" className="</div>"
<div className="</div>"
<button onClick=" => toggleDropdown(item.name)}" className=" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href |" router.pathname.startsWith(item.href + ")" ? "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}" </button>"
<ChevronDown className=ml-1"} /> >"
</div> {activeDropdown === item.name && ("text-left"</div>"{dropdownItem.name} href="{dropdownItem.href} className=" px-4 py-2 text-sm text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors> onClick="{()"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="text-left" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href"text-blue-600 bg-blue-50} : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" md: flex items-center space-x-4"}>"
<form onSubmit="{handleSearch}"text-left" <input type="Search.; value="{searchQuery} onChange=" => setSearchQuery(e.target.value)}" className=" <Search className="text-left"text-left"</div>"tel: +13024640950; className="text-left"text-left" <span className="
</div></a>" <a href="text-left" <Mail className=" <span className="text-left" <button onClick="{()" className="text-left"
<X className="text-left"text-left"
</div> >
</div> {} ; {mobileMenuOpen && ("text-left"</div>"text-left" pt-2 pb-3 space-y-1 bg-white border-t"})</div>"
<div key="> {item.dropdown ? (}</div>"
<div>"
<button onClick="{()" className="text-left" router.pathname.startsWith(item.href + "/" ? "text-blue-600 bg-blue-50} : "}"} ; > {item.name}"
<ChevronDown className=h-4" w-4"
</div> {activeDropdown === item.name && (" <div className="</div>"
<Link key="{dropdownItem.href} className="text-left"{()" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >" <Link href="{item.href} className=" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}" onClick="{()"
</div> )} ; >
</div> ))} ; {}" <div className=px-3"}>"</div>"{handleSearch}" className=" <input type="text; placeholder="{searchQuery} onChange="{e" className="text-left"text-left"
</div> >
</div> ; {}"text-left"</div>"tel: +13024640950; className="text-left"text-left"
<span>+1 (302) 464-0950>
</div></a>"mailto: kleber@ziontechgroup.com, className="text-left"text-left"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }" import _React,{useState}useEffect } from "react"lucide-react" export default function EnhancedHeader() {;
const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(")handleScroll);} return () => window.removeEventListener("scroll"e": _React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("${encodeURIComponent(searchQuery.trim())}");"itemName": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {"name": "," ": "/solutions"dropdown": ["name": "}"href"/solutions/ai-content-creation" },"name": "}"href"/solutions/customer-support" },"name": "}"href"/solutions/email-automation" },"name": "}"href"/solutions/event-management" },"name": "}"href"/solutions/project-management" },"name": "}"href"/solutions/workflow-automation" }; ];},"name": "}"href"/about" },"name": "}"href"/blog" },"name": "}"href"/careers" },"name": "}"href"/contact" }; ]; return ("{" w-full z-50 transition-all duration-300 ${"bg-white shadow-lg" : ">}}"} ; >"max-w-7 xl mx-auto px-4 ": px-6 lg: px-8"</div>";"text-left"</div>"text-left"</div>"/" className=" <div className="text-left"
<span className="text-left" <div className="text-left">"</div>"text-left"
<"text-left"
</div> >
</div> >
</div> ); {}"text-left": flex items-center space-x-1"}) <div key="{item.name}"text-left"</div>"text-left"</div>"{()" => toggleDropdown(item.name)}"text-left" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||"/")"text-blue-600 bg-blue-50} : "text-gray-700 ": text-blue-600 hover:bg-gray-50"}" </button>"
<ChevronDown className=ml-1"} /> >"
</div> {activeDropdown === item.name && ("text-left"</div>"{dropdownItem.name} href="{dropdownItem.href} className=" px-4 py-2 text-sm text-gray-700 "hover"{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >" <Link href="{item.href} className=" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-gray-700 "hover"}"} ; > {item.name} ) >" <div className=hidden" ": flex items-center space-x-4"}>"
<form onSubmit="{handleSearch}"text-left" <input type="Search...; value="{searchQuery} onChange=" => setSearchQuery(e.target.value)}" className=": outline-none focus: ring-2 focus:ring-blue-500 focus:border-transparent" />"text-left" <div className="</div>"
<a href="text-left" <Phone className=" <span className="text-left" <a href="mailto: kleber@ziontechgroup.com, className=" <Mail className="text-left"text-left"
</div> >
</div> >
</div> ; {}"{()" => setMobileMenuOpen(!mobileMenuOpen)}"text-left": hidden p-2 rounded-md text-gray-600 hover: text-gray-900 hover:bg-gray-100" </button>"
<X className=" <Menu className="text-left" <div className="text-left">"</div>"text-left" pt-2 pb-3 space-y-1 bg-white border-t"})</div>"
<div key="> {item.dropdown ? (}</div>"
<div>"
<button onClick="{()" className="text-left" router.pathname.startsWith(item.href + "/" ? "text-blue-600 bg-blue-50} : "hover": text-blue-600 hover:bg-gray-50"} ; > {item.name}" </button>" w-4"} /> >" <div className="text-left"
<Link key="{dropdownItem.name} href="text-left" px-3 py-2 text-sm text-gray-600 ": text-blue-600 hover: bg-gray-50 rounded-md) onClick="{()"
</div> ))} ; >
</div> )} ; >
</div> ) : (" <Link href="text-left" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href"text-blue-600 bg-blue-50} : "text-gray-700 ": text-blue-600 hover:bg-gray-50"}" onClick="{()"
</div> )} ; >
</div> ))} ; {}" <div className=px-3"}>"</div>"{handleSearch}" className=" <input type="text; placeholder="{searchQuery} onChange="{e" className="text-left" />" <Search className="
</div> >
</div> ; {}" <div className="</div>"
<a href="tel": +13024640950; className=" <Phone className="text-left" <a href="mailto: kleber@ziontechgroup.com, className=" <Mail className="text-left"react\" ; ShoppingCart;} from \" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(\"scroll\"scroll\")handleScroll);} },[]);} const handleSearch = async (\": React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push(\"/search?q=\");\"} ; const toggleDropdown = (\": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {\" \": \"Solutions\" \"href\"/solutions\"; \": [\"} { \": \"AI Content Creation\"href\": \" },\" {\": \"Customer Support\"href\": \" },\" {\": \"Email Automation\"href\": \" },\" {\": \"Event Management\"href\": \" },\" {\": \"Project Management\"href\": \" },\" {\": \"Workflow Automation\"href\": \" }; ];},\" {\": \"About\"href\": \" },\" {\": \"Blog\"href\": \" },\" {\": \"Careers\"href\": \" },\" {\": \"Contact\"href\": \" }; ]; return (\" <header className = \"fixed\" w-full z-50 transition-all duration-300 ${\"bg-white shadow-lg\" : \">}}\"} ; >\"max-w-7 xl mx-auto px-4 \"sm\")$2 />";">\" <div className=\">; {}\" <div className=\">\" <Link href=\" className=\"flex items-center space-x-2\" <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" <span className=\"text-white font-bold text-lg\"
</div></div>\" <div className=\"sm\": block\" <span className=\"text-xl font-bold text-gray-900\" <div className=\"text-xs text-gray-500\"
</div> >
</div> >
</div> ); {}\" <nav className=\"lg\": flex items-center space-x-1\"}) <div key=\"{item.name}\"relative\"> {item.dropdown ? (\"{\"relative>\"{()\" => toggleDropdown(item.name)}\"{\"text-sm\" router.pathname.startsWith(item.href + \"/\" ? \"text-blue-600 bg-blue-50} : \"hover\": text-blue-600,"
  hover:bg-gray-50\"}\" </button>"
<ChevronDown className=ml-1\"} /> >"
</div> {activeDropdown === item.name && (\"absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border\"> {item.dropdown.map(dropdownItem => (\"{dropdownItem.name} href=\"{dropdownItem.href} className=\")$2 />"
  hover:text-blue-600 transition-colors> onClick=\" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >"
</div> ))} ; >
</div> )} ; >
</div> ) : (\"{item.href} className=\"{\" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href\" ? \"text-gray-700 \"hover\")$2 />"
  hover:bg-gray-50\"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}\" \"md\"}>\" <form onSubmit=\" className=\"relative\" <input type=\"text; placeholder=\"{searchQuery} onChange=\"{e\" className=\"w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,"
  focus:border-transparent\" />\"absolute left-3 top-2.5 h-4 w-4 text-gray-400\" /></form>\"flex items-center space-x-3 text-sm text-gray-600\">\"te,"$2 />"flex items-center space-x-1,"">\" <Phone className=\" />\" < className=\"$2 />"
  lg:inline\"
</div></a>\" < href=\"$2 />"
  o: kleber@ziontechgroup.com, className=\""
  hover:text-blue-600 transition-colors\" <Mail className=\"h-4 w-4\" < className=\"hidden,"
  lg:inline\">Contact>" <button onClick=\"{()\" className=\"lg\"
  hover: text-gray-900,""> {mobileMenuOpen ? (\" </button>"h-6 w-6\" /> ) : (\"h-6 w-6\" />}) )} ; >" <div className=\"lg\">\" <div className=\"px-2\" pt-2 pb-3 space-y-1 bg-white border-t\"}) <div key=\"{item.name}\" <button onClick=\"{()\" className=\"{\" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href ||\" router.pathname.startsWith(item.href + \")\" ? \"text-gray-700 \"hover\""
  hover:bg-gray-50\"} ; > {item.name}\" </button>" w-4\"} /> >" <div className=\"pl-4 space-y-1\" < key=\"{dropdownItem.name} href=\"{/* TODO: Fix JSX expression */}")$2 />"{()\" => {} setMobileMenuOpen(false)}; setActiveDropdown(null)}} ; > {dropdownItem.name} ; >" < href=\"{item.href} className=\"block\" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href\"text-blue-600 bg-blue-50} : \"text-gray-700 \": text-blue-600,"$2 />"}\"}\"{()\" => setMobileMenuOpen(false)} ; > {item.name} ; >" <div className=px-3\" py-2\" <form onSubmit=\"{handleSearch}\"relative\">\"text; placeholder=\"Search...; value=\"{e\" => setSearchQuery(e.target.value)}\"w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg \"focus\"
  focus: ring-2,
  focus:ring-blue-500,"" />\" <Search className=\" /> >"
</div> >
</div> ; {}\"px-3 py-2 space-y-2\">\"tel\": +13024640950; className=\"$2 />"
  hover: text-blue-600\" <Phone className=\"h-4 w-4\"
<span>+1 (302) 464-0950>
</div></a>\" < href=\"$2 />"
  o: kleber@ziontechgroup.com, className=\""
  hover:text-blue-600\" <Mail className=\"h-4 w-4\"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} } const React,{useState}useEffect } from "react"lucide-react" export default function EnhancedHeader() {; const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(")handleScroll);} return () => window.removeEventListener("scroll"/search?q="${encodeURIComponent(searchQuery.trim())}"} ; const toggleDropdown = (itemNam)"
  e: string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {/* TODO: Fix JSX expression */}"
  n: ["} {/* TODO: Fix JSX expression */}"
  e: "AI Content Creation""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Customer Support""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Email Automation""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Event Management""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Project Management""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Workflow Automation""
  f: " }; ];}," {/* TODO: Fix JSX expression */}"
  e: "About""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Blog""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Careers""
  f: " }," {/* TODO: Fix JSX expression */}"
  e: "Contact""
  f: " }; ]; return (" <header className = " w-full z-50 transition-all duration-300 ${" scrolled ? " : "bg-white/95 backdrop-blur-sm"} ; >" < className = ")"
  lg:px-8" <div className="text-left"text-left" <Link href=" className="text-left"text-left" <span className="
</div></div>" <div className=" <span className="text-left"text-left"
</div> >
</div> >
</div> ); {}"text-left"}) <div key=" className="text-left"text-left" <button onClick=" => toggleDropdown(item.name)}" className=" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href |" router.pathname.startsWith(item.href + ")" ? "text-gray-700,"
  hover: text-blue-600,"
  hover:bg-gray-50"}" </button>"
<ChevronDown className=ml-1"} /> >"
</div> {activeDropdown === item.name && ("text-left" < key="{dropdownItem.href} className="text-left"
  hover: bg-blue-50,")"{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >" < href="{item.href} className=" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-gray-700,$2 />"
  hover: text-blue-600,"
  hover:bg-gray-50"}"
</div> )} ; >
</div> ))} ; >
</div> {}" < className=hidden"$2 />"
  d: flex items-center space-x-4" <form onSubmit="{handleSearch}"text-left" <input type="Search.; value="{searchQuery} onChange=" => setSearchQuery(e.target.value)}" className=" <Search className="text-left"text-left" < href="$2 />"
  l: +13024640950; className=" <Phone className="text-left"text-left"
</div></a>"mailt,"$2 />"text-left" <Mail className=" <span className="text-left" <button onClick="{()" className="text-left"
<X className="text-left"text-left"
</div> >
</div> {} ; {mobileMenuOpen && ("text-left" <div className=" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("{item.name}"> {item.dropdown ? (} <div>"{()" => toggleDropdown(item.name)}"text-left" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${; router.pathname === item.href |"/")"text-blue-600 bg-blue-50} : "text-gray-700,""
  hover:bg-gray-50"} ; > {item.name}" </button>" w-4"} /> >" <div className="text-left"{dropdownItem.name} href="{dropdownItem.href} className=" px-3 py-2 text-sm text-gray-600,$2 />"
  hover: text-blue-600,"
  hover:bg-gray-50 rounded-md) onClick="{()"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="text-left" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href"text-blue-600 bg-blue-50} : "text-gray-700,$2 />""
  hover:bg-gray-50"}" onClick=" => setMobileMenuOpen(false)} ; > {item.name} ; >"
</div> )} ; >
</div> ))} ; {}" py-2"}>"{handleSearch}" className=" <input type="text; placeholder="{searchQuery} onChange="{e" className="text-left"text-left"
</div> >
</div> ; {}"text-left" < href="$2 />"
  l: +13024640950; className=" <Phone className="text-left" < href="mailt,"
  o: kleber@ziontechgroup.com, className="text-left"text-left"
<span>kleber@ziontechgroup.com>
</div> >
</div> >
</div></div> )} ; >
</div> >
</div> );} }" import _React,{useState}useEffect } from "react"lucide-react" export default function EnhancedHeader() {;
const router = useRouter()}} const [mobileMenuOpen,setMobileMenuOpen] = useState(false);} const [searchQuery,setSearchQuery] = useState();} const [scrolled,setScrolled] = useState(false);} const [activeDropdown,setActiveDropdown] = useState<string | null>(null);} useEffect(() => {; const handleScroll = () => {; setScrolled(window.scrollY > 50)}} ; window.addEventListener(")handleScroll);} return () => window.removeEventListener("scroll"e": _React.FormEvent) => {} e.preventDefault()}; if (searchQuery.trim()) {; router.push("${encodeURIComponent(searchQuery.trim())}");"itemName": string) => {} setActiveDropdown(activeDropdown === itemName ? null : itemName)} ; const navigation = [];}; {"name": "," ": "/solutions"dropdown": ["name": "}"href"/solutions/ai-content-creation" },"name": "}"href"/solutions/customer-support" },"name": "}"href"/solutions/email-automation" },"name": "}"href"/solutions/event-management" },"name": "}"href"/solutions/project-management" },"name": "}"href"/solutions/workflow-automation" }; ];},"name": "}"href"/about" },"name": "}"href"/blog" },"name": "}"href"/careers" },"name": "}"href"/contact" }; ]; return ("{" w-full z-50 transition-all duration-300 ${"bg-white shadow-lg" : ">}}"} ; >"max-w-7 xl mx-auto px-4 ": px-6,";"
  lg: px-8" <div className="text-left"text-left" <Link href=" className="text-left"text-left" <span className="
</div></div>" <div className=": block">"text-left" <div className="
</div> >
</div> >
</div> ); {}" <nav className=": flex items-center space-x-1"> {navigation.map(item => ("{item.name}" className=" <div className="text-left"{()" => toggleDropdown(item.name)}"text-left" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${; router.pathname === item.href ||"/")"text-blue-600 bg-blue-50} : "text-gray-700 ": text-blue-600,""}"} ; > {item.name}"
<ChevronDown className=ml-1" h-4 w-4"
</div> {activeDropdown === item.name && (" <div className=" < key="{dropdownItem.name} href="text-left" px-4 py-2 text-sm text-gray-700 ": bg-blue-50,")$2 />"{()" => setActiveDropdown(null)} ; > {dropdownItem.name} ; >" < href="{item.href} className=" font-medium px-4 py-2 rounded-md transition-colors ${; router.pathname === item.href" ? "text-gray-700 "hover")$2 />"
  hover:bg-gray-50"} ; > {item.name} ) >"
</div> )} ; >
</div> ))} ; >
</div> {}" "md"}>" <form onSubmit=" className="text-left"text; placeholder="Search...; value="{e" => setSearchQuery(e.target.value)}"text-left": outline-none,""
  focus:border-transparent" <Search className="text-left"text-left" < href="$2 />"
  l:+13024640950; className=" <Phone className="text-left"text-left"
</div></a>"mailt,"$2 />"text-left" <Mail className=" <span className="text-left" <button onClick="{()" className="text-left"
  hover: text-gray-900,""> {mobileMenuOpen ? (" </button>"text-left" <Menu className="
</div> >
</div> {} ; {mobileMenuOpen && (" <div className=": hidden">"text-left" pt-2 pb-3 space-y-1 bg-white border-t"}) <div key="{item.name}" <button onClick="{()" className="text-left" router.pathname.startsWith(item.href + "/" ? "text-blue-600 bg-blue-50} : "hover": text-blue-600,"
  hover:bg-gray-50"}" </button>"
<ChevronDown className=h-4"} /> >"
</div> {activeDropdown === item.name && ("text-left" < key="{dropdownItem.href} className="text-left"hover": text-blue-600,"
  hover: bg-gray-50 rounded-md) onClick="{()"
</div> ))} ; >
</div> )} ; >
</div> ) : (" < href="text-left" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href"text-blue-600 bg-blue-50} : "text-gray-700 ": text-blue-600,"$2 />"}"}"{()" => setMobileMenuOpen(false)} ; > {item.name} ; >" <div className=px-3" py-2" <form onSubmit="{handleSearch}"text-left" <input type="Search...; value="{searchQuery} onChange=" => setSearchQuery(e.target.value)}" className=": outline-none,"
  focus: ring-2,
  focus:ring-blue-500,"
  focus:border-transparent" />"text-left"
</div> >
</div> ; {}"text-left" <a href=": +13024640950; className="text-left"text-left"
<span>+1 (302) 464-0950>
</div></a>"mailt,"$2 />"text-left" <Mail className="
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