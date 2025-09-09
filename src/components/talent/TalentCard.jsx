import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from '@/components/FavoriteButton';
import { useNavigate } from 'react-router-dom';

export default function TalentCard({ talent, onBook, onFavorite }) {
  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(talent);
    }
  };

  const handleCardClick = () => {
    navigate(`/talent/${talent.id}`);
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src={talent.avatar || '/placeholder-avatar.jpg'}
              alt={talent.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{talent.name}</h3>
              <p className="text-sm text-gray-600">{talent.title}</p>
            </div>
          </div>
          <FavoriteButton 
            isFavorited={talent.isFavorited}
            onToggle={() => onFavorite && onFavorite(talent.id)}
          />
        </div>

        <div className="space-y-2 mb-4">
          {talent.location && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {talent.location}
            </div>
          )}
          
          {talent.availability && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              {talent.availability}
            </div>
          )}
          
          {talent.verified && (
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Verified
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">
            ${talent.hourlyRate}/hr
          </div>
          <Button onClick={handleBook} size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
}