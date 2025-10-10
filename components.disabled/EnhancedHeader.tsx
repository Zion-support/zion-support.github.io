import React,{useState}useEffect } from \"react\" ; ShoppingCart} from \"lucide-react\" export default function EnhancedHeader() { const router = useRouter()}} const Service Feature; return (" <header className = "{"fixed" w-full z-50 transition-all duration-300 ${" scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">}}"} >" <div className = "max-w-7xl mx-auto px-4 "sm": px-6,")
  lg: px-8">" <div className="text-left">; {}" <div className="text-left">" <Link href="/" className="text-left">" <div className="text-left">" <span className="text-left">Z></div> </div>" <div className="text-left" sm": block">" <span className="text-left"> Zion Tech Group; <" <div className="text-left"> Technology Solutions) ></div> ></div> ></div> ); {}" <nav className="text-left" lg": flex items-center space-x-1"> {navigation.map(item => ("}) <div key="{item.name}" className="text-left"> {item.dropdown ? (" <div className="text-left" relative>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors flex items-center ${ router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,"
  hover:bg-gray-50"}"} > {item.name}" </button><ChevronDown className=ml-1" h-4 w-4"} /> ></div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" <Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-4 py-2 text-sm text-gray-700 "hover": bg-blue-50,")
  hover:text-blue-600 transition-colors> onClick="{()" => setActiveDropdown(null)} > {dropdownItem.name} ></div> ))} ></div> )} ></div> ) : (" <Link href="{item.href} className="text-left" text-sm" font-medium px-4 py-2 rounded-md transition-colors ${ router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,")
  hover:bg-gray-50"}"} > {item.name} ) ></div> )} ></div> ))} ></div> {}" <div className=hidden" "md": flex items-center space-x-4"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none,
  focus: ring-2,
  focus:ring-blue-500,"
  focus:border-transparent" />" <Search className="text-left" /> </form>" <div className="text-left">" <a href="te,"
  l:+13024640950; className="text-left">" <Phone className="text-left" />" <span className="text-left">+1 (302) 464-0950></div> </a>" <a href="mailt,"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" />" <span className="text-left">Contact></div> ></div> ></div> ; {}" <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}" className="text-left" lg": hidden p-2 rounded-md text-gray-600,
  hover: text-gray-900,"
  hover:bg-gray-100"> {mobileMenuOpen ? (" </button><X className="text-left" /> ) : (" <Menu className="text-left" />}) )} ></div> ></div> {} {mobileMenuOpen && (" <div className="text-left" lg": hidden">" <div className="text-left" px-2" pt-2 pb-3 space-y-1 bg-white border-t"> {navigation.map(item => ("}) <div key="{item.name}"> {item.dropdown ? (} <div>" <button onClick="{()" => toggleDropdown(item.name)}" className="text-left" w-full" flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${ router.pathname === item.href ||" router.pathname.startsWith(item.href + "/")" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,"
  hover:bg-gray-50"}"} > {item.name}" </button><ChevronDown className=h-4" w-4"} /> ></div> {activeDropdown === item.name && (" <div className="text-left"> {item.dropdown.map(dropdownItem => (" <Link key="{dropdownItem.name} href="{dropdownItem.href} className="text-left" block" px-3 py-2 text-sm text-gray-600 "hover": text-blue-600,")
  hover: bg-gray-50 rounded-md) onClick="{()" => {} setMobileMenuOpen(false)} setActiveDropdown(null)}} > {dropdownItem.name} ></div> ))} ></div> )} ></div> ) : (" <Link href="{item.href} className="text-left" block" px-3 py-2 text-base font-medium rounded-md ${) router.pathname === item.href" ? "text-blue-600 bg-blue-50} : "text-gray-700 "hover": text-blue-600,"
  hover:bg-gray-50"}"}" onClick="{()" => setMobileMenuOpen(false)} > {item.name} ></div> )} ></div> ))} {}" <div className=px-3" py-2"}>" <form onSubmit="{handleSearch}" className="text-left">" <input type="text; placeholder="Search...; value="{searchQuery} onChange="{e" => setSearchQuery(e.target.value)}" className="text-left" focus": outline-none,
  focus: ring-2,
  focus:ring-blue-500,"
  focus:border-transparent" />" <Search className="text-left" /> ></div> ></div> ; {}" <div className="text-left">" <a href=""tel": +13024640950; className="text-left">" <Phone className="text-left" /> <span>+1 (302) 464-0950></div> </a>" <a href="mailt,"
  o: kleber@ziontechgroup.com, className="text-left">" <Mail className="text-left" /> <span>kleber@ziontechgroup.com></div> ></div> ></div> </div> )} ></div> ></div> )} }"
  </Link>
  </Link>
  </Link>
  </Link>
  </header>
  </Link>
  </a>
  </Link>
  </string>