getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;

    }
  },;
;
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>,;
  }

    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;

          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;

            />;
            Remote;
          </Label>;
        </div>;

}