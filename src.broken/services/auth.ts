import { apiClient } from '@/utils/apiClient';';';
export async function register(name: string, email: string, password: string) {;
const res = await apiClient('/api/auth/register', {'
    method: 'POST','
    headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      'Content-Type': 'application/json'},'
    body: JSON.stringify({ name, email, password })})
      'Content-Type': 'application/json','
    },
    body: JSON.stringify({ name, email, password }),
  });
const data = await res.json().catch(() => ({}))
  return { res, data }
}
