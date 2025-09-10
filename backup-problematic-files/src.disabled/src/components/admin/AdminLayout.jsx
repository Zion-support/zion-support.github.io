>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
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

import _React from 'react'; "const navItems = [" { "title": "Products","href": "/admin/products" }," { "title": "Services","href": "/admin/services" }," { "title": "Users","href": "/admin/users" }," { "title": "Reports","href": "/admin/reports" },"];"export function AdminLayout({ children }) { return(<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems.map((item) => (<Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm "hover": bg-accent">" {item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React from \'react\'; \"const navItems = [\" { \"title\": \"Products\",\"href\": \"/admin/products\" },\" { \"title\": \"Services\",\"href\": \"/admin/services\" },\" { \"title\": \"Users\",\"href\": \"/admin/users\" },\" { \"title\": \"Reports\",\"href\": \"/admin/reports\" },\"];\"export function AdminLayout({ children }) { return(<div className=\"flex min-h-screen\">\" <aside className=\"w-64 border-r p-6 space-y-2 bg-muted/50\">\" <h2 className=\"font-semibold text-lg mb-4\">Back Office</h2>\" <nav className=\"space-y-1\">\" {navItems.map((item) => (<Link key={item.href} href={item.href} className=\"block rounded-md px-3 py-2 text-sm \"hover\": bg-accent\">\" {item.title}\" </Link>))} </nav> </aside>\" <main className=\"flex-1 p-6 overflow-y-auto\">{children}</main>\" </div>)};\"export { AdminLayout }; export default AdminLayout; \";\";
const React from "react"; "const navItems = [" { title: "Products",href: "/admin/products" }," { title: "Services",href: "/admin/services" }," { title: "Users",href: "/admin/users" }," { title: "Reports",href: "/admin/reports" },"];"export function AdminLayout({ children }) { return(<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems.map((item) => (<Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover: bg-accent">" {item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";'"'"
import _React from 'react'; "const navItems = [" { "title": "Products","href": "/admin/products" }," { "title": "Services","href": "/admin/services" }," { "title": "Users","href": "/admin/users" }," { "title": "Reports","href": "/admin/reports" },"];"export function AdminLayout({ children }) { return(<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems.map((item) => (<Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm "hover": bg-accent">" {item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import _React from 'react'; "const navItems = [" { "title": "Products","href": "/admin/products" }," { "title": "Services","href": "/admin/services" }," { "title": "Users","href": "/admin/users" }," { "title": "Reports","href": "/admin/reports" },"];"export function AdminLayout({ children }) { return (<div className="flex min-h-screen">" <aside className="w-64 border-r p-6 space-y-2 bg-muted/50">" <h2 className="font-semibold text-lg mb-4">Back Office</h2>" <nav className="space-y-1">" {navItems && navItems.map((item) => (<Link key={item && item.href} href={item && item.href} className="block rounded-md px-3 py-2 text-sm "hover": bg-accent">" {item && item.title}" </Link>))} </nav> </aside>" <main className="flex-1 p-6 overflow-y-auto">{children}</main>" </div>)};"export { AdminLayout }; export default AdminLayout; ";";
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/admin/AdminLayout.jsx
