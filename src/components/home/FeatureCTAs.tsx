<<<<<<< HEAD
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

<<<<<<< HEAD
=======
=======

import React from 'react'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight
  Users
  Zap
  Settings
  Search
  MessageSquare
  Smartphone
  Calendar
  BookOpen
  Code
  Building
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Smartphone,
  Calendar,
  BookOpen,
  Code,
  Building,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
interface FeatureCTAsProps {
  className?: string
  style?: React.CSSProperties;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
<<<<<<< HEAD
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from "@/lib/utils";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Clock,;
} from 'lucide-react';
import { cn } from '@/lib/utils';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const { t } = useTranslation();  const features = [    {
      key: 'ai_talent_matching'
      descriptionKey: 'ai_talent_matching_desc'
      detailsKey: 'ai_talent_matching_details'
      icon: (
        <Search className='h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700' />
      )
      link: '/match'
      badge: 'popular'
    },    {
      key: 'talent_directory'
      descriptionKey: 'talent_directory_desc'
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />
      link: '/match'
      badge: 'popular'
    }
    {
      key: 'talent_directory'
      descriptionKey: 'talent_directory_desc'
      detailsKey: 'talent_directory_details'
      icon: (
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />
      )
      link: '/talent'
    },    {
      key: 'services_marketplace'
      descriptionKey: 'services_marketplace_desc'
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />
      link: '/talent'
    }
    {
      key: 'services_marketplace'
      descriptionKey: 'services_marketplace_desc'
      detailsKey: 'services_marketplace_details'
      icon: (
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />
      )
      link: '/services'
      badge: 'new'
    },    {
      key: 'equipment_catalog'
      descriptionKey: 'equipment_catalog_desc'
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />
      link: '/services'
      badge: 'new'
    }
    {
      key: 'equipment_catalog'
      descriptionKey: 'equipment_catalog_desc'
      detailsKey: 'equipment_catalog_details'
      icon: (
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />
      )
      link: '/equipment'
    },    {
      key: 'community_hub'
      descriptionKey: 'community_hub_desc'
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />
      link: '/equipment'
    }
    {
      key: 'community_hub'
      descriptionKey: 'community_hub_desc'
      detailsKey: 'community_hub_details'
      icon: (
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />
      )
      link: '/community'
    },    {
      key: 'mobile_app'
      descriptionKey: 'mobile_app_desc'
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />
      link: '/community'
    }
    {
      key: 'mobile_app'
      descriptionKey: 'mobile_app_desc'
      detailsKey: 'mobile_app_details'
      icon: (
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />
      )
      link: '/mobile-launch'
      badge: 'featured'
    },    {
      key: 'enterprise_solutions'
      descriptionKey: 'enterprise_solutions_desc'
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />
      link: '/mobile-launch'
      badge: 'featured'
    }
    {
      key: 'enterprise_solutions'
      descriptionKey: 'enterprise_solutions_desc'
      detailsKey: 'enterprise_solutions_details'
      icon: (
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />
      )
      link: '/enterprise'
    },    {
      key: 'developer_tools'
      descriptionKey: 'developer_tools_desc'
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />
      link: '/enterprise'
    }
    {
      key: 'developer_tools'
      descriptionKey: 'developer_tools_desc'
      detailsKey: 'developer_tools_details'
      icon: (
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />
      )
      link: '/developers'
    },    {
      key: 'learning_resources'
      descriptionKey: 'learning_resources_desc'
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />
      link: '/developers'
    }
    {
      key: 'learning_resources'
      descriptionKey: 'learning_resources_desc'
      detailsKey: 'learning_resources_details'
      icon: (
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />
      )
      link: '/blog'
    },    {
      key: 'project_management'
      descriptionKey: 'project_management_desc'
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />
      link: '/blog'
    }
    {
      key: 'project_management'
      descriptionKey: 'project_management_desc'
      detailsKey: 'project_management_details'
      icon: (
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />
      )
      link: '/project-milestones'
    },    {
      key: 'zion_hire_ai'
      descriptionKey: 'zion_hire_ai_desc'
      detailsKey: 'zion_hire_ai_details'
      icon: (
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />
      link: '/project-milestones'
    }
    {
      key: 'zion_hire_ai'
      descriptionKey: 'zion_hire_ai_desc'
      detailsKey: 'zion_hire_ai_details'
      icon: (
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />
      )
      badge: 'premium'
    }
  ]
      >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-3'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { useTranslation } from "react-i18next",
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from "@/lib/utils",
interface FeatureCTAsProps {
  className?: string,
  style?: React.CSSProperties
}

export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
  const { t } = useTranslation(),
<<<<<<< HEAD
========
import React from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {;
  ArrowRight,;
  Users,;
  Zap,;
  Settings,;
  Search,;
  MessageSquare,;
  Smartphone,;
  Calendar,;
  BookOpen,;
  Code,;
  Building,;
  Clock,;
} from 'lucide-react';
import { cn } from '@/lib/utils';
interface FeatureCTAsProps {;
  className?: string;
  style?: React && React.CSSProperties;
export function FeatureCTAs(): any ({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {;
      key: 'ai_talent_matching',;
      descriptionKey: 'ai_talent_matching_desc',;
      detailsKey: 'ai_talent_matching_details',;
      icon: (;
        <Search className='h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700' />;
      ),;
      link: '/match',;
      badge: 'popular',;
    },    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: '/match',;
      badge: 'popular';
    };
    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
      detailsKey: 'talent_directory_details',;
      icon: (;
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />;
      ),;
      link: '/talent',;
    },    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: '/talent';
    };
    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
      detailsKey: 'services_marketplace_details',;
      icon: (;
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />;
      ),;
      link: '/services',;
      badge: 'new',;
    },    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: '/services',;
      badge: 'new';
    };
    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
      detailsKey: 'equipment_catalog_details',;
      icon: (;
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />;
      ),;
      link: '/equipment',;
    },    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: '/equipment';
    };
    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
      detailsKey: 'community_hub_details',;
      icon: (;
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />;
      ),;
      link: '/community',;
    },    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: '/community';
    };
    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
      detailsKey: 'mobile_app_details',;
      icon: (;
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />;
      ),;
      link: '/mobile-launch',;
      badge: 'featured',;
    },    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: '/mobile-launch',;
      badge: 'featured';
    };
    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
      detailsKey: 'enterprise_solutions_details',;
      icon: (;
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />;
      ),;
      link: '/enterprise',;
    },    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: '/enterprise';
    };
    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
      detailsKey: 'developer_tools_details',;
      icon: (;
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />;
      ),;
      link: '/developers',;
    },    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: '/developers';
    };
    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
      detailsKey: 'learning_resources_details',;
      icon: (;
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />;
      ),;
      link: '/blog',;
    },    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: '/blog';
    };
    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
      detailsKey: 'project_management_details',;
      icon: (;
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />;
      ),;
      link: '/project-milestones',;
    },    {;
      key: 'zion_hire_ai',;
      descriptionKey: 'zion_hire_ai_desc',;
      detailsKey: 'zion_hire_ai_details',;
      icon: (;
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: '/project-milestones';
    };
    {;
      key: 'zion_hire_ai',;
      descriptionKey: 'zion_hire_ai_desc',;
      detailsKey: 'zion_hire_ai_details',;
      icon: (;
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;
      ),;
      badge: 'premium',;
    },;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) { const { t  } = useTranslation(),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
  const features = [
    {
<<<<<<< HEAD

      key: 'ai_talent_matching',
=======
>>>>>>>       key: 'ai_talent_matching',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const features = [
    {
      key: 'ai_talent_matching',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',

    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

=======
      badge: 'popular'
    },
========
      icon: <Zap className = "h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    };
    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className = "h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    };
    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className = "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    };
    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
      icon: <Smartphone className = "h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    };
    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className = "h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    };
    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className = "h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    };
    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className = "h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    };
    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className = "h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    };
    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: <Clock className = "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: '/zion-hire-ai',
      badge: 'premium'
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
  ];
      >;
      <div className='container mx-auto px-4'>;
        <div className='mb-12 text-center'>;
          <h2 className='text-3xl font-bold tracking-tight mb-3'>;
            {t('home && home.features_heading')}
          </h2>;
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>;
            {t('home && home.features_subheading')}
          </p>;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {features && features.map((feature, index) => (;
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx


>>>>>>>             <Card
========
            <Card
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
              key={index}
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'>;
              <CardHeader className='pb-2'>;
                <div className='flex justify-between items-start'>                  {feature && feature.icon}
                  {feature && feature.badge && (;
                    <Badge
                      variant='secondary'
                      className='bg-primary/20 text-primary'>                      {t(`badges.${feature && feature.badge}`)}
                    </Badge>;
                  )}
                </div>;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90"
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
        className
      )}
      style={style}>;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">;
            {t('home && home.features_heading')}
          </h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            {t('home && home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature && feature.icon}
                  {feature && feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

========
                      {t(`badges.${feature && feature.badge}`)}
                    </Badge>;
                  )}
                    {...(feature && feature.key === 'ai_talent_matching' && {
                      'data-testid': 'explore-ai-talent-matching-cta',
                    })}>;
                    <span>;
                      {t('general && general.explore')} {t(`features.${feature && feature.key}`)}
                    </span>;
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link
                    href={feature && feature.link}
                    aria-label={`${t('general && general.explore')} ${t(`features.${feature && feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature && feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}>;
                    <span>{t('general && general.explore')} {t(`features.${feature && feature.key}`)}</span>;
                    <ArrowRight className="h-4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
                </div>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
=======

import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import { useTranslation } from "react-i18next",;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react';
import { cn } from "@/lib/utils",;
;
interface FeatureCTAsProps {;
  className?:string,;
  style?:React.CSSProperties,;
}
;
export function FeatureCTAs({ className, style } FeatureCTAsProps) {;
  const { t } = useTranslation(),;
  const features = [;
    {;
      key:'ai_talent_matching',;
      descriptionKey:'ai_talent_matching_desc',;
      detailsKey:'ai_talent_matching_details',;
      icon:<Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link:'/match',;
      badge:'popular';
    },;
    {;
      key:'talent_directory',;
      descriptionKey:'talent_directory_desc',;
      detailsKey:'talent_directory_details',;
      icon:<Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link:'/talent';
    },;
    {;
      key:'services_marketplace',;
      descriptionKey:'services_marketplace_desc',;
      detailsKey:'services_marketplace_details',;
      icon:<Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link:'/services',;
      badge:'new';
    },;
    {;
      key:'equipment_catalog',;
      descriptionKey:'equipment_catalog_desc',;
      detailsKey:'equipment_catalog_details',;
      icon:<Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link:'/equipment';
    },;
    {;
      key:'community_hub',;
      descriptionKey:'community_hub_desc',;
      detailsKey:'community_hub_details',;
      icon:<MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link:'/community';
    },;
    {;
      key:'mobile_app',;
      descriptionKey:'mobile_app_desc',;
      detailsKey:'mobile_app_details',;
      icon:<Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link:'/mobile-launch',;
      badge:'featured';
    },;
    {;
      key:'enterprise_solutions',;
      descriptionKey:'enterprise_solutions_desc',;
      detailsKey:'enterprise_solutions_details',;
      icon:<Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link:'/enterprise';
    },;
    {;
      key:'developer_tools',;
      descriptionKey:'developer_tools_desc',;
      detailsKey:'developer_tools_details',;
      icon:<Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link:'/developers';
    },;
    {;
      key:'learning_resources',;
      descriptionKey:'learning_resources_desc',;
      detailsKey:'learning_resources_details',;
      icon:<BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link:'/blog';
    },;
    {;
      key:'project_management',;
      descriptionKey:'project_management_desc',;
      detailsKey:'project_management_details',;
      icon:<Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link:'/project-milestones';
    },;
    {;
      key:'zion_hire_ai',;
      descriptionKey:'zion_hire_ai_desc',;
      detailsKey:'zion_hire_ai_details',;
      icon:<Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link:'/zion-hire-ai',;
      badge:'premium';
    }
  ],;
;
  return (;
    <section;
      className={cn(;
        "py-16 bg-gradient-to-b from-background to-background/90",;
        className;
      )}
      style={style}
    >;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">;
            {t('home.features_heading')}
          </h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            {t('home.features_subheading')}
          </p>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature.icon}
                  {feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
                      {t(`badges.${feature.badge}`)}
                    </Badge>;
                  )}
                </div>;
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>;
                {feature.descriptionKey && (;
                  <CardDescription className="line-clamp-2">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {t(`features.${feature.descriptionKey}`)}
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

                  </CardDescription>;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
                  </CardDescription>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
                )}
<<<<<<< HEAD
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (


                  <p className="text-sm text-muted-foreground">
=======
              </CardHeader>;
              <CardContent>;
                {feature.detailsKey && (;
                  <p className="text-sm text-muted-foreground">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {t(`features.${feature.detailsKey}`)}
                  </p>;
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
                )}
<<<<<<< HEAD
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">



                  <Link
=======
              </CardContent>;
              <CardFooter>;
                <Button asChild className="w-full gap-1">;
                  <Link;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          ))}


;
}
}


========
                    className="cursor-pointer";
                    {...(feature.key === 'ai_talent_matching' && { "data-testid":"explore-ai-talent-matching-cta" })}
                  >;
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>;
                    <ArrowRight className="h-4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
          ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );  );
}
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx

  )
}

========
  )
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import Link from 'next / link';
import { use_translation } from 'react - i18next';
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Smartphone,
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib / utils';
interface FeatureCTAsProps {
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * FeatureCTAs - Function description
 */
function FeatureCTAs() {
  const { t } = use_translation ();  const features = [    {
      key: 'ai_talent_matching',
      description_key: 'ai_talent_matching_desc',
      details_key: 'ai_talent_matching_details',
      icon: (
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),
      link: '/match',
>>>>>>>       badge: 'popular',
    },    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,
      link: '/match',
      badge: 'popular';
    }
>>>>>>>     {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    },
      icon: (
        <Users className='h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700' />),
      link: '/talent',
    },    {
      key: 'services_marketplace',
      description_key: 'services_marketplace_desc',
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,
      link: '/talent';
    }
>>>>>>>     {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
      icon: (
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      badge: 'popular'
    },
      badge: 'popular',
    },    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
      badge: 'popular'
    }
      badge: 'popular'
    },
    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    },
      icon: (
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />
      ),
      link: '/talent',
    },    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    }
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    },
    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
      icon: (
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />
      ),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: '/services',
      badge: 'new',
    },    {
      key: 'equipment_catalog',
<<<<<<< HEAD
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,
      link: '/services',
      badge: 'new';
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',

    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',

    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',

=======
>>>>>>>     {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    },
      icon: (
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),
      link: '/equipment',
    },    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,
      link: '/equipment';
    }
>>>>>>>     {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    },
      icon: (
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),
      link: '/community',
    },    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,
      link: '/community';
    }
>>>>>>>     {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
      icon: (
        <Smartphone className='h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700' />),
      link: '/mobile - launch',
      badge: 'featured',
    },    {
      key: 'enterprise_solutions',
      description_key: 'enterprise_solutions_desc',
      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,
      link: '/mobile - launch',
      badge: 'featured';
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    },
      icon: (
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />
      ),
      link: '/equipment',
    },    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    }
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    },
    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    },
      icon: (
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />
      ),
      link: '/community',
    },    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    }
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    },
    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
      icon: (
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />
      ),
      link: '/mobile-launch',
      badge: 'featured',
    },    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',

    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',

    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',

    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',

    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',

=======
>>>>>>>     {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    },
      icon: (
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),
      link: '/enterprise',
    },    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,
      link: '/enterprise';
    }
>>>>>>>     {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    },
      icon: (
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),
      link: '/developers',
    },    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: '/developers';
    }
>>>>>>>     {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    },
      icon: (
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),
      link: '/blog',
    },    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: '/blog';
    }
>>>>>>>     {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    },
      icon: (
        <Calendar className='h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700' />),
      link: '/project - milestones',
    },    {
      key: 'zion_hire_ai',
      description_key: 'zion_hire_ai_desc',
      details_key: 'zion_hire_ai_details',
      icon: (
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,
      link: '/project - milestones';
    }
>>>>>>>     {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: (
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    },
      icon: (
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />
      ),
      link: '/enterprise',
    },    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    }
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    },
    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    },
      icon: (
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />
      ),
      link: '/developers',
    },    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    }
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    },
    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    },
      icon: (
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />
      ),
      link: '/blog',
    },    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    }
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    },
    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    },
      icon: (
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />
      ),
      link: '/project-milestones',
    },    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: (
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    }
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    },
    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: (
        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />
      ),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      badge: 'premium',
    },
  ]
      >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-3'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: '/zion-hire-ai',
      badge: 'premium'
    }
  ],

  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90",
        className
      )}
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>             {t('home.features_heading')}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {t('home.features_heading')}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.features_subheading')}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'
            >
              <CardHeader className='pb-2'>
                <div className='flex justify-between items-start'>                  {feature.icon}
                  {feature.badge && (
                    <Badge
                      variant='secondary'
                      className='bg-primary/20 text-primary'
                    >                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

        className
      )}
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {t('home.features_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.features_subheading')}
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>

                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (

                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                       {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import Link from "next/link",;
import { useTranslation } from "react-i18next",;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface FeatureCTAsProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation(),;
  const features = [;
    {;
      key: 'ai_talent_matching',;
      descriptionKey: 'ai_talent_matching_desc',;
      detailsKey: 'ai_talent_matching_details',;
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: '/match',;
      badge: 'popular';
    },;
    {;
      key: 'talent_directory',;
      descriptionKey: 'talent_directory_desc',;
      detailsKey: 'talent_directory_details',;
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: '/talent';
    },;
    {;
      key: 'services_marketplace',;
      descriptionKey: 'services_marketplace_desc',;
      detailsKey: 'services_marketplace_details',;
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: '/services',;
      badge: 'new';
    },;
    {;
      key: 'equipment_catalog',;
      descriptionKey: 'equipment_catalog_desc',;
      detailsKey: 'equipment_catalog_details',;
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: '/equipment';
    },;
    {;
      key: 'community_hub',;
      descriptionKey: 'community_hub_desc',;
      detailsKey: 'community_hub_details',;
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: '/community';
    },;
    {;
      key: 'mobile_app',;
      descriptionKey: 'mobile_app_desc',;
      detailsKey: 'mobile_app_details',;
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: '/mobile-launch',;
      badge: 'featured';
    },;
    {;
      key: 'enterprise_solutions',;
      descriptionKey: 'enterprise_solutions_desc',;
      detailsKey: 'enterprise_solutions_details',;
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: '/enterprise';
    },;
    {;
      key: 'developer_tools',;
      descriptionKey: 'developer_tools_desc',;
      detailsKey: 'developer_tools_details',;
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: '/developers';
    },;
    {;
      key: 'learning_resources',;
      descriptionKey: 'learning_resources_desc',;
      detailsKey: 'learning_resources_details',;
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: '/blog';
    },;
    {;
      key: 'project_management',;
      descriptionKey: 'project_management_desc',;
      detailsKey: 'project_management_details',;
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: '/project-milestones';
    },;
    {;
      key: 'zion_hire_ai',;
      descriptionKey: 'zion_hire_ai_desc',;
      detailsKey: 'zion_hire_ai_details',;
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link: '/zion-hire-ai',;
      badge: 'premium';
    }
  ];
  return (;
    <section;
      className={cn(;
        "py-16 bg-gradient-to-b from-background to-background/90";
        className;
      )}
      style={style}
    >;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">;
            {t('home.features_heading')}
          </h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            {t('home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature.icon}
                  {feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <CardTitle className='mt-4'>
                  {t(`features.${feature.key}`)}
                </CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className='line-clamp-2'>                    {t(`features.${feature.descriptionKey}`)}                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>;
                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <p className='text-sm text-muted-foreground'>                    {t(`features.${feature.detailsKey}`)}                  <p className="text-sm text-muted-foreground">
                    {t(`features.${feature.detailsKey}`)}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full gap-1'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <p className="text-sm text-muted-foreground">
                    {t(`features.${feature.detailsKey}`)}
                  </p>;
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className='cursor-pointer'
                    {...(feature.key === 'ai_talent_matching' && {
                      'data-testid': 'explore-ai-talent-matching-cta'
                    })}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
=======
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >
>>>>>>>                     <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </div>;
      </div>;
    </section>));
}
<<<<<<<< HEAD:src/components/home/FeatureCTAs.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface FeatureCTAsProps {;
  className?: string;
style?: React.CSSProperties ;
}export function FeatureCTAs ({;
  className, style ;
}: FeatureCTAsProps) {;
  const {;
  t ;
}= useTranslation ();
const features = [ {;
  key: 'ai talent matching';';
descriptionKey: 'ai talent matching desc';';
detailsKey: 'ai talent matching details';
icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />;';
link: '/match';';
badge: 'popular' ;
};
{';
  key: 'talent directory';';
descriptionKey: 'talent directory desc';';
detailsKey: 'talent directory details';";
icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />;';
link: '/talent' ;
};
{';
  key: 'services marketplace';';
descriptionKey: 'services marketplace desc';';
detailsKey: 'services marketplace details';";
icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />;';
link: '/services';';
badge: 'new' ;
};
{';
  key: 'equipment catalog';';
descriptionKey: 'equipment catalog desc';';
detailsKey: 'equipment catalog details';";
icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />;';
link: '/equipment' ;
};
{';
  key: 'community hub';';
descriptionKey: 'community hub desc';';
detailsKey: 'community hub details';";
icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />;';
link: '/community' ;
};
{';
  key: 'mobile app';';
descriptionKey: 'mobile app desc';';
detailsKey: 'mobile app details';";
icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />;';
link: '/mobile-launch';';
badge: 'featured' ;
};
{';
  key: 'enterprise solutions';';
descriptionKey: 'enterprise solutions desc';';
detailsKey: 'enterprise solutions details';";
icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />;';
link: '/enterprise' ;
};
{';
  key: 'developer tools';';
descriptionKey: 'developer tools desc';';
detailsKey: 'developer tools details';";
icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />;';
link: '/developers' ;
};
{';
  key: 'learning resources';';
descriptionKey: 'learning resources desc';';
detailsKey: 'learning resources details';";
icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />;';
link: '/blog' ;
};
{';
  key: 'project management';';
descriptionKey: 'project management desc';';
detailsKey: 'project management details';";
icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />;';
link: '/project-milestones' ;
};
{';
  key: 'zion hire ai';';
descriptionKey: 'zion hire ai desc';';
detailsKey: 'zion hire ai details';";
icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />;';
link: '/zion-hire-ai';';
badge: 'premium' ;
}];
return (<section className= {";
  cn ("py-16 bg-gradient-to-b from-background to-background/90";
className ;
}style= {;
  style ;
}> {;
  t (`badges.$ {;
  feature.badge ;
}`) ;
}</Badge>) ;
}</div> {;
  t (`features.$ {;
  feature.descriptionKey ;
}`) ;
}</CardDescription>) ;
}</CardHeader> <CardContent> {;
  t (`features.$ {;
  feature.detailsKey ;
}`) ;
}</p>) ";
}</CardContent> <CardFooter> <Button asChild className="w-full gap-1" > <Link </Link> </Button> </CardFooter> </Card>) ) ;
}</div> </div> </section>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/FeatureCTAs.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>
      </div>
    </section>
  );  )
}
;
}
}
        </div>;
      </div>;
    </section>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
