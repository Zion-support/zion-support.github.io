}

const getBenefits = null;
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>
            {t('home.benefits_subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
className='bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
