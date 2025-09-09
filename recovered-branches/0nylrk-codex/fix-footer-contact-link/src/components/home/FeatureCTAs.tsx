import React from "react";

      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";    }
    {
      title: "Project Management"
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.";    {
      title: "Zion Hire AI"
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches."
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />
      link: "/zion-hire-ai"
      badge: "Premium"
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red-700" />,
      link: "/dashboard / projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    }
    {
      title: "Zion Hire AI",
      description: "AI - powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet-700" />,
      link: "/zion - hire - ai",
      badge: "Premium",

      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";


    }
  ];
;
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>;

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;

                  {feature.icon}
                  {feature.badge && (
                </div>;
                <CardTitle className="mt-4">{feature.title}</CardTitle>;
                <CardDescription className="line - clamp-2">{feature.description}</CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text - sm text - muted-foreground">{feature.details}</p>;
              </CardContent>;
              <CardFooter>;
                <Button as_child className="w - full gap-1">;
                  <Link to={feature.link}>;
                    <span > Explore {feature.title}</span>;
                    <ArrowRight className="h - 4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
