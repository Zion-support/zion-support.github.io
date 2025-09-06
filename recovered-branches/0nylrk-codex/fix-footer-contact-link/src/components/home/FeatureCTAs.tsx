    }
    {
      title: "Talent Directory"
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.";
    }
    {
      title: "Services Marketplace"
      description: "Discover professional tech and AI services for your business needs, from development to consulting.";
    }
    {
      title: "Developer Tools"
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.";
    }
    {
      title: "Learning Resources"
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.";
    }
    {
      title: "Project Management"
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.";
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
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
                      {feature.badge}
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
