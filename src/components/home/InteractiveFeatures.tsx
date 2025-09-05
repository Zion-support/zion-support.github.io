import React from "react";
import Link from "next/link";

interface InteractiveFeaturesProps {_className?: string;
  style?: React.CSSProperties;}

export function InteractiveFeatures(_{_className, _style}: InteractiveFeaturesProps) {_const [openIndex, _setOpenIndex] = React.useState<number | null>(null);

  const _features = [
    {
      title: "AI Talent Matching", _description: "Connect with the perfect talent using intelligent matching.", _details:
        "Our algorithms analyze skills, _availability and experience to deliver the best candidates for your project.", _icon: <Search className="h-8 w-8 text-blue-700" />, _link: "/match"},
    {_title: "Talent Directory", _description: "Browse a verified database of AI and tech specialists.", _details:
        "Every profile is vetted for quality and authenticity so you can hire with confidence.", _icon: <Users className="h-8 w-8 text-purple-700" />, _link: "/talent"},
    {_title: "Services Marketplace", _description: "Discover professional tech and AI services for your business.", _details:
        "From on-demand IT support to specialized AI development, _our marketplace offers transparent pricing and reviews.", _icon: <Zap className="h-8 w-8 text-cyan-700" />, _link: "/services"},
    {_title: "Equipment Catalog", _description: "Find specialized hardware for development and research.", _details:
        "Access cutting-edge technology with flexible options to buy, _rent or lease the gear you need.", _icon: <Settings className="h-8 w-8 text-amber-700" />, _link: "/equipment"}];

  const _handleToggle = (_index: number) => {_setOpenIndex(_(prev) => (prev === index ? null : index));};

  return (
    <section className={_cn("py-16 bg-zion-blue-dark", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Key Features
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Hover or click a card to learn more about what Zion offers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_features.map(_(feature, _index) => (_<Card
              key={index}
              onMouseEnter={_() => setOpenIndex(index)}
              onMouseLeave={_() => setOpenIndex(null)}
              onClick={_() => handleToggle(index)}
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">
                {_feature.icon}
                <div>
                  <CardTitle className="text-lg text-white">{_feature.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {_feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <div
                className={_cn(
                  "transition-all duration-300", _openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
                )}
              >
                <CardContent className="text-sm text-zion-slate-light p-0">
                  <p>{_feature.details}</p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href={_feature.link} className="flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InteractiveFeatures;
