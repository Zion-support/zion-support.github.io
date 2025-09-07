
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: string;

    color: string;

      website: string;
    }


    reviews: number;
  };




  service: {
    id: string;,
    name: string;,
    tagline: string;,
    price: string;,
    period: string;,
    description: string;,
    features: string[];,
    popular: boolean;,
    icon: string;,
    color: string;,
    textColor: string;,
    link: string;,
    marketPosition: string;,
    targetAudience: string;,
    trialDays: number;,
    setupTime: string;,
    category: string;,
    realService: boolean;,
    technology: string[];,
    integrations: string[];,
    useCases: string[];,
    roi: string;,
    competitors: string[];,
    marketSize: string;,
    growthRate: string;,
    variant: string;,
    contactInfo: {
      mobile: string;,
      email: string;,
      address: string;,

      website: string;
    }
    realImplementation: boolean
    implementationDetails: string
    launchDate: string
    customers: number
    rating: number
    textColor: string;
    link: string;
    marketPosition: string;
    targetAudience: string;
    trialDays: number;
    setupTime: string;
    category: string;
    realService: boolean;
    technology: string[];
    integrations: string[];
    useCases: string[];
    roi: string;
    competitors: string[];
    marketSize: string;
    growthRate: string;
    variant: string;
    contactInfo: {mobile: string;
      email: string;

    reviews: number
    reviews: number;
  }
}

const UltraAdvancedServiceCard: React.FC<UltraAdvancedServiceCardProps /> = ({ service   ;}
}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

