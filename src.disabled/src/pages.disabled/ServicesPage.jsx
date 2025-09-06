<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

<<<<<<< HEAD
=======
:src.disabled/src/pages.disabled/ServicesPage.jsx
import React,{ useState,useEffect } from \'react\'; import { Link } from \'react-router-dom\'; import { motion } from \'framer-motion\'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from \'lucide-react\'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState(\'all\'); const [searchQuery,setSearchQuery] = useState(\''); const [viewMode,setViewMode] = useState(\'grid\'); const serviceCategories = [; { \"id\": \'all\',\"name\": \'All Services\',\"icon\": \'Star\' },; { \"id\": \'ai\',\"name\": \'AI Solutions\',\"icon\": \'Brain\' },; { \"id\": \'quantum\',\"name\": \'Quantum Tech\',\"icon\": \'Zap\' },; { \"id\": \'security\',\"name\": \'Cybersecurity\',\"icon\": \'Shield\' },; { \"id\": \'cloud\',\"name\": \'Cloud & DevOps\',\"icon\": \'Cloud\' },; { \"id\": \'data\',\"name\": \'Data & Analytics\',\"icon\": \'Database\' },; { \"id\": \'iot\',\"name\": \'IoT & Edge\',\"icon\": \'Network\' },; { \"id\": \'blockchain\',\"name\": \'Blockchain\',\"icon\": \'Lock\' }; ]; const services = [; {}; return null} }}}
const React,{ useState,useEffect } from "react"; import { Link } from "react-router-dom"; import { motion } from "framer-motion"; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from "lucide-react"; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState("all"); const [searchQuery,setSearchQuery] = useState(""); const [viewMode,setViewMode] = useState("grid"); const serviceCategories = [; { id: "all",name: "All Services",icon: "Star" },; { id: "ai",name: "AI Solutions",icon: "Brain" },; { id: "quantum",name: "Quantum Tech",icon: "Zap" },; { id: "security",name: "Cybersecurity",icon: "Shield" },; { id: "cloud",name: "Cloud & DevOps",icon: "Cloud" },; { id: "data",name: "Data & Analytics",icon: "Database" },; { id: "iot",name: "IoT & Edge",icon: "Network" },; { id: "blockchain",name: "Blockchain",icon: "Lock" }; ]; const services = [; {}; return null} }}}'"'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import _React,{ useState,useEffect } from 'react'; import { Link } from 'react-router-dom'; import { motion } from 'framer-motion'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from 'lucide-react'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState('all'); const [searchQuery,setSearchQuery] = useState(''); const [viewMode,setViewMode] = useState('grid'); const serviceCategories = [; { "id": 'all',"name": 'All Services',"icon": 'Star' },; { "id": 'ai',"name": 'AI Solutions',"icon": 'Brain' },; { "id": 'quantum',"name": 'Quantum Tech',"icon": 'Zap' },; { "id": 'security',"name": 'Cybersecurity',"icon": 'Shield' },; { "id": 'cloud',"name": 'Cloud & DevOps',"icon": 'Cloud' },; { "id": 'data',"name": 'Data & Analytics',"icon": 'Database' },; { "id": 'iot',"name": 'IoT & Edge',"icon": 'Network' },; { "id": 'blockchain',"name": 'Blockchain',"icon": 'Lock' }; ]; const services = [; {}; return null} }}}
import _React,{ useState,useEffect } from 'react'; import { Link } from 'react-router-dom'; import { motion } from 'framer-motion'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from 'lucide-react'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState('all'); const [searchQuery,setSearchQuery] = useState(''); const [viewMode,setViewMode] = useState('grid'); const serviceCategories = [; { "id": 'all',"name": 'All Services',"icon": 'Star' },; { "id": 'ai',"name": 'AI Solutions',"icon": 'Brain' },; { "id": 'quantum',"name": 'Quantum Tech',"icon": 'Zap' },; { "id": 'security',"name": 'Cybersecurity',"icon": 'Shield' },; { "id": 'cloud',"name": 'Cloud & DevOps',"icon": 'Cloud' },; { "id": 'data',"name": 'Data & Analytics',"icon": 'Database' },; { "id": 'iot',"name": 'IoT & Edge',"icon": 'Network' },; { "id": 'blockchain',"name": 'Blockchain',"icon": 'Lock' }; ]; const services = [; {}; return null} }}}
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462

=======
=======
ursor/add-new-services-and-deploy-updates-0462
:src.disabled/src/pages.disabled/ServicesPage.jsx
import React,{ useState,useEffect } from \'react\'; import { Link } from \'react-router-dom\'; import { motion } from \'framer-motion\'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from \'lucide-react\'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState(\'all\'); const [searchQuery,setSearchQuery] = useState(\''); const [viewMode,setViewMode] = useState(\'grid\'); const serviceCategories = [; { \"id\": \'all\',\"name\": \'All Services\',\"icon\": \'Star\' },; { \"id\": \'ai\',\"name\": \'AI Solutions\',\"icon\": \'Brain\' },; { \"id\": \'quantum\',\"name\": \'Quantum Tech\',\"icon\": \'Zap\' },; { \"id\": \'security\',\"name\": \'Cybersecurity\',\"icon\": \'Shield\' },; { \"id\": \'cloud\',\"name\": \'Cloud & DevOps\',\"icon\": \'Cloud\' },; { \"id\": \'data\',\"name\": \'Data & Analytics\',\"icon\": \'Database\' },; { \"id\": \'iot\',\"name\": \'IoT & Edge\',\"icon\": \'Network\' },; { \"id\": \'blockchain\',\"name\": \'Blockchain\',\"icon\": \'Lock\' }; ]; const services = [; {}; return null} }}}
const React,{ useState,useEffect } from "react"; import { Link } from "react-router-dom"; import { motion } from "framer-motion"; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from "lucide-react"; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState("all"); const [searchQuery,setSearchQuery] = useState(""); const [viewMode,setViewMode] = useState("grid"); const serviceCategories = [; { id: "all",name: "All Services",icon: "Star" },; { id: "ai",name: "AI Solutions",icon: "Brain" },; { id: "quantum",name: "Quantum Tech",icon: "Zap" },; { id: "security",name: "Cybersecurity",icon: "Shield" },; { id: "cloud",name: "Cloud & DevOps",icon: "Cloud" },; { id: "data",name: "Data & Analytics",icon: "Database" },; { id: "iot",name: "IoT & Edge",icon: "Network" },; { id: "blockchain",name: "Blockchain",icon: "Lock" }; ]; const services = [; {}; return null} }}}'"'"
import _React,{ useState,useEffect } from 'react'; import { Link } from 'react-router-dom'; import { motion } from 'framer-motion'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from 'lucide-react'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState('all'); const [searchQuery,setSearchQuery] = useState(''); const [viewMode,setViewMode] = useState('grid'); const serviceCategories = [; { "id": 'all',"name": 'All Services',"icon": 'Star' },; { "id": 'ai',"name": 'AI Solutions',"icon": 'Brain' },; { "id": 'quantum',"name": 'Quantum Tech',"icon": 'Zap' },; { "id": 'security',"name": 'Cybersecurity',"icon": 'Shield' },; { "id": 'cloud',"name": 'Cloud & DevOps',"icon": 'Cloud' },; { "id": 'data',"name": 'Data & Analytics',"icon": 'Database' },; { "id": 'iot',"name": 'IoT & Edge',"icon": 'Network' },; { "id": 'blockchain',"name": 'Blockchain',"icon": 'Lock' }; ]; const services = [; {}; return null} }}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import _React,{ useState,useEffect } from 'react'; import { Link } from 'react-router-dom'; import { motion } from 'framer-motion'; import { ; Brain,; Zap,; Shield,; Rocket,; Cloud,; Globe,; Code,; Database,; Network,; Lock,; Cpu,; BarChart3,; Users,; Target,; ArrowRight,; CheckCircle,; Star,; TrendingUp,; Server,; Search,; Filter,; Grid,; List} from 'lucide-react'; export default function ServicesPage() {; const [activeCategory,setActiveCategory] = useState('all'); const [searchQuery,setSearchQuery] = useState(''); const [viewMode,setViewMode] = useState('grid'); const serviceCategories = [
    ; { "id": 'all',"name": 'All Services',"icon": 'Star' },; { "id": 'ai',"name": 'AI Solutions',"icon": 'Brain' },; { "id": 'quantum',"name": 'Quantum Tech',"icon": 'Zap' },; { "id": 'security',"name": 'Cybersecurity',"icon": 'Shield' },; { "id": 'cloud',"name": 'Cloud & DevOps',"icon": 'Cloud' },; { "id": 'data',"name": 'Data & Analytics',"icon": 'Database' },; { "id": 'iot',"name": 'IoT & Edge',"icon": 'Network' },,
    { "id": 'blockchain',"name": 'Blockchain',"icon": 'Lock' }
  ]; const services = [; {}; return null} }}}
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/pages.disabled/ServicesPage.jsx
=======
:temp_exclude/src.disabled/src/pages.disabled/ServicesPage.jsx
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
