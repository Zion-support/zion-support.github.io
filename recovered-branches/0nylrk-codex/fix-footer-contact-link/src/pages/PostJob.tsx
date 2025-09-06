  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();

    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }
            <CardDescription>;
              Fill out the form below to post your job and find the perfect talent.;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <JobPostingForm />;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
      {/* Add extra bottom padding on mobile to account for the bottom nav */}
=======
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
