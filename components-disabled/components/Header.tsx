

  );
};
export default Header;
import React, { useState, useEffect } from 'react';'
import { useRouter } from 'next/router';'
import { 
  }
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';'
const navigation = {
  'Services': ['
    { "name": 'AI Services', "href": '/ai-services' },'
    { "name": 'IT Services', "href": '/it-services' },'
    { "name": 'Micro SaaS', "href": '/micro-saas' },'
    { "name": 'Consulting', "href": '/consulting' }'
  ],
  'Solutions': ['
    { "name": 'Enterprise', "href": '/enterprise' },'
    { "name": 'Startup', "href": '/startup' },'
    { "name": 'Industry', "href": '/industries' }'
  ],
  'Company': ['
    { "name": 'About', "href": '/about' },'
    { "name": 'Team', "href": '/team' },'
    { "name": 'Careers', "href": '/careers' },'
    { "name": 'Contact', "href": '/contact' }'
  ]
};
export default function Header() {
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    }
    const handleRouteChange = () => {
      }
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    router.events.on('routeChangeStart', handleRouteChange);'
    return () => {
      }
      router.events.off('routeChangeStart', handleRouteChange);'
    };
  }, [router.events]);
return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
