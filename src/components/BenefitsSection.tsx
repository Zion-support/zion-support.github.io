 interface BenefitsSectionProps {
  className?: string;
style?: React.CSSProperties 
}const getBenefits = (t: any) => [ {
  title: t ('benefits.ai matchmaking');
description: t ('benefits.ai matchmaking desc');
icon: <Bot className="w-8 h-8" /> 
};
{
  title: t ('benefits.global availability');
description: t ('benefits.global availability desc');
icon: <Globe className="w-8 h-8" /> 
};
{
  title: t ('benefits.support 24 7');
description: t ('benefits.support 24 7 desc');
icon: <Clock className="w-8 h-8" /> 
};
{
  title: t ('benefits.cost reduction');
description: t ('benefits.cost reduction desc');
export function BenefitsSection ({
  className, style 
}: BenefitsSectionProps) {
  const {
  t 
}= useTranslation ();
const benefits = getBenefits (t);
return (<section className= {
  cn ("py-20 bg-zion-blue-light", className) 
}style= {
  style 
}> <div className="container mx-auto px-4" > <div className="text-center mb-16" > <GradientHeading> {
  t ('home.benefits title') 
}</GradientHeading> <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto" > {
  t ('home.benefits subtitle') 
}</p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" > {
  benefits.map ( (benefit, index) => (<FeatureCard key= {
  index 
}title= {
  benefit.title 
}description= {
  benefit.description 
}icon= {
  benefit.icon 
}className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300" 
}</div> </div> </section>) 
}