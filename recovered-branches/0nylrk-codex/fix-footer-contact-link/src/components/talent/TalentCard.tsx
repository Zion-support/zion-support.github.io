  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
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
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}
              )}
            </div>;
          </div>;
        )}
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
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
            </Button>;
          </div>;
        </div>;
      </div>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
