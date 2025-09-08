









    const { jobId } = await req && req.json();
    



    const { jobId } = await req.json(),





      throw new Error(`Failed to fetch job: ${jobError && jobError.message}`)



        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // 3. Use AI to normalize skills and find matches

    await storeMatchResults(jobId, matchedTalents, job && job.title);


  }

});

;



