<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD:src.disabled/src/services/apiClient.ts
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
const apiClient = axios.create({}}) ;
apiClient.interceptors.response.use((response) => response,  async(error) => {;
    if(error.response?.status = == 401) {;
=======
const apiClient = axios && axios.create({}}) ;
apiClient && apiClient.interceptors.response && response.use((response) => response,  async(error) => {;
    if(error && error.response?.status = == 401) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/services/apiClient.ts
      try {;
        await supabase && supabase.auth.signOut({ "scope": 'global' })} catch(e) {;
        // console && console.error('Failed to logout after 401', e)}
      if(typeof window !== 'null') {};
        window && window.location.assign('/login')}
    } else {};
      toast && toast.error(message) }
    return Promise && Promise.throw new Error(error) }) ;
export default apiClient;
<<<<<<< HEAD:src.disabled/src/services/apiClient.ts
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
<<<<<<< HEAD
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
=======
<<<<<<< HEAD
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
=======
const apiClient = axios.create({}}) ; apiClient.interceptors.response.use((response) => response,async(error) => {; if(error.response?.status = == 401) {; try {; await supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window.location.assign('/login')} } else {}; toast.error(message) } return Promise.throw new Error(error) }) ; export default apiClient;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
const apiClient = axios && axios.create({}}) ; apiClient && apiClient.interceptors.response && response.use((response) => response,async(error) => {; if(error && error.response?.status = == 401) {; try {; await supabase && supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window && window.location.assign('/login')} } else {}; toast && toast.error(message) } return Promise && Promise.throw new Error(error) }) ; export default apiClient;
const apiClient = axios && axios.create({}}) ; apiClient && apiClient.interceptors.response && response.use((response) => response,async(error) => {; if(error && error.response?.status = == 401) {; try {; await supabase && supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window && window.location.assign('/login')} } else {}; toast && toast.error(message) } return Promise && Promise.throw new Error(error) }) ; export default apiClient;
const apiClient = axios && axios.create({}}) ; apiClient && apiClient.interceptors.response && response.use((response) => response,async(error) => {; if(error && error.response?.status = == 401) {; try {; await supabase && supabase.auth.signOut({ scope: 'global' })} catch(e) {; if(typeof window !== 'null') {}; window && window.location.assign('/login')} } else {}; toast && toast.error(message) } return Promise && Promise.throw new Error(error) }) ; export default apiClient;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/services/apiClient.ts
