





      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";


      description: "Discover professional tech and AI services for your business needs, from development to consulting.";



export function FeatureCTAs() {
  const features = [
    {


      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",


    },




      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."








      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";




      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: "/content / blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";








      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."


    }
  ],

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (






                    <Badge variant="secondary" className="bg-primary/20 text-primary">

                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
                      {feature.badge}


                    <ArrowRight className="h-4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
          ))}

        </div>;
      </div>;
    </section>;
  );
}


