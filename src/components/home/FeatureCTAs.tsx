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

  const features = [
    {
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className = "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
      badge: 'popular'
    };
    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',
      icon: <Users className = "h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: '/talent'
    };
    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
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


            <Card
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
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature && feature.icon}
                  {feature && feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;

                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}

                  </CardDescription>;


                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (


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


                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}


;
}
}


        </div>;
      </div>;
    </section>;
  );  );
}

  )
}

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
interface FeatureCTAsProps {
  className?: string
  style?: React.CSSProperties;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {
  Clock,;
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {

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
  const features = [
    {
  const features = [
    {
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: '/match',
      badge: 'popular'
    },
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
            <Card
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
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">

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
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>;
                )}
              </CardHeader>;
              <CardContent>;
                {feature.detailsKey && (;
                  <p className="text-sm text-muted-foreground">;
                    {t(`features.${feature.detailsKey}`)}
                  </p>;
                )}
              </CardContent>;
              <CardFooter>;
                <Button asChild className="w-full gap-1">;
                  <Link;
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}


;
}
}


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
        </div>;
      </div>;
    </section>;
  )
}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    },    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,
      link: '/match',
      badge: 'popular';
    }
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
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
      icon: (
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      link: '/services',
      badge: 'new',
    },    {
      key: 'equipment_catalog',
<<<<<<< HEAD
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    }
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    },
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: '/equipment'
    },
=======
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,
      link: '/services',
      badge: 'new';
    }
    {
      key: 'equipment_catalog',
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: (
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),
      link: '/equipment',
    },    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,
      link: '/equipment';
    }
<<<<<<< HEAD
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: '/community'
    },
=======
    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: (
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),
      link: '/community',
    },    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,
      link: '/community';
    }
<<<<<<< HEAD
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
=======
    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    {
<<<<<<< HEAD
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
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    },
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: '/enterprise'
    },
=======
      key: 'enterprise_solutions',
      description_key: 'enterprise_solutions_desc',
      details_key: 'enterprise_solutions_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: (
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),
      link: '/enterprise',
    },    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,
      link: '/enterprise';
    }
<<<<<<< HEAD
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: '/developers'
    },
=======
    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: (
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),
      link: '/developers',
    },    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: '/developers';
    }
<<<<<<< HEAD
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: '/blog'
    },
=======
    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: (
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),
      link: '/blog',
    },    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: '/blog';
    }
<<<<<<< HEAD
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: '/project-milestones'
    },
=======
    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: (
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),
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
      badge: 'premium',
    },
  ]
      >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-3'>
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
            {t('home.features_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('home.features_subheading')}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-white"/>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                {item.description}
              </p>
              
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2"/>
              </div>
            </a>
          ))}
        </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature && feature.icon}
                  {feature && feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;

<<<<<<< HEAD
export function FeatureCTAs() {
    const features = [
        {
            title: "AI Services & Solutions",
            description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
            icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700"/>,
            link: "/ai-services",
            badge: "New",
            details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
        },
        {
            title: "IT Services & Infrastructure",
            description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
            icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"/>,
            link: "/it-services",
            badge: "Popular",
            details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
        },
        {
            title: "Digital Marketing Services",
            description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
            icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"/>,
            link: "/digital-marketing",
            badge: "Featured",
            details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
        },
        {
            title: "Business Solutions & Consulting",
            description: "Strategic business consulting, process optimization, and digital transformation services.",
            icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"/>,
            link: "/business-solutions",
            details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
        },
        {
            title: "AI Talent Matching",
            description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
            icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700"/>,
            link: "/marketplace",
            badge: "Popular",
            details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
        },
        {
            title: "Talent Directory",
            description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
            icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700"/>,
            link: "/talent",
            details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
        },
        {
            title: "Equipment Catalog",
            description: "Find specialized hardware and tech equipment for AI development and research.",
            icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700"/>,
            link: "/equipment",
            details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
        },
        {
            title: "Community Hub",
            description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
            icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700"/>,
            link: "/community",
            details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
        },
        {
            title: "Enterprise Solutions",
            description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
            icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700"/>,
            link: "/enterprise",
            details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
        },
        {
            title: "Zion Hire AI",
            description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
            icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700"/>,
            link: "/zion-hire-ai",
            badge: "Premium",
            details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
        }
    ];
    return (<section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (<Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
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
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
=======
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}

                  </CardDescription>;


                )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (


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


                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
<<<<<<< HEAD
=======
=======


;
}
}


        </div>;
      </div>;
    </section>;
  );  );
}

  )
}

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
  className?: string
  style?: React.CSSProperties;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {
  Clock,;
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {

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
  const features = [
    {
      key: 'ai_talent_matching',
      description_key: 'ai_talent_matching_desc',
      details_key: 'ai_talent_matching_details',
      icon: (
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),
      link: '/match',
      badge: 'popular',
    },    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,
      link: '/match',
      badge: 'popular';
    }
    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',
      icon: (
        <Users className='h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700' />),
      link: '/talent',
    },    {
      key: 'services_marketplace',
      description_key: 'services_marketplace_desc',
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,
      link: '/talent';
    }
    {
      key: 'services_marketplace',
      description_key: 'services_marketplace_desc',
      details_key: 'services_marketplace_details',
      icon: (
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),
      link: '/services',
      badge: 'new',
    },    {
      key: 'equipment_catalog',
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,
      link: '/services',
      badge: 'new';
    }
    {
      key: 'equipment_catalog',
      description_key: 'equipment_catalog_desc',
      details_key: 'equipment_catalog_details',
      icon: (
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),
      link: '/equipment',
    },    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,
      link: '/equipment';
    }
    {
      key: 'community_hub',
      description_key: 'community_hub_desc',
      details_key: 'community_hub_details',
      icon: (
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),
      link: '/community',
    },    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,
      link: '/community';
    }
    {
      key: 'mobile_app',
      description_key: 'mobile_app_desc',
      details_key: 'mobile_app_details',
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
    {
      key: 'enterprise_solutions',
      description_key: 'enterprise_solutions_desc',
      details_key: 'enterprise_solutions_details',
      icon: (
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),
      link: '/enterprise',
    },    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,
      link: '/enterprise';
    }
    {
      key: 'developer_tools',
      description_key: 'developer_tools_desc',
      details_key: 'developer_tools_details',
      icon: (
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),
      link: '/developers',
    },    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: '/developers';
    }
    {
      key: 'learning_resources',
      description_key: 'learning_resources_desc',
      details_key: 'learning_resources_details',
      icon: (
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),
      link: '/blog',
    },    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: '/blog';
    }
    {
      key: 'project_management',
      description_key: 'project_management_desc',
      details_key: 'project_management_details',
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      key: 'zion_hire_ai',
      description_key: 'zion_hire_ai_desc',
      details_key: 'zion_hire_ai_details',
      icon: (
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),
      badge: 'premium',
    },
  ];
      >;
      <div className='container mx - auto px - 4'>;
        <div className='mb - 12 text - center'>;
          <h2 className='text - 3xl font - bold tracking - tight mb - 3'>;
            {t ('home.features_heading')}
          </h2>;
          <p className='text - lg text - muted - foreground max - w-3xl mx - auto'>;
            {t ('home.features_subheading')}
          </p>;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {features.map ((feature, index) => (
            <Card;
              key={index}
              className='overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50';
            >;
              <CardHeader className='pb - 2'>;
                <div className='flex justify - between items - start'>                  {feature.icon}
                  {feature.badge && (
                    <Badge;
                      variant='secondary';
                      className='bg - primary / 20 text - primary';
                    >                      {t (`badges.${feature.badge}`)}
                    </Badge>)}
                </div>;
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
  return (
    <section;
      className={cn (
        "py - 16 bg - gradient - to - b from - background to - background / 90";
        class_name)}
      style={style}
    >;
      <div className="container mx - auto px - 4">;
        <div className="mb - 12 text - center">;
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">;
            {t ('home.features_heading')}
          </h2>;
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;
            {t ('home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {features.map ((feature, index) => (
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;
              <CardHeader className="pb - 2">;
                <div className="flex justify - between items - start">;
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
                      {t (`badges.${feature.badge}`)}
                    </Badge>)}
                </div>;
                <CardTitle className='mt - 4'>;
                  {t (`features.${feature.key}`)}
                </CardTitle>;
                {feature.description_key && (
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt - 4">{t (`features.${feature.key}`)}</CardTitle>;
                {feature.description_key && (
                  <CardDescription className="line - clamp - 2">;
                    {t (`features.${feature.description_key}`)}
                  </CardDescription>)}
              </CardHeader>;
              <CardContent>;
                {feature.details_key && (
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted - foreground">;
                    {t (`features.${feature.details_key}`)}
                  </p>)}
              </CardContent>;
              <CardFooter>;
                <Button as_child className='w - full gap - 1'>;
                  <Link;
                    href = {feature.link, }
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}
                    className='cursor - pointer';
                    {...(feature.key === 'ai_talent_matching' && {
                      'data - testid': 'explore - ai - talent - matching - cta',
                    })}
                  >;
                    <span>;
                      {t ('general.explore')} {t (`features.${feature.key}`)}
                    </span>;
                    <ArrowRight className='h - 4 w - 4' />                  </Link>                  <Link;
                    href={feature.link}
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}
                    className="cursor - pointer";
                    {...(feature.key === 'ai_talent_matching' && { "data - testid": "explore - ai - talent - matching - cta" })}
                  >;
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;
                    <ArrowRight className="h - 4 w - 4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
    </section>));
}
<<<<<<< HEAD
<<<<<<< HEAD
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
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
