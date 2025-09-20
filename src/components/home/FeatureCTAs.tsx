interface FeatureCTAsProps {
  className?: string;
  style?: React.CSSProperties,
export function FeatureCTAs({ className style }: FeatureCTAsProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {t(`badges.${feature.badge}`)}
                    </Badge>
                  )}
                </div>
                <CardTitle className='mt-4'>
                  {t(`features.${feature.key}`)}
                </CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className='line-clamp-2'>                    {t(`features.${feature.descriptionKey}`)}                <CardTitle className="mt-4">{t(`features.${feature.key}`)}</CardTitle>
                {feature.descriptionKey && (
                  <CardDescription className="line-clamp-2">
                    {t(`features.${feature.descriptionKey}`)}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {feature.detailsKey && (
                  <p className='text-sm text-muted-foreground'>                    {t(`features.${feature.detailsKey}`)}                  <p className="text-sm text-muted-foreground">
                    {t(`features.${feature.detailsKey}`)}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full gap-1'>
                  <Link,
href = {feature.link,}
                    aria-label={`${t('general.explore')} ${t(`features.${feature.key}`)}`}
                    className='cursor-pointer'
                    {...(feature.key === 'ai_talent_matching' && {
                      'data-testid': 'explore-ai-talent-matching-cta'
                    })}
                  >
                    <span>
                      {t('general.explore')} {t(`features.${feature.key}`)}
                    </span>
                    <ArrowRight className='h-4 w-4' />                  </Link>                  <Link,
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
        </div>
      </div>
    </section>
  );  )
}