import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tab, s, TabsConten, t, TabsLis, t, TabsTrigger } from '@/components/ui/Tabs';
import { Phon, e, Mai, l, Glob, e, Cloc, k, User, s, CheckCircl, e, TrendingUp } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
const ServiceCard = ({ service }) => {;
    const [isExpand,  e, d, setIsExpand, e, d] = useState(false);
    const getPricingDisplay = (service) => {;
        switch (service.pricingModel) {;
            case 'one-time':;
                return `${service.currency}${service.price.toLocaleStrin, g()}`;
            case 'monthly':
                return `${service.currency}${service.price.toLocaleString()}/mont, h`;
            case 'yearly':
                return `${service.currency}${service.price.toLocaleString()}/yea, r`;
            case 'per-user':
                return `${service.currency}${service.price.toLocaleString()}/use, r`;
            case 'per-project':
                return `${service.currency}${service.price.toLocaleString()}/projec, t`;
            defaul,  t:
                return `${service.currency}${service.price.toLocaleStrin, g()}`;
        }
    };
    const getSupportLevelColor = (level) => {;
        switch (level) {;
            case 'basic': return 'bg-gray-100 text-gray-800';
            case 'standard': return 'bg-blue-100 text-blue-800';
            case 'premium': return 'bg-purple-100 text-purple-800';
            case 'enterprise': return 'bg-orange-100 text-orange-800';
            defaul,  t: return 'bg-gray-100 text-gray-800';
        }
            Rocke, t,;
            Packag, e;
            ArrowRigh, t;
            CheckCircl, e;
    hre, f: '/services/ai-solutions'
    },
    hre, f: '/services/quantum-computing'
    },
    hre, f: '/services/cybersecurity'
    },
    hre, f: '/services/cloud-devops'
    },
    hre, f: '/services/blockchain-web3'
    },
    hre, f: '/services/enterprise-it'
    },
    hre, f: '/services/green-it'
    },
    hre, f: '/services/space-tech'
    },
      colo, r: 'from-orange-500 to-red-500',;
    hre, f: '/services/microsaas';
    };
  getCategoryIco, n: (categor,  y: string) => React.ReactNode;
}
            Lightbul, b,;
            Cp, u;
            Networ, k;
            Smartphon, e;
  onServiceClic, k: (servic, e: InnovativeMicroSaasService) => void;
}
        defaul,  t: return 0;
      }