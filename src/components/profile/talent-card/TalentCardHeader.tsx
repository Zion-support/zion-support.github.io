}: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />

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


      </div>;
    </div>;
  );
}
