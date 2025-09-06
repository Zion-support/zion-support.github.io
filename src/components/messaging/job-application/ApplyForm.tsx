    } catch (error) {
      logErrorToProduction('Job application failed', error);
      toast({
        title: 'Application failed',
        description: 'There was an error submitting your application.',
        variant: 'destructive',
      });
    } finally {
          <MessageTab
            message={message}
            onMessageChange={setMessage}
            job={job}
          />
        </TabsContent>

