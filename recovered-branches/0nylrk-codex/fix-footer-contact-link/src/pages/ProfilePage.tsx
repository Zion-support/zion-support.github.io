
,
import {useState, useEffect} from "react",
import {useParams} from "react-router-dom",
import {supabase} from "@/integrations/supabase/client",
import {toast} from "@/components/ui/use-toast",
import {SEO} from "@/components/SEO",
import {AppHeader} from "@/layout/AppHeader",
import {Footer} from "@/components/Footer",
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar",
import {Badge} from "@/components/ui/badge",
import {Button} from "@/components/ui/button",
import {HireNowCTA} from "@/components/profile/HireNowCTA",
import {Star, MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2} from "lucide-react",
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a,
  // type argument and cast the result instead to prevent TS2347 errors.,;
const { profileId } = useParams() as { profileId?: string },;
const [profileData, setProfileData] = useState<any>(null),;
const [isLoading, setIsLoading] = useState(true),;
const [isError, setIsError] = useState(false),
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "@/components/profile/HireNowCTA",
import {
  Star,
  MapPin,
  Clock,
  Link as LinkIcon,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2} from "lucide-react",
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a,
  // type argument and cast the result instead to prevent TS2347 errors.,;
const { profileId } = useParams() as { profileId?: string },;
const [profileData, setProfileData] = useState<any>(null),;
const [isLoading, setIsLoading] = useState(true),;
const [isError, setIsError] = useState(false),
  useEffect(() => {;
const fetchProfile = async () => {
      setIsLoading(true),
      setIsError(false),
      try {;
const { data, error } = await supabase,
          .from("talent_profiles"),
          .select("*"),
          .eq("id", profileId),
          .single(),
          .single(),
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a,
  // type argument and cast the result instead to prevent TS2347 errors.,;
const { profileId } = useParams() as { profileId?: string },;
const [profileData, setProfileData] = useState<any>(null),;
const [isLoading, setIsLoading] = useState(true),;
const [isError, setIsError] = useState(false),
  useEffect(() => {;
const fetchProfile = async () => {
      setIsLoading(true),
      setIsError(false),
      try {;
const { data, error } = await supabase,
          .from("talent_profiles"),
          .select("*"),
          .eq("id", profileId),
          .single(),;
if (error) {
          throw error}
        setProfileData(data)} catch (error) {
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({,
title: "Error",
          description: "Failed to load profile. Please try again later.",;,
variant: "destructive"})} finally {
        setIsLoading (false)}
    }
},
 [profileId]),;
if (isLoading) {;
return (
      <div className="min-h-screen flex items-center justify-center">,
        <span className="loading loading-ring loading-lg">
      </div>)}
,;
if (isError || !profileData) {;
return (
      <div className="min-h-screen flex items-center justify-center">,
        <p className="text-red-500">Failed to load profile.
      </div>)}

return (
      <div className="min-h-screen flex items-center justify-center">,
        <p className="text-red-500">Failed to load profile.
      </div>)}
,;
return (
    <>,
      <SEO,
title={`${profileData.full_name} | Talent Profile`}
,
        description={profileData.bio || "View the profile of this talented individual."}
,
      />,
      <AppHeader />,
      <div className="container mx-auto px-4 py-8">,
        <div className="grid grid-cols-12 gap-6">,

          {/* Main Content Area */}
          <div className="col-span-12 lg: col-span-8">,

            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <div className="flex items-start">,

                {/* Avatar */}
                <div className="relative mr-4">,
                  <Avatar className="w-24 h-24">,

                    {profileData && profileData.profile_picture_url ? (
                      <AvatarImage src={profileData && profileData.profile_picture_url} alt={profileData && profileData.full_name} />) : (
                      <AvatarFallback>{profileData && profileData.full_name?.charAt(0)}</AvatarFallback>)}
                  
                  {profileData && profileData.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">,
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />,
                    </div>)}
,

                {/* Main Info */}
                <div className="flex-1">,
                  <div className="flex justify-between items-start">,
                    <div>,
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}
                    
                    {/* Add Save/Unsave Button Here */}
,

                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">,

                    {profileData && profileData.location && (
                      <div className="flex items-center text-zion-slate-light">,
                        <MapPin className="h-4 w-4 mr-1" />,
                        <span>{profileData && profileData.location}
                      </div>)}
                    {profileData && profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">,
                        <Clock className="h-4 w-4 mr-1" />,
                        <span>{profileData && profileData.availability}
                      </div>)}
,

              </div>

              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (
                <div className="mt-4">,
                  <h4 className="text-lg font-bold text-white mb-2">Skills
                  <div className="flex flex-wrap gap-2">,

                    {profileData && profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>))}
                  
                </div>)}
            
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">About Me
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">About Me
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}
            
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">Portfolio
              <div className="space-y-3">,

                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (
                  profileData && profileData.portfolio_links.map((link, index) => (

                    <a,
key={index}
                      href={link}
                      target="_blank",
                      rel="noopener noreferrer",
                      className="flex items-center text-zion-cyan hover: text-white transition-colors">,
                      <LinkIcon className="h-4 w-4 mr-2" />,

                      {link}
                    </a>))) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>)}

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">Experience
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">Experience
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}
            
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">,
              <h2 className="text-xl font-bold text-white mb-3">Connect
              <div className="flex space-x-4">,

                {profileData && profileData.github_link && (
                  <a,
href={profileData && profileData.github_link}
                    target="_blank",
                    rel="noopener noreferrer",
                    className="text-zion-cyan hover: text-white transition-colors">,
                    <Github className="h-6 w-6" />,
                  
                  </Link>
                {profileData && profileData.twitter_link && (
                  <a,
href={profileData && profileData.twitter_link}
                    target="_blank",
                    rel="noopener noreferrer",
                    className="text-zion-cyan hover: text-white transition-colors">,
                    <Twitter className="h-6 w-6" />,
                  
                  </Link>
                {profileData && profileData.linkedin_link && (
                  <a,
href={profileData && profileData.linkedin_link}
                    target="_blank",
                    rel="noopener noreferrer",
                    className="text-zion-cyan hover: text-white transition-colors">,
                    <Linkedin className="h-6 w-6" />,
                  
                  </Link>
,

          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg: col-span-4 space-y-6">,
            <HireNowCTA,
talentProfile={{,
id: profileData?.id |'',
                full_name: profileData?.full_name |'',
                professional_title: profileData?.professional_title |'',
                hourly_rate: profileData?.hourly_rate |0
            />,

            {/* Placeholder for other sidebar elements */}

      <Footer />,
    </>)}
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0}}
            />,

            {/* Placeholder for other sidebar elements */}
,

      <Footer />,
    </>)}
