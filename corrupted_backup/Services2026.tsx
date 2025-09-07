import React,{ useMemo,useState } from \'react.ts\' import { Link } from \'react-router-dom.ts\' import { motion } from \'framer-motion.ts\' import { Search,ArrowRight,DollarSign,ExternalLink,Workflow,MessageSquare,Globe,Brain,Shield,Cloud,Cpu,Zap,Rocket,Heart,Lock,Users,BarChart3,Target,TrendingUp,Award,Star,CheckCircle,Clock,Phone,Mail,MapPin } from \'lucide-react\' import SEO from \'@/components/SEO\' import { INNOVATIVE_MICRO_SAAS_SERVICES_2026,SPECIALIZED_SERVICES_2026 } from \'../data/innovativeMicroSaasServices2026\' const \"Services2026\": React.FC = (): JSX."Element": => { const [quer,y,setQuery] =;"
  }
  useState(\'');'
  const [selectedCategory,setSelectedCategory] = useState(\'all\');'
  const [sortBy,setSortBy] = useState(\'innovation\');'
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2026,...SPECIALIZED_SERVICES_2026] const categories = [{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'all,\',\"name\": \'"All": Services,\',\"icon\": \'GitFor\',k,\"count\": \'allServices.length\'},{ \"id\": \'"AI": & Analytics,\',\"name\": \'"AI": & Analytics,\',\"icon\": \'Brai\',n,\"count\": allServices.filter("s": => s.category === \'AI & Analytics\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"Quantum": Computing,\',\"name\": \'"Quantum": Computing,\',\"icon\": \'Za\',p,\"count\": allServices.filter("s": => s.category === \'Quantum Computing\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'Cybersecurity,\',\"name\": \'Cybersecurity,\',\"icon\": \'Shiel\',d,\"count\": allServices.filter("s": => s.category === \'Cybersecurity\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"IoT": & Edge Computing,\',\"name\": \'"IoT": & Edge,\',\"icon\": \'Cp\',u,\"count\": allServices.filter("s": => s.category === \'IoT & Edge Computing\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"AI": & Content,\',\"name\": \'"AI": & Content,\',\"icon\": \'MessageSquar\',e,\"count\": allServices.filter("s": => s.category === \'AI & Content\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"Digital": Twin,\',\"name\": \'"Digital": Twin,\',\"icon\": \'Rocke\',t,\"count\": allServices.filter("s": => s.category === \'Digital Twin\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"AI": & HR,\',\"name\": \'"AI": & HR,\',\"icon\": \'User\',s,\"count\": allServices.filter("s": => s.category === \'AI & HR\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'Sustainability,\',\"name\": \'Sustainability,\',\"icon\": \'Hear\',t,\"count\": allServices.filter("s": => s.category === \'Sustainability\').lengt,'
},{ \"id\": anyanyanyanyanyanyanyanyanyanyanyanyany\'"AI": & IoT,\',\"name\": \'"AI": & IoT,\',\"icon\": \'BarChart\',3,\"count\": allServices.filter("s": => s.category === \'AI & IoT\').lengt,'
} ];
  const filteredAndSorted = useMemo(() => { let filtered = allServices \';'
}
import _React,{ useMemo,useState } from 'react.ts' import { Link } from 'react-router-dom.ts' import { motion } from 'framer-motion.ts' import { Search,ArrowRight,DollarSign,ExternalLink,Workflow,MessageSquare,Globe,Brain,Shield,Cloud,Cpu,Zap,Rocket,Heart,Lock,Users,BarChart3,Target,TrendingUp,Award,Star,CheckCircle,Clock,Phone,Mail,MapPin } from 'lucide-react' import SEO from '@/components/SEO' import { INNOVATIVE_MICRO_SAAS_SERVICES_2026,SPECIALIZED_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026' const "Services2026": _React.FC = (): JSX."Element": => { const [quer,y,setQuery] =;"
  }
  useState('');'
  const [selectedCategory,setSelectedCategory] = useState('all');'
  const [sortBy,setSortBy] = useState('innovation');'
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2026,...SPECIALIZED_SERVICES_2026] const categories = [{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'all,',"name": '"All": Services,',"icon": 'GitFor',k,"count": 'allServices.length'},{ "id": '"AI": & Analytics,',"name": '"AI": & Analytics,',"icon": 'Brai',n,"count": allServices.filter("s": => s.category === 'AI & Analytics').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"Quantum": Computing,',"name": '"Quantum": Computing,',"icon": 'Za',p,"count": allServices.filter("s": => s.category === 'Quantum Computing').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'Cybersecurity,',"name": 'Cybersecurity,',"icon": 'Shiel',d,"count": allServices.filter("s": => s.category === 'Cybersecurity').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"IoT": & Edge Computing,',"name": '"IoT": & Edge,',"icon": 'Cp',u,"count": allServices.filter("s": => s.category === 'IoT & Edge Computing').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & Content,',"name": '"AI": & Content,',"icon": 'MessageSquar',e,"count": allServices.filter("s": => s.category === 'AI & Content').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"Digital": Twin,',"name": '"Digital": Twin,',"icon": 'Rocke',t,"count": allServices.filter("s": => s.category === 'Digital Twin').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & HR,',"name": '"AI": & HR,',"icon": 'User',s,"count": allServices.filter("s": => s.category === 'AI & HR').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'Sustainability,',"name": 'Sustainability,',"icon": 'Hear',t,"count": allServices.filter("s": => s.category === 'Sustainability').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & IoT,',"name": '"AI": & IoT,',"icon": 'BarChart',3,"count": allServices.filter("s": => s.category === 'AI & IoT').lengt,'
} ];
  const filteredAndSorted = useMemo(() => { let filtered = allServices ';'


}


import _React,{ useMemo,useState } from 'react.ts' import { Link } from 'react-router-dom.ts' import { motion } from 'framer-motion.ts' import { Search,ArrowRight,DollarSign,ExternalLink,Workflow,MessageSquare,Globe,Brain,Shield,Cloud,Cpu,Zap,Rocket,Heart,Lock,Users,BarChart3,Target,TrendingUp,Award,Star,CheckCircle,Clock,Phone,Mail,MapPin } from 'lucide-react' import SEO from '@/components/SEO' import { INNOVATIVE_MICRO_SAAS_SERVICES_2026,SPECIALIZED_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026' const "Services2026": _React.FC = (): JSX."Element": => { const [quer,y,setQuery] =;"
  }
  useState('');'
  const [selectedCategory,setSelectedCategory] = useState('all');'
  const [sortBy,setSortBy] = useState('innovation');'
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2026,...SPECIALIZED_SERVICES_2026] const categories = [{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'all,',"name": '"All": Services,',"icon": 'GitFor',k,"count": 'allServices.length'},{ "id": '"AI": & Analytics,',"name": '"AI": & Analytics,',"icon": 'Brai',n,"count": allServices.filter("s": => s.category === 'AI & Analytics').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"Quantum": Computing,',"name": '"Quantum": Computing,',"icon": 'Za',p,"count": allServices.filter("s": => s.category === 'Quantum Computing').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'Cybersecurity,',"name": 'Cybersecurity,',"icon": 'Shiel',d,"count": allServices.filter("s": => s.category === 'Cybersecurity').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"IoT": & Edge Computing,',"name": '"IoT": & Edge,',"icon": 'Cp',u,"count": allServices.filter("s": => s.category === 'IoT & Edge Computing').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & Content,',"name": '"AI": & Content,',"icon": 'MessageSquar',e,"count": allServices.filter("s": => s.category === 'AI & Content').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"Digital": Twin,',"name": '"Digital": Twin,',"icon": 'Rocke',t,"count": allServices.filter("s": => s.category === 'Digital Twin').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & HR,',"name": '"AI": & HR,',"icon": 'User',s,"count": allServices.filter("s": => s.category === 'AI & HR').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'Sustainability,',"name": 'Sustainability,',"icon": 'Hear',t,"count": allServices.filter("s": => s.category === 'Sustainability').lengt,'
},{ "id": anyanyanyanyanyanyanyanyanyanyanyanyany'"AI": & IoT,',"name": '"AI": & IoT,',"icon": 'BarChart',3,"count": allServices.filter("s": => s.category === 'AI & IoT').lengt,'
} ];
  const filteredAndSorted = useMemo(() => { let filtered = allServices ';'
