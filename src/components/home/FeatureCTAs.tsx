
=======
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
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
interface FeatureCTAsProps {
  className?: string
  style?: React.CSSProperties;
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {;
  const { t } = useTranslation();  const features = [    {

interface FeatureCTAsProps {
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties
export function FeatureCTAs({ className, style }: FeatureCTAsProps) {

<<<<<<< HEAD
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

      key: 'ai_talent_matching',
      description_key: 'ai_talent_matching_desc',
      details_key: 'ai_talent_matching_details',
      icon: (
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),
      link: '/match',

    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',

    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',

      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: '/services',
      badge: 'new'
    },

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

      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: '/mobile-launch',
      badge: 'featured'
    },

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

                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >

                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
