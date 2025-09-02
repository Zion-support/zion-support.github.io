import: React, { useState } from;
  'react';';
import: { Link, useLocation } from;
  'react-router-dom';';
import: {
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  MessageSquare,
  BarChart3,
  Building,
  Code,
  Shield,
  Zap,
  ChevronDown,
  Rocket,
  Cpu,
  Brain,
  Leaf,
  Smartphone,
  BookOpen,
  Video,
  FileSearch,
  Lightbulb,
  Target,
  Users2,
  Handshake,
  Server,
  Cloud,
  Activity,
  PieChart,
  BarChart,
  X} from;
  'lucide-react';';
interface: SidebarItem {
  name: string;
   path: string;
   icon: React.ComponentType<{ className?: string,
}>
  children?: SidebarItem[];
  badge?: string: external?: boolean}
export: function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const: location = useLocation();
  const: sidebarItems: SidebarItem[] = [{
      name,:,
  Dashboard',';
      path: ',/,';
      icon: Hom,e},
    {
      name:,
  Services',';
      path: '/service,s,';
      icon: Briefcas,e,
      children: [{ name,:,
  AI: Solutions', path: '/ai-solution,s, icon: Brain, },';
        { name:,
  Cybersecurity', path: '/cybersecurit,y, icon: Shield, },';
        { name:,
  Quantum: Technology', path: '/quantum-technolog,y, icon: Cpu, },';
        { name:,
  Cloud: & DevOps', path: '/services/cloud-devop,s, icon: Cloud, },';
        {
          name:,
  IT: Infrastructure',';
          path: '/services/it-infrastructur,e,';
          icon: Serve,r},
        {
          name:,
  Digital: Transformation',';
          path: '/services/digital-transformatio,n,';
          icon: Za,p},
        { name:,
  Green: IT', path: '/green-i,t, icon: Leaf, },';
        { name:,
  Space: Tech', path: '/space-tec,h, icon: Rocket, },';
        { name:,
  Mobile: Solutions', path: '/mobil,e, icon: Smartphone, },';
        {
          name:,
  Financial: Solutions',';
          path: '/financial-solution,s,';
          icon: DollarSig,n},
        {
          name:,
  Micro: SaaS Services',';
          path: '/micro-saas-service,s,';
          icon: Buildin,g}]},
    {
      name:,
  Company',';
      path: '/compan,y,';
      icon: Buildin,g,
      children: [{ name,:,
  About: Us', path: '/abou,t, icon: Building, },';
        { name:,
  Our: Team', path: '/tea,m, icon: Users2, },';
        { name:,
  Careers', path: '/career,s, icon: Briefcase, },';
        { name:,
  Partners', path: '/partner,s, icon: Handshake, },';
        { name:,
  Press', path: '/pres,s, icon: FileText, },';
        {
          name:,
  Research: & Development',';
          path: '/research-developmen,t,';
          icon: Lightbul,b}]},
    {
      name:,
  Resources',';
      path: '/resource,s,';
      icon: FileTex,t,
      children: [{ name,:,
  Blog: & Insights', path: '/blo,g, icon: BookOpen, },';
        { name:,
  Case: Studies', path: '/case-studie,s, icon: Target, },';
        { name:,
  Help: Center', path: '/help-cente,r, icon: HelpCircle, },';
        { name:,
  API: Documentation', path: '/api-doc,s, icon: Code, },';
        { name:,
  Tutorials', path: '/tutorial,s, icon: Code, },';
        { name:,
  Webinars', path: '/webinar,s, icon: Video, },';
        { name:,
  White: Papers', path: '/white-paper,s, icon: FileSearch, },';
        { name:,
  Documentation', path: '/documentatio,n, icon: Code, }]},';
    {
      name:,
  Support',';
      path: '/suppor,t,';
      icon: HelpCircl,e,
      children: [{ name,:,
  Help: Center', path: '/help-cente,r, icon: HelpCircle, },';
        { name:,
  FAQ', path: '/help-center#fa,q, icon: HelpCircle, },';
        { name:,
  Contact: Support', path: '/contac,t, icon: MessageSquare, },';
        {
          name:,
  Live: Chat',';
          path: '/help-center/live-cha,t,';
          icon: MessageSquar,e},
        { name:,
  Status', path: '/statu,s, icon: BarChart3, },';
        { name:,
  Request: Quote', path: '/contac,t, icon: MessageSquare, }]},';
    {
      name:,
  Enterprise',';
      path: '/enterpris,e,';
      icon: Buildin,g,
      children: [{ name,:,
  Enterprise: Solutions', path: '/enterpris,e, icon: Building, },';
        { name:,
  Custom: Solutions', path: '/solution,s, icon: Target, },';
        { name:,
  Partnerships', path: '/partner,s, icon: Handshake, },';
        { name:,
  Case: Studies', path: '/case-studie,s, icon: Target, }]},';
    {
      name:,
  Analytics',';
      path: '/analytic,s,';
      icon: BarChart,3,
      children: [{
          name,:,
  Performance: Metrics',';
          path: '/analytics/performanc,e,';
          icon: Activit,y},
        { name:,
  User: Analytics', path: '/analytics/user,s, icon: Users, },';
        {
          name:,
  Business: Intelligence',';
          path: '/analytics/b,i,';
          icon: PieChar,t},
        { name:,
  Reports', path: '/analytics/report,s, icon: BarChart, }]}];';
  const: toggleItem = (itemName: string) => {
    setExpandedItems(prev: =>
      prev.includes(itemName);
        ? prev.filter(name: => name !== itemName);
        : [...pre,v, itemName]
    )}
;
  const: isActive = (path: string) => location.pathname: === path
  return(
    <div
      className={`fixed inset-y-0 right-0 z-50 w-80 bg-slate-900/95 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
        isOpen ,?,
  translate-x-0': 'translate-x-full}`}
    >
      <div: className='flex flex-col h-full'>';
        {/* Header: */}
        <div className='flex items-center justify-between p-6 border-b border-white/10'>';
          <h2: className='text-xl font-semibold text-white'>Navigation</h2>';
          <button: onClick={onClose}
            className='p-2 rounded-md text-gray-300 hover: text-white: hover:bg-white/10: transition-colors';';
            aria-label='Close: sidebar'>';
            <X: className='h-5 w-5' />';
          </button>
        </div>
        {/* Navigation: Items *,/}
        <nav className='flex-1 overflow-y-auto p-6'>';
          <div: className='space-y-2'>';
            {sidebarItems.map(item: => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button;
                      onClick={() => toggleItem(item.name)}
                      className={`w-full: flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        isActive(item.path)
                          ?,
  bg-blue-600/20 text-white': 'text-gray-300: hover: text-white: hover:bg-white/1,0}`}
                    >
                      <div: className='flex items-center space-x-3'>';
                        <item.icon: className='h-5 w-5' />';
                        <span: className='font-medium'>{item.name}</span>';
                      </div>
                      <ChevronDown: className={`h-4 w-4 transition-transform ${
                          expandedItems.includes(item.name) ?,
  rotate-180': '}`}
                      />
                    </button>
                    {expandedItems.includes(item.name) && (
                      <div: className='ml-6 mt-2 space-y-1'>';
                        {item.children.map(child: => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                              isActive(child.path);
                                ?,
  bg-blue-600/20: text-white;
  ': 'text-gray-400: hover: text-white: hover:bg-white/1,0}`}
                            onClick={onClose}
                          >
                            <child.icon: className='h-4 w-4' />';
                            <span: className='text-sm'>{child.name}</span>';
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link: to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive(item.path);
                        ?,
  bg-blue-600/20: text-white;
  ': 'text-gray-300: hover: text-white: hover:bg-white/1,0}`}
                    onClick={onClose}
                  >
                    <item.icon: className='h-5 w-5' />';
                    <span: className='font-medium'>{item.name}</span>';
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
        {/* Footer: */}
        <div className='p-6 border-t border-white/10'>';
          <div: className='text-center'>';
            <p: className='text-gray-400 text-sm mb-3'>Need help?</p>';
            <Link: to='/contact';';
              className='block: w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover: from-blue-700: hover:to-cyan-700: transition-all duration-200 text-center';';
              onClick={onClos,e}
            >
              Contact: Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}
interface SidebarProps {
  isOpen: boolean: onClose: () => voi,d}
export: default function SidebarWrapper({ isOpen, onClose }: SidebarProps) {
  return: <Sidebar isOpen={isOpen} onClose={onClose} />
}