  Clock;)
} from 'lucide-react';
;
const Sidebar: React.FC = () => {const [isOpen, setIsOpen] = useState(false);
const [expandedSections, setExpandedSections] = useState<Set<string></Set>>(new Set(['ai-services', 'micro-saas', 'it-services']))
const location = useLocation();
