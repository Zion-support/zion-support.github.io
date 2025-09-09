export function TalentCard(): any ({;

  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;  isAuthenticated;
}: TalentCardProps) {;
  const navigate = useNavigate();

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;`
    navigate(`/talent/${talent && talent.id}`);

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
  };
  const skills = talent && talent.skills?.slice(0, 5) || [];

  return (              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={handleToggleSave}>;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;

                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;"
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;

            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}

            </div>;
          </div>;
        </div>;

        {/* Skills */}
        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index) => (;
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}              )}
            </div>;
          </div>;
        )}                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;"
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}            )}
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
            )}
            <Button
              size="sm"
              variant="ghost"            </Button>;
          </div>;
        </div>;
    </Card>);
}
