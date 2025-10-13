;
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
 cursor/fix-errors-and-merge-to-main-6ce7;
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
;
const Sidebar: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
}
const [expandedSections, setExpandedSections] = useState<Set<string />>(new Set(['ai-services', 'micro-saas', 'it-services']))
const location = useLocation();
  useEffect(() => {;
const handleResize = () => {
}
      if (window.innerWidth >= 1024) {
        setIsOpen(false););
    }
    window.addEventListener('resize', handleResize);
    return (<div>)
      {) => window.removeEventListener('resize', handleResize}</div>
    </div>)
  );
  }, []);
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)] cursor/fix-errors-and-merge-to-main-6ce7;
    } else {
      newExpanded.add(section);
    }
import { Brain, Zap, Globe } from "lucide-react";
 cursor/fix-errors-and-merge-to-main-6ce7;
;