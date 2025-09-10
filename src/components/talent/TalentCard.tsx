import React from 'react';

import { _Button } from "@/components/ui/button";
import { _Card } from "@/components/ui/card";
import { _MapPin, Clock, CheckCircle2 } from "lucide-react";
import { _FavoriteButton } from "@/components/FavoriteButton";
import { _useNavigate } from "react-router-dom";

import { CheckCircle } from 'lucide-react';
import { Check } from 'lucide-react';
const _TalentCardComponent = ({ talent, onBook, onMessage, isAuthenticated }) => {
    const _navigate = useNavigate();
    const _handleMessage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onMessage) {
            onMessage(talent);
        }
        else {
            navigate(`/messages?talentId=${talent.id}`);
        }
    };
    const _handleBook = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onBook) {
            onBook(talent);
        }
    };
    // Extract skills - limit to 5 for display
    const _skills = talent.skills?.slice(0, 5) || [];
    return (<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple" onClick={handleViewProfile} tabIndex={0}>
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (<img loading="lazy" src={talent.profile_picture_url} alt={talent.full_name} className="w-full h-full object-cover"/>) : (<div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) || "T"}
                </div>)}
            </div>
            {talent.is_verified && (<div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan"/>
              </div>)}
          </div>
          
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} itemType="talent" className="-mt-1"/>
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
            
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (<div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1"/>
                  <span>{talent.location}</span>
                </div>)}
              {talent.availability_type && (<div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1"/>
                  <span>{talent.availability_type}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        {/* Skills */}
        {skills.length > 0 && (<div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (<span key={index} className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">
                  {skill}
                </span>))}
              {(talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>)}
            </div>
          </div>)}
        
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourly_rate ? (<div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>) : (<div className="text-zion-slate-light">Rate not specified</div>)}
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated && (<Button size="sm" variant="secondary" onClick={handleBook} className="bg-zion-purple hover:bg-zion-purple-light text-white">
                Book
              </Button>)}
            <Button size="sm" variant="ghost" onClick={handleMessage} className="text-zion-cyan hover:text-white hover:bg-zion-blue-light">
              Message
            </Button>

          </div>
        </div>
        <div className="flex items-center space-x-1">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-600">{talent.rating}/5</span>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {talent.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {talent.availability}
        </div>
        <div className="text-sm font-semibold text-green-600">
          ${talent.hourlyRate}/hour
        </div>
      </div>
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {talent.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {talent.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{talent.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={handleViewProfile}
          variant="outline"
          className="flex-1"
        >
          View Profile
        </Button>
        <Button
          onClick={handleBook}
          className="flex-1"
        >
          Book Now
        </Button>
      </div>

    </Card>);
};
export const _TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';

