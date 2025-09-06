  {
    title: "Talents"
    description: "Connect with AI experts, developers, and tech specialists";
  {
    title: "Equipment"
    description: "Rent or buy specialized hardware, servers, and devices";
  }
];

interface CategoriesSectionProps {;
  showTitle?: boolean;
}
  return (
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
            <GradientHeading>Explore Categories</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>;
          </div>;
        )}
                key={service.title}
                to={service.link}
                className="px - 6 py - 3 bg - zion - blue - light hover:bg - zion - blue - dark border border - zion - purple / 20 hover:border - zion - purple / 50 rounded - full text - zion - cyan transition - all duration - 300";
              >;
                {service.title}
            View All Categories →;
          </Link>;
        </div>;
      </div>;
=======
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
