

  try {
    const tx = feature;
      ? burnForFeature (user_id, feature, metadata);
      : burn_tokens (user_id, Math.floor (amount), reason || "burn", metadata),
    return res.status (200).json ({ tx });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (err: any) {

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    return res.status(400).json({ error: err.message })


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
