// Simple health check function without Netlify dependencies
export const handler = async (event: any, context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Health check successful',
      timestamp: new Date().toISOString()
    })
  }};