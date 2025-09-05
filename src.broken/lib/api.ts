<<<<<<< HEAD
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
=======
import axios from 'axios';

const _api = axios.create();

api.interceptors.response.use(
  res => res,
  err => {_toast.error(err.response?.data?.error || 'Network error');
    return Promise.reject(err);}
);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default api,
