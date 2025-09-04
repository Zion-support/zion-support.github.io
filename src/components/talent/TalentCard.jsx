import React from 'react';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {MapPin, Clock, CheckCircle2} from 'lucide-react';
import {FavoriteButton} from '@/components/FavoriteButton';
import {useNavigate} from 'react-router-dom';

export default function TalentCard({ talent, onFavorite, onHire }) {
  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    onHire(talent.id);
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {talent.name?.charAt(0) || 'T'}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{talent.name || 'Talent Name'}</h3>
            <p className="text-sm text-gray-600">{talent.title || 'Professional Title'}</p>
          </div>
        </div>
        <FavoriteButton 
          isFavorited={talent.isFavorited || false}
          onToggle={() => onFavorite(talent.id)}
        />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{talent.location || 'Location'}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{talent.availability || 'Available'}</span>
        </div>

        {talent.rating && (
          <div className="flex items-center text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
            <span>Rating: {talent.rating}/5</span>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
        {talent.description || 'Professional description and skills overview.'}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {(talent.skills || []).slice(0, 3).map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
        {(talent.skills || []).length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            +{(talent.skills || []).length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">
          ${talent.hourlyRate || '0'}/hour
        </div>
        <Button 
          onClick={handleBook}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Hire Now
        </Button>
      </div>
    </Card>
  );
}