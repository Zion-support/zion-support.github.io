import React, { Link } from 'react-router-dom'.
interface BreadcrumbProps {
  items: Array<{
    label: string.
    href?: string.
  }>.
  className?: string.
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">"
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">"
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link to={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
            ) : (
              <span className="text-gray-500">{item.label}
            )}
        ))}
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/ }'

    ];

    let currentPath = ;.

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment};

      const isLast = index === pathSegments.length - 1;.

      // Convert segment to readable name.
      const name = segment;.

        .split('-)'
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join( ).

      breadcrumbs.push({}
        name,
        href: currentPath,
        current: isLast.
      }).

    }).

    return breadcrumbs.

  };

  const breadcrumbs = generateBreadcrumbs();.

const Breadcrumb: React.FC = () => {
  const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(segment => segment !== '') : [];'
  const breadcrumbItems = [
    { label: 'Home', href: '/' },'
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: index === pathSegments.length - 1 ? undefined : `/${pathSegments.slice(0, index + 1).join('/')}`
    }))
  ];

  return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50" aria-label="Breadcrumb>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>"
        <ol className="flex items-center space-x-2 py-3 text-sm>
          {breadcrumbs.map((item, index) => (

            <li key={item.href} className="flex items-center>
              {index > 0 && (

                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true />
              )}

              {index === 0 ? (

                <Link.
                  to={item.href}

                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Home.
                >
              ) : item.current ? (

                <span className="text-white font-medium" aria-current="page>
                  {item.name}
              ) : (

                <Link.
                  to={item.href}

                  className="text-gray-300 hover:text-white transition-colors.
                >
                  {item.name}
interface BreadcrumbItem {
  label: string.
  href?: string.
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const Component = () => {
  
    return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav className="bg-slate-800/50 border-b border-cyan-500/20 py-3">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
          {items.map((item, index) => (
            <li key={index} className="flex items-center">"
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              {item.href ? (
                <Link.
                  to={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.label}
              ) : (
                <span className="text-cyan-400 font-medium">{item.label}
              )}

  };

  const breadcrumbItems = getBreadcrumbItems().

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav className="bg-slate-800/50 py-2 px-4">"
      <div className="max-w-7xl mx-auto">"
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
const Breadcrumb: React.FC = () => {
  const location = useLocation().
  
  // Don't show breadcrumb on home page'
  if (location.pathname === '/') {
    return null.
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');'
  
  const breadcrumbItems = [
    { name: 'Home', path: '/', icon: Home }'
  ];

  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');'
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ').
    breadcrumbItems.push({ name, path, icon: null }).
  }).

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav aria-label="Breadcrumb" className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">"
      <div className="max-w-7xl mx-auto px-4 py-3">"
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <a.
                href={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}
          ))}
export default function Breadcrumb() {
  const location = useLocation().
  const pathnames = location.pathname.split("/").filter((x) => x).

  const getBreadcrumbName = (path: string) => {
    const nameMap: { [key: string]: string } = {
      'ai-services': 'AI Services','
      'ai-analytics': 'AI Analytics','
      'ai-automation': 'AI Automation','
      'ai-content-generation': 'AI Content Generation','
      'ai-customer-service': 'AI Customer Service','
      'ai-marketing': 'AI Marketing','
      'ai-healthcare': 'AI Healthcare','
      'services': 'IT Services','
      'cloud-infrastructure': 'Cloud Infrastructure','
      'cybersecurity-solutions': 'Cybersecurity Solutions','
      'web-development': 'Web Development','
      'mobile-development': 'Mobile Development','
      'database-management': 'Database Management','
      'custom-software': 'Custom Software','
      'micro-saas': 'Micro SAAS','
      'zion-analytics-pro': 'Zion Analytics Pro','
      'zion-security-shield': 'Zion Security Shield','
      'zion-cloud-vault': 'Zion Cloud Vault','
      'zion-content-studio': 'Zion Content Studio','
      '5g-solutions': '5G Solutions','
      '5g-data-analytics': '5G Data Analytics','
      '5g-edge-computing': '5G Edge Computing','
      '5g-implementation': '5G Implementation','
      '5g-mobile-applications': '5G Mobile Applications','
      '5g-network-infrastructure': '5G Network Infrastructure','
      '5g-private-networks': '5G Private Networks','
      'about': 'About','
      'contact': 'Contact','
      'blog': 'Blog','
      'demo': 'Demo','
      'support': 'Support','
      'privacy': 'Privacy Policy','
      'terms': 'Terms of Service'
    };

    return nameMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ').
  };

  if (pathnames.length === 0) {
    return null.
  }

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  ).
  ).
  )
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3 px-4">"
      <div className="max-w-7xl mx-auto">"
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`.
            const isLast = index === pathnames.length - 1.
            const name = getBreadcrumbName(path).

            const Component = () => {
  
              return (
    <div>
  )
    </div>
  ).
  ).
  )
              <li key={routeTo} className="flex items-center">"
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium">{name}
                ) : (
                  <Link.
                    to={routeTo}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {name}
                )}
