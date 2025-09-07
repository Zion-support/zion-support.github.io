
  }

  try {
    const data = fs.readFileSync($2);
    res.status(200).json(JSON.parse(data))
  } catch (e) {

