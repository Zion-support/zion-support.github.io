

  }
  try {
    const summary = getWalletSummary (user_id);
    return res.status (200).json (summary);
  } catch (err: any) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

