// comment;
export default function handler() {

  const healthCheck = {}
  try {
    res.status(200).json(healthCheck);
  } catch() {

    healthCheck.message = "ERROR";
    res.status(503).json(healthCheck);
  }
