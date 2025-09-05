
import {_Star, _MapPin, _Clock, _Link as LinkIcon, _Github, _Twitter, _Linkedin, _CheckCircle2} from "lucide-react";

export default function ProfilePage() {_// useParams may be untyped in this environment, _so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId} = useParams() as {_profileId?: string};
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect__(() => {_const _fetchProfile = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data, _error} = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();

        if (error) {_throw error;}

        setProfileData(data);
      } catch (error) {_setIsError(true);
        toast({
          title: "Error", _description: "Failed to load profile. Please try again later.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };

    if (profileId) {_fetchProfile();}
  }, [profileId]);

  if (isLoading) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );}

  if (isError || !profileData) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );}

  return (
    <>
      <SEO
        title={_`${profileData.full_name} | Talent Profile`}
        description={_profileData.bio || "View the profile of this talented individual."}
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {_/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            {_/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <div className="flex items-start">
                {_/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
                    {_profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={_profileData.full_name} />
                    ) : (
                      <AvatarFallback>{_profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {_profileData.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                    </div>
                  )}
                </div>
                
                {_/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{_profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{_profileData.professional_title}</p>
                    </div>
                    {_/* Add Save/Unsave Button Here */}
                  </div>
                  
                  {_/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {_profileData.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {_profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{profileData.availability}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {_/* Skills */}
              {_profileData.skills && profileData.skills.length > 0 && (_<div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, _index) => (
                      <Badge key={index} variant="secondary">{_skill}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {_/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{_profileData.bio || "No bio provided."}</p>
            </div>
            
            {_/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {_profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (_profileData.portfolio_links.map((link, _index) => (
                    <a
                      key={index}
                      href={_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {_link}
                    </a>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </div>
            </div>
            
            {_/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">{_profileData.experience || "No experience provided."}</p>
            </div>
            
            {_/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {_profileData.github_link && (
                  <a
                    href={profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {_profileData.twitter_link && (
                  <a
                    href={profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
                {_profileData.linkedin_link && (
                  <a
                    href={profileData.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        
          {_/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={_{
                id: profileData?.id || '', _full_name: profileData?.full_name || '', _professional_title: profileData?.professional_title || '', _hourly_rate: profileData?.hourly_rate || 0}}
            />
            {_/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
