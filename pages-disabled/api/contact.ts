<<<<<<<< HEAD:pages-disabled/api/contact.ts
}
  message: string;}
========
import { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
<<<<<<<< HEAD:pages-disabled/api/contact.ts
) {}
  if (req.method !== 'POST') {}
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {}
    const { name, email, company, message }: ContactFormData = req.body
    // Validate required fields
if (!name || !email || !message) {
      return res.status(400).json({ }
        message: 'Missing required fields: name, email, and message are required' }
      })
    }

    // Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ }
        message: 'Invalid email format' }
      })
========
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply to user
<<<<<<<< HEAD:pages-disabled/api/contact.ts
    // For now, we'll just log the data and return success
    // In production, you would save this to a database
const submissionData = {
========

    // For now, we'll just log the data and return success
    // In production, you would save this to a database
    const submissionData = {
>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
      name,
      email,
      company,
      message,
<<<<<<<< HEAD:pages-disabled/api/contact.ts
      timestamp: new Date().toISOString()}
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress}
    }
========
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };
    
>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
    // Log to server logs (in production, use proper logging service)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Contact form submission:', submissionData);
    }

    // Simulate processing time
<<<<<<<< HEAD:pages-disabled/api/contact.ts
await new Promise(resolve => setTimeout(resolve, 1000))
    res.status(200).json({ 
      message: 'Thank you for your message! We will get back to you soon.'}
  success: true}
    })
========
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ 
      message: 'Thank you for your message! We will get back to you soon.',
      success: true
    });

>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
  } catch (error) {
    // Log error (in production, use proper logging service)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Contact form error:', error);
    }
    res.status(500).json({ 
<<<<<<<< HEAD:pages-disabled/api/contact.ts
      message: 'Internal server error. Please try again later.'}
  success: false}
    })
========
      message: 'Internal server error. Please try again later.',
      success: false
    });
>>>>>>>> origin/main:temp-disabled/pages-backup/api/contact.ts
  }
}