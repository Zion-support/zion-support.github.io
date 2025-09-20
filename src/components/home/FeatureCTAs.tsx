interface Service {
id: string;,
name: string;
}
}
}

import React from "react";

export const FeatureCTAs: any = () => {
return (
<div className="py-16 bg-gray-50">;
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<div className="text-center mb-12">;
<h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>;
<p className="text-lg text-gray-600">Choose the best way to connect with our team</p>;
</div>;
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
<div className="bg-blue-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">;
<div className="text-3xl mb-4">📅</div>;
<h3 className="text-xl font-semibold mb-2">Schedule a Demo</h3>;
<p className="mb-4">See our solutions in action</p>;
</div>;
<div className="bg-green-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">;
<div className="text-3xl mb-4">📞</div>;
<h3 className="text-xl font-semibold mb-2">Get a Quote</h3>;
<p className="mb-4">Custom pricing for your needs</p>;
</div>;
<div className="bg-purple-600 text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center">;
<div className="text-3xl mb-4">✉️</div>;
<h3 className="text-xl font-semibold mb-2">Contact Sales</h3>;
<p className="mb-4">Speak with our experts</p>;
</div>;
</div>;
</div>;
</div>;
),;
};<//div><///div>;
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
href = {feature.link}
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
  );  )origin/main
}
