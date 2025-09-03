# API Documentation

## Overview

This document describes the API endpoints and their usage.

## Base URL

```
https://ziontechgroup.com/api
```

## Authentication

Most endpoints require authentication. Include your API key in the request headers:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Health Check

Check the health of the API.

```
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0"
}
```

### Contact Form

Submit a contact form.

```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Error Handling

All errors follow a consistent format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}
```

## Rate Limiting

API requests are rate limited to 100 requests per minute per IP address.

## Status Codes

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error