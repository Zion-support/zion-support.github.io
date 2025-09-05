
import React from "react";
import Link from "next/link";

interface FeatureCTAsProps {_className?: string;
  style?: React.CSSProperties;}

export function FeatureCTAs(_{_className, _style}: FeatureCTAsProps) {_const { t} = useTranslation();
  const _features = [
    {_key: 'ai_talent_matching', _descriptionKey: 'ai_talent_matching_desc', _detailsKey: 'ai_talent_matching_details', _icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />, _link: '/match', _badge: 'popular'},
    {_key: 'talent_directory', _descriptionKey: 'talent_directory_desc', _detailsKey: 'talent_directory_details', _icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />, _link: '/talent'},
    {_key: 'services_marketplace', _descriptionKey: 'services_marketplace_desc', _detailsKey: 'services_marketplace_details', _icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />, _link: '/services', _badge: 'new'},
    {_key: 'equipment_catalog', _descriptionKey: 'equipment_catalog_desc', _detailsKey: 'equipment_catalog_details', _icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />, _link: '/equipment'},
    {_key: 'community_hub', _descriptionKey: 'community_hub_desc', _detailsKey: 'community_hub_details', _icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />, _link: '/community'},
    {_key: 'mobile_app', _descriptionKey: 'mobile_app_desc', _detailsKey: 'mobile_app_details', _icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />, _link: '/mobile-launch', _badge: 'featured'},
    {_key: 'enterprise_solutions', _descriptionKey: 'enterprise_solutions_desc', _detailsKey: 'enterprise_solutions_details', _icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />, _link: '/enterprise'},
    {_key: 'developer_tools', _descriptionKey: 'developer_tools_desc', _detailsKey: 'developer_tools_details', _icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />, _link: '/developers'},
    {_key: 'learning_resources', _descriptionKey: 'learning_resources_desc', _detailsKey: 'learning_resources_details', _icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />, _link: '/blog'},
    {_key: 'project_management', _descriptionKey: 'project_management_desc', _detailsKey: 'project_management_details', _icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />, _link: '/project-milestones'},
    {_key: 'zion_hire_ai', _descriptionKey: 'zion_hire_ai_desc', _detailsKey: 'zion_hire_ai_details', _icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />, _link: '/zion-hire-ai', _badge: 'premium'}
  ];

  return (
    <section
      className={_cn(
        "py-16 bg-gradient-to-b from-background to-background/90", _className
      )}
      style={_style}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            {_t('home.features_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {_t('home.features_subheading')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {_features.map(_(feature, _index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {_feature.icon}
                  {_feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{_t(`features.${feature.key}`)}</CardTitle>
                {_feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {_feature.detailsKey && (
                  <p className="text-sm text-muted-foreground">
                    {t(`features.${feature.detailsKey}`)}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link
                    href={_feature.link}
                    aria-label={_`${t('general.explore')} ${_t(`features.${feature.key}`)}`}
                    className="cursor-pointer"
                    {_...(feature.key === 'ai_talent_matching' && { "data-testid": "explore-ai-talent-matching-cta"})}
                  >
                    <span>{_t('general.explore')} {_t(`features.${feature.key}`)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
