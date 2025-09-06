 const partners: Partner[] = [ {
  name: 'Gov Partner' 
};
{
  name: 'Venture Partner' 
};
{
  name: 'University Partner' 
}];
const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
setSubmitting (true);
setResult (null);
try {
  const res = await fetch ('/api/summit/register', {
  method: 'POST';
headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  ...form, source: 'summit-page' 
}) 
});
const data = await res.json ();
if (!res.ok) throw new Error (data?.error || 'Failed');
setResult ({
  ok: true 
});
setForm ({
  name: '', email: '', role: '', country: '' 
}) 
}catch (err: any) {
  setResult ({
  error: err?.message || 'Unexpected error' 
}) 
}finally {
  setSubmitting (false) 
}
};
if (platform === 'youtube') {
  return (<iframe className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800" src= {
  `https://www.youtube.com/embed/$ {
  embedId 
}` 
}allowFullScreen />) 
}if (platform === 'twitch') {
  return (<iframe allowFullScreen />) 
}return (<iframe allowFullScreen />) 
};
return (<> <Head> <title>Zion Global Summit 2025 — AI, Talent, Trust</title> <meta name="description" content="Zion Global Summit: AI, Talent, Trust — Globalized" /> </Head> <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue" > <div className="max-w-4xl" > <p className="uppercase tracking-widest text-neon-blue" >Zion Global Summit 2025</p> <h1 className="mt-2 text-3xl md:text-5xl font-extrabold" >AI, Talent, Trust — Globalized</h1> <p className="mt-4 text-white/80" >Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual + In‑Person) </p> <div className="mt-6 flex flex-wrap gap-3" > <a href="#register" className="inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue" >Register</Link> <a href="#livestream" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10" >Livestream</Link> <a href="#agenda" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10" >Agenda</Link> </div> </div> </section> <div className="grid md:grid-cols-3 gap-6 mt-8" > <section id="agenda" className="md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black" > <h2 className="text-2xl font-bold mb-4" >Agenda</h2> <ol className="space-y-3 list-decimal list-inside" > <li>Opening Keynote — Launching Zion Protocol</li> <li>Panel 1 — The Future of Digital Nations</li> <li>Panel 2 — ZionDAO in Action</li> <li>Demo — ZionGPT Live</li> <li>Featured Speaker — Founder</li> </ol> </section> <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black" > <h2 className="text-2xl font-bold mb-4" >Event Info</h2> <ul className="space-y-2" > <li><span className="font-medium" >Date:</span> Nov 12, 2025</li> <li><span className="font-medium" >Time:</span> 16:00 UTC</li> <li><span className="font-medium" >Location:</span> Hybrid (Virtual + In‑Person) </li> <li><span className="font-medium" >Tagline:</span> AI, Talent, Trust — Globalized</li> </ul> </section> </div> </div> </div>) ) 
}</div> </section> <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black" > <div className="flex items-center justify-between" > <h2 className="text-2xl font-bold" >Partners</h2> <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800" >Become a Sponsor</Link> </div> </div>) ) 
}</div> </section> <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black" > <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4" > <h2 className="text-2xl font-bold" >Livestream</h2> <div className="flex flex-wrap items-center gap-2" > <select > <option value="youtube" >YouTube</option> <option value="twitch" >Twitch</option> <option value="twitter" >Twitter</option> </select> <input <div> <label className="block text-sm mb-1" >Name</label> <input required /> </div> <div> <label className="block text-sm mb-1" >Email</label> <input type="email" required /> </div> <div> <label className="block text-sm mb-1" >Role</label> <input required /> </div> <div> <label className="block text-sm mb-1" >Country</label> <input required /> </div> <div className="md:col-span-2 flex items-center gap-3" > <button > {
  submitting ? 'Submitting...': 'Submit Registration' 
}</button> </div> </form> </section> </section> </>) 
}