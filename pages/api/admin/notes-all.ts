  const isAdmin = true; // Mock implementation
  return res.status(200).json({ notes: getAllNotes() });
}
