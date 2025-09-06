

  fullName,
  professionalTitle,
  profilePicture,
  availabilityType,

  yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />

            {fullName}
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}

          </h3>

}
<<<<<<< HEAD
