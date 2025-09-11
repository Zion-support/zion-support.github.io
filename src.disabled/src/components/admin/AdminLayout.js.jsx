
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
import React from \'react\'; \"const navItems = [\" { \"title\": \"Products\",\"href\": \"/admin/products\" },\" { \"title\": \"Services\",\"href\": \"/admin/services\" },\" { \"title\": \"Users\",\"href\": \"/admin/users\" },\" { \"title\": \"Reports\",\"href\": \"/admin/reports\" },\"];\"export function AdminLayout({ children }) { return (<div className=\"flex min-h-screen\">\" <aside className=\"w-64 border-r p-6 space-y-2 bg-muted/50\">\" <h2 className=\"font-semibold text-lg mb-4\">Back Office</h2>\" <nav className=\"space-y-1\">\" {navItems && navItems.map((item) => (<Link key={item && item.href} href={item && item.href} className=\"block rounded-md px-3 py-2 text-sm \"hover\": bg-accent\">\" {item && item.title}\" </Link>))} </nav> </aside>\" <main className=\"flex-1 p-6 overflow-y-auto\">{children}</main>\" </div>)};\"export { AdminLayout }; export default AdminLayout; \";\";
const React from "react"; "const navItems = [" { title: "Products",href: "/admin/products" }," { title: "Services",href: "/admin/services" }," { title: "Users",href: "/admin/users" }," { title: "Reports",href: "/admin/reports" },"];"export function AdminLayout({ children }) { return (<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems && navItems.map((item) => (<Link key={item && item.href} href={item && item.href} className="block rounded-md px-3 py-2 text-sm hover: bg-accent">" {item && item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";'"'"

import _React from 'react'; "const navItems = [" { "title": "Products","href": "/admin/products" }," { "title": "Services","href": "/admin/services" }," { "title": "Users","href": "/admin/users" }," { "title": "Reports","href": "/admin/reports" },"];"export function AdminLayout({ children }) { return (<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems && navItems.map((item) => (<Link key={item && item.href} href={item && item.href} className="block rounded-md px-3 py-2 text-sm "hover": bg-accent">" {item && item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";

