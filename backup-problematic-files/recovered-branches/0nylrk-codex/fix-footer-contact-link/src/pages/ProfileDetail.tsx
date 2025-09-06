
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);

      />;
      <Header />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <div className="flex items-center space-x-4">;
                  <Avatar className="w-20 h-20">;

                    )}
                  </Avatar>;
                  <div>;
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">;

                  </div>;
                </div>;
              </CardHeader>;
              <CardContent>;

            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;

            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;

                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;

            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;

            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;

              }}
            />;
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Contact</h3>;
              <div className="flex flex-col space-y-3">;

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Social</h3>;
              <div className="flex flex-col space-y-3">;

                    <Github className="h-4 w-4" />;
                    GitHub;
                  </a>;
                )}

                    <Twitter className="h-4 w-4" />;
                    Twitter;
                  </a>;
                )}

                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
                )}

              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

}