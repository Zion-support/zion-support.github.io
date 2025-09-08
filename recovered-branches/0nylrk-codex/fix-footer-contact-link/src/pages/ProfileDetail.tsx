<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {SEO} from "@/components/SEO";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe} from "lucide-react";
import {HireNowCTA} from "@/components/profile/HireNowCTA";


<<<<<<< HEAD
=======
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
import { HireNowCTA } from "@/components/profile/HireNowCTA",
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams(),
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
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
} from "lucide-react",
import { HireNowCTA } from "@/components/profile/HireNowCTA";
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams($2);
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button";
import {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  Card,
  CardContent,
  CardDescription,
  CardHeader,

import { 
  MapPin;
  Clock;
  Link as LinkIcon;
  Github;
  Twitter;
  Linkedin;
  CheckCircle2;
  Mail;
  Phone;
  Globe

export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type

  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams();

  const [profileData, setProfileData] = useState<any>(null),

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

      setIsLoading(true);
      setError(null);
      try {;
        if (!profileId) {;"
          setError("Profile ID is missing.");
          return;
<<<<<<< HEAD

=======


        }
>>>>>>> origin/cursor/delete-old-data-records-6bba

          .single(),

          .single();
          .single(),

<<<<<<< HEAD
=======

        if (error) {
          throw new Error(error.message);
        }
        if (!data) {


        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);


          setError("Profile not found.");
          return;
        }

        setProfileData(data);
      } catch (err: any) {"
        (setError(err.message || "Failed to fetch profile."),
          toast({"
            title: "Error","
            description: err.message || "Failed to fetch profile.","
            variant: "destructive",
          }));
      } finally {}
        setIsLoading(false);

      }

        setIsLoading(false)
      }
    }

    },

    },


>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    )
  }
  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>
<<<<<<< HEAD



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
      } finally {
        setIsLoading (false);
      }
    }
        setProfileData(data);
      } catch (err: any) {;
        setError(err && err.message || "Failed to fetch profile."),;
        toast({;
          title: "Error",
          description: err && err.message || "Failed to fetch profile.",;


>>>>>>> origin/cursor/delete-old-data-records-6bba
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }

<<<<<<< HEAD

=======

    };

    fetchProfile();
  }, [profileId]);

  if (isLoading) {;

    return (


>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="min-h-screen flex items-center justify-center">;
        <p>Loading profile...</p>;
      </div>;

    );
  }
<<<<<<< HEAD


  if (error) {;

    return (

=======
  if (error) {;
    return (
;
  if (error) {;
    return (;
  if (error) {;

    return (    return (
;
  if (error) {;
    return (;      <div className="min-h-screen flex items-center justify-center">;

    return (
;
  if (!profileData) {;
    return (;



>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p>Profile not found.</p>;
      </div>;
    );
  }
<<<<<<< HEAD

=======
    )
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <>;
      <SEO

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD


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

=======


      <SEO;
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <div className="flex items-center space-x-4">"
                  <Avatar className="w-20 h-20">
                    {profileData.profile_picture_url ? (
                      <AvatarImage;
                        src={profileData.profile_picture_url}
                        alt={profileData.full_name}
                      />
                    ) : (
                      <AvatarFallback>
                        {profileData.full_name?.charAt(0)}
                      </AvatarFallback>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    )}
                  </Avatar>;
                  <div>;"
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">;

<<<<<<< HEAD
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
=======
                      {profileData && profileData.full_name}
                      {profileData && profileData.is_verified && (;"
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                      )}

                    <CardDescription className="text-zion-cyan">
                      {profileData.professional_title}
                    </CardDescription>
                  </div>
                </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </CardHeader>
              <CardContent>"
                <div className="flex flex-wrap gap-4 text-sm">
                  {profileData.location && ("
                    <div className="flex items-center text-zion-slate-light">"
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {profileData.availability && ("
                    <div className="flex items-center text-zion-slate-light">"
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {profileData.hourly_rate && ("
                    <div className="text-white font-bold">
                      ${profileData.hourly_rate}"
                      <span className="text-zion-slate-light font-normal">
                        /hr;
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;

<<<<<<< HEAD
=======

              </CardContent>;
            </Card>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;


                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD



=======
;
            {/* Experience Section */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <a
                        key={index}
                        href={link && link.url}
                        target="_blank"
                        rel="noopener noreferrer"
<<<<<<< HEAD



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


=======


                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}

                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (
                  <a href={profileData.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {profileData.twitter_url && (
                  <a href={profileData.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Link>
                )}

              }
            />;
            {/* Contact Information */}
                )}
                {profileData && profileData.phone && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Phone className="h-4 w-4" />;
                    <span>{profileData && profileData.phone}</span>;
                  </div>;
                )}
                )}
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (
                <div className="flex flex - wrap gap - 4 text-sm">;
                  <a;
                    href={profileData.github_url}"
                    target="_blank""
                    rel="noopener noreferrer""
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >"
                    <Github className="h-4 w-4" />
                    GitHub;
                  </a>
                )}
                {profileData.twitter_url && (
                  <a;
                    href={profileData.twitter_url}"
                    target="_blank""
                    rel="noopener noreferrer""
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >"
                    <Twitter className="h-4 w-4" />
                    Twitter;
                  </a>
                )}
                {profileData && profileData.linkedin_url && (;"
                  <a href={profileData && profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;"
                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
                )}

                  {profile_data.location && (
                    <div className="flex items - center text - zion - slate-light">;
                      <MapPin className="h - 4 w - 4 mr-1" />;
                      <span>{profile_data.location}</span>;
                    </div>)}
                  {profile_data.availability && (
                    <div className="flex items - center text - zion - slate-light">;
                      <Clock className="h - 4 w - 4 mr-1" />;
                      <span>{profile_data.availability}</span>;
                    </div>)}
                  {profile_data.hourly_rate && (
                    <div className="text - white font-bold">;
                      ${profile_data.hourly_rate}
                      <span className="text - zion - slate - light font-normal">/hr</span>;
                    </div>)}
                </div>;
              </CardContent>;
            </Card>;
            {/* About Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className="text - zion - slate-light">{profile_data.bio || "No bio provided."}</p>;
              </CardContent>;
            </Card>;
            {/* Skills Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex - wrap gap-2">;
                  {profile_data.skills?.map ((skill: string, index: number) => (
                    <Badge key={index} className="bg - zion - blue - light text - zion - slate - light border-none">{skill}</Badge>)) || <p className="text - zion - slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
            {/* Experience Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.experience ? (
                  profile_data.experience.map ((exp: any, index: number) => (
                    <div key={index} className="mb-4">;
                      <h4 className="font - bold text-white">{exp.title}</h4>;
                      <p className="text - zion-cyan">{exp.company}</p>;
                      <p className="text - sm text - zion - slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text - zion - slate-light">{exp.description}</p>;
                    </div>))) : (
                  <p className="text - zion - slate-light">No experience provided.</p>)}
              </CardContent>;
            </Card>;
            {/* Portfolio Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.portfolio_links ? (
                  <div className="flex flex - col gap-3">;
                    {profile_data.portfolio_links.map ((link: any, index: number) => (
                      <a;
                        key={index}
                        href={link.url}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="text - zion - cyan hover:text - white flex items - center gap-2";
                      >;
                        <LinkIcon className="h - 4 w-4" />;
                        {link.title || link.url}
                      </a>))}
                  </div>) : (
                  <p className="text - zion - slate-light">No portfolio links provided.</p>)}
              </CardContent>;
            </Card>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col - span - 4 lg:col - span-1">;
            <HireNowCTA;
              talent_profile={
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0;
              }
            />;
            {/* Contact Information */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt-6">;
              <h3 className="text - xl font - bold mb-4">Contact</h3>;
              <div className="flex flex - col space-y-3">;
                {profile_data.email && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Mail className="h - 4 w-4" />;
                    <a href={`mailto:${profile_data.email}`} className="hover:text - zion-cyan">{profile_data.email}</a>;
                  </div>)}
                {profile_data.phone && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Phone className="h - 4 w-4" />;
                    <span>{profile_data.phone}</span>;
                  </div>)}
                {profile_data.website && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Globe className="h - 4 w-4" />;
                    <a href={profile_data.website} target="_blank" rel="noopener noreferrer" className="hover:text - zion-cyan">;
                      Website;
                    </a>;
                  </div>)}
              </div>;
            </div>;
            {/* Social Links */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt-6">;
              <h3 className="text - xl font - bold mb-4">Social</h3>;
              <div className="flex flex - col space-y-3">;
                {profile_data.github_url && (
                  <a href={profile_data.github_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Github className="h - 4 w-4" />;
                    GitHub;
                  </a>)}
                {profile_data.twitter_url && (
                  <a href={profile_data.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Twitter className="h - 4 w-4" />;
                    Twitter;
                  </a>)}
                {profile_data.linkedin_url && (
                  <a href={profile_data.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Linkedin className="h - 4 w-4" />;
                    LinkedIn;
                  </a>)}


                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >"
                    <Linkedin className="h-4 w-4" />

    </>;
  ),; import {};

>>>>>>> origin/cursor/delete-old-data-records-6bba

  MapPin;
Clock;
Link as LinkIcon;
Github;
Twitter;
Linkedin;
CheckCircle2;
Mail;
Phone;

}= useParams ();
const [profileData, setProfileData] = useState<any> (null);
const [error, setError] = useState<string | null> (null);

  setIsLoading (false) 
}
;


<<<<<<< HEAD




=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
