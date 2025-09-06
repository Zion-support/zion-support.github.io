  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })
  };
}
