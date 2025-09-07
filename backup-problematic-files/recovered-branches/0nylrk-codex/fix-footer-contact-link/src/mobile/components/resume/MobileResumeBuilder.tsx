onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;

          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;

          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;

          onClick={() => setCurrentStep("skills")}
        >;
          Skills;
        </Button>;
      </div>;

      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;

    <Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;

        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" placeholder="Your full name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;

        </div>;
        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" placeholder="Your phone number" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" placeholder="City, Country" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;

            rows={4}
          />;
        </div>;
      </CardContent>;

                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>;

    <div className="space-y-4">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;

                >;
                  <SelectTrigger className="w-[130px]">;
                    <SelectValue placeholder="Level" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="beginner">Beginner</SelectItem>;
                    <SelectItem value="intermediate">Intermediate</SelectItem>;
                    <SelectItem value="advanced">Advanced</SelectItem>;
                    <SelectItem value="expert">Expert</SelectItem>;
                  </SelectContent>;
                </Select>;

            </Button>;
          </div>;
        </CardContent>;
      </Card>;

            </div>;
          </div>;
        </CardContent>;
      </Card>;

}