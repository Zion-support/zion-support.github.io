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

      detailsKey: 'talent_directory_details',      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;"
"
        <Users className='h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700' />;

      detailsKey: 'services_marketplace_details',      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;"
        <Zap className='h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700' />;

      detailsKey: 'equipment_catalog_details',      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;"
        <Settings className='h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700' />;

      detailsKey: 'community_hub_details',      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;"
        <MessageSquare className='h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700' />;

      detailsKey: 'mobile_app_details',      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;"
        <Smartphone className='h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700' />;

      detailsKey: 'enterprise_solutions_details',      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;"
        <Building className='h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700' />;

      detailsKey: 'developer_tools_details',      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;"
        <Code className='h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700' />;

      detailsKey: 'learning_resources_details',      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;"
        <BookOpen className='h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700' />;

      detailsKey: 'project_management_details',      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;"
        <Calendar className='h-10 w-10 p-2 rounded-md bg-red-100 text-red-700' />;

        <Clock className='h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700' />;
)
      ),      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;"

      icon: <Search className = "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,"
      icon: <Users className = "h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,"
      icon: <Zap className = "h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,"
      icon: <Settings className = "h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,"
      icon: <MessageSquare className = "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,"
      icon: <Smartphone className = "h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,"
      icon: <Building className = "h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,"
      icon: <Code className = "h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,"
      icon: <BookOpen className = "h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,"
      icon: <Calendar className = "h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,"
      icon: <Clock className = "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,"
      <div className='container mx-auto px-4'>;
</div>
        <div className='mb-12 text-center'>;
          <h2 className='text-3xl font-bold tracking-tight mb-3'>;
</h2>
          </h2>;
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>;
</p>
          </p>;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            <Card;
              key={index}
              className='overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50'>;

              <CardHeader className='pb-2'>;

                <div className='flex justify-between items-start'>                  {feature && feature.icon}
                    <Badge;
                      variant='secondary
                      className='bg-primary/20 text-primary'>                      {t(`badges.${feature && feature.badge}`)}

                    ;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;"

    <section;
      className={cn("
        "py-16 bg-gradient-to-b from-background to-background/90""
        className;)
      )}
      style={style}>;
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="mb-12 text-center">;"
          <h2 className="text-3xl font-bold tracking-tight mb-3">;"
          </h2>;"
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;"
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;"
              <CardHeader className="pb-2">;"
                <div className="flex justify-between items-start">;"
"`;
                <CardTitle className="mt-4">{t(`features.${feature.key}`)}""
                  <CardDescription className="line-clamp-2">"

              
              <CardContent>
                  <p className="text-sm text-muted-foreground">"
              
              <CardFooter>
                <Button asChild className="w-full gap-1">"

                  <Link;
                    href={feature.link}"`;
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}`;
                    <span>{t('general.explore')} {t(`features.${feature.key}`)}</span>

                    <ArrowRight className="h-4 w-4" />"

                  
                
              
            
    </section>;"
        <Search className='h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700' />),

      details_key: 'talent_directory_details',      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,"
        <Users className='h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700' />),

      details_key: 'services_marketplace_details',      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,"
        <Zap className='h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700' />),

      details_key: 'equipment_catalog_details',      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,"
        <Settings className='h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700' />),

      details_key: 'community_hub_details',      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,"
        <MessageSquare className='h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700' />),

      details_key: 'mobile_app_details',      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,"
        <Smartphone className='h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700' />),

      details_key: 'enterprise_solutions_details',      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,"
        <Building className='h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700' />),

      details_key: 'developer_tools_details',      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,"
        <Code className='h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700' />),

      details_key: 'learning_resources_details',      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,"
        <BookOpen className='h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700' />),

      details_key: 'project_management_details',      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,"
        <Calendar className='h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700' />),

        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,"
        <Clock className='h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700' />),

      <div className='container mx - auto px - 4'>;
        <div className='mb - 12 text - center'>;
          <h2 className='text - 3xl font - bold tracking - tight mb - 3'>;
          <p className='text - lg text - muted - foreground max - w-3xl mx - auto'>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
              className='overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50';
            >;

              <CardHeader className='pb - 2'>;

                <div className='flex justify - between items - start'>                  {feature.icon}
                      variant='secondary';
                      className='bg - primary / 20 text - primary';`;
                    >                      {t (`badges.${feature.badge}`)}

                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;"

      className={cn ("
        "py - 16 bg - gradient - to - b from - background to - background / 90";")
        class_name)}
      style={style}
      <div className="container mx - auto px - 4">;"
        <div className="mb - 12 text - center">;"
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">;"
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;"
              <CardHeader className="pb - 2">;"
                <div className="flex justify - between items - start">;"

                <CardTitle className='mt - 4'>;

                ;`;
                  <CardDescription className='line - clamp - 2'>                    {t (`features.${feature.description_key}`)}                <CardTitle className="mt - 4">{t (`features.${feature.key}`)};"
                  <CardDescription className="line - clamp - 2">;"

              <CardContent>;
                  <p className='text - sm text - muted - foreground'>                    {t (`features.${feature.details_key}`)}                  <p className="text - sm text - muted - foreground">;"
                  </p>)}
              <CardFooter>;
                <Button as_child className='w - full gap - 1'>;

                    href = {feature.link, }`;
                    aria - label={`${t ('general.explore')} ${t (`features.${feature.key}`)}`}
                    className='cursor - pointer';
                    {...(feature.key === 'ai_talent_matching' && {
                      'data - testid': 'explore - ai - talent - matching - cta',')
                    })}

                    <span>;
</span>
                    </span>;
                    <ArrowRight className='h - 4 w - 4' />                                    <Link;
`;
                    <span>{t ('general.explore')} {t (`features.${feature.key}`)}</span>;
                    <ArrowRight className="h - 4 w - 4" />;"

            ))}
    </section>));]"`;