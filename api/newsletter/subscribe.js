const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;}
  return emailRegex.test(email);}
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {}
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

const { email } = req.body;  if (!email) {
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  if (!isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Invalid email format' }));
    return;
  }

  try {

>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    console.log('Newsletter subscription:', email);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ }
}
} catch (error) {

  console.error('Error:', error);}
}
}
}
} catch (error) {
}
  console.error('Error:', error);}
}
}
      success: true, }
      message: 'Successfully subscribed to newsletter' }
    }));
  } catch (error) {

<<<<<<< HEAD>
    console.error('Newsletter subscription error:', error);    res.setHeader('Content-Type', 'application/json');
=======
    console.error('Newsletter subscription error:', error);}
}
    res.setHeader('Content-Type', 'application/json')}
}
    res.end(JSON.stringify({ }
      error: 'Failed to subscribe to newsletter',}
      details: process.env.NODE_ENV === 'development' ? error.message : undefined}
    }));
  }
}