exports.handler = async function(event, context) {
  const path = event.path;
  
  // Set proper MIME types based on file extension
  let contentType = 'text/plain';
  
  if (path.endsWith('.js')) {
    contentType = 'application/javascript';
  } else if (path.endsWith('.css')) {
    contentType = 'text/css';
  } else if (path.endsWith('.svg')) {
    contentType = 'image/svg+xml';
  } else if (path.endsWith('.ico')) {
    contentType = 'image/x-icon';
  } else if (path.endsWith('.png')) {
    contentType = 'image/png';
  } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
    contentType = 'image/jpeg';
  } else if (path.endsWith('.gif')) {
    contentType = 'image/gif';
  } else if (path.endsWith('.webp')) {
    contentType = 'image/webp';
  } else if (path.endsWith('.json')) {
    contentType = 'application/json';
  } else if (path.endsWith('.xml')) {
    contentType = 'application/xml';
  } else if (path.endsWith('.pdf')) {
    contentType = 'application/pdf';
  }
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*'
    },
    body: 'MIME type handler'
  };
};