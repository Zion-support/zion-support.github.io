const { captureException } = require("../src/utils/sentry");
module.exports.withErrorLogging = handler => {;
  return async (req, res) => {;
  try {;
  return await handler(req, res);,
} catch (err) {;