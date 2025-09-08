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
      badge: 'popular'
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
      link: '/talent'
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
      badge: 'new'
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
      link: '/equipment'
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
      link: '/community'
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
      badge: 'featured'
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
      link: '/enterprise'
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
      link: '/developers'
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
      link: '/blog'
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
      link: '/project-milestones'
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

export function FeatureCTAs(...args: []):  {
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
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Popular",
      details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-marketing",
      badge: "Featured",
      details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/business-solutions",
      details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "AI Services Hub",
      description: "Cutting-edge AI solutions including chatbots, image generation, video editing, and data analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to advanced analytics, our AI services help businesses leverage artificial intelligence for competitive advantage."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "IT Services Hub",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/it-services",
      details: "From cloud migration to cybersecurity audits, our IT services help businesses modernize their infrastructure and enhance security."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
    {
      title: "Micro SAAS Hub",
      description: "Affordable software solutions for growing businesses including CRM, project management, and marketing tools.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
      link: "/micro-saas",
      badge: "New",
      details: "Discover powerful, affordable software solutions designed to help your business scale without breaking the bank."
    }

    <section
      className={cn(
        "py-16 bg-gradient-to-b from-background to-background/90"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        className
      )}
      style={style}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            {t('home.features_heading')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI services to IT infrastructure, discover the tools and expertise you need to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index)    => (
            <Card key={index} className="bg-slate-800/50 border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {feature.badge}
                    </Badge>
                  )}
                </div>                )}
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
                    href = {feature.link,}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta" })}
                  >                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
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
import Link from 'next/link';
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
      badge: 'popular',
    },    {
      key: 'talent_directory',
      description_key: 'talent_directory_desc',
      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue-700" />,
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
      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple-700" />,
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
      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan-700" />,
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
      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber-700" />,
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
      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald-700" />,
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
      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo-700" />,
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
      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink-700" />,
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
      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray-700" />,
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
      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal-700" />,
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
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red-700" />,
      link: '/project - milestones';
    }
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
                    <Badge variant="secondary" className="bg - primary / 20 text-primary">;
  return (
    <section;
      className={cn (
        "py - 16 bg - gradient - to - b from - background to - background / 90";
        class_name)}
      style={style}
    >;
      <div className="container mx - auto px-4">;
        <div className="mb - 12 text-center">;
          <h2 className="text - 3xl font - bold tracking - tight mb-3">;
            {t ('home.features_heading')}
          </h2>;
          <p className="text - lg text - muted - foreground max - w-3xl mx-auto">;
            {t ('home.features_subheading')}
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
          {features.map ((feature, index) => (
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border-primary / 50">;
              <CardHeader className="pb-2">;
                <div className="flex justify - between items-start">;
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg - primary / 20 text-primary">;
                      {t (`badges.${feature.badge}`)}
                    </Badge>)}
                </div>;
                <CardTitle className='mt - 4'>;
                  {t (`features.${feature.key}`)}
                </CardTitle>;
                {feature.description_key && (
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt-4">{t (`features.${feature.key}`)}</CardTitle>;
                {feature.description_key && (
                  <CardDescription className="line - clamp-2">;
                    {t (`features.${feature.description_key}`)}
                  </CardDescription>)}
              </CardHeader>;
              <CardContent>;
                {feature.details_key && (
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted-foreground">;
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
                    className="cursor-pointer";
                    {...(feature.key === 'ai_talent_matching' && { "data - testid": "explore - ai - talent - matching - cta" })}
                  >;
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;
                    <ArrowRight className="h - 4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>));
}
<<<<<<< HEAD