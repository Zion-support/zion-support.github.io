 interface ApiDocsLayoutProps {
  children: React.ReactNode 
}export function ApiDocsLayout ({
  children 
}: ApiDocsLayoutProps) {
  const location = useLocation ();
const currentPath = location.pathname;
const navigationItems = [ return (<div className="flex min-h-screen bg-zinc-950" > {
  /* Sidebar */ 
}<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto" > <Link to="/developers/docs" className="flex items-center mb-8" > <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center" > <span className="text-white font-bold" >Z</span> font-bold text-white">API Docs</span> </Link> <div className=" mb-6"> <div className=" relative"> <Search className=" absolute left-2 top-2.5 h-4 w-4 text-zinc-500"/> <Input placeholder=" Search documentation"className=" pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple" /> </div> </div> <nav>) 
}> {
  item.title 
}</Link> </li>) ) 
}</ul> </nav> </div> </div> </div>) 
}export default ApiDocsLayout;
