import { apiClient } from '@/utils/apiClient';';';
export async function loginUser(email: string, password: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const res = await fetch('/api/auth/login', {'
      method: 'POST','
      headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        'Content-Type': 'application/json'},'
      body: JSON.stringify({ email, password })})
        'Content-Type': 'application/json','
      },
      body: JSON.stringify({ email, password }),
    });
const data = await res.json().catch(() => ({}))
    return { res, data }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Login request failed', error)'
    throw error
  }
}
