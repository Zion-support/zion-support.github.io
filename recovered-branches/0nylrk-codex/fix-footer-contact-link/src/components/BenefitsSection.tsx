

const _benefits = [
  {_title: "AI-Powered Matchmaking", _description: "Our advanced algorithms match your needs with the perfect service providers or products, _saving you time and ensuring optimal results.", _icon: <Bot className="w-8 h-8" />},
  {_title: "Global Availability", _description: "Access a worldwide network of tech talents, _products, _and services to find the best solutions regardless of geographic limitations.", _icon: <Globe className="w-8 h-8" />},
  {_title: "24/7 Support", _description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.", _icon: <Clock className="w-8 h-8" />},
  {_title: "Cost Reduction", _description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.", _icon: <TrendingDown className="w-8 h-8" />}];

export function BenefitsSection() {_return (_<section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, _index) => (
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
