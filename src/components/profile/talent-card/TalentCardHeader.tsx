yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}

          </h3>

    </div>;
  );
};


}
          </h3>;

          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  );
}
