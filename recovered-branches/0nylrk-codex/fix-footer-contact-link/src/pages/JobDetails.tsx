  const { job, isLoading, error } = useJobDetails(jobId);
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const { isWhitelabel, brandName } = useWhitelabel();
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>;
      </div>;
    );
  }
    return (
      <>;
        <Header />;
        <div className="container mx-auto px-4 py-16 text-center">;
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>;
          <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>;
          <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>;
        </div>;
        <Footer />;
      </>;
    );
  }
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${jobId}`));
      return;
    }
                        {skill}
                      </Badge>;
                    ))}
                    onClick={handleApply}
                    disabled={isOwnJob}>;
                    Apply Now;
                  </Button>;
                )}
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
      <Footer />;
      {/* Job application modal */}
      {job && (;
        <ApplyToJobModal
          job={{
          }}
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />;
      )}
=======
      {/* Job application modal */}
      {job && (
        <ApplyToJobModal;
          job={{
            id: job.id,
            title: job.title,
            description: job.description,
            company_name: job.company_name || "Company",
            budget: job.budget,
            client_id: job.client_id;
          }}
          is_open={isApplyModalOpen}
          on_close={() => setIsApplyModalOpen (false)}
        />)}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
