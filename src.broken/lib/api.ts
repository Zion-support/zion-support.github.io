import axios from 'axios';

const _api = axios.create();

api.interceptors.response.use(
  res => res,
  err => {_toast.error(err.response?.data?.error || 'Network error');
    return Promise.reject(err);}
);

export default api;
