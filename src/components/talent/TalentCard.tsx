import { Badge } from "@/components/ui/badge",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardFooter } from "@/components/ui/card",""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react
import { FavoriteButton } from "@/components/FavoriteButton","
export const TalentCard = React && React.memo(TalentCardComponent);"
TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton";""
import { TalentProfile } from "@/types/talent";""
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
import { TalentProfile } from "@/types/talent",""
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
import { useCart } from '@/context/CartContext',
export interface TalentCardProps {
  // TODO: Implement
}
  talent: TalentProfile;,
  onViewProfile: (id: string,) => void;
  onRequestHire: (talent: TalentProfile,) => void;
  isAuthenticated: boolean;
import React from 'react',;
import { useRouter } from 'next/router',;
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardFooter } from "@/components/ui/card",;""
import { FavoriteButton } from "@/components/FavoriteButton",;""
import { TalentProfile } from "@/types/talent",;""
import { RatingStars } from '@/components/RatingStars',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { useCart } from '@/context/CartContext',;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;


const TalentCardComponent = ({
  talent;
  onViewProfile;
  onRequestHire;
  isAuthenticated;)
}: TalentCardProps,) => {
  const router = useRouter()
  const handleViewProfile = () => {
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`)
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {
      onViewProfile(talent.id)




  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)


  },




  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) |[]
  onViewProfile: (id: string,) => void,;
  onRequestHire: (talent: TalentProfile,) => void,;

const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
}: TalentCardProps,) => {;
  const router = useRouter(),;

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;`;
    router && router.push(`/talent/${talent && talent.id}`),;

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
  },;
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);


  return (
    <Card;
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple""
      onClick={handleViewProfile}
      tabIndex={0}


    >
"
      <div className="p-6">"
</div>"
        <div className="flex items-start">"
          <div className="relative mr-4">"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">"
</div>
                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}

                  className="w-full h-full object-cover"""
                  loading="lazy"")"
                  {talent.full_name?.charAt(0) || "T"}"
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;""
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;"

            <p className="text-white font-medium">{talent && talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">"
                <div className="flex items-center text-zion-slate-light">"
                  <MapPin className="h-4 w-4 mr-1" />"

                  <span>{talent.location}</span>
                  <Clock className="h-4 w-4 mr-1" />"

                  <span>{talent.availability_type}</span>
          <div className="mt-4">"
            <div className="flex flex-wrap gap-2">"
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;"
                <span;
                  key = {index,}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;"
</span>
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light""
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
                </span>;
        <div className="mt-5 flex items-center justify-between">;"
          <div>;
              <div className="text-white font-bold">;"
                <span className="text-zion-slate-light font-normal">/hr</span>;"
              <div className="text-zion-slate-light">Rate not specified</div>;""
          <div className="flex items-center gap-2">"
          <div className="flex items-center gap-2">;"
              <Button;"
                size="sm"""
                variant="secondary""
                onClick={handleRequestHire}

                className="bg-zion-purple hover:bg-zion-purple-light text-white""

              
              variant="ghost""
              onClick={(e) => {
              View <ArrowRight className="ml-1 h-4 w-4" />"

            
              View <ArrowRight className="ml-1 h-4 w-4" />;"

    <Card;"
      className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - zion - purple";"
      on_click = {handleViewProfile, }
      tab_index = {0, }
    >;
      <div className="p - 6">;"
        <div className="flex items - start">;"
          <div className="relative mr - 4">;"
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;"
                  src = {talent.profile_picture_url, }
                  alt = {talent.full_name, }"
                  className="w - full h - full object - cover";""
                  loading="lazy";"
                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;"
</div>)
                </div>)}
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;"
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;"
          <div className="flex - 1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;""
              <FavoriteButton item_id={talent.id} className="-mt - 1" />;"

            <p className="text - white font - medium">{talent.professional_title}</p>;""
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;"
                <div className="flex items - center text - zion - slate - light">;"
                  <MapPin className="h - 4 w - 4 mr - 1" />;"

                  <span>{talent.location}</span>;
                </div>)}"
                  <Clock className="h - 4 w - 4 mr - 1" />;"

                  <span>{talent.availability_type}</span>;
          <div className="mt - 4">;"
            <div className="flex flex - wrap gap - 2">;"
                  key = {index, }"
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";"
                </span>))}"
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;"
                </span>)}
        <div className="mt - 5 flex items - center justify - between">;"
              <div className="text - white font - bold">;"
                <span className="text - zion - slate - light font - normal">/hr</span>;"
              </div>) : ()"
              <div className="text - zion - slate - light">Rate not specified</div>)}"
          <div className="flex items - center gap - 2">;"
                size="sm";""
                variant="secondary";"
                on_click = {handleRequestHire, }"
                className="bg - zion - purple hover:bg - zion - purple - light text - white";"

              )}
              variant="ghost";"
              on_click={(e, ) => {
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;"

            ;
    );"`;