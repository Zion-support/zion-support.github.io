import { useState, useEffect } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { 
  MapPin, 
  Clock, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Linkedin,
  CheckCircle2,
  Mail,
  Phone,
  Globe
} from &quot;lucide-react&quot;;
import { HireNowCTA } from &quot;@/components/profile/HireNowCTA&quot;;

export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!profileId) {
          setError(&quot;Profile ID is missing.&quot;);
          return;
        }

        const { data, error } = await supabase
          .from(&quot;talent_profiles&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;id&quot;, profileId)
          .single();

        if (error) {
          throw new Error(error.message);
        }

        if (!data) {
          setError(&quot;Profile not found.&quot;);
          return;
        }

        setProfileData(data);
      } catch (err: any) {
        setError(err.message || &quot;Failed to fetch profile.&quot;);
        toast({
          title: &quot;Error&quot;,
          description: err.message || &quot;Failed to fetch profile.&quot;,
          variant: &quot;destructive&quot;});
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  if (isLoading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Profile not found.</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Zion AI Marketplace`}
        description={profileData.bio || &quot;Check out this talent's profile on Zion!&quot;}
      />
      <Header />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;grid grid-cols-12 gap-6&quot;>
          {/* Main Content */}
          <div className=&quot;col-span-12 lg:col-span-8&quot;>
            {/* Profile Header */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <Avatar className=&quot;w-20 h-20&quot;>
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <CardTitle className=&quot;text-2xl font-bold text-white flex items-center gap-2&quot;>
                      {profileData.full_name}
                      {profileData.is_verified && (
                        <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
                      )}
                    </CardTitle>
                    <CardDescription className=&quot;text-zion-cyan&quot;>{profileData.professional_title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className=&quot;flex flex-wrap gap-4 text-sm&quot;>
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
                  {profileData.hourly_rate && (
                    <div className=&quot;text-white font-bold&quot;>
                      ${profileData.hourly_rate}
                      <span className=&quot;text-zion-slate-light font-normal&quot;>/hr</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-zion-slate-light&quot;>{profileData.bio || &quot;No bio provided.&quot;}</p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className=&quot;bg-zion-blue-light text-zion-slate-light border-none&quot;>{skill}</Badge>
                  )) || <p className=&quot;text-zion-slate-light&quot;>No skills provided.</p>}
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-bold text-white&quot;>{exp.title}</h4>
                      <p className=&quot;text-zion-cyan&quot;>{exp.company}</p>
                      <p className=&quot;text-sm text-zion-slate-light&quot;>{exp.start_date} - {exp.end_date || &quot;Present&quot;}</p>
                      <p className=&quot;text-zion-slate-light&quot;>{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No experience provided.</p>
                )}
              </CardContent>
            </Card>

            {/* Portfolio Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? (
                  <div className=&quot;flex flex-col gap-3&quot;>
                    {profileData.portfolio_links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.url}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;text-zion-cyan hover:text-white flex items-center gap-2&quot;
                      >
                        <LinkIcon className=&quot;h-4 w-4&quot; />
                        {link.title || link.url}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No portfolio links provided.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with HireNowCTA */}
          <div className=&quot;col-span-4 lg:col-span-1&quot;>
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
              }}
            />
            {/* Contact Information */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Contact</h3>
              <div className=&quot;flex flex-col space-y-3&quot;>
                {profileData.email && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Mail className=&quot;h-4 w-4&quot; />
                    <a href={`mailto:${profileData.email}`} className=&quot;hover:text-zion-cyan&quot;>{profileData.email}</Link>
                  </div>
                )}
                {profileData.phone && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Phone className=&quot;h-4 w-4&quot; />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.website && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Globe className=&quot;h-4 w-4&quot; />
                    <a href={profileData.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-zion-cyan&quot;>
                      Website
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Social</h3>
              <div className=&quot;flex flex-col space-y-3&quot;>
                {profileData.github_url && (
                  <a href={profileData.github_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;>
                    <Github className=&quot;h-4 w-4&quot; />
                    GitHub
                  </Link>
                )}
                {profileData.twitter_url && (
                  <a href={profileData.twitter_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;>
                    <Twitter className=&quot;h-4 w-4&quot; />
                    Twitter
                  </Link>
                )}
                {profileData.linkedin_url && (
                  <a href={profileData.linkedin_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;>
                    <Linkedin className=&quot;h-4 w-4&quot; />
                    LinkedIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
