
}
};
const handleSave = (e) => {
  e.stopPropagation ();
toast.info ('Log in to save favorites');
navigate (`/login?next=$ {
  encodeURIComponent (location.pathname + location.search) 
}`);
