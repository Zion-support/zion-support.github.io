<<<<<<< HEAD
import axios from 'axios',;
import { toast } from '@/hooks/use-toast',;
;
const api = axios.create(),;
;
api.interceptors.response.use(;
  res => res,;
  err => {;
    toast.error(err.response?.data?.error || 'Network error'),;
    return Promise.reject(err),;
  }
),;
;
export default api,;
=======
import axios from 'axios',
import { toast } from '@/hooks/use-toast',
const api = axios.create(),

api.interceptors.response.use(
  res => res,
  err => {
    toast.error(err.response?.data?.error || 'Network error'),
    return Promise.reject(err)
  }
),
export default api,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
