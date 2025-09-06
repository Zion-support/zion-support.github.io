export function TalentCardHeader(): any ({;
  fullName,;
  professionalTitle,;
  profilePicture,;
  availabilityType,;
  yearsExperience,;
}: TalentCardHeaderProps) {;
  return (
    <div className='flex items-start gap-4 mb-4'>;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;
      <div className='flex-1'>;
        <div className='flex items-center justify-between'>;
          <h3 className='text-lg font-semibold text-white flex items-center gap-1'>;
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck
                className='h-4 w-4 text-zion-cyan'
                aria-label='Verified Expert'
              />;
            )}
          </h3>;
          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        <p className='text-zion-cyan text-sm'>{professionalTitle}</p>;
      </div>;
    </div>;
  );
}
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { TalentCardAvatar } from './TalentCardAvatar';
import { TalentCardAvailability } from './TalentCardAvailability';
import React from './react';
import { TalentCardAvatar  } from './TalentCardAvatar';
import { TalentCardAvailability  } from './TalentCardAvailability';
interface TalentCardHeaderProps {
  full_name: string;
  professional_title: string;
  profile_picture?: string;
  availability_type: string;
  years_experience: number;
export /**
 * TalentCardHeader - Function description
 */
function TalentCardHeader() {
  return (
    <div className='flex items - start gap - 4 mb - 4'>;
      <TalentCardAvatar profile_picture={profile_picture} full_name={full_name} />;
      <div className='flex - 1'>;
        <div className='flex items - center justify - between'>;
          <h3 className='text - lg font - semibold text - white flex items - center gap - 1'>;
            {full_name}
            {/* AI score could be used for verification badge */}
            {years_experience > 5 && (
              <BadgeCheck;
                className='h - 4 w - 4 text - zion - cyan';
                aria - label='Verified Expert';
              />)}
          </h3>;
          <TalentCardAvailability availability_type={availability_type} />;
        </div>;
        <p className='text - zion - cyan text - sm'>{professional_title}</p>;
      </div>;
    </div>);
}