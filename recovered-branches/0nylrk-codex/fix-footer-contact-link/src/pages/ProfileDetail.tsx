<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
} from "lucide-react",
import { HireNowCTA } from "@/components/profile/HireNowCTA",
=======
} from &quot;lucide-react&quot;;
import { HireNowCTA } from &quot;@/components/profile/HireNowCTA&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams(),
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {
<<<<<<< HEAD
          setError("Profile ID is missing."),
          return
        }

        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single(),
=======
          setError(&quot;Profile ID is missing.&quot;);
          return;
        }

        const { data, error } = await supabase
          .from(&quot;talent_profiles&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;id&quot;, profileId)
          .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

        if (error) {
          throw new Error(error.message)
        }

        if (!data) {
<<<<<<< HEAD
          setError("Profile not found."),
          return
=======
          setError(&quot;Profile not found.&quot;);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }

        setProfileData(data)
      } catch (err: any) {
<<<<<<< HEAD
        setError(err.message || "Failed to fetch profile."),
        toast({
          title: "Error",
          description: err.message || "Failed to fetch profile.",
          variant: "destructive"})
=======
        setError(err.message || &quot;Failed to fetch profile.&quot;);
        toast({
          title: &quot;Error&quot;,
          description: err.message || &quot;Failed to fetch profile.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },

    fetchProfile()
  }, [profileId]),

  if (isLoading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Loading profile...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Error: {error}</p>
      </div>
    )
  }

  if (!profileData) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Profile not found.</p>
      </div>
    )
=======
import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import {;
  MapPin,;
  Clock,;
  Link as LinkIcon,;
  Github,;
  Twitter,;
  Linkedin,;
  CheckCircle2,;
  Mail,;
  Phone,;
  Globe;
} from "lucide-react",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { profileId } = useParams(),;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setError(null),;
      try {;
        if (!profileId) {;
          setError("Profile ID is missing."),;
          return;
        }
;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
          .single(),;
        if (error) {;
          throw new Error(error.message);
        }
;
        if (!data) {;
          setError("Profile not found."),;
          return;
        }
;
        setProfileData(data);
      } catch (err: any) {;
        setError(err.message || "Failed to fetch profile."),;
        toast({;
          title: "Error",;
          description: err.message || "Failed to fetch profile.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchProfile();
  }, [profileId]),;
  if (isLoading) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Loading profile...</p>;
      </div>;
    );
  }
;
  if (error) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Error: {error}</p>;
      </div>;
    );
  }
;
  if (!profileData) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Profile not found.</p>;
      </div>;
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  return (;
    <>;
      <SEO;
        title={`${profileData.full_name} | Zion AI Marketplace`}
<<<<<<< HEAD
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
=======
        description={profileData.bio || "Check out this talent's profile on Zion!"}
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
                    {profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;
                    ) : (;
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">;
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
                <div className="flex flex-wrap gap-4 text-sm">;
                  {profileData.location && (;
                    <div className="flex items-center text-zion-slate-light">;
                      <MapPin className="h-4 w-4 mr-1" />;
                      <span>{profileData.location}</span>;
                    </div>;
                  )}
                  {profileData.availability && (;
                    <div className="flex items-center text-zion-slate-light">;
                      <Clock className="h-4 w-4 mr-1" />;
                      <span>{profileData.availability}</span>;
                    </div>;
                  )}
                  {profileData.hourly_rate && (;
                    <div className="text-white font-bold">;
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>;
                    </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  )}
                </div>;
              </CardContent>;
            </Card>;
            {/* About Section */}
<<<<<<< HEAD
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
=======
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>;
              </CardContent>;
            </Card>;
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;
                  {profileData.skills?.map((skill: string, index: number) => (;
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
                {profileData.experience ? (;
                  profileData.experience.map((exp: any, index: number) => (;
                    <div key={index} className="mb-4">;
                      <h4 className="font-bold text-white">{exp.title}</h4>;
                      <p className="text-zion-cyan">{exp.company}</p>;
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text-zion-slate-light">{exp.description}</p>;
                    </div>;
                  ));
                ) : (;
                  <p className="text-zion-slate-light">No experience provided.</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </CardContent>;
            </Card>;
            {/* Portfolio Section */}
<<<<<<< HEAD
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
=======
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData.portfolio_links.map((link: any, index: number) => (;
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
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </CardContent>;
            </Card>;
          </div>;
          {/* Sidebar with HireNowCTA */}
<<<<<<< HEAD
          <div className=&quot;col-span-4 lg:col-span-1&quot;>
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
=======
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA;
              talentProfile={{;
                id: profileData?.id || '',;
                full_name: profileData?.full_name || '';
                professional_title: profileData?.professional_title || '';
                hourly_rate: profileData?.hourly_rate || 0;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              }}
            />;
            {/* Contact Information */}
<<<<<<< HEAD
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
=======
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Contact</h3>;
              <div className="flex flex-col space-y-3">;
                {profileData.email && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Mail className="h-4 w-4" />;
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</a>;
                  </div>;
                )}
                {profileData.phone && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Phone className="h-4 w-4" />;
                    <span>{profileData.phone}</span>;
                  </div>;
                )}
                {profileData.website && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Globe className="h-4 w-4" />;
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">;
                      Website;
                    </a>;
                  </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </div>;
            </div>;
            {/* Social Links */}
<<<<<<< HEAD
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
=======
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Social</h3>;
              <div className="flex flex-col space-y-3">;
                {profileData.github_url && (;
                  <a href={profileData.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Github className="h-4 w-4" />;
                    GitHub;
                  </a>;
                )}
                {profileData.twitter_url && (;
                  <a href={profileData.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Twitter className="h-4 w-4" />;
                    Twitter;
                  </a>;
                )}
                {profileData.linkedin_url && (;
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
;