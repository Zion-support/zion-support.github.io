exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.version,
    }),
  };
};
