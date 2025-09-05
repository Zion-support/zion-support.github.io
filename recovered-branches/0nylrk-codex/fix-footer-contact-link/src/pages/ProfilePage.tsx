
import { useState, useEffect } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { AppHeader } from &quot;@/layout/AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { HireNowCTA } from &quot;@/components/profile/HireNowCTA&quot;;
import { 
  Star, 
  MapPin, 
  Clock, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Linkedin,
  CheckCircle2
} from &quot;lucide-react&quot;;

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data, error } = await supabase
          .from(&quot;talent_profiles&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;id&quot;, profileId)
          .single();

        if (error) {
          throw error;
        }

        setProfileData(data);
      } catch (error) {
        console.error(&quot;Error fetching profile:&quot;, error);
        setIsError(true);
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to load profile. Please try again later.&quot;,
          variant: &quot;destructive&quot;});
      } finally {
        setIsLoading(false);
      }
    };

    if (profileId) {
      fetchProfile();
    }
  }, [profileId]);

  if (isLoading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <span className=&quot;loading loading-ring loading-lg&quot;></span>
      </div>
    );
  }

  if (isError || !profileData) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p className=&quot;text-red-500&quot;>Failed to load profile.</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || &quot;View the profile of this talented individual.&quot;}
      />
      <AppHeader />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;grid grid-cols-12 gap-6&quot;>
          {/* Main Content Area */}
          <div className=&quot;col-span-12 lg:col-span-8&quot;>
            {/* Profile Header */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <div className=&quot;flex items-start&quot;>
                {/* Avatar */}
                <div className=&quot;relative mr-4&quot;>
                  <Avatar className=&quot;w-24 h-24&quot;>
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {profileData.is_verified && (
                    <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                      <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
                    </div>
                  )}
                </div>
                
                {/* Main Info */}
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;flex justify-between items-start&quot;>
                    <div>
                      <h1 className=&quot;text-2xl font-bold text-white&quot;>{profileData.full_name}</h1>
                      <p className=&quot;text-zion-cyan font-medium&quot;>{profileData.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
                  </div>
                  
                  {/* Location & Availability */}
                  <div className=&quot;mt-2 flex flex-wrap gap-3 text-sm&quot;>
                    {profileData.location && (
                      <div className=&quot;flex items-center text-zion-slate-light&quot;>
                        <MapPin className=&quot;h-4 w-4 mr-1&quot; />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.availability && (
                      <div className=&quot;flex items-center text-zion-slate-light&quot;>
                        <Clock className=&quot;h-4 w-4 mr-1&quot; />
                        <span>{profileData.availability}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className=&quot;mt-4&quot;>
                  <h4 className=&quot;text-lg font-bold text-white mb-2&quot;>Skills</h4>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant=&quot;secondary&quot;>{skill}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Bio Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>About Me</h2>
              <p className=&quot;text-zion-slate-light&quot;>{profileData.bio || &quot;No bio provided.&quot;}</p>
            </div>
            
            {/* Portfolio Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Portfolio</h2>
              <div className=&quot;space-y-3&quot;>
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;flex items-center text-zion-cyan hover:text-white transition-colors&quot;
                    >
                      <LinkIcon className=&quot;h-4 w-4 mr-2&quot; />
                      {link}
                    </Link>
                  ))
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No portfolio links provided.</p>
                )}
              </div>
            </div>
            
            {/* Experience Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Experience</h2>
              <p className=&quot;text-zion-slate-light&quot;>{profileData.experience || &quot;No experience provided.&quot;}</p>
            </div>
            
            {/* Social Links */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Connect</h2>
              <div className=&quot;flex space-x-4&quot;>
                {profileData.github_link && (
                  <a
                    href={profileData.github_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Github className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
                {profileData.twitter_link && (
                  <a
                    href={profileData.twitter_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Twitter className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
                {profileData.linkedin_link && (
                  <a
                    href={profileData.linkedin_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Linkedin className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
              </div>
            </div>
          </div>
        
          {/* Sidebar with HireNowCTA */}
          <div className=&quot;col-span-12 lg:col-span-4 space-y-6&quot;>
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
