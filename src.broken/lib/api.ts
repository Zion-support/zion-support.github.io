import axios from 'axios';
import { toast } from '@/hooks/use-toast';
const api = axios.create($2);
api.interceptors.response.use($2);
    return Promise.reject(err)
  }
),

export default api,
