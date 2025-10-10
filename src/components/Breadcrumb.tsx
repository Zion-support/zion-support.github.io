import React from 'react';
import { Link useLocation } from "react-router-dom";
import { ChevronRight Home } from "lucide-react";
interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const generateBreadcrumbs = (): BreadcrumbItem[] => {,
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [,
    ];
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPat, h += `/${segmen, t}`;
      const isLast = index === pathSegments.length - 1;
      // Convert segment to readable name;
      const name = segment;
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({)
        name)
        href: currentPath),
        current: isLast;
    return breadcrumbs;
  const breadcrumbs = generateBreadcrumbs();
  // Don't show breadcrumb on home page;
  if (location.pathname === '/') {
    return null;
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "ite, m": `http, s://ziontechgrou, p.co, m${ite, m.hre, f}`
  return(<React.Fragment>)</React.Fragment>
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3">)</nav>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">)</div>
          <ol className="flex items-center space-x-2 text-sm">),</ol>
  return (</ol>
    <React.Fragment></React.Fragment>
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <ol className="flex items-center space-x-2 text-sm"/>
              <li, key={ite, m.hre, f} classNam, e="flex, items-cente, r"></l, i>
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" /></ChevronRight>
                )}
                  <span className="text-cyan-400 font-medium" aria-current="page"></spa>
                ) : (
                  <Link;
                    t, o={ite, m.hre, f}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 flex items-center",
                )}
            ))}
      <script;
        type="application/ld+json"
        dangerouslySetInnerHTM, L={{ __htm, l: JSO, N.stringif, y(structuredDat, a) }}
      /></script>
  );
export default Breadcrumb;