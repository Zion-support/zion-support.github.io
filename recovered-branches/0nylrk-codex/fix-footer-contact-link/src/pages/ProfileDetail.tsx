









  if (error) {;

    return (





      />;
      <Header />;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="grid grid-cols-12 gap-6">;

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <div className="flex items-center space-x-4">;
                  <Avatar className="w-20 h-20">;
                    {profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;
                    ) :(;
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>;

                      {profileData.full_name}
                      {profileData.is_verified && (;
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                      )}
                    </CardTitle>;
                    <CardDescription className="text-zion-cyan">{profileData.professional_title}</CardDescription>;
                  </div>;
                </div>;
              </CardHeader>;
              <CardContent>;
                </div>
              </CardContent>
            </Card>
                </div>;
              </CardContent>;
            </Card>;

            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date |"Present"}</p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>



              <CardContent>;

            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;

                {profileData && profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData && profileData.portfolio_links.map((link: any, index: number) => (;




                        className="text-zion-cyan hover:text-white flex items-center gap-2">;
                        <LinkIcon className="h-4 w-4" />;
                        {link && link.title || link && link.url}
                      </a>;

                        {link.title || link.url}
                      </Link>

                    ))}
                  </div>;
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
                )}
              </CardContent>;
            </Card>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA
              talentProfile={{
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0
                {profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData.portfolio_links.map((link:any, index:number) => (;
                      <a;
                        key={index}
                        href={link.url}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="text-zion-cyan hover:text-white flex items-center gap-2";
                      >;
                        <LinkIcon className="h-4 w-4" />;
                        {link.title || link.url}
                      </a>;
                    ))}
                  </div>;
                ) :(;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;                )}
              </CardContent>;
            </Card>;
          </div>;
;
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA;
              talentProfile={{;
                id:profileData?.id || '',;
                full_name:profileData?.full_name || '',;
                professional_title:profileData?.professional_title || '',;
                hourly_rate:profileData?.hourly_rate || 0;
              }}
            />;
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Contact</h3>;
              <div className="flex flex-col space-y-3">;
              </div>;
            </div>;



                {profileData.linkedin_url && (
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn


                  </Link>
                )}


              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;






