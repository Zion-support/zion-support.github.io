

  fullName,
  professionalTitle,
  profilePicture,
  availabilityType,

  yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />

=======
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


      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}

          </h3>

<<<<<<< HEAD
}
