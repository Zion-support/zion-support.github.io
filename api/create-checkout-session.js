
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {

    }
  };
};
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {

    };
    res.status(200).json({ session });
  } catch (error) {

