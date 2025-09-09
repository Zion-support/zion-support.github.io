import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from '@/components/FavoriteButton';
import { useNavigate } from 'react-router-dom';

const TalentCard = ({ talent, onBook }) => {
  const navigate = useNavigate();
  
  const handleBook = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(talent);
    }
  };

  const handleViewProfile = () => {
    navigate(`/talent/${talent.id}`);
  };

  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [];

  return (
    <Card className="bg-zion-slate-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 cursor-pointer" onClick={handleViewProfile} tabIndex={0}>
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.avatar ? (
                <img src={talent.avatar} alt={talent.full_name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                  {talent.full_name?.charAt(0) || 'T'}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <CheckCircle2 className="absolute -bottom-1 -right-1 w-5 h-5 text-zion-cyan bg-zion-slate-dark rounded-full" />
            )}
          </div>

          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">
                {talent.full_name}
              </h3>
              <FavoriteButton talentId={talent.id} />
            </div>
            <p className="text-white font-medium">
              {talent.professional_title}
            </p>

            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-zion-blue-dark text-zion-cyan text-xs rounded">
                  {skill}
                </span>
              ))}
              {talent.skills?.length > 5 && (
                <span className="px-2 py-1 bg-zion-slate-light text-white text-xs rounded">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourly_rate ? (
              <div className="text-xl font-bold text-white">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {onBook ? (
              <Button
                onClick={handleBook}
                size="sm"
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"
              >
                Book Now
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/login')}
                size="sm"
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"
              >
                Sign In to Book
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TalentCard;