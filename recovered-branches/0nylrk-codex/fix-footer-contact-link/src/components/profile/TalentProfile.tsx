  profile;
  onRequestHire;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">;
      {/* Profile Header */}
      <ProfileHero
        name={profile && profile.full_name}
        title={profile && profile.professional_title}
        avatarUrl={profile && profile.profile_picture_url}
        profileType="talent"
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
          {/* Hire Now CTA */}
          {is_authenticated && (
            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8">;
              <div className="flex flex - col items - center text - center">;
                <h3 className="text - xl font - bold text - white mb - 2">Ready to collaborate?</h3>;
                <p className="text - zion - slate mb - 6 max - w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}>;
                      <MessageSquare className="mr-2 h-5 w-5" />;
                      Message;
                    </Button>;
                  )}
                </div>;
              </div>;
            </div>;
          )}
=======
                </p>;
                <div className="flex flex - wrap gap - 4 justify - center">;
                  <Button;
                    size="lg";
                    className="bg - zion - purple text - white hover:bg - zion - purple - dark";
                    on_click={onRequestHire}
                  >;
                    <Handshake className="mr - 2 h - 5 w - 5" />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (
                    <Button;
                      size="lg";
                      variant="outline";
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
                      on_click={onMessageTalent}
                    >;
                      <MessageSquare className="mr - 2 h - 5 w - 5" />;
                      Message;
                    </Button>)}
                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
