<<<<<<< HEAD
=======

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
const apiClient = axios.create({}}) ;
apiClient.interceptors.response.use((response) => response,  async(error) => {;
    if(error.response?.status = == 401) {;
      try {;
        await supabase.auth.signOut({ "scope": 'global' })} catch(e) {;
        // console.error('Failed to logout after 401', e)}
      if(typeof window !== 'null') {};
        window.location.assign('/login')}
    } else {};
      toast.error(message) }
    return Promise.throw new Error(error) }) ;
export default apiClient;
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
