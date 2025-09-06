
import { cn } from '@/lib/utils';interface InteractiveFeaturesProps {
  className?: string
  style?: React.CSSProperties
  style?: React.CSSProperties;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
interface InteractiveFeaturesProps {
  className?: string
  style?: React.CSSProperties
export function InteractiveFeatures({
  className
  style
}: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const features = [
    {
      title: "AI Talent Matching",
      description: "Connect with the perfect talent using intelligent matching.",
      details:
        "Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.",
      icon: <Search className="h-8 w-8 text-blue-700" />,
      link: "/match"},
    {
      title: "Talent Directory",
      description: "Browse a verified database of AI and tech specialists.",
      details:
        "Every profile is vetted for quality and authenticity so you can hire with confidence.",
      icon: <Users className="h-8 w-8 text-purple-700" />,
      link: "/talent"},
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business.",
      details:
        "From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.",
      icon: <Zap className="h-8 w-8 text-cyan-700" />,
      link: "/services"},
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware for development and research.",
      details:

        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",
      icon: <Settings className="h-8 w-8 text-amber-700" />,
      link: "/equipment"}],

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  },

  return (
    <section className={cn("py-16 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Key Features
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Hover or click a card to learn more about what Zion offers
          </p>
        </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              key={index}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {feature.icon}
                <div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <div
                className={cn(
                  'transition-all duration-300'
                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}              >
                <CardContent className='text-sm text-zion-slate-light p-0'>
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  'transition-all duration-300',

                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}>;
                <CardContent className='text-sm text-zion-slate-light p-0'>;
                  <p>{feature && feature.details}</p>;
                  <Button
                    asChild
                    variant='link'
                    className='mt-3 p-0 h-auto text-primary'>;
                    <Link
                      href={feature && feature.link}
                      className='flex items-center gap-1'>;
                      Learn more <ArrowRight className='h-4 w-4' />;

                  "transition-all duration-300",
                  openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
                )}
              >
                <CardContent className="text-sm text-zion-slate-light p-0">
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  <p>{feature.details}</p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href={feature.link} className="flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
<<<<<<< HEAD
export default InteractiveFeatures;
;
}
}
<<<<<<< HEAD
