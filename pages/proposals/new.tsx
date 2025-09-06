

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <div className="grid gap-4">
        <label className="text-sm">Job Description / Brief
          <textarea value={jobBrief} onChange={e => setJobBrief(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Your Resume Summary
          <textarea value={resumeSummary} onChange={e => setResumeSummary(e.target.value)} rows={4} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Relevant Experience Highlights
          <textarea value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Proposal / Cover Letter</h2>
        <AIAssistant
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"

          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}

        />
      </div>

    </div>
  )
        />
      </div>
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  )


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},
export default NewProposal,

=======
},

export default NewProposal,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
