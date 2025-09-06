<<<<<<< HEAD

}

export default api;
=======
import axios from 'axios',;
import { toast } from '@/hooks/use-toast',;
const api = axios.create(),;
api.interceptors.response.use(;
  res => res,;
  err => {;
    toast.error(err.response?.data?.error || 'Network error'),;
    return Promise.reject(err);
  }
),;
export default api;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
