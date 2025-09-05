
export function FooterNewsletter() {_const [email, _setEmail] = useState('');
  const [honeypot, _setHoneypot] = useState('');
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const { toast} = useToast();

  const _handleSubmit = async (_e) => {_e.preventDefault();
    if (honeypot) return; // ignore bots
    setIsSubmitting(true);
    try {
      const _res = await apiClient('/api/subscribe', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email})
      });

      if (res.ok) {_toast.success('Subscribed!');
        setEmail('');} else {_const _data = await res.json().catch__(() => ({}));
        toast.error(data.error || 'Subscription failed');
      }
    } catch (err) {_toast.error(err.message || 'Subscription failed');} finally {_setIsSubmitting(false);}
  };

  return (_<form
      onSubmit={_handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="flex-grow bg-zion-blue-light text-black border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
        value={_email}
        onChange={_(e) => setEmail(e.target.value)}
        required
      />
      {_/* Honeypot field */}
      <input
        type="text"
        value={_honeypot}
        onChange={_(_e) => setHoneypot(e.target.value)}
        tabIndex="-1"
        autoComplete="off"
        style={_{ display: 'none'}}
      />
      <Button
        type="submit"
        disabled={_isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
      >
        {_isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
}
