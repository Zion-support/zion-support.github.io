 const InitPage: NextPage = () => {
  const [state, setState] = useState<DeployFormState> ({
  instanceName: '', defaultLanguage: 'en', deploymentRegion: 'us-east-1', tokenActivation: true, governanceMode: 'Hybrid', branding: {
  logoUrl: '', primaryColor: '#4f46e5', secondaryColor: '#0ea5e9', subdomain: '' 
};
modules: defaultModules;
bonusModules: defaultBonus 
});
const [submitting, setSubmitting] = useState (false);
const [result, setResult] = useState<any> (null);
const [error, setError] = useState<string | null> (null);
<div> <h1 className="text-2xl font-bold" >Genesis Deploy</h1> <p className="text-sm text-gray-600 dark:text-gray-400" >Initialize a full Zion OS instance from a single control panel.</p> </div> <option>Admin</option> <option>DAO</option> <option>Hybrid</option> </select> </div> </section> <section className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </label>) ) 
}</div> </div> </label>) ) 
}</div> </div> </section> </div>) 
}</div>) 
};
export default InitPage;
