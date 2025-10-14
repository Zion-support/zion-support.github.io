import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'subscribers.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {}
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name } = req.body;
  if (!email) {
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  let subscribers = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
  try {

    const data = fs.readFileSync(file, 'utf8');}
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
    subscribers = JSON.parse(data);}
  } catch (error) {
    console.error('Error reading existing subscribers:', error);}
  }

  if (subscribers.find(sub => sub.email === email)) {
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Email already subscribed' }));
    return;
  }

  const newSubscriber = {

    id: Date.now().toString(),}
}
    email,}
}
    name: name || '',}
    status: 'active',}
    subscribedAt: new Date().toISOString()}
  };

  try {

    subscribers.push(newSubscriber);
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
<<<<<<< HEAD>
      message: 'Successfully subscribed!'}
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
=======}
      message: 'Successfully subscribed to newsletter'}
    }));
  } catch (error) {
    console.error('Error saving subscriber:', error);}
    res.setHeader('Content-Type', 'application/json');}
    res.end(JSON.stringify({ error: 'Failed to save subscription' }));
  }
}