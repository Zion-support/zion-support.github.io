exports.handler = async function (event, context) {
  try {

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Test function working correctly',
        timestamp: new Date().toISOString(),
        event: event,
        context: {
          awsRequestId: context.awsRequestId,
          functionName: context.functionName
        }
      }),
      headers: {'Content-Type': 'application/json'}
    };
  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Test function failed',
        message: error.message,
        timestamp: new Date().toISOString()
      }),
      headers: {'Content-Type': 'application/json'}
    };
  }
};
