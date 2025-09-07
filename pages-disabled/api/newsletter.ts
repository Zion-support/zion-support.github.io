}
  interests?: string[];}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {}
  if (req.method !== 'POST') {}
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {}
    const { email, name, interests }: NewsletterData = req.body
    // Validate email
if (!email) {
      return res.status(400).json({ }
        message: 'Email is required' }
      })
    }

    // Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ }
        message: 'Invalid email format' }
      })
    }

    // Here you would typically:
    // 1. Add to newsletter database
    // 2. Send confirmation email
    // 3. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 4. Track subscription analytics
    // Log subscription data (in production, use proper logging service)
    const subscriptionData = {
      email,
      name,
      interests,
      timestamp: new Date().toISOString()}
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress}
    }
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console;}
console.log('Newsletter subscription:', subscriptionData);}
    }

    // Simulate processing time
await new Promise(resolve => setTimeout(resolve, 500))
    res.status(200).json({ 
      message: 'Successfully subscribed to our newsletter!'}
  success: true}
    })
  } catch (error) {
    // Log error (in production, use proper logging service)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console;}
console.error('Newsletter subscription error:', error);}
    }
    res.status(500).json({ 
      message: 'Internal server error. Please try again later.'}
  success: false}
    })
  }
}