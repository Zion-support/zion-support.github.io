import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import {
  Star,
  MapPin,
  Clock,
  Link,
  as,
  LinkIcon,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/components/ui/use-toast";
import {SEO} from "@/components/SEO";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {HireNowCTA} from "@/components/profile/HireNowCTA";
import {Star, MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2} from "lucide-react";

  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {

      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)        setProfileData(data);
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setIsError(false);
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError || !profileData) {;    <>;
      <SEO

        title={`${profileData.full_name} | Talent Profile`}
        description={
          profileData.bio || "View the profile of this talented individual."
        }
      />

      <AppHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
  return (
    <>;
      <SEO      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
                  </div>;
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill, index) => (;
                      <Badge key={index} variant="secondary">{skill}</Badge>;
                    ))}
            </div>;
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links &&
                profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
              </div>;
            </div>;                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>
                  ))
                ) : ("
                  <p className="text-zion-slate-light">
                    No portfolio links provided.

                  </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">
                {profileData.experience || "No experience provided."}
              </p>
            </div>
                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
;
