  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true})}
        </p>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>

    setIsSubmitting(true);
    setError(null);
      if (success) {;"

        toast && toast.success("Your application has been submitted!");
        if (onSuccess) {;
          onSuccess();
        }
      }
    } catch (err: any) {;"
      setError(err && err.message || "Failed to submit application"),;"
      toast && toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };


            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt-1";
          />;
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;


