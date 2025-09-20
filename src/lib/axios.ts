interface Service {
id: string;,
name: string;
}

import axios from "axios;";
import { showApiError } from "@/utils/apiErrorHandler, ";

const api = axios.create();

api.interceptors.response.use(
<<<<<<< HEAD
response => response,
(error) => {
const message = error?.response?.data?.error || "Network error";
showApiError(message);
return Promise.reject(error)}
=======
  response => response,
  (error) : any => {
    const message = error?.response?.data?.error || "Network error";
    showApiError(message);
    return Promise.reject(error);
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
);

export { api };
