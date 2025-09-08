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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
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
} from "lucide-react",import { HireNowCTA } from "@/components/profile/HireNowCTA";
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type

  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
import { HireNowCTA } from "@/components/profile/HireNowCTA",
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams(),
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {
          setError("Profile ID is missing."),
          return
        }
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();
          .single(),
      setIsLoading(true);
      setError(null);
      try {;
        if (!profileId) {;"
          setError("Profile ID is missing.");
          return;
        }

          .single(),

          .single();
          .single(),

        if (error) {
          throw new Error(error.message);
        }
        if (!data) {
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
      } finally {
        setIsLoading(false);

      }
    }      } finally {
        setIsLoading(false)
      }
    }
    },

    fetchProfile();
  }, [profileId]);
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
    );
  }

  if (error) {;

    return (    return (
;
  if (error) {;
    return (;      <div className="min-h-screen flex items-center justify-center">;
        <p>Profile not found.</p>;
      </div>;
    );
  }
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
              </CardContent>;
            </Card>;
;
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;
                  {profileData.skills?.map((skill:string, index:number) => (;                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
;            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0

              }}
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
                  <a
                    href={profileData.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {profileData.twitter_url && (
                  <a
                    href={profileData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {profileData && profileData.linkedin_url && (;
                  <a href={profileData && profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
                )}

                <div className="flex flex - wrap gap - 4 text-sm">;
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
              talent_profile={{
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0;
              }}
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
      <Footer />;                {profileData.linkedin_url && (
                  <a
                    href={profileData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn

              }
            />;
            {/* Contact Information */}
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662