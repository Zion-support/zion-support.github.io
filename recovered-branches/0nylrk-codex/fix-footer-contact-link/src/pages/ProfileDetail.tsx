  const { profileId } = useParams();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Zion AI Marketplace`}
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
                      )}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">{profileData.professional_title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  {profileData.location && (
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {profileData.availability && (
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {profileData.hourly_rate && (
                    <div className="text-white font-bold">
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>
                    </div>
                  )}

            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>
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
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>

                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />
                )}
              </CardContent>
            </Card>
          </div>
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
                {profileData.linkedin_url && (
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
