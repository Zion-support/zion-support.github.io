

interface BenefitsSectionProps {_className?: string;
  style?: React.CSSProperties;}

const _getBenefits = (_t: unknown) => [
  {_title: t('benefits.ai_matchmaking'), _description: t('benefits.ai_matchmaking_desc'), _icon: <Bot className="w-8 h-8" />},
  {_title: t('benefits.global_availability'), _description: t('benefits.global_availability_desc'), _icon: <Globe className="w-8 h-8" />},
  {_title: t('benefits.support_24_7'), _description: t('benefits.support_24_7_desc'), _icon: <Clock className="w-8 h-8" />},
  {_title: t('benefits.cost_reduction'), _description: t('benefits.cost_reduction_desc'), _icon: <TrendingDown className="w-8 h-8" />}];

export function BenefitsSection(_{_className, _style}: BenefitsSectionProps) {_const { t} = useTranslation();
  const _benefits = getBenefits(t);
  
  return (
    <section className={_cn("py-20 bg-zion-blue-light", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{_t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {_t('home.benefits_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {_benefits.map(_(benefit, _index) => (
            <FeatureCard
              key={index}
              title={_benefit.title}
              description={_benefit.description}
              icon={_benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
