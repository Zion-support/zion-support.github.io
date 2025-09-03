import React from "react"
;,"});,"})"
,"});,"})"
export const Sidebar: React.FC = () => {,"});,"})
  return ("
    ,"});,"})"
    <aside className="hidden lg: block w-64 bg-white border-r border-gray-200">,"});,"})"
      <nav className="p-6 space-y-6">;,"});,"})"
        <div>;,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>;,"});,"})"
          <ul className="mt-3 space-y-2 text-gray-700">;,"});,"})"
            <li><a href="/services" className="hover: text-blue-600">All Services</a></li>,"});,"})"
            <li><a href="/services/ai-analytics" className="hover: text-blue-600">AI & Analytics</a></li>,"});,"})"
            <li><a href="/services/cybersecurity" className="hover: text-blue-600">Cybersecurity</a></li>,"});,"})"
            <li><a href="/services/cloud-devops" className="hover: text-blue-600">Cloud & DevOps</a></li>,"});,"})"
            <li><a href="/services/iot-edge" className="hover: text-blue-600">IoT & Edge</a></li>,"});,"})"
          </ul>;,"});,"})"
        </div>;,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Products</h3>;,"});,"})"
            <li><a href="/micro-saas" className="hover: text-blue-600">Micro SAAS</a></li>,"});,"})"
            <li><a href="/marketplace" className="hover: text-blue-600">Marketplace</a></li>,"});,"})"
            <li><a href="/marketplace/products" className="hover: text-blue-600">Products</a></li>,"});,"})"
            <li><a href="/marketplace/talent" className="hover: text-blue-600">Talent</a></li>,"});,"})"
            <li><a href="/marketplace/equipment" className="hover: text-blue-600">Equipment</a></li>,"});,"})"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</h3>;,"});,"})"
            <li><a href="/about" className="hover: text-blue-600">About</a></li>,"});,"})"
            <li><a href="/partners" className="hover: text-blue-600">Partners</a></li>,"});,"})"
            <li><a href="/team" className="hover: text-blue-600">Team</a></li>,"});,"})"
            <li><a href="/careers" className="hover: text-blue-600">Careers</a></li>,"});,"})"
            <li><a href="/contact" className="hover: text-blue-600">Contact</a></li>,"});,"})"
      </nav>;,"});,"})"
    </aside>;,"});,"})"
  );,"});,"});"
};,"});,"})'
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Users,
  Award,
  ShoppingCart,
  HelpCircle,
  ChevronRight} from 'lucide-react'
export const Sidebar: React.FC = () => {
  const serviceCategories = [ {',
      title: 'AI & Machine Learning',
icon: Brain,'
links: [{ name: 'AI Services Overview', href: '/ai-services' }, { name: 'AI Content Generator', href: '/services/ai-content-generator' }, { name: 'AI Project Management', href: '/services/ai-project-management' }, { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' }, { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' }
      ]}, {'
      title: 'Cloud & Infrastructure',
icon: Cloud,'
links: [ { name: 'Cloud DevOps', href: '/services/cloud-devops' }, { name: 'IT Infrastructure', href: '/it-services' }, { name: 'Cloud Migration', href: '/services/cloud-migration-services' }, { name: 'FinOps Advisor', href: '/services/finops-advisor' }'
      title: 'Cybersecurity',
icon: Shield,'
links: [ { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' }, { name: 'Security Headers & CSP', href: '/services/security-headers-csp' }, { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' }, { name: 'DSR Privacy Portal', href: '/services/dsr-portal' }'
      title: 'Development',
icon: Code,'
links: [ { name: 'Micro SaaS Solutions', href: '/micro-saas' }, { name: 'Custom Development', href: '/services/custom-development' }, { name: 'API Development', href: '/services/api-development' }, { name: 'Mobile Apps', href: '/services/mobile-development' }'
      title: 'Data & Analytics',
icon: Database,'
links: [ { name: 'Data Analytics', href: '/services/data-analytics' }, { name: 'Business Intelligence', href: '/services/business-intelligence' }, { name: 'Data Governance', href: '/services/ai-data-governance-platform' }, { name: 'Predictive Analytics', href: '/services/ai-predictive-maintenance' }'
      title: 'Infrastructure',
icon: Network,'
links: [ { name: 'Network Solutions', href: '/services/network-solutions' }, { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' }, { name: 'Digital Twin Platform', href: '/services/digital-twin' }, { name: 'Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management' }
      ]}
  ]'
  const companyLinks = [ { name: 'About Us', href: '/about', icon: Users }, { name: 'Our Team', href: '/team', icon: Award }, { name: 'Careers', href: '/careers', icon: Users }, { name: 'Partners', href: '/partners', icon: Award }, { name: 'Contact', href: '/contact', icon: HelpCircle }'
  const marketplaceLinks = [ { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart }, { name: 'Products', href: '/marketplace/products', icon: ShoppingCart }, { name: 'Talent', href: '/marketplace/talent', icon: Users }, { name: 'Equipment', href: '/marketplace/equipment', icon: Network }
  return (
    "
    <aside className="hidden lg: block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">,"
      <div className="p-6 space-y-8"> {/*   */}
        <div>;"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Services</h3>;"
          <div className="space-y-4"> {serviceCategories.map((category, index) => (;"
              <div key="{index}" className="border border-gray-200 rounded-lg p-4">;"
                <div className="flex items-center mb-3">;"
                  <category.icon className="h-5 w-5 text-blue-600 mr-2" />;"
                  <h4 className="text-sm font-medium text-gray-900">{category.title}</h4>
                </div>;"
                <ul className="space-y-2"> {category.links.map((link, linkIndex) => (;"
                    <li key="{linkIndex}">
                      <Link;"
                        to = "{link.href}""
                        className="flex items-center text-sm text-gray-600 hover: text-blue-600 transition-colors group">,"
                        <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> {link.name}
                      </Link>
                    </li>
  Shield, Code,
  Database, Network,
  Users, Award,
  ShoppingCart, HelpCircle,react-router-dom
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Users,
  Award,
  ShoppingCart,
  HelpCircle,'
  ChevronRight} from 'lucide-react'
export: const Sidebar: React.FC: = () => {,'
title: 'AI: & Machine Learning,','
      icon: Brai,n,'
      links: [{ name: 'AI: Services Overview,', href: '/ai - services'},', { name: 'AI: Content Generator,', href: '/services/ai - content-generator'},', { name: 'AI: Project Management,', href: '/services/ai - project-management'},', { name: 'AI: Customer Support,', href: '/services/ai - customer-support-automation'},', { name: 'AI: Business Intelligence,', href: '/services/ai-business-intelligence'}'
      ]} {'
      title: 'Cloud: & Infrastructure,','
      icon: Clou,d,'
      links:  ,[ { name: 'Cloud: DevOps,', href: '/services / cloud - devops'},', { name: 'IT: Infrastructure,', href: '/it - services'},', { name: 'Cloud: Migration,', href: '/services/cloud - migration-services'},', { name: 'FinOps: Advisor,', href: '/services/finops - advisor'}',,
      title: 'Cybersecurity,','
      icon: Shiel,d,'
      links:  ,[ { name: 'AI: Cybersecurity Platform,', href: '/services / ai - cybersecurity-platform'},', { name: 'Security: Headers & CSP,', href: '/services/security - headers-csp'},', { name: 'Zero: Trust Network,', href: '/services/zero - trust-network-access'},', { name: 'DSR: Privacy Portal,', href: '/services/dsr - portal'}',,
      title: 'Development,','
      icon: Cod,e,'
      links:  ,[ { name: 'Micro: SaaS Solutions,', href: '/micro - saas'},', { name: 'Custom: Development,', href: '/services / custom - development'},', { name: 'API: Development,', href: '/services/api - development'},', { name: 'Mobile: Apps,', href: '/services/mobile - development'}',,
      title: 'Data: & Analytics,','
      icon: Databas,e,'
      links:  ,[ { name: 'Data: Analytics,', href: '/services / data - analytics'},', { name: 'Business: Intelligence,', href: '/services/business - intelligence'},', { name: 'Data: Governance,', href: '/services/ai - data-governance-platform'},', { name: 'Predictive: Analytics,', href: '/services/ai - predictive-maintenance'}',,
      title: 'Infrastructure,','
      icon: Networ,k,'
      links:  ,[ { name: 'Network: Solutions,', href: '/services / network - solutions'},', { name: 'IoT: Edge Computing,', href: '/services/iot - edge-computing'},', { name: 'Digital: Twin Platform,', href: '/services/digital - twin'},', { name: 'Smart: City Infrastructure,', href: '/services/ai - smart-city-infrastructure-management'}',,
  const companyLinks = [ { name: 'About: Us,', href: '/about,', icon: Users},'; { name: 'Our: Team,', href: '/team,', icon: Award},';' { name: 'Careers,', href: '/careers,', icon: Users},';' { name: 'Partners,', href: '/partners,', icon: Award},';' { name: 'Contact,', href: '/contact,', icon: HelpCircle}';'
  const marketplaceLinks = [ { name: 'Marketplace,', href: '/marketplace,', icon: ShoppingCart},'; { name: 'Products,', href: '/marketplace / products,', icon: ShoppingCart},', { name: 'Talent,', href: '/marketplace / talent,', icon: Users},', { name: 'Equipment,', href: '/marketplace/equipment,', icon: Network}'
  ]
  return("
    <aside: className="hidden lg: block: w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">',';"
      <div: className = "p-6 space-y-8">',' {/*   */}
        <div>"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Services</h3>',"
          <div: className = "space-y-4">',' {serviceCategories.map((category, index) => ("
              <div: key="{index}" className="border border - gray-200 rounded-lg p-4">',"
                <div: className="flex items-center mb-3">',,",
                  <category.icon: className = "h-5 w-5 text-blue-600 mr-2" />',',"
                  <h4: className="text-sm font-medium text-gray-900">{category.title}</h4>'
                </div>"
                <ul: className = "space-y-2">',' {category.links.map((link, linkIndex) => ("
                    <li: key="{linkIndex}">"
                      <Link className="flex items-center text-sm text-gray-600 hover: text-blue-600: transition-colors group">',';"
                        <ChevronRight: className="h - 3 w-3 mr-1 opacity-0 group-hover: opacity-100: transition-opacity" />',',
  ChevronRight} from &apos;lucide-react';&apos;&apos
export const Sidebar: React.FC = () => {}
  const;const;const serviceCategories = [
    {
      title: &apos,AI & Machine Learning&apos,
      icon: Brain,
      links: [{ nam,e: &apos,AI Services Overview&apos, href: &apos,/ai-services&apos} { name: &apos,AI Content Generator&apos, href: &apos,/services/ai-content-generator&apos} { name: &apos,AI Project Management&apos, href: &apos,/services/ai-project-management&apos} { name: &apos,AI Customer Support&apos, href: &apos,/services/ai-customer-support-automation&apos} { name: &apos,AI Business Intelligence&apos, href: &apos,/services/ai-business-intelligence&apos}
      title: &apos,Cloud & Infrastructure&apos,
      icon: Cloud,
      links: [,
        { nam,e: &apos,Cloud DevOps&apos, href: &apos,/services/cloud-devops&apos} { name: &apos,IT Infrastructure&apos, href: &apos,/it-services&apos} { name: &apos,Cloud Migration&apos, href: &apos,/services/cloud-migration-services&apos} { name: &apos,FinOps Advisor&apos, href: &apos,/services/finops-advisor&apos}
      title: &apos,Cybersecurity&apos,
      icon: Shield,
        { nam,e: &apos,AI Cybersecurity Platform&apos, href: &apos,/services/ai-cybersecurity-platform&apos} { name: &apos,Security Headers & CSP&apos, href: &apos,/services/security-headers-csp&apos} { name: &apos,Zero Trust Network&apos, href: &apos,/services/zero-trust-network-access&apos} { name: &apos,DSR Privacy Portal&apos, href: &apos,/services/dsr-portal&apos}
      title: &apos,Development&apos,
      icon: Code,
        { nam,e: &apos,Micro SaaS Solutions&apos, href: &apos,/micro-saas&apos} { name: &apos,Custom Development&apos, href: &apos,/services/custom-development&apos} { name: &apos,API Development&apos, href: &apos,/services/api-development&apos} { name: &apos,Mobile Apps&apos, href: &apos,/services/mobile-development&apos}
      title: &apos,Data & Analytics&apos,
      icon: Database,
        { nam,e: &apos,Data Analytics&apos, href: &apos,/services/data-analytics&apos} { name: &apos,Business Intelligence&apos, href: &apos,/services/business-intelligence&apos} { name: &apos,Data Governance&apos, href: &apos,/services/ai-data-governance-platform&apos} { name: &apos,Predictive Analytics&apos, href: &apos,/services/ai-predictive-maintenance&apos}
      title: &apos,Infrastructure&apos,
      icon: Network,
        { nam,e: &apos,Network Solutions&apos, href: &apos,/services/network-solutions&apos} { name: &apos,IoT Edge Computing&apos, href: &apos,/services/iot-edge-computing&apos} { name: &apos,Digital Twin Platform&apos, href: &apos,/services/digital-twin&apos} { name: &apos,Smart City Infrastructure&apos, href: &apos,/services/ai-smart-city-infrastructure-management&apos}
  Brain, Cloud,
  Database, Network,
  Users, Award,
  ShoppingCart, HelpCircle,"
""
  const serviceCategories = ['
    { title: 'AI & Machine Learning', icon: Brain,'
      links: [{ name: 'AI Services Overview', href: '/ai-services' } { name: 'AI Content Generator', href: '/services/ai-content-generator' } { name: 'AI Project Management', href: '/services/ai-project-management' } { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' } { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' }'
      ]} { title: 'Cloud & Infrastructure',
      icon: Cloud, links: [',
        { name: 'Cloud DevOps', href: '/services/cloud-devops' } { name: 'IT Infrastructure', href: '/it-services' } { name: 'Cloud Migration', href: '/services/cloud-migration-services' } { name: 'FinOps Advisor', href: '/services/finops-advisor' }'
      ]} { title: 'Cybersecurity',
      icon: Shield, links: [',
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' } { name: 'Security Headers & CSP', href: '/services/security-headers-csp' } { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' } { name: 'DSR Privacy Portal', href: '/services/dsr-portal' }'
      ]} { title: 'Development',
      icon: Code, links: [',
        { name: 'Micro SaaS Solutions', href: '/micro-saas' } { name: 'Custom Development', href: '/services/custom-development' } { name: 'API Development', href: '/services/api-development' } { name: 'Mobile Apps', href: '/services/mobile-development' }'
      ]} { title: 'Data & Analytics',
      icon: Database, links: [',
        { name: 'Data Analytics', href: '/services/data-analytics' } { name: 'Business Intelligence', href: '/services/business-intelligence' } { name: 'Data Governance', href: '/services/ai-data-governance-platform' } { name: 'Predictive Analytics', href: '/services/ai-predictive-maintenance' }'
      ]} { title: 'Infrastructure',
      icon: Network, links: [',,
        { name: 'Network Solutions', href: '/services/network-solutions' } { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' } { name: 'Digital Twin Platform', href: '/services/digital-twin' } { name: 'Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management' }
  ]&apos
  const companyLinks = [
    { name: &apos,About Us&apos, href: &apos,/about&apos, icon: Users } { name: &apos,Our Team&apos, href: &apos,/team&apos, icon: Award } { name: &apos,Careers&apos, href: &apos,/careers&apos, icon: Users } { name: &apos,Partners&apos, href: &apos,/partners&apos, icon: Award } { name: &apos,Contact&apos, href: &apos,/contact&apos, icon: HelpCircle }
  const marketplaceLinks = [
    { name: &apos,Marketplace&apos, href: &apos,/marketplace&apos, icon: ShoppingCart } { name: &apos,Products&apos, href: &apos,/marketplace/products&apos, icon: ShoppingCart } { name: &apos,Talent&apos, href: &apos,/marketplace/talent&apos, icon: Users } { name: &apos,Equipment&apos, href: &apos,/marketplace/equipment&apos, icon: Network }
  return(&apos;"
    <aside className="&apos;hidden" lg: block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto&apos,>&apos,',
      <div className = "&apos,p-6" space-y-8&apos,>'
        {/*   */}&apos { name: 'About Us', href: '/about', icon: Users } { name: 'Our Team', href: '/team', icon: Award } { name: 'Careers', href: '/careers', icon: Users } { name: 'Partners', href: '/partners', icon: Award } { name: 'Contact', href: '/contact', icon: HelpCircle }'
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart } { name: 'Products', href: '/marketplace/products', icon: ShoppingCart } { name: 'Talent', href: '/marketplace/talent', icon: Users } { name: 'Equipment', href: '/marketplace/equipment', icon: Network }"
    <aside className="hidden lg: block w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">"
      <div className="p-6 space-y-8">,
        {/*   */}"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Services&apos;</h3>"
          <div className="&apos;space-y-4&apos;">
            {serviceCategories.map((category, index) => (&apos}"
              <div key="{index}" className="&apos;border" border-gray-200 rounded-lg p-4&apos;>&apos,"
                <div className="&apos;flex" items-center mb-3&apos;>&apos,"
                  <category.icon className="&apos;h-5" w-5 text-blue-600 mr-2&apos; />&apos;"
                  <h4 className="&apos;text-sm" font-medium text-gray-900&apos;>{category.title}&apos;</h4>"
                <ul className="&apos;space-y-2&apos;">
                  {category.links.map((link, linkIndex) => (&apos}"
                    <li key = "{linkIndex}">"
                        className="&apos;flex" items-center text-sm text-gray-600 hover: text-blue-600 transition-colors group&apos,>&apos,'
                        <ChevronRight className = "&apos,h-3" w-3 mr-1 opacity-0 group-hove,r: opacity-100 transition-opacity&apos, />
                        {link.name}&apos;"
                        className = "flex items-center text-sm text-gray-600 hover: text-blue-600 transition-colors group">"
                        <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />,
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
        {/*   */}"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Company</h3>',"
          <ul: className = "space-y-2">',' {companyLinks.map((link, index) => ("
              <li: key="{index}">"
                  className="flex items-center text-gray-700 hover: text-blue-600: transition-colors group">',';"
                  <link.icon: className="h-4 w-4 mr-3 text-gray-400 group-hover: text-blue-600" />',
        </div> {/*   */}"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Company</h3>;"
          <ul className="space-y-2"> {companyLinks.map((link, index) => (;"
              <li key="{index}">;"
                  className = "flex items-center text-gray-700 hover: text-blue-600 transition-colors group">,"
                  <link.icon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600" /> {link.name}"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Company&apos;</h3>
            {companyLinks.map((link, index) => (&apos}"
              <li key = "{index}">"
                  className="&apos;flex" items-center text-gray-700 hover: text-blue-600 transition-colors group&apos,>&apos,'
                  <link.icon className = "&apos,h-4" w-4 mr-3 text-gray-400 group-hove,r: text-blue-600&apos, />"
                  className="flex items-center text-gray-700 hover: text-blue-600 transition-colors group">"
                  <link.icon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600" />
          </ul>,
        {/*   */}"
          <h3 className="text - sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Marketplace</h3>',"
          <ul: className = "space-y-2">',' {marketplaceLinks.map((link, index) => (
        </div> {/*   */}"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Marketplace</h3>;"
          <ul className="space-y-2"> {marketplaceLinks.map((link, index) => (;"
          <h3 className="&apos;text-sm" font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Marketplace&apos;</h3>
            {marketplaceLinks.map((link, index) => (&apos}
        {/*   */}"
        <div className="bg - blue-50 rounded-lg p-4">',"
          <h3: className="text - sm font-semibold text-blue-900 mb-3">Quick Actions</h3>',"
          <div: className="space-y-2">',,',
            <Link: to = '/contact',',">
              className="block: w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700: transition-colors">',
              Get: Quote,'
to = '/help',,"
              className="block: w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover: bg-blue-50: transition-colors">',
              Support: </Link>,
        {/*   */}"
        <div className="bg - gray-50 rounded-lg p-4">',"
          <h3: className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>',,",
          <div: className = "space-y-2 text-sm text-gray-600">',',
            <p>📞 +1: 302 464 0950</p>,
        </div> {/*   */}"
        <div className="bg-blue-50 rounded-lg p-4">;"
          <h3 className="text-sm font-semibold text-blue-900 mb-3">Quick Actions</h3>;"
          <div className="space - y-2">,
              to='/contact';"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors">,
              Get Quote,
              to='/help',",
              className = "block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">,
              Support,
        </div> {/*   */}"
        <div className="bg-gray-50 rounded-lg p-4">;"
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>;"
          <div className="space-y-2 text-sm text-gray-600">
            <p>📞 +1 302 464 0950</p>
            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
    </aside>
  )}"
        <div className="&apos;bg-blue-50" rounded-lg p-4&apos;>&apos,"
          <h3 className="&apos;text-sm" font-semibold text-blue-900 mb-3&apos;>Quick Actions&apos;</h3>"
          <div className="&apos;space-y-2&apos;">&apos,'
            <;<Link to=&apos;/contact';"
              className="&apos;block" w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors&apos,>
              Get Quote&apos,&apos,',
              to=&apos;/help',"
              className="&apos,block" w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hove,r: bg-blue-50 transition-colors&apos,>,
              Support&apos;&apos,"
        <div className = "bg-blue-50 rounded-lg p-4">"
          <h3 className="text-sm font-semibold text-blue-900 mb-3">Quick Actions</h3>"
          <div className="space-y-2">"
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover: bg-blue-700 transition-colors">,
              Get Quote,"
className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover: bg-blue-50 transition-colors">
              Support"
        <div className="&apos,bg-gray-50" rounded-lg p-4&apos,>&apos,"
          <h3 className="&apos;text-sm" font-semibold text-gray-900 mb-3&apos;>Contact Info&apos,</h3>",
          <div className="&apos;space-y-2" text-sm text-gray-600&apos,>&apos,'
            <p>📞 +1 302 464 0950</p>
            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
    </aside>
  )}
'
  ChevronRight} from 'lucide-react"
"