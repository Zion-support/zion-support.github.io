// comment;
export default function handler(req, res) {;
  const healthCheck = {};
  try {;
    res.status(200).json(healthCheck);
} catch (error) {;
    healthCheck.message = "ERROR";
    res.status(503).json(healthCheck);
}
}