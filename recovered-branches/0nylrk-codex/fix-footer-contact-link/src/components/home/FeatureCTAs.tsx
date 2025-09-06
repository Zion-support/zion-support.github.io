

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {

      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    {
      title: "Equipment Catalog"
      description: "Find specialized hardware and tech equipment for AI development and research."
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />
      link: "/equipment"
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."

    {
      title: "Mobile Experience"
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices."
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />
      link: "/mobile-launch"
      badge: "Featured"
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."

    {
      title: "Zion Hire AI"
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches."
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />
      link: "/zion-hire-ai"
      badge: "Premium"
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
=======
      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,
      link: "/dashboard / projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    }
    {
      title: "Zion Hire AI",
      description: "AI - powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700" />,
      link: "/zion - hire - ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  ];
;
  return (

    <section className="py - 16 bg - gradient - to - b from - background to - background / 90">;
      <div className="container mx - auto px - 4">;
        <div className="mb - 12 text - center">;
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">Discover Zion's Powerful Features</h2>;
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {features.map ((feature, index) => (
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;
              <CardHeader className="pb - 2">;
                <div className="flex justify - between items - start">;

                  {feature.icon}
                  {feature.badge && (

=======
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  )}
                </div>;
                <CardTitle className="mt-4">{feature && feature.title}</CardTitle>;
                <CardDescription className="line-clamp-2">{feature && feature.description}</CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text-sm text-muted-foreground">{feature && feature.details}</p>;
              </CardContent>;
              <CardFooter>;
                <Button asChild className="w-full gap-1">;
                  <Link to={feature && feature.link}>;
                    <span>Explore {feature && feature.title}</span>;
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

=======
                    </Badge>)}
                </div>;
                <CardTitle className="mt - 4">{feature.title}</CardTitle>;
                <CardDescription className="line - clamp - 2">{feature.description}</CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text - sm text - muted - foreground">{feature.details}</p>;
              </CardContent>;
              <CardFooter>;
                <Button as_child className="w - full gap - 1">;
                  <Link to={feature.link}>;
                    <span > Explore {feature.title}</span>;
                    <ArrowRight className="h - 4 w - 4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
