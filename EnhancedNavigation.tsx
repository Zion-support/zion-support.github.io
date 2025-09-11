<<<<<<< HEAD
;
=======

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const EnhancedNavigation: React.FC = () => {
  const [is_open, setIsOpen] = useState (false);
  const navigation_items = [;
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  return (
    <nav className="bg - white shadow - lg">;
      <div className="container mx - auto px - 4">;
        <div className="flex items - center justify - between h - 16">;
          <Link href="/" className="text - xl font - bold text - gray - 800">;
            Zion Tech Group;
          </Link>;
          <div className="hidden md:flex items - center space - x-8">;
            {navigation_items.map ((item) => (
              <Link;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={item.name}
                href={item.href}
                className="text - gray - 700 hover:text - blue - 600 transition - colors";
              >;
                {item.name}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </Link>))}
          </div>;
          <button;
            on_click={() => setIsOpen (!is_open)}
            className="md:hidden p - 2 text - gray - 700 hover:text - blue - 600";
          >;
            {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
          </button>;
        </div>;
        {is_open && (
          <div className="md:hidden bg - white border - t border - gray - 200">;
            <div className="px - 4 py - 2 space - y-2">;
              {navigation_items.map ((item) => (
                <Link;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={item.name}
                  href={item.href}
                  className="block text - gray - 700 hover:text - blue - 600 py - 2";
                  on_click={() => setIsOpen (false)}
                >;
                  {item.name}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React,{ useState } from \'react\'; import Link from \'next/link\'; import { Menu,X,ChevronDown } from \'lucide-react\'; const \"EnhancedNavigation\": React.FC = () => { const [isOpen,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const services = [{ \"name\": \'AI Services\',\"href\": \'/ai-services\' },{ \"name\": \'IT Services\',\"href\": \'/it-services\' },{ \"name\": \'Micro SaaS\',\"href\": \'/micro-saas\' },{ \"name\": \'Additional Services\',\"href\": \'/additional-services\' },]; const products = [{ \"name\": \'All Products\',\"href\": \'/products\' },{ \"name\": \'Pricing\',\"href\": \'/pricing\' },{ \"name\": \'Case Studies\',\"href\": \'/case-studies\' },{ \"name\": \'Guides\',\"href\": \'/guides\' },]; return ( <nav className=\"bg-white shadow-lg sticky top-0 z-50\"> <div className=\"container mx-auto px-4\"> <div className=\"flex justify-between items-center py-4\"> {} <Link href=\"/\"> <div className=\"flex items-center space-x-2\"> <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\"> <span className=\"text-white font-bold text-xl\">Z</span> </div> <div className=\"text-xl font-bold text-gray-800\">Zion Tech Group</div> </div> </Link> {} <div className=\"hidden \"lg\": flex items-center space-x-8\"> <Link href=\"/\"> <span className=\"text-gray-600 hover:text-blue-600 transition-colors\">Home</span> </Link> {} <div className=\"relative group\"> <button className=\"flex items-center text-gray-600 \"hover\": text-blue-600 transition-colors\" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > Services <ChevronDown className=\"ml-1 w-4 h-4\" /> </button> <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-\"hover\": opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? \'opacity-100 visible\' : \''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600 transition-colors\"> {service && service.name} </span> </Link> ))} </div> </div> {} <div className=\"relative group\"> <button className=\"flex items-center text-gray-600 \"hover\": text-blue-600 transition-colors\"> Products <ChevronDown className=\"ml-1 w-4 h-4\" /> </button> <div className=\"absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200\"> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600 transition-colors\"> {product && product.name} </span> </Link> ))} </div> </div> <Link href=\"/about\"><span className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\"> About </span></Link> <Link href=\"/blog\"><span className=\"text-gray-600 hover:text-blue-600 transition-colors\"> Blog </span></Link> <Link href=\"/talent\"><span className=\"text-gray-600 hover:text-blue-600 transition-colors\"> Careers </span></Link> <Link href=\"/contact\"><span className=\"text-gray-600 hover:text-blue-600 transition-colors\"> Contact </span></Link> </div> {} <div className=\"hidden \"lg\": block\"> <Link href=\"/contact\"><span className=\"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors\"> Get Started </span></Link> </div> {} <button className=\""lg\": hidden\" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X className=\"w-6 h-6\" /> : <Menu className=\"w-6 h-6\" />} </button> </div> {} {isOpen && ( <div className=\""lg\": hidden py-4 border-t border-gray-200\"> <div className=\"space-y-2\"> <Link href=\"/\"><span className=\"block py-2 text-gray-600 hover:text-blue-600\"> Home </span></Link> <div className=\"space-y-2\"> <div className=\"font-semibold text-gray-800 py-2\">Services</div> {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className=\"block py-2 pl-4 text-gray-600 \"hover\": text-blue-600\"> {service && service.name} </span> </Link> ))} </div> <div className=\"space-y-2\"> <div className=\"font-semibold text-gray-800 py-2\">Products</div> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className=\"block py-2 pl-4 text-gray-600 \"hover\": text-blue-600\"> {product && product.name} </span> </Link> ))} </div> <Link href=\"/about\"><span className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"> About </span></Link> <Link href=\"/blog\"><span className=\"block py-2 text-gray-600 hover:text-blue-600\"> Blog </span></Link> <Link href=\"/talent\"><span className=\"block py-2 text-gray-600 hover:text-blue-600\"> Careers </span></Link> <Link href=\"/contact\"><span className=\"block py-2 text-gray-600 hover:text-blue-600\"> Contact </span></Link> <Link href=\"/contact\"><span className=\"block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold\"> Get Started </span></Link> </div> </div> )} </div> </nav> )}; export default EnhancedNavigation;
import _React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const "EnhancedNavigation": _React && _React.FC = () => { const [isOpen,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const services = [{ "name": 'AI Services',"href": '/ai-services' },{ "name": 'IT Services',"href": '/it-services' },{ "name": 'Micro SaaS',"href": '/micro-saas' },{ "name": 'Additional Services',"href": '/additional-services' },]; const products = [{ "name": 'All Products',"href": '/products' },{ "name": 'Pricing',"href": '/pricing' },{ "name": 'Case Studies',"href": '/case-studies' },{ "name": 'Guides',"href": '/guides' },]; return ( <nav className="bg-white shadow-lg sticky top-0 z-50"> <div className="container mx-auto px-4"> <div className="flex justify-between items-center py-4"> {} <Link href="/"> <div className="flex items-center space-x-2"> <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> <span className="text-white font-bold text-xl">Z</span> </div> <div className="text-xl font-bold text-gray-800">Zion Tech Group</div> </div> </Link> {} <div className="hidden "lg": flex items-center space-x-8"> <Link href="/"> <span className="text-gray-600 hover:text-blue-600 transition-colors">Home</span> </Link> {} <div className="relative group"> <button className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > Services <ChevronDown className="ml-1 w-4 h-4" /> </button> <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-"hover": opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600 transition-colors"> {service && service.name} </span> </Link> ))} </div> </div> {} <div className="relative group"> <button className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors"> Products <ChevronDown className="ml-1 w-4 h-4" /> </button> <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600 transition-colors"> {product && product.name} </span> </Link> ))} </div> </div> <Link href="/about"><span className="text-gray-600 "hover": text-blue-600 transition-colors"> About </span></Link> <Link href="/blog"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Blog </span></Link> <Link href="/talent"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Careers </span></Link> <Link href="/contact"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Contact </span></Link> </div> {} <div className="hidden "lg": block"> <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"> Get Started </span></Link> </div> {} <button className=""lg": hidden" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> {} {isOpen && ( <div className=""lg": hidden py-4 border-t border-gray-200"> <div className="space-y-2"> <Link href="/"><span className="block py-2 text-gray-600 hover:text-blue-600"> Home </span></Link> <div className="space-y-2"> <div className="font-semibold text-gray-800 py-2">Services</div> {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className="block py-2 pl-4 text-gray-600 "hover": text-blue-600"> {service && service.name} </span> </Link> ))} </div> <div className="space-y-2"> <div className="font-semibold text-gray-800 py-2">Products</div> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className="block py-2 pl-4 text-gray-600 "hover": text-blue-600"> {product && product.name} </span> </Link> ))} </div> <Link href="/about"><span className="block py-2 text-gray-600 "hover": text-blue-600"> About </span></Link> <Link href="/blog"><span className="block py-2 text-gray-600 hover:text-blue-600"> Blog </span></Link> <Link href="/talent"><span className="block py-2 text-gray-600 hover:text-blue-600"> Careers </span></Link> <Link href="/contact"><span className="block py-2 text-gray-600 hover:text-blue-600"> Contact </span></Link> <Link href="/contact"><span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold"> Get Started </span></Link> </div> </div> )} </div> </nav> )}; export default EnhancedNavigation;
import _React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const "EnhancedNavigation": _React && _React.FC = () => { const [isOpen,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const services = [{ "name": 'AI Services',"href": '/ai-services' },{ "name": 'IT Services',"href": '/it-services' },{ "name": 'Micro SaaS',"href": '/micro-saas' },{ "name": 'Additional Services',"href": '/additional-services' },]; const products = [{ "name": 'All Products',"href": '/products' },{ "name": 'Pricing',"href": '/pricing' },{ "name": 'Case Studies',"href": '/case-studies' },{ "name": 'Guides',"href": '/guides' },]; return ( <nav className="bg-white shadow-lg sticky top-0 z-50"> <div className="container mx-auto px-4"> <div className="flex justify-between items-center py-4"> {} <Link href="/"> <div className="flex items-center space-x-2"> <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> <span className="text-white font-bold text-xl">Z</span> </div> <div className="text-xl font-bold text-gray-800">Zion Tech Group</div> </div> </Link> {} <div className="hidden "lg": flex items-center space-x-8"> <Link href="/"> <span className="text-gray-600 hover:text-blue-600 transition-colors">Home</span> </Link> {} <div className="relative group"> <button className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > Services <ChevronDown className="ml-1 w-4 h-4" /> </button> <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-"hover": opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600 transition-colors"> {service && service.name} </span> </Link> ))} </div> </div> {} <div className="relative group"> <button className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors"> Products <ChevronDown className="ml-1 w-4 h-4" /> </button> <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600 transition-colors"> {product && product.name} </span> </Link> ))} </div> </div> <Link href="/about"><span className="text-gray-600 "hover": text-blue-600 transition-colors"> About </span></Link> <Link href="/blog"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Blog </span></Link> <Link href="/talent"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Careers </span></Link> <Link href="/contact"><span className="text-gray-600 hover:text-blue-600 transition-colors"> Contact </span></Link> </div> {} <div className="hidden "lg": block"> <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"> Get Started </span></Link> </div> {} <button className=""lg": hidden" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> {} {isOpen && ( <div className=""lg": hidden py-4 border-t border-gray-200"> <div className="space-y-2"> <Link href="/"><span className="block py-2 text-gray-600 hover:text-blue-600"> Home </span></Link> <div className="space-y-2"> <div className="font-semibold text-gray-800 py-2">Services</div> {services && services.map((service) => ( <Link key={service && service.name} href={service && service.href} > <span className="block py-2 pl-4 text-gray-600 "hover": text-blue-600"> {service && service.name} </span> </Link> ))} </div> <div className="space-y-2"> <div className="font-semibold text-gray-800 py-2">Products</div> {products && products.map((product) => ( <Link key={product && product.name} href={product && product.href} > <span className="block py-2 pl-4 text-gray-600 "hover": text-blue-600"> {product && product.name} </span> </Link> ))} </div> <Link href="/about"><span className="block py-2 text-gray-600 "hover": text-blue-600"> About </span></Link> <Link href="/blog"><span className="block py-2 text-gray-600 hover:text-blue-600"> Blog </span></Link> <Link href="/talent"><span className="block py-2 text-gray-600 hover:text-blue-600"> Careers </span></Link> <Link href="/contact"><span className="block py-2 text-gray-600 hover:text-blue-600"> Contact </span></Link> <Link href="/contact"><span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold"> Get Started </span></Link> </div> </div> )} </div> </nav> )}; export default EnhancedNavigation;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </Link>))}
            </div>;
          </div>)}
      </div>;
    </nav>);
}
;
export default EnhancedNavigation;