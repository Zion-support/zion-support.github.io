

  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}

export function TalentCard(): any ({;
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
  isAuthenticated;
}: TalentCardProps) {;
  const handleViewProfile = () => {;
    if (onViewProfile) {;

<<<<<<< HEAD
      onViewProfile(talent && talent.id);
    }
  };

  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  };

  const handleToggleSave = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);
    }
  };
<<<<<<< HEAD

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;            {/* Location & Availability */}
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
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}            )}

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;

              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}  );}
 export interface TalentCardProps {
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean;
}talent, onViewProfile, onRequestHire, isSaved, onToggleSave, isAuthenticated;
}: TalentCardProps) {}
  const handleViewProfile = () => {}
  if (onViewProfile) {}
  </div>) "
}</div> </Button> </div> <p className="text-zion-cyan font-medium"> {}
  talent.professional title;
}</p> {}
  /* Location & Availability */ "
}<div className="mt-2 flex flex-wrap gap-3 text-sm"> {"
  talent.location && (<div className="flex items-center text-zion-slate-light"> <MapPin className="h-4 w-4 mr-1" /> <span> {}
  talent.location;
}</span> </div>) 
}{"
  talent.availability type && (<div className="flex items-center text-zion-slate-light"> <Clock className="h-4 w-4 mr-1" /> <span> {}
  talent.availability type;
}</span> </div>) 
}</div> </div> </div> {}
  /* Skills */ 
}{"
  skills.length > 0 && (<div className="mt-4"> <div className="flex flex-wrap gap-2"> {}
  skills.map ( (skill, index) => (<span key= {}
  index "
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {}
  skill;
}</span>) ) 
}{"
  (talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan"> + {}
  (talent.skills?.length || 0) - 5;
}more </span>) 
}</div> </div>) 
}{}
  /* Hourly Rate & Actions */ "
}<div className="mt-5 flex items-center justify-between"> <div> {"
  talent.hourly rate ? (<div className="text-white font-bold"> $ {}
  talent.hourly rate "
}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) "
}</div> <Button size="sm" variant="secondary" onClick= {}
  handleRequestHire "
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) "
}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
}
            ) : (;"
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
              <Button"
                size="sm""
                variant="secondary"
                onClick={handleRequestHire}"
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}
            <Button"
              size="sm""
              variant="ghost"

              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df