import React from "react";
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs.;
},
    {;
      icon: GraduationCap,";
      title: "Learning & Development",";
      description: "Annual learning budget, conference attendance, and skill development programs.;
},
    {;
      icon: Briefcase,";
      title: "Flexible Work",";
      description: "Remote work options, flexible hours, and work-life balance initiatives.;
},
    {;
      icon: Users,";
      title: "Team Culture",";
      description: "Collaborative environment, team events, and inclusive workplace culture.;
  ];

  return (;
    <MainLayout title = "Careers - Zion Tech Group;
      description="Join our team of talented professionals and help us build the future of technology. Explore career opportunities at Zion Tech Group.">;
      {/* comment */}";
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">";
        <div className="container mx-auto px-4">";
          <div className="text-center">";
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Join Our Team</h1>";
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">,
              Be part of a team that&apos,s building the future of technology. We&apos,re looking for passionate,
individuals who want to make a difference.;
            </p>;
          </div>;
      </section>;
      {/* comment */}";
      <section className="py-20">";
        <div className="container mx-auto px-4">";
          <div className="text-center mb-16">";
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>";
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We offer more than just a job - we offer a career path with growth opportunities and a supportive environment.;
            </p>;
          </div>;
          ";
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => {;
              const IconComponent = benefit.icon;
              return (";
                <div key = "{index}" className="text-center">";
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <IconComponent className="h-8 w-8 text-blue-600"  />;
                  </div>";
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>";
                  <p className="text-gray-600">{benefit.description}</p>;
                </div>;
              );
}
            })}

          </div>;
      </section>;
      {/* comment */}";
      <section className = "py-20 bg-gray-50">";
        <div className="container mx-auto px-4">";
          <div className="text-center mb-16">";
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>";
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Explore our current job openings and find the perfect role for you.;
            </p>;
          </div>;
          ";
          <div className="space-y-8">;
            {jobOpenings.map((job, index) => (";
              <div key="{index}" className="bg-white rounded-lg p-8 shadow-lg">";
                <div className="flex flex-col lg: flex-row lg:items-center lg:justify-between mb-6">;
                  <div>",
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>";
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">";
                      <div className="flex items-center gap-1">";
                        <MapPin className="h-4 w-4"  />;