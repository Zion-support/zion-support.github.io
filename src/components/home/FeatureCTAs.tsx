
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import Link from "next/link",
import { useTranslation } from "react-i18next",
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import Link from &quot;next/link&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface FeatureCTAsProps {
  className?: string,
  style?: React.CSSProperties
}

export function FeatureCTAs({ className, style }: FeatureCTAsProps) {
  const { t } = useTranslation(),
  const features = [
    {
      key: 'ai_talent_matching',
      descriptionKey: 'ai_talent_matching_desc',
      detailsKey: 'ai_talent_matching_details',
      icon: <Search className=&quot;h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700&quot; />,
      link: '/match',
      badge: 'popular'
    },
    {
      key: 'talent_directory',
      descriptionKey: 'talent_directory_desc',
      detailsKey: 'talent_directory_details',
      icon: <Users className=&quot;h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700&quot; />,
      link: '/talent'
    },
    {
      key: 'services_marketplace',
      descriptionKey: 'services_marketplace_desc',
      detailsKey: 'services_marketplace_details',
      icon: <Zap className=&quot;h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700&quot; />,
      link: '/services',
      badge: 'new'
    },
    {
      key: 'equipment_catalog',
      descriptionKey: 'equipment_catalog_desc',
      detailsKey: 'equipment_catalog_details',
      icon: <Settings className=&quot;h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700&quot; />,
      link: '/equipment'
    },
    {
      key: 'community_hub',
      descriptionKey: 'community_hub_desc',
      detailsKey: 'community_hub_details',
      icon: <MessageSquare className=&quot;h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700&quot; />,
      link: '/community'
    },
    {
      key: 'mobile_app',
      descriptionKey: 'mobile_app_desc',
      detailsKey: 'mobile_app_details',
      icon: <Smartphone className=&quot;h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700&quot; />,
      link: '/mobile-launch',
      badge: 'featured'
    },
    {
      key: 'enterprise_solutions',
      descriptionKey: 'enterprise_solutions_desc',
      detailsKey: 'enterprise_solutions_details',
      icon: <Building className=&quot;h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700&quot; />,
      link: '/enterprise'
    },
    {
      key: 'developer_tools',
      descriptionKey: 'developer_tools_desc',
      detailsKey: 'developer_tools_details',
      icon: <Code className=&quot;h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700&quot; />,
      link: '/developers'
    },
    {
      key: 'learning_resources',
      descriptionKey: 'learning_resources_desc',
      detailsKey: 'learning_resources_details',
      icon: <BookOpen className=&quot;h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700&quot; />,
      link: '/blog'
    },
    {
      key: 'project_management',
      descriptionKey: 'project_management_desc',
      detailsKey: 'project_management_details',
      icon: <Calendar className=&quot;h-10 w-10 p-2 rounded-md bg-red-100 text-red-700&quot; />,
      link: '/project-milestones'
    },
    {
      key: 'zion_hire_ai',
      descriptionKey: 'zion_hire_ai_desc',
      detailsKey: 'zion_hire_ai_details',
      icon: <Clock className=&quot;h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700&quot; />,
      link: '/zion-hire-ai',
      badge: 'premium'
    }
  ],

  return (
    <section
      className={cn(
        &quot;py-16 bg-gradient-to-b from-background to-background/90&quot;,
        className
      )}
      style={style}
    >
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;mb-12 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight mb-3&quot;>
            {t('home.features_heading')}
          </h2>
          <p className=&quot;text-lg text-muted-foreground max-w-3xl mx-auto&quot;>
            {t('home.features_subheading')}
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {features.map((feature, index) => (
            <Card key={index} className=&quot;overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50&quot;>
              <CardHeader className=&quot;pb-2&quot;>
                <div className=&quot;flex justify-between items-start&quot;>
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant=&quot;secondary&quot; className=&quot;bg-primary/20 text-primary&quot;>
                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
                <CardTitle className=&quot;mt-4&quot;>{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className=&quot;line-clamp-2&quot;>
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {t(`features.${feature.detailsKey}`)}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className=&quot;w-full gap-1&quot;>
                  <Link
                    href={feature.link}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className=&quot;cursor-pointer&quot;
                    {...(feature.key === 'ai_talent_matching' && { &quot;data-testid&quot;: &quot;explore-ai-talent-matching-cta&quot; })}
                  >
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>
                    <ArrowRight className=&quot;h-4 w-4&quot; />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
