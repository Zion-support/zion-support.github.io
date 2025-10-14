import { 
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon;
  const isActive = (href: string) => {
    if (href === '/') {'''
      return location.pathname === '/'"}"'"'"
    return location.pathname.startsWith(href)
  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
interface NavigationProps {
  onSidebarToggle?: () => void;
}

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Navigation</h2>
      <p className="text-gray-300">
        This is a placeholder component for Navigation.
      </p>
      <button onClick={onSidebarToggle} className="text-blue-400">
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Navigation;
